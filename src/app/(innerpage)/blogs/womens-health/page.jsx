import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogCategoryMetadata } from '@/app/utils/blogSeo';
import { getBlogsForCategory } from '@/app/utils/blogsData';

export async function generateMetadata() {
  return getBlogCategoryMetadata('womens-health', {
    title: "Women's Health Blogs",
    description:
      "Helpful information on women's reproductive health, hormonal balance, and fertility wellness.",
  });
}

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
