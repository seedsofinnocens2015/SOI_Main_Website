"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React, { useState } from 'react';

const headingData = {
  title: 'FAQs',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

// FAQ Accordion Component
const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion" style={{ marginTop: '30px' }}>
      {faqs.map((faq, index) => (
        <div 
          key={index}
          style={{
            marginBottom: '15px',
            border: '1px solid #e8e8e8',
            borderRadius: '8px',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
          }}
        >
          <div
            onClick={() => toggleFAQ(index)}
            style={{
              cursor: 'pointer',
              padding: '20px',
              backgroundColor: openIndex === index ? '#f8f9fa' : '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <h4 style={{
              margin: 0,
              fontSize: '18px',
              fontWeight: '600',
              color: '#0A2A43',
              flex: 1,
              paddingRight: '20px'
            }}>
              {faq.question}
            </h4>
            <span style={{
              fontSize: '24px',
              color: '#E45352',
              fontWeight: 'bold',
              minWidth: '30px',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              {openIndex === index ? '−' : '+'}
            </span>
          </div>
          {openIndex === index && (
            <div style={{
              padding: '0 20px 20px 20px',
              backgroundColor: '#f8f9fa',
              lineHeight: '1.8',
              color: '#666'
            }}>
              {faq.answer && (
                <div style={{ marginBottom: '15px' }}>
                  {faq.answer.map((para, pIndex) => (
                    <p key={pIndex} style={{ marginBottom: '10px', fontSize: '15px' }}>
                      {para}
                    </p>
                  ))}
                </div>
              )}
              {faq.listItems && (
                <ul style={{ 
                  marginTop: '10px', 
                  paddingLeft: '20px',
                  listStyle: 'disc'
                }}>
                  {faq.listItems.map((item, itemIndex) => (
                    <li key={itemIndex} style={{ 
                      marginBottom: '8px', 
                      fontSize: '15px',
                      lineHeight: '1.8'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const faqsContentData = {
  sections: [
    {
      heading: 'Frequently Asked Questions',
      paragraphs: [
        'Find comprehensive answers to commonly asked questions about IVF, fertility treatments, and your journey with Seeds of Innocens. If you have additional questions, our team is always available to help.',
        'We have compiled answers to the most frequently asked questions to help you understand the IVF process, treatment options, and what to expect during your journey with us.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
  ],
};

// FAQ Questions Data
const ivfFAQs = [
  {
    question: '1. What is IVF?',
    answer: [
      'IVF (In Vitro Fertilization) therapy is a fertility treatment where a woman\'s eggs are fertilized by the sperm in a laboratory dish, making an embryo which is then transferred to the uterus for the potential pregnancy.'
    ]
  },
  {
    question: '2. What is the process of IVF?',
    answer: [
      'IVF process is a series of procedures and it includes:'
    ],
    listItems: [
      'Initial Consultation: The first step should be meeting up with an IVF specialist. Once all the information has been discussed, the specialist will suggest the best way to process it further.',
      'Testing and Ovary Stimulation: On the first day of your cycle, the stimulation process begins. Unlike normal, you will be given medications for the next 8-14 days to encourage the follicles in your ovaries to produce more eggs.',
      'Egg Retrieval: This process takes about 20-30 minutes while you are asleep. Your specialist will use the latest ultrasound technology to guide a needle into each ovary. However, the average number of eggs collected is 8-15.',
      'Sperm Retrieval: Sperm Retrieval is done on the similar day as that of egg retrieval if you are a couple planning to use fresh sperm in an IVF treatment procedure. However, in case of donor eggs, the specialists will keep them ready in the lab.',
      'Fertilization: These scientists will now use powerful microscopes to find the eggs from the fluid so that they can be taken out of it. However, then both sperm and eggs are fertilized in a dish in vitro.',
      'Embryo Development: Fertilization of the egg and the sperm results in a zygote that further develops into an embryo. Then the embryo is placed in a special incubator.',
      'Embryo Transfer: Here, the scientist prepares the embryo by placing it in a catheter (small tube). Then he will place the catheter through the cervix into the uterus.',
      'Final Pregnancy Test: Two weeks post your embryo transfer, your specialist will conduct a blood test to measure your hCG hormone level. However when hCG is detected in your bloodstream, it is a positive sign of pregnancy.'
    ]
  },
  {
    question: '3. Is IVF Painful?',
    answer: [
      'Each patient is different therefore the process will differ from patient to patient. However, when it comes to IVF injections, they are easy and thin and do not require intervention. However, the egg collection process is done under light sedation which is also not much painful. At the time of embryo transfer, anaesthesia is not given because it is a 3-6 minutes process that hardly can cause pain.'
    ]
  },
  {
    question: '4. Is IVF Safe?',
    answer: [
      'IVF is safe and not that painful because the injections used for IVF are injected and purified in subcutaneous form. The egg collection process is done under the light sedation that is not painful. However during the time of embryo transfer, anaesthesia is not given as it is a 3-6 minutes process that hardly causes any pain. If it is done under expert care, IVF can turn out to be an easy and safe procedure.'
    ]
  },
  {
    question: '5. What is the best time to get IVF treatment done?',
    answer: [
      'The best time to undergo IVF treatment is when you are in good overall health and under the guidance of fertility specialists. Generally, this treatment is ideal for the women under the age of 35 as success rates are affected with age. Also take a note of any underlying medical conditions before even beginning. Also, you can consult your healthcare provider regarding it.'
    ]
  },
  {
    question: '13. Can older women or couples with infertility issues still get help?',
    answer: [
      'Yes, with specialise in treating complex cases, advanced maternal age, recurrent failures, endometriosis, PCOS can be treated.'
    ]
  },
  {
    question: '6. When should I opt for IVF treatment?',
    answer: [
      'The IVF procedure can be prescribed in the cases where the other fertility treatments are failed or if the chances of a successful pregnancy are higher with the method than with any other treatment. However if there are no contraindications then the procedure can be carried out simply at the request of the couple by considering the precise time.'
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
      'Your treatment is decided after a detailed consultation, medical history, fertility assessment and diagnostic tests by our fertility specialists.'
    ]
  },
  {
    question: '9. How long does an IVF cycle take?',
    answer: [
      'A complete IVF cycle usually takes 4-6 weeks which includes egg retrieval, fertilization and embryo transfer.'
    ]
  },
  {
    question: '10. What is IUI?',
    answer: [
      'IUI simply stands for Intrauterine Insemination. It is simply a fertility treatment that can be done with or without the use of fertility drugs. However, the procedure involves the direct transfer of processed semen into the female uterus.'
    ]
  },
  {
    question: '11. What is the difference between IVF and IUI?',
    answer: [
      'Some of the major differences between IVF and IUI are:'
    ],
    listItems: [
      'A single cycle of IUI has a success rate of 10-20% only whereas IVF has a success rate of about 65-72%.',
      'The fertilization process in IVF is done outside the human body in a petri dish.',
      'In the case of IUI, washed semen is instilled into the woman\'s uterus.'
    ]
  }
];

const seedsOfInnocensFAQs = [
  {
    question: '1. What is Seeds of Innocens?',
    answer: [
      'Seeds of Innocens is a leading IVF and fertility centre that is dedicated in helping couples to achieve parenthood through advanced reproductive technologies, expert doctors and personalised care.'
    ]
  },
  {
    question: '2. What makes Seeds of Innocens different from other IVF centres?',
    answer: [
      'We stand out for the state of the art labs, high success rates, patient-centric care, transparent processes and expert fertility specialists trained in advanced reproductive technologies.'
    ]
  },
  {
    question: '3. What is the success rate of IVF at Seeds of Innocens?',
    answer: [
      'Success rates vary based on age, fertility condition and medical profile but Seeds of Innocens is well known for consistently high IVF success rates with evidence based treatments.'
    ]
  },
  {
    question: '4. How can I book an appointment at Seeds of Innocens?',
    answer: [
      'You can book easily through our helpline, website or visit your nearest Seeds of Innocens centre for a consultation.'
    ]
  }
];

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
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
            <div className="col-12">
              <IVFContentSection data={faqsContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>

          {/* IVF FAQs Section */}
          <div className="row" style={{ marginTop: '60px' }}>
            <div className="col-12">
              <FAQAccordion faqs={ivfFAQs} />
            </div>
          </div>

          {/* Questions about Seeds of Innocens Section */}
          <div className="row" style={{ marginTop: '60px' }}>
            <div className="col-12">
              <h3 className="cs_section_title cs_fs_36" style={{
                fontSize: '26px',
                fontWeight: '700',
                color: '#0A2A43',
                marginBottom: '30px',
                position: 'relative',
                display: 'inline-block',
                lineHeight: '1.2'
              }}>
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  Questions about
                  <span style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '60px',
                    height: '4px',
                    backgroundColor: '#E45352',
                    borderRadius: '2px'
                  }}></span>
                </span>
                {' '}Seeds of Innocens
              </h3>
              <FAQAccordion faqs={seedsOfInnocensFAQs} />
            </div>
          </div>

          {/* Still Have Questions Section */}
          {/* <div className="row" style={{ marginTop: '60px' }}>
            <div className="col-12">
              <h3 className="cs_section_title cs_fs_36" style={{
                fontSize: '26px',
                fontWeight: '700',
                color: '#0A2A43',
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
                    backgroundColor: '#E45352',
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
