/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Careers',
};

const jobOpenings = [
  {
    title: 'Fertility Specialist / IVF Doctor',
    department: 'Medical',
    location: 'Delhi, Mumbai, Bangalore',
    type: 'Full-time',
    experience: '5+ years',
    description: 'We are looking for experienced fertility specialists to join our team. Candidates should have expertise in IVF, ICSI, and reproductive medicine.',
  },
  {
    title: 'Embryologist',
    department: 'Laboratory',
    location: 'Delhi, Gurugram',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Join our state-of-the-art embryology lab. Experience in IVF lab procedures, embryo culture, and quality control required.',
  },
  {
    title: 'Nurse / Medical Assistant',
    department: 'Nursing',
    location: 'Multiple Locations',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Support our medical team in providing excellent patient care. Experience in fertility clinics preferred.',
  },
  {
    title: 'Patient Care Coordinator',
    department: 'Administration',
    location: 'All Centers',
    type: 'Full-time',
    experience: '1+ years',
    description: 'Help patients navigate their fertility journey. Excellent communication skills and empathy required.',
  },
  {
    title: 'Lab Technician',
    department: 'Laboratory',
    location: 'Delhi, Kolkata',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Support our laboratory operations. Experience in medical lab procedures and quality assurance.',
  },
  {
    title: 'Marketing Executive',
    department: 'Marketing',
    location: 'Delhi',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Drive our marketing initiatives and patient outreach programs. Experience in healthcare marketing preferred.',
  },
];

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
                <h3 className="cs_service_heading">Join Our Team</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  At Seeds of Innocens, we're building a team of passionate professionals dedicated to helping couples achieve their dream of parenthood. Join us in making a difference in people's lives.
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
                  alt="Careers" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Why Join Us Section */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px',
                marginBottom: '40px'
              }}>
                <h4 className="cs_service_heading mb-4 text-center">Why Join Seeds of Innocens?</h4>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '50px', marginBottom: '15px' }}>🏆</div>
                      <h5 style={{ marginBottom: '10px' }}>Excellence</h5>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        Work with state-of-the-art technology and best practices in fertility care
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '50px', marginBottom: '15px' }}>👥</div>
                      <h5 style={{ marginBottom: '10px' }}>Team Culture</h5>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        Collaborative environment with supportive colleagues and continuous learning
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '50px', marginBottom: '15px' }}>💼</div>
                      <h5 style={{ marginBottom: '10px' }}>Growth</h5>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                        Career development opportunities and professional training programs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Openings */}
          <div className="row">
            <div className="col-lg-12">
              <h4 className="cs_service_heading mb-4">Current Openings</h4>
            </div>
          </div>

          <div className="row cs_gap_y_30">
            {jobOpenings.map((job, index) => (
              <div key={index} className="col-lg-6">
                <div style={{ 
                  padding: '30px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '10px',
                  height: '100%',
                  border: '1px solid #e0e0e0'
                }}>
                  <h5 className="cs_service_heading mb-3" style={{ fontSize: '20px' }}>
                    {job.title}
                  </h5>
                  <div style={{ marginBottom: '15px' }}>
                    <span style={{ 
                      display: 'inline-block',
                      padding: '5px 12px',
                      backgroundColor: '#e3f2fd',
                      color: '#1565c0',
                      borderRadius: '5px',
                      fontSize: '12px',
                      marginRight: '10px',
                      marginBottom: '5px'
                    }}>
                      {job.department}
                    </span>
                    <span style={{ 
                      display: 'inline-block',
                      padding: '5px 12px',
                      backgroundColor: '#e8f5e9',
                      color: '#2e7d32',
                      borderRadius: '5px',
                      fontSize: '12px',
                      marginRight: '10px',
                      marginBottom: '5px'
                    }}>
                      {job.location}
                    </span>
                    <span style={{ 
                      display: 'inline-block',
                      padding: '5px 12px',
                      backgroundColor: '#fff3cd',
                      color: '#856404',
                      borderRadius: '5px',
                      fontSize: '12px',
                      marginBottom: '5px'
                    }}>
                      {job.type}
                    </span>
                  </div>
                  <p style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.6' }}>
                    {job.description}
                  </p>
                  <p style={{ marginBottom: '15px', fontSize: '14px' }}>
                    <strong>Experience Required:</strong> {job.experience}
                  </p>
                  <Link 
                    href="/contact/careers/apply"
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{ 
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                  >
                    <span>Apply Now</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Application Form Section */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#e3f2fd', 
                borderRadius: '10px',
                borderLeft: '4px solid #2196f3'
              }}>
                <h4 className="cs_service_heading mb-3" style={{ color: '#1565c0', textAlign: 'center' }}>
                  General Application
                </h4>
                <p className="cs_service_subtitle mb-4" style={{ textAlign: 'center', color: '#1565c0' }}>
                  Don't see a position that matches your skills? Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <div style={{ textAlign: 'center' }}>
                  <Link 
                    href="/contact/careers/general-application"
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{ 
                      display: 'inline-block',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Submit General Application</span>
                  </Link>
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

