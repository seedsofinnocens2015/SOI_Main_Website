import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'Laparoscopy',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'Hysteroscopy', url: '/surgeries/hysteroscopy' },
    { title: 'Open Surgery', url: '/surgeries/open-surgery' },
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
  ],
  mainImage: '/assets/img/recent_post_1.png',
  serviceDetails: [
    'Laparoscopy is a minimally invasive surgical technique that uses small incisions and a camera to examine and treat conditions in the abdominal and pelvic cavities. This approach offers numerous advantages including smaller incisions, less pain, faster recovery, and reduced scarring compared to open surgery.',
    'Laparoscopy is commonly used in fertility treatment for conditions such as endometriosis, ovarian cysts, tubal factor infertility, pelvic adhesions, and fibroids. It allows for precise diagnosis and treatment of conditions that may affect fertility while minimizing tissue damage and recovery time.',
    'Our experienced laparoscopic surgeons perform procedures using advanced equipment and techniques. Procedures may include diagnostic laparoscopy, laparoscopic ovarian cystectomy, laparoscopic treatment of endometriosis, laparoscopic myomectomy, and tubal surgery. We ensure comprehensive care before, during, and after the procedure.',
  ],
  footerText: 'Minimally invasive laparoscopy for fertility-related conditions. Expert surgical care with faster recovery and better outcomes.',
  additionalImages: '/assets/img/recent_post_1.png',
  iconBoxes: [
    {
      index: '01',
      title: 'Minimally Invasive',
      subtitle: 'Small incisions with faster recovery',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Advanced Techniques',
      subtitle: 'Latest laparoscopic equipment and procedures',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Minimally invasive laparoscopic surgery for fertility conditions',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 92,
    suffix: '%',
    title: 'Success Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 3000,
    suffix: '+',
    title: 'Procedures Performed',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 95,
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

