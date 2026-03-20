import FAQCategoryTemplate from '@/app/Components/FAQCategoryTemplate';
import faqCategoryData from '@/app/data/faq-category-data.json';

export default function GeneticFaqsPage() {
  return <FAQCategoryTemplate {...faqCategoryData.genetic} />;
}

