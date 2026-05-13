// const SEO_API_BASE_URL = 'http://localhost:4000';
const SEO_API_BASE_URL = 'https://seeds.seedsofinnocens.com';

// Same caching/timeout discipline as utils/seoMetadata.js. The previous
// `cache: 'no-store'` made every page render block on a remote API call.
const SEO_REVALIDATE_SECONDS = 300;
const SEO_FETCH_TIMEOUT_MS = 2500;

function fetchWithTimeout(url, options = {}, timeoutMs = SEO_FETCH_TIMEOUT_MS) {
  if (typeof AbortController === 'undefined') {
    return fetch(url, options);
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => {
    clearTimeout(timer);
  });
}

function normalizePageUrl(value = '') {
  const trimmed = String(value || '').trim();
  if (!trimmed || trimmed === '/') return '/';
  return trimmed.replace(/\/+$/, '');
}

function parseAttributes(attributeString = '') {
  const attrs = {};
  const attrRegex = /([^\s=/>]+)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;

  while ((match = attrRegex.exec(attributeString))) {
    const attrName = match[1];
    const attrValue = match[3] ?? match[4] ?? match[5] ?? '';
    attrs[attrName] = attrValue;
  }

  return attrs;
}

function parseRawHeadTags(rawHeadTags = '') {
  const tags = [];
  const input = String(rawHeadTags || '');
  const tagRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>|<meta\b([^>]*)\/?>|<link\b([^>]*)\/?>/gi;
  let match;
  while ((match = tagRegex.exec(input))) {
    if (match[1] != null) {
      tags.push({
        type: 'script',
        attrs: parseAttributes(match[1]),
        content: match[2] || '',
      });
      continue;
    }

    if (match[3] != null) {
      tags.push({
        type: 'meta',
        attrs: parseAttributes(match[3]),
      });
      continue;
    }

    if (match[4] != null) {
      tags.push({
        type: 'link',
        attrs: parseAttributes(match[4]),
      });
    }
  }

  return tags;
}

async function fetchRawHeadTagsForPath(pageUrl) {
  const response = await fetchWithTimeout(
    `${SEO_API_BASE_URL}/api/seo/resolved?pageUrl=${encodeURIComponent(pageUrl)}`,
    {
      method: 'GET',
      next: { revalidate: SEO_REVALIDATE_SECONDS, tags: ['seo'] },
    }
  ).catch(() => null);

  if (!response?.ok) return '';
  const payload = await response.json().catch(() => null);
  if (!payload?.ok || !payload?.data) return '';
  return payload.data.rawHeadTags || '';
}

export async function getParsedRawHeadTagsForPath(pathname = '/') {
  const pageUrl = normalizePageUrl(pathname);
  const rawHeadTags = await fetchRawHeadTagsForPath(pageUrl);
  if (!rawHeadTags) return [];

  const parsedTags = parseRawHeadTags(rawHeadTags);
  return parsedTags;
}

export default async function DynamicRawHeadTags({ pathname = '/' }) {
  const parsedTags = await getParsedRawHeadTagsForPath(pathname);
  if (!parsedTags.length) return null;

  return (
    <>
      {parsedTags.map((tag, index) => {
        const key = `${tag.type}-${index}`;
        if (tag.type === 'script') {
          return <script key={key} {...tag.attrs} dangerouslySetInnerHTML={{ __html: tag.content }} />;
        }
        if (tag.type === 'meta') {
          return <meta key={key} {...tag.attrs} />;
        }
        if (tag.type === 'link') {
          return <link key={key} {...tag.attrs} />;
        }
        return null;
      })}
    </>
  );
}
