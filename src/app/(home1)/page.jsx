import React from 'react';
import HeroSection from '../Components/HeroSection';
import Section from '../Components/Section';
import CtaSection from '../Components/CtaSection';
import CounterSection from '../Components/FunSection/CounterSection';
import Service from '../Components/Service';
import ProjectSection from '../Components/ProjectSection';
import TestimonialSection from '../Components/TestimonialSection';
import BlogSection from '../Components/BlogsSection';
import NewsMediaSection from '../Components/NewsMediaSection';
import WhyChooseUsSection from '../Components/WhyChooseUsSection';
import GeneticsSection from '../Components/GeneticsSection';
import CredibilitySection from '../Components/CredibilitySection';

const heroData = {
    primarySlider: [
      {
        bgImageUrl: '/assets/img/herobanner.jpg',
        mobileBgImageUrl: '/assets/img/herobanner_mobile.jpg', // Add mobile image path here
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
        mobileBgImageUrl: '/assets/img/hero_slider_21_mobile.jpg', // Add mobile image path here
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
        mobileBgImageUrl: '/assets/img/hero_slider_12_mobile.jpg', // Add mobile image path here
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
    subtitle: 'Our experienced fertility specialists are dedicated to providing personalized care and support throughout your journey.',
    buttonUrl: '/doctors',
    buttonText: 'Our Doctors',
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
        iconUrl: '/assets/img/icons/IUI, IVF & ICSI.jpg',
        index: '01',
        title: 'IUI, IVF & ICSI',
        subtitle: 'We believe in bringing advanced fertility care with customized care with the start of the ART facility. ',
        link: '/fertility-treatments/ivf-icsi/',
      },
      {
        iconUrl: '/assets/img/icons/TESA PESA.jpg',
        index: '02',
        title: 'TESA/PESA',
        subtitle: 'We help in resolving the fertility issues such as TESA/PESA, Semen analysis, PESA, and the treatment for the low sperm count.',
        link: '/advanced-fertility-care/tesa-pesa/',
      },
      {
        iconUrl: '/assets/img/icons/Genetic Testing.jpg',
        index: '03',
        title: 'Genetic Testing',
        subtitle: 'We ensure that healthy embryo selection improves IVF success and reduces risks such as PGT-A, PGT-M, and PGT-SR.',
        link: '/genetic-testing-pgt/pgt-a/',
      },
      {
        iconUrl: '/assets/img/icons/Blastocyst Transfer.jpg',
        index: '04',
        title: 'Blastocyst Transfer',
        subtitle: 'Blastocyst Transfer is an advanced technique where embryos are cultured in the lab for 5-6 days to reach the blastocyst stage before being transferred to the uterus.',
        link: '/fertility-treatments/blastocyst-transfer/',
      },
      {
        iconUrl: '/assets/img/icons/Donor Program.jpg',
        index: '05',
        title: 'Donor Program',
        subtitle: 'We believe in helping couples who require additional support in achieving pregnancy. Donor sperm, Donor eggs, Donor Embryos',
        link: '/',
      },
      {
        iconUrl: '/assets/img/icons/Surrogacy.jpg',
        index: '05',
        title: 'Surrogacy',
        subtitle: 'We offer ethical, medically guided surrogacy assistance with complete end-to-end care.',
        link: '/',
      },
      {
        iconUrl: '/assets/img/icons/Cryopreservation.jpg',
        index: '06',
        title: 'Cryopreservation',
        subtitle: 'We help in preserving fertility for the future with reliable and safe freezing options.',
        link: '/',
      },
      {
        iconUrl: '/assets/img/icons/Genetic Counselling.jpg',
        index: '08',
        title: 'Genetic Counselling',
        subtitle: 'We help couples understand and manage genetic risks in family planning, assessing family history for inherited conditions guiding them through options. ',
        link: '/',
      },
      {
        iconUrl: '/assets/img/icons/Laparoscopy & Hysteroscopy.jpg',
        index: '07',
        title: 'Laparoscopy & Hysteroscopy',
        subtitle: 'We provide minimally invasive surgical procedures to diagnose and treat problems such as fibroids, blocked tubes, and endometriosis.',
        link: '/surgeries/hysteroscopy/',
      },
      {
        iconUrl: '/assets/img/icons/PRP & Ovarian Rejuvenation.jpg',
        index: '08',
        title: 'PRP & Ovarian Rejuvenation',
        subtitle: 'We treat couples with an advanced and non-surgical procedure that uses the body’s own healing power to rejuvenate ovarian function.',
        link: '/advanced-fertility-care/prp-ovarian-rejuvenation/',
      },
      
      
     
    ],
    footerIcon: '',
    footerText: '',
    footerLink: '',
    footerLinkText: '',
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
            imgUrl: '/assets/img/Centres/malviyanagar.jpg',
            title: 'Malviya Nagar, Delhi',
            subtitle:
              'Seeds of Innocens IVF, 3, opposite Aurbindo College, MMTC Road, Malviya Nagar, New Delhi-110017',
            index: 1,
            coordinates: [28.5355, 77.2167], // Delhi coordinates
          },
          {
            imgUrl: '/assets/img/Centres/ghaziabad.jpg',
            title: 'Ghaziabad, Uttar Pradesh',
            subtitle:
              'Seeds of Innocens IVF, Yashoda Hospital Opp. Nehru Stadium, Nehru Nagar, Ghaziabad, U.P.-201001',
            index: 2,
            coordinates: [28.6692, 77.4538], // Ghaziabad coordinates
          },
          {
            imgUrl: '/assets/img/Centres/gurgaon.jpg',
            title: 'Gurgaon, Haryana',
            subtitle:
              'Seeds of Innocens IVF, Plot No. -2, Sector-42, Gurgaon Near Nagar, Nigam Office Gurugram, Haryana-122001',
            index: 3,
            coordinates: [28.4089, 77.0378], // Gurgaon coordinates
          },
          {
            imgUrl: '/assets/img/Centres/faridabad.jpg',
            title: 'Faridabad, Haryana',
            subtitle:
              'Seeds of Innocens IVF, A-6/A Neelam Bata Road, Above ICICI Bank, NIT Faridabad, Haryana-121001',
            index: 4,
            coordinates: [28.4089, 77.3167], // Faridabad coordinates
          },
          {
            imgUrl: '/assets/img/Centres/jankpuri.jpg',
            title: 'Jankpuri, Delhi',
            subtitle:
              'Seeds of Innocens IVF, C1A/50A, Pankha Road, Janakpuri, New Delhi-110058',
            index: 5,
            coordinates: [28.6219, 77.0882], // Janakpuri coordinates
          },
          {
            imgUrl: '/assets/img/Centres/pitampura.jpg',
            title: 'Pitampura, Delhi',
            subtitle:
              'Seeds of Innocens IVF, Plot no 1, First floor, Shiva Enclave, Near Harsh Vihar Chowk, Pitampura, Delhi-110034',
            index: 6,
            coordinates: [28.6989, 77.1398], // Pitampura coordinates
          },
        ],
      },
      {
        id: 'up',
        items: [
          {
            imgUrl: '/assets/img/Centres/gorakhpur.jpg',
            title: 'Gorakhpur, Uttar Pradesh',
            subtitle:
              '2nd Floor, 1076, Kamlesh Shopping Arcade, near Kalimandir, Golghar, Gorakhpur, U.P.-273001',
            index: 1,
            coordinates: [26.7588, 83.3697], // Gorakhpur coordinates
          },
          {
            imgUrl: '/assets/img/Centres/lucknow.jpg',
            title: 'Lucknow, Uttar Pradesh',
            subtitle:
              'Drosia Tower, 5/5, Park Rd, Raj Bhavan Colony, Hazratganj, Lucknow, Uttar Pradesh 226001',
            index: 2,
            coordinates: [26.8467, 80.9462], // Lucknow coordinates
          },
          {
            imgUrl: '/assets/img/Centres/kanpur.jpg',
            title: 'Kanpur, Uttar Pradesh',
            subtitle:
              '7/153, Kumhar Wali gali, Kanpur Vidya Mandir, Khalasi Line, Swaroop Nagar, Kanpur, Uttar Pradesh 208002',
            index: 3,
            coordinates: [26.4499, 80.3319], // Kanpur coordinates
          },
          {
            imgUrl: '/assets/img/Centres/meerut.jpg',
            title: 'Meerut, Uttar Pradesh',
            subtitle:
              'building 303/305, 2nd floor, Mangal Pandey Nagar, Ramgarhi, Meerut, Uttar Pradesh 250004',
            index: 4,
            coordinates: [28.9845, 77.7064], // Meerut coordinates
          },
          {
            imgUrl: '/assets/img/Centres/agra.jpg',
            title: 'Agra, Uttar Pradesh',
            subtitle:
              '1st Floor, Shankar Point, Block No.9/4, Sanjay Palace, Sanjay Place, Civil Lines, Agra, Uttar Pradesh 282002',
            index: 5,
            coordinates: [27.1767, 78.0081], // Agra coordinates
          },
        ],
      },
      
      {
        id: 'kerala',
        items: [
          {
            imgUrl: '/assets/img/Centres/kochi.jpg',
            title: 'Kochi, Kerala',
            subtitle:
              'Opp Royal drive showroom, Kannadikadu, Upasana Rd, Kundannoor, Maradu, Kochi, Kerala 682304',
            index: 1,
            coordinates: [9.9312, 76.2673], // Kochi coordinates
          },                           
          {
            imgUrl: '/assets/img/Centres/kasaragod.jpg',
            title: 'Kasaragod, Kerala',
            subtitle:
              'Seeds of Innocens IVF, Wintouch Multi Speciality Hospital, Bank Road, Kasaragod, Kerala, 671121',
            index: 2,
            coordinates: [12.4984, 74.9894], // Kasaragod coordinates
          },
        ],
      },
      {
        id: 'other',
        items: [
          {
          imgUrl: '/assets/img/Centres/guwahati.jpg',
            title: 'Guwahati, Assam',
            subtitle:
              'GS Rd, SATSANG VIHAR, Bhangagarh, Guwahati, Assam 781005',
            index: 1,
            coordinates: [26.1445, 91.7362], // Guwahati coordinates
          },
          {
            imgUrl: '/assets/img/Centres/haldwani.jpg',
            title: 'Haldwani, Uttarakhand',
            subtitle:
              '2nd Floor, Laxmi Mohan Towers, Chauraha, Bamori Talli, Ganesh Vihar, Heera Nagar, Mukhani, Haldwani, Uttarakhand 263139',
            index: 2,
            coordinates: [29.2227, 79.5156], // Haldwani coordinates
          },
          {
            imgUrl: '/assets/img/Centres/ranchi.jpg',
            title: 'Ranchi, Jharkhand',
            subtitle:
              '4th Floor, Maru Tower, Kanke Rd, Ranchi, Jharkhand 834008',
            index: 3,
            coordinates: [23.3441, 85.3096], // Ranchi coordinates
          },

          // {
          //   imgUrl: '/assets/img/Centres/srinagar.jpg',
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
            imgUrl: '/assets/img/Centres/muzaffarpur.jpg',
            title: 'Muzaffarpur, Bihar',
            subtitle:
              '2nd Floor, Hansa Complex, Maripur Main Rd, Musahri, Muzaffarpur, Bihar 842001',
            index: 2,
            coordinates: [26.1210, 85.3655], // Muzaffarpur coordinates
          },
          {
            imgUrl: '/assets/img/Centres/patna.jpg',
            title: 'Patna, Bihar',
            subtitle:
              'Pillar no: 38, Jagmano Shree Complex, Bailey Rd, Samanpura, Khajpura, Patna, Bihar 800014',
            index: 1,
            coordinates: [25.5941, 85.1376], // Patna coordinates
          },
        ],
      },
      {
        id: 'international',
        items: [
          {
            imgUrl: '/assets/img/Centres/lusaka.jpg',
            title: 'Lusaka, Zambia, Africa',
            subtitle:
              'Seeds of Innocens IVF, Lusaka, Zambia, Africa',
            index: 1,
            coordinates: [-15.3875, 28.3228], // Lusaka coordinates
          },
          {
            imgUrl: '/assets/img/Centres/kitwe.jpg',
            title: 'Kitwe, Zambia, Africa',
            subtitle:
              'Seeds of Innocens IVF, Kitwe, Zambia, Africa',
            index: 2,
            coordinates: [-12.8147, 28.2136], // Kitwe coordinates
          },
          {
            imgUrl: '/assets/img/Centres/muscat.jpg',
            title: 'Mabela, Muscat, Oman',
            subtitle:
              'Seeds of Innocens IVF, Mabela, Muscat, Oman',
            index: 3,
            coordinates: [23.5880, 58.3829], // Muscat coordinates
          },
        ],
      },
    ],
  };
  
  const newsMediaData = {
    sectionTitle: 'NEWS AND MEDIA',
    sectionSubtitle: '',
    videos: [
      {
        videoUrl: 'https://www.youtube.com/watch?v=OpgqOL4fpoU&t=75s', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_1')
        title: '', // Optional: Video title
        description: '', // Optional: Video description
        date: '', // Optional: Video date
      },
      {
        videoUrl: 'https://www.youtube.com/watch?v=E04J-XxA1Y0', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_2')
        title: '', // Optional: Video title
        description: '', // Optional: Video description
        date: '', // Optional: Video date
      },
      {
        videoUrl: 'https://www.youtube.com/watch?v=9_K6ksAefj4', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_3')
        title: '', // Optional: Video title
        description: '', // Optional: Video description
        date: '', // Optional: Video date
      },
      {
        videoUrl: 'https://www.youtube.com/watch?v=PzkrtU5dchg', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_4')
        title: '', // Optional: Video title
        description: '', // Optional: Video description
        date: '', // Optional: Video date
      },
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
        name: 'Couple from Sydney, Australia',
        position: 'Successful Parents',
        videoUrl: 'https://www.youtube.com/watch?v=0XD9OrkunWI', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_1')
      },
      {
        rating: 5,
        subtitle:
          'The entire team at Seeds of Innocens made our IVF journey smooth and stress-free. Their expertise and care helped us achieve our dream of becoming parents. Highly recommended!',
        avatar: '/assets/img/avatar_1.png',
        name: 'Parents from Jharkhand, India',
        position: 'Happy Parents',
        videoUrl: 'https://www.youtube.com/watch?v=wmZZrZFaGB8', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_2')
      },
      {
        rating: 5,
        subtitle:
          'After years of trying, we found hope at Seeds of Innocens. The personalized care and advanced treatment options made all the difference. Thank you for making our family complete.',
        avatar: '/assets/img/avatar_1.png',
        name: 'Family from New Delhi, India',
        position: 'Grateful Parents',
        videoUrl: 'https://www.youtube.com/watch?v=GzfaoO4W_D8', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_3')
      },
    ],
  };

  const whyChooseUsData = {
    familyImage: '/assets/img/happy_family.png', // Please replace with actual family image
    whyChooseHeading: 'WHY CHOOSE US?',
    whyChooseText: 'Seeds of Innocens has always been the encouraged choice. Founded in 2015 by the second generation of the promoter family, Dr. Gauri Agarwal and Dr. Rajat Arora, Seeds of Innocens is the India\'s best IVF centre. Seeds of Innocens has grown to over 35 centres across 8 states and has expanded overseas to Oman, Muscat, and Zambia. It is the only lab in North India that has collaborated with the Department of Reproductive Sciences, University of Gent, Belgium, for the exchange of best practices and technology in infertility.',
    callUsLink: 'tel:+919810350512',
    callUsText: 'CALL US',
    selfCycleHeading: 'VISION AND MISSION',
    selfCycleText: 'At Seeds of Innocens, we believe in fulfilling the dreams of couples who are facing difficulty in conceiving. We believe in a future where advancements in medicine are delivered with a human touch, an end to infertility becoming less of an end and more of a beginning. Our vision is to bring happiness to everyone',
    bookAppointmentLink: '/contact/book-appointment',
    bookAppointmentText: 'BOOK AN APPOINTMENT',
    selfieImage: '/assets/img/self_cycle_selfie.png', // Please replace with actual selfie image
    // speechBubbleText: 'Self-cycle™ IVF means\nA baby with your genes,\ntraits and quirks.',
  };

  const geneticsData = {
    cards: [
      {
        title: 'Male Infertility',
        imageUrl: '/assets/img/Male Infertility1.png',
        bgColor: '#24608f',
        description: 'Male infertility accounts for about 50% of infertility cases. It\'s not a reflection of masculinity, but a medical condition that can be treated. Early assessment and treatment are crucial for successful outcomes. Let\'s end the stigma together!',
        highlightText: 'Let\'s end the stigma together!',
        // primaryButton: {
        //   text: 'Talk to our Andrologist today!',
        //   link: '/advanced-fertility-care/male-infertility/',
        // },
        secondaryButton: {
          text: 'Learn More',
          link: '/male-infertility-treatment-in-india',
        },
      },
      {
        title: 'Egg freezing',
        bgColor: '#E45352',
        imageUrl: '/assets/img/Egg freezing1.png',
        description: 'Egg freezing is a smart, science-backed way to preserve your fertility on your terms. Whether you\'re focusing on your career, waiting for the right time, or facing medical reasons, egg freezing gives you control over your future.',
        highlightText: 'Your fertility, Your choice!',
        // primaryButton: {
        //   text: 'Talk to our experts!',
        //   link: '/advanced-fertility-care/egg-freezing/',
        // },
        secondaryButton: {
          text: 'Learn More',
          link: '/egg-freezing',
        },
      },
    ],
  };

  const credibilityData = {
    subtitle: 'RECOGNIZED AND AWARDED',
    title: '',
    description: '',
    leftImage: '/assets/img/decorative-left.png', // Add your left decorative image path here
    rightImage: '/assets/img/decorative-right.png', // Add your right decorative image path here
    logos: [
      {
        // title: 'TIMES HEALTHCARE ACHIEVERS',
        // subtitle: 'DELHI NCR 2020',
        image: '/assets/img/Times-Healthcare-Achievers.png',
      },
      {
        // title: 'NATIONAL FERTILITY AWARDS',
        // subtitle: 'Healthworld.com',
        image: '/assets/img/National-Fertility-Awards-2022.png',
      },
      {
          // title: 'INDIAN FERTILITY SOCIETY',
          // subtitle: 'IFS',
        image: '/assets/img/Indian-Fertility-Society.png',
      },
      {
        // title: 'ASSOCIATION OF OBSTETRICIANS AND GYNAECOLOGISTS OF DELHI',
        // subtitle: 'AOGD',
        image: '/assets/img/Association-of-Obstetricians-And-Gynaecologists-of-Delhi.png',
      },
      {
        // title: 'दैनिक जागरण',
        // subtitle: 'Dainik Jagran',
        image: '/assets/img/Screenshot_2025-05-02_155258-removebg-preview.png',
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

      {/* 4. Why Choose Us Section */}
      <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
        className={'cs_why_choose_us_section'}
      >
        <WhyChooseUsSection data={whyChooseUsData} />
      </Section>

      {/* 5. Treatments Overview */}
      <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
        className={''}
        id="fertility-treatments"
      >
        <Service cardBg={'cs_gray_bg'} data={serviceData} />
      </Section>

      {/* 5.5. Male Infertility & Egg Freezing Section */}
      <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
        className={'cs_service_feature_section'}
      >
        <GeneticsSection data={geneticsData} />
      </Section>

      

      {/* 6. Centres Overview */}
      <Section 
      topSpaceLg="60" 
      topSpaceMd="70" 
      bottomSpaceLg="40" 
      bottomSpaceMd="50" 
      className="cs_tabs">
        <ProjectSection data={projectData} />
      </Section>

      {/* 7. Testimonials Preview */}
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

      {/* 8. Blogs Preview */}
      <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
      >
        <BlogSection data={blogsData} />
      </Section>

      {/* 9. Credibility Section */}
      <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
        className={'cs_credibility_section'}
      >
        <CredibilitySection data={credibilityData} />
      </Section>

      {/* 10. News and Media */}
      <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
      >
        <NewsMediaSection data={newsMediaData} />
      </Section>

        </div>
    );
};

export default page;