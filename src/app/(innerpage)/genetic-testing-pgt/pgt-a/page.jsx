import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'PGT-A',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'PGT-M', url: '/genetic-testing-pgt/pgt-m' },
    { title: 'PGT-SR', url: '/genetic-testing-pgt/pgt-sr' },
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
  ],
  mainImage: '/assets/img/genetic.jpg',
  serviceDetails: [
    'PGT-A (Preimplantation Genetic Testing for Aneuploidy), previously known as PGS (Preimplantation Genetic Screening), tests embryos for chromosomal abnormalities before transfer. This testing helps identify embryos with the correct number of chromosomes, which is crucial for successful implantation and healthy pregnancy.',
    'Aneuploidy refers to an abnormal number of chromosomes and is a leading cause of implantation failure, miscarriage, and genetic disorders. PGT-A allows us to select embryos with the correct chromosomal complement (euploid embryos) for transfer, improving pregnancy rates and reducing miscarriage rates.',
    'PGT-A is particularly beneficial for advanced maternal age, recurrent pregnancy loss, repeated IVF failures, or prior pregnancy with chromosomal abnormality. Our advanced genetic laboratory uses the latest next-generation sequencing technology for accurate chromosome analysis.',
  ],
  footerText: 'Improve your chances of successful pregnancy with PGT-A. Our advanced genetic testing identifies chromosomally normal embryos for transfer.',
  additionalImages: '/assets/img/genetic.jpg',
  iconBoxes: [
    {
      index: '01',
      title: 'Advanced Technology',
      subtitle: 'Next-generation sequencing for accurate chromosome analysis',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Better Selection',
      subtitle: 'Identify chromosomally normal embryos for transfer',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Preimplantation genetic testing for chromosomal abnormalities',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 75,
    suffix: '%',
    title: 'Pregnancy Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 2000,
    suffix: '+',
    title: 'Embryos Tested',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 94,
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

