/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Contact Team',
};

const teamMembers = [
  {
    name: 'International Patient Coordinator',
    role: 'Primary Contact',
    email: 'international@seedsofinnocens.com',
    phone: '+91-XXXXXXXXXX',
    responsibilities: [
      'Initial consultation coordination',
      'Treatment plan discussions',
      'General inquiries',
    ],
  },
  {
    name: 'Travel Support Team',
    role: 'Travel Assistance',
    email: 'travel@seedsofinnocens.com',
    phone: '+91-XXXXXXXXXX',
    responsibilities: [
      'Visa assistance',
      'Accommodation arrangements',
      'Transportation coordination',
    ],
  },
  {
    name: 'Medical Concierge',
    role: 'Medical Support',
    email: 'concierge@seedsofinnocens.com',
    phone: '+91-XXXXXXXXXX',
    responsibilities: [
      'Appointment scheduling',
      'Medical documentation',
      'Treatment coordination',
    ],
  },
];

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
                <h3 className="cs_service_heading">International Patient Support Team</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Our dedicated International Patient Support Team is here to assist you at every step of your journey. Whether you need information about treatments, travel arrangements, or have any questions, we're just a call or email away.
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
                  alt="Contact Team" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="row cs_gap_y_40 mb-5">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div style={{ 
                  padding: '30px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '10px',
                  height: '100%',
                  border: '1px solid #e0e0e0',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-color)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    margin: '0 auto 20px',
                    fontWeight: 'bold'
                  }}>
                    {member.name.charAt(0)}
                  </div>
                  <h4 className="cs_service_heading mb-2" style={{ fontSize: '20px' }}>
                    {member.name}
                  </h4>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'var(--accent-color)', 
                    fontWeight: '600',
                    marginBottom: '20px'
                  }}>
                    {member.role}
                  </p>
                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ marginBottom: '10px', fontSize: '14px' }}>
                      <strong>Email:</strong><br />
                      <a href={`mailto:${member.email}`} style={{ color: 'var(--accent-color)' }}>
                        {member.email}
                      </a>
                    </p>
                    <p style={{ marginBottom: '10px', fontSize: '14px' }}>
                      <strong>Phone:</strong><br />
                      <a href={`tel:${member.phone}`} style={{ color: 'var(--accent-color)' }}>
                        {member.phone}
                      </a>
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>
                      Responsibilities:
                    </p>
                    <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0', textAlign: 'left' }}>
                      {member.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} style={{ 
                          marginBottom: '8px', 
                          paddingLeft: '20px', 
                          position: 'relative',
                          fontSize: '13px'
                        }}>
                          <span style={{ 
                            position: 'absolute', 
                            left: '0', 
                            color: 'var(--accent-color)', 
                            fontSize: '16px' 
                          }}>•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px'
              }}>
                <h4 className="cs_service_heading mb-4 text-center">Get in Touch</h4>
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
                        Country <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your country"
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
                        Phone Number <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone with country code"
                        style={{
                          width: '100%',
                          padding: '12px 15px',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '16px'
                        }}
                      />
                    </div>
                    <div className="col-md-12 mb-4">
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        fontWeight: '600',
                        fontSize: '16px'
                      }}>
                        Subject <span style={{ color: 'red' }}>*</span>
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
                        <option value="">Select subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="treatment">Treatment Information</option>
                        <option value="pricing">Pricing & Packages</option>
                        <option value="travel">Travel Support</option>
                        <option value="appointment">Appointment Booking</option>
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
                        Message <span style={{ color: 'red' }}>*</span>
                      </label>
                      <textarea
                        rows="5"
                        required
                        placeholder="Tell us how we can help you..."
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
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="row">
            <div className="col-lg-12">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#e3f2fd', 
                borderRadius: '10px',
                borderLeft: '4px solid #2196f3'
              }}>
                <h4 className="cs_service_heading mb-4" style={{ color: '#1565c0', textAlign: 'center' }}>
                  Quick Contact Information
                </h4>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '40px', marginBottom: '15px' }}>📧</div>
                      <h5 style={{ marginBottom: '10px' }}>Email</h5>
                      <p style={{ margin: 0 }}>
                        <a href="mailto:international@seedsofinnocens.com" style={{ color: 'var(--accent-color)' }}>
                          international@seedsofinnocens.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '40px', marginBottom: '15px' }}>📞</div>
                      <h5 style={{ marginBottom: '10px' }}>Phone</h5>
                      <p style={{ margin: 0 }}>
                        <a href="tel:+91-XXXXXXXXXX" style={{ color: 'var(--accent-color)' }}>
                          +91-XXXXXXXXXX
                        </a>
                      </p>
                      <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                        Available 24/7 for international patients
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '40px', marginBottom: '15px' }}>💬</div>
                      <h5 style={{ marginBottom: '10px' }}>WhatsApp</h5>
                      <p style={{ margin: 0 }}>
                        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>
                          Chat with us on WhatsApp
                        </a>
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

