import AppointmentSection from '@/app/Components/AppointmentSection';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';
import doctorsData from './doctors-data.json';

const page = () => {
  const headingData = {
    title: 'All IVF Specialists',
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
    profileLink: `/doctors/${doctor.slug}`,
    experience: doctor.experience,
    state: getStateFromLocation(doctor.location),
  }));

  const appointmentSectionData = {
    subtitle: 'OUR TEAM MEMBER',
    title: 'Meet Our Specialist This<br> Doctor Meeting',
    doctorsData: doctorsDataFormatted,
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>           

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <AppointmentSection data={appointmentSectionData} />
      </Section>
    </div>
  );
};

export default page;
