import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'TESA / PESA',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'Male Infertility', url: '/advanced-fertility-care/male-infertility' },
    { title: 'Semen Analysis', url: '/advanced-fertility-care/semen-analysis' },
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
  ],
  mainImage: '/assets/img/male.jpg',
  serviceDetails: [
    'TESA (Testicular Sperm Aspiration) and PESA (Percutaneous Epididymal Sperm Aspiration) are minimally invasive surgical procedures used to retrieve sperm directly from the testicles or epididymis. These procedures are used when there is no sperm in the ejaculate, often due to blockages or production issues.',
    'TESA involves using a fine needle to extract sperm directly from the testicular tissue, while PESA involves extracting sperm from the epididymis (the tube that stores and transports sperm). Both procedures are performed under local or general anesthesia and are relatively quick outpatient procedures.',
    'The retrieved sperm can then be used for ICSI (Intracytoplasmic Sperm Injection) during an IVF cycle. These procedures offer hope for men with azoospermia (no sperm in ejaculate) or obstructive causes of infertility. Our experienced urologists perform these procedures with high success rates.',
  ],
  footerText: 'Minimally invasive sperm retrieval procedures for men with azoospermia. Our expert team performs these procedures safely and effectively to help achieve pregnancy through ICSI.',
  additionalImages: '/assets/img/male.jpg',
  iconBoxes: [
    {
      index: '01',
      title: 'Minimally Invasive',
      subtitle: 'Quick outpatient procedures with minimal discomfort',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'High Success Rate',
      subtitle: 'Effective sperm retrieval for ICSI procedures',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Sperm retrieval procedures for male infertility treatment',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 80,
    suffix: '%',
    title: 'Success Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 1200,
    suffix: '+',
    title: 'Procedures Performed',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 89,
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

