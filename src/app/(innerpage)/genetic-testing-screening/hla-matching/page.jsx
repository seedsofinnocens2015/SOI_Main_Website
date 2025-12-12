import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'HLA Matching in IVF',
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

const hlaMatchingContentData = {
  sections: [
    {
      heading: 'HLA Matching in IVF: Ensuring a Healthy Pregnancy',
      paragraphs: [
        'Matching is essential when it comes to HLA and when you\'re going through IVF for a successful pregnancy. It\'s a genetic test, indicating whether there will be proper compatibility between the parents or embryos in terms of better implantation success, as well as lower chances of complications. When planning IVF, it makes all the difference knowing about the importance of HLA matching this journey.',
      ],
      sideImage: '/assets/img/IVF-ICSI.jpg',
    },
    {
      heading: 'What is HLA Matching?',
      paragraphs: [
        'This is a test that identifies genetic markers residing in the immune system. Such markers will enable the body to recognize its cells and differentiate between those are its cells and those that are foreign. From an IVF context, HLA matching serves as a method to assess compatibility between the mother, father, and embryo and can be used to predict the success of implantation and pregnancy.',
      ],
    },
    {
      heading: 'Why is HLA Matching Important in IVF?',
      paragraphs: [
        'HLA matching is especially important in IVF because:',
      ],
      listItems: [
        'It reduces the risk of implantation failure.',
        'It prevents the immune system from rejecting the embryo.',
        'It increases the success and healthy possibility of a pregnancy.',
        'This has minimized complications of recurrent miscarriages or pregnancy loss',
      ],
    },
    {
      heading: 'Who Should Consider HLA Matching?',
      paragraphs: [
        'Although it is not a must for every case of IVF, HLA matching is highly recommended for couples who:',
      ],
      listItems: [
        'Have had several failures of IVF.',
        'She has a history of recurrent miscarriages.',
        'Are considering embryo donation or surrogacy?',
        'A known genetic disorder that might affect the chances of a successful pregnancy.',
      ],
    },
    {
      heading: 'HLA Matching Test Cost in India',
      paragraphs: [
        'The HLA matching test cost in India varies based on the type of test, the clinic, and additional medical requirements. On average, the cost ranges from ₹10,000 to ₹30,000. At Seeds of Innocens, we provide advanced genetic testing, including HLA matching, to improve your chances of a successful pregnancy.',
      ],
    },
    {
      heading: 'The Process of HLA Matching in IVF',
      paragraphs: [
        'The HLA matching process involves several steps:',
      ],
      listItems: [
        'Sample Collection: Blood or cheek swab samples are collected from both parents.',
        'Laboratory Test: Samples are tested to determine the presence of HLA markers.',
        'Matching Report: An in-depth matching report is conducted to evaluate embryo implantation ability.',
        'Personalized Treatment Plan: Based on the results, doctors design a treatment plan to enhance pregnancy success.',
      ],
    },
    {
      heading: 'Why Choose Seeds of Innocens for HLA Matching?',
      paragraphs: [
        'At Seeds of Innocens, we are bringing cutting-edge genetic testing with expert fertility care to integrate state-of-the-art HLA matching – the best possible treatment options for our parents to ensure a smooth pregnancy. With our team of very experienced fertility specialists and the best technology available, we strive to ensure that your IVF journey is a success.',
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
              <IVFContentSection data={hlaMatchingContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
