import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'PGT-SR',
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

const pgtSRContentData = {
  sections: [
    {
      heading: 'Understanding PGT-SR: Preimplantation Genetic Testing for Structural Rearrangements',
      paragraphs: [
        'It is essential in family planning to ensure the genetic stability of embryos to help bring about a successful, healthy pregnancy. PGT-SR, or Preimplantation Genetic Testing for Structural Rearrangements, is a specialized test that looks at embryos for possible chromosomal abnormalities produced by structural rearrangements in translocations, deletions, and duplications. Advanced testing aids in identifying embryos with higher probabilities of implantation and subsequent development. At Seeds of Innocens, we provide cutting-edge PGT-SR testing as part of our all-inclusive IVF services, guiding couples toward fulfilling their dreams of parenthood.',
      ],
      sideImage: '/assets/img/PGT-SR1.jpg',
    },
    {
      heading: 'What is PGT-SR Testing?',
      paragraphs: [
        'PGT-SR testing screening for structural rearrangement abnormalities in the DNA, resulting in chromosomal abnormalities, leading to implantation failure, miscarriage, and developmental issues in the fetus. PGT-SR can screen embryos during an IVF cycle, enabling fertility experts to transfer only healthy, well-balanced chromosomal-structure embryos.',
        'This test is particularly beneficial for individuals or couples who:',
      ],
      listItems: [
        'Have a known chromosomal rearrangement.',
        'Have experienced recurrent miscarriages.',
        'Have had unsuccessful IVF cycles due to implantation failure.',
        'Wish to reduce the risk of chromosomal abnormalities in their baby.',
      ],
    },
    {
      heading: 'Why Choose PGT-SR Testing at Seeds of Innocens?',
      paragraphs: [
        'At Seeds of Innocence, we understand that every family\'s journey is unique. We are highly skilled in using advanced genetic testing, such as PGT-SR, to give you the customized care you need. State-of-the-art technology and a compassionate team of experts help us increase your chances of having a successful and healthy pregnancy.',
      ],
    },
    
    {
      heading: 'Finding PGT-SR Testing Near Me',
      paragraphs: [
        'If you are looking for PGT-SR testing near me, look no further than Seeds of Innocence. We have centers across India and provide advanced fertility treatments to families all over. Our dedicated genetic counselors and IVF specialists are here to support you at every step, ensuring you receive the best possible care.',
      ],
    },
    {
      heading: 'PGT-SR Success Rate and Benefits',
      paragraphs: [
        'The PGT-SR success rate is quite promising for couples with structural chromosomal issues. It significantly enhances the implantation rates, risk of miscarriage, and overall outcomes of IVF through the selection of genetically stable embryos.',
        'At Seeds of Innocens, advanced techniques and a tailored approach have seen numerous success stories for families that want to attain their dream of a healthy baby.',
      ],
    },
    {
      heading: 'PGT-A/SR Testing: Understanding the Difference',
      paragraphs: [
        'While both PGT-A (Preimplantation Genetic Testing for Aneuploidy) and PGT-SR are genetic screening methods, they serve distinct purposes:',
      ],
      listItems: [
        'PGT-A screens for aneuploidies (extra or missing chromosomes) and focuses on overall chromosomal balance. It is recommended for older women or recurrent miscarriages.',
        'PGT-SR screens for structural rearrangements in chromosomes and targets specific structural abnormalities. It is recommended for individuals with known chromosomal rearrangements.',
      ],
    },
    {
      heading: 'Choosing the Right PGT Test',
      paragraphs: [
        'Speak with our experts at Seeds of Innocence to determine whether PGT-A/SR testing is the right option for you.',
      ],
    },
    {
      heading: 'How Does PGT-SR Work?',
      paragraphs: [
        'PGT-SR testing is an integral part of the IVF process and involves the following steps:',
      ],
      listItems: [
        'IVF Cycle: Eggs are retrieved and fertilized in the laboratory to create embryos.',
        'Embryo Biopsy: On day 5 or 6 of development, several cells are safely removed from each embryo.',
        'Genetic Analysis: These cells are analyzed for structural rearrangements in the chromosomes.',
        'Embryo Selection: only embryos with balanced chromosomal structures are selected for transfer.',
      ],
      sideImage: '/assets/img/PGT-SR2.jpg',
    },
    {
      heading: 'Benefits of PGT-SR Screening',
      paragraphs: [
        'This careful screening process helps reduce the risk of miscarriage and improves the likelihood of a successful pregnancy.',
      ],
    },
    {
      heading: 'What is the PGT-SR Testing Cost?',
      paragraphs: [
        'The cost of PGT-SR testing varies from case to case, depending on the number of embryos being tested and the complexity of the screened structural rearrangements. In general, it costs between 50,000 and 1,50,000.',
        'At Seeds of Innocens, we strive to make fertility treatments affordable and accessible. We offer transparent pricing and financial support options to help you embark on your journey toward parenthood with greater confidence.',
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'PGT-SR is a powerful tool for any couple seeking to overcome the genetic challenges to a successful pregnancy. Screening for structural rearrangements in the embryo, PGT-SR improves outcomes in IVF and reduces the risk of chromosomal abnormalities.',
        'Seeds of Innocencs offers advanced genetic testing solutions, such as PGT-SR, that help families realize their dream of becoming parents. We are here to guide you everywhere if you take the PGT-SR test. Contact us today and begin your journey toward a healthy, happy family.',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
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
              <IVFContentSection data={pgtSRContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
