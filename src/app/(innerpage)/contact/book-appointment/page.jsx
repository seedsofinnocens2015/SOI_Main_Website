/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Book Appointment',
};

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
                <h3 className="cs_service_heading">Book Your Appointment</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Schedule a consultation with our experienced fertility specialists. We're here to help you on your journey to parenthood. Choose your preferred date and time, and our team will confirm your appointment.
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
                  alt="Book Appointment" 
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
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '10px',
                  marginBottom: '30px'
                }}>
                  <h4 className="cs_service_heading mb-4">Appointment Booking Form</h4>
                  
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Full Name <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px'
                          }}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Phone Number <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Enter your phone number"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px'
                          }}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Email Address <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Enter your email"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px'
                          }}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Preferred Date <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="date"
                          required
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px'
                          }}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Preferred Time <span style={{ color: 'red' }}>*</span>
                        </label>
                        <select
                          required
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px'
                          }}
                        >
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
                      <div className="col-md-6 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Select Center
                        </label>
                        <select
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px'
                          }}
                        >
                          <option value="">Select nearest center</option>
                          <option value="delhi">Malviya Nagar, Delhi</option>
                          <option value="gurugram">Gurugram, Haryana</option>
                          <option value="kolkata">Kolkata, West Bengal</option>
                        </select>
                      </div>
                      <div className="col-md-12 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Reason for Visit / Message
                        </label>
                        <textarea
                          rows="4"
                          placeholder="Tell us about your concern or any specific requirements"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px',
                            resize: 'vertical'
                          }}
                        />
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="cs_btn cs_style_1 cs_color_1"
                          style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '18px',
                            cursor: 'pointer'
                          }}
                        >
                          <span>Book Appointment</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div style={{ 
                  padding: '30px', 
                  backgroundColor: '#e3f2fd', 
                  borderRadius: '10px',
                  borderLeft: '4px solid #2196f3'
                }}>
                  <h4 className="cs_service_heading mb-3" style={{ color: '#1565c0' }}>
                    What to Expect
                  </h4>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>✓</span>
                      Comprehensive consultation with our fertility specialist
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>✓</span>
                      Review of medical history and previous treatments
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>✓</span>
                      Discussion of treatment options and personalized plan
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>✓</span>
                      Time to ask questions and address concerns
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">Quick Contact</h3>
                  <p style={{ marginBottom: '15px' }}>
                    For immediate assistance, contact us directly:
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <strong>Phone:</strong><br />
                    <a href="tel:+91-XXXXXXXXXX">+91-XXXXXXXXXX</a>
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <strong>Email:</strong><br />
                    <a href="mailto:info@seedsofinnocens.com">info@seedsofinnocens.com</a>
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <strong>Emergency:</strong><br />
                    Available 24/7 for urgent consultations
                  </p>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">Office Hours</h3>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '10px' }}>
                      <strong>Monday - Friday:</strong><br />
                      9:00 AM - 6:00 PM
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <strong>Saturday:</strong><br />
                      9:00 AM - 2:00 PM
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <strong>Sunday:</strong><br />
                      Closed
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg">
                  <h3 className="cs_widget_title">Other Options</h3>
                  <ul className="cs_mp_0">
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact/whatsapp" style={{ color: 'var(--body-color)' }}>WhatsApp Us</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact/call-back-form" style={{ color: 'var(--body-color)' }}>Request Call Back</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact/center-locator" style={{ color: 'var(--body-color)' }}>Find Nearest Center</Link>
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

