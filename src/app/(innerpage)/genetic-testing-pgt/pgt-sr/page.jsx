import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'PGT-SR',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'PGT-A', url: '/genetic-testing-pgt/pgt-a' },
    { title: 'PGT-M', url: '/genetic-testing-pgt/pgt-m' },
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
  ],
  mainImage: '/assets/img/genetic.jpg',
  serviceDetails: [
    'PGT-SR (Preimplantation Genetic Testing for Structural Rearrangements) tests embryos for structural chromosomal abnormalities such as translocations, inversions, deletions, or duplications. This testing is crucial for couples where one or both partners carry a balanced chromosomal rearrangement.',
    'While carriers of balanced rearrangements are typically healthy themselves, they have an increased risk of producing embryos with unbalanced chromosomal rearrangements, which can lead to miscarriage, failed implantation, or children with birth defects and developmental issues.',
    'PGT-SR helps identify embryos with balanced or normal chromosomal structures for transfer, significantly reducing the risk of miscarriage and increasing the chances of a healthy pregnancy. Our advanced genetic laboratory uses specialized techniques to detect structural rearrangements accurately.',
  ],
  footerText: 'PGT-SR helps couples with structural chromosomal rearrangements have healthy pregnancies. Our specialized testing identifies balanced or normal embryos for transfer.',
  additionalImages: '/assets/img/genetic.jpg',
  iconBoxes: [
    {
      index: '01',
      title: 'Specialized Testing',
      subtitle: 'Advanced techniques to detect structural rearrangements',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Reduced Risk',
      subtitle: 'Lower miscarriage risk and higher healthy pregnancy rates',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Preimplantation genetic testing for structural chromosomal rearrangements',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 70,
    suffix: '%',
    title: 'Pregnancy Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 800,
    suffix: '+',
    title: 'Embryos Tested',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 93,
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

