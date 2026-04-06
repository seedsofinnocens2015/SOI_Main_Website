"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
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
    image: '/assets/img/Times-Healthcare-Achievers.png',
  },
  {
    title: 'National Fertility Awards',
    description:
      'Honoured at Healthworld’s National Fertility Awards for leadership, clinical outcomes, and contribution to fertility care in India.',
    awardedBy: 'Healthworld.com — National Fertility Awards',
    image: '/assets/img/National-Fertility-Awards-2022.png',
  },
  {
    title: 'Indian Fertility Society (IFS)',
    description:
      'Aligned with the Indian Fertility Society — India’s leading professional body for assisted reproduction, ethics, and clinical standards.',
    awardedBy: 'Indian Fertility Society (IFS)',
    image: '/assets/img/Indian-Fertility-Society.png',
  },
  {
    title: 'Association of Obstetricians & Gynaecologists of Delhi (AOGD)',
    description:
      'Connected with AOGD’s community of obstetricians and gynaecologists, reflecting our commitment to women’s health and safe, evidence-based care.',
    awardedBy: 'AOGD — Association of Obstetricians and Gynaecologists of Delhi',
    image: '/assets/img/Association-of-Obstetricians-And-Gynaecologists-of-Delhi.png',
  },
  {
    title: 'Women of Excellence 2025',
    description:
      'Recognised among Women of Excellence 2025 for outstanding contribution to healthcare, leadership, and patient-centred fertility care.',
    awardedBy: 'Women of Excellence Awards 2025',
    image: '/assets/img/women-of-excellence-2025.png',
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
                    width: 'min(100%, 220px)',
                    height: '220px',
                    maxWidth: '220px',
                    backgroundColor: '#fafafa',
                    borderRadius: '12px',
                    margin: '0 auto 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px',
                  }}>
                    <Image
                      src={award.image}
                      alt={award.title}
                      width={220}
                      height={220}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: '8px',
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

