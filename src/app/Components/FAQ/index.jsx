"use client"
import { useState } from 'react';

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <ul className="cs_mp_0">
        {faqs.map((faq, index) => (
          <li key={index}>
            <h6
              className={openIndex === index ? 'open' : ''}
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: 'pointer',
                padding: '15px 20px',
                backgroundColor: openIndex === index ? '#f5f5f5' : 'transparent',
                borderRadius: '5px',
                marginBottom: '10px',
                transition: 'all 0.3s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{faq.question}</span>
              <span style={{ fontSize: '20px', color: 'var(--accent-color)' }}>
                {openIndex === index ? '−' : '+'}
              </span>
            </h6>
            <div
              style={{
                display: openIndex === index ? 'block' : 'none',
                padding: '0 20px 20px 20px',
                lineHeight: '1.8',
                color: '#666',
              }}
            >
              {faq.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;

