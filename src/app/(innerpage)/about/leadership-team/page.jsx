import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import React from 'react';

const page = () => {
  const headingData = {
    title: 'Leadership Team',
  };

  const teamData = {
    subtitle: 'OUR LEADERSHIP',
    title: 'Meet Our Leadership <br />Team',
    sliderData: [
      {
        name: 'Dr. Gauri Agarwal',
        profession: 'Founder & Chief Fertility Specialist',
        imageUrl: '/assets/img/Doctors/Dr%20Gauri%20maam.jpg',
        link: '/about/dr-gauri-agrawal',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Ranjana Mishra',
        profession: 'Chief Genetic Expert',
        imageUrl: '/assets/img/Doctors/ranjana.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Alpana Razdan',
        profession: 'Sr. Genetic Expert',
        imageUrl: '/assets/img/Doctors/alpana.jpg',
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
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Leadership Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_team_section position-relative'}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="cs_text_style_1 text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
                Our leadership team consists of experienced and dedicated professionals who bring together decades of combined expertise in fertility medicine, embryology, genetics, and patient care. They are committed to providing the highest quality of care and ensuring the best possible outcomes for our patients.
              </p>
            </div>
          </div>
        </div>
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End Leadership Team Section */}
    </div>
  );
};

export default page;

