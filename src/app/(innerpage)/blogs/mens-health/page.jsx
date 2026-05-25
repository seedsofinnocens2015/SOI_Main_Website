import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogCategoryMetadata } from '@/app/utils/blogSeo';
import { getBlogsForCategory } from '@/app/utils/blogsData';

export async function generateMetadata() {
  return getBlogCategoryMetadata('mens-health', {
    title: "Men's Health Blogs",
    description: 'Practical insights on male fertility, reproductive health, and treatment pathways.',
  });
}

const page = () => (
  <BlogsCategoryPage
    pageTitle="Men's Health Blogs"
    sectionTitle="Men's Health Blogs"
    sectionDescription="Practical insights on male fertility, reproductive health, and treatment pathways."
    selectedCategory="mens-health"
    blogs={getBlogsForCategory('mens-health')}
  />
);

export default page;
