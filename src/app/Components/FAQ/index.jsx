"use client";

import FAQAccordion from '@/app/Components/FAQAccordion';

/**
 * Legacy FAQ component – delegates to shared FAQAccordion for consistent styling.
 * Use FAQAccordion directly for new code.
 */
const FAQ = ({ faqs = [] }) => {
  return (
    <div className="faq">
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default FAQ;
