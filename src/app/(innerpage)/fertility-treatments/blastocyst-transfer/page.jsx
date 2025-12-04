import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'Blastocyst Transfer',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
    { title: 'Genetic Testing', url: '/genetic-testing-pgt' },
    { title: 'Embryo Cryopreservation', url: '/advanced-fertility-care/egg-freezing' },
  ],
  mainImage: '/assets/img/blastocyst.jpg',
  serviceDetails: [
    'Blastocyst transfer is an advanced IVF technique where embryos are cultured in the laboratory for 5-6 days until they reach the blastocyst stage before being transferred to the uterus. This allows for better selection of viable embryos and increases the chances of successful implantation.',
    'At the blastocyst stage, embryos have divided into approximately 100-200 cells and have differentiated into two distinct parts: the inner cell mass (which becomes the baby) and the trophectoderm (which becomes the placenta). This advanced development stage provides better insight into embryo quality and viability.',
    'Our blastocyst transfer program uses state-of-the-art laboratory facilities with optimal culture conditions. Extended embryo culture allows us to select the most viable embryos for transfer, potentially reducing the need for multiple embryo transfers and improving pregnancy rates.',
  ],
  footerText: 'Blastocyst transfer represents the gold standard in embryo transfer techniques. Our advanced laboratory facilities ensure optimal culture conditions for the best possible outcomes.',
  additionalImages: '/assets/img/blastocyst.jpg',
  iconBoxes: [
    {
      index: '01',
      title: 'Advanced Culture',
      subtitle: 'Extended embryo culture in optimal laboratory conditions',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Better Selection',
      subtitle: 'Identify the most viable embryos for transfer',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Advanced embryo transfer technique for higher pregnancy rates',
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
    countTo: 2500,
    suffix: '+',
    title: 'Blastocyst Transfers',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 96,
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

