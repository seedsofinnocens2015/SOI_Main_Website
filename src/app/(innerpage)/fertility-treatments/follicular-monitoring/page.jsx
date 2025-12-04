import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'Follicular Monitoring',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'Ovulation Induction', url: '/fertility-treatments/ovulation-induction' },
    { title: 'IUI Treatment', url: '/fertility-treatments/iui' },
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
  ],
  mainImage: '/assets/img/recent_post_1.png',
  serviceDetails: [
    'Follicular monitoring is a crucial aspect of fertility treatment that involves tracking the development of ovarian follicles through transvaginal ultrasound. This allows us to determine the optimal timing for ovulation, IUI, or egg retrieval in IVF cycles.',
    'During follicular monitoring, we perform regular ultrasound scans to measure the size and number of developing follicles. We also check the thickness and quality of the endometrial lining. Blood tests may be performed to assess hormone levels, ensuring we have complete information about your cycle.',
    'Accurate follicular monitoring is essential for maximizing the success of fertility treatments. It helps us determine the best time for interventions, assess your response to medications, and adjust treatment protocols as needed. Our experienced team uses state-of-the-art ultrasound equipment for precise monitoring.',
  ],
  footerText: 'Precise follicular monitoring is key to successful fertility treatment. Our expert team ensures careful tracking and optimal timing for the best possible outcomes.',
  additionalImages: '/assets/img/recent_post_1.png',
  iconBoxes: [
    {
      index: '01',
      title: 'Precise Tracking',
      subtitle: 'Advanced ultrasound technology for accurate monitoring',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Optimal Timing',
      subtitle: 'Determine the best time for treatment interventions',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Track follicle development for optimal treatment timing',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 95,
    suffix: '%',
    title: 'Accuracy Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 6000,
    suffix: '+',
    title: 'Monitoring Sessions',
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

