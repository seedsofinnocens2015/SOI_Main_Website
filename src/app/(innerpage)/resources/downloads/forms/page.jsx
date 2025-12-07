import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Forms',
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
                <h3 className="cs_service_heading">Patient Forms</h3>
                <p className="cs_service_subtitle">
                  Download and fill out the necessary forms before your appointment. Completing these forms in advance will save time during your visit and help us prepare for your consultation.
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
                  alt="Forms" 
                  width={1200} 
                  height={300}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Forms Grid */}
          <div className="row cs_gap_y_30">
            {forms.map((form, index) => (
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
                        src={form.icon} 
                        alt={form.name} 
                        width={50} 
                        height={50}
                      />
                    </div>
                    <h3 className="cs_iconbox_title" style={{ fontSize: '20px', marginBottom: '10px' }}>
                      {form.name}
                    </h3>
                    <p className="cs_iconbox_subtitle" style={{ fontSize: '14px', color: '#999', marginBottom: '10px' }}>
                      {form.size}
                    </p>
                    <p className="cs_iconbox_subtitle" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>
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
                      marginTop: 'auto'
                    }}
                    download
                  >
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Instructions */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_service_details" style={{ 
                padding: '30px', 
                backgroundColor: '#e3f2fd', 
                borderRadius: '10px',
                borderLeft: '4px solid #2196f3'
              }}>
                <h4 className="cs_service_heading mb-3" style={{ color: '#1565c0' }}>
                  Instructions
                </h4>
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

