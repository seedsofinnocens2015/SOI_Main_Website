"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';
import Image from 'next/image';

const headingData = {
  title: 'Awards & Accreditations',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Our Recognition & Excellence',
      paragraphs: [
        'Seeds of Innocens has been recognized for excellence in fertility medicine, innovation, and patient care. Our accreditations and awards reflect our commitment to maintaining the highest standards in reproductive medicine.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Accreditations & Certifications',
      paragraphs: [
        'Our laboratory follows strict quality control protocols and maintains certifications from leading regulatory bodies. We conduct regular quality audits, equipment calibration, and staff training to ensure consistent, high-quality outcomes.',
      ],
      listItems: [
        'ISO 9001:2015 - Quality Management System Certification',
        'NABH Accredited - National Accreditation Board for Hospitals & Healthcare Providers',
        'ISAR Member - Indian Society of Assisted Reproduction',
        'FOGSI Affiliated - Federation of Obstetric and Gynaecological Societies of India',
      ],
    },
    {
      heading: 'Professional Associations & Memberships',
      paragraphs: [
        'Seeds of Innocens is an active member of leading professional organizations in reproductive medicine, ensuring we stay at the forefront of medical advances and best practices.',
      ],
      listItems: [
        'Indian Society for Assisted Reproduction (ISAR)',
        'Federation of Obstetric and Gynaecological Societies of India (FOGSI)',
        'Indian Medical Association (IMA)',
        'European Society of Human Reproduction and Embryology (ESHRE)',
        'American Society for Reproductive Medicine (ASRM)',
        'Asia Pacific Initiative on Reproduction (ASPIRE)',
        'International Federation of Fertility Societies (IFFS)',
        'Preimplantation Genetic Diagnosis International Society (PGDIS)',
      ],
    },
    {
      heading: 'Quality Assurance & Compliance',
      paragraphs: [
        'Seeds of Innocens maintains the highest standards of quality and compliance across all our centers. Our commitment to excellence is demonstrated through:',
      ],
      listItems: [
        'Regular internal and external quality audits',
        'Continuous staff training and development programs',
        'Compliance with all regulatory requirements',
        'Ethical guidelines and best practices',
        'State-of-the-art equipment maintenance and calibration',
        'Patient safety protocols and procedures',
        'Data privacy and confidentiality measures',
        'Transparent reporting and documentation',
      ],
    },
  ],
};

const awardsData = [
  {
    title: 'Best IVF Centre 2023',
    description: 'Recognized as the Best IVF Centre in India for excellence in fertility treatments and patient care.',
    awardedBy: 'Healthcare Excellence Awards',
    image: '/assets/img/recent_post2.jpg',
  },
  {
    title: 'Excellence in Reproductive Medicine',
    description: 'Awarded for outstanding achievements in reproductive medicine and innovative treatment approaches.',
    awardedBy: 'National Fertility Association',
    image: '/assets/img/recent_post2.jpg',
  },
  {
    title: 'Innovation in Fertility Technology',
    description: 'Recognized for implementing cutting-edge technology and advanced laboratory techniques in fertility treatment.',
    awardedBy: 'Medical Technology Innovation Awards',
    image: '/assets/img/recent_post2.jpg',
  },
];

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
              <IVFContentSection data={ivfContentData} />
            </div>
          </div>
        </div>
      </Section>

      {/* Awards Cards Section */}
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
                Our Awards & Recognition
              </h2>
            </div>
          </div>
          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>

            {awardsData.map((award, index) => (
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
                  textAlign: 'center',
                  padding: '30px 20px'
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
                  <div style={{ 
                    width: '120px', 
                    height: '120px', 
                    backgroundColor: '#f5f5f5', 
                    borderRadius: '10px', 
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Image 
                      src={award.image} 
                      alt={award.title} 
                      width={120} 
                      height={120}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        borderRadius: '10px'
                      }}
                    />
                  </div>
                  <h4 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    color: '#0A2A43',
                    marginBottom: '15px',
                    lineHeight: '1.4'
                  }}>
                    {award.title}
                  </h4>
                  <p style={{ 
                    fontSize: '15px', 
                    color: '#666', 
                    lineHeight: '1.6',
                    marginBottom: '10px'
                  }}>
                    {award.description}
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#E45352', 
                    fontWeight: '500',
                    margin: 0
                  }}>
                    Awarded by: {award.awardedBy}
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

