"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';
import Image from 'next/image';

const headingData = {
  title: 'Our Embryology Lab & Technology',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Our Embryology Laboratory',
      paragraphs: [
        'Our embryology laboratory is equipped with the latest technology and adheres to the highest international standards. We maintain optimal conditions for embryo development, ensuring the best possible outcomes for our patients.',
        'Our state-of-the-art facilities include advanced air filtration systems, precise temperature and humidity controls, and cutting-edge equipment for embryo culture, selection, and preservation.',
        'We are committed to maintaining the highest standards of quality and safety, with continuous monitoring and regular quality audits to ensure consistent, excellent outcomes for all our patients.',
      ],
      sideImage: '/assets/img/Embryology Lab.png',
    },
  ],
};

const technologyData = [
  {
    title: 'Closed Working Chamber System',
    description: 'Our closed working chamber maintains optimal pH, temperature, and gas concentrations throughout embryo manipulation, minimizing environmental stress and improving embryo quality.',
  },
  {
    title: 'Time-Lapse Embryo Monitoring',
    description: 'Advanced time-lapse imaging systems allow continuous monitoring of embryo development without removing them from optimal culture conditions, enabling better embryo selection.',
  },
  {
    title: 'Vitrification Technology',
    description: 'State-of-the-art vitrification techniques ensure high survival rates for frozen eggs and embryos, preserving fertility for future use with minimal damage.',
  },
  {
    title: 'Laser Assisted Hatching (LAH)',
    description: 'Precise laser technology assists in embryo hatching, improving implantation rates, especially for older embryos or those with thickened zona pellucida.',
  },
  {
    title: 'Electronic Witness System',
    description: 'Advanced tracking systems ensure complete traceability and prevent mix-ups, maintaining the highest standards of safety and accuracy in our laboratory.',
  },
  {
    title: '24/7 Environmental Monitoring',
    description: 'Continuous monitoring of air quality, temperature, humidity, and gas concentrations ensures optimal conditions for embryo culture at all times.',
  },
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
          {/* Content Section - Centered and Full Width */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={ivfContentData} />
            </div>
          </div>
        </div>
      </Section>

      {/* Technology Cards Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="cs_ivf_content_heading" style={{ marginBottom: '40px' }}>
                Our Advanced Technology
              </h2>
            </div>
          </div>
          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {technologyData.map((tech, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e8e8e8',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '30px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                }}
                >
                  <h4 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    color: '#0A2A43',
                    marginBottom: '15px',
                    lineHeight: '1.4'
                  }}>
                    {tech.title}
                  </h4>
                  <p style={{ 
                    fontSize: '15px', 
                    color: '#666', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

