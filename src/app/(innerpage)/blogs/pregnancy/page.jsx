import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogCategoryMetadata } from '@/app/utils/blogSeo';
import { getBlogsForCategory } from '@/app/utils/blogsData';

export async function generateMetadata() {
  return getBlogCategoryMetadata('pregnancy', {
    title: 'Pregnancy Blogs',
    description:
      'Essential articles about pregnancy, prenatal care, and what to expect during your pregnancy journey.',
  });
}

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
