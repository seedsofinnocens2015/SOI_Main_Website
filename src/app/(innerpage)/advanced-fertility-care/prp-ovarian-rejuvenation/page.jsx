import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'PRP & Ovarian Rejuvenation',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'Egg Freezing', url: '/advanced-fertility-care/egg-freezing' },
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
    { title: 'Male Infertility', url: '/advanced-fertility-care/male-infertility' },
  ],
  mainImage: '/assets/img/recent_post_1.png',
  serviceDetails: [
    'PRP (Platelet-Rich Plasma) therapy for ovarian rejuvenation is an innovative treatment that uses the patient\'s own blood platelets to potentially improve ovarian function and egg quality. This regenerative medicine technique may help women with diminished ovarian reserve or poor egg quality.',
    'The procedure involves drawing a small amount of blood, processing it to concentrate the platelets and growth factors, and then injecting this PRP directly into the ovaries. The growth factors in PRP are believed to stimulate tissue repair and regeneration, potentially improving ovarian function.',
    'While research is ongoing, PRP ovarian rejuvenation shows promise for women experiencing early ovarian aging, premature ovarian failure, or those who have had poor responses to previous IVF cycles. We provide this treatment with careful evaluation and monitoring.',
  ],
  footerText: 'Explore innovative options for improving ovarian function with PRP therapy. Our expert team evaluates each case carefully to determine if this treatment may benefit you.',
  additionalImages: '/assets/img/recent_post_1.png',
  iconBoxes: [
    {
      index: '01',
      title: 'Regenerative Medicine',
      subtitle: 'Use your own growth factors for potential improvement',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Innovative Approach',
      subtitle: 'Cutting-edge treatment for ovarian function enhancement',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Innovative regenerative therapy for ovarian function enhancement',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 70,
    suffix: '%',
    title: 'Improvement Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 800,
    suffix: '+',
    title: 'PRP Procedures',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 88,
    suffix: '%',
    title: 'Patient Satisfaction',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_4.png',
    countTo: 5,
    suffix: '+',
    title: 'Years Experience',
  },
];

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <ServiceSection4 data={serviceData} />
      </Section>

      <Section bottomSpaceLg="70" bottomSpaceMd="120">
        <CounterSection2 data={counterData} />
      </Section>
    </div>
  );
};

export default page;

