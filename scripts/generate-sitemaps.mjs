import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = path.join(projectRoot, '.next', 'prerender-manifest.json');
const publicDir = path.join(projectRoot, 'public');
const siteOrigin = 'https://www.seedsofinnocens.com';
const lastModified = new Date().toISOString().slice(0, 10);

console.log('Creating a fresh production build before updating sitemaps...');
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

if (!fs.existsSync(manifestPath)) {
  throw new Error('Production build completed, but the route manifest was not created.');
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const excludedRoutes = new Set(['/favicon.ico', '/_not-found']);

const routes = Object.keys(manifest.routes)
  .filter((route) => !excludedRoutes.has(route))
  .filter((route) => !route.endsWith('.xml'))
  .filter((route) => !route.includes('['))
  .map((route) => (route === '/' ? route : `${route.replace(/\/+$/, '')}/`))
  .sort((left, right) => {
    if (left === '/') return -1;
    if (right === '/') return 1;
    return left.localeCompare(right);
  });

const uniqueRoutes = [...new Set(routes)];
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

const sitemapHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Seeds of Innocens Website Sitemap</title>
  <meta name="description" content="Complete sitemap for the Seeds of Innocens website.">
  <style>
    :root { color-scheme: light; font-family: Arial, sans-serif; }
    body { max-width: 1100px; margin: 0 auto; padding: 32px 20px; color: #252525; }
    h1 { color: #7b2869; margin-bottom: 8px; }
    p { color: #555; margin-bottom: 28px; }
    ul { columns: 2; column-gap: 36px; padding-left: 22px; }
    li { break-inside: avoid; margin: 0 0 10px; }
    a { color: #6b225c; overflow-wrap: anywhere; }
    a:hover, a:focus { color: #a23887; }
    @media (max-width: 720px) { ul { columns: 1; } }
  </style>
</head>
<body>
  <main>
    <h1>Seeds of Innocens Sitemap</h1>
    <p>${urls.length} website pages</p>
    <ul>
${urls.map((url) => `      <li><a href="${url}">${url}</a></li>`).join('\n')}
    </ul>
  </main>
</body>
</html>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap_4691653.html'), sitemapHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap_index.html'), sitemapHtml, 'utf8');

console.log(`Updated 3 sitemap files with ${urls.length} unique URLs.`);
