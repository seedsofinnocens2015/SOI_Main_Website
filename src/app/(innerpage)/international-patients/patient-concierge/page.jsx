import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'Patient Concierge',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const conciergeContentData = {
  sections: [
    {
      heading: 'Comprehensive Patient Concierge Services',
      paragraphs: [
        'At Seeds of Innocens, we understand that traveling to a new country for medical treatment can be overwhelming. Our dedicated Patient Concierge team provides personalized support throughout your entire fertility treatment journey, ensuring a smooth and comfortable experience from initial consultation to post-treatment follow-up.',
        'Our concierge services are designed to eliminate stress and make your medical journey as seamless as possible. Whether you need assistance with appointments, documentation, language support, or simply have questions about your treatment, our team is here to help you 24/7.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Pre-Treatment Consultation',
      paragraphs: [
        'Before you travel, our concierge team arranges virtual consultations with our specialists to help you understand your treatment plan and prepare for your visit. This includes:',
      ],
      listItems: [
        'Initial medical consultation via video call',
        'Review of your medical history and previous test results',
        'Detailed explanation of the recommended treatment plan',
        'Discussion of treatment timeline and expectations',
        'Answering all your questions and concerns',
        'Preparation guide for your visit to India',
      ],
    },
    {
      heading: 'Appointment Scheduling and Coordination',
      paragraphs: [
        'Our concierge team coordinates all aspects of your treatment schedule to minimize your stay and maximize efficiency:',
      ],
      listItems: [
        'Scheduled coordination of all medical appointments',
        'Lab tests and diagnostic procedures scheduling',
        'Procedure appointments and follow-up visits',
        'Minimizing waiting times between appointments',
        'Flexible scheduling to accommodate your travel plans',
        'Real-time appointment updates and reminders',
      ],
    },
    {
      heading: '24/7 Support and Assistance',
      paragraphs: [
        'Round-the-clock assistance is available for any questions, concerns, or emergencies during your treatment journey:',
      ],
      listItems: [
        '24/7 helpline for urgent queries and emergencies',
        'Immediate response to your concerns',
        'Emergency medical assistance coordination',
        'Treatment-related question support',
        'General guidance and information',
        'Peace of mind throughout your journey',
      ],
    },
    {
      heading: 'Language Support',
      paragraphs: [
        'Multilingual support staff help you communicate effectively with our medical team and understand all procedures:',
      ],
      listItems: [
        'Professional interpreters available for consultations',
        'Multilingual support staff for daily interactions',
        'Translation of medical documents and reports',
        'Clear communication in your preferred language',
        'Understanding of all procedures and instructions',
        'Comfortable communication throughout your stay',
      ],
    },
    {
      heading: 'Documentation Assistance',
      paragraphs: [
        'Help with all necessary medical reports, treatment summaries, and documentation:',
      ],
      listItems: [
        'Medical report compilation and organization',
        'Treatment summary preparation',
        'Documentation for insurance claims',
        'Medical visa support documents',
        'Post-treatment documentation',
        'Record maintenance for future reference',
      ],
    },
    {
      heading: 'Medication Management',
      paragraphs: [
        'Comprehensive guidance on medications, prescriptions, and follow-up care:',
      ],
      listItems: [
        'Detailed medication instructions in your language',
        'Prescription management and pharmacy guidance',
        'Follow-up care instructions',
        'Medication schedule coordination',
        'Side effect management guidance',
        'Post-treatment medication support',
      ],
    },
    {
      heading: 'How Our Concierge Service Works',
      paragraphs: [
        'Our streamlined concierge process ensures you receive personalized attention at every step:',
      ],
      listItems: [
        'Initial Contact: Reach out to our concierge team via email, phone, or online form',
        'Dedicated Coordinator: Assigned personal coordinator who understands your needs and preferences',
        'Personalized Planning: Customized treatment plan and timeline tailored to your schedule',
        'Ongoing Support: Continuous assistance throughout treatment and post-treatment follow-up',
      ],
    },
    {
      heading: 'Get Started with Concierge Services',
      paragraphs: [
        'Contact our Patient Concierge team to begin your journey. We are here to make your experience as smooth and comfortable as possible. Our team is ready to assist you with all your needs and answer any questions you may have about our services.',
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
              <IVFContentSection data={conciergeContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
