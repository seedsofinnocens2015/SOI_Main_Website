import blogsData from '@/app/data/blogs.json';

export const DEFAULT_BLOG_IMAGE = '/assets/img/Top-Header.webp';

function parseBlogDate(dateStr) {
  const parsed = Date.parse(dateStr || '');
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function getLatestBlogs(limit = 8, { preferWithImage = false } = {}) {
  const sorted = [...(blogsData.blogs || [])].sort(
    (a, b) => parseBlogDate(b.date) - parseBlogDate(a.date),
  );

  if (!preferWithImage) {
    return sorted.slice(0, limit);
  }

  const withImage = sorted.filter((blog) => blog.image);
  const withoutImage = sorted.filter((blog) => !blog.image);
  return [...withImage, ...withoutImage].slice(0, limit);
}

export function getAllBlogs() {
  return [...(blogsData.blogs || [])]
    .sort((a, b) => parseBlogDate(b.date) - parseBlogDate(a.date))
    .map(mapBlogCard);
}

const CATEGORY_FILTERS = {
  fertility: ['Fertility', 'Lifestyle & Fertility'],
  'ivf-process': ['IVF Process'],
  pregnancy: ['Pregnancy'],
  'mens-health': ["Men's Health"],
  'womens-health': ["Women's Health"],
  'treatment-guides': ['Treatment Guides', 'Treatment Guide'],
  'success-stories': ['Success Stories', 'IVF Success', 'ICSI Success', 'Egg Freezing & IVF', 'Surrogacy'],
  'doctor-insights': ['Doctor Insights', 'Doctor Insight'],
  'news-press': ['News & Press'],
};

function mapBlogCard(blog) {
  return {
    title: blog.title || '',
    excerpt: blog.excerpt || '',
    image: blog.image,
    date: blog.date || '',
    author: blog.author || '',
    category: blog.category || '',
    readTime: blog.readTime || '',
    type: blog.type || '',
    link: `/blog/${blog.slug}/`,
  };
}

export function getBlogsForCategory(categoryKey) {
  const allowed = CATEGORY_FILTERS[categoryKey] || [];
  return (blogsData.blogs || [])
    .filter((blog) => allowed.includes(blog.category))
    .map(mapBlogCard);
}
