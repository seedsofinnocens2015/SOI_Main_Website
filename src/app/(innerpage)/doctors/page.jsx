import AppointmentSection from '@/app/Components/AppointmentSection';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import AccentHeading from '@/app/Components/AccentHeading';
import React from 'react';
import doctorsData from '@/app/data/doctors-data.json';

const page = () => {
  const headingData = {
    title: 'All IVF Specialists',
    uspTitle:
      'WORLD-CLASS IVF EXPERTS <br /> <span class="cs_accent_color">MEET OUR SPECIALISTS</span>',
  };

  // Function to extract state from location
  const getStateFromLocation = (location) => {
    if (!location) return '';
    // Extract state from location string (e.g., "Gurgaon, Haryana" -> "Haryana")
    const parts = location.split(',').map(part => part.trim());
    if (parts.length > 1) {
      return parts[parts.length - 1];
    }
    return location;
  };

  // Map doctors from JSON to AppointmentSection format
  const doctorsDataFormatted = doctorsData.map((doctor) => ({
    name: doctor.name,
    specialty: doctor.subtitle,
    imageUrl: doctor.image,
    profileLink: `/doctors/${doctor.newSlug || doctor.slug + '-ivf-specialist'}`,
    experience: doctor.experience,
    state: getStateFromLocation(doctor.location),
  }));

  const appointmentSectionData = {
    doctorsData: doctorsDataFormatted,
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.png"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 cs_service_page_content" style={{ marginBottom: '40px' }}>
              <AccentHeading style={{ fontSize: '42px', marginBottom: '30px' }}>Our Expert IVF Specialists</AccentHeading>
            </div>
          </div>
        </div>
        <AppointmentSection data={appointmentSectionData} />
      </Section>
    </div>
  );
};

export default page;
