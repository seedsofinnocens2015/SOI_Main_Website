// const SEO_API_BASE_URL = 'http://localhost:4000';
const SEO_API_BASE_URL = 'https://seeds.seedsofinnocens.com';

// Cache SEO responses on the server for 5 minutes to dramatically reduce TTFB.
// Without this, every page render performs a slow external API call and kills FCP/LCP.
const SEO_REVALIDATE_SECONDS = 300;
// Hard timeout so a slow SEO API cannot stall the page render.
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

function hasConfiguredSeo(seo = {}) {
  return Boolean(
    seo.pageTitle ||
      seo.metaDescription ||
      seo.metaKeyword ||
      seo.ogTitle ||
      seo.twitterTitle
  );
}

async function fetchSeoByCandidates(pageUrl, hierarchyCandidates = [[]]) {
  for (const hierarchyPath of hierarchyCandidates) {
    const response = await fetchWithTimeout(
      `${SEO_API_BASE_URL}/api/seo?pageUrl=${encodeURIComponent(pageUrl)}&hierarchyPath=${encodeURIComponent(
        JSON.stringify(hierarchyPath)
      )}`,
      {
        method: 'GET',
        next: { revalidate: SEO_REVALIDATE_SECONDS, tags: ['seo'] },
      }
    ).catch(() => null);

    if (!response || !response.ok) continue;

    const payload = await response.json().catch(() => null);
    if (!payload?.ok || !payload?.data) continue;
    if (hasConfiguredSeo(payload.data)) {
      return payload.data;
    }
  }

  return null;
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
    alternates: {
      canonical: seo.canonical || undefined,
    },
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
    other: {
      news_keywords: seo.newsKeywords || undefined,
      abstract: seo.abstract || undefined,
      dc_source: seo.dcSource || undefined,
      dc_title: seo.dcTitle || undefined,
      dc_keywords: seo.dcKeywords || undefined,
      dc_description: seo.dcDescription || undefined,
      alternate: seo.alternate || undefined,
      copyright: seo.copyright || undefined,
      fb_admins: seo.fbAdmins || undefined,
      twitter_canonical: seo.twitterCanonical || undefined,
      item_type: seo.itemType || undefined,
      item_name: seo.itemName || undefined,
      item_description: seo.itemDescription || undefined,
      item_url: seo.itemUrl || undefined,
      item_image: seo.itemImage || undefined,
      item_author: seo.itemAuthor || undefined,
      item_organization: seo.itemOrganization || undefined,
    },
  };
}

async function getSeoMetadata({ pageUrl, hierarchyCandidates = [[]] }) {
  const seo = await fetchSeoByCandidates(pageUrl, hierarchyCandidates).catch(() => null);
  return buildMetadataFromSeo(seo);
}

export { getSeoMetadata };
