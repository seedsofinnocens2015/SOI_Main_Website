import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'Male Infertility',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'TESA / PESA', url: '/advanced-fertility-care/tesa-pesa' },
    { title: 'Semen Analysis', url: '/advanced-fertility-care/semen-analysis' },
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
  ],
  mainImage: '/assets/img/male.jpg',
  serviceDetails: [
    'Male infertility affects approximately 40-50% of all infertility cases. At Seeds of Innocens, we provide comprehensive evaluation and treatment for male fertility issues including low sperm count, poor sperm motility, abnormal sperm morphology, or complete absence of sperm.',
    'Our male infertility program includes detailed semen analysis, hormonal testing, genetic evaluation, and advanced surgical techniques when needed. We work closely with urologists and andrologists to provide complete care for male fertility issues.',
    'Treatment options range from lifestyle modifications and medication to advanced procedures like TESA, PESA, or surgical correction of varicocele. We also offer ICSI (Intracytoplasmic Sperm Injection) for cases with severe male factor infertility.',
  ],
  footerText: 'Comprehensive evaluation and treatment for male infertility issues. Our expert team provides personalized care to address all aspects of male fertility.',
  additionalImages: '/assets/img/male.jpg',
  iconBoxes: [
    {
      index: '01',
      title: 'Comprehensive Evaluation',
      subtitle: 'Detailed assessment of male fertility factors',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Advanced Treatments',
      subtitle: 'Multiple treatment options including surgical procedures',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Comprehensive evaluation and treatment for male fertility issues',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 75,
    suffix: '%',
    title: 'Treatment Success',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 3000,
    suffix: '+',
    title: 'Cases Treated',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 91,
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

