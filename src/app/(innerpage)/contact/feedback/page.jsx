import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Feedback',
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
                <h3 className="cs_service_heading">Share Your Feedback</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Your feedback helps us improve our services and provide better care. We value your opinion and would love to hear about your experience with Seeds of Innocens.
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
                  alt="Feedback" 
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
                  <h4 className="cs_service_heading mb-4">Feedback Form</h4>
                  
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
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Enter your phone (optional)"
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
                          Center Visited
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
                          <option value="">Select center (optional)</option>
                          <option value="delhi">Malviya Nagar, Delhi</option>
                          <option value="gurugram">Gurugram, Haryana</option>
                          <option value="kolkata">Kolkata, West Bengal</option>
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
                          Feedback Type <span style={{ color: 'red' }}>*</span>
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
                          <option value="">Select feedback type</option>
                          <option value="compliment">Compliment</option>
                          <option value="suggestion">Suggestion</option>
                          <option value="complaint">Complaint</option>
                          <option value="testimonial">Testimonial</option>
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
                          Overall Rating <span style={{ color: 'red' }}>*</span>
                        </label>
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <label key={rating} style={{ cursor: 'pointer', fontSize: '30px' }}>
                              <input type="radio" name="rating" value={rating} required style={{ display: 'none' }} />
                              <span style={{ color: '#ddd' }}>★</span>
                            </label>
                          ))}
                        </div>
                        <small style={{ color: '#666' }}>Click on stars to rate (1 = Poor, 5 = Excellent)</small>
                      </div>
                      <div className="col-md-12 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Your Feedback <span style={{ color: 'red' }}>*</span>
                        </label>
                        <textarea
                          rows="6"
                          required
                          placeholder="Please share your detailed feedback, suggestions, or experience with us..."
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
                      <div className="col-md-12 mb-4">
                        <label style={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="checkbox"
                            required
                            style={{ marginRight: '10px', width: '18px', height: '18px' }}
                          />
                          <span style={{ fontSize: '14px' }}>
                            I agree to share my feedback and allow Seeds of Innocens to use it for improvement purposes.
                          </span>
                        </label>
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
                          <span>Submit Feedback</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div style={{ 
                  padding: '30px', 
                  backgroundColor: '#e8f5e9', 
                  borderRadius: '10px',
                  borderLeft: '4px solid #4caf50'
                }}>
                  <h4 className="cs_service_heading mb-3" style={{ color: '#2e7d32' }}>
                    How We Use Your Feedback
                  </h4>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                      Improve our services and patient care quality
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                      Train our staff based on your valuable insights
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                      Address concerns and resolve issues promptly
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                      Share success stories (with your permission)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">Thank You!</h3>
                  <p style={{ marginBottom: '15px' }}>
                    We truly appreciate you taking the time to share your feedback. Your input helps us serve you better and improve our services for all our patients.
                  </p>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">Response Time</h3>
                  <p style={{ marginBottom: '15px' }}>
                    We review all feedback and respond within:
                  </p>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px' }}>•</span>
                      <strong>Compliments:</strong> Thank you message within 24 hours
                    </li>
                    <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px' }}>•</span>
                      <strong>Suggestions:</strong> Review and response within 3-5 days
                    </li>
                    <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px' }}>•</span>
                      <strong>Complaints:</strong> Immediate acknowledgment and resolution within 48 hours
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg">
                  <h3 className="cs_widget_title">Other Ways to Connect</h3>
                  <ul className="cs_mp_0">
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact/book-appointment" style={{ color: 'var(--body-color)' }}>Book Appointment</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact/whatsapp" style={{ color: 'var(--body-color)' }}>WhatsApp Us</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/resources/success-stories" style={{ color: 'var(--body-color)' }}>Share Success Story</Link>
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

