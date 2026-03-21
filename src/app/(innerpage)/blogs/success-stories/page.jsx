import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogsForCategory } from '@/app/utils/blogsData';

const page = () => (
  <BlogsCategoryPage
    pageTitle="Success Stories"
    sectionTitle="Success Stories"
    sectionDescription="Real patient journeys and inspiring stories of hope, resilience, and parenthood."
    selectedCategory="success-stories"
    blogs={getBlogsForCategory('success-stories')}
  />
);

export default page;
