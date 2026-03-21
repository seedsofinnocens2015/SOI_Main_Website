import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogsForCategory } from '@/app/utils/blogsData';

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
