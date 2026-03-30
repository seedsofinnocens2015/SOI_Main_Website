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
import FAQSection from '../Components/FAQSection';
import blogsDataJson from '../data/blogs.json';


const heroData = {
    primarySlider: [
      {
        bgImageUrl: '/assets/img/banner.png',
        mobileBgImageUrl: '/assets/img/banner.png', // Add mobile image path here
        title: 'YOUR JOURNEY TO<br/>PARENTHOOD STARTS HERE.',
        titleClass: 'cs_single_line_title',
        titleStyle: {
          fontSize: 'clamp(32px, 5vw, 72px)',
          // fontWeight: 'bold',
          textTransform: 'uppercase',
          textAlign: 'center',
          color: '#FFFFFF',
          lineHeight: '1.2',
          letterSpacing: '1px',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.6), 4px 4px 12px rgba(0, 0, 0, 0.5)',
        },
        contactSubtitle:
          'Care that goes beyond pregnancy.',
        subtitleStyle: {
          fontSize: 'clamp(22px, 3.5vw, 32px)',
          textAlign: 'center',
          color: '#FFFFFF',
          // fontWeight: '400',
          marginBottom: '30px',
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.6), 3px 3px 8px rgba(0, 0, 0, 0.5)',
        },
        btnText1: 'Schedule a Visit',
        btnStyle: 'cs_green_btn',
        link: '/contact/book-appointment',
        phoneNumber: '9810350 512',
        phoneLink: 'tel:+919810350512',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
        isCenterLayout: true,
      },
      {
        bgImageUrl: '/assets/img/Banner-2.png',
        mobileBgImageUrl: '/assets/img/Banner-2.png', // Add mobile image path here
        title: 'Experience the Bliss of Parenthood.',
        titleClass: 'cs_single_line_title',
        titleStyle: {
          fontSize: 'clamp(32px, 5vw, 72px)',
          // fontWeight: 'bold',
          textTransform: 'uppercase',
          textAlign: 'center',
          color: '#FFFFFF',
          lineHeight: '1.2',
          letterSpacing: '1px',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.6), 4px 4px 12px rgba(0, 0, 0, 0.5)',
        },
        contactSubtitle:
          'A little miracle of joy awaits you. ',
        subtitleStyle: {
          fontSize: 'clamp(22px, 3.5vw, 32px)',
          textAlign: 'center',
          color: '#FFFFFF',
          // fontWeight: '400',
          marginBottom: '30px',
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.6), 3px 3px 8px rgba(0, 0, 0, 0.5)',
        },
        btnText1: 'Schedule a Visit',
        btnStyle: 'cs_green_btn',
        link: '/contact/book-appointment',
        phoneNumber: '9810350 512',
        phoneLink: 'tel:+919810350512',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
        isCenterLayout: true,
      },
      // {
      //   bgImageUrl: '/assets/img/banner.png',
      //   mobileBgImageUrl: '/assets/img/banner.png', // Add mobile image path here
      //   title: 'Tiny hands, Sweet smile,<br/> and the bliss of a fulfilled dream',
      //   titleClass: 'cs_single_line_title',
      //   titleStyle: {
      //     fontSize: 'clamp(32px, 5vw, 72px)',
      //     // fontWeight: 'bold',
      //     textTransform: 'uppercase',
      //     textAlign: 'center',
      //     color: '#FFFFFF',
      //     lineHeight: '1.2',
      //     letterSpacing: '1px',
      //     textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.6), 4px 4px 12px rgba(0, 0, 0, 0.5)',
      //   },
      //   contactSubtitle:
      //     'Creating beautiful beginings with a smile.',
      //   subtitleStyle: {
      //     fontSize: 'clamp(22px, 3.5vw, 32px)',
      //     textAlign: 'center',
      //     color: '#FFFFFF',
      //     //  fontWeight: '400',
      //     marginBottom: '30px',
      //     textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.6), 3px 3px 8px rgba(0, 0, 0, 0.5)',
      //   },
      //   btnText1: 'Schedule a Visit',
      //   btnStyle: 'cs_green_btn',
      //   link: '/contact/book-appointment',
      //   phoneNumber: '9810350 512',
      //   phoneLink: 'tel:+919810350512',
      //   iconImgUrl: '/assets/img/icons/hero_icon.png',
      //   isCenterLayout: true,
      // },
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
  
  const countersData = {
    badgeText: 'Outstanding cess rates',
    heading: {
      highlighted: '20,000+',
      rest: 'SUCCESS STORIES AND THE JOURNEY CONTINUES.'
    },
    counters: [
      {
        number: '20,000+',
        title: (
          <>
            Healthy Babies,<br />Countless Smiles
          </>
        ),
      },
      {
        number: '35+',
        title: (
          <>
            IVF Centres Spreading<br />Parenthood Joy
          </>
        ),
      },
      {
        number: '78%',
        title: (
          <>
            Success Rate Bringing<br />Hope to Families
          </>
        ),
      },
      {
        number: '30+',
        title: (
          <>
            Dedicated Fertility<br />Specialists
          </>
        ),
      },
    ],
  };
  
  const serviceData = {
    subtitle: 'FERTILITY TREATMENTS',
    title: '',
    description: '',
    designImage: '/assets/img/leaf.png', // Design image for subtitle box background
    services: [
      {
        iconUrl: '/assets/img/icons/IUI, IVF & ICSI.svg',
        index: '01',
        title: 'IUI, IVF & ICSI',
        subHeading: 'In-Vitro Fertilization (IVF) Overview',
        subtitle: '<strong>In-Vitro Fertilization (IVF)</strong> is a method that helps couples with fertility related problems and in conceiving a child. During the IVF treatment, the mature eggs are retrieved from the ovaries of women and sperms from the partner which are further fertilized in the laboratory to make embryos. After a few days, these embryos are transferred into the uterus of the woman.',
        imageUrl: '/assets/img/IVF-ICSI.jpg',
        link: '/fertility-treatments/ivf/',
      },
      {
        iconUrl: '/assets/img/icons/Genetic Testing.svg',
        index: '03',
        title: 'Genetic testing (PGT-A & PGT-M)',
        subHeading: 'Understanding PGT-SR',
        subtitle: '<strong>PGT-SR</strong> is a specialized test that looks at embryos for possible chromosomal abnormalities produced by structural rearrangements in translocations, deletions, and duplications. Advanced testing aids in identifying embryos with higher probabilities of implantation and subsequent development. At Seeds of Innocens, we provide cutting-edge PGT-SR testing as part of our all-inclusive IVF services, guiding couples toward fulfilling their dreams of parenthood.',
        imageUrl: '/assets/img/PGT-A.webp',
        link: '/genetic-testing-screening/genetic-testing/',
      },
      {
        iconUrl: '/assets/img/icons/Blastocyst Transfer.svg',
        index: '04',
        title: 'Blastocyst Transfer',
        subHeading: 'Blastocyst Transfer',
        subtitle: '<strong>Blastocyst Transfer</strong> is an advanced technique where embryos are cultured in the lab for 5-6 days to reach the blastocyst stage before being transferred to the uterus. This stage is considered the most viable for implantation, as it indicates the embryo\'s ability to successfully attach to the uterine wall and grow.',
        imageUrl: '/assets/img/Blastocyst-Transfer.png',
        link: '/fertility-treatments/blastocyst-transfer/',
      },
      {
        iconUrl: '/assets/img/icons/Cryopreservation.svg',
        index: '06',
        title: 'Cryopreservation (Egg, Sperm & Embryos)',
        subHeading: 'Cryopreservation',
        subtitle: '<strong>Cryopreservation</strong> is a process where fertility-related cells, such as eggs, sperm, and embryos, are frozen and stored for future use. This technique allows couples to preserve their fertility and access it when needed, making it an invaluable option for those facing fertility challenges.',
        imageUrl: '/assets/img/Cryopreservation.jpg',
        link: '/ivf-procedures-preservation/cryopreservation/',
      },
      {
        iconUrl: '/assets/img/icons/PRP & Ovarian Rejuvenation.svg',
        index: '08',
        title: 'PRP & Ovarian Rejuvenation',
        subHeading: 'PRP & Ovarian Rejuvenation',
        subtitle: '<strong>PRP & Ovarian Rejuvenation</strong> is an advanced, non-surgical procedure that uses the body’s own healing power to rejuvenate ovarian function. This innovative approach involves injecting Platelet-Rich Plasma (PRP) into the ovaries to stimulate growth, improve blood flow, and enhance overall ovarian health, making it a promising option for couples facing fertility challenges.',
        imageUrl: '/assets/img/PRP-Ovarian-Rejuvenation.jpg',
        link: '/ivf-procedures-preservation/prp/',
      },
      {
        iconUrl: '/assets/img/icons/TESA-PESA.svg',
        index: '02',
        title: 'TESA/PESA',
        subHeading: 'TESA/PESA: Advanced Fertility Treatment for Male Infertility',
        subtitle: '<strong>TESA/PESA</strong> is a specialized surgical procedure that helps in resolving the fertility issues such as TESA/PESA, Semen analysis, PESA, and the treatment for the low sperm count. This technique involves collecting sperm from the testicles or epididymis, allowing for analysis and treatment of male infertility.',
        imageUrl: '/assets/img/TESA-PESA.jpg',
        link: '/male-infertility-treatments/tesa-pesa/',
      },
      {
        iconUrl: '/assets/img/icons/Donor Program.svg',
        index: '05',
        title: 'Donor Program',
        subHeading: 'Donor Program: Third Party Reproduction',
        subtitle: '<strong>Donor Program</strong> is a third-party reproduction option that allows couples to achieve pregnancy through the use of donor sperm, donor eggs, or donor embryos. This approach provides a solution for couples who are unable to conceive naturally, offering hope and a pathway to parenthood.',
        imageUrl: '/assets/img/Donor-Program.jpg',
        link: '/ivf-procedures-preservation/donor-program/',
      },
      {
        iconUrl: '/assets/img/icons/Surrogacy.svg',
        index: '05',
        title: 'Surrogacy',
        subHeading: 'Surrogacy: Ethical, Medically Guided Assistance with Complete End-to-End Care',
        subtitle: '<strong>Surrogacy</strong> is an ethical, medically guided process that provides assistance with complete end-to-end care. This approach allows couples to achieve pregnancy through the use of a surrogate mother, offering hope and a pathway to parenthood.',
        imageUrl: '/assets/img/Surrogacy1.jpg',
        link: '/ivf-procedures-preservation/surrogacy/',
      },
      
      {
        iconUrl: '/assets/img/icons/Genetic Counselling.svg',
        index: '08',
        title: 'Genetic Counselling',
        subHeading: 'Genetic Counselling: Understanding and Managing Genetic Risks in Family Planning',
        subtitle: '<strong>Genetic Counselling</strong> is a process that helps couples understand and manage genetic risks in family planning, assessing family history for inherited conditions guiding them through options. This approach allows couples to make informed decisions about their fertility and family planning.',
        imageUrl: '/assets/img/Genetic-Counselling.jpg',
        link: '/genetic-testing-screening/genetic-factors/',
      },
      {
        iconUrl: '/assets/img/icons/Laparoscopy & Hysteroscopy.svg',
        index: '07',
        title: 'Laparoscopy & Hysteroscopy',
        subHeading: 'Laparoscopy & Hysteroscopy',
        subtitle: '<strong>Laparoscopy & Hysteroscopy</strong> is a minimally invasive surgical procedure that helps diagnose and treat problems such as fibroids, blocked tubes, and endometriosis. This technique involves inserting a laparoscope or hysteroscope through the vagina to visualize the uterus and pelvic organs, allowing for precise diagnosis and treatment.',
        imageUrl: '/assets/img/Laparoscopy-Hysteroscopy.jpg',
        link: '/surgeries/hysteroscopy/',
      },
      
      
      
     
    ],
    footerIcon: '',
    footerText: '',
    footerLink: '',
    footerLinkText: '',
  };
  
  const projectData = {
    title: '',
    subtitle: 'Across Multiple Locations',
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
            link: '/delhi/best-ivf-centre-in-malviyanagar',
          },
          {
            imgUrl: '/assets/img/Centres/ghaziabad.jpg',
            title: 'Ghaziabad, Uttar Pradesh',
            subtitle:
              'Seeds of Innocens IVF, Yashoda Hospital Opp. Nehru Stadium, Nehru Nagar, Ghaziabad, U.P.-201001',
            index: 2,
            coordinates: [28.6692, 77.4538], // Ghaziabad coordinates
            link: '/uttar-pradesh/best-ivf-centre-in-ghaziabad',
          },
          {
            imgUrl: '/assets/img/Centres/gurgaon.jpg',
            title: 'Gurgaon, Haryana',
            subtitle:
              'Seeds of Innocens IVF, Plot No. -2, Sector-42, Gurgaon Near Nagar, Nigam Office Gurugram, Haryana-122001',
            index: 3,
            coordinates: [28.4089, 77.0378], // Gurgaon coordinates
            link: '/haryana/best-ivf-centre-in-gurgaon',
          },
          {
            imgUrl: '/assets/img/Centres/faridabad.jpg',
            title: 'Faridabad, Haryana',
            subtitle:
              'Seeds of Innocens IVF, A-6/A Neelam Bata Road, Above ICICI Bank, NIT Faridabad, Haryana-121001',
            index: 4,
            coordinates: [28.4089, 77.3167], // Faridabad coordinates
            link: '/haryana/best-ivf-centre-in-faridabad',
          },
          {
            imgUrl: '/assets/img/Centres/jankpuri.jpg',
            title: 'Janakpuri, Delhi',
            subtitle:
              'Seeds of Innocens IVF, C1A/50A, Pankha Road, Janakpuri, New Delhi-110058',
            index: 5,
            coordinates: [28.6219, 77.0882], // Janakpuri coordinates
            link: '/delhi/best-ivf-centre-in-janakpuri',
          },
          {
            imgUrl: '/assets/img/Centres/pitampura.jpg',
            title: 'Pitampura, Delhi',
            subtitle:
              'Seeds of Innocens IVF, Plot no 1, First floor, Shiva Enclave, Near Harsh Vihar Chowk, Pitampura, Delhi-110034',
            index: 6,
            coordinates: [28.6989, 77.1398], // Pitampura coordinates
            link: '/delhi/best-ivf-centre-in-pitampura',
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
            link: '/uttar-pradesh/best-ivf-centre-in-gorakhpur',
          },
          {
            imgUrl: '/assets/img/Centres/lucknow.jpg',
            title: 'Lucknow, Uttar Pradesh',
            subtitle:
              'Drosia Tower, 5/5, Park Rd, Raj Bhavan Colony, Hazratganj, Lucknow, Uttar Pradesh 226001',
            index: 2,
            coordinates: [26.8467, 80.9462], // Lucknow coordinates
            link: '/uttar-pradesh/best-ivf-centre-in-lucknow',
          },
          {
            imgUrl: '/assets/img/Centres/kanpur.jpg',
            title: 'Kanpur, Uttar Pradesh',
            subtitle:
              '7/153, Kumhar Wali gali, Kanpur Vidya Mandir, Khalasi Line, Swaroop Nagar, Kanpur, Uttar Pradesh 208002',
            index: 3,
            coordinates: [26.4499, 80.3319], // Kanpur coordinates
            link: '/uttar-pradesh/best-ivf-centre-in-kanpur',
          },
          {
            imgUrl: '/assets/img/Centres/meerut.jpg',
            title: 'Meerut, Uttar Pradesh',
            subtitle:
              'building 303/305, 2nd floor, Mangal Pandey Nagar, Ramgarhi, Meerut, Uttar Pradesh 250004',
            index: 4,
            coordinates: [28.9845, 77.7064], // Meerut coordinates
            link: '/uttar-pradesh/best-ivf-centre-in-meerut',
          },
          {
            imgUrl: '/assets/img/Centres/agra.jpg',
            title: 'Agra, Uttar Pradesh',
            subtitle:
              '1st Floor, Shankar Point, Block No.9/4, Sanjay Palace, Sanjay Place, Civil Lines, Agra, Uttar Pradesh 282002',
            index: 5,
            coordinates: [27.1767, 78.0081], // Agra coordinates
            link: '/uttar-pradesh/best-ivf-centre-in-agra',
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
            link: '/kerala/best-ivf-centre-in-kochi',
          },                           
          {
            imgUrl: '/assets/img/Centres/kasaragod.jpg',
            title: 'Kasaragod, Kerala',
            subtitle:
              'Seeds of Innocens IVF, Wintouch Multi Speciality Hospital, Bank Road, Kasaragod, Kerala, 671121',
            index: 2,
            coordinates: [12.4984, 74.9894], // Kasaragod coordinates
            link: '/kerala/best-ivf-centre-in-kasaragod',
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
            link: '/assam/best-ivf-centre-in-guwahati',
          },
          {
            imgUrl: '/assets/img/Centres/haldwani.jpg',
            title: 'Haldwani, Uttarakhand',
            subtitle:
              '2nd Floor, Laxmi Mohan Towers, Chauraha, Bamori Talli, Ganesh Vihar, Heera Nagar, Mukhani, Haldwani, Uttarakhand 263139',
            index: 2,
            coordinates: [29.2227, 79.5156], // Haldwani coordinates
            link: '/uttarakhand/best-ivf-centre-in-haldwani',
          },
          {
            imgUrl: '/assets/img/Centres/ranchi.jpg',
            title: 'Ranchi, Jharkhand',
            subtitle:
              '4th Floor, Maru Tower, Kanke Rd, Ranchi, Jharkhand 834008',
            index: 3,
            coordinates: [23.3441, 85.3096], // Ranchi coordinates
            link: '/jharkhand/best-ivf-centre-in-ranchi',
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
            link: '/bihar/best-ivf-centre-in-muzaffarpur',
          },
          {
            imgUrl: '/assets/img/Centres/patna.jpg',
            title: 'Patna, Bihar',
            subtitle:
              'Pillar no: 38, Jagmano Shree Complex, Bailey Rd, Samanpura, Khajpura, Patna, Bihar 800014',
            index: 1,
            coordinates: [25.5941, 85.1376], // Patna coordinates
            link: '/bihar/best-ivf-centre-in-patna',
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
            link: '/best-ivf-centre-in-lusaka-zambia',
          },
          {
            imgUrl: '/assets/img/Centres/kitwe.jpg',
            title: 'Kitwe, Zambia, Africa',
            subtitle:
              'Seeds of Innocens IVF, Kitwe, Zambia, Africa',
            index: 2,
            coordinates: [-12.8147, 28.2136], // Kitwe coordinates
            link: '/best-ivf-centre-in-kitwe-zambia',
          },
          {
            imgUrl: '/assets/img/Centres/muscat.jpg',
            title: 'Mabela, Muscat, Oman',
            subtitle:
              'Seeds of Innocens IVF, Mabela, Muscat, Oman',
            index: 3,
            coordinates: [23.5880, 58.3829], // Muscat coordinates
            link: '/best-ivf-centre-in-mabela-muscat',
          },
        ],
      },
    ],
  };
  
  const newsMediaData = {
    sectionTitle: {
      part1: 'GET EXPERT KNOWLEDGE',
      part2: 'ON FERTILITY TESTS AND TREATMENTS',
    },
    sectionSubtitle: 'watch these informative videos from our fertility specialists.',
    videos: [
      {
        videoUrl: 'https://www.youtube.com/watch?v=OpgqOL4fpoU&t=75s', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_1')
        title: 'The Lallantop Show', // Optional: Video title
        description: 'Seeds of Innocens- IVF Centre', // Optional: Video description
        date: '144k views  1 year ago', // Optional: Video date
      },
      {
        videoUrl: 'https://www.youtube.com/watch?v=E04J-XxA1Y0', //Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_2')
        title: 'The Lallantop Show', // Optional: Video title
        description: 'Seeds of Innocens- IVF Centre', // Optional: Video description
        date: '144k views  1 year ago', // Optional: Video date
      },
      {
        videoUrl: 'https://www.youtube.com/watch?v=9_K6ksAefj4', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_3')
        title: 'The Lallantop Show', // Optional: Video title
        description: 'Seeds of Innocens- IVF Centre', // Optional: Video description
        date: '144k views  1 year ago', // Optional: Video date
      },
      {
        videoUrl: 'https://www.youtube.com/watch?v=PzkrtU5dchg', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_4')
        title: 'The Lallantop Show', // Optional: Video title
        description: 'Seeds of Innocens- IVF Centre', // Optional: Video description
        date: '144k views  1 year ago', // Optional: Video date
      },
    ],
  };

  // Same Hindi detection as (innerpage)/hindi/[slug]/page.jsx — links use /hindi/ or /english/
  const isHindiBlog = (blog) =>
    blog.category === 'प्रजनन क्षमता' ||
    /[\u0900-\u097F]/.test(blog.title || '') ||
    /[\u0900-\u097F]/.test(blog.content || '');

  const blogsData = {
    sectionTitle: 'LATEST BLOGS',
    sectionSubtitle: '',
    designImage: '/assets/img/leaf.png', // Design image for right side background
    postsData: blogsDataJson.blogs
      .slice()
      .reverse()
      .slice(0, 8)
      .map((blog) => ({
        title: blog.title,
        subtitle: blog.excerpt,
        date: blog.date,
        category: blog.category,
        author: blog.author,
        thumbnail: blog.image,
        btnText: 'Read More',
        postLink: isHindiBlog(blog)
          ? `/hindi/${blog.slug}`
          : `/english/${blog.slug}`,
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      })),
  };


  const testimonialData = {  
    sectionTitle: {
      part1: 'HAPPY FAMILIES',
      part2: 'ABOUT US',
    },
    sectionSubtitle: {
      part1: 'Thank you for trusting us with your journey.',
      part2: 'Please leave us a 5-star review to help others on their path to parenthood.',
    },
    description: '',
    thumbnail: '/assets/img/new.svg',
    testimonials: [
      {
        rating: 5,
        subtitle:
          'Seeds of Innocens gave us the gift of parenthood. The doctors were compassionate, the staff was supportive, and the treatment was excellent. We are forever grateful for our beautiful baby.',
        avatar: '/assets/img/1.png',
        name: 'Couple from Sydney, Australia',
        position: 'Successful Parents',
        videoUrl: 'https://www.youtube.com/watch?v=0XD9OrkunWI', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_1')
      },
      {
        rating: 5,
        subtitle:
          'The entire team at Seeds of Innocens made our IVF journey smooth and stress-free. Their expertise and care helped us achieve our dream of becoming parents. Highly recommended!',
        avatar: '/assets/img/2.png',
        name: 'Parents from Jharkhand, India',
        position: 'Happy Parents',
        videoUrl: 'https://www.youtube.com/watch?v=wmZZrZFaGB8', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_2')
      },
      {
        rating: 5,
        subtitle:
          'After years of trying, we found hope at Seeds of Innocens. The personalized care and advanced treatment options made all the difference. Thank you for making our family complete.',
        avatar: '/assets/img/3.png',
        name: 'Family from New Delhi, India',
        position: 'Grateful Parents',
        videoUrl: 'https://www.youtube.com/watch?v=GzfaoO4W_D8', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_3')
      },
      {
        rating: 5,
        subtitle:
          'Seeds of Innocens gave us the gift of parenthood. The doctors were compassionate, the staff was supportive, and the treatment was excellent. We are forever grateful for our beautiful baby.',
        avatar: '/assets/img/4.png',
        name: 'Couple from Sydney, Australia',
        position: 'Successful Parents',
        videoUrl: 'https://www.youtube.com/watch?v=0XD9OrkunWI', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_1')
      },
      {
        rating: 5,
        subtitle:
          'The entire team at Seeds of Innocens made our IVF journey smooth and stress-free. Their expertise and care helped us achieve our dream of becoming parents. Highly recommended!',
        avatar: '/assets/img/5.png',
        name: 'Parents from Jharkhand, India',
        position: 'Happy Parents',
        videoUrl: 'https://www.youtube.com/watch?v=wmZZrZFaGB8', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_2')
      },
      {
        rating: 5,
        subtitle:
          'After years of trying, we found hope at Seeds of Innocens. The personalized care and advanced treatment options made all the difference. Thank you for making our family complete.',
        avatar: '/assets/img/6.png',
        name: 'Family from New Delhi, India',
        position: 'Grateful Parents',
        videoUrl: 'https://www.youtube.com/watch?v=GzfaoO4W_D8', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_3')
      },
      {
        rating: 5,
        subtitle:
          'After years of trying, we found hope at Seeds of Innocens. The personalized care and advanced treatment options made all the difference. Thank you for making our family complete.',
        avatar: '/assets/img/7.png',
        name: 'Family from New Delhi, India',
        position: 'Grateful Parents',
        videoUrl: 'https://www.youtube.com/watch?v=GzfaoO4W_D8', // Add YouTube video URL here (e.g., 'https://www.youtube.com/watch?v=VIDEO_ID_3')
      },
    ],
  };

  const whyChooseUsData = {
    familyImage: '/assets/img/shoegirl.svg', // Please replace with actual family image
    designImage: '/assets/img/leaf.png', // Design image for left side background
    whyChooseHeading: 'WHY CHOOSE US?',
    whyChooseText: [
      'Seeds of Innocens has always been the encouraged choice',
      'Founded in 2015 by the second generation of the promoter family, Dr. Gauri Agarwal and Dr. Rajat Arora',
      'Seeds of Innocens is India\'s best IVF centre',
      'Grown to over 35 centres across 8 states',
      'Expanded overseas to Oman, Muscat, and Zambia',
      'Only lab in North India that has collaborated with the Department of Reproductive Sciences, University of Gent, Belgium, for the exchange of best practices and technology in infertility'
    ],
    callUsLink: 'tel:+919810350512',
    callUsText: 'CALL US',
    selfCycleHeading: 'VISION AND MISSION',
    selfCycleText: 'At Seeds of Innocens, we believe in fulfilling the dreams of couples who are facing difficulty in conceiving. We believe in a future where advancements in medicine are delivered with a human touch, an end to infertility becoming less of an end and more of a beginning. Our vision is to bring happiness to everyone',
    bookAppointmentLink: '/contact/book-appointment',
    bookAppointmentText: 'BOOK AN APPOINTMENT',
    selfieImage: '/assets/img/babywithgirl.svg', // Please replace with actual selfie image
    // speechBubbleText: 'Self-cycle™ IVF means\nA baby with your genes,\ntraits and quirks.',
  };

  const faqData = {
    sectionTitle: {
      part1: 'HAVE ANY QUESTIONS?',
      part2: 'OUR EXPERTS ARE HAPPY TO GUIDE YOU.',
    },
    designImage: '/assets/img/leaf.png', // Design image for left side background
    faqCategories: [
      {
        icon: '/assets/img/icons/ffc.svg',
        title: 'Female Frequently Asked Questions',
        description: 'Details on ovarian function, egg retrieval, reproductive health, and treatment planning.',
        link: '/female-faqs',
      },
      {
        icon: '/assets/img/icons/mfc.svg',
        title: 'Male Frequently Asked Questions',
        description: 'Insights into male reproductive health, semen analysis, diagnostic tests, and care.',
        link: '/male-faqs',
      },
      {
        icon: '/assets/img/icons/cgt.svg',
        title: 'Genetic Frequently Asked Questions',
        description: 'Information on genetic screening, inherited conditions, embryo testing, and risk assessment.',
        link: '/genetic-faqs',
      },
      {
        icon: '/assets/img/icons/fa.svg',
        title: 'Learning Frequently Asked Questions',
        description: 'Structured learning on reproductive health and assisted fertility.',
        link: '/learning-faqs',
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
          'cs_cta cs_style_1 cs_white_bg position-relative overflow-hidden'
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

       {/* 8. Blogs Preview */}
       <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
      >
        <BlogSection data={blogsData} />
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

       {/* 7. Testimonials Preview */}
       <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
        className="cs_testimonial_area"

      >
        <TestimonialSection data={testimonialData} />
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

      {/* 8. FAQ Section */}
      <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
        className="cs_faq_area"
      >
        <FAQSection data={faqData} />
      </Section>

      {/* 5.5. Male Infertility & Egg Freezing Section */}
      {/* <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
        className={'cs_service_feature_section'}
      >
        <GeneticsSection data={geneticsData} />
      </Section> */}

      

     

     

     

      {/* 9. Credibility Section */}
      {/* <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
        className={'cs_credibility_section'}
      >
        <CredibilitySection data={credibilityData} />
      </Section> */}

     

        </div>
    );
};

export default page;