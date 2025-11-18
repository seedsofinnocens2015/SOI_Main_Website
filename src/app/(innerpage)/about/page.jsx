import About from '@/app/Components/About';
import CtaSection1 from '@/app/Components/CtaSection/CtaSection1';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import React from 'react';

const headingData = {
    title: 'About Seeds of Innocens',
  };
  
  const aboutData = {
    sectionSubtitle: 'ABOUT US',
    sectionTitle: 'Seeds of Innocens - Leading IVF Centre in India.',
    aboutText:
      "Seeds of Innocens IVF Centre is India's best fertility clinic, providing comprehensive fertility solutions across multiple locations. We offer advanced treatments including IVF-ICSI, IUI, Surrogacy, Genetic Testing, and more, helping thousands of couples achieve their dream of parenthood.",
    service:
      "We provide world-class fertility treatments with high success rates and personalized care <a href='/service'>READ MORE +</a>",
    experienceYears: '15+',
    experienceTitle: 'Years Experience',
    videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoText: 'How We Work',
    iconboxes: [
      {
        imgUrl: '/assets/img/icons/about_icon_1.png',
        title: 'Patient Support',
        subtitle: '24/7 support and guidance throughout your fertility journey.',
      },
      {
        imgUrl: '/assets/img/icons/about_icon_2.png',
        title: 'Expert Doctors',
        subtitle: 'Trained and certified fertility specialists with years of experience.',
      },
    ],
  
    btnUrl: '/service',
    btnText: 'Our Services',
    sectionImgUrl: '/assets/img/about_section_img_1.png',
    headImgUrl: '/assets/img/about_img_7.jpeg',
  };
  
  const counterData = [
    {
      iconSrc: '/assets/img/icons/counter_icon_1.png',
      countTo: 5000,
      suffix: '+',
      title: 'Successful Pregnancies',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_2.png',
      countTo: 25,
      suffix: '+',
      title: 'Centres Across India',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_3.png',
      countTo: 50,
      suffix: '+',
      title: 'Expert Doctors',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_4.png',
      countTo: 15,
      suffix: '+',
      title: 'Years Experience',
    },
  ];
  
  const teamData = {
    subtitle: 'OUR TEAM',
    title: 'Our Team of Trained <br />Certified Doctors',
    sliderData: [
      {
        name: 'Dr. Gauri Agarwal',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/team_1.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Rajesh Kumar',
        profession: 'Fertility Specialist',
        imageUrl: '/assets/img/team_3.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Priya Sharma',
        profession: 'Reproductive Endocrinologist',
        imageUrl: '/assets/img/team_4.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Anil Verma',
        profession: 'Andrologist',
        imageUrl: '/assets/img/team_5.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Meera Singh',
        profession: 'Embryologist',
        imageUrl: '/assets/img/team_6.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
    ],
  };
  
  const ctaData = {
    videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoButtonText: 'WATCH VIDEO',
    subtitle: 'WATCH VIDEO',
    title: 'Professional Fertility Care & Treatment.',
    description:
      'Experience world-class fertility treatments with our expert team. We provide comprehensive care from initial consultation to successful pregnancy, using advanced technology and personalized treatment plans.',
    buttonLink: '/contact',
    buttonText: 'Contact Us',
    brandImage: '/assets/img/medical_brand.png',
  };

const page = () => {
    return (
        <div className='about-page-area'>
        <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>
      {/* Start About Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_about cs_style_1 position-relative'}
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter Section */}

      <Section
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_counter_area_2"
      >
        <CounterSection2 data={counterData} />
      </Section>
      {/* End Counter Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center'}
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData} />
      </Section>
      {/* End CTA Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="0"
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}


        </div>
    );
};

export default page;