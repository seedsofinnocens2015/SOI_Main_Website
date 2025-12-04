import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Consents',
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
        backgroundImage="/assets/img/page_heading_bg.jpg"
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
                <h3 className="cs_service_heading">Consent Forms</h3>
                <p className="cs_service_subtitle">
                  Download and review the consent forms required for your specific treatment. These forms contain important information about procedures, risks, benefits, and alternatives. Please read carefully and bring signed copies to your appointment.
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
                  alt="Consents" 
                  width={1200} 
                  height={300}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Consents Grid */}
          <div className="row cs_gap_y_30">
            {consents.map((consent, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg" style={{ 
                  height: '100%', 
                  padding: '25px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: consent.important ? '2px solid #ff9800' : '1px solid #e0e0e0',
                  transition: 'all 0.3s ease'
                }}
                >
                  {consent.important && (
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      backgroundColor: '#ff9800',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      Required
                    </div>
                  )}
                  <div className="cs_iconbox_header mb-3">
                    <div className="cs_iconbox_icon cs_center mb-3">
                      <Image 
                        src={consent.icon} 
                        alt={consent.name} 
                        width={50} 
                        height={50}
                      />
                    </div>
                    <h3 className="cs_iconbox_title" style={{ fontSize: '20px', marginBottom: '10px' }}>
                      {consent.name}
                    </h3>
                    <p className="cs_iconbox_subtitle" style={{ fontSize: '14px', color: '#999', marginBottom: '10px' }}>
                      {consent.size}
                    </p>
                    <p className="cs_iconbox_subtitle" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>
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

          {/* Important Information */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_service_details" style={{ 
                padding: '30px', 
                backgroundColor: '#fff3cd', 
                borderRadius: '10px',
                borderLeft: '4px solid #ffc107'
              }}>
                <h4 className="cs_service_heading mb-3" style={{ color: '#856404' }}>
                  Important Information About Consents
                </h4>
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

