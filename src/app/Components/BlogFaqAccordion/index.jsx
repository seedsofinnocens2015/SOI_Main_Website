"use client";

import { useState } from "react";

/**
 * Custom Accordion for Blog FAQs, styled identically to centre FAQAccordion.
 * Supports HTML inside answers seamlessly.
 */
export default function BlogFaqAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="faq_accordion_container" style={{ margin: '30px 0' }}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const answerHtml = typeof faq.answer === 'string' ? faq.answer : '';

        return (
          <div key={idx} className="faq_accordion_item">
            <div
              className="faq_accordion_question_row"
              onClick={() => toggle(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(idx);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={`blog-faq-answer-${idx}`}
              id={`blog-faq-question-${idx}`}
            >
              <h3 className="faq_accordion_question_text">
                {faq.question}
              </h3>
              <span
                className="faq_accordion_toggle"
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </div>
            <div
              id={`blog-faq-answer-${idx}`}
              role="region"
              aria-labelledby={`blog-faq-question-${idx}`}
              className={`faq_accordion_answer ${isOpen ? "faq_accordion_answer_open" : ""}`}
            >
              <div
                className="faq_accordion_answer_inner"
                dangerouslySetInnerHTML={{ __html: answerHtml }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
