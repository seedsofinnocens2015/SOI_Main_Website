import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogCategoryMetadata } from '@/app/utils/blogSeo';
import { getBlogsForCategory } from '@/app/utils/blogsData';

export async function generateMetadata() {
  return getBlogCategoryMetadata('fertility', {
    title: 'Fertility Blogs',
    description:
      'Comprehensive articles about fertility, conception, reproductive health, and everything you need to know about your fertility journey.',
  });
}

const page = () => (
  <BlogsCategoryPage
    pageTitle="Fertility Blogs"
    sectionTitle="Fertility Blogs"
    sectionDescription="Comprehensive articles about fertility, conception, reproductive health, and everything you need to know about your fertility journey."
    selectedCategory="fertility"
    blogs={getBlogsForCategory('fertility')}
    backgroundImage="/assets/img/FertilityBlogs.webp"
  />
);

export default page;
