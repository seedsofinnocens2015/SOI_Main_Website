/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Apply for Position',
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
                <h3 className="cs_service_heading">Job Application Form</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Thank you for your interest in joining Seeds of Innocens. Please fill out the form below to apply for the position. We'll review your application and get back to you soon.
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
                  alt="Job Application" 
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
                  <h4 className="cs_service_heading mb-4">Application Form</h4>
                  
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          fontWeight: '600',
                          fontSize: '16px'
                        }}>
                          Position Applied For <span style={{ color: 'red' }}>*</span>
                        </label>
                        <select
                          required
                          name="position"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px'
                          }}
                        >
                          <option value="">Select Position</option>
                          {jobOpenings.map((job) => (
                            <option key={job.id} value={job.id}>
                              {job.title} - {job.location} ({job.department})
                            </option>
                          ))}
                        </select>
                      </div>
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
                          Notice Period <span style={{ color: 'red' }}>*</span>
                        </label>
                        <select
                          required
                          name="noticePeriod"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '16px'
                          }}
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
                      <div className="col-md-12 mb-4">
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
                          Current/Last Organization
                        </label>
                        <input
                          type="text"
                          name="currentOrg"
                          placeholder="Enter your current or last organization name"
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
                          Cover Letter / Additional Information
                        </label>
                        <textarea
                          rows="5"
                          name="coverLetter"
                          placeholder="Tell us why you're interested in this position and what makes you a good fit..."
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
                            I confirm that the information provided is accurate and I agree to the terms and conditions.
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
                          <span>Submit Application</span>
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
                      <strong>Application Review:</strong> Our HR team will review your application within 3-5 business days
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>2.</span>
                      <strong>Shortlisting:</strong> If shortlisted, you'll receive a call or email for the next steps
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>3.</span>
                      <strong>Interview:</strong> Selected candidates will be invited for an interview
                    </li>
                    <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#2196f3', fontSize: '18px' }}>4.</span>
                      <strong>Decision:</strong> Final decision will be communicated within 2 weeks of interview
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

