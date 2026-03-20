import FAQCategoryTemplate from '@/app/Components/FAQCategoryTemplate';
import faqCategoryData from '@/app/data/faq-category-data.json';

export default function MaleFaqsPage() {
  return <FAQCategoryTemplate {...faqCategoryData.male} />;
}

