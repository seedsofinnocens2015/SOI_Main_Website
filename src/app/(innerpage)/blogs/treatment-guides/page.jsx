import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogsForCategory } from '@/app/utils/blogsData';

const page = () => (
  <BlogsCategoryPage
    pageTitle="Treatment Guides"
    sectionTitle="Treatment Guides"
    sectionDescription="Step-by-step fertility treatment guides to help you understand procedures, timelines, and outcomes."
    selectedCategory="treatment-guides"
    blogs={getBlogsForCategory('treatment-guides')}
  />
);

export default page;
