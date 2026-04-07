"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import React from 'react';
import Image from 'next/image';
import { getAssetPathClient } from '@/app/utils/assetPath';

const headingData = {
  title: 'Awards & Accreditations',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Our Recognition & Excellence',
      paragraphs: [
        'Seeds of Innocens has been recognized for excellence in fertility medicine, innovation, and patient care. Our accreditations and awards reflect our commitment to maintaining the highest standards in reproductive medicine.',
      ]

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
        'Seeds of Innocens maintains the highest standards of quality and compliance across all our centres. Our commitment to excellence is demonstrated through:',
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

/** Copy aligned with each badge: Times Achievers, Healthworld, IFS, AOGD, Women of Excellence */
const awardsData = [
  {
    title: 'Times Healthcare Achievers — Delhi NCR 2020',
    description:
      'Recognised among Times Healthcare Achievers for excellence in healthcare delivery and fertility services in the Delhi NCR region.',
    awardedBy: 'The Times of India — Times Healthcare Achievers',
    image: '/assets/img/Awards/1.png',
  },
  {
    title: 'National Fertility Awards',
    description:
      'Honoured at Healthworld’s National Fertility Awards for leadership, clinical outcomes, and contribution to fertility care in India.',
    awardedBy: 'Healthworld.com — National Fertility Awards',
    image: '/assets/img/Awards/2.png',
  },
  {
    title: 'Indian Fertility Society (IFS)',
    description:
      'Aligned with the Indian Fertility Society — India’s leading professional body for assisted reproduction, ethics, and clinical standards.',
    awardedBy: 'Indian Fertility Society (IFS)',
    image: '/assets/img/Awards/3.png',
  },
  {
    title: 'Association of Obstetricians & Gynaecologists of Delhi (AOGD)',
    description:
      'Connected with AOGD’s community of obstetricians and gynaecologists, reflecting our commitment to women’s health and safe, evidence-based care.',
    awardedBy: 'AOGD — Association of Obstetricians and Gynaecologists of Delhi',
    image: '/assets/img/Awards/4.png',
  },
  {
    title: 'Women of Excellence 2025',
    description:
      'Recognised among Women of Excellence 2025 for outstanding contribution to healthcare, leadership, and patient-centred fertility care.',
    awardedBy: 'Women of Excellence Awards 2025',
    image: '/assets/img/Awards/5.png',
  },
  {
    title: 'IFS Member',
    description:
      'Aligned with the Indian Fertility Society — India’s leading professional body for assisted reproduction, ethics, and clinical standards.',
    awardedBy: 'Indian Fertility Society (IFS)',
    image: '/assets/img/Awards/6.png',
  },
  {
    title: 'IFS Member',
    description:
      'Aligned with the Indian Fertility Society — India’s leading professional body for assisted reproduction, ethics, and clinical standards.',
    awardedBy: 'Indian Fertility Society (IFS)',
    image: '/assets/img/Awards/7.png',
  },
  {
    title: 'IFS Member',
    description:
      'Aligned with the Indian Fertility Society — India’s leading professional body for assisted reproduction, ethics, and clinical standards.',
    awardedBy: 'Indian Fertility Society (IFS)',
    image: '/assets/img/Awards/8.png',
  },
  {
    title: 'IFS Member',
    description:
      'Aligned with the Indian Fertility Society — India’s leading professional body for assisted reproduction, ethics, and clinical standards.',
    awardedBy: 'Indian Fertility Society (IFS)',
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
              <IVFContentSection data={ivfContentData} accentHeadingStyle />
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
              <AccentHeading style={{ marginBottom: '40px' }}>Our Awards & Recognition</AccentHeading>
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
                  {/* <h4 style={{
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
                  </p> */}
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

