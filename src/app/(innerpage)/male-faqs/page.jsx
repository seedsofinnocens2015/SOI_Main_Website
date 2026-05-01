import FAQCategoryTemplate from '@/app/Components/FAQCategoryTemplate';
import faqCategoryData from '@/app/data/faq-category-data.json';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/male-faqs',
    hierarchyCandidates: [['Home', 'Home FAQs'], ['Home'], []],
  });
}

export default function MaleFaqsPage() {
  return <FAQCategoryTemplate {...faqCategoryData.male} />;
}

