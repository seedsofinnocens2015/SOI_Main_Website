import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'IUI Treatment',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
    { title: 'Ovulation Induction', url: '/fertility-treatments/ovulation-induction' },
    { title: 'Follicular Monitoring', url: '/fertility-treatments/follicular-monitoring' },
  ],
  mainImage: '/assets/img/recent_post_1.png',
  serviceDetails: [
    'IUI (Intrauterine Insemination) is a fertility treatment that involves placing washed and concentrated sperm directly into the uterus around the time of ovulation. This procedure increases the chances of fertilization by bringing the sperm closer to the egg.',
    'IUI is less invasive and more affordable than IVF, making it an excellent first-line treatment for many couples. It is particularly effective for cases of unexplained infertility, mild male factor infertility, cervical factor infertility, or when using donor sperm.',
    'Our IUI program includes comprehensive evaluation, ovulation induction if needed, precise timing of the procedure, and thorough monitoring. We use the latest techniques to ensure optimal sperm preparation and placement for the best possible outcome.',
  ],
  footerText: 'IUI offers a natural approach to fertility treatment with minimal intervention. Our experienced team ensures personalized care throughout the process to maximize your chances of success.',
  additionalImages: '/assets/img/recent_post_1.png',
  iconBoxes: [
    {
      index: '01',
      title: 'Natural Approach',
      subtitle: 'Less invasive treatment option with minimal intervention',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Affordable Care',
      subtitle: 'Cost-effective fertility treatment option',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Intrauterine insemination with personalized care and monitoring',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 20,
    suffix: '%',
    title: 'Success Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 3000,
    suffix: '+',
    title: 'IUI Procedures',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 90,
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

