import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'WhatsApp',
};

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
                <h3 className="cs_service_heading">Connect with Us on WhatsApp</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Get instant answers to your fertility questions, schedule appointments, and receive support directly through WhatsApp. Our team is available to help you 24/7.
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
                  alt="WhatsApp Contact" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div className="cs_service_details">
                <div style={{ 
                  padding: '40px', 
                  backgroundColor: '#e8f5e9', 
                  borderRadius: '10px',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '80px',
                    marginBottom: '20px'
                  }}>
                    💬
                  </div>
                  <h4 className="cs_service_heading mb-3" style={{ color: '#2e7d32' }}>
                    Start a Conversation
                  </h4>
                  <p className="cs_service_subtitle mb-4" style={{ fontSize: '18px' }}>
                    Click the button below to chat with us on WhatsApp. Our fertility specialists are ready to assist you with:
                  </p>
                  <a 
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{
                      display: 'inline-block',
                      padding: '15px 40px',
                      fontSize: '18px',
                      textDecoration: 'none',
                      marginTop: '20px'
                    }}
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="row mb-5">
                  <div className="col-md-6 mb-4">
                    <div style={{ 
                      padding: '30px', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '10px',
                      height: '100%',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '50px',
                        marginBottom: '15px'
                      }}>
                        ⏰
                      </div>
                      <h5 style={{ marginBottom: '10px' }}>24/7 Availability</h5>
                      <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                        Get instant responses anytime, day or night. Our team is always here to help.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div style={{ 
                      padding: '30px', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '10px',
                      height: '100%',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '50px',
                        marginBottom: '15px'
                      }}>
                        💡
                      </div>
                      <h5 style={{ marginBottom: '10px' }}>Quick Answers</h5>
                      <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                        Ask questions about treatments, costs, procedures, and get immediate expert advice.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div style={{ 
                      padding: '30px', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '10px',
                      height: '100%',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '50px',
                        marginBottom: '15px'
                      }}>
                        📅
                      </div>
                      <h5 style={{ marginBottom: '10px' }}>Easy Booking</h5>
                      <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                        Schedule appointments directly through WhatsApp. Quick and convenient.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div style={{ 
                      padding: '30px', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '10px',
                      height: '100%',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '50px',
                        marginBottom: '15px'
                      }}>
                        📋
                      </div>
                      <h5 style={{ marginBottom: '10px' }}>Share Reports</h5>
                      <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                        Send your medical reports and test results directly for quick consultation.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  padding: '30px', 
                  backgroundColor: '#fff3cd', 
                  borderRadius: '10px',
                  borderLeft: '4px solid #ffc107'
                }}>
                  <h4 className="cs_service_heading mb-3" style={{ color: '#856404' }}>
                    What You Can Do on WhatsApp
                  </h4>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>•</span>
                      Get information about IVF treatments and procedures
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>•</span>
                      Inquire about treatment costs and package details
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>•</span>
                      Book or reschedule appointments
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>•</span>
                      Receive updates about your treatment journey
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#856404', fontSize: '18px' }}>•</span>
                      Get answers to frequently asked questions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">WhatsApp Number</h3>
                  <p style={{ marginBottom: '15px', fontSize: '18px', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                    +91-XXXXXXXXXX
                  </p>
                  <p style={{ marginBottom: '15px', fontSize: '14px' }}>
                    Save this number to your contacts for easy access. You can start a conversation anytime.
                  </p>
                  <a 
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'block'
                    }}
                  >
                    <span>Open WhatsApp</span>
                  </a>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">Response Time</h3>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '10px' }}>
                      <strong>General Queries:</strong><br />
                      Within 2-4 hours
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <strong>Urgent Matters:</strong><br />
                      Within 30 minutes
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <strong>Emergency:</strong><br />
                      Immediate response
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg">
                  <h3 className="cs_widget_title">Other Contact Options</h3>
                  <ul className="cs_mp_0">
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact/book-appointment" style={{ color: 'var(--body-color)' }}>Book Appointment</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact/call-back-form" style={{ color: 'var(--body-color)' }}>Call Back Form</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact" style={{ color: 'var(--body-color)' }}>Contact Us</Link>
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

