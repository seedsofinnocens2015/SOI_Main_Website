"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Apply for Position',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Job Application Form',
      paragraphs: [
        'Thank you for your interest in joining Seeds of Innocens. Please fill out the form below to apply for the position. We\'ll review your application and get back to you soon. We look forward to learning more about you and how you can contribute to our mission of helping couples achieve their dream of parenthood.',
      ],
      // sideImage: '/assets/img/recent_post2.jpg',
    },
  ],
};

const jobOpenings = [
  {
    id: 'fertility-specialist',
    title: 'Fertility Specialist / IVF Doctor',
    department: 'Medical',
    location: 'Delhi, Mumbai, Bangalore',
    type: 'Full-time',
    experience: '5+ years',
  },
  {
    id: 'embryologist',
    title: 'Embryologist',
    department: 'Laboratory',
    location: 'Delhi, Gurugram',
    type: 'Full-time',
    experience: '3+ years',
  },
  {
    id: 'nurse-medical-assistant',
    title: 'Nurse / Medical Assistant',
    department: 'Nursing',
    location: 'Multiple Locations',
    type: 'Full-time',
    experience: '2+ years',
  },
  {
    id: 'patient-care-coordinator',
    title: 'Patient Care Coordinator',
    department: 'Administration',
    location: 'All Centers',
    type: 'Full-time',
    experience: '1+ years',
  },
  {
    id: 'lab-technician',
    title: 'Lab Technician',
    department: 'Laboratory',
    location: 'Delhi, Kolkata',
    type: 'Full-time',
    experience: '2+ years',
  },
  {
    id: 'marketing-executive',
    title: 'Marketing Executive',
    department: 'Marketing',
    location: 'Delhi',
    type: 'Full-time',
    experience: '3+ years',
  },
];

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
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
                  Application Form
                </h2>
                
                <form className="cs_contact_form">
                  <div className="row cs_gap_y_30">
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Position Applied For <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <select
                        required
                        name="position"
                        className="cs_form_field"
                      >
                        <option value="">Select Position</option>
                        {jobOpenings.map((job) => (
                          <option key={job.id} value={job.id}>
                            {job.title} - {job.location} ({job.department})
                          </option>
                        ))}
                      </select>
                    </div>
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
                        Notice Period <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <select
                        required
                        name="noticePeriod"
                        className="cs_form_field"
                      >
                        <option value="">Select notice period</option>
                        <option value="immediate">Immediate Joining</option>
                        <option value="15">15 days</option>
                        <option value="30">30 days</option>
                        <option value="45">45 days</option>
                        <option value="60">60 days</option>
                        <option value="90">90 days</option>
                        <option value="90+">90+ days</option>
                      </select>
                    </div>
                    <div className="col-md-12">
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
                        Current/Last Organization
                      </label>
                      <input
                        type="text"
                        name="currentOrg"
                        placeholder="Enter your current or last organization name"
                        className="cs_form_field"
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
                        Cover Letter / Additional Information
                      </label>
                      <textarea
                        rows="5"
                        name="coverLetter"
                        placeholder="Tell us why you're interested in this position and what makes you a good fit..."
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
                          I confirm that the information provided is accurate and I agree to the terms and conditions.
                        </span>
                      </label>
                    </div>
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="cs_btn cs_style_1 cs_color_1"
                        style={{ width: '100%' }}
                      >
                        <span>Submit Application</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div style={{ 
                padding: '30px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '12px',
                borderLeft: '4px solid #E45352'
              }}>
                <h3 className="cs_ivf_content_heading" style={{ fontSize: '24px', marginBottom: '20px' }}>
                  What Happens Next?
                </h3>
                <ul className="cs_list cs_list_style_1">
                  <li><strong>Application Review:</strong> Our HR team will review your application within 3-5 business days</li>
                  <li><strong>Shortlisting:</strong> If shortlisted, you&apos;ll receive a call or email for the next steps</li>
                  <li><strong>Interview:</strong> Selected candidates will be invited for an interview</li>
                  <li><strong>Decision:</strong> Final decision will be communicated within 2 weeks of interview</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

