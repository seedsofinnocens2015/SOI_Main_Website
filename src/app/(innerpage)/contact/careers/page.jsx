"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';
import { FaTrophy, FaUsers, FaBriefcase, FaMapMarkerAlt, FaClock, FaUserTie } from 'react-icons/fa';

const headingData = {
  title: 'Careers',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Join Our Team',
      paragraphs: [
        'At Seeds of Innocens, we\'re building a team of passionate professionals dedicated to helping couples achieve their dream of parenthood. Join us in making a difference in people\'s lives. We offer competitive benefits, professional growth opportunities, and a supportive work environment.',
      ],
      // sideImage: '/assets/img/recent_post2.jpg',
    },
  ],
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

      {/* Why Join Us Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="cs_ivf_content_heading" style={{ marginBottom: '40px' }}>
                Why Join Seeds of Innocens?
              </h2>
            </div>
          </div>
          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            <div className="col-lg-4 col-md-6">
              <div style={{ 
                padding: '30px', 
                backgroundColor: '#ffffff', 
                borderRadius: '12px',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e8e8e8',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
              }}
              >
                <FaTrophy style={{ fontSize: '50px', color: '#E45352', marginBottom: '15px' }} />
                <h5 style={{ marginBottom: '10px', fontWeight: '600', color: '#0A2A43' }}>Excellence</h5>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: '#666' }}>
                  Work with state-of-the-art technology and best practices in fertility care
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div style={{ 
                padding: '30px', 
                backgroundColor: '#ffffff', 
                borderRadius: '12px',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e8e8e8',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
              }}
              >
                <FaUsers style={{ fontSize: '50px', color: '#E45352', marginBottom: '15px' }} />
                <h5 style={{ marginBottom: '10px', fontWeight: '600', color: '#0A2A43' }}>Team Culture</h5>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: '#666' }}>
                  Collaborative environment with supportive colleagues and continuous learning
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div style={{ 
                padding: '30px', 
                backgroundColor: '#ffffff', 
                borderRadius: '12px',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e8e8e8',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
              }}
              >
                <FaBriefcase style={{ fontSize: '50px', color: '#E45352', marginBottom: '15px' }} />
                <h5 style={{ marginBottom: '10px', fontWeight: '600', color: '#0A2A43' }}>Growth</h5>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: '#666' }}>
                  Career development opportunities and professional training programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Job Openings Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">

          {/* Job Openings */}
          <div className="row mb-4">
            <div className="col-lg-12">
              <h2 className="cs_ivf_content_heading" style={{ marginBottom: '40px' }}>
                Current Openings
              </h2>
            </div>
          </div>

          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {jobOpenings.map((job, index) => (
              <div key={index} className="col-lg-6">
                <div style={{ 
                  padding: '30px', 
                  backgroundColor: '#ffffff', 
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e8e8e8',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                }}
                >
                  <h4 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    color: '#0A2A43',
                    marginBottom: '15px',
                    lineHeight: '1.4'
                  }}>
                    {job.title}
                  </h4>
                  <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ 
                      display: 'inline-block',
                      padding: '5px 12px',
                      backgroundColor: '#e3f2fd',
                      color: '#1565c0',
                      borderRadius: '5px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {job.department}
                    </span>
                    <span style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '5px 12px',
                      backgroundColor: '#e8f5e9',
                      color: '#2e7d32',
                      borderRadius: '5px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      <FaMapMarkerAlt style={{ fontSize: '10px' }} />
                      {job.location}
                    </span>
                    <span style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '5px 12px',
                      backgroundColor: '#fff3cd',
                      color: '#856404',
                      borderRadius: '5px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      <FaClock style={{ fontSize: '10px' }} />
                      {job.type}
                    </span>
                  </div>
                  <p style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.6', color: '#666', flex: 1 }}>
                    {job.description}
                  </p>
                  <p style={{ marginBottom: '15px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FaUserTie style={{ color: '#E45352', fontSize: '16px' }} />
                    <strong>Experience Required:</strong> {job.experience}
                  </p>
                  <Link 
                    href="/contact/careers/apply"
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{ 
                      textDecoration: 'none',
                      display: 'inline-block',
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    <span>Apply Now</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* General Application Section */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '12px',
                borderLeft: '4px solid #E45352',
                textAlign: 'center'
              }}>
                <h3 className="" style={{ fontSize: '24px', marginBottom: '15px' }}>
                  General Application
                </h3>
                <p style={{ marginBottom: '25px', fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
                  Don&apos;t see a position that matches your skills? Send us your resume and we&apos;ll keep you in mind for future opportunities.
                </p>
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
      </Section>
    </div>
  );
};

export default page;

