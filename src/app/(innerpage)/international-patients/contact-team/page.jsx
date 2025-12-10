import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'Contact Team',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const contactContentData = {
  sections: [
    {
      heading: 'International Patient Support Team',
      paragraphs: [
        'Our dedicated International Patient Support Team is here to assist you at every step of your journey. Whether you need information about treatments, travel arrangements, or have any questions, we are just a call or email away.',
        'We understand that seeking fertility treatment in a different country requires trust and confidence. Our team is committed to providing you with all the information and support you need to make informed decisions about your fertility journey.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'International Patient Coordinator',
      paragraphs: [
        'Your primary contact for initial consultation coordination, treatment plan discussions, and general inquiries:',
      ],
      listItems: [
        'Initial consultation coordination',
        'Treatment plan discussions and explanations',
        'General inquiries and information',
        'Medical information and guidance',
        'Appointment scheduling assistance',
        'Pre-treatment preparation guidance',
      ],
    },
    {
      heading: 'Travel Support Team',
      paragraphs: [
        'Dedicated team for all travel-related assistance:',
      ],
      listItems: [
        'Visa application assistance and guidance',
        'Accommodation arrangements and recommendations',
        'Transportation coordination (airport transfers, local travel)',
        'Travel itinerary planning',
        'Pre-travel checklist and preparation',
        '24/7 travel support during your stay',
      ],
    },
    {
      heading: 'Medical Concierge',
      paragraphs: [
        'Specialized support for medical and treatment-related needs:',
      ],
      listItems: [
        'Appointment scheduling with specialists',
        'Medical documentation assistance',
        'Treatment coordination and follow-up',
        'Medication management guidance',
        'Test results and report coordination',
        'Post-treatment care instructions',
      ],
    },
    {
      heading: 'Quick Contact Information',
      paragraphs: [
        'Multiple ways to reach our International Patient Support Team:',
      ],
      listItems: [
        'Email: international@seedsofinnocens.com - Available 24/7 for all inquiries',
        'Phone: +91-9810350512 - Direct line to our support team',
        'WhatsApp: Available for instant messaging and quick queries',
        'Online Form: Submit your inquiry through our website contact form',
        'Video Consultation: Schedule a virtual meeting with our team',
      ],
    },
    {
      heading: 'How to Reach Us',
      paragraphs: [
        'Choose the communication method that works best for you:',
      ],
      listItems: [
        'For urgent queries: Call our 24/7 helpline',
        'For detailed information: Email us with your questions',
        'For quick questions: Use WhatsApp for instant responses',
        'For consultations: Schedule a video call with our team',
        'For travel arrangements: Contact our Travel Support Team directly',
        'For medical queries: Reach out to our Medical Concierge',
      ],
    },
    {
      heading: 'What to Expect When You Contact Us',
      paragraphs: [
        'When you reach out to our International Patient Support Team:',
      ],
      listItems: [
        'Prompt response to your inquiry (within 24 hours for emails)',
        'Personalized attention to your specific needs',
        'Comprehensive information about treatments and services',
        'Guidance on next steps in your fertility journey',
        'Clear and transparent communication',
        'Respectful and compassionate service',
      ],
    },
    {
      heading: 'Get in Touch',
      paragraphs: [
        'Ready to begin your fertility journey with Seeds of Innocens? Contact our International Patient Support Team today. We are here to answer all your questions, provide detailed information, and guide you through every step of the process. Your dream of parenthood starts with a simple conversation - reach out to us now!',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header2.jpg"
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
              <IVFContentSection data={contactContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
