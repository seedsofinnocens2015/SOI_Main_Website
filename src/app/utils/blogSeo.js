import { getSeoMetadata } from '@/app/utils/seoMetadata';

const SITE_URL =  'http://localhost:4000';
// const SITE_URL = 'https://seeds.seedsofinnocens.com';

const CATEGORY_ROUTE_MAP = {
  'Treatment Guides': 'treatment-guides',
  "Women's Health": 'womens-health',
  "Men's Health": 'mens-health',
  Fertility: 'fertility',
  'IVF Process': 'ivf-process',
  Pregnancy: 'pregnancy',
  'Success Stories': 'success-stories',
  'Doctor Insights': 'doctor-insights',
  'News & Press': 'news-press',
  'Lifestyle & Fertility': 'fertility',
  'Treatment Guide': 'treatment-guides',
  'Doctor Insight': 'doctor-insights',
  'IVF Success': 'success-stories',
  'ICSI Success': 'success-stories',
  'Egg Freezing & IVF': 'success-stories',
  Surrogacy: 'success-stories',
};

const CATEGORY_LABEL_BY_ROUTE = {
  fertility: 'Fertility',
  'ivf-process': 'IVF Process',
  pregnancy: 'Pregnancy',
  'mens-health': "Men's Health",
  'womens-health': "Women's Health",
  'treatment-guides': 'Treatment Guides',
  'success-stories': 'Success Stories',
  'doctor-insights': 'Doctor Insights',
  'news-press': 'News & Press',
};

function getCategoryRoute(category = '') {
  return (
    CATEGORY_ROUTE_MAP[category] ||
    String(category)
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/'/g, '')
  );
}

function getCategoryLabel(categoryRoute = '') {
  return CATEGORY_LABEL_BY_ROUTE[categoryRoute] || categoryRoute;
}

function buildBlogHierarchyCandidates(categoryRoute) {
  const categoryLabel = getCategoryLabel(categoryRoute);
  return [['Blogs', categoryLabel], ['Blogs'], []];
}

function hasSeoMetadata(metadata = {}) {
  return Boolean(metadata?.title || metadata?.description);
}

function buildFallbackBlogMetadata({ title, description, pageUrl, image }) {
  const canonicalUrl = `${SITE_URL}${pageUrl.startsWith('/') ? pageUrl : `/${pageUrl}`}`;
  const ogImage = image || '/assets/img/Top-Header.webp';
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title: `${title} | Seeds of Innocence`,
    description,
    openGraph: {
      title: `${title} | Seeds of Innocence`,
      description,
      url: canonicalUrl,
      siteName: 'Seeds of Innocence',
      images: [{ url: ogImageUrl }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Seeds of Innocence`,
      description,
    },
    alternates: { canonical: canonicalUrl },
  };
}

async function getBlogsOverviewMetadata() {
  const seoMetadata = await getSeoMetadata({
    pageUrl: '/blogs',
    hierarchyCandidates: [['Blogs'], []],
  }).catch(() => ({}));

  if (hasSeoMetadata(seoMetadata)) return seoMetadata;

  return buildFallbackBlogMetadata({
    title: 'Blogs',
    description:
      'Explore fertility, IVF, pregnancy, and reproductive health blogs from Seeds of Innocence.',
    pageUrl: '/blogs',
  });
}

async function getBlogCategoryMetadata(categoryRoute, { title, description } = {}) {
  const pageUrl = `/blogs/${categoryRoute}`;
  const categoryLabel = getCategoryLabel(categoryRoute);
  const seoMetadata = await getSeoMetadata({
    pageUrl,
    hierarchyCandidates: buildBlogHierarchyCandidates(categoryRoute),
  }).catch(() => ({}));

  if (hasSeoMetadata(seoMetadata)) return seoMetadata;

  return buildFallbackBlogMetadata({
    title: title || `${categoryLabel} Blogs`,
    description:
      description ||
      `Read ${categoryLabel.toLowerCase()} articles, guides, and expert insights from Seeds of Innocence.`,
    pageUrl,
  });
}

async function getBlogPostMetadata(blog) {
  if (!blog?.slug) return {};

  const categoryRoute = getCategoryRoute(blog.category);
  const pageUrl = `/blog/${blog.slug}`;
  const seoMetadata = await getSeoMetadata({
    pageUrl,
    hierarchyCandidates: buildBlogHierarchyCandidates(categoryRoute),
  }).catch(() => ({}));

  if (hasSeoMetadata(seoMetadata)) return seoMetadata;

  return buildFallbackBlogMetadata({
    title: blog.title || 'Blog',
    description: blog.excerpt || '',
    pageUrl,
    image: blog.image,
  });
}

export {
  getCategoryRoute,
  getCategoryLabel,
  getBlogsOverviewMetadata,
  getBlogCategoryMetadata,
  getBlogPostMetadata,
};
