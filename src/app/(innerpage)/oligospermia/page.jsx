import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Oligospermia',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/male.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/male.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/male.jpg',
    '/assets/img/male.jpg'
  ],
};

const oligospermiaContentData = {
  sections: [
    {
      heading: 'Oligospermia',
      paragraphs: [
        'Oligospermia is a condition in which a male produces anything under 15 million sperms. In the absence of this condition, a fertile man produces anywhere from 15 million to over 200 million sperm per millilitre of semen. The low sperm count reduces the possibility of conceiving of your partner.',
        'There can be a number of oligospermia causes, but you\'ll be relieved to know that Seeds of Innocens promises high-quality oligospermia treatment. Our team of fertility specialists will also give you detailed information about what is oligospermia, relation between oligospermia and azoospermia, risks centred around severe oligospermia, etc.',
      ],
      sideImage: '/assets/img/Oligospermia.jpg',
    },
    {
      heading: 'Causes of Oligospermia',
      paragraphs: [
        'A number of causes have been found to be associated with oligospermia. These causes can range from medical to lifestyle. Some of the common cause of oligospermia are:',
      ],
      listItems: [
        'Chronic or long-term emotional stress',
        'Recreational drugs',
        'Anabolic steroid use',
        'Genetic condition or inherited disorder',
        'Hormone imbalance',
        'Undescended testicles',
        'Infections that interfere with sperm production',
        'Radiations',
        'Poor general health',
        'Testicular factors',
        'Immunology problems',
        'Medical issues like multiple sclerosis, diabetes, etc.',
      ],
    },
    {
      heading: 'Treatment of Oligospermia',
      paragraphs: [
        'Oligospermia can be a result of various factors, and assisted reproductive treatment is often employed to improve fertility. Treatment may range from lifestyle changes to hormonal (antioxidant/ medication) and surgical methods (varicocele, microsurgery, etc.).',
      ],
    },
    {
      heading: 'Seeds of Innocens Expertise',
      paragraphs: [
        'Based on the cause of oligospermia, Seeds of Innocens determine the course of treatment suitable for the individual suffering from this medical condition. You can book an appointment with us to discuss the problem and know the best suitable treatment.',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
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
              <IVFContentSection data={oligospermiaContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
