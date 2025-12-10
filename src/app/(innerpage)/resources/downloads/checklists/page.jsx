"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Checklists',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const checklistsContentData = {
  sections: [
    {
      heading: 'Treatment Checklists - Stay Organized and Prepared',
      paragraphs: [
        'Download helpful checklists to stay organized and prepared throughout your fertility treatment journey. These checklists ensure you don\'t miss any important steps or preparations.',
        'Our comprehensive checklists cover every stage of your treatment, from initial preparation to post-procedure care. Use these tools to track your progress and ensure you\'re fully prepared for each step of your journey.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Benefits of Using Checklists',
      paragraphs: [
        'Checklists help you stay organized and reduce stress:',
      ],
      listItems: [
        'Ensure you don\'t miss important steps or requirements',
        'Reduce anxiety by having clear preparation guidelines',
        'Save time by being organized and prepared',
        'Track your progress through each treatment stage',
        'Coordinate with your partner and support team',
      ],
    },
    {
      heading: 'Available Checklists',
      paragraphs: [
        'We provide checklists for every stage of your treatment:',
      ],
      listItems: [
        'Pre-Treatment Checklist - Prepare for your fertility journey',
        'Appointment Preparation Checklist - What to bring to appointments',
        'Egg Retrieval Day Checklist - Prepare for the procedure',
        'Embryo Transfer Day Checklist - Get ready for transfer',
        'Medication Schedule Checklist - Track your medications',
        'Lifestyle Preparation Checklist - Optimize your health',
      ],
    },
  ],
};

const checklists = [
  {
    name: 'Pre-Treatment Checklist',
    description: 'Comprehensive checklist to prepare for your fertility treatment journey, including medical tests, documents, and lifestyle preparations.',
    items: [
      'Complete all required medical tests',
      'Gather medical history documents',
      'Fill out patient registration forms',
      'Review treatment plan with doctor',
      'Prepare questions for consultation',
    ],
    size: 'PDF, 2 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_1.png',
  },
  {
    name: 'Appointment Preparation Checklist',
    description: 'Everything you need to bring and prepare for your consultation and follow-up appointments.',
    items: [
      'All completed forms and consents',
      'Previous medical reports',
      'Photo ID and insurance card',
      'List of current medications',
      'Questions and concerns list',
    ],
    size: 'PDF, 1 page',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_2.png',
  },
  {
    name: 'Egg Retrieval Day Checklist',
    description: 'Important reminders and preparations for the day of your egg retrieval procedure.',
    items: [
      'Fasting instructions (if required)',
      'Arrival time and location',
      'Comfortable clothing',
      'Arrange transportation home',
      'Post-procedure care items',
    ],
    size: 'PDF, 1 page',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_3.png',
  },
  {
    name: 'Embryo Transfer Day Checklist',
    description: 'Essential checklist for your embryo transfer procedure day.',
    items: [
      'Arrival time and preparation',
      'Full bladder instructions',
      'Comfortable clothing',
      'Post-transfer rest arrangements',
      'Medication schedule',
    ],
    size: 'PDF, 1 page',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_4.png',
  },
  {
    name: 'Medication Schedule Checklist',
    description: 'Track your fertility medications, dosages, and timing to ensure proper administration.',
    items: [
      'Medication names and dosages',
      'Administration times',
      'Injection sites rotation',
      'Storage requirements',
      'Side effects monitoring',
    ],
    size: 'PDF, 2 pages',
    downloadUrl: '#',
    icon: '/assets/img/icons/service_icon_5.png',
  },
  {
    name: 'Lifestyle Preparation Checklist',
    description: 'Lifestyle changes and preparations to optimize your fertility treatment success.',
    items: [
      'Diet and nutrition guidelines',
      'Exercise recommendations',
      'Stress management techniques',
      'Sleep schedule optimization',
      'Avoid harmful substances',
    ],
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
                  sections: [checklistsContentData.sections[0]]
                }} 
                benefitImages={serviceData.benefitImages} 
              />
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Checklists Grid */}
          <div className="row">
            <div className="col-12">
              <h2 className="cs_ivf_content_heading" style={{ marginBottom: '40px' }}>
                Download Checklists
              </h2>
            </div>
          </div>

          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {checklists.map((checklist, index) => (
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
                        src={checklist.icon} 
                        alt={checklist.name} 
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
                      {checklist.name}
                    </h3>
                    <p className="cs_iconbox_subtitle" style={{ 
                      fontSize: '13px', 
                      color: '#666',
                      marginBottom: '15px',
                      fontWeight: '500'
                    }}>
                      {checklist.size}
                    </p>
                    <p className="cs_iconbox_subtitle" style={{ 
                      fontSize: '14px', 
                      lineHeight: '1.7', 
                      marginBottom: '15px',
                      color: '#555'
                    }}>
                      {checklist.description}
                    </p>
                    <ul className="cs_mp_0" style={{ 
                      listStyle: 'none', 
                      paddingLeft: '0',
                      fontSize: '13px',
                      marginBottom: '15px',
                      backgroundColor: '#f8f9fa',
                      padding: '12px',
                      borderRadius: '8px'
                    }}>
                      {checklist.items.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} style={{ 
                          marginBottom: '8px', 
                          paddingLeft: '20px', 
                          position: 'relative',
                          color: '#555',
                          lineHeight: '1.5'
                        }}>
                          <span style={{ 
                            position: 'absolute', 
                            left: '0', 
                            color: 'var(--accent-color)', 
                            fontSize: '16px',
                            fontWeight: 'bold'
                          }}>•</span>
                          {item}
                        </li>
                      ))}
                      {checklist.items.length > 3 && (
                        <li style={{ 
                          color: '#999', 
                          fontStyle: 'italic',
                          fontSize: '12px',
                          marginTop: '5px'
                        }}>
                          + {checklist.items.length - 3} more items
                        </li>
                      )}
                    </ul>
                  </div>
                  <a 
                    href={checklist.downloadUrl}
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
                    <span>Download Checklist</span>
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
                  sections: checklistsContentData.sections.slice(1)
                }} 
                benefitImages={serviceData.benefitImages} 
              />
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Tips Section */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="cs_ivf_content_section" style={{ 
                padding: '30px', 
                backgroundColor: '#e8f5e9', 
                borderRadius: '10px',
                borderLeft: '4px solid #4caf50'
              }}>
                <h3 className="cs_ivf_content_heading mb-3" style={{ color: '#2e7d32', fontSize: '24px' }}>
                  Tips for Using Checklists
                </h3>
                <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                    Print checklists and keep them in a visible place
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                    Check off items as you complete them
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                    Review checklists before important appointments or procedures
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                    Share checklists with your partner for coordination
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                    Keep completed checklists for reference and records
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
