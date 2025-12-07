/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'General Application',
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
                <h3 className="cs_service_heading">General Application</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Don't see a position that matches your skills? Submit a general application and tell us about your requirements. We'll keep your profile in our database and contact you when a suitable opportunity arises.
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
                  alt="General Application" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            <div className="col-lg-8 mx-auto">
              <div className="cs_service_details">
                <div style={{ 
                  padding: '40px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '10px',
                  marginBottom: '30px'
                }}>
                  <h4 className="cs_service_heading mb-4">General Application Form</h4>
                  
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
                          name="fullName"
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
                          Email Address <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
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
                          name="phone"
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
                          Current Location <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          name="location"
                          placeholder="Enter your current city"
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
                          Years of Experience <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="number"
                          required
                          name="experience"
                          placeholder="Enter years of experience"
                          min="0"
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
                          Educational Qualification <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          name="qualification"
                          placeholder="e.g., MBBS, MD, B.Sc, M.Sc, etc."
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
                          Area of Interest / Department <span style={{ color: 'red' }}>*</span>
                        </label>
                        <select
                          required
                          name="department"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px'
                          }}
                        >
                          <option value="">Select department</option>
                          <option value="medical">Medical (Doctors, Specialists)</option>
                          <option value="laboratory">Laboratory (Embryologists, Lab Technicians)</option>
                          <option value="nursing">Nursing</option>
                          <option value="administration">Administration</option>
                          <option value="marketing">Marketing</option>
                          <option value="finance">Finance</option>
                          <option value="hr">Human Resources</option>
                          <option value="it">IT / Technology</option>
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
                          Preferred Position / Role <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          name="preferredPosition"
                          placeholder="e.g., Senior IVF Specialist, Lab Manager, etc."
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
                          Your Requirements & Expectations <span style={{ color: 'red' }}>*</span>
                        </label>
                        <textarea
                          rows="6"
                          required
                          name="requirements"
                          placeholder="Please describe your requirements, expectations, preferred location, salary expectations, and any other relevant information..."
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
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Skills & Specializations
                        </label>
                        <textarea
                          rows="4"
                          name="skills"
                          placeholder="List your key skills, specializations, certifications, and relevant experience..."
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
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Resume/CV <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                          type="file"
                          required
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px'
                          }}
                        />
                        <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>
                          Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                        </small>
                      </div>
                      <div className="col-md-12 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Additional Information / Cover Letter
                        </label>
                        <textarea
                          rows="5"
                          name="additionalInfo"
                          placeholder="Tell us about yourself, your career goals, and why you'd like to join Seeds of Innocens..."
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
                            name="terms"
                            style={{ marginRight: '10px', width: '18px', height: '18px' }}
                          />
                          <span style={{ fontSize: '14px' }}>
                            I confirm that the information provided is accurate and I agree to the terms and conditions. I understand that my application will be kept in our database for future opportunities.
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
                          <span>Submit General Application</span>
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
                    How General Applications Work
                  </h4>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                      <strong>Database Storage:</strong> Your application will be stored in our talent database
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                      <strong>Active Review:</strong> Our HR team reviews general applications regularly
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                      <strong>Matching Opportunities:</strong> We'll contact you when a suitable position opens
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontSize: '18px' }}>✓</span>
                      <strong>Future Consideration:</strong> Your profile will be considered for all relevant openings
                    </li>
                  </ul>
                </div>

                <div style={{ 
                  padding: '30px', 
                  backgroundColor: '#fff3cd', 
                  borderRadius: '10px',
                  borderLeft: '4px solid #ffc107',
                  marginTop: '30px'
                }}>
                  <h4 className="cs_service_heading mb-3" style={{ color: '#856404' }}>
                    Note
                  </h4>
                  <p style={{ margin: 0, color: '#856404', lineHeight: '1.8' }}>
                    While we review all general applications, we encourage you to also check our current openings page regularly. If you see a position that matches your profile, you can apply directly to that specific role for faster processing.
                  </p>
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

