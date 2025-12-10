import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'Vision, Mission & Values',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Our Mission',
      paragraphs: [
        'Seeds of Innocence Infertility & Maternity Clinic Ghaziabad, Uttar Pradesh is committed to provide quality, free and accessible, preventive, curative, promotive and comprehensive IVF services to the community and assure the best outcome through continual quality improvement. The patient is treated with respect and dignity in a safe environment without discrimination with respect to caste, religion, gender and economic background.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Our Vision',
      paragraphs: [
        'Seeds of Innocence Infertility & Maternity Clinic to be recognized as one of the best IVF and Fertility institutions in the country.',
        'To achieve the vision Seeds of Innocence Infertility & Maternity Clinic must strive to:',
      ],
      listItems: [
        'Provide health care with love and affection that meets patients\' and community expectation',
        'Ensure a healthy environment that nurture motivation and commitment among the staffs',
        'Embark on a quality driven services delivery',
      ],
    },
    {
      heading: 'Our Core Values',
      paragraphs: [
        'At Seeds of Innocence, our values form the foundation of everything we do. These principles guide our daily operations, patient care, and organizational culture, ensuring we deliver the highest quality of service while maintaining ethical standards and compassionate care.',
      ],
      listItems: [
        'Excellence: We strive for excellence in every aspect of our work, from clinical care to patient service, continuously improving our practices and outcomes through evidence-based medicine and cutting-edge technology.',
        'Compassion: We understand the emotional journey of fertility treatment and provide compassionate, empathetic care to support our patients every step of the way, treating each individual with respect and dignity.',
        'Integrity: We maintain the highest ethical standards, transparency, and honesty in all our interactions with patients, partners, and the community, ensuring trust and accountability in everything we do.',
        'Innovation: We embrace cutting-edge technology and innovative treatment approaches to provide the best possible outcomes for our patients, staying at the forefront of reproductive medicine.',
        'Accessibility: We are committed to making quality fertility care accessible to all, regardless of caste, religion, gender, or economic background, ensuring equitable healthcare delivery.',
        'Patient-Centered Care: Every decision we make is centered around the needs and well-being of our patients, ensuring personalized treatment plans and comprehensive support throughout their journey.',
        'Quality Improvement: We are dedicated to continual quality improvement, regularly reviewing and enhancing our services, protocols, and patient outcomes to maintain the highest standards.',
        'Team Commitment: We foster a healthy environment that nurtures motivation and commitment among our staff, recognizing that a dedicated team is essential to delivering exceptional patient care.',
      ],
    },
    {
      heading: 'Our Commitment to You',
      paragraphs: [
        'Seeds of Innocence is more than just a fertility clinic; we are your partners in the journey to parenthood. Our mission, vision, and values are not just words on paper—they are the principles that drive every interaction, every treatment decision, and every moment of care we provide.',
        'We are committed to:',
      ],
      listItems: [
        'Providing comprehensive, quality healthcare services that are accessible to all',
        'Maintaining the highest standards of medical excellence and patient safety',
        'Treating every patient with respect, dignity, and without discrimination',
        'Continuously improving our services through quality-driven initiatives',
        'Creating a supportive and nurturing environment for both patients and staff',
        'Delivering personalized care that meets and exceeds patient expectations',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header2.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Main Content Section */}
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
    </div>
  );
};

export default page;

