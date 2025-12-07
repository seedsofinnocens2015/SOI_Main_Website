/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Patient Concierge',
};

const conciergeServices = [
  {
    icon: '📋',
    title: 'Pre-Treatment Consultation',
    description: 'Virtual consultations with our specialists before you travel, helping you understand the treatment plan and prepare for your visit.',
  },
  {
    icon: '📅',
    title: 'Appointment Scheduling',
    description: 'Coordinated scheduling of all appointments, tests, and procedures to minimize your stay and maximize efficiency.',
  },
  {
    icon: '📞',
    title: '24/7 Support',
    description: 'Round-the-clock assistance for any questions, concerns, or emergencies during your treatment journey.',
  },
  {
    icon: '🗣️',
    title: 'Language Support',
    description: 'Multilingual support staff to help you communicate effectively with our medical team and understand all procedures.',
  },
  {
    icon: '📄',
    title: 'Documentation Assistance',
    description: 'Help with medical reports, treatment summaries, and all necessary documentation for your records and insurance.',
  },
  {
    icon: '💊',
    title: 'Medication Management',
    description: 'Guidance on medications, prescriptions, and follow-up care instructions in your preferred language.',
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
                <h3 className="cs_service_heading">Patient Concierge Services</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Our dedicated Patient Concierge team provides personalized support throughout your entire fertility treatment journey. From initial consultation to post-treatment follow-up, we're here to ensure a smooth and comfortable experience.
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
                  alt="Patient Concierge" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="row cs_gap_y_40 mb-5">
            {conciergeServices.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg" style={{ 
                  height: '100%', 
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  border: '1px solid #e0e0e0'
                }}>
                  <div style={{
                    fontSize: '60px',
                    marginBottom: '20px'
                  }}>
                    {service.icon}
                  </div>
                  <h4 className="cs_service_heading mb-3" style={{ fontSize: '20px' }}>
                    {service.title}
                  </h4>
                  <p className="cs_service_subtitle" style={{ lineHeight: '1.8', margin: 0 }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* How It Works Section */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#e3f2fd', 
                borderRadius: '10px',
                borderLeft: '4px solid #2196f3'
              }}>
                <h4 className="cs_service_heading mb-4" style={{ color: '#1565c0' }}>
                  How Our Concierge Service Works
                </h4>
                <div className="row">
                  <div className="col-md-3 mb-4">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#2196f3',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        margin: '0 auto 15px'
                      }}>
                        1
                      </div>
                      <h5 style={{ marginBottom: '10px', fontSize: '16px' }}>Initial Contact</h5>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        Reach out to our concierge team via email, phone, or online form
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#2196f3',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        margin: '0 auto 15px'
                      }}>
                        2
                      </div>
                      <h5 style={{ marginBottom: '10px', fontSize: '16px' }}>Dedicated Coordinator</h5>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        Assigned personal coordinator who understands your needs and preferences
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#2196f3',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        margin: '0 auto 15px'
                      }}>
                        3
                      </div>
                      <h5 style={{ marginBottom: '10px', fontSize: '16px' }}>Personalized Planning</h5>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        Customized treatment plan and timeline tailored to your schedule
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#2196f3',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        margin: '0 auto 15px'
                      }}>
                        4
                      </div>
                      <h5 style={{ marginBottom: '10px', fontSize: '16px' }}>Ongoing Support</h5>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        Continuous assistance throughout treatment and post-treatment follow-up
                      </p>
                    </div>
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
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <h4 className="cs_service_heading mb-3">Get Started with Concierge Services</h4>
                <p className="cs_service_subtitle mb-4">
                  Contact our Patient Concierge team to begin your journey. We're here to make your experience as smooth and comfortable as possible.
                </p>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p style={{ marginBottom: '5px' }}>
                      <strong>Email:</strong><br />
                      <a href="mailto:concierge@seedsofinnocens.com" style={{ color: 'var(--accent-color)' }}>
                        concierge@seedsofinnocens.com
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ marginBottom: '5px' }}>
                      <strong>Phone:</strong><br />
                      <a href="tel:+91-XXXXXXXXXX" style={{ color: 'var(--accent-color)' }}>
                        +91-XXXXXXXXXX
                      </a>
                    </p>
                  </div>
                </div>
                <Link 
                  href="/international-patients/contact-team"
                  className="cs_btn cs_style_1 cs_color_1"
                  style={{ 
                    display: 'inline-block',
                    textDecoration: 'none',
                    marginTop: '20px'
                  }}
                >
                  <span>Contact Concierge Team</span>
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

