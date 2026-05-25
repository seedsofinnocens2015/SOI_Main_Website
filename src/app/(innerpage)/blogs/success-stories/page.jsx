import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogCategoryMetadata } from '@/app/utils/blogSeo';
import { getBlogsForCategory } from '@/app/utils/blogsData';

export async function generateMetadata() {
  return getBlogCategoryMetadata('success-stories', {
    title: 'Success Stories',
    description: 'Real patient journeys and inspiring stories of hope, resilience, and parenthood.',
  });
}

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
