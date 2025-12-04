import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'PGT-M',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'PGT-A', url: '/genetic-testing-pgt/pgt-a' },
    { title: 'PGT-SR', url: '/genetic-testing-pgt/pgt-sr' },
    { title: 'Genetic Counseling', url: '/appointments' },
  ],
  mainImage: '/assets/img/genetic.jpg',
  serviceDetails: [
    'PGT-M (Preimplantation Genetic Testing for Monogenic disorders), previously known as PGD (Preimplantation Genetic Diagnosis), tests embryos for specific inherited genetic conditions or mutations. This allows couples who carry genetic diseases to select unaffected embryos for transfer, preventing the transmission of genetic disorders to their children.',
    'PGT-M is used when one or both parents carry a known genetic mutation that could be passed to their offspring. Common conditions tested include cystic fibrosis, sickle cell disease, Huntington\'s disease, muscular dystrophy, and hundreds of other single-gene disorders. Testing is customized based on the specific genetic condition in the family.',
    'The process involves creating a personalized test for the specific mutation, performing IVF to create embryos, biopsying embryos, and testing for the presence or absence of the mutation. Only unaffected embryos are selected for transfer. We provide comprehensive genetic counseling throughout the process.',
  ],
  footerText: 'Prevent the transmission of genetic disorders with PGT-M. Our specialized genetic testing helps you have healthy children even when carrying genetic mutations.',
  additionalImages: '/assets/img/genetic.jpg',
  iconBoxes: [
    {
      index: '01',
      title: 'Customized Testing',
      subtitle: 'Personalized test design for specific genetic conditions',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Family Planning',
      subtitle: 'Prevent transmission of inherited genetic disorders',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Preimplantation genetic testing for inherited genetic disorders',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 98,
    suffix: '%',
    title: 'Accuracy Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 500,
    suffix: '+',
    title: 'Disorders Tested',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 96,
    suffix: '%',
    title: 'Patient Satisfaction',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_4.png',
    countTo: 10,
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

