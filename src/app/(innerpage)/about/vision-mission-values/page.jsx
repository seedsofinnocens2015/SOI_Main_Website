import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  uspTitle: 'Vision, Mission <span class="cs_accent_color"> & Values </span>',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Our Mission',
      paragraphs: [
        'Seeds of Innocens IVF is dedicated to offer quality, and comprehensive IVF services to the community and assure the positive outcome through the continual quality improvement. ',
      ],
      sideImage: '/assets/img/Vision, Mission & Values.png',
    },
    {
      heading: 'Our Vision',
      paragraphs: [
        'Seeds of Innocens IVF is well known as one of the best IVF centre in India.',
        'Our vision is simple:',
      ],
      listItems: [
        '.Embark on a quality driven services',
        'Ensure a healthy environment that will nurture commitment and motivation.',
        'Provide health care with affection and love that fulfill patients and community expectation.',
      ],
    },
    {
      heading: 'Our Core Values',
      paragraphs: [
        'Our values form the foundation of everything that we do. However, these principles will guide our daily operations, patient care and organizational culture which ensures that we deliver the high quality of service while maintaining ethical standards.',
      ],
      listItems: [
        'Excellence: From clinical care to patient service, we strive for excellence in each aspect of our work, continuously improving our practices and positive  outcomes through evidence-based medicine and with the cutting-edge technology.',
        'Compassion: We understand your emotions during the fertility treatment and offer empathetic care to support our patients at each step of the way, treating every individual with dignity and respect.',
        'Integrity: We believe in maintaining the highest ethical standards, honesty in all our interactions with partners, patients and the community making sure to trust and accountability in everything we do.',
        'Innovation: We believe in embracing cutting-edge technology and innovative treatment approaches to offer the best possible outcomes for our patients, staying at the forefront of reproductive medicine.',
        'Accessibility: We are dedicated in making quality fertility care accessible to all regardless caste, religion making sure of equitable healthcare delivery.',
        'Patient-Centered Care:  Every decision we make is centred around the requirements and well-being of our patients ensuring of customized treatment plans and detailed support throughout the journey.',
        'Quality Improvement: We are dedicated in continual quality improvement, regularly reviewing and enhancing our protocols, services and patient outcomes to maintain the quality standards.',
        'Team Commitment: We foster healthy environment that will nurture commitment and motivation among our staff recognizing that a devoted team is essential.',
      ],
    },
    {
      heading: 'Our Commitment to You',
      paragraphs: [
        'Seeds of Innocens IVF is one of the best ivf clinic globally. We are your partners in the journey to parenthood and our mission, vision and values that are not just words on proper as they are the principles that drive each interaction and each treatment decision and every moment of care we offer.',
        'We are committed to:',
      ],
      listItems: [
        'Offer quality healthcare services that are accessible to everyone.',
        'Maintain the quality standards, medical excellence and patient safety',
        'Treating each patient with respect and without any discrimination',
        'Continously improving our services through the quality-driven initiatives',
        'Developing a nurturing environment for both the patients and staff',
        'Delivering Customized care that will fulfill patient expectations',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.png"
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
              <IVFContentSection data={ivfContentData} accentHeadingStyle />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

