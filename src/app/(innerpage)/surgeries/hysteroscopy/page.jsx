import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'Hysteroscopy',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'Laparoscopy', url: '/surgeries/laparoscopy' },
    { title: 'Open Surgery', url: '/surgeries/open-surgery' },
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
  ],
  mainImage: '/assets/img/recent_post_1.png',
  serviceDetails: [
    'Hysteroscopy is a minimally invasive surgical procedure that allows visualization and treatment of conditions inside the uterus using a thin, lighted instrument called a hysteroscope. This procedure can be diagnostic (to examine the uterus) or operative (to treat uterine conditions).',
    'Common conditions treated with hysteroscopy include uterine fibroids, polyps, adhesions (Asherman\'s syndrome), uterine septum, removal of retained products of conception, and placement or removal of intrauterine devices. Hysteroscopy is often used to improve fertility outcomes by correcting uterine abnormalities.',
    'The procedure is typically performed as an outpatient procedure with minimal discomfort and quick recovery. Our experienced gynecological surgeons perform hysteroscopy using the latest techniques and equipment, ensuring optimal outcomes with minimal complications.',
  ],
  footerText: 'Minimally invasive hysteroscopy for diagnosis and treatment of uterine conditions. Expert surgical care for improved fertility outcomes.',
  additionalImages: '/assets/img/recent_post_1.png',
  iconBoxes: [
    {
      index: '01',
      title: 'Minimally Invasive',
      subtitle: 'Outpatient procedure with quick recovery',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Expert Surgeons',
      subtitle: 'Experienced gynecological surgeons',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Minimally invasive surgical procedure for uterine conditions',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 95,
    suffix: '%',
    title: 'Success Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 2500,
    suffix: '+',
    title: 'Procedures Performed',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 94,
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

