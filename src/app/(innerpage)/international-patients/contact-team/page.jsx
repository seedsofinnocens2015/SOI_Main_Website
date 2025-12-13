"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle, FaGlobe } from 'react-icons/fa';

const headingData = {
  title: 'Contact Team',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const contactContentData = {
  sections: [
    {
      heading: 'Patient Support Team',
      paragraphs: [
        'Our dedicated Patient Support Team is here to assist you at every step of your journey. Whether you are from India or an international patient, we provide personalized support for treatments, travel arrangements, and all your questions.',
        'We understand that seeking fertility treatment requires trust and confidence. Our team is committed to providing you with all the information and support you need to make informed decisions about your fertility journey.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Patient Coordinator',
      paragraphs: [
        'Your primary contact for initial consultation coordination, treatment plan discussions, and general inquiries:',
      ],
      listItems: [
        'Initial consultation coordination',
        'Treatment plan discussions and explanations',
        'General inquiries and information',
        'Medical information and guidance',
        'Appointment scheduling assistance',
        'Pre-treatment preparation guidance',
      ],
    },
    {
      heading: 'Travel Support Team (International Patients)',
      paragraphs: [
        'Dedicated team for all travel-related assistance:',
      ],
      listItems: [
        'Visa application assistance and guidance',
        'Accommodation arrangements and recommendations',
        'Transportation coordination (airport transfers, local travel)',
        'Travel itinerary planning',
        'Pre-travel checklist and preparation',
        '24/7 travel support during your stay',
      ],
    },
    {
      heading: 'Medical Concierge',
      paragraphs: [
        'Specialized support for medical and treatment-related needs:',
      ],
      listItems: [
        'Appointment scheduling with specialists',
        'Medical documentation assistance',
        'Treatment coordination and follow-up',
        'Medication management guidance',
        'Test results and report coordination',
        'Post-treatment care instructions',
      ],
    },
    {
      heading: 'Quick Contact Information',
      paragraphs: [
        'Multiple ways to reach our Patient Support Team:',
      ],
      listItems: [
        'Email: info@seedsofinnocens.com (India) / international@seedsofinnocens.com (International) - Available 24/7',
        'Phone: +91-9810350512 - Direct line to our support team',
        'WhatsApp: Available for instant messaging and quick queries',
        'Online Form: Submit your inquiry through our call back form below',
        'Video Consultation: Schedule a virtual meeting with our team',
      ],
    },
  ],
};

const Page = () => {
  const [patientType, setPatientType] = useState('india');

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Main Content Section */}
      {/* <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={contactContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section> */}

      {/* Call Back Form Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#ffffff', 
                borderRadius: '12px',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e8e8e8'
              }}>
                <h2 className="cs_ivf_content_heading" style={{ marginBottom: '30px' }}>
                  Request a Call Back
                </h2>
                
                <div style={{ marginBottom: '30px' }}>
                  <label className="cs_form_label" style={{ marginBottom: '15px', display: 'block' }}>
                    Patient Type <span style={{ color: '#E45352' }}>*</span>
                  </label>
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      cursor: 'pointer',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      border: `2px solid ${patientType === 'india' ? '#E45352' : '#e8e8e8'}`,
                      backgroundColor: patientType === 'india' ? '#fff5f5' : '#ffffff',
                      transition: 'all 0.3s ease'
                    }}>
                      <input
                        type="radio"
                        name="patientType"
                        value="india"
                        checked={patientType === 'india'}
                        onChange={(e) => setPatientType(e.target.value)}
                        style={{ marginRight: '8px' }}
                      />
                      India Patient
                    </label>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      cursor: 'pointer',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      border: `2px solid ${patientType === 'international' ? '#E45352' : '#e8e8e8'}`,
                      backgroundColor: patientType === 'international' ? '#fff5f5' : '#ffffff',
                      transition: 'all 0.3s ease'
                    }}>
                      <input
                        type="radio"
                        name="patientType"
                        value="international"
                        checked={patientType === 'international'}
                        onChange={(e) => setPatientType(e.target.value)}
                        style={{ marginRight: '8px' }}
                      />
                      International Patient
                    </label>
                  </div>
                </div>
                
                <form className="cs_contact_form">
                  <div className="row cs_gap_y_30">
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Your Name <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Phone Number <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder={patientType === 'international' ? "Enter phone with country code" : "Enter your phone number"}
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Email Address <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="cs_form_field"
                      />
                    </div>
                    {patientType === 'international' && (
                      <>
                        <div className="col-md-6">
                          <label className="cs_form_label">
                            Country <span style={{ color: '#E45352' }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="country"
                            required
                            placeholder="Enter your country"
                            className="cs_form_field"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="cs_form_label">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            placeholder="Enter your city"
                            className="cs_form_field"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="cs_form_label">
                            Visa Status
                          </label>
                          <select name="visaStatus" className="cs_form_field">
                            <option value="">Select visa status</option>
                            <option value="not-applied">Not Applied Yet</option>
                            <option value="applied">Applied</option>
                            <option value="approved">Approved</option>
                            <option value="have-visa">Already Have Visa</option>
                          </select>
                        </div>
                      </>
                    )}
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Preferred Call Time <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <select name="callTime" required className="cs_form_field">
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9 AM - 12 PM IST)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM IST)</option>
                        <option value="evening">Evening (4 PM - 7 PM IST)</option>
                        <option value="anytime">Anytime</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Best Day to Call
                      </label>
                      <select name="day" className="cs_form_field">
                        <option value="">Select day</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="anyday">Any Day</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Reason for Call
                      </label>
                      <select name="reason" className="cs_form_field">
                        <option value="">Select reason</option>
                        <option value="consultation">General Consultation</option>
                        <option value="treatment">Treatment Information</option>
                        <option value="cost">Cost & Package Details</option>
                        {patientType === 'international' && (
                          <>
                            <option value="travel">Travel & Visa Support</option>
                            <option value="accommodation">Accommodation</option>
                          </>
                        )}
                        <option value="appointment">Book Appointment</option>
                        <option value="followup">Follow-up Query</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        placeholder={patientType === 'international' ? "Tell us about your treatment needs, travel plans, or any specific questions" : "Tell us what you'd like to discuss or any specific questions you have"}
                        className="cs_form_field"
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="cs_btn cs_style_1 cs_color_1"
                        style={{ width: '100%' }}
                      >
                        <span>Request Call Back</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div style={{ 
                padding: '30px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '12px',
                marginTop: '30px',
                borderLeft: '4px solid #E45352'
              }}>
                <h3 className="cs_ivf_content_heading" style={{ fontSize: '24px', marginBottom: '20px' }}>
                  What Happens Next?
                </h3>
                <ul className="cs_list cs_list_style_1">
                  <li><strong>Submit Form:</strong> Fill out the form above with your details</li>
                  <li><strong>Confirmation:</strong> You&apos;ll receive a confirmation message within minutes</li>
                  <li><strong>Our Call:</strong> Our specialist will call you at your preferred time</li>
                  <li><strong>Discussion:</strong> We&apos;ll answer all your questions and provide guidance</li>
                  {patientType === 'international' && (
                    <li><strong>Travel Support:</strong> If needed, our travel support team will assist with arrangements</li>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Response Time</h3>
                  <p style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.6' }}>
                    We typically respond to call back requests within:
                  </p>
                  <ul className="cs_list cs_list_style_1">
                    <li>
                      <strong>Same Day:</strong><br />
                      For requests submitted before 2 PM IST
                    </li>
                    <li>
                      <strong>Next Day:</strong><br />
                      For requests submitted after 2 PM IST
                    </li>
                    <li>
                      <strong>Weekend:</strong><br />
                      Monday morning for weekend requests
                    </li>
                    {patientType === 'international' && (
                      <li>
                        <strong>International:</strong><br />
                        We accommodate different time zones
                      </li>
                    )}
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg mb-4" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Direct Contact</h3>
                  <p style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.6' }}>
                    Need immediate assistance? Contact us directly:
                  </p>
                  <div style={{ marginBottom: '15px' }}>
                    <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaPhoneAlt style={{ color: '#E45352', fontSize: '18px' }} />
                      <a href="tel:+91-9810350512" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        +91-9810350512
                      </a>
                    </p>
                    <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaEnvelope style={{ color: '#E45352', fontSize: '18px' }} />
                      <a href={patientType === 'international' ? "mailto:international@seedsofinnocens.com" : "mailto:info@seedsofinnocens.com"} style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        {patientType === 'international' ? 'international@seedsofinnocens.com' : 'info@seedsofinnocens.com'}
                      </a>
                    </p>
                    {patientType === 'international' && (
                      <p style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaGlobe style={{ color: '#E45352', fontSize: '18px' }} />
                        <span style={{ fontSize: '14px' }}>24/7 International Support</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg mb-4" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>
                    {patientType === 'international' ? 'International Patient Services' : 'Patient Services'}
                  </h3>
                  <ul className="cs_list cs_list_style_1">
                    {patientType === 'international' ? (
                      <>
                        <li>
                          <Link href="/international-patients/patient-concierge" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                            Patient Concierge
                          </Link>
                        </li>
                        <li>
                          <Link href="/international-patients/travel-support" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                            Travel Support
                          </Link>
                        </li>
                        <li>
                          <Link href="/international-patients/international-pricing" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                            International Pricing
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link href="/contact/book-appointment" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                            Book Appointment
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact/whatsapp" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                            WhatsApp Us
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact/center-locator" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                            Find Center
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                {patientType === 'international' && (
                  <div className="cs_sidebar_widget cs_gray_bg" style={{ 
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                  }}>
                    <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Why Choose Us?</h3>
                    <ul className="cs_list cs_list_style_1">
                      <li>Dedicated International Patient Support</li>
                      <li>Visa & Travel Assistance</li>
                      <li>Multilingual Support</li>
                      <li>24/7 Availability</li>
                      <li>Transparent Pricing</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Page;
