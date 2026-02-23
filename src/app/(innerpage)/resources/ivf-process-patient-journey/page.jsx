import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'IVF Process / Patient Journey',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const journeyContentData = {
  sections: [
    {
      heading: 'Your Complete IVF Journey with Seeds of Innocens',
      paragraphs: [
        'At Seeds of Innocens, we guide you through every step of your IVF journey with care, expertise, and support. Understanding the process helps reduce anxiety and sets realistic expectations. Here\'s what you can expect during your journey with us.',
        'From the initial consultation to the pregnancy test and beyond, our dedicated team ensures that you feel supported, informed, and confident at every stage. We believe that a well-informed patient is better prepared for success.',
      ],
      sideImage: '/assets/img/IVF Process.webp',
    },
    {
      heading: 'Step 1: Initial Consultation',
      paragraphs: [
        'Your journey begins with a comprehensive consultation where our fertility specialist reviews your medical history, conducts necessary tests, and discusses your treatment options. This is an opportunity to ask questions and understand the IVF process in detail.',
      ],
      listItems: [
        'Comprehensive medical history review',
        'Physical examination and preliminary tests',
        'Discussion of treatment options and expectations',
        'Financial counseling and package selection',
        'Timeline planning and scheduling',
        'Addressing all your questions and concerns',
      ],
    },
    {
      heading: 'Step 2: Pre-Treatment Evaluation',
      paragraphs: [
        'Before starting treatment, we perform thorough evaluations including blood tests, ultrasound scans, and fertility assessments. This helps us create a personalized treatment plan tailored to your specific needs.',
      ],
      listItems: [
        'Hormonal profile testing',
        'Ultrasound scans to assess ovarian reserve',
        'Semen analysis for male partner',
        'Genetic screening if recommended',
        'Assessment of overall health and fertility factors',
        'Customized treatment protocol development',
      ],
    },
    {
      heading: 'Step 3: Ovarian Stimulation',
      paragraphs: [
        'During this phase, you\'ll receive fertility medications to stimulate your ovaries to produce multiple eggs. Regular monitoring through blood tests and ultrasounds ensures optimal response to the medications.',
      ],
      listItems: [
        'Administration of fertility medications (injections)',
        'Daily or regular medication schedule',
        'Frequent monitoring via blood tests and ultrasounds',
        'Adjustment of medication doses based on response',
        'Tracking egg development and growth',
        'Preparation for egg retrieval when eggs are mature',
      ],
    },
    {
      heading: 'Step 4: Egg Retrieval',
      paragraphs: [
        'Once the eggs are mature, a minor surgical procedure is performed to retrieve them. This is done under sedation and typically takes 15-20 minutes. You can go home the same day after a brief recovery period.',
      ],
      listItems: [
        'Minor surgical procedure under sedation',
        'Ultrasound-guided needle aspiration of eggs',
        'Procedure duration: approximately 15-20 minutes',
        'Recovery period of 1-2 hours',
        'Same-day discharge with post-procedure instructions',
        'Embryology laboratory processing of retrieved eggs',
      ],
    },
    {
      heading: 'Step 5: Fertilization & Embryo Development',
      paragraphs: [
        'In our advanced laboratory, eggs are fertilized with sperm (IVF) or through ICSI. The embryos are then cultured and monitored for 3-5 days. Our embryologists select the best quality embryos for transfer.',
      ],
      listItems: [
        'Sperm collection and processing',
        'Fertilization via IVF or ICSI based on your case',
        'Embryo culture in controlled laboratory conditions',
        'Daily monitoring of embryo development',
        'Embryo quality assessment and grading',
        'Selection of best quality embryos for transfer',
      ],
    },
    {
      heading: 'Step 6: Embryo Transfer',
      paragraphs: [
        'The selected embryo(s) are transferred into your uterus through a simple, painless procedure. This is done in our clinic and takes just a few minutes. You can resume normal activities after a short rest.',
      ],
      listItems: [
        'Simple, painless procedure performed in clinic',
        'Ultrasound-guided embryo transfer',
        'Procedure duration: approximately 5-10 minutes',
        'Transfer of 1-2 selected embryos',
        'Brief rest period after transfer',
        'Post-transfer care instructions and medications',
      ],
    },
    {
      heading: 'Step 7: Pregnancy Test & Follow-up',
      paragraphs: [
        'Approximately 10-14 days after embryo transfer, a blood test confirms pregnancy. If positive, we continue monitoring and provide support throughout your pregnancy journey. Our team is with you every step of the way.',
      ],
      listItems: [
        'Blood pregnancy test 10-14 days after transfer',
        'Early pregnancy confirmation',
        'Continued monitoring if pregnancy is confirmed',
        'Support and guidance throughout pregnancy',
        'Regular follow-up appointments',
        'Ongoing care and support from our team',
      ],
    },
    {
      heading: 'Timeline Overview',
      paragraphs: [
        'A typical IVF cycle follows this timeline:',
      ],
      listItems: [
        'Week 1-2: Initial Consultation & Evaluation',
        'Week 3-4: Ovarian Stimulation',
        'Week 5: Egg Retrieval & Fertilization',
        'Week 6: Embryo Transfer',
        'Week 7-8: Pregnancy Test & Follow-up',
      ],
    },
    {
      heading: 'Support Throughout Your Journey',
      paragraphs: [
        'At Seeds of Innocens, we understand that the IVF journey can be emotionally challenging. Our team provides comprehensive support including counseling, educational resources, and 24/7 availability to address any concerns or questions you may have during your treatment.',
      ],
    },
  ],
};

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
          {/* Content Section - Centered and Full Width */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={journeyContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
