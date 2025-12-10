"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'General Application',
};

const ivfContentData = {
  sections: [
    {
      heading: 'General Application',
      paragraphs: [
        'Don\'t see a position that matches your skills? Submit a general application and tell us about your requirements. We\'ll keep your profile in our database and contact you when a suitable opportunity arises. Your application will be reviewed by our HR team, and we\'ll reach out to you as soon as we have a position that matches your profile.',
      ],
      // sideImage: '/assets/img/recent_post_1.png',
    },
  ],
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

      {/* Application Form Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#ffffff', 
                borderRadius: '12px',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e8e8e8',
                marginBottom: '30px'
              }}>
                <h2 className="cs_ivf_content_heading" style={{ marginBottom: '30px' }}>
                  General Application Form
                </h2>
                
                <form className="cs_contact_form">
                  <div className="row cs_gap_y_30">
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Full Name <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="fullName"
                        placeholder="Enter your full name"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Email Address <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        placeholder="Enter your email"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Phone Number <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        placeholder="Enter your phone number"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Current Location <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="location"
                        placeholder="Enter your current city"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Years of Experience <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="number"
                        required
                        name="experience"
                        placeholder="Enter years of experience"
                        min="0"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Educational Qualification <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="qualification"
                        placeholder="e.g., MBBS, MD, B.Sc, M.Sc, etc."
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Area of Interest / Department <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <select
                        required
                        name="department"
                        className="cs_form_field"
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
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Preferred Position / Role <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="preferredPosition"
                        placeholder="e.g., Senior IVF Specialist, Lab Manager, etc."
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Your Requirements & Expectations <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <textarea
                        rows="6"
                        required
                        name="requirements"
                        placeholder="Please describe your requirements, expectations, preferred location, salary expectations, and any other relevant information..."
                        className="cs_form_field"
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Skills & Specializations
                      </label>
                      <textarea
                        rows="4"
                        name="skills"
                        placeholder="List your key skills, specializations, certifications, and relevant experience..."
                        className="cs_form_field"
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Resume/CV <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="file"
                        required
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        className="cs_form_field"
                      />
                      <small style={{ color: '#666', display: 'block', marginTop: '5px', fontSize: '14px' }}>
                        Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                      </small>
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Additional Information / Cover Letter
                      </label>
                      <textarea
                        rows="5"
                        name="additionalInfo"
                        placeholder="Tell us about yourself, your career goals, and why you'd like to join Seeds of Innocens..."
                        className="cs_form_field"
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                    <div className="col-md-12">
                      <label style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        cursor: 'pointer',
                        gap: '10px'
                      }}>
                        <input
                          type="checkbox"
                          required
                          name="terms"
                          style={{ marginTop: '4px', width: '18px', height: '18px', flexShrink: 0 }}
                        />
                        <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                          I confirm that the information provided is accurate and I agree to the terms and conditions. I understand that my application will be kept in our database for future opportunities.
                        </span>
                      </label>
                    </div>
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="cs_btn cs_style_1 cs_color_1"
                        style={{ width: '100%' }}
                      >
                        <span>Submit General Application</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div style={{ 
                padding: '30px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '12px',
                borderLeft: '4px solid #E45352',
                marginBottom: '30px'
              }}>
                <h3 className="cs_ivf_content_heading" style={{ fontSize: '24px', marginBottom: '20px' }}>
                  How General Applications Work
                </h3>
                <ul className="cs_list cs_list_style_1">
                  <li><strong>Database Storage:</strong> Your application will be stored in our talent database</li>
                  <li><strong>Active Review:</strong> Our HR team reviews general applications regularly</li>
                  <li><strong>Matching Opportunities:</strong> We'll contact you when a suitable position opens</li>
                  <li><strong>Future Consideration:</strong> Your profile will be considered for all relevant openings</li>
                </ul>
              </div>

              <div style={{ 
                padding: '30px', 
                backgroundColor: '#fff9e6', 
                borderRadius: '12px',
                borderLeft: '4px solid #ffc107'
              }}>
                <h3 className="cs_ivf_content_heading" style={{ fontSize: '24px', marginBottom: '15px', color: '#856404' }}>
                  Note
                </h3>
                <p style={{ margin: 0, color: '#856404', lineHeight: '1.8' }}>
                  While we review all general applications, we encourage you to also check our current openings page regularly. If you see a position that matches your profile, you can apply directly to that specific role for faster processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

