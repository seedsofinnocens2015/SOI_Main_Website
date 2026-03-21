import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogsForCategory } from '@/app/utils/blogsData';

const page = () => (
  <BlogsCategoryPage
    pageTitle="Fertility Blogs"
    sectionTitle="Fertility Blogs"
    sectionDescription="Comprehensive articles about fertility, conception, reproductive health, and everything you need to know about your fertility journey."
    selectedCategory="fertility"
    blogs={getBlogsForCategory('fertility')}
  />
);

export default page;
