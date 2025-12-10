"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';
import Image from 'next/image';

const headingData = {
  title: 'Media & Press',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Our Media Coverage',
      paragraphs: [
        'Seeds of Innocens has been featured in various media outlets, highlighting our innovative treatments, success stories, and contributions to the field of reproductive medicine.',
        'Our commitment to excellence and patient care has earned recognition from leading healthcare publications, news channels, and medical journals across India and internationally.',
        'We are proud to share our achievements, research breakthroughs, and patient success stories through various media platforms, helping to raise awareness about fertility treatments and reproductive health.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
  ],
};

const pressReleasesData = [
  {
    date: 'March 15, 2024',
    title: 'Seeds of Innocens Launches Advanced PGT Testing Program',
    description: 'Seeds of Innocens announces the launch of comprehensive preimplantation genetic testing services, offering couples improved success rates and reduced genetic risk.',
    image: '/assets/img/recent_post2.jpg',
  },
  {
    date: 'February 10, 2024',
    title: 'Record-Breaking Success Rates at Seeds of Innocens',
    description: 'The fertility centre reports exceptional success rates, with over 20,000 successful pregnancies achieved through advanced IVF techniques and personalized care.',
    image: '/assets/img/recent_post2.jpg',
  },
  {
    date: 'January 20, 2024',
    title: 'International Expansion: Seeds of Innocens Opens Center in Africa',
    description: 'Seeds of Innocens expands its global presence with the opening of a new state-of-the-art fertility centre in Zambia, bringing world-class fertility care to more regions.',
    image: '/assets/img/recent_post2.jpg',
  },
  {
    date: 'December 5, 2023',
    title: 'Dr. Gauri Agrawal Honored for Excellence in Fertility Medicine',
    description: 'Founder Dr. Gauri Agrawal receives recognition for outstanding contributions to reproductive medicine and commitment to advancing fertility treatments.',
    image: '/assets/img/recent_post2.jpg',
  },
];

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
              <IVFContentSection data={ivfContentData} />
            </div>
          </div>
        </div>
      </Section>

      {/* Press Releases Cards Section */}
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
                Our Press Releases
              </h2>
            </div>
          </div>
          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {pressReleasesData.map((release, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e8e8e8',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
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
                  <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                    <Image 
                      src={release.image} 
                      alt={release.title} 
                      width={400} 
                      height={250}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <span style={{ 
                      fontSize: '14px', 
                      color: '#E45352', 
                      fontWeight: '500',
                      marginBottom: '10px',
                      display: 'block'
                    }}>
                      {release.date}
                    </span>
                    <h4 style={{ 
                      fontSize: '18px', 
                      fontWeight: '600', 
                      color: '#0A2A43',
                      marginBottom: '10px',
                      lineHeight: '1.4'
                    }}>
                      {release.title}
                    </h4>
                    <p style={{ 
                      fontSize: '14px', 
                      color: '#666', 
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {release.description}
                    </p>
                  </div>
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

