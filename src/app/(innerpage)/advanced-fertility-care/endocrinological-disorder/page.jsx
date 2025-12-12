import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Endocrinological Disorder in Men',
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

const endocrinologicalDisorderContentData = {
  sections: [
    {
      heading: 'Endocrinological Disorder in Men',
      paragraphs: [
        'The endocrine system consists of glands that regulate our growth, metabolism, and sexual development. In men, the endocrine glands release the sex hormones estrogen and testosterone.',
        'And sexual dysfunction is an indication of serious Endocrinological Disorder. Low sexual desire and reduction in ejaculate volume are associated with less than normal testosterone levels in men.',
        'Book an appointment at Seeds of Innocence to discover crucial facts about what is testosterone hormone, how to increase testosterone, impact of low testosterone in men, and so on. Get tested for low testosterone levels in men and also for other endocrinological disorders.',
      ],
      sideImage: '/assets/img/Endocrinological Disorder.jpg',
    },
    {
      heading: 'Endocrinological Disorder Causes',
      paragraphs: [
        'The endocrine system in our body has a natural feedback system that helps maintain hormonal balance. However, in cases where the feedback system fails to alert the specific glands, the body\'s bloodstream doesn\'t get the desired level of hormones, which leads to Endocrinological disorders.',
        'In other cases, endocrinological disorders may be caused by:',
      ],
      listItems: [
        'Disease',
        'Genetic disorder such as multiple endocrine neoplasias (MEN)',
        'Infection, injury, or tumor',
        'Failure of one gland to stimulate another gland for hormone production.',
      ],
    },
    {
      heading: 'Types of Endocrinological Disorders',
      paragraphs: [
        'Endocrinological disorders can be categorized into two groups:',
      ],
      listItems: [
        'Endocrinological disorders from hormonal imbalance.',
        'Endocrinological disorders development of lesions such as tumors, nodules, etc.',
      ],
    },
    {
      heading: 'Testosterone Imbalance And Sexual Health',
      paragraphs: [
        'Testosterones is a major sex hormone, and its imbalance can cause multiple complications including:',
      ],
      listItems: [
        'Weak development of penis and testes',
        'Poor muscle size and strength',
        'Low sex drive',
        'Low sperm production',
        'Slow or abnormal puberty in boys',
      ],
    },
    {
      heading: 'SOI Expertise',
      paragraphs: [
        'At SOI, we offer comprehensive treatment for correcting hormonal imbalances and endocrine disorders. Get in touch with our experts at SOI to learn more about treatment plans that restore your testosterone levels at your best levels again.',
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
              <IVFContentSection data={endocrinologicalDisorderContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
