import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Non-Obstructive Azoospermia',
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

const nonObstructiveAzoospermiaContentData = {
  sections: [
    {
      heading: 'Non-Obstructive Azoospermia',
      paragraphs: [
        'Non-obstructive Azoospermia (NOA) is the most severe form of male infertility in which no sperms are found in the ejaculate due to the failure of spermatogenesis. In simple words, sperm production is impaired.',
      ],
      sideImage: '/assets/img/Non-Obstructive Azoospermia.jpg',
    },
    {
      heading: 'Causes of Non-Obstructive Azoospermia',
      paragraphs: [
        'The main causes of failure of spermatogenesis are inadequate gonadotropin production or intrinsic testicular impairment. This failure which leads to NOA, is caused due to numerous factors, including:',
      ],
      listItems: [
        'Genetics (like Y chromosome deletion)',
        'Medication',
        'Hormonal imbalance',
        'Radiations and toxins',
        'Maturation arrest',
        'Infections',
        'Karyotype abnormality',
      ],
    },
    {
      heading: 'Treatment for Non-Obstructive Azoospermia',
      paragraphs: [
        'Thanks to the advancement in techniques and medical procedures, men with NOA may experience the return of sperms in their semen. For some men, pockets of sperm production can be identified in their testicles.',
      ],
    },
    {
      heading: 'Seeds of Innocens Expertise',
      paragraphs: [
        'A physical exam is a key component of diagnosing NOA. SOI has expertise and tools to diagnose NOA and to tailor your treatment accordingly. The team of SOI has been helping men with NOA achieve biologic fatherhood.',
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
              <IVFContentSection data={nonObstructiveAzoospermiaContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
