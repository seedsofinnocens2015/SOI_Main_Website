import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import React from 'react';
import doctorsData from '../doctors-data.json';

const page = () => {
  const headingData = {
    title: 'Maternal–Fetal Medicine Specialists',
  };

  // Map doctors from JSON to TeamSection format (sliderData)
  const sliderData = doctorsData.map((doctor) => ({
    name: doctor.name,
    profession: doctor.subtitle,
    imageUrl: doctor.image,
    link: `/doctors/${doctor.newSlug || doctor.slug + '-ivf-specialist'}`,
    facebook: '/',
    pinterest: '/',
    twitter: '/',
    instagram: '/',
  }));

  const ivfContentData = {
    sections: [
      {
        heading: 'Maternal–Fetal Medicine',
        paragraphs: [
          'Our Maternal–Fetal Medicine Specialists are highly trained experts who specialize in managing high-risk pregnancies and providing comprehensive care for both mother and baby throughout pregnancy and delivery.',
        ],
        listItems: [
          'High-risk pregnancy management',
          'Fetal ultrasound and diagnostics',
          'Genetic counseling and testing',
          'Preconception counseling',
          'Prenatal diagnosis and fetal therapy',
          'Maternal medical complications during pregnancy',
        ],
        sideImage: '/assets/img/recent_post2.jpg',
      },
    ],
  };

  const teamData = {
    sliderData: sliderData,
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.png"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Maternal–Fetal Medicine Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          {/* Content Section - Centered and Full Width */}
          <div className="row">
            <div className="col-12 cs_service_page_content">
              <IVFContentSection data={ivfContentData} accentHeadingStyle />
            </div>
          </div>
        </div>
      </Section>

      {/* Doctors Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_team_section position-relative'}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 cs_service_page_content" style={{ marginBottom: '40px' }}>
              <AccentHeading style={{ fontSize: '42px', marginBottom: '30px' }}>Our Maternal–Fetal Medicine Specialists</AccentHeading>
            </div>
          </div>
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

