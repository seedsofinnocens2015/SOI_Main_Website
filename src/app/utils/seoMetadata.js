// const SEO_API_BASE_URL = 'http://localhost:4000';
const SEO_API_BASE_URL = 'https://seeds.seedsofinnocens.com';

// Hostinger caches the Next.js output. Refresh SEO every two minutes so panel
// edits appear automatically without forcing every page to render dynamically.
const SEO_REVALIDATE_SECONDS = 120;
// Hard timeout so a slow SEO API cannot stall the page render.
const SEO_FETCH_TIMEOUT_MS = 5000;

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

function toKeywords(metaKeyword = '') {
  return String(metaKeyword)
    .split(',')
    .map(keyword => keyword.trim())
    .filter(Boolean);
}

function toRobots(robotValue = '') {
  const normalized = String(robotValue).toLowerCase();
  if (!normalized) return undefined;

  return {
    index: !normalized.includes('noindex'),
    follow: !normalized.includes('nofollow'),
  };
}

function sanitizeOpenGraphType(value = '') {
  const normalized = String(value || '').trim().toLowerCase();
  const allowedTypes = new Set([
    'website',
    'article',
    'book',
    'profile',
    'music.song',
    'music.album',
    'music.playlist',
    'music.radio_station',
    'video.movie',
    'video.episode',
    'video.tv_show',
    'video.other',
  ]);

  return allowedTypes.has(normalized) ? normalized : undefined;
}

async function fetchResolvedSeo(pageUrl) {
  const response = await fetchWithTimeout(
    `${SEO_API_BASE_URL}/api/seo/resolved?pageUrl=${encodeURIComponent(pageUrl)}`,
    {
      method: 'GET',
      next: { revalidate: SEO_REVALIDATE_SECONDS, tags: ['seo'] },
    }
  ).catch(() => null);

  if (!response?.ok) return null;
  const payload = await response.json().catch(() => null);
  return payload?.ok && payload?.data ? payload.data : null;
}

function withoutEmptyValues(values = {}) {
  return Object.fromEntries(
    Object.entries(values).filter(([, value]) => value !== undefined && value !== null && value !== '')
  );
}

function buildMetadataFromSeo(seo) {
  if (!seo) return {};

  const keywords = toKeywords(seo.metaKeyword);
  const robots = toRobots(seo.robot);
  const ogImage = seo.ogImage || seo.itemImage || seo.twitterImageSrc || '';
  const openGraphType = sanitizeOpenGraphType(seo.ogType);
  const openGraph = {
    title: seo.ogTitle || seo.pageTitle || undefined,
    description: seo.ogDescription || seo.metaDescription || undefined,
    url: seo.ogUrl || seo.canonical || undefined,
    siteName: seo.ogSiteName || undefined,
    locale: seo.ogLocale || undefined,
    images: ogImage ? [{ url: ogImage }] : undefined,
    ...(openGraphType ? { type: openGraphType } : {}),
  };

  return {
    title: seo.pageTitle || undefined,
    description: seo.metaDescription || undefined,
    keywords: keywords.length ? keywords : undefined,
    robots,
    alternates: withoutEmptyValues({
      canonical: seo.canonical || undefined,
      languages: seo.alternate ? { 'x-default': seo.alternate } : undefined,
    }),
    authors: seo.author ? [{ name: seo.author }] : undefined,
    openGraph,
    twitter: {
      card: seo.twitterCard || undefined,
      site: seo.twitterSite || undefined,
      creator: seo.twitterCreator || undefined,
      title: seo.twitterTitle || seo.ogTitle || seo.pageTitle || undefined,
      description: seo.twitterDescription || seo.ogDescription || seo.metaDescription || undefined,
      images: seo.twitterImageSrc ? [seo.twitterImageSrc] : ogImage ? [ogImage] : undefined,
    },
    other: withoutEmptyValues({
      news_keywords: seo.newsKeywords || undefined,
      abstract: seo.abstract || undefined,
      'DC.source': seo.dcSource || undefined,
      'DC.title': seo.dcTitle || undefined,
      'DC.subject': seo.dcKeywords || undefined,
      'DC.description': seo.dcDescription || undefined,
      copyright: seo.copyright || undefined,
    }),
  };
}

async function getSeoMetadata({ pageUrl, hierarchyCandidates = [[]] }) {
  // Keep the argument for existing page callers; the resolved API safely finds
  // the latest row even if a panel hierarchy label changes.
  void hierarchyCandidates;
  const seo = await fetchResolvedSeo(pageUrl).catch(() => null);
  return buildMetadataFromSeo(seo);
}

export { getSeoMetadata, fetchResolvedSeo };
