import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogsForCategory } from '@/app/utils/blogsData';

const page = () => (
  <BlogsCategoryPage
    pageTitle="Pregnancy Blogs"
    sectionTitle="Pregnancy Blogs"
    sectionDescription="Trusted guidance on pregnancy, prenatal care, and healthy motherhood from fertility experts."
    selectedCategory="pregnancy"
    blogs={getBlogsForCategory('pregnancy')}
  />
);

export default page;
