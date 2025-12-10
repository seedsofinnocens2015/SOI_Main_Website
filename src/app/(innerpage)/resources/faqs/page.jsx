import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'FAQs',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
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
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'What is IVF and how does it work?',
      paragraphs: [
        'IVF (In Vitro Fertilization) is a fertility treatment where eggs are retrieved from the ovaries and fertilized with sperm in a laboratory. The resulting embryos are then transferred to the uterus. The process involves:',
      ],
      listItems: [
        'Ovarian stimulation to produce multiple eggs',
        'Egg retrieval through a minor surgical procedure',
        'Fertilization of eggs with sperm in the laboratory',
        'Embryo culture and development monitoring',
        'Embryo transfer into the uterus',
        'Pregnancy test and follow-up care',
      ],
    },
    {
      heading: 'What is the success rate of IVF?',
      paragraphs: [
        'IVF success rates vary based on several factors including age, cause of infertility, and treatment history. At Seeds of Innocens:',
      ],
      listItems: [
        'Overall success rate: Approximately 65-70% for women under 35',
        'Success rates decrease slightly with age',
        'We use advanced techniques and personalized treatment plans',
        'Individual success rates depend on specific medical conditions',
        'Our team discusses realistic expectations during consultation',
      ],
    },
    {
      heading: 'How long does the IVF process take?',
      paragraphs: [
        'A complete IVF cycle typically takes 4-6 weeks from the start of medication to the pregnancy test:',
      ],
      listItems: [
        'Week 1-2: Initial consultation and evaluation',
        'Week 3-4: Ovarian stimulation (2-3 weeks)',
        'Week 5: Egg retrieval and fertilization',
        'Week 6: Embryo transfer (3-5 days after retrieval)',
        'Week 7-8: Pregnancy test (10-14 days after transfer)',
      ],
    },
    {
      heading: 'What is the cost of IVF treatment?',
      paragraphs: [
        'IVF costs vary depending on the specific treatment plan, medications required, and any additional procedures:',
      ],
      listItems: [
        'Basic Package: ₹1,50,000 - ₹2,50,000',
        'Standard Package: ₹2,50,000 - ₹3,50,000',
        'Premium Package: ₹3,50,000 - ₹5,00,000',
        'Medications: Additional ₹30,000 - ₹80,000 typically',
        'We offer transparent pricing with no hidden costs',
        'Financing options and payment plans available',
      ],
    },
    {
      heading: 'Are there any side effects of IVF?',
      paragraphs: [
        'Common side effects are usually mild and manageable:',
      ],
      listItems: [
        'Mild bloating and abdominal discomfort',
        'Mood swings due to hormonal changes',
        'Injection site discomfort',
        'Temporary tenderness in ovaries',
        'Rare but serious: Ovarian Hyperstimulation Syndrome (OHSS)',
        'Our team monitors you closely to minimize risks',
      ],
    },
    {
      heading: 'What is the difference between IVF and ICSI?',
      paragraphs: [
        'Understanding the key differences:',
      ],
      listItems: [
        'Traditional IVF: Eggs and sperm are placed together for natural fertilization',
        'ICSI: A single sperm is directly injected into each egg',
        'ICSI is recommended for male infertility issues',
        'ICSI is used for low sperm count or poor sperm quality',
        'ICSI may be recommended when previous IVF attempts have failed',
        'Both procedures are performed in our advanced laboratory',
      ],
    },
    {
      heading: 'Can I choose the gender of my baby?',
      paragraphs: [
        'Gender selection through Preimplantation Genetic Testing (PGT) is available but:',
      ],
      listItems: [
        'Only permitted for medical reasons in India',
        'Used to prevent gender-linked genetic disorders',
        'Social gender selection is not permitted by law',
        'Must be recommended by a medical geneticist',
        'Requires proper documentation and justification',
      ],
    },
    {
      heading: 'How many embryos should be transferred?',
      paragraphs: [
        'The number of embryos transferred depends on several factors:',
      ],
      listItems: [
        'Your age and fertility history',
        'Embryo quality and development',
        'Previous IVF cycle outcomes',
        'Generally 1-2 embryos are transferred',
        'Single embryo transfer reduces multiple pregnancy risk',
        'Our doctors discuss the best option for your situation',
      ],
    },
    {
      heading: 'What should I do to prepare for IVF?',
      paragraphs: [
        'Preparation is key to a successful IVF cycle:',
      ],
      listItems: [
        'Maintain a healthy lifestyle and balanced diet',
        'Take prescribed supplements (folic acid, etc.)',
        'Avoid smoking, alcohol, and excessive caffeine',
        'Manage stress through relaxation techniques',
        'Follow your doctor\'s specific instructions',
        'Attend all scheduled appointments',
      ],
    },
    {
      heading: 'What happens if my first IVF cycle is unsuccessful?',
      paragraphs: [
        'If the first cycle is unsuccessful, our approach includes:',
      ],
      listItems: [
        'Comprehensive review of the cycle',
        'Analysis of what happened and why',
        'Adjustment of treatment plan for next cycle',
        'Many couples achieve success in subsequent cycles',
        'Support and counseling to help you through the process',
        'Discussion of alternative treatment options',
      ],
    },
    {
      heading: 'Still Have Questions?',
      paragraphs: [
        'Our fertility specialists are here to help. Contact us for personalized answers to your questions. We are committed to providing you with all the information you need to make informed decisions about your fertility journey.',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
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
          {/* Content Section - Centered and Full Width */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={faqsContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
