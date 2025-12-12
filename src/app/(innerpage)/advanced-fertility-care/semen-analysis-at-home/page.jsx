"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const headingData = {
  title: 'Semen Analysis at Home',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/male.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/male.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/male.jpg',
    '/assets/img/male.jpg'
  ],
};

const semenAnalysisAtHomeContentData = {
  sections: [
    {
      heading: 'About Home Semen Analysis',
      paragraphs: [
        'Seeds of Innocens presents Home Semen Analysis, a groundbreaking fertility screening service designed to empower men in assessing their fertility status conveniently and privately. Our primary objective is to dispel the social stigma associated with semen analysis, offering a seamless and comfortable experience.',
        'Leveraging cutting-edge technology, we utilize the world\'s first fully automatic semen analyzer with AI to uphold men\'s privacy. This innovative process begins with the collection of a semen sample at home. Within just 15 minutes, our state-of-the-art AI-equipped analyzer provides a thorough and reliable semen analysis, eliminating the need for laborious lab appointments and waiting for results.',
        'The Home Semen Analysis test allows men to evaluate the quality and quantity of their sperm along with visual insight to sperm shape and movement in the privacy of their homes. Our expert team conducts a comprehensive check-up, including semen collection, analysis, and detailed reports featuring key clinical parameters such as sperm count, motility, morphology, and PH.',
      ],
      sideImage: '/assets/img/Semen Analysis at Home.webp',
    },
    {
      heading: 'Why Consider Semen Analysis?',
      paragraphs: [
        'Understanding male fertility factors is crucial for couples planning to conceive:',
      ],
    },
    {
      heading: 'Male Infertility Factors',
      paragraphs: [
        'Various factors can impact sperm health and fertility:',
      ],
      listItems: [
        'Lifestyle factors like alcohol consumption, smoking, work-related stress, and environmental factors can impact sperm count and fertility.',
        'Premature ejaculation may lead to reproductive tract obstruction, affecting semen ejection.',
        'Anabolic steroid usage can result in abnormal semen parameters, impacting sperm count and shape.',
      ],
    },
    {
      heading: 'Sperm Health Monitoring',
      paragraphs: [
        'Semen analysis is vital for couples navigating conception challenges:',
      ],
      listItems: [
        'Vital for couples navigating conception challenges, offering a detailed evaluation of male fertility.',
        'Provides routine check of overall sperm health, enabling timely detection and intervention for any changes or abnormalities.',
      ],
    },
    {
      heading: 'How will we do it?',
      paragraphs: [
        'A step by step roadmap:',
      ],
      listItems: [
        'Schedule your appointment.',
        'You will get a call from our expert who will guide on do\'s and don\'ts before semen analysis',
        'Our expert phlebotomist will reach your home with a fully automatic semen analyzer, incorporating AI technology.',
        'Semen analysis will be done onsite.',
        'Real-time results will be generated within 30 minutes.',
        'Your comprehensive WHO standard report will be delivered to you through email or WhatsApp in the form of a PDF, video, or CSV file.',
        'Post-test counselling with our expert',
      ],
    },
    {
      heading: 'Guidelines on how to prepare for semen analysis',
      paragraphs: [
        'For detailed preparation guidelines, please refer to our comprehensive guide:',
      ],
    },
    {
      heading: 'Key parameters determined in just a matter of minutes',
      paragraphs: [
        'Our advanced AI-powered analyzer provides comprehensive results including:',
      ],
      listItems: [
        'Sperm count: Refers to the volume of sperm cells in ejaculate.',
        'Motility: Determines how well the sperm swims to the egg.',
        'Morphology: The size and shape of sperm cells.',
        'PH: Describes the acidity of your semen.',
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
              <IVFContentSection data={semenAnalysisAtHomeContentData} benefitImages={serviceData.benefitImages} />
              
              {/* Guidelines Button Section */}
              <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <Link 
                  href="/advanced-fertility-care/semen-analysis-at-home/preparation-guidelines"
                  style={{
                    display: 'inline-block',
                    padding: '15px 40px',
                    backgroundColor: '#CC2627',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#CC2627';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#CC2627';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
                  }}
                >
                  View Preparation Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
