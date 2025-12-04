import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'Egg Freezing',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'Sperm Freezing', url: '/advanced-fertility-care/semen-analysis' },
    { title: 'Embryo Freezing', url: '/advanced-fertility-care/prp-ovarian-rejuvenation' },
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
  ],
  mainImage: '/assets/img/egg.jpg',
  serviceDetails: [
    'Egg freezing, also known as oocyte cryopreservation, is a process where a woman\'s eggs are extracted, frozen, and stored for future use. This procedure allows women to preserve their fertility potential for later in life when they may be ready to start a family.',
    'Our egg freezing program uses the latest vitrification technique, which rapidly freezes eggs to prevent ice crystal formation and preserve their quality. This advanced technique has significantly improved the success rates of egg freezing and subsequent thawing.',
    'Egg freezing is ideal for women who want to delay childbearing for personal or medical reasons, those undergoing cancer treatment, or those with conditions that may affect future fertility. We provide comprehensive counseling and support throughout the process.',
  ],
  footerText: 'Preserve your fertility potential with our advanced egg freezing program. Our state-of-the-art laboratory ensures optimal preservation and future viability of your eggs.',
  additionalImages: '/assets/img/egg.jpg',
  iconBoxes: [
    {
      index: '01',
      title: 'Vitrification Technology',
      subtitle: 'Advanced rapid freezing technique for optimal preservation',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Future Fertility',
      subtitle: 'Preserve your fertility potential for later use',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Preserve your fertility with advanced egg freezing technology',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 85,
    suffix: '%',
    title: 'Survival Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 1500,
    suffix: '+',
    title: 'Eggs Frozen',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 93,
    suffix: '%',
    title: 'Patient Satisfaction',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_4.png',
    countTo: 15,
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

