import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = path.join(projectRoot, '.next', 'prerender-manifest.json');
const appPathsManifestPath = path.join(projectRoot, '.next', 'server', 'app-paths-manifest.json');
const publicDir = path.join(projectRoot, 'public');
const siteOrigin = 'https://www.seedsofinnocens.com';
const lastModified = new Date().toISOString().slice(0, 10);

const shouldBuild = process.argv.includes('--build');

if (shouldBuild || !fs.existsSync(manifestPath) || !fs.existsSync(appPathsManifestPath)) {
  console.log('Creating a fresh production build before updating sitemaps...');
  try {
    if (process.platform === 'win32') {
      execFileSync(process.env.ComSpec || 'C:\\Windows\\System32\\cmd.exe', ['/d', '/s', '/c', 'npm.cmd run build'], {
        cwd: projectRoot,
        stdio: 'inherit',
      });
    } else {
      execFileSync('npm', ['run', 'build'], {
        cwd: projectRoot,
        stdio: 'inherit',
      });
    }
  } catch (err) {
    console.warn('Production build had an issue, checking existing manifests...');
  }
}

const excludedRoutes = new Set(['/favicon.ico', '/_not-found']);
const routeSet = new Set();

// 1. App Router manifest (if exists)
if (fs.existsSync(appPathsManifestPath)) {
  try {
    const appPathsManifest = JSON.parse(fs.readFileSync(appPathsManifestPath, 'utf8'));
    Object.keys(appPathsManifest)
      .filter((route) => route.endsWith('/page'))
      .map((route) => route.replace(/\/\([^/]+\)/g, '').replace(/\/page$/, '') || '/')
      .filter((route) => !excludedRoutes.has(route) && !route.includes('['))
      .forEach((route) => routeSet.add(route === '/' ? '/' : `${route.replace(/\/+$/, '')}/`));
  } catch {}
}

// 2. Prerender manifest (if exists)
if (fs.existsSync(manifestPath)) {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    Object.keys(manifest.routes)
      .filter((route) => !excludedRoutes.has(route) && !route.endsWith('.xml') && !route.includes('['))
      .forEach((route) => routeSet.add(route === '/' ? '/' : `${route.replace(/\/+$/, '')}/`));
  } catch {}
}

// 3. Filesystem scan of src/app
try {
  const appDir = path.join(projectRoot, 'src', 'app');
  function walk(dir) {
    let files = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) files = files.concat(walk(full));
      else files.push(full);
    }
    return files;
  }
  const pageFiles = walk(appDir).filter((f) => /^page\.(js|jsx)$/.test(path.basename(f)));
  for (const f of pageFiles) {
    const rel = path.relative(appDir, path.dirname(f));
    const segs = rel.split(path.sep).filter(Boolean).filter((s) => !(s.startsWith('(') && s.endsWith(')')));
    const route = segs.length ? '/' + segs.join('/') : '/';
    if (!route.includes('[')) {
      routeSet.add(route === '/' ? '/' : `${route.replace(/\/+$/, '')}/`);
    }
  }
} catch {}

// 4. Dynamic blogs from blogs.json
try {
  const blogsPath = path.join(projectRoot, 'src', 'app', 'data', 'blogs.json');
  if (fs.existsSync(blogsPath)) {
    const data = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
    const blogs = Array.isArray(data) ? data : data.blogs || [];
    for (const b of blogs) {
      if (b.slug) {
        routeSet.add(`/blog/${b.slug.replace(/^\/+|\/+$/g, '')}/`);
      }
    }
  }
} catch {}

// 5. Existing sitemap.xml URLs
try {
  const xmlPath = path.join(publicDir, 'sitemap.xml');
  if (fs.existsSync(xmlPath)) {
    const xml = fs.readFileSync(xmlPath, 'utf8');
    const matches = [...xml.matchAll(/<loc>https:\/\/www\.seedsofinnocens\.com([^<]*)<\/loc>/g)];
    for (const m of matches) {
      const r = m[1] || '/';
      routeSet.add(r === '/' ? '/' : `${r.replace(/\/+$/, '')}/`);
    }
  }
} catch {}

const uniqueRoutes = [...routeSet].sort((left, right) => {
  if (left === '/') return -1;
  if (right === '/') return 1;
  return left.localeCompare(right);
});

const urls = uniqueRoutes.map((route) => `${siteOrigin}${route}`);

const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url, index) => `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${index === 0 ? 'daily' : 'weekly'}</changefreq>
    <priority>${index === 0 ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const SEO_API_BASE_URL = 'https://seeds.seedsofinnocens.com';

function cleanRoute(url) {
  let route = url.replace(siteOrigin, '');
  if (!route.startsWith('/')) route = '/' + route;
  return route;
}

function formatUrlToTitle(urlStr) {
  try {
    const parsed = new URL(urlStr);
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts.length === 0) return 'Home';
    const lastPart = parts[parts.length - 1];
    return lastPart
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  } catch {
    return urlStr;
  }
}

async function fetchWithTimeout(url, timeoutMs = 6000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function fetchSeoMetadata(route) {
  try {
    const res = await fetchWithTimeout(
      `${SEO_API_BASE_URL}/api/seo/resolved?pageUrl=${encodeURIComponent(route)}`,
      6000
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json?.ok ? json.data : null;
  } catch {
    return null;
  }
}

const MONGO_URI = 'mongodb://seo_panel:9315264682@ac-fv7uqzx-shard-00-00.wbfh1zj.mongodb.net:27017,ac-fv7uqzx-shard-00-01.wbfh1zj.mongodb.net:27017,ac-fv7uqzx-shard-00-02.wbfh1zj.mongodb.net:27017/?ssl=true&replicaSet=atlas-xlg8mn-shard-0&authSource=admin&appName=Cluster0';

async function loadSeoFromMongo() {
  try {
    const mongoPath = path.join(projectRoot, '..', 'SOI_Backend', 'node_modules', 'mongodb');
    if (!fs.existsSync(mongoPath)) return null;
    const { MongoClient } = await import(path.resolve(mongoPath, 'lib', 'index.js'));
    const client = new MongoClient(MONGO_URI, { serverSelectionTimeoutMS: 6000 });
    await client.connect();
    const db = client.db('test');
    const collections = await db.listCollections().toArray();
    const seoCols = collections.filter(c => c.name.startsWith('seo_'));
    const map = new Map();
    for (const c of seoCols) {
      const docs = await db.collection(c.name).find({}, {
        projection: { pageUrl: 1, pageTitle: 1, metaDescription: 1, ogTitle: 1, ogDescription: 1 }
      }).toArray();
      for (const d of docs) {
        if (d.pageUrl) {
          const norm = d.pageUrl.trim().replace(/\/+$/, '') || '/';
          const title = (d.pageTitle || d.ogTitle || '').trim();
          const desc = (d.metaDescription || d.ogDescription || '').trim();
          map.set(norm, { title, desc });
        }
      }
    }
    await client.close();
    // Also save/update cache file
    const cacheObj = Object.fromEntries(map.entries());
    fs.writeFileSync(path.join(projectRoot, 'scripts', 'seo-cache.json'), JSON.stringify(cacheObj, null, 2), 'utf8');
    return map;
  } catch (err) {
    return null;
  }
}

function loadSeoFromCache() {
  const cachePath = path.join(projectRoot, 'scripts', 'seo-cache.json');
  if (fs.existsSync(cachePath)) {
    try {
      const json = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
      const map = new Map();
      for (const [k, v] of Object.entries(json)) {
        map.set(k, v);
      }
      return map;
    } catch {
      return null;
    }
  }
  return null;
}

console.log('Loading SEO data from Database / Cache...');
let seoMap = await loadSeoFromMongo();
if (!seoMap) {
  seoMap = loadSeoFromCache() || new Map();
}
console.log(`Loaded ${seoMap.size} SEO records.`);

const results = urls.map((url) => {
  const route = cleanRoute(url);
  const normRoute = route.replace(/\/+$/, '') || '/';
  const seo = seoMap.get(normRoute);

  const title = (seo?.title || '').trim();
  const desc = (seo?.desc || '').trim();

  return {
    url,
    title: title || url, // If no meta title, show link itself
    description: desc,
  };
});

const escapeHtml = (str) =>
  String(str || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const hostName = 'www.seedsofinnocens.com';

// Group by folder / section
const rootItems = [];
const subfolderMap = new Map();

for (const item of results) {
  const parsed = new URL(item.url);
  const segments = parsed.pathname.split('/').filter(Boolean);

  if (segments.length <= 1) {
    rootItems.push(item);
  } else {
    const folderKey = `${siteOrigin}/${segments[0]}/`;
    if (!subfolderMap.has(folderKey)) {
      subfolderMap.set(folderKey, []);
    }
    subfolderMap.get(folderKey).push(item);
  }
}

const totalSubfolders = subfolderMap.size;
const subfolderPagesCount = results.length - rootItems.length;

const now = new Date();
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const pad = (n) => String(n).padStart(2, '0');
const formattedDate = `${now.getFullYear()}, ${monthNames[now.getMonth()]} ${now.getDate()} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

function renderListBlock(titleHtml, listItems) {
  const headerHtml = titleHtml ? `<div class="block-header">${titleHtml}</div>` : '';
  return `
    <div class="sitemap-block">
      ${headerHtml}
      <ul class="page-list">
        ${listItems
          .map(
            (it) => `
        <li class="page-item">
          <a class="page-title" href="${it.url}">${escapeHtml(it.title)}</a>
          ${it.description ? `<p class="page-desc">${escapeHtml(it.description)}</p>` : ''}
        </li>`
          )
          .join('')}
      </ul>
    </div>`;
}

let blocksHtml = renderListBlock('', rootItems);

const sortedFolders = Array.from(subfolderMap.keys()).sort();
for (const folder of sortedFolders) {
  const fItems = subfolderMap.get(folder);
  const folderHeaderTitle = `<a href="${folder}">${folder}</a> ${fItems.length} pages`;
  blocksHtml += renderListBlock(folderHeaderTitle, fItems);
}

const sitemapHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${hostName} HTML Site Map</title>
  <meta name="description" content="Complete sitemap for ${hostName} with page titles and meta descriptions.">
  <style>
    :root {
      color-scheme: light;
      font-family: Arial, Helvetica, sans-serif;
    }
    body {
      margin: 0;
      padding: 0;
      background-color: #faf9f9;
      color: #252525;
      font-size: 13.5px;
      line-height: 1.45;
    }
    .top-banner {
      background: #ffffff;
      border-bottom: 2px solid #7b2869;
      box-shadow: 0 1px 4px rgba(123, 40, 105, 0.08);
      text-align: center;
      padding: 12px 15px;
    }
    .top-banner h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      color: #7b2869;
    }
    .sub-bar {
      max-width: 1180px;
      margin: 0 auto;
      padding: 14px 15px 12px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      box-sizing: border-box;
    }
    .homepage-link {
      font-size: 14px;
      font-weight: 600;
      color: #7b2869;
      text-decoration: underline;
    }
    .homepage-link:hover {
      color: #aa328f;
    }
    .meta-info {
      text-align: right;
      font-size: 13px;
      color: #555555;
      line-height: 1.45;
    }
    .container {
      max-width: 1180px;
      margin: 0 auto 36px;
      padding: 0 12px;
      box-sizing: border-box;
    }
    .sitemap-block {
      background: #ffffff;
      border: 1px solid #ebdbe6;
      border-radius: 6px;
      margin-bottom: 18px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      overflow: hidden;
    }
    .block-header {
      background: #f7eef5;
      border-bottom: 1px solid #ebdbe6;
      padding: 7px 14px;
      font-size: 13.5px;
      color: #5a1c4d;
      font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace, Arial;
      font-weight: 600;
    }
    .block-header a {
      color: #7b2869;
      text-decoration: none;
    }
    .block-header a:hover {
      text-decoration: underline;
    }
    ul.page-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li.page-item {
      padding: 8px 14px 10px;
      border-bottom: 1px solid #f5eff3;
    }
    li.page-item:last-child {
      border-bottom: none;
    }
    a.page-title {
      font-size: 13.5px;
      color: #6b225c;
      text-decoration: underline;
      display: inline;
      font-weight: 600;
      line-height: 1.4;
    }
    a.page-title:hover {
      color: #a23887;
    }
    p.page-desc {
      margin: 3px 0 0;
      font-size: 12.5px;
      color: #555555;
      line-height: 1.45;
    }
    @media (max-width: 600px) {
      .sub-bar {
        flex-direction: column;
        gap: 6px;
      }
      .top-banner h1 {
        font-size: 17px;
      }
      .meta-info {
        text-align: left;
      }
    }
  </style>
</head>
<body>
  <header class="top-banner">
    <h1>${hostName} HTML Site Map</h1>
  </header>

  <div class="sub-bar">
    <a class="homepage-link" href="${siteOrigin}/">${hostName} Homepage</a>
    <div class="meta-info">
      <div>Last updated: ${formattedDate}</div>
      <div>Total pages: ${results.length}</div>
    </div>
  </div>

  <main class="container">
${blocksHtml}
  </main>
</body>
</html>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap.html'), sitemapHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap_4691653.html'), sitemapHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap_index.html'), sitemapHtml, 'utf8');

console.log(`Updated 4 sitemap files with ${urls.length} unique URLs (with Titles and Descriptions in Santosh-style list view).`);
