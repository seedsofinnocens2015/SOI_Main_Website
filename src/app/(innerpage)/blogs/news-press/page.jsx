import BlogsCategoryPage from '@/app/Components/BlogsCategoryPage';
import { getBlogsForCategory } from '@/app/utils/blogsData';

const page = () => (
  <BlogsCategoryPage
    pageTitle="News & Press"
    sectionTitle="Latest News & Press Releases"
    sectionDescription="Stay updated with the latest news, achievements, and press releases from Seeds of Innocens. We share our milestones, new center openings, awards, and important announcements."
    selectedCategory="news-press"
    blogs={getBlogsForCategory('news-press')}
    showMediaInquiry
  />
);

export default page;
