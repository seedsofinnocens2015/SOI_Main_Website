import FAQCategoryTemplate from '@/app/Components/FAQCategoryTemplate';
import faqCategoryData from '@/app/data/faq-category-data.json';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/female-faqs',
    hierarchyCandidates: [['Home', 'Home FAQs'], ['Home'], []],
  });
}

export default function FemaleFaqsPage() {
  return <FAQCategoryTemplate {...faqCategoryData.female} />;
}

