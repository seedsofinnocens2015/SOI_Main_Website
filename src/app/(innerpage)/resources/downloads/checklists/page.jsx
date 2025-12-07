/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Checklists',
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

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_service_details text-center mb-5">
                <h3 className="cs_service_heading">Treatment Checklists</h3>
                <p className="cs_service_subtitle">
                  Download helpful checklists to stay organized and prepared throughout your fertility treatment journey. These checklists ensure you don't miss any important steps or preparations.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="cs_service_details_thumbnail">
                <Image 
                  src="/assets/img/recent_post_1.png" 
                  alt="Checklists" 
                  width={1200} 
                  height={300}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Checklists Grid */}
          <div className="row cs_gap_y_30">
            {checklists.map((checklist, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg" style={{ 
                  height: '100%', 
                  padding: '25px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                >
                  <div className="cs_iconbox_header mb-3">
                    <div className="cs_iconbox_icon cs_center mb-3">
                      <Image 
                        src={checklist.icon} 
                        alt={checklist.name} 
                        width={50} 
                        height={50}
                      />
                    </div>
                    <h3 className="cs_iconbox_title" style={{ fontSize: '20px', marginBottom: '10px' }}>
                      {checklist.name}
                    </h3>
                    <p className="cs_iconbox_subtitle" style={{ fontSize: '14px', color: '#999', marginBottom: '10px' }}>
                      {checklist.size}
                    </p>
                    <p className="cs_iconbox_subtitle" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>
                      {checklist.description}
                    </p>
                    <ul className="cs_mp_0" style={{ 
                      listStyle: 'none', 
                      paddingLeft: '0',
                      fontSize: '13px',
                      marginBottom: '15px'
                    }}>
                      {checklist.items.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} style={{ 
                          marginBottom: '8px', 
                          paddingLeft: '20px', 
                          position: 'relative' 
                        }}>
                          <span style={{ 
                            position: 'absolute', 
                            left: '0', 
                            color: 'var(--accent-color)', 
                            fontSize: '14px' 
                          }}>•</span>
                          {item}
                        </li>
                      ))}
                      {checklist.items.length > 3 && (
                        <li style={{ color: '#999', fontStyle: 'italic' }}>
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
                      marginTop: 'auto'
                    }}
                    download
                  >
                    <span>Download Checklist</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Tips Section */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_service_details" style={{ 
                padding: '30px', 
                backgroundColor: '#e8f5e9', 
                borderRadius: '10px',
                borderLeft: '4px solid #4caf50'
              }}>
                <h4 className="cs_service_heading mb-3" style={{ color: '#2e7d32' }}>
                  Tips for Using Checklists
                </h4>
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

