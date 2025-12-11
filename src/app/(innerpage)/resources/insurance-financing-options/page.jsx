"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';
import { FaShieldAlt, FaCreditCard, FaHandshake, FaPhoneAlt, FaEnvelope, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import React from 'react';

const headingData = {
  title: 'Insurance / Financing Options',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const insuranceContentData = {
  sections: [
    {
      heading: 'Making Fertility Treatment Accessible',
      paragraphs: [
        'At Seeds of Innocens, we understand that fertility treatment is a significant investment. We are committed to making quality fertility care accessible through various insurance and financing options. Our team will work with you to find the best payment solution for your needs.',
        'We believe that financial concerns should not be a barrier to building your family. That\'s why we offer multiple payment options, accept major insurance plans, and provide flexible financing solutions tailored to your circumstances.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Insurance Coverage',
      paragraphs: [
        'We accept most major health insurance plans and work directly with your provider to maximize your benefits:',
      ],
      listItems: [
        'Corporate health insurance plans - Coverage for fertility treatments',
        'Government health schemes - Accepted where applicable',
        'Cashless treatment options - Direct billing with insurance providers',
        'Reimbursement support - Assistance with claim processing',
        'Pre-authorization help - Support for insurance approvals',
        'Coverage verification - Check your benefits before treatment',
      ],
    },
    {
      heading: 'Flexible Financing Options',
      paragraphs: [
        'Multiple payment plans designed to make fertility treatment affordable:',
      ],
      listItems: [
        'Zero-interest EMI options - Up to 12 months interest-free payments',
        'Extended payment plans - Flexible terms tailored to your budget',
        'Treatment packages - Special discounts for package payments',
        'Partner financing institutions - Easy approval and quick processing',
        'Multiple payment methods - Cash, card, bank transfer accepted',
        'Custom payment schedules - Personalized plans based on your needs',
      ],
    },
    {
      heading: 'Financial Counseling Services',
      paragraphs: [
        'Our dedicated financial counseling team provides comprehensive support:',
      ],
      listItems: [
        'Free financial consultation - Understand all payment options',
        'Cost transparency - Clear breakdown of all treatment costs',
        'Insurance guidance - Help navigating insurance coverage',
        'Financing assistance - Guidance on choosing the right plan',
        'Budget planning - Create a payment plan that works for you',
        'Ongoing support - Available throughout your treatment journey',
      ],
    },
  ],
};

const insurancePlans = [
  {
    title: 'Corporate Health Insurance',
    description: 'We accept most corporate health insurance plans and work directly with your provider.',
    features: [
      'Cashless treatment options',
      'Direct billing with insurance',
      'Pre-authorization assistance',
    ],
    icon: FaShieldAlt,
    color: '#2196f3',
  },
  {
    title: 'Government Schemes',
    description: 'Acceptance of government health schemes where applicable and eligible.',
    features: [
      'Scheme verification',
      'Claim processing support',
      'Documentation assistance',
    ],
    icon: FaShieldAlt,
    color: '#4caf50',
  },
  {
    title: 'Reimbursement Support',
    description: 'Comprehensive assistance with insurance reimbursement and claim processing.',
    features: [
      'Claim form preparation',
      'Document support',
      'Follow-up assistance',
    ],
    icon: FaShieldAlt,
    color: '#ff9800',
  },
];

const financingOptions = [
  {
    title: 'Zero-Interest EMI',
    description: 'Interest-free payment plans up to 12 months with easy approval.',
    features: [
      'Up to 12 months interest-free',
      'Easy approval process',
      'No hidden charges',
    ],
    icon: FaCreditCard,
    color: '#2196f3',
  },
  {
    title: 'Extended Payment Plans',
    description: 'Flexible payment terms tailored to your financial situation.',
    features: [
      'Customizable terms',
      'Flexible monthly payments',
      'Quick approval',
    ],
    icon: FaCreditCard,
    color: '#4caf50',
  },
  {
    title: 'Partner Financing',
    description: 'Easy financing through our partner institutions with competitive rates.',
    features: [
      'Quick processing',
      'Competitive rates',
      'Multiple options available',
    ],
    icon: FaHandshake,
    color: '#ff9800',
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

      {/* Main Content Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          {/* First Content Section */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection 
                data={{
                  sections: [insuranceContentData.sections[0]]
                }} 
                benefitImages={serviceData.benefitImages} 
              />
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Insurance Plans Grid */}
          <div className="row">
            <div className="col-12">
              <h2 className="cs_ivf_content_heading" style={{ marginBottom: '40px' }}>
                Insurance Coverage Options
              </h2>
            </div>
          </div>

          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {insurancePlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
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
                    e.currentTarget.style.borderColor = plan.color;
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
                        backgroundColor: `${plan.color}15`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}>
                        <IconComponent style={{ fontSize: '36px', color: plan.color }} />
                      </div>
                      <h3 className="cs_iconbox_title" style={{ 
                        fontSize: '20px', 
                        marginBottom: '12px',
                        fontWeight: '600',
                        color: '#1a1a1a',
                        lineHeight: '1.3',
                        textAlign: 'center'
                      }}>
                        {plan.title}
                      </h3>
                      <p className="cs_iconbox_subtitle" style={{ 
                        fontSize: '14px', 
                        lineHeight: '1.7', 
                        marginBottom: '20px',
                        color: '#555',
                        textAlign: 'center'
                      }}>
                        {plan.description}
                      </p>
                      <ul className="cs_mp_0" style={{ 
                        listStyle: 'none', 
                        paddingLeft: '0',
                        fontSize: '14px'
                      }}>
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} style={{ 
                            marginBottom: '10px', 
                            paddingLeft: '25px', 
                            position: 'relative',
                            color: '#555'
                          }}>
                            <FaCheckCircle style={{ 
                              position: 'absolute', 
                              left: '0', 
                              color: plan.color, 
                              fontSize: '16px',
                              top: '2px'
                            }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Financing Options Grid */}
          <div className="row">
            <div className="col-12">
              <h2 className="cs_ivf_content_heading" style={{ marginBottom: '40px' }}>
                Financing Options
              </h2>
            </div>
          </div>

          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {financingOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
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
                    e.currentTarget.style.borderColor = option.color;
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
                        backgroundColor: `${option.color}15`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}>
                        <IconComponent style={{ fontSize: '36px', color: option.color }} />
                      </div>
                      <h3 className="cs_iconbox_title" style={{ 
                        fontSize: '20px', 
                        marginBottom: '12px',
                        fontWeight: '600',
                        color: '#1a1a1a',
                        lineHeight: '1.3',
                        textAlign: 'center'
                      }}>
                        {option.title}
                      </h3>
                      <p className="cs_iconbox_subtitle" style={{ 
                        fontSize: '14px', 
                        lineHeight: '1.7', 
                        marginBottom: '20px',
                        color: '#555',
                        textAlign: 'center'
                      }}>
                        {option.description}
                      </p>
                      <ul className="cs_mp_0" style={{ 
                        listStyle: 'none', 
                        paddingLeft: '0',
                        fontSize: '14px'
                      }}>
                        {option.features.map((feature, fIndex) => (
                          <li key={fIndex} style={{ 
                            marginBottom: '10px', 
                            paddingLeft: '25px', 
                            position: 'relative',
                            color: '#555'
                          }}>
                            <FaCheckCircle style={{ 
                              position: 'absolute', 
                              left: '0', 
                              color: option.color, 
                              fontSize: '16px',
                              top: '2px'
                            }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Remaining Content Sections */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection 
                data={{
                  sections: insuranceContentData.sections.slice(1)
                }} 
                benefitImages={serviceData.benefitImages} 
              />
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Contact Section */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="cs_ivf_content_section" style={{ 
                padding: '40px', 
                backgroundColor: '#e3f2fd', 
                borderRadius: '10px',
                borderLeft: '4px solid #2196f3',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '25px'
                }}>
                  <FaHandshake style={{ fontSize: '32px', color: '#1565c0' }} />
                  <h3 className="cs_ivf_content_heading" style={{ color: '#1565c0', fontSize: '24px', margin: 0 }}>
                    Financial Counseling Services
                  </h3>
                </div>
                <p className="cs_ivf_content_paragraph" style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.8', 
                  marginBottom: '25px',
                  color: '#333'
                }}>
                  Our dedicated financial counseling team is available to help you understand all payment options, insurance coverage, and financing plans. We believe in transparency and will provide a clear breakdown of all costs before you begin treatment. Schedule a free consultation to discuss your financial options.
                </p>
                <div className="row" style={{ marginTop: '30px' }}>
                  <div className="col-md-6 mb-3">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <FaPhoneAlt style={{ fontSize: '18px', color: '#1565c0' }} />
                      <div>
                        <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#1565c0' }}>
                          Phone:
                        </p>
                        <a href="tel:+91-9810350512" style={{ color: '#333', textDecoration: 'none' }}>
                          +91-9810350512
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <FaEnvelope style={{ fontSize: '18px', color: '#1565c0' }} />
                      <div>
                        <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#1565c0' }}>
                          Email:
                        </p>
                        <a href="mailto:info@seedsofinnocence.com" style={{ color: '#333', textDecoration: 'none' }}>
                          info@seedsofinnocence.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '25px', textAlign: 'center' }}>
                  <Link 
                    href="/contact/book-appointment/" 
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{ 
                      display: 'inline-block',
                      textDecoration: 'none',
                      padding: '14px 30px',
                      borderRadius: '8px',
                      fontWeight: '600'
                    }}
                  >
                    <span>Book Appointment</span>
                  </Link>
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
