import centerBlogsJson from '@/app/data/centerblogs.json';

export function getAllCenterBlogs() {
  if (Array.isArray(centerBlogsJson)) {
    return centerBlogsJson;
  }
  return centerBlogsJson?.centerBlogs || [];
}

export function getCenterBlogBySlug(slug) {
  if (!slug) return null;
  const list = getAllCenterBlogs();
  return list.find(
    (item) =>
      item.slug === slug ||
      item.id === slug ||
      (Array.isArray(item.aliases) && item.aliases.includes(slug))
  );
}
