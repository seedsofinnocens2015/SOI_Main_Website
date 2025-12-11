"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Consents',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const consentsContentData = {
  sections: [
    {
      heading: 'Consent Forms - Understanding Your Treatment',
      paragraphs: [
        'Download and review the consent forms required for your specific treatment. These forms contain important information about procedures, risks, benefits, and alternatives. Please read carefully and bring signed copies to your appointment.',
        'Informed consent is an essential part of fertility treatment. Each consent form provides detailed information about the procedure, potential risks, success rates, and alternative options to help you make informed decisions about your care.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Understanding Informed Consent',
      paragraphs: [
        'Informed consent ensures you understand:',
      ],
      listItems: [
        'The nature and purpose of the procedure',
        'Potential risks and complications',
        'Expected benefits and success rates',
        'Alternative treatment options available',
        'What to expect during and after the procedure',
        'Your rights as a patient',
      ],
    },
    {
      heading: 'Why Consent Forms Are Important',
      paragraphs: [
        'Consent forms serve multiple important purposes:',
      ],
      listItems: [
        'Legal protection for both patients and medical providers',
        'Ensures patients receive complete information about treatments',
        'Documents your understanding and agreement to proceed',
        'Helps you ask informed questions before treatment',
        'Provides clarity on treatment expectations and outcomes',
      ],
    },
    {
      heading: 'Required Consents by Treatment Type',
      paragraphs: [
        'Different treatments require specific consent forms:',
      ],
      listItems: [
        'IVF Treatment Consent - Required for all IVF procedures',
        'ICSI Procedure Consent - Needed if ICSI is part of your treatment',
        'Embryo Freezing Consent - Required for embryo cryopreservation',
        'Genetic Testing Consent (PGT) - Needed for genetic screening',
        'Egg Freezing Consent - Required for oocyte cryopreservation',
        'Sperm Collection Consent - Needed for specific sperm collection procedures',
      ],
    },
  ],
};

const consents = [
  {
    name: 'IVF Treatment Consent',
    description: 'Informed consent form for In Vitro Fertilization (IVF) treatment, including procedure details, risks, and success rates.',
    size: 'PDF, 5 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_1.png',
    important: true,
  },
  {
    name: 'ICSI Procedure Consent',
    description: 'Consent form for Intracytoplasmic Sperm Injection (ICSI) procedure, explaining the technique and implications.',
    size: 'PDF, 4 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_2.png',
    important: true,
  },
  {
    name: 'Embryo Freezing Consent',
    description: 'Consent form for cryopreservation of embryos, including storage terms and future use options.',
    size: 'PDF, 4 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_3.png',
    important: false,
  },
  {
    name: 'Genetic Testing Consent (PGT)',
    description: 'Informed consent for Preimplantation Genetic Testing, including benefits, limitations, and implications.',
    size: 'PDF, 6 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_4.png',
    important: true,
  },
  {
    name: 'Egg Freezing Consent',
    description: 'Consent form for oocyte cryopreservation, including procedure details and future use options.',
    size: 'PDF, 4 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_5.png',
    important: false,
  },
  {
    name: 'Sperm Collection Consent',
    description: 'Consent form for sperm collection procedures including TESA/PESA if required.',
    size: 'PDF, 3 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_6.png',
    important: false,
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
          {/* First Content Section Only */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection 
                data={{
                  sections: [consentsContentData.sections[0]]
                }} 
                benefitImages={serviceData.benefitImages} 
              />
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Consents Grid */}
          <div className="row">
            <div className="col-12">
              <h2 className="cs_ivf_content_heading" style={{ marginBottom: '40px' }}>
                Download Consent Forms
              </h2>
            </div>
          </div>

          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {consents.map((consent, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_iconbox cs_style_2 cs_radius_15" style={{ 
                  height: '100%', 
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: consent.important ? '2px solid #ff9800' : '1px solid #e8e8e8',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  boxShadow: consent.important ? '0px 4px 15px rgba(255, 152, 0, 0.15)' : '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = consent.important ? '0px 8px 25px rgba(255, 152, 0, 0.25)' : '0px 8px 25px rgba(0, 0, 0, 0.1)';
                  if (!consent.important) {
                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = consent.important ? '0px 4px 15px rgba(255, 152, 0, 0.15)' : '0px 2px 10px rgba(0, 0, 0, 0.05)';
                  if (!consent.important) {
                    e.currentTarget.style.borderColor = '#e8e8e8';
                  }
                }}
                >
                  {consent.important && (
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      backgroundColor: '#ff9800',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      boxShadow: '0px 2px 8px rgba(255, 152, 0, 0.3)'
                    }}>
                      Required
                    </div>
                  )}
                  <div className="cs_iconbox_header mb-3" style={{ flex: 1 }}>
                    <div className="cs_iconbox_icon cs_center mb-3" style={{
                      width: '70px',
                      height: '70px',
                      margin: '0 auto 20px',
                      backgroundColor: consent.important ? '#fff3e0' : '#f8f9fa',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}>
                      <Image 
                        src={consent.icon} 
                        alt={consent.name} 
                        width={40} 
                        height={40}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <h3 className="cs_iconbox_title" style={{ 
                      fontSize: '20px', 
                      marginBottom: '12px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      lineHeight: '1.3',
                      paddingRight: consent.important ? '80px' : '0'
                    }}>
                      {consent.name}
                    </h3>
                    <p className="cs_iconbox_subtitle" style={{ 
                      fontSize: '13px', 
                      color: '#666',
                      marginBottom: '15px',
                      fontWeight: '500'
                    }}>
                      {consent.size}
                    </p>
                    <p className="cs_iconbox_subtitle" style={{ 
                      fontSize: '14px', 
                      lineHeight: '1.7', 
                      marginBottom: '20px',
                      color: '#555'
                    }}>
                      {consent.description}
                    </p>
                  </div>
                  <a 
                    href={consent.downloadUrl}
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{ 
                      width: '100%', 
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'block',
                      marginTop: 'auto',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    download
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Remaining Content Sections */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection 
                data={{
                  sections: consentsContentData.sections.slice(1)
                }} 
                benefitImages={serviceData.benefitImages} 
              />
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Important Information */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="cs_ivf_content_section" style={{ 
                padding: '30px', 
                backgroundColor: '#fff3cd', 
                borderRadius: '10px',
                borderLeft: '4px solid #ffc107'
              }}>
                <h3 className="cs_ivf_content_heading mb-3" style={{ color: '#856404', fontSize: '24px' }}>
                  Important Information About Consents
                </h3>
                <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                    <strong>Read Carefully:</strong> Each consent form contains detailed information about procedures, risks, benefits, and alternatives
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                    <strong>Both Partners:</strong> If applicable, both partners must sign the consent forms
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                    <strong>Witness Required:</strong> Some consents require a witness signature
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                    <strong>Questions:</strong> If you have any questions about the consent forms, discuss them with your doctor before signing
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                    <strong>Bring Signed Copies:</strong> Bring all signed consent forms to your appointment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
