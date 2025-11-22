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
        bgImageUrl: '/assets/img/hero_slider_30.mp4',
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
    videoUrl: 'https://www.youtube.com/embed/Xqe5ipD1Bwk?si=GvaPx5MngqYkWGqU',
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
    sectionImgUrl: '/assets/img/about_section_img_12.png',
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
      number: '78%',
      title: 'Success Rate',
    },
  ];
  
  const serviceData = {
    subtitle: 'OUR SERVICES',
    title: 'Comprehensive Fertility Treatment Services',
    description:
      'We offer a complete range of fertility treatments and services<br> to help you achieve your dream of parenthood with<br> advanced technology and expert care.',
    services: [
      {
        backgroundImage: '/assets/img/IVF-ICSI.jpg',
        iconUrl: '/assets/img/icons/service_icon_1.png',
        index: '01',
        title: 'IUI, IVF & ICSI',
        subtitle: 'In-vitro fertilization with Intracytoplasmic sperm injection for better success',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/male.jpg',
        iconUrl: '/assets/img/icons/service_icon_7.png',
        index: '02',
        title: 'TESA/PESA',
        subtitle: 'TESA, MicroTESE, Semen Analysis and varicocele treatment',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/genetic.jpg',
        iconUrl: '/assets/img/icons/service_icon_6.png',
        index: '03',
        title: 'Genetic Testing',
        subtitle: 'PGT-A, PGT-M, PGT-SR and comprehensive genetic screening',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/blastocyst.jpg',
        iconUrl: '/assets/img/icons/service_icon_8.png',
        index: '04',
        title: 'Blastocyst Transfer',
        subtitle: 'Advanced embryo transfer technique for higher pregnancy rates',
        link: '/service/service-details',
      },
      // {
      //   backgroundImage: '/assets/img/recent_post_1.png',
      //   iconUrl: '/assets/img/icons/service_icon_2.png',
      //   index: '05',
      //   title: 'Donor Program',
      //   subtitle: 'Donor program for couples with fertility issues like low sperm count, low motility, etc.',
      //   link: '/service/service-details',
      // },
      {
        backgroundImage: '/assets/img/surrogacy.jpg',
        iconUrl: '/assets/img/icons/service_icon_3.png',
        index: '05',
        title: 'Surrogacy',
        subtitle: 'Complete surrogacy services with legal support and medical care',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/egg.jpg',
        iconUrl: '/assets/img/icons/service_icon_4.png',
        index: '06',
        title: 'Cryopreservation',
        subtitle: 'Cryopreservation of sperm, eggs, embryos, and ovarian tissue for future use',
        link: '/service/service-details',
      },
      // {
      //   backgroundImage: '/assets/img/genetic.jpg',
      //   iconUrl: '/assets/img/icons/service_icon_5.png',
      //   index: '08',
      //   title: 'Genetic Counselling',
      //   subtitle: 'Genetic counselling for couples with fertility issues like low sperm count, low motility, etc.',
      //   link: '/service/service-details',
      // },
      {
        backgroundImage: '/assets/img/laparoscopy.jpg',
        iconUrl: '/assets/img/icons/service_icon_5.png',
        index: '07',
        title: 'Laparoscopy & Hysteroscopy',
        subtitle: 'Laparoscopy & Hysteroscopy for treatment of fertility issues',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/ovarian.jpg',
        iconUrl: '/assets/img/icons/service_icon_5.png',
        index: '08',
        title: 'PRP & Ovarian Rejuvenation',
        subtitle: 'Platelet-rich plasma therapy for improved ovarian function',
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
        title: 'Affordable IVF Care',
        subtitle: 'Affordable IVF Care with transparent pricing and flexible payment options',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_10.png',
        title: 'Expert Counsellors & Clinical Geneticists',
        subtitle: 'Expert counsellors and clinical geneticists for comprehensive genetic testing and analysis',
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
        title: 'In-House Genetic Lab',
        subtitle: 'In-house genetic lab for comprehensive genetic testing and analysis',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_14.png',
        title: 'Fetal Medicine',
        subtitle: 'Fetal medicine for comprehensive fetal monitoring and care',
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
      { id: 'up', label: 'Uttar Pradesh' },
      { id: 'bihar', label: 'Bihar' },
      { id: 'kerala', label: 'Kerala' },
      { id: 'other', label: 'Other States' },
    ],
    tabData: [
      {
        id: 'dental',
        items: [
          {
            imgUrl: '/assets/img/Centers/malviyanagar.jpg',
            title: 'Malviya Nagar, Delhi',
            subtitle:
              'Seeds of Innocens IVF, 3, opposite Aurbindo College, MMTC Road, Malviya Nagar, New Delhi-110017',
            index: 1,
          },
          {
            imgUrl: '/assets/img/Centers/ghaziabad.jpg',
            title: 'Ghaziabad, Uttar Pradesh',
            subtitle:
              'Seeds of Innocens IVF, Yashoda Hospital Opp. Nehru Stadium, Nehru Nagar, Ghaziabad, U.P.-201001',
            index: 2,
          },
          {
            imgUrl: '/assets/img/Centers/gurgaon.jpg',
            title: 'Gurgaon, Haryana',
            subtitle:
              'Seeds of Innocens IVF, Plot No. -2, Sector-42, Gurgaon Near Nagar, Nigam Office Gurugram, Haryana-122001',
            index: 3,
          },
          {
            imgUrl: '/assets/img/Centers/faridabad.jpg',
            title: 'Faridabad, Haryana',
            subtitle:
              'Seeds of Innocens IVF, A-6/A Neelam Bata Road, Above ICICI Bank, NIT Faridabad, Haryana-121001',
            index: 4,
          },
          {
            imgUrl: '/assets/img/Centers/jankpuri.jpg',
            title: 'Jankpuri, Delhi',
            subtitle:
              'Seeds of Innocens IVF, C1A/50A, Pankha Road, Janakpuri, New Delhi-110058',
            index: 5,
          },
          {
            imgUrl: '/assets/img/Centers/pitampura.jpg',
            title: 'Pitampura, Delhi',
            subtitle:
              'Seeds of Innocens IVF, Plot no 1, First floor, Shiva Enclave, Near Harsh Vihar Chowk, Pitampura, Delhi-110034',
            index: 6,
          },
        ],
      },
      {
        id: 'up',
        items: [
          {
            imgUrl: '/assets/img/Centers/gorakhpur.jpg',
            title: 'Gorakhpur, Uttar Pradesh',
            subtitle:
              '2nd Floor, 1076, Kamlesh Shopping Arcade, near Kalimandir, Golghar, Gorakhpur, U.P.-273001',
            index: 1,
          },
          {
            imgUrl: '/assets/img/Centers/lucknow.jpg',
            title: 'Lucknow, Uttar Pradesh',
            subtitle:
              'Drosia Tower, 5/5, Park Rd, Raj Bhavan Colony, Hazratganj, Lucknow, Uttar Pradesh 226001',
            index: 2,
          },
          {
            imgUrl: '/assets/img/Centers/kanpur.jpg',
            title: 'Kanpur, Uttar Pradesh',
            subtitle:
              '7/153, Kumhar Wali gali, Kanpur Vidya Mandir, Khalasi Line, Swaroop Nagar, Kanpur, Uttar Pradesh 208002',
            index: 3,
          },
          {
            imgUrl: '/assets/img/Centers/meerut.jpg',
            title: 'Meerut, Uttar Pradesh',
            subtitle:
              'building 303/305, 2nd floor, Mangal Pandey Nagar, Ramgarhi, Meerut, Uttar Pradesh 250004',
            index: 4,
          },
          {
            imgUrl: '/assets/img/Centers/agra.jpg',
            title: 'Agra, Uttar Pradesh',
            subtitle:
              '1st Floor, Shankar Point, Block No.9/4, Sanjay Palace, Sanjay Place, Civil Lines, Agra, Uttar Pradesh 282002',
            index: 5,
          },
        ],
      },
      {
        id: 'bihar',
        items: [
          {
            imgUrl: '/assets/img/Centers/patna.jpg',
            title: 'Patna, Bihar',
            subtitle:
              'Pillar no: 38, Jagmano Shree Complex, Bailey Rd, Samanpura, Khajpura, Patna, Bihar 800014',
            index: 1,
          },
          {
            imgUrl: '/assets/img/Centers/muzaffarpur.jpg',
            title: 'Muzaffarpur, Bihar',
            subtitle:
              '2nd Floor, Hansa Complex, Maripur Main Rd, Musahri, Muzaffarpur, Bihar 842001',
            index: 2,
          },
        ],
      },
      {
        id: 'kerala',
        items: [
          {
            imgUrl: '/assets/img/Centers/kochi.jpg',
            title: 'Kochi, Kerala',
            subtitle:
              'Opp Royal drive showroom, Kannadikadu, Upasana Rd, Kundannoor, Maradu, Kochi, Kerala 682304',
            index: 1,
          },                           
          {
            imgUrl: '/assets/img/Centers/kasaragod.jpg',
            title: 'Kasaragod, Kerala',
            subtitle:
              'Seeds of Innocens IVF, Wintouch Multi Speciality Hospital, Bank Road, Kasaragod, Kerala, 671121',
            index: 2,
          },
        ],
      },
      {
        id: 'other',
        items: [
          {
          imgUrl: '/assets/img/Centers/guwahati.jpg',
            title: 'Guwahati, Assam',
            subtitle:
              'GS Rd, SATSANG VIHAR, Bhangagarh, Guwahati, Assam 781005',
            index: 1,
          },
          {
            imgUrl: '/assets/img/Centers/haldwani.jpg',
            title: 'Haldwani, Uttarakhand',
            subtitle:
              '2nd Floor, Laxmi Mohan Towers, Chauraha, Bamori Talli, Ganesh Vihar, Heera Nagar, Mukhani, Haldwani, Uttarakhand 263139',
            index: 2,
          },
          {
            imgUrl: '/assets/img/Centers/ranchi.jpg',
            title: 'Ranchi, Jharkhand',
            subtitle:
              '4th Floor, Maru Tower, Kanke Rd, Ranchi, Jharkhand 834008',
            index: 3,
          },
          // {
          //   imgUrl: '/assets/img/Centers/srinagar.jpg',
          //   title: 'Srinagar, Jammu and Kashmir',
          //   subtitle:
          //     'Karan Nagar Gole Market Rd, opposite Masjid, Karan Nagar, Srinagar, Jammu and Kashmir 190010',
          //   index: 4,
          // },
        ],
      },
    ],
  };
  
  const ctaData1 = {
    videoLink: 'https://www.youtube.com/embed/n7OFN8asiWQ?si=G0ufkIozssMtTeGP',
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
        imageSrc: '/assets/img/IVF-ICSI.jpg',
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
        thumbnail: '/assets/img/post_1.jpg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: 'Genetic Conditions: Understanding Their Role in Fertility and Parenthood',
        subtitle:
          'When couples begin their journey toward parenthood, questions about health and heredity often arise...',
        date: 'April 08',
        category: 'Genetic Conditions',
        author: 'Admin',
        thumbnail: '/assets/img/post_2.jpg',
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
        thumbnail: '/assets/img/post_3.jpg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: 'Hormonal Imbalances: Understanding and Managing Their Impact on Fertility',
        subtitle:
          'Hormonal health plays a key role in overall well-being and reproductive health...',
        date: 'April 08',
        category: 'Female Infertility',
        author: 'Admin',
        thumbnail: '/assets/img/post_4.jpg',
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
      {/* <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider data={brandData} />
      </Section> */}

      {/* End Brand Section */}

      {/* Start Why Choose Us Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="/assets/img/service_bg_2.png"
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
        backgroundImage="/assets/img/cta_bg_1.jpg"
      >
        <CtaSection1 data={ctaData1} />
      </Section>
      {/* End CTA Section */}

      {/* Start Medical Tab Section */}
      {/* <Section topSpaceLg="70" topSpaceMd="110">
        <MedicalTabSection data={medicalTabsData} />
      </Section> */}
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