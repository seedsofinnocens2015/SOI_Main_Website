import blogsData from '@/app/data/blogs.json';

const CATEGORY_FILTERS = {
  fertility: ['Fertility', 'प्रजनन क्षमता'],
  'ivf-process': ['IVF Process', 'आईवीएफ प्रक्रिया'],
  pregnancy: ['Pregnancy', 'गर्भावस्था'],
  'mens-health': ["Men's Health", 'पुरुषों का स्वास्थ्य'],
  'womens-health': ["Women's Health", 'महिलाओं का स्वास्थ्य'],
  'treatment-guides': ['Treatment Guides', 'उपचार गाइड', 'Treatment Guide'],
  'success-stories': ['Success Stories', 'सफलता कहानियां', 'IVF Success', 'ICSI Success', 'Egg Freezing & IVF', 'Surrogacy'],
  'doctor-insights': ['Doctor Insights', 'Doctor Insight', 'डॉक्टर अंतर्दृष्टि'],
  'news-press': ['News & Press', 'समाचार और प्रेस'],
};

function isHindiBlog(blog) {
  const title = String(blog?.title || '');
  const content = String(blog?.content || '');
  const category = String(blog?.category || '');
  return /[\u0900-\u097F]/.test(title) || /[\u0900-\u097F]/.test(content) || /[\u0900-\u097F]/.test(category);
}

function mapBlogCard(blog) {
  const hindi = isHindiBlog(blog);
  return {
    title: blog.title || '',
    excerpt: blog.excerpt || '',
    image: blog.image,
    date: blog.date || '',
    author: blog.author || '',
    category: blog.category || '',
    readTime: blog.readTime || '',
    type: blog.type || '',
    link: hindi ? `/hindi/${blog.slug}/` : `/english/${blog.slug}/`,
  };
}

export function getBlogsForCategory(categoryKey) {
  const allowed = CATEGORY_FILTERS[categoryKey] || [];
  return (blogsData.blogs || [])
    .filter((blog) => allowed.includes(blog.category))
    .map(mapBlogCard);
}

