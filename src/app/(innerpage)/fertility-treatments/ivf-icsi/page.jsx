import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'IVF / ICSI',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'IUI Treatment', url: '/fertility-treatments/iui' },
    { title: 'Ovulation Induction', url: '/fertility-treatments/ovulation-induction' },
    { title: 'Blastocyst Transfer', url: '/fertility-treatments/blastocyst-transfer' },
  ],
  mainImage: '/assets/img/IVF-ICSI.jpg',
  serviceDetails: [
    'IVF (In Vitro Fertilization) and ICSI (Intracytoplasmic Sperm Injection) are advanced assisted reproductive technologies that help couples achieve pregnancy when natural conception is not possible. IVF involves fertilizing eggs with sperm outside the body in a laboratory, while ICSI involves injecting a single sperm directly into an egg.',
    'At Seeds of Innocens, we offer state-of-the-art IVF/ICSI treatments with high success rates. Our experienced team uses the latest technology and techniques to maximize your chances of success. We provide personalized treatment plans tailored to your specific needs and circumstances.',
    'Our IVF/ICSI program includes comprehensive pre-treatment evaluation, controlled ovarian stimulation, egg retrieval, fertilization in our advanced laboratory, embryo culture, and embryo transfer. We monitor each step carefully to ensure the best possible outcome.',
  ],
  footerText: 'We maintain excellent success rates through continuous improvement in techniques, personalized care, and advanced technology. Our team is committed to helping you achieve your dream of parenthood.',
  additionalImages: '/assets/img/IVF-ICSI.jpg',
  iconBoxes: [
    {
      index: '01',
      title: 'Advanced Laboratory',
      subtitle: 'State-of-the-art equipment for embryo culture and selection',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Expert Team',
      subtitle: 'Experienced embryologists and fertility specialists',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Advanced IVF-ICSI treatment with personalized care and high success rates',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 85,
    suffix: '%',
    title: 'Success Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 5000,
    suffix: '+',
    title: 'IVF Procedures',
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

