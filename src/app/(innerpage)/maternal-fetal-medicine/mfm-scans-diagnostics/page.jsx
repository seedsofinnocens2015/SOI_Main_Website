import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'MFM Scans & Diagnostics',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'High-Risk Pregnancy', url: '/maternal-fetal-medicine/high-risk-pregnancy' },
    { title: 'Fetal Reduction', url: '/maternal-fetal-medicine/fetal-reduction' },
    { title: 'Consultation', url: '/appointments' },
  ],
  mainImage: '/assets/img/recent_post_1.png',
  serviceDetails: [
    'Our Maternal-Fetal Medicine (MFM) scans and diagnostics service provides specialized ultrasound and diagnostic procedures for high-risk pregnancies. We use advanced 2D, 3D, and 4D ultrasound technology to assess fetal growth, development, anatomy, and well-being in detail.',
    'Our diagnostic services include detailed fetal anatomy scans, fetal growth assessment, Doppler studies to evaluate blood flow, biophysical profiles, amniocentesis, chorionic villus sampling (CVS), and fetal echocardiography. These advanced diagnostic tools help identify potential issues early and guide appropriate management.',
    'Our experienced MFM specialists perform all scans and procedures, providing detailed reports and consultation. We work closely with your primary obstetrician to coordinate care and ensure comprehensive evaluation and management of your pregnancy.',
  ],
  footerText: 'Advanced MFM scans and diagnostics with state-of-the-art ultrasound technology. Expert evaluation and consultation for comprehensive pregnancy care.',
  additionalImages: '/assets/img/recent_post_1.png',
  iconBoxes: [
    {
      index: '01',
      title: 'Advanced Technology',
      subtitle: '2D, 3D, and 4D ultrasound with Doppler studies',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Expert Evaluation',
      subtitle: 'Performed by experienced MFM specialists',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Specialized ultrasound and diagnostic services for high-risk pregnancies',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 99,
    suffix: '%',
    title: 'Accuracy',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 5000,
    suffix: '+',
    title: 'Scans Performed',
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

