import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'Travel Support',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const travelContentData = {
  sections: [
    {
      heading: 'Comprehensive Travel Support Services',
      paragraphs: [
        'We understand that traveling to a new country for medical treatment can be overwhelming. Our Travel Support team ensures a hassle-free experience by handling all travel-related arrangements, from visa assistance to local transportation. Our goal is to make your journey to India as smooth and stress-free as possible.',
        'Whether you are coming from Europe, Americas, Middle East, or anywhere else in the world, our dedicated travel support team will guide you through every step of your journey, ensuring you feel comfortable and confident throughout your stay in India.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Visa Assistance',
      paragraphs: [
        'Guidance and support for medical visa applications, including required documentation and embassy coordination:',
      ],
      listItems: [
        'Medical visa application guidance and documentation support',
        'Assistance with visa application form filling',
        'Required medical documents preparation',
        'Embassy appointment coordination',
        'Visa status tracking and updates',
        'Support for visa extensions if needed',
      ],
    },
    {
      heading: 'Accommodation Arrangements',
      paragraphs: [
        'Assistance in finding comfortable, affordable accommodation near our centers:',
      ],
      listItems: [
        'Hotel recommendations based on your preferences and budget',
        'Special rates for medical tourists',
        'Serviced apartments for longer stays',
        'Location-based suggestions near treatment centers',
        'Accommodation booking assistance',
        'Comfortable and safe lodging options',
      ],
    },
    {
      heading: 'Local Transportation',
      paragraphs: [
        'Airport pickup, drop-off services, and local transportation arrangements:',
      ],
      listItems: [
        'Airport transfer services (pickup and drop-off)',
        'Appointment day transportation coordination',
        'Local travel assistance during your stay',
        '24/7 emergency transport availability',
        'Reliable and safe transportation options',
        'Flexible transportation scheduling',
      ],
    },
    {
      heading: 'Cultural Support',
      paragraphs: [
        'Help with local customs, cuisine recommendations, and making you feel at home:',
      ],
      listItems: [
        'Cultural orientation and local customs guidance',
        'Restaurant recommendations for dietary preferences',
        'Translation services for daily interactions',
        'Local area guides and information',
        'Shopping and entertainment recommendations',
        'Making you feel comfortable in a new environment',
      ],
    },
    {
      heading: 'Pre-Travel Checklist',
      paragraphs: [
        'To ensure a smooth journey, make sure you have the following items ready:',
      ],
      listItems: [
        'Valid passport with minimum 6 months validity',
        'Medical visa approval and necessary documentation',
        'Travel insurance (highly recommended)',
        'Medical reports and previous test results',
        'Confirmed flight bookings',
        'Accommodation arrangements',
        'Emergency contact information',
        'Currency exchange and payment methods arranged',
      ],
    },
    {
      heading: 'Why Choose Our Travel Support Services?',
      paragraphs: [
        'Our travel support services offer numerous advantages:',
      ],
      listItems: [
        'Experienced team familiar with international patient needs',
        'Comprehensive support from planning to departure',
        'Cost-effective travel arrangements',
        '24/7 assistance during your stay',
        'Personalized service tailored to your preferences',
        'Stress-free travel experience',
        'Focus on your treatment while we handle logistics',
      ],
    },
    {
      heading: 'Need Travel Assistance?',
      paragraphs: [
        'Our Travel Support team is ready to help you with all your travel needs. Contact us to get started with your journey. We will ensure that all your travel arrangements are taken care of, allowing you to focus entirely on your treatment and recovery.',
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
              <IVFContentSection data={travelContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
