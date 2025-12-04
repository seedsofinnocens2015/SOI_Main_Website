import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'Ovulation Induction',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'IUI Treatment', url: '/fertility-treatments/iui' },
    { title: 'Follicular Monitoring', url: '/fertility-treatments/follicular-monitoring' },
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
  ],
  mainImage: '/assets/img/recent_post_1.png',
  serviceDetails: [
    'Ovulation induction is a medical treatment that stimulates the ovaries to produce and release eggs. This treatment is used for women who have irregular ovulation or do not ovulate at all. It involves the use of medications to encourage the development and release of mature eggs.',
    'Our ovulation induction program is carefully tailored to each patient\'s needs. We use various medications including clomiphene citrate, letrozole, and gonadotropins, depending on your specific condition and response. Regular monitoring through ultrasound and blood tests ensures optimal timing and safety.',
    'This treatment can be used alone with timed intercourse, combined with IUI, or as part of an IVF cycle. We monitor your response closely to adjust medications as needed and to maximize the chances of successful ovulation while minimizing the risk of complications.',
  ],
  footerText: 'Ovulation induction is often the first step in fertility treatment. Our expert team ensures personalized care and monitoring throughout your cycle to optimize your chances of success.',
  additionalImages: '/assets/img/recent_post_1.png',
  iconBoxes: [
    {
      index: '01',
      title: 'Personalized Protocol',
      subtitle: 'Tailored medication plan based on your individual needs',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Careful Monitoring',
      subtitle: 'Regular ultrasound and blood tests for optimal timing',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Stimulate ovulation with personalized medication protocols',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 80,
    suffix: '%',
    title: 'Ovulation Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 4000,
    suffix: '+',
    title: 'Cycles Treated',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 92,
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

