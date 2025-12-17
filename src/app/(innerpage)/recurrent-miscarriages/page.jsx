import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Recurrent Miscarriages',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/genetic.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/genetic.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/genetic.jpg',
    '/assets/img/genetic.jpg'
  ],
};

const recurrentMiscarriagesContentData = {
  sections: [
    {
      heading: 'Recurrent Pregnancy Loss',
      paragraphs: [
        'Clinically, recurrent miscarriages are defined as losing 3 or more pregnancies in a row, irrespective of the cause behind it. However, be it 3 pregnancies or just 1, a miscarriage is a huge blow to the mother\'s mental state and structure. Therefore, it has always been in our interests to help mothers, whether they are facing clinical recurrent miscarriages or not, to help prevent another miscarriage and give them the happiness of being a parent.',
      ],
      sideImage: '/assets/img/genetic.jpg',
    },
    {
      heading: 'What can cause a Recurrent Miscarriage?',
      paragraphs: [
        'About 20-30% of all pregnancies end in an unfortunate miscarriage. Heavy bleeding can be an early pregnancy miscarriage symptom. In most of these cases of fetal loss, about 50-60% miscarriages in the first trimester happen due to chromosomal abnormalities. These are diseases that are caused due to the errors that may happen as the embryo divided and grew in its initial stages. The incidence and likelihood of these errors occurring increases with the age of the mother as it affects the health of the egg.',
      ],
    },
    {
      heading: 'Prevention of Miscarriage',
      paragraphs: [
        'Owing to the fact that most miscarriages are caused by chromosomal abnormalities, the most effective way of solving this problem would be to opt for genetic testing through Comprehensive Chromosomal Screening (CCS). It is a test of the embryo to check for abnormalities in the set of chromosomes. The presence of an extra or the absence of an important chromosome is what results in an chromosomal abnormality, which then either causes birth defects or miscarriages in a pregnancy.',
      ],
    },
    {
      heading: 'Knowing the Cause of Miscarriage',
      paragraphs: [
        'How do we know that a miscarriage was caused by a chromosomal abnormality? Through tests like Products of Conception, the exact cause of a miscarriage can be known. SOI specialises in all these tests, and is one of the leading fertility centers in India with high-end technology at the helm. It helps in not only getting the results that our patients want, but it also helps us in converging our efforts to provide more specific results.',
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
              <IVFContentSection data={recurrentMiscarriagesContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

