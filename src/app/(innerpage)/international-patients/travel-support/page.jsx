import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Travel Support',
};

const travelServices = [
  {
    icon: '✈️',
    title: 'Visa Assistance',
    description: 'Guidance and support for medical visa applications, including required documentation and embassy coordination.',
    details: [
      'Medical visa application guidance',
      'Document preparation assistance',
      'Embassy appointment support',
      'Visa status tracking',
    ],
  },
  {
    icon: '🏨',
    title: 'Accommodation',
    description: 'Assistance in finding comfortable, affordable accommodation near our centers, including hotel bookings and extended stay options.',
    details: [
      'Hotel recommendations and bookings',
      'Serviced apartments for longer stays',
      'Special rates for medical tourists',
      'Location-based suggestions',
    ],
  },
  {
    icon: '🚗',
    title: 'Local Transportation',
    description: 'Airport pickup, drop-off services, and local transportation arrangements for appointments and sightseeing.',
    details: [
      'Airport transfer services',
      'Appointment day transportation',
      'Local travel assistance',
      '24/7 emergency transport',
    ],
  },
  {
    icon: '🍽️',
    title: 'Cultural Support',
    description: 'Help with local customs, cuisine recommendations, translation services, and making you feel at home.',
    details: [
      'Cultural orientation',
      'Restaurant recommendations',
      'Translation services',
      'Local area guides',
    ],
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
                <h3 className="cs_service_heading">Comprehensive Travel Support</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  We understand that traveling to a new country for medical treatment can be overwhelming. Our Travel Support team ensures a hassle-free experience by handling all travel-related arrangements, from visa assistance to local transportation.
                </p>
              </div>
            </div>
          </div>

          {/* Main Image Placeholder */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="cs_service_details_thumbnail">
                <Image 
                  src="/assets/img/recent_post_1.png" 
                  alt="Travel Support" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Travel Services */}
          <div className="row cs_gap_y_40 mb-5">
            {travelServices.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div style={{ 
                  padding: '30px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '10px',
                  height: '100%',
                  border: '1px solid #e0e0e0'
                }}>
                  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <div style={{ fontSize: '60px', marginBottom: '15px' }}>
                      {service.icon}
                    </div>
                    <h4 className="cs_service_heading mb-3" style={{ fontSize: '22px' }}>
                      {service.title}
                    </h4>
                    <p className="cs_service_subtitle" style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                      {service.description}
                    </p>
                  </div>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} style={{ 
                        marginBottom: '12px', 
                        paddingLeft: '25px', 
                        position: 'relative' 
                      }}>
                        <span style={{ 
                          position: 'absolute', 
                          left: '0', 
                          color: 'var(--accent-color)', 
                          fontSize: '18px' 
                        }}>✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Travel Checklist */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#fff3cd', 
                borderRadius: '10px',
                borderLeft: '4px solid #ffc107'
              }}>
                <h4 className="cs_service_heading mb-4" style={{ color: '#856404' }}>
                  Pre-Travel Checklist
                </h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                      <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                        Valid passport (minimum 6 months validity)
                      </li>
                      <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                        Medical visa approval
                      </li>
                      <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                        Travel insurance (recommended)
                      </li>
                      <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                        Medical reports and previous test results
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                      <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                        Confirmed flight bookings
                      </li>
                      <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                        Accommodation arrangements
                      </li>
                      <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                        Emergency contact information
                      </li>
                      <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>✓</span>
                        Currency exchange and payment methods
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#e3f2fd', 
                borderRadius: '10px',
                borderLeft: '4px solid #2196f3',
                textAlign: 'center'
              }}>
                <h4 className="cs_service_heading mb-3" style={{ color: '#1565c0' }}>
                  Need Travel Assistance?
                </h4>
                <p className="cs_service_subtitle mb-4" style={{ color: '#1565c0' }}>
                  Our Travel Support team is ready to help you with all your travel needs. Contact us to get started.
                </p>
                <Link 
                  href="/international-patients/contact-team"
                  className="cs_btn cs_style_1 cs_color_1"
                  style={{ 
                    display: 'inline-block',
                    textDecoration: 'none'
                  }}
                >
                  <span>Contact Travel Support</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

