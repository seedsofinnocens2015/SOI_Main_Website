import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'Open Surgery',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'Hysteroscopy', url: '/surgeries/hysteroscopy' },
    { title: 'Laparoscopy', url: '/surgeries/laparoscopy' },
    { title: 'Consultation', url: '/appointments' },
  ],
  mainImage: '/assets/img/recent_post_1.png',
  serviceDetails: [
    'Open surgery, also known as laparotomy, involves making a larger incision in the abdomen to access and treat gynecological conditions. While minimally invasive techniques are preferred when possible, open surgery may be necessary for complex cases, large tumors, or when other approaches are not feasible.',
    'Open surgery may be recommended for large fibroids, extensive endometriosis, complex pelvic adhesions, large ovarian masses, or certain types of gynecological cancers. Our experienced gynecological surgeons determine the best approach based on each patient\'s specific condition and needs.',
    'We use modern surgical techniques and equipment even for open procedures, ensuring optimal outcomes. Our surgical team provides comprehensive preoperative evaluation, expert surgical care, and attentive postoperative management. We prioritize patient safety and recovery throughout the process.',
  ],
  footerText: 'Expert open surgical procedures when necessary for complex gynecological conditions. Comprehensive care with focus on safety and optimal outcomes.',
  additionalImages: '/assets/img/recent_post_1.png',
  iconBoxes: [
    {
      index: '01',
      title: 'Expert Surgeons',
      subtitle: 'Experienced gynecological surgeons',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Comprehensive Care',
      subtitle: 'Full perioperative care and management',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Expert open surgical procedures for complex gynecological conditions',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 90,
    suffix: '%',
    title: 'Success Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 1500,
    suffix: '+',
    title: 'Procedures Performed',
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
        backgroundImage="/assets/img/All_Page_Header.jpg"
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

