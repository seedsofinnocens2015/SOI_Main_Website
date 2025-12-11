/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'International Patients',
};

const services = [
  {
    title: 'Patient Concierge',
    description: 'Dedicated support team to assist you throughout your treatment journey, from initial consultation to post-treatment care.',
    icon: '/assets/img/icons/service_icon_1.png',
    link: '/international-patients/patient-concierge',
    color: '#2EA6F7',
  },
  {
    title: 'Travel Support',
    description: 'Comprehensive travel assistance including visa support, accommodation, and local transportation arrangements.',
    icon: '/assets/img/icons/service_icon_2.png',
    link: '/international-patients/travel-support',
    color: '#FF6B6B',
  },
  {
    title: 'International Pricing',
    description: 'Transparent and competitive pricing packages designed specifically for international patients with flexible payment options.',
    icon: '/assets/img/icons/service_icon_3.png',
    link: '/international-patients/international-pricing',
    color: '#4ECDC4',
  },
  {
    title: 'Patient Stories',
    description: 'Read inspiring success stories from international patients who achieved their dream of parenthood with us.',
    icon: '/assets/img/icons/service_icon_4.png',
    link: '/international-patients/patient-stories',
    color: '#95E1D3',
  },
  {
    title: 'Contact Team',
    description: 'Get in touch with our dedicated international patient support team for personalized assistance and guidance.',
    icon: '/assets/img/icons/service_icon_5.png',
    link: '/international-patients/contact-team',
    color: '#F38181',
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
                <h3 className="cs_service_heading">Welcome International Patients</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Seeds of Innocens welcomes patients from around the world. We provide world-class fertility treatments with comprehensive support services to make your journey to parenthood smooth and successful, no matter where you're from.
                </p>
              </div>
            </div>
          </div>

          {/* Main Image Placeholder */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="cs_service_details_thumbnail">
                <Image 
                  src="/assets/img/recent_post2.jpg" 
                  alt="International Patients" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="row cs_gap_y_40">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={service.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg" style={{ 
                    height: '100%', 
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '2px solid transparent'
                  }}>
                    <div className="cs_iconbox_header mb-3">
                      <div className="cs_iconbox_icon cs_center mb-3" style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%',
                        backgroundColor: service.color + '20',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}>
                        <Image 
                          src={service.icon} 
                          alt={service.title} 
                          width={50} 
                          height={50}
                        />
                      </div>
                      <h3 className="cs_iconbox_title text-center" style={{ fontSize: '22px', marginBottom: '15px' }}>
                        {service.title}
                      </h3>
                      <p className="cs_iconbox_subtitle text-center" style={{ lineHeight: '1.8', color: '#666' }}>
                        {service.description}
                      </p>
                    </div>
                    <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                      <span style={{ 
                        color: service.color, 
                        fontWeight: '600',
                        fontSize: '16px'
                      }}>
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Why Choose Us Section */}
          <div className="row">
            <div className="col-lg-12">
              <div style={{ 
                padding: '50px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px'
              }}>
                <h4 className="cs_service_heading mb-4 text-center">Why International Patients Choose Seeds of Innocens</h4>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <div style={{ fontSize: '50px', marginBottom: '15px' }}>🌍</div>
                      <h5 style={{ marginBottom: '10px' }}>Global Excellence</h5>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        World-class fertility treatments with international standards and high success rates
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <div style={{ fontSize: '50px', marginBottom: '15px' }}>💰</div>
                      <h5 style={{ marginBottom: '10px' }}>Cost-Effective</h5>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        Affordable treatment costs compared to Western countries without compromising quality
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <div style={{ fontSize: '50px', marginBottom: '15px' }}>🤝</div>
                      <h5 style={{ marginBottom: '10px' }}>Complete Support</h5>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        End-to-end assistance from travel to treatment, ensuring a hassle-free experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

