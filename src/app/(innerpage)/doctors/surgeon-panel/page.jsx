import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import React from 'react';

const page = () => {
  const headingData = {
    title: 'Surgeon Panel',
  };

  const teamData = {
    subtitle: 'OUR SURGEON PANEL',
    title: 'Expert Surgical <br />Specialists',
    sliderData: [
      {
        name: 'Dr. Rajesh Kumar',
        profession: 'Reproductive Surgeon',
        imageUrl: '/assets/img/team_3.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Anil Verma',
        profession: 'Laparoscopic Surgeon',
        imageUrl: '/assets/img/team_5.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Vikram Sharma',
        profession: 'Hysteroscopic Surgeon',
        imageUrl: '/assets/img/team_1.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Mohan Kapoor',
        profession: 'Microsurgical Specialist',
        imageUrl: '/assets/img/team_4.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Sanjay Mehta',
        profession: 'Reproductive Surgeon',
        imageUrl: '/assets/img/team_6.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Rakesh Malhotra',
        profession: 'Laparoscopic Surgeon',
        imageUrl: '/assets/img/team_7.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
    ],
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Surgeon Panel Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_team_section position-relative'}
      >
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-6">
              <div className="cs_about_thumb">
                {/* Image placeholder */}
                <div className="cs_about_thumb_1" style={{ 
                  backgroundColor: '#f5f5f5', 
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px'
                }}>
                  <p style={{ color: '#999' }}>Image placeholder - Add surgeon panel image here</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="cs_section_title cs_fs_42">Expert Surgical Team</h2>
              <div className="cs_height_20" />
              <p className="cs_text_style_1">
                Our Surgeon Panel consists of highly skilled and experienced reproductive surgeons who specialize in minimally invasive procedures and advanced surgical techniques for fertility treatment.
              </p>
              <div className="cs_height_30" />
              <h3 className="cs_section_title cs_fs_30">Surgical Expertise</h3>
              <div className="cs_height_20" />
              <ul className="cs_list cs_list_style_1">
                <li>Laparoscopic surgery for fertility issues</li>
                <li>Hysteroscopic procedures</li>
                <li>Microsurgical techniques</li>
                <li>Tubal reconstructive surgery</li>
                <li>Myomectomy and polypectomy</li>
                <li>Endometriosis treatment</li>
                <li>Ovarian cystectomy</li>
                <li>Adhesion removal procedures</li>
              </ul>
            </div>
          </div>
          
          <div className="cs_height_60" />
          
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_iconbox cs_style_1">
                <h3 className="cs_section_title cs_fs_30">Advanced Surgical Techniques</h3>
                <div className="cs_height_20" />
                <p className="cs_text_style_1">
                  Our surgeons utilize state-of-the-art equipment and minimally invasive techniques to ensure better outcomes, faster recovery, and minimal scarring. We are committed to providing the safest and most effective surgical solutions for fertility-related conditions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="cs_height_40" />
        </div>
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End Surgeon Panel Section */}
    </div>
  );
};

export default page;
