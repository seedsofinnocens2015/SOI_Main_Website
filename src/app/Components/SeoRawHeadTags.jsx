import { cache } from 'react';
import { headers } from 'next/headers';
import { getSeoApiBaseUrl } from '../utils/seoApiBaseUrl';

const SCRIPT_RE = /<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi;

function pathnameToSeoPageUrl(pathname, basePath) {
  let p = pathname || '/';
  if (basePath && p.startsWith(basePath)) {
    p = p.slice(basePath.length) || '/';
  }
  if (p !== '/' && p.endsWith('/')) {
    p = p.replace(/\/+$/, '');
  }
  return p || '/';
}

function stripDocumentBreakers(html) {
  return String(html || '')
    .replace(/<\/?html[^>]*>/gi, '')
    .replace(/<\/?head[^>]*>/gi, '')
    .replace(/<\/?body[^>]*>/gi, '');
}

function stripStyleTags(html) {
  return String(html || '').replace(/<style\b[\s\S]*?<\/style>/gi, '');
}

function extractScripts(html) {
  const pieces = [];
  const re = new RegExp(SCRIPT_RE.source, 'gi');
  let m;
  while ((m = re.exec(html)) !== null) {
    pieces.push({ openAttrs: (m[1] || '').trim(), inner: m[2] ?? '' });
  }
  return pieces;
}

function removeAllScripts(html) {
  return String(html || '').replace(new RegExp(SCRIPT_RE.source, 'gi'), '');
}

function parseType(attrString) {
  const m = /\btype\s*=\s*(["'])((?:\\.|(?!\1).)*)\1/i.exec(attrString);
  return m ? m[2].trim() : undefined;
}

function parseSrc(attrString) {
  const m = /\bsrc\s*=\s*(["'])((?:\\.|(?!\1).)*)\1/i.exec(attrString);
  return m ? m[2].trim() : undefined;
}

function onlyMetaLinkAndComments(remainder) {
  const stripped = String(remainder || '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim();
  if (!stripped) return { ok: true, stripped: '' };
  const withoutTags = stripped.replace(/<(?:meta|link)\b[^>]*>/gi, '').replace(/\s+/g, '');
  if (withoutTags) return { ok: false, stripped: '' };
  return { ok: true, stripped };
}

function parseAttrString(attrPart) {
  const props = {};
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'=/>]+))/g;
  let m;
  while ((m = re.exec(attrPart)) !== null) {
    const key = m[1].toLowerCase();
    const val = m[3] ?? m[4] ?? m[5] ?? '';
    props[key] = val;
  }
  return props;
}

function parseVoidTagFromHtml(tagHtml) {
  const m = /<(\w+)\s([^>]*)\/?>/i.exec(String(tagHtml).trim());
  if (!m) return null;
  const name = m[1].toLowerCase();
  if (name !== 'meta' && name !== 'link') return null;
  return { name, attrs: parseAttrString(m[2] || '') };
}

function attrsToDomProps(attrs) {
  const out = {};
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'http-equiv') out.httpEquiv = v;
    else if (k === 'crossorigin') out.crossOrigin = v;
    else out[k] = v;
  }
  return out;
}

function extractMetaLinkTags(html) {
  const matches = String(html).match(/<(?:meta|link)\b[^>]*>/gi) || [];
  return matches.map((t) => parseVoidTagFromHtml(t)).filter(Boolean);
}

const fetchResolvedSeo = cache(async (pageUrl) => {
  const base = getSeoApiBaseUrl();
  const url = `${base}/api/seo/resolved?pageUrl=${encodeURIComponent(pageUrl)}`;
  const response = await fetch(url, { method: 'GET', cache: 'no-store' });
  if (!response.ok) return null;
  const payload = await response.json().catch(() => null);
  if (!payload?.ok || !payload?.data) return null;
  return payload.data;
});

export default async function SeoRawHeadTags() {
  const headerList = headers();
  const pathname = headerList.get('x-seo-pathname');
  if (!pathname) return null;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const pageUrl = pathnameToSeoPageUrl(pathname, basePath);
  const seo = await fetchResolvedSeo(pageUrl);
  const raw = seo?.rawHeadTags;
  if (raw == null || !String(raw).trim()) return null;

  let clean = stripDocumentBreakers(String(raw));
  clean = stripStyleTags(clean);

  const scripts = extractScripts(clean);
  const remainder = removeAllScripts(clean);
  const metaCheck = onlyMetaLinkAndComments(remainder);
  const metaLinks = metaCheck.ok && metaCheck.stripped ? extractMetaLinkTags(metaCheck.stripped) : [];

  return (
    <>
      {scripts.map((s, i) => {
        const src = parseSrc(s.openAttrs);
        const async = /\basync\b/i.test(s.openAttrs);
        const defer = /\bdefer\b/i.test(s.openAttrs);
        const type = parseType(s.openAttrs);
        if (src) {
          return <script key={`seo-raw-src-${i}`} src={src} async={async || undefined} defer={defer || undefined} />;
        }
        return (
          <script
            key={`seo-raw-inline-${i}`}
            type={type || 'text/javascript'}
            dangerouslySetInnerHTML={{ __html: s.inner }}
          />
        );
      })}
      {metaLinks.map((tag, i) =>
        tag.name === 'meta' ? (
          <meta key={`seo-raw-meta-${i}`} {...attrsToDomProps(tag.attrs)} />
        ) : (
          <link key={`seo-raw-link-${i}`} {...attrsToDomProps(tag.attrs)} />
        ),
      )}
    </>
  );
}
