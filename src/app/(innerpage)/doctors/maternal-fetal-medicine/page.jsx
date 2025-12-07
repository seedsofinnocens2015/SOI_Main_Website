import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import React from 'react';

const page = () => {
  const headingData = {
    title: 'Maternal–Fetal Medicine Specialists',
  };

  const teamData = {
    subtitle: 'OUR SPECIALISTS',
    title: 'Maternal–Fetal Medicine <br />Specialists',
    sliderData: [
      {
        name: 'Dr. Priya Sharma',
        profession: 'Maternal–Fetal Medicine Specialist',
        imageUrl: '/assets/img/team_4.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Meera Singh',
        profession: 'Maternal–Fetal Medicine Specialist',
        imageUrl: '/assets/img/team_6.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Anjali Patel',
        profession: 'Maternal–Fetal Medicine Specialist',
        imageUrl: '/assets/img/team_3.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Shilpa Reddy',
        profession: 'Maternal–Fetal Medicine Specialist',
        imageUrl: '/assets/img/team_5.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Kavita Desai',
        profession: 'Maternal–Fetal Medicine Specialist',
        imageUrl: '/assets/img/team_7.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Ritu Verma',
        profession: 'Maternal–Fetal Medicine Specialist',
        imageUrl: '/assets/img/team_8.jpg',
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

      {/* Start Maternal–Fetal Medicine Section */}
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
                  <p style={{ color: '#999' }}>Image placeholder - Add maternal-fetal medicine image here</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="cs_section_title cs_fs_42">Maternal–Fetal Medicine</h2>
              <div className="cs_height_20" />
              <p className="cs_text_style_1">
                Our Maternal–Fetal Medicine Specialists are highly trained experts who specialize in managing high-risk pregnancies and providing comprehensive care for both mother and baby throughout pregnancy and delivery.
              </p>
              <div className="cs_height_30" />
              <h3 className="cs_section_title cs_fs_30">Specialized Services</h3>
              <div className="cs_height_20" />
              <ul className="cs_list cs_list_style_1">
                <li>High-risk pregnancy management</li>
                <li>Fetal ultrasound and diagnostics</li>
                <li>Genetic counseling and testing</li>
                <li>Preconception counseling</li>
                <li>Prenatal diagnosis and fetal therapy</li>
                <li>Maternal medical complications during pregnancy</li>
              </ul>
            </div>
          </div>
          
          <div className="cs_height_60" />
        </div>
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End Maternal–Fetal Medicine Section */}
    </div>
  );
};

export default page;

