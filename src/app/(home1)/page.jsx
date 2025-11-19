import React from 'react';
import HeroSection from '../Components/HeroSection';
import Section from '../Components/Section';
import CtaSection from '../Components/CtaSection';
import About from '../Components/About';
import CounterSection from '../Components/FunSection/CounterSection';
import Service from '../Components/Service';
import TeamSection from '../Components/TeamSection';
import BrandsSlider from '../Components/BrandsSection';
import ChooseUs from '../Components/ChooseUs';
import ProjectSection from '../Components/ProjectSection';
import CtaSection1 from '../Components/CtaSection/CtaSection1';
import MedicalTabSection from '../Components/MedicalTabSection';
import ContactSection2 from '../Components/ContactSection/ContactSection2';
import BlogSection from '../Components/BlogsSection';

const heroData = {
    primarySlider: [
      {
        bgImageUrl: '/assets/img/hero_slider_3.mp4',
        title: 'Seeds of Innocens IVF Centre - <span>India\'s Best Fertility Clinic</span>',
        titleClass: 'cs_single_line_title',
        titleStyle: {
          fontSize: 'clamp(22px, 4vw, 48px)',
          marginTop: 'clamp(-120px, -8vw, -40px)',
        },
        contactSubtitle:
          'One Stop Solution For All Your Fertility Problems! We provide comprehensive fertility treatments including IVF-ICSI, IUI, Surrogacy, and advanced genetic testing to help you achieve your dream of parenthood.',
        contactTitle: 'Begin Your IVF Journey Here!',
        contact: 'Call Us at: +91-9810350512',
        btnText1: 'Book Appointment',
        link: '/appointments',
        btnText2: 'About Us',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: '/assets/img/hero_slider_2.jpg',
        title: 'Expert Fertility <span>Care.</span>',
        titleClass: 'cs_single_line_title',
        titleStyle: {
          fontSize: 'clamp(22px, 4vw, 48px)',
          marginTop: 'clamp(-120px, -8vw, -40px)',
        },
        contactSubtitle:
          'Our team of trained certified doctors provides world-class fertility treatments with high success rates. From initial consultation to successful pregnancy, we are with you every step of the way.',
        contactTitle: 'Register Online For Seamless Experience.',
        contact: 'Call Us at: +91-9810350512',
        btnText1: 'Book Appointment',
        link: '/appointments',
        btnText2: 'Our Services',
        link2: '/service',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: '/assets/img/hero_slider_1.jpg',
        title: 'Advanced IVF <span>Treatments.</span>',
        titleClass: 'cs_single_line_title',
        titleStyle: {
          fontSize: 'clamp(22px, 4vw, 48px)',
          marginTop: 'clamp(-120px, -8vw, -40px)',
        },
        contactSubtitle:
          'Experience cutting-edge fertility solutions including IVF-ICSI, Blastocyst Transfer, PRP & Ovarian Rejuvenation, Egg Freezing, Surrogacy, and comprehensive genetic testing services.',
        contactTitle: 'Get Free Second Opinion.',
        contact: 'Call Us at: +91-9810350512',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
    ],
    // secondarySlider: [
    //   '/assets/img/hero_slider_sm_1.png',
    //   '/assets/img/hero_slider_sm_2.jpg',
    //   '/assets/img/hero_slider_sm_3.jpg',
    // ],
  };
  
  const ctaData = {
    imageUrl: '/assets/img/cta_img_1.png',
    title: 'Meet Our Team of Trained Certified Doctors.',
    subtitle: 'Our experienced fertility specialists are dedicated to providing personalized care and support throughout your journey.',
    buttonUrl: '/appointments',
    buttonText: 'Book Appointment',
  };
  
  const aboutData = {
    sectionSubtitle: 'ABOUT US',
    sectionTitle: 'Seeds of Innocens - Leading IVF Centre in India.',
    aboutText:
      "Seeds of Innocens IVF Centre is India's best fertility clinic, providing comprehensive fertility solutions across multiple locations. We offer advanced treatments including IVF-ICSI, IUI, Surrogacy, Genetic Testing, and more, helping thousands of couples achieve their dream of parenthood.",
    service:
      "We provide world-class fertility treatments with high success rates and personalized care <a href='/about'>READ MORE +</a>",
    experienceYears: '10+',
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

    btnUrl: '/about',
    btnText: 'About More',
    sectionImgUrl: '/assets/img/about_section_img_1.png',
    headImgUrl: '/assets/img/about_img_1.jpg',
  };
  
  const countersData = [
    {
      iconUrl: '/assets/img/icons/counter_icon_1.png',
      number: '20,000+',
      title: 'Successful Pregnancies',
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_2.png',
      number: '35+',
      title: 'Centres Across India',
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_3.png',
      number: '30+',
      title: 'Expert Doctors',
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_4.png',
      number: '10+',
      title: 'Years Experience',
    },
  ];
  
  const serviceData = {
    subtitle: 'OUR SERVICES',
    title: 'Comprehensive Fertility Treatment Services',
    description:
      'We offer a complete range of fertility treatments and services<br> to help you achieve your dream of parenthood with<br> advanced technology and expert care.',
    services: [
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_1.png',
        index: '01',
        title: 'IVF-ICSI',
        subtitle: 'In-vitro fertilization with Intracytoplasmic sperm injection for better success',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_2.png',
        index: '02',
        title: 'IUI Treatment',
        subtitle: 'Intrauterine insemination procedure for couples with fertility issues',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_3.png',
        index: '03',
        title: 'Surrogacy',
        subtitle: 'Complete surrogacy services with legal support and medical care',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_4.png',
        index: '04',
        title: 'Egg Freezing',
        subtitle: 'Preserve your fertility with advanced egg freezing technology',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_5.png',
        index: '05',
        title: 'PRP & Ovarian Rejuvenation',
        subtitle: 'Platelet-rich plasma therapy for improved ovarian function',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_6.png',
        index: '06',
        title: 'Genetic Testing',
        subtitle: 'PGT-A, PGT-M, PGT-SR and comprehensive genetic screening',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_7.png',
        index: '07',
        title: 'Male Fertility',
        subtitle: 'TESA, MicroTESE, Semen Analysis and varicocele treatment',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_8.png',
        index: '08',
        title: 'Blastocyst Transfer',
        subtitle: 'Advanced embryo transfer technique for higher pregnancy rates',
        link: '/service/service-details',
      },
    ],
    footerIcon: '/assets/img/icons/service_footer_icon_1.png',
    footerText:
      'Delivering world-class fertility care for your family.<br>Helping you achieve your dream of parenthood.',
    footerLink: '/service',
    footerLinkText: 'VIEW ALL SERVICES',
  };
  
  const teamData = {
    subtitle: 'OUR TEAM',
    title: 'Our Team of Trained <br />Certified Doctors',
    sliderData: [
      {
        name: 'Dr. Gauri Agarwal',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/Dr%20Gauri%20maam.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Ranjana Mishra',
        profession: 'Genetic Expert',
        imageUrl: '/assets/img/Doctors/ranjana.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Aditi Bhatnagar',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/aditi.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Nivedita Nehal',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/nivedita.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Alpana Razdan',
        profession: 'Sr. Genetic Expert',
        imageUrl: '/assets/img/Doctors/alpana.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Lisha Singh',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/lisha.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Beena Upadhyay',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/beena.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Debilina Roy',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/debilina.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Rashmi Singh',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/rashmi.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Kriti Prasad',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/kriti.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Pallavi Shrivastava',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/pallavi.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Divya Shivanand',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/divya.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Aiman Akram',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/aiman.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Preeti',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/preeti.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Disha Datta',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/disha.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Monika Maan',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/monika.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Vinod Kumar B',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/vinod.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Julie Chhawchharia',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/julie.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Varkha Chandra',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/varkha.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Pratik Kakani',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/pratik.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Mangla Kawade',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/mangla.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Khushboo Singh',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/khushboo.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Sonia Raju',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/sonia.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Jasna Mohammed',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/jasna.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
    ],
  };
  
  const brandData = [
    { image: '/assets/img/envato-logo.png', altText: 'Brand 1' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 2' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 3' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 4' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 5' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 6' },
  ];
  
  const sectionData = {
    subtitle: 'WHY CHOOSE US',
    title: 'Why Choose Seeds of Innocens <br /> IVF Centre',
    services: [
      {
        iconUrl: '/assets/img/icons/service_icon_9.png',
        title: 'Expert Care',
        subtitle: 'Trained and certified doctors with years of experience in fertility treatments',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_10.png',
        title: '24/7 Support',
        subtitle: 'Round-the-clock support and guidance throughout your fertility journey',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_11.png',
        title: 'Qualified Doctors',
        subtitle: 'Our team of specialists includes renowned fertility experts and embryologists',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_12.png',
        title: 'Advanced Technology',
        subtitle: 'State-of-the-art equipment and latest techniques for better success rates',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_13.png',
        title: 'Multiple Locations',
        subtitle: '25+ centres across India for convenient access to quality fertility care',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_14.png',
        title: 'Affordable Prices',
        subtitle: 'Transparent pricing with flexible payment options and insurance support',
      },
    ],
  };
  
  const projectData = {
    title: 'Our Centres Across<br> India & International',
    subtitle: 'OUR LOCATIONS',
    description:
      'Seeds of Innocens has multiple centres across India and internationally, providing world-class fertility treatments with the same quality and care everywhere.',
    tabs: [
      { id: 'dental', label: 'Delhi NCR' },
      { id: 'cardiology', label: 'Uttar Pradesh' },
      { id: 'neurology', label: 'Bihar' },
      { id: 'medical', label: 'Other States' },
    ],
    tabData: [
      {
        id: 'dental',
        items: [
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: 'Medical Of Dental',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 2,
          },
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: 'Laboratory Technologist',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 3,
          },
        ],
      },
      {
        id: 'cardiology',
        items: [
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: 'Laboratory Technologist',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 3,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: 'Medical Of Dental',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 2,
          },
        ],
      },
      {
        id: 'neurology',
        items: [
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
        ],
      },
      {
        id: 'medical',
        items: [
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
        ],
      },
    ],
  };
  
  const ctaData1 = {
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
  
  const medicalTabsData = {
    subtitle: 'OUR SERVICES',
    title: 'Explore Our Fertility<br> Treatment Services',
    tabsTitle: [
      {
        href: 'brain_althim',
        iconUrl: '/assets/img/icons/tab_link_icon_1.png',
        label: 'IVF Treatments',
      },
      {
        href: 'emergency',
        iconUrl: '/assets/img/icons/tab_link_icon_2.png',
        label: 'Success Rates',
      },
      {
        href: 'heart_beat',
        iconUrl: '/assets/img/icons/tab_link_icon_3.png',
        label: 'Expert Doctors',
      },
      {
        href: 'blood_test',
        iconUrl: '/assets/img/icons/tab_link_icon_4.png',
        label: 'Genetic Testing',
      },
    ],
    tabsData: [
      {
        id: 'brain_althim',
        imageSrc: '/assets/img/offerings03.jpg',
        title: 'Advanced IVF-ICSI Treatment',
        subtitle:
          'Our IVF-ICSI program uses the latest technology and techniques to maximize your chances of success. We provide personalized treatment plans tailored to your specific needs.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'State-of-the-art laboratory with advanced equipment for embryo culture and selection.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Experienced embryologists and fertility specialists ensuring the highest quality care.',
          },
        ],
        linkHref: '/service',
        buttonText: 'Learn More',
      },
      {
        id: 'emergency',
        imageSrc: '/assets/img/offerings02.jpg',
        title: 'High Success Rates',
        subtitle:
          'We maintain excellent success rates through continuous improvement in techniques, personalized care, and advanced technology. Our team is committed to achieving the best possible outcomes.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Regular monitoring and adjustment of treatment protocols based on individual response.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Comprehensive pre-treatment evaluation and counseling for optimal results.',
          },
        ],
        linkHref: '/service',
        buttonText: 'Learn More',
      },
      {
        id: 'heart_beat',
        imageSrc: '/assets/img/offerings01.jpg',
        title: 'Certified & Experienced Doctors',
        subtitle:
          'Our team consists of highly qualified and certified fertility specialists, embryologists, and support staff with years of experience in reproductive medicine.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Board-certified reproductive endocrinologists and infertility specialists.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Continuous training and education to stay updated with latest advancements.',
          },
        ],
        linkHref: '/doctors',
        buttonText: 'Meet Our Doctors',
      },
      {
        id: 'blood_test',
        imageSrc: '/assets/img/offerings04.jpg',
        title: 'Comprehensive Genetic Testing',
        subtitle:
          'We offer advanced genetic testing including PGT-A, PGT-M, PGT-SR, and carrier screening to help ensure healthy pregnancies and reduce genetic risks.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Preimplantation genetic testing for aneuploidy, monogenic disorders, and structural rearrangements.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Couple carrier screening and genetic counseling services.',
          },
        ],
        linkHref: '/service',
        buttonText: 'Learn More',
      },
      // Add other tab data here
    ],
  };
  
  const blogsData = {
    sectionTitle: 'FROM OUR BLOG',
    sectionSubtitle: 'Medical News, Clinical Trials and Guidelines By Seeds of Innocens',
    postsData: [
      {
        title: 'कम शुक्राणु संख्या: कारण, लक्षण, और उपचार',
        subtitle:
          'शुक्राणु संख्या में कमी को आमतौर पे "मेल इन्फर्टिलिटी" कहते है। यह एक ऐसी समस्या...',
        date: 'April 08',
        category: 'Male Fertility',
        author: 'Admin',
        thumbnail: '/assets/img/post_1.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: 'What is PRP Treatment in IVF?',
        subtitle:
          'PRP is Platelet-Rich Plasma therapy that is mainly known for its regenerative properties...',
        date: 'April 08',
        category: 'IVF Treatment',
        author: 'Admin',
        thumbnail: '/assets/img/post_2.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: 'शीघ्रपतन के उपाय, लक्षण और इलाज',
        subtitle:
          'शीघ्रपतन एक ऐसी समस्य है जो पुरुषों को किसी न किसी चरण में अनुभव करनी...',
        date: 'April 08',
        category: 'Male Fertility',
        author: 'Admin',
        thumbnail: '/assets/img/post_3.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: 'Can I-Pill Cause Infertility in Women?',
        subtitle:
          'Nowadays, there are a lot of questions about the impact of i-pills on female fertility...',
        date: 'April 08',
        category: 'Female Infertility',
        author: 'Admin',
        thumbnail: '/assets/img/post_1.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
    ],
  };

const page = () => {
    return (
        <div>
        {/* Start Hero Section */}
        <HeroSection data={heroData} />
        {/* End Hero Section */}

      {/* Start CTA Section */}
      <Section
        className={
          'cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden'
        }
      >
        <CtaSection data={ctaData} />
      </Section>

      {/* End CTA Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter */}
      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection data={countersData} />
      </Section>
      {/* End Counter */}

      {/* Start Service Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_gray_bg'}
      >
        <Service cardBg={'cs_gray_bg'} data={serviceData} />
      </Section>
      {/* End Service Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className={'cs_team_section position-relative'}
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}

      {/* Start Brand Section */}
      <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider data={brandData} />
      </Section>

      {/* End Brand Section */}

      {/* Start Why Choose Us Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="/assets/img/service_bg_2.jpg"
      >
        <ChooseUs data={sectionData} />
      </Section>
      {/* End Why Choose Us Section */}

      {/* Start Projects Section */}
      <Section topSpaceLg="70" topSpaceMd="110" className="cs_tabs">
        <ProjectSection data={projectData} />
      </Section>
      {/* End Projects Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section>
      {/* End CTA Section */}

      {/* Start Medical Tab Section */}
      <Section topSpaceLg="70" topSpaceMd="110">
        <MedicalTabSection data={medicalTabsData} />
      </Section>
      {/* End Medical Tab Section */}

      {/* Start Contact Solution */}
      <ContactSection2></ContactSection2>
      {/* End Contact Solution */}

      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
      </Section>
      {/* End Blog Solution */}

        </div>
    );
};

export default page;