/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Call Back Form',
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
                <h3 className="cs_service_heading">Request a Call Back</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Fill out the form below and our team will call you back at your preferred time. We'll answer all your questions and help you understand your fertility treatment options.
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
                  alt="Call Back Form" 
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
                  <h4 className="cs_service_heading mb-4">Call Back Request Form</h4>
                  
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Your Name <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
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
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email (optional)"
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
                          Preferred Call Time <span style={{ color: 'red' }}>*</span>
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
                          <option value="">Select preferred time</option>
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                          <option value="evening">Evening (4 PM - 7 PM)</option>
                          <option value="anytime">Anytime</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Best Day to Call
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
                      <div className="col-md-6 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Reason for Call
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
                          <option value="">Select reason</option>
                          <option value="consultation">General Consultation</option>
                          <option value="treatment">Treatment Information</option>
                          <option value="cost">Cost & Package Details</option>
                          <option value="appointment">Book Appointment</option>
                          <option value="followup">Follow-up Query</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-md-12 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Additional Message (Optional)
                        </label>
                        <textarea
                          rows="4"
                          placeholder="Tell us what you'd like to discuss or any specific questions you have"
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
                          <span>Request Call Back</span>
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
                    What Happens Next?
                  </h4>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>1.</span>
                      <strong>Submit Form:</strong> Fill out the form above with your details
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>2.</span>
                      <strong>Confirmation:</strong> You'll receive a confirmation message within minutes
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>3.</span>
                      <strong>Our Call:</strong> Our specialist will call you at your preferred time
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>4.</span>
                      <strong>Discussion:</strong> We'll answer all your questions and provide guidance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">Response Time</h3>
                  <p style={{ marginBottom: '15px' }}>
                    We typically respond to call back requests within:
                  </p>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px' }}>•</span>
                      <strong>Same Day:</strong> For requests submitted before 2 PM
                    </li>
                    <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px' }}>•</span>
                      <strong>Next Day:</strong> For requests submitted after 2 PM
                    </li>
                    <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px' }}>•</span>
                      <strong>Weekend:</strong> Monday morning for weekend requests
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">Direct Contact</h3>
                  <p style={{ marginBottom: '15px' }}>
                    Need immediate assistance? Contact us directly:
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <strong>Phone:</strong><br />
                    <a href="tel:+91-XXXXXXXXXX">+91-XXXXXXXXXX</a>
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <strong>Email:</strong><br />
                    <a href="mailto:info@seedsofinnocens.com">info@seedsofinnocens.com</a>
                  </p>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg">
                  <h3 className="cs_widget_title">Other Options</h3>
                  <ul className="cs_mp_0">
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact/book-appointment" style={{ color: 'var(--body-color)' }}>Book Appointment</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact/whatsapp" style={{ color: 'var(--body-color)' }}>WhatsApp Us</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact/center-locator" style={{ color: 'var(--body-color)' }}>Find Center</Link>
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

