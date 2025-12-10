"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaClock, FaLightbulb, FaCalendarAlt, FaFileMedical, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const headingData = {
  title: 'WhatsApp',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Connect with Us on WhatsApp',
      paragraphs: [
        'Get instant answers to your fertility questions, schedule appointments, and receive support directly through WhatsApp. Our team is available to help you 24/7. Start a conversation with our fertility specialists and get personalized guidance for your journey to parenthood.',
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

      {/* WhatsApp Section */}
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
                border: '1px solid #e8e8e8',
                textAlign: 'center',
                marginBottom: '30px'
              }}>
                <div style={{
                  fontSize: '80px',
                  marginBottom: '20px',
                  color: '#25D366'
                }}>
                  <FaWhatsapp />
                </div>
                <h2 className="" style={{ marginBottom: '20px' }}>
                  Start a Conversation
                </h2>
                <p style={{ fontSize: '18px', marginBottom: '30px', lineHeight: '1.8' }}>
                  Click the button below to chat with us on WhatsApp. Our fertility specialists are ready to assist you with all your queries.
                </p>
                <a 
                  href="https://wa.me/919810350512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs_btn cs_style_1 cs_color_1"
                  style={{
                    display: 'inline-block',
                    padding: '15px 40px',
                    fontSize: '18px',
                    textDecoration: 'none',
                    backgroundColor: '#25D366',
                    borderColor: '#25D366'
                  }}
                >
                  <FaWhatsapp style={{ marginRight: '10px', display: 'inline-block' }} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="row cs_gap_y_30" style={{ marginBottom: '30px' }}>
                <div className="col-md-6">
                  <div style={{ 
                    padding: '30px', 
                    backgroundColor: '#ffffff', 
                    borderRadius: '12px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    textAlign: 'center'
                  }}>
                    <FaClock style={{ fontSize: '50px', color: '#E45352', marginBottom: '15px' }} />
                    <h5 style={{ marginBottom: '10px', fontWeight: '600' }}>24/7 Availability</h5>
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                      Get instant responses anytime, day or night. Our team is always here to help.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ 
                    padding: '30px', 
                    backgroundColor: '#ffffff', 
                    borderRadius: '12px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    textAlign: 'center'
                  }}>
                    <FaLightbulb style={{ fontSize: '50px', color: '#E45352', marginBottom: '15px' }} />
                    <h5 style={{ marginBottom: '10px', fontWeight: '600' }}>Quick Answers</h5>
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                      Ask questions about treatments, costs, procedures, and get immediate expert advice.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ 
                    padding: '30px', 
                    backgroundColor: '#ffffff', 
                    borderRadius: '12px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    textAlign: 'center'
                  }}>
                    <FaCalendarAlt style={{ fontSize: '50px', color: '#E45352', marginBottom: '15px' }} />
                    <h5 style={{ marginBottom: '10px', fontWeight: '600' }}>Easy Booking</h5>
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                      Schedule appointments directly through WhatsApp. Quick and convenient.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ 
                    padding: '30px', 
                    backgroundColor: '#ffffff', 
                    borderRadius: '12px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    textAlign: 'center'
                  }}>
                    <FaFileMedical style={{ fontSize: '50px', color: '#E45352', marginBottom: '15px' }} />
                    <h5 style={{ marginBottom: '10px', fontWeight: '600' }}>Share Reports</h5>
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                      Send your medical reports and test results directly for quick consultation.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ 
                padding: '30px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '12px',
                borderLeft: '4px solid #E45352'
              }}>
                <h3 className="cs_ivf_content_heading" style={{ fontSize: '24px', marginBottom: '20px' }}>
                  What You Can Do on WhatsApp
                </h3>
                <ul className="cs_list cs_list_style_1">
                  <li>Get information about IVF treatments and procedures</li>
                  <li>Inquire about treatment costs and package details</li>
                  <li>Book or reschedule appointments</li>
                  <li>Receive updates about your treatment journey</li>
                  <li>Get answers to frequently asked questions</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  textAlign: 'center'
                }}>
                  <FaWhatsapp style={{ fontSize: '50px', color: '#25D366', marginBottom: '15px' }} />
                  <h3 className="cs_widget_title" style={{ marginBottom: '15px' }}>WhatsApp Number</h3>
                  <p style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 'bold', color: '#25D366' }}>
                    +91-9810350512
                  </p>
                  <p style={{ marginBottom: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                    Save this number to your contacts for easy access. You can start a conversation anytime.
                  </p>
                  <a 
                    href="https://wa.me/919810350512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'block',
                      backgroundColor: '#25D366',
                      borderColor: '#25D366'
                    }}
                  >
                    <FaWhatsapp style={{ marginRight: '8px', display: 'inline-block' }} />
                    <span>Open WhatsApp</span>
                  </a>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg mb-4" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Response Time</h3>
                  <ul className="cs_list cs_list_style_1">
                    <li>
                      <strong>General Queries:</strong><br />
                      Within 2-4 hours
                    </li>
                    <li>
                      <strong>Urgent Matters:</strong><br />
                      Within 30 minutes
                    </li>
                    <li>
                      <strong>Emergency:</strong><br />
                      Immediate response
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Other Contact Options</h3>
                  <ul className="cs_list cs_list_style_1">
                    <li>
                      <Link href="/contact/book-appointment" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Book Appointment
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/call-back-form" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Call Back Form
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Contact Us
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

