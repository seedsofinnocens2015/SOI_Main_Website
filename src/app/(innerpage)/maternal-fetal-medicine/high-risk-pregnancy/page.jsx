import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'High-Risk Pregnancy',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'MFM Scans & Diagnostics', url: '/maternal-fetal-medicine/mfm-scans-diagnostics' },
    { title: 'Fetal Reduction', url: '/maternal-fetal-medicine/fetal-reduction' },
    { title: 'Consultation', url: '/appointments' },
  ],
  mainImage: '/assets/img/recent_post_1.png',
  serviceDetails: [
    'High-risk pregnancy care involves specialized monitoring and management for pregnancies with increased risk of complications. Our Maternal-Fetal Medicine (MFM) specialists provide comprehensive care for conditions such as advanced maternal age, multiple pregnancies, gestational diabetes, preeclampsia, placental disorders, and fetal anomalies.',
    'We offer coordinated care with your primary obstetrician, providing expert consultation, detailed fetal ultrasound, fetal monitoring, and management of complex maternal and fetal conditions. Our goal is to optimize outcomes for both mother and baby through careful monitoring and timely interventions when needed.',
    'High-risk pregnancy care includes regular specialized ultrasounds, fetal growth monitoring, Doppler studies, biophysical profiles, and consultation with our multidisciplinary team. We work closely with neonatologists, geneticists, and other specialists to ensure the best possible care for you and your baby.',
  ],
  footerText: 'Specialized care for high-risk pregnancies with comprehensive monitoring and expert management. Our MFM team ensures the best outcomes for both mother and baby.',
  additionalImages: '/assets/img/recent_post_1.png',
  iconBoxes: [
    {
      index: '01',
      title: 'Expert Care',
      subtitle: 'Specialized MFM specialists for complex pregnancies',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Comprehensive Monitoring',
      subtitle: 'Advanced ultrasound and fetal assessment tools',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Specialized care and monitoring for high-risk pregnancies',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 95,
    suffix: '%',
    title: 'Success Rate',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 2000,
    suffix: '+',
    title: 'Cases Managed',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 97,
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

