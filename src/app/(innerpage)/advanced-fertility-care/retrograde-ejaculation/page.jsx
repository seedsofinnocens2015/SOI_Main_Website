import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Retrograde Ejaculation',
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

const retrogradeEjaculationContentData = {
  sections: [
    {
      heading: 'What is Retrograde Ejaculation?',
      paragraphs: [
        'Retrograde ejaculation is the condition where the semen travels backwards into the bladder. In normal cases, ejaculation sends semen forward towards the tip of the penis. However, when the muscle that shut the bladder does not function normally, it gives rise to this condition. It is a relatively uncommon cause of infertility; nonetheless it is treatable.',
      ],
      sideImage: '/assets/img/male.jpg',
    },
    {
      heading: 'Causes of Retrograde Ejaculation',
      paragraphs: [
        'The causes of retrograde ejaculation are generally related to the medical condition and health of an individual. Some of the common causes include:',
      ],
      listItems: [
        'Medication: Certain medications can affect the normal functioning of the bladder neck muscle, leading to retrograde ejaculation.',
        'Congenital condition: Some men are born with conditions that affect the bladder neck muscle, making retrograde ejaculation more likely.',
        'Injury: Trauma or injury to the nerves that control ejaculation can cause this condition.',
        'Surgery: Surgical procedures, especially those involving the prostate, bladder, or surrounding areas, can sometimes result in retrograde ejaculation.',
      ],
    },
    {
      heading: 'Treatment of Retrograde Ejaculation',
      paragraphs: [
        'The treatment of retrograde ejaculation depends on the underlying causes. Sometimes, medication may allow the man to ejaculate enough semen. However, if the medication doesn\'t work then in most of the cases, assisted reproductive technology is used to get the partner pregnant. In some cases, more advanced assisted reproductive technology may be required.',
      ],
    },
    {
      heading: 'Seeds of Innocens Expertise',
      paragraphs: [
        'Our team of specialists will assess your health and symptoms to analyse, where the problem lies. Once the condition is evaluated properly, the course of treatment is decided. Generally, our specialists treat the condition with IUI or IVF. However, more advanced reproductive techniques are also used in complex cases of retrograde ejaculation.',
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
              <IVFContentSection data={retrogradeEjaculationContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

