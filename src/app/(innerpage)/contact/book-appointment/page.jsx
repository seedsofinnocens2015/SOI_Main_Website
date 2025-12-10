"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const headingData = {
  title: 'Book Appointment',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Book Your Appointment',
      paragraphs: [
        'Schedule a consultation with our experienced fertility specialists. We\'re here to help you on your journey to parenthood. Choose your preferred date and time, and our team will confirm your appointment. Our expert team is dedicated to providing personalized care and guidance throughout your fertility journey. Book your appointment today and take the first step towards achieving your dream of parenthood.',
      ],
      // sideImage: '/assets/img/recent_post2.jpg',
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header2.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Content Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={ivfContentData} />
            </div>
          </div>
        </div>
      </Section>

      {/* Appointment Form Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
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
                  Appointment Booking Form
                </h2>
                
                <form className="cs_contact_form">
                  <div className="row cs_gap_y_30">
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Full Name <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your full name"
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
                        placeholder="Enter your phone number"
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
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Preferred Date <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Preferred Time <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <select name="time" required className="cs_form_field">
                        <option value="">Select time</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Select Center
                      </label>
                      <select name="center" className="cs_form_field">
                        <option value="">Select nearest center</option>
                        <option value="delhi">Malviya Nagar, Delhi</option>
                        <option value="gurugram">Gurugram, Haryana</option>
                        <option value="kolkata">Kolkata, West Bengal</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Reason for Visit / Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        placeholder="Tell us about your concern or any specific requirements"
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
                        <span>Book Appointment</span>
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
                  What to Expect
                </h3>
                <ul className="cs_list cs_list_style_1">
                  <li>Comprehensive consultation with our fertility specialist</li>
                  <li>Review of medical history and previous treatments</li>
                  <li>Discussion of treatment options and personalized plan</li>
                  <li>Time to ask questions and address concerns</li>
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
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Quick Contact</h3>
                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaPhoneAlt style={{ color: '#E45352', fontSize: '18px' }} />
                      <a href="tel:+91-9810350512" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        +91-9810350512
                      </a>
                    </p>
                    <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaEnvelope style={{ color: '#E45352', fontSize: '18px' }} />
                      <a href="mailto:info@seedsofinnocens.com" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        info@seedsofinnocens.com
                      </a>
                    </p>
                    <p style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaClock style={{ color: '#E45352', fontSize: '18px' }} />
                      <span>Available 24/7 for urgent consultations</span>
                    </p>
                  </div>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg mb-4" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Office Hours</h3>
                  <ul className="cs_list cs_list_style_1">
                    <li>
                      <strong>Monday - Sunday:</strong><br />
                      9:00 AM - 6:00 PM
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Other Options</h3>
                  <ul className="cs_list cs_list_style_1">
                    <li>
                      <Link href="/contact/whatsapp" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        WhatsApp Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/call-back-form" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Request Call Back
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/center-locator" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Find Nearest Center
                      </Link>
                    </li>
                  </ul>
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

