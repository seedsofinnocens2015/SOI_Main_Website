import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Monitoring in an IUI Cycle',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/genetic.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/genetic.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/genetic.jpg',
    '/assets/img/genetic.jpg'
  ],
};

const monitoringIuiCycleContentData = {
  sections: [
    {
      heading: 'Monitoring in an IUI Cycle',
      paragraphs: [
        'Ultrasound: can tell us not only about the ovarian reserve but also helps to adequately monitor the process of follicular and endometrial development and timely administration of human chorionic hormone (HCG).',
        'Monitoring LH, E2, and progesterone during ovulation induction can determine follicular growth and competency, predict poor and hyper-response, and diagnose premature LH surge, premature luteinization. However, these tests are not recommended routinely.',
      ],
      sideImage: '/assets/img/Monitoring in an IUI Cycle.webp',
    },
    {
      heading: 'Follicle Development',
      paragraphs: [
        'A follicle that is>10 mm in diameter grows at a rate of 2 to 3 mm per day, has no internal echogenicity, and has thin (pencil line like) walls is not only more likely to become the leading follicle but will also give mature oocyte. The mean follicular growth rate is ~1.4 mm/day in the spontaneous menstrual cycle and 1.7 mm during ovarian stimulation cycles.',
        'A mature follicle that contains a mature oocyte typically measures~18-24mm, and this is the time when the trigger should be decided. Such follicles may have some internal echoes arising from the shearing of clusters of granulosa cells from the follicular wall.',
      ],
    },
    {
      heading: 'Endometrium Assessment',
      paragraphs: [
        'Endometrium: hypoechogenic texture with a well-defined central line in the proliferative phase, becoming hyperechogenic with no visualization of the central echogenic line in the secretory phase. Triple-line multilayer appearance at the time of ovulation is because of luminal stromal density.',
      ],
    },
    {
      heading: 'Signs of Ovulation',
      paragraphs: [
        'The follicular wall becomes irregular as the follicle becomes "deflated." The fresh corpus luteum usually appears as a hypoechoic structure with an irregular internal wall and may contain some internal free-floating or fixed echoes that correspond to hemorrhage. TVS shows the neovascularity within the wall that is associated with the formation of the corpus luteum.',
        'TVS can also depict the presence of intraperitoneal fluid. Normally approximately 1–3 mL of intraperitoneal fluid is present in the cul-de-sac throughout the cycle. When ovulation occurs, there typically is between 4 and 5 mL within the cul-de-sac. The intraperitoneal fluid resulting from ovulation may be located outside of the posterior cul-de-sac, surrounding bowel loops in the lower abdomen and upper pelvis, or in the anterior cul-de-sac superior to the uterine fundus.',
      ],
    },
    {
      heading: 'Optimal IUI Cycle Parameters',
      paragraphs: [
        'Hence, to conclude, optimal stimulation in the IUI cycle shall have the presence of <4 follicles of size 18-19mm, endometrial thickness ~8-10mm, and trilaminar. We may consider cycle cancellation if more than six follicles or E2 levels are more than 1500pg/ml.',
      ],
    },
    {
      heading: 'Expert Care at Seeds of Innocens',
      paragraphs: [
        'Seeds of Innocens is a leading chain of fertility clinics with several branches across India. Armed with a team of experienced and highly qualified IVF specialists, we are a one-stop solution to all your woes and concerns regarding infertility.',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Main Content Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          {/* Content Section - Centered and Full Width */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={monitoringIuiCycleContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
