import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogsOverviewMetadata } from '@/app/utils/blogSeo';
import { getAllBlogs } from '@/app/utils/blogsData';

export async function generateMetadata() {
  return getBlogsOverviewMetadata();
}

const page = () => (
  <BlogsCategoryPage
    pageTitle="Blogs"
    sectionTitle="LATEST BLOGS"
    sectionDescription="Explore our comprehensive collection of blogs covering fertility, IVF, pregnancy, health, and more. Stay informed with expert insights, treatment guides, and inspiring stories."
    selectedCategory="all"
    blogs={getAllBlogs()}
    showAllCategories
    enablePagination
  />
);

export default page;

