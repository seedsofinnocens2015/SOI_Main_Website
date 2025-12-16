import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Cryopreservation',
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

const cryopreservationContentData = {
  sections: [
    {
      heading: 'What is Cryopreservation?',
      paragraphs: [
        'Cryopreservation is a process that involves freezing and storing biological materials at very low temperatures (typically -196°C using liquid nitrogen) to preserve them for future use. In fertility treatment, cryopreservation is used to store eggs, sperm, embryos, and ovarian tissue.',
        'This advanced technique allows individuals and couples to preserve their fertility for various reasons, including medical treatments, career planning, or personal choice.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Types of Cryopreservation',
      paragraphs: [
        'At Seeds of Innocence, we offer various types of cryopreservation services:',
      ],
      listItems: [
        'Egg Freezing (Oocyte Cryopreservation)',
        'Sperm Freezing (Sperm Cryopreservation)',
        'Embryo Freezing (Embryo Cryopreservation)',
        'Ovarian Tissue Freezing',
        'Testicular Tissue Freezing',
      ],
    },
    {
      heading: 'Benefits of Cryopreservation',
      paragraphs: [
        'Cryopreservation offers numerous benefits:',
      ],
      listItems: [
        'Preserves fertility for cancer patients before treatment',
        'Allows family planning flexibility',
        'Enables multiple IVF cycles from one egg retrieval',
        'Reduces the need for repeated ovarian stimulation',
        'Provides backup options for fertility treatment',
        'Helps preserve fertility for medical or personal reasons',
      ],
    },
    {
      heading: 'The Cryopreservation Process',
      paragraphs: [
        'The cryopreservation process involves several steps:',
      ],
      listItems: [
        'Initial consultation and fertility assessment',
        'Hormonal stimulation (for egg freezing)',
        'Collection of eggs, sperm, or embryos',
        'Laboratory processing and preparation',
        'Freezing using vitrification technique',
        'Storage in liquid nitrogen tanks',
        'Long-term monitoring and maintenance',
      ],
    },
    {
      heading: 'Storage and Safety',
      paragraphs: [
        'At Seeds of Innocence, we maintain the highest standards for cryopreservation storage:',
      ],
      listItems: [
        'State-of-the-art cryogenic storage facilities',
        '24/7 monitoring systems',
        'Backup storage systems',
        'Comprehensive documentation and tracking',
        'Regular quality checks and maintenance',
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
              <IVFContentSection data={cryopreservationContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

