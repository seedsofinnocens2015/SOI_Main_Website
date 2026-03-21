import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogsForCategory } from '@/app/utils/blogsData';

const page = () => (
  <BlogsCategoryPage
    pageTitle="Women's Health Blogs"
    sectionTitle="Women's Health Blogs"
    sectionDescription="Helpful information on women's reproductive health, hormonal balance, and fertility wellness."
    selectedCategory="womens-health"
    blogs={getBlogsForCategory('womens-health')}
  />
);

export default page;
