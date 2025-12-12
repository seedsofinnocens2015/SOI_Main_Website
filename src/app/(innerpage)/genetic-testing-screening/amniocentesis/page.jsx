import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Amniocentesis',
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
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/genetic.jpg',
    '/assets/img/genetic.jpg'
  ],
};

const amniocentesisContentData = {
  sections: [
    {
      heading: 'What is Amniocentesis?',
      paragraphs: [
        'A prenatal test called amniocentesis is carried out in the second trimester, usually between weeks 15 and 20 of pregnancy. Using a fine needle, a tiny amount of amniotic fluid is extracted from the womb. Fetal cells and proteins found in this fluid offer crucial details regarding the genetic well-being of the unborn child.',
      ],
      sideImage: '/assets/img/genetic.jpg',
    },
    {
      heading: 'Why is Amniocentesis Done?',
      paragraphs: [
        'This test is advised in some circumstances for the following:',
      ],
      listItems: [
        'To test chromosomal anomalies such as Down syndrome, Edwards syndrome, and Patau syndrome.',
        'To test genetic disorder conditions like sickle cell anaemia, cystic fibrosis, or Tay-Sachs disease.',
        'To assess neuro-tube anomalies, such as spina bifida.',
        'This test can be used to assess fetal lung maturity in high-risk conditions.',
        'Confirming infection or Rh incompatibility problems.',
      ],
    },
    {
      heading: 'Expert Care at Seeds of Innocens',
      paragraphs: [
        'At Seeds of Innocens, our fetal medicine specialists will make the pregnancy test as safe and comfortable as possible, with precision.',
      ],
    },
    {
      heading: 'How is Amniocentesis Performed?',
      paragraphs: [
        'The procedure is simple and takes about 15 to 20 minutes.',
      ],
      listItems: [
        'The ultrasound identifies the baby and the safest point for withdrawing fluid.',
        'A thin, sterile needle is inserted gently through the abdomen into the amniotic sac.',
        'A small sample of amniotic fluid was withdrawn for laboratory analysis.',
        'The mother can rest during the day and return to regular activities the following day with only mild restrictions.',
      ],
    },
    {
      heading: 'State-of-the-Art Laboratory',
      paragraphs: [
        'Our state-of-the-art genetic testing laboratory at Seeds of Innocens ensures accurate and timely results, enabling early intervention when necessary.',
      ],
    },
    {
      heading: 'Is Amniocentesis Safe?',
      paragraphs: [
        'Amniocentesis is a widely performed and safe procedure when conducted by experienced professionals. While there is a small risk of complications (such as cramping or mild fluid leakage), our specialized team at Seeds of Innocens takes every precaution to minimize risks and provide comprehensive post-procedure care.',
      ],
    },
    {
      heading: 'Why Choose Seeds of Innocens for Amniocentesis?',
      paragraphs: [
        'At Seeds of Innocens, we are committed to providing advanced genetic testing with unmatched expertise and care. Our key advantages include:',
      ],
      listItems: [
        'Highly experienced fetal medicine specialists ensuring precision and safety.',
        'Cutting-edge genetic testing lab for fast and accurate results.',
        'Compassionate counselling and support throughout the process.',
        'Personalized care plans for high-risk pregnancies based on results.',
      ],
    },
    {
      heading: 'Empowering Parents with Knowledge',
      paragraphs: [
        'We believe in empowering parents with knowledge and helping them make informed decisions about their pregnancy.',
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'At Seeds of Innocens, we are here to guide you through every step of your pregnancy. If you have concerns about your baby\'s health, book a consultation with our experts today. Your peace of mind starts with knowledge!',
        'With years of experience in reproductive health and fetal medicine, Seeds of Innocens offers a comprehensive range of genetic screening tests to help parents make informed choices. Our commitment to cutting-edge technology and personalized care ensures you receive the best prenatal healthcare possible.',
        'Our highly skilled specialists understand that each pregnancy is different. This is why we provide personalized consultation for expecting parents to know and make informed choices regarding the various options and the right testing methods available. Amniocentesis is one of many advanced diagnostic tools that we have for clarity and confidence on the part of parents.',
        'Above all these, Seeds of Innocens offer appropriate fertility services in the form of IVF, egg donation, and surrogacy among others making us the most sought-after name in reproductive health, which has a prime quality department with the latest laboratories and the best experts to ensure that everyone gets the best results for their family.',
        'Contact Us if you or a loved one are contemplating Amniocentesis or any other prenatal genetic test. Our professionals are ready to provide you with professional advice, compassionate care, and leading-edge medical support. We are committed to delivering world-class prenatal care and the best interest of your baby\'s health.',
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
              <IVFContentSection data={amniocentesisContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
