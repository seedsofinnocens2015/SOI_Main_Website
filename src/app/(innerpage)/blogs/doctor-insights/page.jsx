import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogCategoryMetadata } from '@/app/utils/blogSeo';
import { getBlogsForCategory } from '@/app/utils/blogsData';

export async function generateMetadata() {
  return getBlogCategoryMetadata('doctor-insights', {
    title: 'Doctor Insights',
    description: 'Expert perspectives and practical advice from experienced fertility specialists.',
  });
}

const page = () => (
  <BlogsCategoryPage
    pageTitle="Doctor Insights"
    sectionTitle="Doctor Insights"
    sectionDescription="Expert perspectives and practical advice from experienced fertility specialists."
    selectedCategory="doctor-insights"
    blogs={getBlogsForCategory('doctor-insights')}
    backgroundImage="/assets/img/DoctorInsightsBlog.webp"
  />
);

export default page;
