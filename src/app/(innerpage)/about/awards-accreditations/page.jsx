"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import React from 'react';
import Image from 'next/image';
import { getAssetPathClient } from '@/app/utils/assetPath';

const headingData = {
  uspTitle: 'Heading- Remarkable <br /> <span class="cs_accent_color"> IVF Chain of India </span>',
};

/** Copy aligned with each badge: Times Achievers, Healthworld, IFS, AOGD, Women of Excellence */
const awardsData = [
  {
    title: 'The RX Healthcare Excellence Award',
    description:
      'Seeds of Innocens IVF\'s exceptional achievement in treating infertility is recognised with the RX Healthcare Excellence Award.',
    awardedBy: 'RX Healthcare Excellence Award',
    image: '/assets/img/Awards/1.png',
  },
  {
    title: 'The Femina 40 Under 40 Award',
    description:
      'In 2022, Dr. Gauri Agarwal received the Femina Under 40 Award for her dedication to women\'s reproductive health.',
    awardedBy: 'Femina 40 Under 40 Award',
    image: '/assets/img/Awards/2.png',
  },
  {
    title: 'The BW 40 Under 40 Award',
    description:
      'Because of her extraordinary medical skills and her contributions to the development of cutting-edge fertility therapies, Dr. Gauri Agarwal was given the BW 40 under 40 award.',
    awardedBy: 'BW 40 Under 40 Award',
    image: '/assets/img/Awards/3.png',
  },
  {
    title: 'The Times 40 Under 40 Award',
    description:
      'Dr. Gauri Agarwal received the Times 40 Under 40 Award for instilling confidence among the patients and acknowledged for her compassionate approach to reproductive medicine.',
    awardedBy: 'Times 40 Under 40 Award',
    image: '/assets/img/Awards/4.png',
  },
  {
    title: 'Voice of Healthcare and Acknowledged Public Choice',
    description:
      'Seeds of Innocens IVF has been remarked as the  Best IVF and Fertility Chain of the Year North for their outstanding contribution to reproductive healthcare.',
    awardedBy: 'Voice of Healthcare and Acknowledged Public Choice',
    image: '/assets/img/Awards/5.png',
  },
  {
    title: 'Certificate for Excellence in Global Healthcare',
    description:
      'Seeds of Innocens IVF has won a Global Healthcare Excellence Awards 2018 for a valuable contribution towards healthcare excellence and dedicated fertility services.',
    awardedBy: 'Certificate for Excellence in Global Healthcare',
    image: '/assets/img/Awards/6.png',
  },
  {
    title: 'Prestigious Healthcare Winner Award',
    description:
      'Seeds of Innocence IVF has remarked its place as IVF Chain of the year North at National Fertility Awards in 2022.',
    awardedBy: 'Prestigious Healthcare Winner Award',
    image: '/assets/img/Awards/7.png',
  },
  {
    title: 'Integrated Team in IVF of the year North at National Fertility Awards',
    description:
      'Given in recognition of his continuous dedication and excellence in reproductive medicine and innovative infertility treatment solutions.',
    awardedBy: 'Integrated Team in IVF of the year North at National Fertility Awards',
    image: '/assets/img/Awards/8.png',
  },
  {
    title: 'Best Fertility Specialist Award',
    description:
      'Dr. Gauri Agarwal has been acknowledged for excellence in work, a trusted fertility specialist, and consistent success in fertility treatment.',
    awardedBy: 'Best Fertility Specialist Award',
    image: '/assets/img/Awards/9.png',
  },
];

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.png"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Main Content Section */}
      {/* <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={ivfContentData} accentHeadingStyle />
            </div>
          </div>
        </div>
      </Section> */}

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
              <AccentHeading style={{ marginBottom: '40px', marginTop: '40px' }}>Our Awards & Recognition</AccentHeading>
            </div>
          </div>
          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>

            {awardsData.map((award, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '12px 8px',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      src={getAssetPathClient(award.image)}
                      alt={award.title}
                      width={520}
                      height={520}
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: 'min(400px, 70vw)',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <h4 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#000000',
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
                    color: '#df3655',
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

