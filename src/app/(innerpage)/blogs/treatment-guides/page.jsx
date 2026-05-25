import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogCategoryMetadata } from '@/app/utils/blogSeo';
import { getBlogsForCategory } from '@/app/utils/blogsData';

export async function generateMetadata() {
  return getBlogCategoryMetadata('treatment-guides', {
    title: 'Treatment Guides',
    description:
      'Step-by-step fertility treatment guides to help you understand procedures, timelines, and outcomes.',
  });
}

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
