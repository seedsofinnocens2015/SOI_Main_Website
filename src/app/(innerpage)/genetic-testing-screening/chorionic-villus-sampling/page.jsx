import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Chorionic Villus Sampling (CVS)',
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

const cvsContentData = {
  sections: [
    {
      heading: 'Chorionic Villus Sampling (CVS): A Vital Prenatal Test',
      paragraphs: [
        'When expecting a baby, ensuring the health and well-being of the child is a top priority for parents. One of the most advanced prenatal tests available today is Chorionic Villus Sampling (CVS), which helps detect genetic disorders early in pregnancy. This procedure provides crucial information about the baby\'s genetic makeup, enabling parents and doctors to make informed decisions about pregnancy management.',
      ],
      sideImage: '/assets/img/Chorionic Villus Sampling (CVS).webp',
    },
    {
      heading: 'What is Chorionic Villus Sampling (CVS)?',
      paragraphs: [
        'Chorionic Villus Sampling (CVS) is a prenatal test performed during the first trimester to diagnose genetic conditions in a developing baby. It involves taking a small tissue sample from the placenta, which contains the same genetic material as the fetus. The test helps identify chromosomal abnormalities like Down syndrome, cystic fibrosis, and other inherited disorders.',
      ],
    },
    {
      heading: 'Why is CVS Done?',
      paragraphs: [
        'CVS is recommended in the following situations:',
      ],
      listItems: [
        'The mother is 35 years or older, increasing the risk of chromosomal disorders.',
        'There is a family history of genetic diseases.',
        'Abnormal results are found in initial pregnancy screenings.',
        'Either parent is a known carrier of a genetic condition.',
      ],
    },
    {
      heading: 'When is CVS Performed?',
      paragraphs: [
        'CVS is usually done between 10 to 13 weeks of pregnancy, earlier than other prenatal tests like amniocentesis. This early detection allows parents to explore medical options sooner if any abnormalities are detected.',
      ],
    },
    {
      heading: 'Types of CVS Procedures',
      paragraphs: [
        'There are two main types of CVS procedures:',
      ],
      listItems: [
        'Transcervical CVS – A thin tube is inserted through the cervix to collect a sample of chorionic villi from the placenta.',
        'Transabdominal CVS – A thin needle is inserted through the abdomen to retrieve a sample from the placenta.',
      ],
    },
    {
      heading: 'Choosing the Right Procedure',
      paragraphs: [
        'The choice of procedure depends on factors like the placenta\'s position and the mother\'s health.',
      ],
    },
    {
      heading: 'How is the CVS Test Performed?',
      paragraphs: [
        'The CVS procedure involves several steps:',
      ],
      listItems: [
        'Preparation: The doctor may perform an ultrasound to locate the placenta and guide the procedure.',
        'Sample Collection: Depending on the type of CVS, a small tissue sample is extracted from the placenta.',
        'Laboratory Testing: The sample is analyzed for genetic and chromosomal abnormalities.',
        'Results & Consultation: Results are typically available within one to two weeks. A genetic counsellor will explain the findings and discuss the next steps.',
      ],
    },
    {
      heading: 'Risks & Considerations',
      paragraphs: [
        'While CVS is generally safe, there are some considerations:',
      ],
      listItems: [
        'Slight risk of miscarriage (less than 1%).',
        'Infection, though very rare.',
        'Cramping or mild discomfort after the procedure.',
      ],
    },
    {
      heading: 'Safety and Expertise',
      paragraphs: [
        'However, with experienced doctors and advanced techniques, CVS is generally safe and provides valuable insights into the baby\'s health.',
      ],
    },
    {
      heading: 'CVS vs. Amniocentesis',
      paragraphs: [
        'Many parents wonder how Chorionic Villus Sampling (CVS) compares to amniocentesis. While both tests check for genetic disorders, key differences include:',
      ],
      listItems: [
        'Timing: CVS is done between 10-13 weeks, while amniocentesis is performed after 15 weeks.',
        'Sample Source: CVS takes placental tissue, while amniocentesis uses amniotic fluid.',
        'Risk Level: Both carry a small risk of miscarriage, but CVS allows for earlier detection and decision-making.',
      ],
    },
    {
      heading: 'Couple Career Screening and CVS',
      paragraphs: [
        'In some cases, couples may undergo Couple Career Screening before pregnancy to determine if they carry genes for inherited disorders. If both partners are carriers of a genetic condition, a Chorionic Villus Sampling (CVS) test can confirm whether the baby has inherited the condition. This combined approach provides comprehensive genetic information, helping parents make informed reproductive choices.',
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
              <IVFContentSection data={cvsContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
