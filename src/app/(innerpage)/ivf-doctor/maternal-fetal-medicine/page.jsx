import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import React from 'react';
import doctorsData from '@/app/data/doctors-data.json';
import { getDoctorProfilePath } from '@/app/utils/doctorProfilePath';

const page = () => {
  const headingData = {
    uspTitle: 'Maternal–Fetal Medicine <span class="cs_accent_color">Specialists </span>',
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
    link: getDoctorProfilePath(doctor),
    experience: doctor.experience,
    state: getStateFromLocation(doctor.location),
  }));

  const teamData = {
    sliderData,
  };

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
        ]
      },
    ],
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

      {/* Doctors slider — cards styled like /ivf-doctor */}
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
          doctorsPageCardStyle
        />
      </Section>
      {/* End Maternal–Fetal Medicine Section */}
    </div>
  );
};

export default page;

