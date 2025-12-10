import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Downloads',
};

const downloadCategories = [
  {
    title: 'Forms',
    description: 'Download patient registration forms, medical history forms, and other necessary documents for your treatment.',
    icon: '/assets/img/icons/service_icon_1.png',
    link: '/resources/downloads/forms',
    items: [
      'Patient Registration Form',
      'Medical History Form',
      'Consent for Treatment Form',
      'Insurance Information Form',
    ],
  },
  {
    title: 'Consents',
    description: 'Important consent forms for various procedures. Please read carefully and bring signed copies to your appointment.',
    icon: '/assets/img/icons/service_icon_2.png',
    link: '/resources/downloads/consents',
    items: [
      'IVF Treatment Consent',
      'ICSI Procedure Consent',
      'Embryo Freezing Consent',
      'Genetic Testing Consent',
    ],
  },
  {
    title: 'Checklists',
    description: 'Helpful checklists to prepare for your treatment, appointments, and procedures.',
    icon: '/assets/img/icons/service_icon_3.png',
    link: '/resources/downloads/checklists',
    items: [
      'Pre-Treatment Checklist',
      'Appointment Preparation Checklist',
      'Egg Retrieval Day Checklist',
      'Embryo Transfer Day Checklist',
    ],
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
                <h3 className="cs_service_heading">Download Forms, Consents & Checklists</h3>
                <p className="cs_service_subtitle">
                  Access all necessary forms, consent documents, and helpful checklists for your fertility treatment journey. Download, print, and fill them out before your appointment to save time.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="cs_service_details_thumbnail">
                <Image 
                  src="/assets/img/recent_post2.jpg" 
                  alt="Downloads" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Download Categories */}
          <div className="row cs_gap_y_40">
            {downloadCategories.map((category, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg" style={{ 
                  height: '100%', 
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div className="cs_iconbox_header mb-3">
                    <div className="cs_iconbox_icon cs_center mb-3">
                      <Image 
                        src={category.icon} 
                        alt={category.title} 
                        width={60} 
                        height={60}
                      />
                    </div>
                    <h3 className="cs_iconbox_title" style={{ fontSize: '24px', marginBottom: '15px' }}>
                      {category.title}
                    </h3>
                    <p className="cs_iconbox_subtitle" style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                      {category.description}
                    </p>
                  </div>
                  <ul className="cs_mp_0" style={{ 
                    listStyle: 'none', 
                    paddingLeft: '0',
                    flex: 1,
                    marginBottom: '20px'
                  }}>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={{ 
                        marginBottom: '10px', 
                        paddingLeft: '25px', 
                        position: 'relative' 
                      }}>
                        <span style={{ 
                          position: 'absolute', 
                          left: '0', 
                          color: 'var(--accent-color)', 
                          fontSize: '16px' 
                        }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={category.link} 
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{ 
                      width: '100%', 
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'block'
                    }}
                  >
                    <span>View & Download</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Important Notes */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_service_details" style={{ 
                padding: '30px', 
                backgroundColor: '#fff3cd', 
                borderRadius: '10px',
                borderLeft: '4px solid #ffc107'
              }}>
                <h4 className="cs_service_heading mb-3" style={{ color: '#856404' }}>
                  Important Notes
                </h4>
                <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                    Please fill out all forms completely and bring them to your first appointment
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                    All consent forms must be signed by both partners (if applicable)
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                    Bring original documents and photo ID for verification
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                    If you have questions about any form, contact us before your appointment
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

