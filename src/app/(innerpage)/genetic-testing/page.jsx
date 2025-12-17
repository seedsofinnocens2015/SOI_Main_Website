import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Genetic Testing',
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

const geneticTestingContentData = {
  sections: [
    {
      heading: 'Genetic Testing in Fertility Treatment',
      paragraphs: [
        'Genetic testing plays a crucial role in modern fertility treatment, helping to identify genetic abnormalities that may affect embryo development, pregnancy outcomes, and the health of future children.',
        'At Seeds of Innocence, we offer comprehensive genetic testing services to help couples make informed decisions about their fertility journey.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Types of Genetic Testing',
      paragraphs: [
        'We offer various types of genetic testing:',
      ],
      listItems: [
        'Preimplantation Genetic Testing for Aneuploidy (PGT-A)',
        'Preimplantation Genetic Testing for Monogenic Disorders (PGT-M)',
        'Preimplantation Genetic Testing for Structural Rearrangements (PGT-SR)',
        'Carrier Screening',
        'Karyotyping',
        'Microarray Analysis',
        'HLA Matching',
      ],
    },
    {
      heading: 'Who Should Consider Genetic Testing?',
      paragraphs: [
        'Genetic testing may be recommended for:',
      ],
      listItems: [
        'Couples with a history of genetic disorders',
        'Women over 35 years of age',
        'Couples with recurrent miscarriages',
        'Couples with failed IVF cycles',
        'Individuals with chromosomal abnormalities',
        'Couples with a family history of genetic conditions',
      ],
    },
    {
      heading: 'Benefits of Genetic Testing',
      paragraphs: [
        'Genetic testing offers several advantages:',
      ],
      listItems: [
        'Reduces the risk of passing genetic disorders to children',
        'Increases IVF success rates',
        'Reduces miscarriage rates',
        'Helps in selecting healthy embryos',
        'Provides peace of mind',
        'Enables informed decision-making',
      ],
    },
    {
      heading: 'Our Genetic Testing Services',
      paragraphs: [
        'At Seeds of Innocence, we provide:',
      ],
      listItems: [
        'State-of-the-art genetic testing laboratory',
        'Experienced genetic counselors',
        'Comprehensive pre-test counseling',
        'Accurate and reliable results',
        'Post-test counseling and support',
        'Integration with IVF treatment',
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
              <IVFContentSection data={geneticTestingContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

