import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';
import doctorsData from '../doctors-data.json';

const page = () => {
  const headingData = {
    title: 'Surgeon Panel',
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
        heading: 'Expert Surgical Team',
        paragraphs: [
          'Our Surgeon Panel consists of highly skilled and experienced reproductive surgeons who specialize in minimally invasive procedures and advanced surgical techniques for fertility treatment.',
        ],
        listItems: [
          'Laparoscopic surgery for fertility issues',
          'Hysteroscopic procedures',
          'Microsurgical techniques',
          'Tubal reconstructive surgery',
          'Myomectomy and polypectomy',
          'Endometriosis treatment',
          'Ovarian cystectomy',
          'Adhesion removal procedures',
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

      {/* Start Surgeon Panel Section */}
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
                {' '}Surgeon Panel
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
      {/* End Surgeon Panel Section */}
    </div>
  );
};

export default page;
