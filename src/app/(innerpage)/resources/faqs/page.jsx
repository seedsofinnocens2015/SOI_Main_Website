"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import FAQAccordion from '@/app/Components/FAQAccordion';
import React from 'react';

const headingData = {
  title: 'FAQs',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2webp',
    '/assets/img/recent_post2webp'
  ],
};

const faqsContentData = {
  sections: [
    {
      heading: 'Frequently Asked Questions',
      paragraphs: [
        'Find comprehensive answers to commonly asked questions about IVF, fertility treatments, and your journey with Seeds of Innocens. If you have additional questions, our team is always available to help.',
        'We have compiled answers to the most frequently asked questions to help you understand the IVF process, treatment options, and what to expect during your journey with us.',
      ],
    },
  ],
};

// FAQ Questions Data
const ivfFAQs = [
  {
    question: '1. What is IVF?',
    answer: [
      'IVF (In Vitro Fertilization) is a fertility treatment where a woman’s eggs are fertilized by the sperm in a laboratory, which makes an embryo, and then it is transferred into the uterus for a potential pregnancy.'
    ]
  },
  {
    question: '2. What is the process of IVF?',
    answer: [
      'IVF (In Vitro Fertilization) is a type of fertility treatment where eggs are combined with sperm outside of your body in a lab. Moreover, it is a process used by people who need help achieving pregnancy.'
    ]
  },
  {
    question: '3. Is IVF Painful?',
    answer: [
      'Every patient is different; the process will differ from patient to patient. When it comes to IVF injections, they are thin and easy and do not need intervention. The reality is that discomfort is part of the experience, but the pain you experience throughout the IVF process is temporary and manageable.'
    ]
  },
  {
    question: '4. Is IVF Safe?',
    answer: [
      'IVF is safe and not that painful since the injections used for IVF are injected and purified subcutaneously. The egg collection process is done under light sedation, which is not painful. Moreover, during the time of embryo transfer, anaesthesia is not given as it is a 3-6 minute process that hardly causes any pain.  If it is done under expert care, IVF can turn out to be a safe and easy procedure.'
    ]
  },
  {
    question: '5. What is the best time to get IVF treatment done?',
    answer: [
      'The best time to undergo IVF treatment is when you are in overall health and under the guidance of fertility specialists. Generally, this treatment is ideal for women under the age of 35, as the success rates are affected by age. Also, take note of any underlying medical conditions before even beginning. Moreover, you can consult your IVF specialist regarding it. '
    ]
  },
  {
    question: '13. Can older women or couples with infertility issues still get help?',
    answer: [
      'Yes, with specialisation in treating complex cases, advanced maternal age, recurrent failures, endometriosis, and PCOS can be treated.'
    ]
  },
  {
    question: '6. When should I opt for IVF treatment?',
    answer: [
      'A couple can try IVF as many times as they want while keeping the treatment cost in mind.'
    ]
  },
  {
    question: '7. How many times can you try IVF?',
    answer: [
      'A couple can try IVF as many times as they want while keeping the treatment cost in mind.'
    ]
  },
  {
    question: '8. How do I know which fertility treatment is right for me?',
    answer: [
      'Your treatment is decided after a detailed consultation, medical history, fertility assessment, and diagnostic tests by our fertility specialists.'
    ]
  },
  {
    question: '9. How long does an IVF cycle take?',
    answer: [
      'An IVF cycle usually takes 4-6 weeks, which will include egg retrieval, fertilization, and embryo transfer.'
    ]
  },
  {
    question: '10. What is IUI?',
    answer: [
      'IUI stands for Intrauterine Insemination. It is a fertility treatment that can be done with or without the use of fertility drugs. Moreover, the procedure includes the direct transfer of processed semen into the female uterus.'
    ]
  },
  {
    question: '11. What is the difference between IVF and IUI?',
    answer: [
      'Some of the main differences between IVF and IUI are:'
    ],
    listItems: [
      'A single cycle of IUI has a success rate of 10-20% only, whereas IVF has a success rate of about 65-72%.',
      'The fertilization process in IVF is done in a petri dish.',
      'Washed semen is instilled into the woman’s uterus in the case of IUI.'
    ]
  }
];

const seedsOfInnocensFAQs = [
  {
    question: '1. What is Seeds of Innocens?',
    answer: [
      'Seeds of Innocens IVF is one of the best IVF centres that is dedicated to helping couples to achieve parenthood through advanced reproductive technologies, customized care, and expert doctors.'
    ]
  },
  {
    question: '2. What makes Seeds of Innocens different from other IVF centres?',
    answer: [
      'We believe in state-of-the-art labs, patient-centric care, high success rates, and expert fertility specialists trained in advanced reproductive technologies.'
    ]
  },
  {
    question: '3. What is the success rate of IVF at Seeds of Innocens?',
    answer: [
      'Success rates vary based on age, fertility condition, and medical profile, but Seeds of Innocens IVF is well-known for consistently high IVF success rates with evidence-based treatments.'
    ]
  },
  {
    question: '4. How can I book an appointment at Seeds of Innocens?',
    answer: [
      'You can easily book through our contact number, website, or you can visit your nearest Seeds of Innocens IVF centre for a consultation.'
    ]
  }
];

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.webp"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Main Content Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          {/* First Section - Introduction */}
          <div className="row">
            <div className="col-12 cs_service_page_content">
              <IVFContentSection data={faqsContentData} benefitImages={serviceData.benefitImages} accentHeadingStyle />
            </div>
          </div>

          {/* IVF FAQs Section */}
          <div className="row" style={{ marginTop: '60px' }}>
            <div className="col-12">
              <FAQAccordion faqs={ivfFAQs} />
            </div>
          </div>

          {/* Questions about Seeds of Innocens Section */}
          <div className="row cs_service_page_content" style={{ marginTop: '60px' }}>
            <div className="col-12">
              <AccentHeading level={3} style={{ fontSize: '26px', marginBottom: '30px' }}>Questions about Seeds of Innocens</AccentHeading>
              <FAQAccordion faqs={seedsOfInnocensFAQs} />
            </div>
          </div>

          {/* Still Have Questions Section */}
          {/* <div className="row" style={{ marginTop: '60px' }}>
            <div className="col-12">
              <h3 className="cs_section_title cs_fs_36" style={{
                fontSize: '26px',
                fontWeight: '700',
                color: '#000000',
                marginBottom: '30px',
                position: 'relative',
                display: 'inline-block',
                lineHeight: '1.2'
              }}>
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  Still Have
                  <span style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '60px',
                    height: '4px',
                    backgroundColor: '#df3655',
                    borderRadius: '2px'
                  }}></span>
                </span>
                {' '}Questions?
              </h3>
              <p className="cs_text_style_1" style={{ 
                fontSize: '16px', 
                lineHeight: '1.8', 
                color: '#666',
                marginBottom: '0'
              }}>
                Our fertility specialists are here to help. Contact us for personalized answers to your questions. We are committed to providing you with all the information you need to make informed decisions about your fertility journey.
              </p>
            </div>
          </div> */}
        </div>
      </Section>
    </div>
  );
};

export default page;
