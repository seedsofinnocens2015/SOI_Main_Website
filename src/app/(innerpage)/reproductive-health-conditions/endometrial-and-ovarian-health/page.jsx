import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Endometrial and Ovarian Health',
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

const endometrialOvarianHealthContentData = {
  sections: [
    {
      heading: 'Understanding the Endometrium\'s Role in Pregnancy',
      paragraphs: [
        'The endometrium is the inner lining of the uterus where an embryo will implant and grow in pregnancy. A healthy receptive endometrium is crucial to natural conception as well as IVF success. During any IVF cycle, the thickness of the endometrium is kept under meticulous surveillance since it directly impacts implantation.',
      ],
      listItems: [
        'Optimal Thickness for Implantation: An endometrial thickness of 7–10 mm is ideal for embryo transfer during IVF.',
        'Hormonal Influence: Estrogen and progesterone play important roles in preparing the endometrium. Any imbalance of these hormones will lead to a thinner lining or poor receptivity, affecting the chances of pregnancy.',
      ],
      sideImage: '/assets/img/Endometrial and Ovarian Health.webp',
    },
    {
      heading: 'Expert Care at Seeds of Innocens',
      paragraphs: [
        'At Seeds of Innocens, we employ advanced monitoring and hormone therapies to ensure that the endometrial lining is at its healthiest, increasing the likelihood of successful implantation.',
      ],
    },
    {
      heading: 'Ovarian Health and Its Impact on IVF',
      paragraphs: [
        'Ovarian health determines the number and quality of eggs produced. Ovarian function is vital in any fertility treatment because it directly influences the retrieval of eggs and embryo development during IVF.',
      ],
      listItems: [
        'Ovarian Reserve: This is the number of eggs remaining in a woman\'s ovaries. The better the ovarian reserve, the higher the chances of quality eggs in an IVF cycle.',
        'Ovarian Stimulation: In IVF, drugs are used to stimulate the ovaries to produce several eggs. Appropriate stimulation a better quantity of mature eggs, thus increasing the chances of fertilization and subsequent embryo development.',
        'Age and Ovarian Health: Age is a critical factor in ovarian health. With age, the number and quality of eggs decline in a woman. Early intervention and individualized IVF protocols are crucial for improving outcomes.',
      ],
    },
    {
      heading: 'Personalized Treatment at Seeds of Innocens',
      paragraphs: [
        'At Seeds of Innocens, we personalize every IVF cycle based on your ovarian health. Our specialists use advanced diagnostics to assess ovarian reserve and design a stimulation protocol tailored to your needs.',
      ],
    },
    {
      heading: 'Challenges Related to Endometrial and Ovarian Health',
      paragraphs: [
        'A few conditions may affect the ovaries and endometrium, hence difficult conception. The most common problems include:',
      ],
      listItems: [
        'Endometriosis: A condition where tissue similar to the endometrium develops outside the uterus, causing pain and problems with fertility.',
        'Polycystic Ovary Syndrome (PCOS): This is a very common condition that impairs normal ovarian function leading to abnormal ovulation, and hormonal imbalances.',
        'Thin Endometrium: At times, even with proper hormonal treatment, the endometrial lining is thin, thus reducing the chances of implantation.',
        'Poor Ovarian Reserve: Women with diminished ovarian reserve may require specialised protocols or egg donation to conceive.',
      ],
    },
    {
      heading: 'Specialized Treatment at Seeds of Innocens',
      paragraphs: [
        'Our experienced team at Seeds of Innocens offers specialized treatments for conditions like endometriosis and PCOS, ensuring that you receive the best care possible.',
      ],
    },
    {
      heading: 'How Seeds of Innocens Supports Your Fertility Journey',
      paragraphs: [
        'Here, at Seeds of Innocens, we believe in a tailored approach to success. Our fertility experts work with you to understand your unique medical history and tailor your treatment plan according to the same. From improving endometrial receptivity to optimizing ovarian stimulation, our services are high-tech with compassion.',
        'Here\'s what sets us apart:',
      ],
      listItems: [
        'Advanced Monitoring: Our team uses high-precision ultrasound and hormone tests to monitor endometrial and ovarian health throughout the IVF cycle.',
        'Customized Protocols: Every IVF cycle is tailored based on your specific needs to maximize the chances of success.',
        'Comprehensive Support: From fertility counselling to post-treatment care, we\'re with you at every step of your journey.',
      ],
    },
    {
      heading: 'Take the First Step with Seeds of Innocens',
      paragraphs: [
        'Your dream of becoming a parent deserves the best care and support. Whether you\'re facing challenges related to endometrial health, ovarian function, or other fertility concerns, Seeds of Innocens is here to help. Our team of experts is dedicated to offering you the highest level of care, backed by advanced technology and a patient-first approach.',
        'If you\'re ready to take the next step in your fertility journey, visit us at the website and schedule a consultation. Together, let\'s turn your dreams of parenthood into reality.',
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
              <IVFContentSection data={endometrialOvarianHealthContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
