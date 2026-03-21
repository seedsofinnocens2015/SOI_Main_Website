import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogsForCategory } from '@/app/utils/blogsData';

const page = () => (
  <BlogsCategoryPage
    pageTitle="IVF Process Blogs"
    sectionTitle="IVF Process Blogs"
    sectionDescription="Detailed guides and articles about the IVF treatment process, procedures, and what to expect at each stage of your journey."
    selectedCategory="ivf-process"
    blogs={getBlogsForCategory('ivf-process')}
  />
);

export default page;
