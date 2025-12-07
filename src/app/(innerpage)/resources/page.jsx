/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Resources',
};

const resources = [
  {
    title: 'IVF Process / Patient Journey',
    description: 'Complete guide to understanding the IVF process and what to expect during your treatment journey.',
    icon: '/assets/img/icons/service_icon_1.png',
    link: '/resources/ivf-process-patient-journey',
    color: '#2EA6F7',
  },
  {
    title: 'IVF Cost & Package Details',
    description: 'Transparent pricing information and comprehensive package details for all our fertility treatments.',
    icon: '/assets/img/icons/service_icon_2.png',
    link: '/resources/ivf-cost-package-details',
    color: '#FF6B6B',
  },
  {
    title: 'FAQs',
    description: 'Find answers to frequently asked questions about IVF, fertility treatments, and your journey.',
    icon: '/assets/img/icons/service_icon_3.png',
    link: '/resources/faqs',
    color: '#4ECDC4',
  },
  {
    title: 'Success Stories',
    description: 'Read inspiring success stories from couples who achieved their dream of parenthood with us.',
    icon: '/assets/img/icons/service_icon_4.png',
    link: '/resources/success-stories',
    color: '#95E1D3',
  },
  {
    title: 'Patient Testimonial Videos',
    description: 'Watch video testimonials from our patients sharing their IVF journey and experiences.',
    icon: '/assets/img/icons/service_icon_5.png',
    link: '/resources/patient-testimonial-videos',
    color: '#F38181',
  },
  {
    title: 'Downloads',
    description: 'Download forms, consents, and checklists to prepare for your treatment.',
    icon: '/assets/img/icons/service_icon_6.png',
    link: '/resources/downloads',
    color: '#AA96DA',
  },
  {
    title: 'Fertility Calculator',
    description: 'Use our fertility calculator to estimate your chances of conception and plan your journey.',
    icon: '/assets/img/icons/service_icon_7.png',
    link: '/resources/fertility-calculator',
    color: '#FCBAD3',
  },
  {
    title: 'Blogs',
    description: 'Read our latest blogs on fertility, IVF, pregnancy, health, and treatment guides.',
    icon: '/assets/img/icons/service_icon_8.png',
    link: '/resources/blogs',
    color: '#FFD93D',
  },
  {
    title: 'Insurance / Financing Options',
    description: 'Explore insurance coverage and flexible financing options to make treatment accessible.',
    icon: '/assets/img/icons/service_icon_9.png',
    link: '/resources/insurance-financing-options',
    color: '#6BCB77',
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
                <h3 className="cs_service_heading">Comprehensive Resources for Your Fertility Journey</h3>
                <p className="cs_service_subtitle">
                  Access a wealth of information, guides, tools, and support materials to help you navigate your fertility treatment journey with confidence. Everything you need is right here.
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
                  alt="Resources" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="row cs_gap_y_40">
            {resources.map((resource, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={resource.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg" style={{ 
                    height: '100%', 
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '2px solid transparent'
                  }}
                  >
                    <div className="cs_iconbox_header mb-3">
                      <div className="cs_iconbox_icon cs_center mb-3" style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%',
                        backgroundColor: resource.color + '20',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}>
                        <Image 
                          src={resource.icon} 
                          alt={resource.title} 
                          width={50} 
                          height={50}
                        />
                      </div>
                      <h3 className="cs_iconbox_title text-center" style={{ fontSize: '22px', marginBottom: '15px' }}>
                        {resource.title}
                      </h3>
                      <p className="cs_iconbox_subtitle text-center" style={{ lineHeight: '1.8', color: '#666' }}>
                        {resource.description}
                      </p>
                    </div>
                    <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                      <span style={{ 
                        color: resource.color, 
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

          {/* Quick Help Section */}
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_service_details text-center" style={{ 
                padding: '50px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px' 
              }}>
                <h4 className="cs_service_heading mb-3">Need More Help?</h4>
                <p className="cs_service_subtitle mb-4">
                  Our team is here to support you every step of the way. If you can't find what you're looking for, don't hesitate to reach out.
                </p>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div style={{ padding: '20px' }}>
                      <h5 style={{ marginBottom: '10px' }}>Call Us</h5>
                      <a href="tel:+91-XXXXXXXXXX" style={{ color: 'var(--accent-color)', fontSize: '18px' }}>
                        +91-XXXXXXXXXX
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div style={{ padding: '20px' }}>
                      <h5 style={{ marginBottom: '10px' }}>Email Us</h5>
                      <a href="mailto:info@seedsofinnocens.com" style={{ color: 'var(--accent-color)', fontSize: '18px' }}>
                        info@seedsofinnocens.com
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div style={{ padding: '20px' }}>
                      <h5 style={{ marginBottom: '10px' }}>Visit Us</h5>
                      <Link href="/contact" style={{ color: 'var(--accent-color)', fontSize: '18px' }}>
                        Book Appointment
                      </Link>
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

