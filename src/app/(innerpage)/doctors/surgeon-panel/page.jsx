import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import React from 'react';
import doctorsData from '@/app/data/doctors-data.json';

const page = () => {
  const headingData = {
    title: 'Surgeon Panel',
  };

  const getStateFromLocation = (location) => {
    if (!location) return '';
    const parts = location.split(',').map((part) => part.trim());
    if (parts.length > 1) {
      return parts[parts.length - 1];
    }
    return location;
  };

  const sliderData = doctorsData.map((doctor) => ({
    name: doctor.name,
    profession: doctor.subtitle,
    imageUrl: doctor.image,
    link: `/doctors/${doctor.newSlug || doctor.slug + '-ivf-specialist'}`,
    experience: doctor.experience,
    state: getStateFromLocation(doctor.location),
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
    sliderData,
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.png"
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
              <AccentHeading style={{ fontSize: '42px', marginBottom: '30px' }}>Our Surgeon Panel</AccentHeading>
            </div>
          </div>
        </div>
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
          doctorsPageCardStyle
        />
      </Section>
      {/* End Surgeon Panel Section */}
    </div>
  );
};

export default page;
