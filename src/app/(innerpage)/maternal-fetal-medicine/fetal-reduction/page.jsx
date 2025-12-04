import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const headingData = {
  title: 'Fetal Reduction',
};

const serviceData = {
  serviceHeading: 'Related Services:',
  services: [
    { title: 'High-Risk Pregnancy', url: '/maternal-fetal-medicine/high-risk-pregnancy' },
    { title: 'MFM Scans & Diagnostics', url: '/maternal-fetal-medicine/mfm-scans-diagnostics' },
    { title: 'Consultation', url: '/appointments' },
  ],
  mainImage: '/assets/img/recent_post_1.png',
  serviceDetails: [
    'Fetal reduction, also known as selective reduction or multifetal pregnancy reduction, is a procedure performed in pregnancies with multiple fetuses to reduce the number of fetuses to a lower number, typically two. This procedure is considered when carrying multiple fetuses poses significant risks to both the mother and the remaining fetuses.',
    'Multifetal pregnancies, especially those with three or more fetuses, are associated with increased risks including preterm birth, low birth weight, preeclampsia, gestational diabetes, and other complications. Fetal reduction can improve outcomes by allowing the remaining fetuses to develop more normally with reduced risk of complications.',
    'The procedure is performed under ultrasound guidance by our experienced MFM specialists. We provide comprehensive counseling about the risks, benefits, and alternatives before the procedure. Our team ensures compassionate care and support throughout this difficult decision-making process.',
  ],
  footerText: 'Compassionate and expert care for multifetal pregnancy reduction. Our MFM specialists provide comprehensive counseling and support throughout the process.',
  additionalImages: '/assets/img/recent_post_1.png',
  iconBoxes: [
    {
      index: '01',
      title: 'Expert Procedure',
      subtitle: 'Performed by experienced MFM specialists',
      icon: '/assets/img/icons/service_icon_1.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
    {
      index: '02',
      title: 'Compassionate Care',
      subtitle: 'Comprehensive counseling and support',
      icon: '/assets/img/icons/service_icon_2.png',
      bgImage: '/assets/img/service_bg.jpg',
      link: '/',
    },
  ],
  subtitle: 'Expert care for multifetal pregnancy reduction',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 98,
    suffix: '%',
    title: 'Procedure Success',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 300,
    suffix: '+',
    title: 'Procedures Performed',
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

