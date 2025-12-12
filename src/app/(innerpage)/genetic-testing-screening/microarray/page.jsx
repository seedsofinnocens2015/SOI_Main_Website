import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Microarray',
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

const microarrayContentData = {
  sections: [
    {
      heading: 'Microarray: A Revolutionary Genetic Testing Tool',
      paragraphs: [
        'Advances in genetic testing have paved the way for better diagnostics and personalised healthcare. Among these powerful tools is Microarray, a sophisticated genetic test that helps detect genetic variations linked to developmental disorders, chromosomal abnormalities, and prenatal screening. It is very valuable in pregnancy-related diagnostics and provides critical insights for expecting parents.',
      ],
      sideImage: '/assets/img/genetic.jpg',
    },
    {
      heading: 'What is Microarray?',
      paragraphs: [
        'Microarray is a highly sensitive genetic test that simultaneously assesses thousands of DNA sequences with high resolution. It detects tiny deletions and duplications or imbalances not detected by routine tests such as karyotyping. Microarray is widely applied in prenatal diagnosis, postnatal diagnosis, and screening for genetic disorders.',
      ],
    },
    {
      heading: 'Why is Microarray Testing Important?',
      paragraphs: [
        'Microarray testing is recommended for various clinical scenarios, such as:',
      ],
      listItems: [
        'Prenatal Screening: Detects fetal genetic abnormalities, providing parents with vital information about their baby\'s health.',
        'Unexplained Miscarriages: Helps identify chromosomal imbalances that may contribute to pregnancy loss.',
        'Developmental disorders: They diagnose genetic disorders causing problems with growth and neurological development.',
        'Infertility Investigations: Aids in identifying genetic factors affecting reproductive health.',
      ],
    },
    {
      heading: 'Microarray Testing in Pregnancy',
      paragraphs: [
        'Microarray testing has revolutionised prenatal screening by providing detailed genetic information. It is usually done when:',
      ],
      listItems: [
        'There is an abnormal ultrasound finding suggestive of possible genetic problems.',
        'The expecting mother has had recurrent pregnancy losses or a family history of genetic disorders.',
        'Conventional karyotyping results are inconclusive.',
      ],
    },
    {
      heading: 'Microarray Test Cost',
      paragraphs: [
        'The Microarray test pregnancy cost is usually determined by the laboratory and type of analysis needed. However, the test provides very valuable information that helps doctors and parents in making appropriate decisions about pregnancy management.',
      ],
    },
    {
      heading: 'Microarray Testing Procedure',
      paragraphs: [
        'The Microarray test is undertaken in the following steps:',
      ],
      listItems: [
        'DNA Isolation: Genomic material extracted for further testing.',
        'Hybridization: Labelled fluorescent dye is attached with DNA and plated on a chip of microarray containing thousands of DNA probes.',
        'Scanning and Analysis: This chip is detected for variations deletions, or duplications in the sequences of the genomic.',
        'Generation of reports: Detailed report to the concerned doctor highlighting notable genetic findings in a case report.',
      ],
    },
    {
      heading: 'Types of Microarray Testing',
      paragraphs: [
        'Microarray tests are classified based on their genetic analysis approach:',
      ],
      listItems: [
        'Comparative Genomic Hybridization (CGH) Microarray: Detects copy number variations (CNVs) like deletions and duplications.',
        'Single Nucleotide Polymorphism (SNP) Microarray: Identifies single base-pair changes that may be linked to genetic diseases.',
        'Expression Microarray: Analyzes gene expression patterns in various conditions.',
      ],
    },
    {
      heading: 'Who Should Consider a Microarray Test?',
      paragraphs: [
        'Microarray testing is recommended for:',
      ],
      listItems: [
        'Pregnant women with abnormal prenatal screening results.',
        'Couples with recurrent pregnancy losses.',
        'Parents of children with unexplained developmental delays or birth defects.',
        'Individuals with a family history of genetic disorders.',
      ],
    },
    {
      heading: 'Microarray vs. Karyotyping: Which One is Better?',
      paragraphs: [
        'Both Microarray and Karyotyping are valuable genetic tests, but they serve different purposes:',
      ],
    },
    {
      heading: 'Key Differences',
      paragraphs: [
        'Resolution: Microarray has higher resolution and detects small genetic changes, while Karyotyping has lower resolution and detects only large abnormalities.',
        'Detection: Microarray finds deletions, duplications, and CNVs, while Karyotyping identifies numerical and structural chromosomal abnormalities.',
        'Application: Microarray is ideal for prenatal and postnatal screening, while Karyotyping is a traditional method for chromosomal analysis.',
      ],
    },
    {
      heading: 'Limitations of Microarray Testing',
      paragraphs: [
        'While Microarray is a powerful diagnostic tool, it has some limitations:',
      ],
      listItems: [
        'Does not detect balanced chromosomal translocations.',
        'Cannot identify single-gene mutations (e.g., cystic fibrosis, sickle cell anaemia).',
        'Requires expert genetic counselling to interpret results accurately.',
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
              <IVFContentSection data={microarrayContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
