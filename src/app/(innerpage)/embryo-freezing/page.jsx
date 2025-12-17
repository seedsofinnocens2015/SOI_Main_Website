import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Embryo Freezing',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/recent_post2.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/recent_post2.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const embryoFreezingContentData = {
  sections: [
    {
      heading: 'What is Embryo Freezing?',
      paragraphs: [
        'Embryo freezing, also known as embryo cryopreservation, is a process where embryos created through in vitro fertilization (IVF) are frozen and stored for future use. This technique allows couples to preserve their embryos for later transfer, increasing the chances of pregnancy from a single IVF cycle.',
        'At Seeds of Innocence, we use advanced vitrification techniques to ensure high survival rates and successful embryo transfers.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Why Freeze Embryos?',
      paragraphs: [
        'There are several reasons why couples choose to freeze their embryos:',
      ],
      listItems: [
        'Preserve excess embryos from an IVF cycle',
        'Avoid repeated ovarian stimulation',
        'Plan for future pregnancies',
        'Medical reasons (cancer treatment, health conditions)',
        'Increase cumulative pregnancy rates',
        'Reduce costs of multiple IVF cycles',
      ],
    },
    {
      heading: 'The Embryo Freezing Process',
      paragraphs: [
        'Our embryo freezing process involves several steps:',
      ],
      listItems: [
        'Embryo development and assessment',
        'Selection of high-quality embryos',
        'Vitrification (rapid freezing) process',
        'Storage in liquid nitrogen at -196°C',
        'Long-term monitoring and maintenance',
        'Thawing when ready for transfer',
      ],
    },
    {
      heading: 'Success Rates',
      paragraphs: [
        'Embryo freezing has shown excellent success rates:',
      ],
      listItems: [
        'High survival rates after thawing (95%+)',
        'Similar pregnancy rates to fresh embryo transfers',
        'Reduced risk of ovarian hyperstimulation syndrome (OHSS)',
        'Better endometrial receptivity in frozen cycles',
      ],
    },
    {
      heading: 'Storage Duration',
      paragraphs: [
        'Embryos can be stored for extended periods:',
      ],
      listItems: [
        'No known time limit for storage',
        'Regular monitoring and maintenance',
        'Flexible storage options',
        'Comprehensive documentation',
      ],
      bottomImage: '/assets/img/recent_post2.jpg',
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

      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={embryoFreezingContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

