"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Forms',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const formsContentData = {
  sections: [
    {
      heading: 'Patient Forms - Complete Your Documentation',
      paragraphs: [
        'Download and fill out the necessary forms before your appointment. Completing these forms in advance will save time during your visit and help us prepare for your consultation.',
        'All forms are available in PDF format and can be downloaded, printed, and filled out at your convenience. Please bring all completed forms to your first appointment along with original documents for verification.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Why Complete Forms in Advance?',
      paragraphs: [
        'Preparing your forms before your appointment offers several benefits:',
      ],
      listItems: [
        'Save time during your visit - no need to fill forms at the clinic',
        'Allow our team to review your information before consultation',
        'Ensure accuracy - you can take your time to provide complete information',
        'Better preparation - review your medical history and gather documents',
        'Smoother appointment experience with organized documentation',
      ],
    },
    {
      heading: 'Required Forms for Your Appointment',
      paragraphs: [
        'The following forms may be required depending on your treatment plan:',
      ],
      listItems: [
        'Patient Registration Form - Basic personal and contact information',
        'Medical History Form - Comprehensive health and medical background',
        'Consent for Treatment Form - General treatment consent',
        'Insurance Information Form - For billing and insurance claims',
        'Partner Information Form - If applicable for your treatment',
        'Financial Agreement Form - Payment plans and financial arrangements',
      ],
    },
  ],
};

const forms = [
  {
    name: 'Patient Registration Form',
    description: 'Complete this form with your personal information, contact details, and medical history.',
    size: 'PDF, 2 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_1.png',
  },
  {
    name: 'Medical History Form',
    description: 'Detailed medical history form including previous treatments, medications, and health conditions.',
    size: 'PDF, 4 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_2.png',
  },
  {
    name: 'Consent for Treatment Form',
    description: 'General consent form for fertility treatment procedures and protocols.',
    size: 'PDF, 3 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_3.png',
  },
  {
    name: 'Insurance Information Form',
    description: 'Form to provide your insurance details for billing and claim processing.',
    size: 'PDF, 2 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_4.png',
  },
  {
    name: 'Partner Information Form',
    description: 'Form for your partner\'s medical history and information (if applicable).',
    size: 'PDF, 3 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_5.png',
  },
  {
    name: 'Financial Agreement Form',
    description: 'Financial agreement and payment plan documentation.',
    size: 'PDF, 2 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_6.png',
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
          {/* First Content Section Only */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection 
                data={{
                  sections: [formsContentData.sections[0]]
                }} 
                benefitImages={serviceData.benefitImages} 
              />
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Forms Grid */}
          <div className="row">
            <div className="col-12">
              <h2 className="cs_ivf_content_heading" style={{ marginBottom: '40px' }}>
                Download Forms
              </h2>
            </div>
          </div>

          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {forms.map((form, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_iconbox cs_style_2 cs_radius_15" style={{ 
                  height: '100%', 
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e8e8e8',
                  backgroundColor: '#ffffff',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'var(--accent-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '#e8e8e8';
                }}
                >
                  <div className="cs_iconbox_header mb-3" style={{ flex: 1 }}>
                    <div className="cs_iconbox_icon cs_center mb-3" style={{
                      width: '70px',
                      height: '70px',
                      margin: '0 auto 20px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}>
                      <Image 
                        src={form.icon} 
                        alt={form.name} 
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
                      lineHeight: '1.3'
                    }}>
                      {form.name}
                    </h3>
                    <p className="cs_iconbox_subtitle" style={{ 
                      fontSize: '13px', 
                      color: '#666',
                      marginBottom: '15px',
                      fontWeight: '500'
                    }}>
                      {form.size}
                    </p>
                    <p className="cs_iconbox_subtitle" style={{ 
                      fontSize: '14px', 
                      lineHeight: '1.7', 
                      marginBottom: '20px',
                      color: '#555'
                    }}>
                      {form.description}
                    </p>
                  </div>
                  <a 
                    href={form.downloadUrl}
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
                  sections: formsContentData.sections.slice(1)
                }} 
                benefitImages={serviceData.benefitImages} 
              />
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Instructions */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="cs_ivf_content_section" style={{ 
                padding: '30px', 
                backgroundColor: '#e3f2fd', 
                borderRadius: '10px',
                borderLeft: '4px solid #2196f3'
              }}>
                <h3 className="cs_ivf_content_heading mb-3" style={{ color: '#1565c0', fontSize: '24px' }}>
                  Instructions for Completing Forms
                </h3>
                <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>1.</span>
                    Download all required forms and print them
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>2.</span>
                    Fill out all forms completely with accurate information
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>3.</span>
                    Bring all completed forms to your first appointment
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>4.</span>
                    Bring original documents (ID, medical reports) for verification
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>5.</span>
                    If you have questions, contact us before your appointment
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
