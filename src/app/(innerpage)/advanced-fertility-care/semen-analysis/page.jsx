import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'Semen Analysis',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'Male Infertility', url: '/advanced-fertility-care/male-infertility' },
    { title: 'TESA / PESA', url: '/advanced-fertility-care/tesa-pesa' },
    { title: 'IVF / ICSI', url: '/fertility-treatments/ivf-icsi' },
  ],
  mainImage: '/assets/img/male.jpg',
  serviceDetails: [
    'Semen analysis is the cornerstone of male fertility evaluation. This test evaluates the quantity and quality of sperm in a semen sample, including sperm count, motility (movement), morphology (shape), and other important parameters. It is typically one of the first tests performed when evaluating a couple for infertility.',
    'Our semen analysis is performed in a state-of-the-art andrology laboratory using standardized protocols according to WHO guidelines. We assess multiple parameters including semen volume, sperm concentration, total sperm count, motility, morphology, and the presence of white blood cells or other abnormalities.',
    'A comprehensive semen analysis provides valuable information about male fertility potential and helps guide treatment decisions. Abnormal results may indicate the need for further testing, lifestyle modifications, or specific treatments. We provide detailed reports and counseling to help you understand your results.',
  ],
  footerText: 'Comprehensive semen analysis using WHO guidelines in our advanced andrology laboratory. Accurate evaluation to guide your fertility treatment journey.',
  additionalImages: '/assets/img/male.jpg',
  iconBoxes: [
    {
      index: '01',
      title: 'WHO Standards',
      subtitle: 'Standardized testing according to WHO guidelines',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Comprehensive Report',
      subtitle: 'Detailed analysis of all sperm parameters',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Comprehensive evaluation of male fertility potential',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 100,
    suffix: '%',
    title: 'Accuracy',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 5000,
    suffix: '+',
    title: 'Analyses Performed',
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

