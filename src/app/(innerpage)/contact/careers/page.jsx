"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import AccentHeading from '@/app/Components/AccentHeading';
import Link from 'next/link';
import {
  FaTrophy, FaUsers, FaBriefcase, FaMapMarkerAlt,
  FaClock, FaUserTie, FaFlask, FaHeartbeat, FaChartLine,
  FaLaptopMedical, FaBullhorn,
} from 'react-icons/fa';

const headingData = { title: 'Careers' };

const whyJoinUs = [
  {
    icon: FaTrophy,
    title: 'Excellence',
    desc: 'Work with state-of-the-art technology and best practices in fertility care.',
    bg: '#fff4f4',
    iconColor: '#de3554',
  },
  {
    icon: FaUsers,
    title: 'Team Culture',
    desc: 'Collaborative environment with supportive colleagues and continuous learning.',
    bg: '#f0f7ff',
    iconColor: '#1565c0',
  },
  {
    icon: FaBriefcase,
    title: 'Growth',
    desc: 'Career development opportunities and professional training programs.',
    bg: '#f0fff4',
    iconColor: '#2e7d32',
  },
  {
    icon: FaHeartbeat,
    title: 'Meaningful Work',
    desc: 'Help families achieve their dream of parenthood — work that truly matters.',
    bg: '#fff8f0',
    iconColor: '#e65100',
  },
  {
    icon: FaChartLine,
    title: 'Competitive Pay',
    desc: 'Industry-leading compensation packages with performance bonuses.',
    bg: '#f5f0ff',
    iconColor: '#6a1b9a',
  },
  {
    icon: FaLaptopMedical,
    title: 'Modern Infrastructure',
    desc: 'Work in well-equipped centres across India and internationally.',
    bg: '#e8f5e9',
    iconColor: '#388e3c',
  },
];

const jobOpenings = [
  {
    title: 'Fertility Specialist / IVF Doctor',
    department: 'Medical',
    departmentColor: { bg: '#fff4f4', color: '#c62828' },
    icon: FaHeartbeat,
    location: 'Delhi, Mumbai, Bangalore',
    type: 'Full-time',
    experience: '5+ years',
    description: 'We are looking for experienced fertility specialists to join our team. Candidates should have expertise in IVF, ICSI, and reproductive medicine.',
  },
  {
    title: 'Embryologist',
    department: 'Laboratory',
    departmentColor: { bg: '#e3f2fd', color: '#1565c0' },
    icon: FaFlask,
    location: 'Delhi, Gurugram',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Join our state-of-the-art embryology lab. Experience in IVF lab procedures, embryo culture, and quality control required.',
  },
  {
    title: 'Nurse / Medical Assistant',
    department: 'Nursing',
    departmentColor: { bg: '#e8f5e9', color: '#2e7d32' },
    icon: FaUserTie,
    location: 'Multiple Locations',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Support our medical team in providing excellent patient care. Experience in fertility clinics preferred.',
  },
  {
    title: 'Patient Care Coordinator',
    department: 'Administration',
    departmentColor: { bg: '#fff3cd', color: '#856404' },
    icon: FaUsers,
    location: 'All Centres',
    type: 'Full-time',
    experience: '1+ years',
    description: 'Help patients navigate their fertility journey. Excellent communication skills and empathy required.',
  },
  {
    title: 'Lab Technician',
    department: 'Laboratory',
    departmentColor: { bg: '#e3f2fd', color: '#1565c0' },
    icon: FaFlask,
    location: 'Delhi, Kolkata',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Support our laboratory operations. Experience in medical lab procedures and quality assurance.',
  },
  {
    title: 'Marketing Executive',
    department: 'Marketing',
    departmentColor: { bg: '#f5f0ff', color: '#6a1b9a' },
    icon: FaBullhorn,
    location: 'Delhi',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Drive our marketing initiatives and patient outreach programs. Experience in healthcare marketing preferred.',
  },
];

const stats = [
  { value: '20+', label: 'Centres Across India' },
  { value: '3', label: 'International Locations' },
  { value: '1000+', label: 'Team Members' },
  { value: '15+', label: 'Years of Excellence' },
];

const Page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.png"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Intro Content */}
      <Section topSpaceLg="50" topSpaceMd="60" bottomSpaceLg="50" bottomSpaceMd="60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <AccentHeading style={{ marginBottom: '16px' }}>Join Our Team</AccentHeading>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--body-color)', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                At Seeds of Innocens, we&apos;re building a team of passionate professionals dedicated to helping couples achieve their dream of parenthood. Join us in making a difference in people&apos;s lives. We offer competitive benefits, professional growth opportunities, and a supportive work environment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Bar */}
      <Section topSpaceLg="0" topSpaceMd="0" bottomSpaceLg="50" bottomSpaceMd="60">
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #de3554 0%, #de3554 100%)',
            borderRadius: '16px',
            padding: '40px 30px',
          }}>
            <div className="row">
              {stats.map((stat, i) => (
                <div key={i} className="col-6 col-lg-3">
                  <div style={{
                    textAlign: 'center',
                    padding: '10px',
                    borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                  }}>
                    <div style={{ fontSize: '36px', fontWeight: '800', color: '#fff', lineHeight: 1 }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', marginTop: '6px' }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Why Join Us */}
      <Section topSpaceLg="0" topSpaceMd="0" bottomSpaceLg="50" bottomSpaceMd="60">
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <AccentHeading>Why Join Seeds of Innocens?</AccentHeading>
            <p style={{ fontSize: '16px', color: 'var(--body-color)', marginTop: '8px', maxWidth: '600px' }}>
              Be part of a mission-driven organization that values its people as much as its patients.
            </p>
          </div>
          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {whyJoinUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="col-lg-4 col-md-6">
                  <div style={{
                    padding: '30px',
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    border: '1px solid #ebedf0',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '18px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                    }}
                  >
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: item.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon style={{ fontSize: '24px', color: item.iconColor }} />
                    </div>
                    <div>
                      <h5 style={{ fontSize: '17px', fontWeight: '700', color: '#000000', marginBottom: '6px' }}>
                        {item.title}
                      </h5>
                      <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: '#666' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Job Openings */}
      <Section topSpaceLg="0" topSpaceMd="0" bottomSpaceLg="80" bottomSpaceMd="120">
        <div className="container">

          <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <AccentHeading style={{ margin: 0 }}>Current Openings</AccentHeading>
            <span style={{
              backgroundColor: '#fff4f4',
              color: '#de3554',
              borderRadius: '20px',
              padding: '4px 18px',
              fontSize: '13px',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              display: 'inline-block',
            }}>
              {jobOpenings.length} Positions
            </span>
          </div>

          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {jobOpenings.map((job, i) => {
              const Icon = job.icon;
              return (
                <div key={i} className="col-lg-6">
                  <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    border: '1px solid #ebedf0',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                    }}
                  >
                    {/* Card Top accent */}
                    <div style={{ height: '4px', background: 'linear-gradient(90deg, #de3554, #c73b3a)' }} />

                    <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Header */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
                        <div style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '10px',
                          backgroundColor: job.departmentColor.bg,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Icon style={{ fontSize: '20px', color: job.departmentColor.color }} />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#000000', marginBottom: '4px', lineHeight: '1.3' }}>
                            {job.title}
                          </h4>
                          <span style={{
                            display: 'inline-block',
                            padding: '3px 10px',
                            backgroundColor: job.departmentColor.bg,
                            color: job.departmentColor.color,
                            borderRadius: '20px',
                            fontSize: '11px',
                            fontWeight: '600',
                          }}>
                            {job.department}
                          </span>
                        </div>
                      </div>

                      {/* Meta tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: '5px',
                          padding: '5px 12px', backgroundColor: '#f5f5f5',
                          color: '#444', borderRadius: '6px', fontSize: '12px', fontWeight: '500',
                        }}>
                          <FaMapMarkerAlt style={{ color: '#de3554', fontSize: '11px' }} />
                          {job.location}
                        </span>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: '5px',
                          padding: '5px 12px', backgroundColor: '#f5f5f5',
                          color: '#444', borderRadius: '6px', fontSize: '12px', fontWeight: '500',
                        }}>
                          <FaClock style={{ color: '#de3554', fontSize: '11px' }} />
                          {job.type}
                        </span>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: '5px',
                          padding: '5px 12px', backgroundColor: '#f5f5f5',
                          color: '#444', borderRadius: '6px', fontSize: '12px', fontWeight: '500',
                        }}>
                          <FaUserTie style={{ color: '#de3554', fontSize: '11px' }} />
                          {job.experience}
                        </span>
                      </div>

                      {/* Description */}
                      <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#666', flex: 1, marginBottom: '20px' }}>
                        {job.description}
                      </p>

                      {/* Apply Button */}
                      <Link
                        href="/contact/careers/apply"
                        style={{
                          display: 'block',
                          textAlign: 'center',
                          padding: '12px 20px',
                          backgroundColor: '#de3554',
                          color: '#fff',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '600',
                          transition: 'background-color 0.2s',
                          marginTop: 'auto',
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#c73b3a'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#de3554'}
                      >
                        Apply Now →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* General Application Banner */}
          <div style={{ marginTop: '60px' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #fff4f4 0%, #f7fbff 100%)',
              border: '1px solid #f1e2e2',
              padding: '50px 40px',
              textAlign: 'center',
              position: 'relative',
            }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                backgroundColor: '#fff', border: '2px solid #f1e2e2',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 4px 16px rgba(228,83,82,0.12)',
              }}>
                <FaBriefcase style={{ fontSize: '28px', color: '#de3554' }} />
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#000000', marginBottom: '12px' }}>
                Don&apos;t See the Right Role?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', maxWidth: '560px', margin: '0 auto 28px' }}>
                Don&apos;t see a position that matches your skills? Send us your resume and we&apos;ll keep you in mind for future opportunities.
              </p>
              <Link
                href="/contact/careers/general-application"
                style={{
                  display: 'inline-block',
                  padding: '14px 36px',
                  backgroundColor: '#de3554',
                  color: '#fff',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '600',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#c73b3a'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#de3554'}
              >
                Submit General Application
              </Link>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Page;
