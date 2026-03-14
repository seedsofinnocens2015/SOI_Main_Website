"use client";

import { useState } from "react";

/**
 * Normalize FAQ item: accept question/q and answer/a (string or array), optional listItems.
 * @param {object} faq - Raw FAQ item
 * @returns {{ question: string, answer: string|string[], listItems?: string[] }}
 */
function normalizeFaq(faq) {
  if (!faq || typeof faq !== "object") return null;
  const question = faq.question ?? faq.q ?? "";
  const answer = faq.answer ?? faq.a;
  const listItems = faq.listItems;
  if (!question) return null;
  return { question, answer, listItems };
}

/**
 * Render answer content: string, array of strings (paragraphs), and/or listItems.
 */
function AnswerContent({ answer, listItems }) {
  const hasAnswer = answer != null && answer !== "";
  const hasList = listItems && listItems.length > 0;
  if (!hasAnswer && !hasList) return null;
  return (
    <>
      {hasAnswer &&
        (Array.isArray(answer) ? (
          answer.map((para, i) => <p key={i}>{para}</p>)
        ) : (
          <p>{String(answer)}</p>
        ))}
      {hasList && (
        <ul>
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}

/**
 * Reusable FAQ Accordion.
 * @param {{ faqs: Array<{ question: string, answer?: string|string[], listItems?: string[] }> }} props
 * - faqs: array of { question, answer } (answer can be string or array of strings; also supports q/a and listItems)
 */
export default function FAQAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const normalized = faqs
    .map(normalizeFaq)
    .filter(Boolean);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  if (normalized.length === 0) return null;

  return (
    <div className="faq_accordion_container">
      {normalized.map((faq, idx) => {
        const isOpen = openIndex === idx;
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
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <span className="faq_accordion_question_text">
                {faq.question}
              </span>
              <span
                className="faq_accordion_toggle"
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </div>
            <div
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              className={`faq_accordion_answer ${isOpen ? "faq_accordion_answer_open" : ""}`}
            >
              <div className="faq_accordion_answer_inner">
                <AnswerContent
                  answer={faq.answer}
                  listItems={faq.listItems}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
