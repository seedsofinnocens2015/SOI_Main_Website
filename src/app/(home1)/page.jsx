import React from 'react';
import HeroSection from '../Components/HeroSection';
import Section from '../Components/Section';
import CtaSection from '../Components/CtaSection';
import CounterSection from '../Components/FunSection/CounterSection';
import Service from '../Components/Service';
import ProjectSection from '../Components/ProjectSection';
import TestimonialSection from '../Components/TestimonialSection';
import BlogSection from '../Components/BlogsSection';

const heroData = {
    primarySlider: [
      {
        bgImageUrl: '/assets/img/hero_slider_300.mp4',
        title: 'Seeds of Innocens IVF Centre <span>India\'s Best Fertility Clinic</span>',
        titleClass: 'cs_single_line_title',
        titleStyle: {
          fontSize: 'clamp(22px, 4vw, 48px)',
          marginTop: 'clamp(-120px, -8vw, -40px)',
        },
        contactSubtitle:
          'One Stop Solution For All Your Fertility Problems!',
        btnText1: 'Book Appointment',
        link: '/contact/book-appointment',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: '/assets/img/hero_slider_21.jpg',
        title: 'Expert Fertility <span>Care.</span>',
        titleClass: 'cs_single_line_title',
        titleStyle: {
          fontSize: 'clamp(22px, 4vw, 48px)',
          marginTop: 'clamp(-120px, -8vw, -40px)',
        },
        contactSubtitle:
          'Expert Fertility Care with World-Class Treatment.',
        btnText1: 'Book Appointment',
        link: '/contact/book-appointment',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: '/assets/img/hero_slider_12.jpg',
        title: 'Advanced IVF <span>Treatments.</span>',
        titleClass: 'cs_single_line_title',
        titleStyle: {
          fontSize: 'clamp(22px, 4vw, 48px)',
          marginTop: 'clamp(-120px, -8vw, -40px)',
        },
        contactSubtitle:
          'Advanced IVF Treatments with Cutting-Edge Solutions.',
        btnText1: 'Book Appointment',
        link: '/contact/book-appointment',
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
    imageUrl: '/assets/img/cta_img_12.png',
    title: 'Meet Our Team of Trained Certified Doctors.',
    // subtitle: 'Our experienced fertility specialists are dedicated to providing personalized care and support throughout your journey.',
    buttonUrl: '/contact/book-appointment',
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
    subtitle: 'FERTILITY TREATMENTS',
    title: '',
    description: '',
    services: [
      {
        iconUrl: '/assets/img/icons/service_icon_1.png',
        index: '01',
        title: 'IUI, IVF & ICSI',
        subtitle: 'In-vitro fertilization with Intracytoplasmic sperm injection for better success',
        link: '/service/service-details',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_2.png',
        index: '02',
        title: 'TESA/PESA',
        subtitle: 'TESA, MicroTESE, Semen Analysis and varicocele treatment',
        link: '/service/service-details',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_3.png',
        index: '03',
        title: 'Genetic Testing',
        subtitle: 'PGT-A, PGT-M, PGT-SR and comprehensive genetic screening',
        link: '/service/service-details',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_4.png',
        index: '04',
        title: 'Blastocyst Transfer',
        subtitle: 'Advanced embryo transfer technique for higher pregnancy rates',
        link: '/service/service-details',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_5.png',
        index: '05',
        title: 'Donor Program',
        subtitle: 'Donor program for couples with fertility issues like low sperm count, low motility, etc.',
        link: '/service/service-details',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_6.png',
        index: '05',
        title: 'Surrogacy',
        subtitle: 'Complete surrogacy services with legal support and medical care',
        link: '/service/service-details',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_7.png',
        index: '06',
        title: 'Cryopreservation',
        subtitle: 'Cryopreservation of sperm, eggs, embryos, and ovarian tissue for future use',
        link: '/service/service-details',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_8.png',
        index: '08',
        title: 'Genetic Counselling',
        subtitle: 'Genetic counselling for couples with fertility issues like low sperm count, low motility, etc.',
        link: '/service/service-details',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_9.png',
        index: '07',
        title: 'Laparoscopy & Hysteroscopy',
        subtitle: 'Laparoscopy & Hysteroscopy for treatment of fertility issues',
        link: '/service/service-details',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_10.png',
        index: '08',
        title: 'PRP & Ovarian Rejuvenation',
        subtitle: 'Platelet-rich plasma therapy for improved ovarian function',
        link: '/service/service-details',
      },
      
      
     
    ],
    footerIcon: '',
    footerText: '',
    footerLink: '',
    footerLinkText: '',
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
    title: 'Why Couples Trust Seeds of Innocence',
    services: [
      {
        iconUrl: '/assets/img/icons/service_icon_9.png',
        title: 'High IVF Success Rates',
        subtitle: 'We maintain consistently high pregnancy outcomes',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_10.png',
        title: 'Experienced Fertility Specialists',
        subtitle: 'Decades of combined clinical expertise',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_11.png',
        title: 'Expert Doctors',
        subtitle: 'Renowned fertility experts and embryologists',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_12.png',
        title: 'Advanced Technology',
        subtitle: 'Advanced IVF labs with modern technology',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_13.png',
        title: 'In-House Genetic Lab',
        subtitle: 'Comprehensive genetic testing and analysis',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_14.png',
        title: 'Fetal Medicine',
        subtitle: 'Complete fetal monitoring and care',
      },
    ],
  };
  
  const projectData = {
    title: '',
    subtitle: 'OUR LOCATIONS',
    description: '',
    mainCentres: [
      {
        title: 'Malviya Nagar, Delhi',
        subtitle:
          'Seeds of Innocens IVF, 3, opposite Aurbindo College, MMTC Road, Malviya Nagar, New Delhi-110017',
      },
      {
        title: 'Ghaziabad, Uttar Pradesh',
        subtitle:
          'Seeds of Innocens IVF, Yashoda Hospital Opp. Nehru Stadium, Nehru Nagar, Ghaziabad, U.P.-201001',
      },
      {
        title: 'Gurgaon, Haryana',
        subtitle:
          'Seeds of Innocens IVF, Plot No. -2, Sector-42, Gurgaon Near Nagar, Nigam Office Gurugram, Haryana-122001',
      },
      {
        title: 'Faridabad, Haryana',
        subtitle:
          'Seeds of Innocens IVF, A-6/A Neelam Bata Road, Above ICICI Bank, NIT Faridabad, Haryana-121001',
      },
    ],
    tabs: [
      { id: 'dental', label: 'Delhi NCR' },
      { id: 'up', label: 'Uttar Pradesh' },
      { id: 'bihar', label: 'Bihar' },
      { id: 'kerala', label: 'Kerala' },
      { id: 'other', label: 'Other States' },
      { id: 'international', label: 'International' },
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
      {
        id: 'bihar',
        items: [
          
          {
            imgUrl: '/assets/img/Centers/muzaffarpur.jpg',
            title: 'Muzaffarpur, Bihar',
            subtitle:
              '2nd Floor, Hansa Complex, Maripur Main Rd, Musahri, Muzaffarpur, Bihar 842001',
            index: 2,
          },
          {
            imgUrl: '/assets/img/Centers/patna.jpg',
            title: 'Patna, Bihar',
            subtitle:
              'Pillar no: 38, Jagmano Shree Complex, Bailey Rd, Samanpura, Khajpura, Patna, Bihar 800014',
            index: 1,
          },
        ],
      },
      {
        id: 'international',
        items: [
          {
            imgUrl: '/assets/img/Centers/lusaka.jpg',
            title: 'Lusaka, Zambia, Africa',
            subtitle:
              'Seeds of Innocens IVF, Lusaka, Zambia, Africa',
            index: 1,
          },
          {
            imgUrl: '/assets/img/Centers/kitwe.jpg',
            title: 'Kitwe, Zambia, Africa',
            subtitle:
              'Seeds of Innocens IVF, Kitwe, Zambia, Africa',
            index: 2,
          },
          {
            imgUrl: '/assets/img/Centers/muscat.jpg',
            title: 'Mabela, Muscat, Oman',
            subtitle:
              'Seeds of Innocens IVF, Mabela, Muscat, Oman',
            index: 3,
          },
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
    brandImage: '/assets/img/medical_brand1.png',
  };
  
  const medicalTabsData = {
    subtitle: 'FERTILITY TREATMENTS',
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
    sectionSubtitle: '',
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

  const testimonialData = {
    subtitle: 'REAL STORIES OF HOPE',
    title: '',
    description: '',
    thumbnail: '/assets/img/testimonial_1.png',
    testimonials: [
      {
        rating: 5,
        subtitle:
          'Seeds of Innocens gave us the gift of parenthood. The doctors were compassionate, the staff was supportive, and the treatment was excellent. We are forever grateful for our beautiful baby.',
        avatar: '/assets/img/avatar_1.png',
        name: 'Priya & Rahul',
        position: 'Successful Parents',
      },
      {
        rating: 5,
        subtitle:
          'The entire team at Seeds of Innocens made our IVF journey smooth and stress-free. Their expertise and care helped us achieve our dream of becoming parents. Highly recommended!',
        avatar: '/assets/img/avatar_2.png',
        name: 'Anjali & Mohan',
        position: 'Happy Parents',
      },
      {
        rating: 5,
        subtitle:
          'After years of trying, we found hope at Seeds of Innocens. The personalized care and advanced treatment options made all the difference. Thank you for making our family complete.',
        avatar: '/assets/img/avatar_1.png',
        name: 'Sneha & Vikram',
        position: 'Grateful Parents',
      },
    ],
  };

const page = () => {
    return (
        <div>
        {/* 1. Hero Banner */}
        <HeroSection data={heroData} />

      {/* 2. Book Appointment */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="0"
        bottomSpaceMd="0"
        className={
          'cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden'
        }
      >
        <CtaSection data={ctaData} />
      </Section>

      {/* 3. Success Rate Snapshot */}
      <Section 
      topSpaceLg="60" 
      topSpaceMd="70" 
      bottomSpaceLg="40" 
      bottomSpaceMd="50" 
      className="cs_counter_area">
        <CounterSection data={countersData} />
      </Section>

      {/* 4. Treatments Overview */}
      <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
        className={'cs_light_bg_1'}
      >
        <Service cardBg={'cs_gray_bg'} data={serviceData} />
      </Section>

      {/* 5. Centers Overview */}
      <Section 
      topSpaceLg="60" 
      topSpaceMd="70" 
      bottomSpaceLg="40" 
      bottomSpaceMd="50" 
      className="cs_tabs">
        <ProjectSection data={projectData} />
      </Section>

      {/* 6. Testimonials Preview */}
      <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
        className="cs_testimonial_area"
        // backgroundImage="/assets/img/testomonial_bg_1.png"
      >
        <TestimonialSection data={testimonialData} />
      </Section>

      {/* 7. Blogs Preview */}
      <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
      >
        <BlogSection data={blogsData} />
      </Section>

        </div>
    );
};

export default page;