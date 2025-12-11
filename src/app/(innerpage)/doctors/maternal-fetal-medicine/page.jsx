import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import IVFContentSection from '@/app/Components/IVFContentSection';
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
    link: `/doctors/${doctor.slug}`,
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
        backgroundImage="/assets/img/Top-Header.jpg"
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
            <div className="col-12">
              <IVFContentSection data={ivfContentData} />
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
            <div className="col-lg-12" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '42px',
                fontWeight: '700',
                color: '#0A2A43',
                marginBottom: '30px',
                position: 'relative',
                display: 'inline-block',
                lineHeight: '1.2'
              }}>
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  Our
                  <span style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '60px',
                    height: '4px',
                    backgroundColor: '#E45352',
                    borderRadius: '2px'
                  }}></span>
                </span>
                {' '}Maternal–Fetal Medicine Specialists
              </h2>
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

