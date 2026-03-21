import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogsForCategory } from '@/app/utils/blogsData';

const page = () => (
  <BlogsCategoryPage
    pageTitle="Doctor Insights"
    sectionTitle="Doctor Insights"
    sectionDescription="Expert perspectives and practical advice from experienced fertility specialists."
    selectedCategory="doctor-insights"
    blogs={getBlogsForCategory('doctor-insights')}
  />
);

export default page;
