import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Karyotyping',
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

const karyotypingContentData = {
  sections: [
    {
      heading: 'Karyotyping: A Key Genetic Test for Understanding Chromosomal Health',
      paragraphs: [
        'Genetic testing in diagnosing possible chromosomal aberrations that have an impact on health, fertility, and the pregnancy process should be done with utmost importance. One of them is Karyotyping, wherein a detailed picture of an individual\'s chromosomes is analyzed to observe genetic disorders, which is even more valuable during recurrent miscarriage, infertility, or unexplained medical conditions.',
      ],
      sideImage: '/assets/img/Karyotyping.jpg',
    },
    {
      heading: 'What is Karyotyping?',
      paragraphs: [
        'Karyotyping is a laboratory test to view a person\'s chromosomes. The arrangement and size as well as the shape of chromosomes are analyzed. There are 46 chromosomes in the normal human cell, occurring in 23 pairs. Such abnormal conditions either structurally or in number result in genetic diseases, infertility, and developmental defects.',
      ],
    },
    {
      heading: 'Why is Karyotyping Done?',
      paragraphs: [
        'Doctors advise doing a Karyotype Genetic Test for the following reasons:',
      ],
      listItems: [
        'Genetic Disorders Diagnosis: Down syndrome, Turner syndrome, and Klinefelter syndrome are some conditions that can be identified through karyotyping.',
        'Investigating Infertility: Investigations on Infertility Karyotyping Assists to Diagnose Causes of Inability to Conceive Infertility.',
        'Recurrent Miscarriages: A Karyotyping test for miscarriages helps identify if chromosomal issues contribute to pregnancy loss.',
        'Unexplained developmental issues: Children with intellectual disabilities or birth defects may undergo karyotyping for a genetic diagnosis.',
      ],
    },
    {
      heading: 'Karyotyping Procedure: How is the Test Performed?',
      paragraphs: [
        'The process of Karyotyping Procedure would involve the following steps to analyze chromosomes effectively:',
      ],
      listItems: [
        'Sample Collection: The test requires a sample of blood, bone marrow, amniotic fluid, or placental tissue.',
        'Cell Culture: The collected cells are grown in a special medium to induce the replication of chromosomes.',
        'Chromosome Staining: Chromosomes are made visible under a microscope by applying a dye to them',
        'Microscopic Analysis: A genetic specialist arranges and checks the chromosomes for abnormalities.',
        'Report Generation: The test results are summarized into a karyotype chart that reflects any chromosomal changes.',
      ],
    },
    {
      heading: 'Types of Karyotyping Tests',
      paragraphs: [
        'There are different types of karyotyping tests available:',
      ],
      listItems: [
        'Conventional Karyotyping: Standard microscopic examination of chromosomes.',
        'Fluorescence In Situ Hybridization (FISH): Uses fluorescent probes to detect specific chromosomal abnormalities.',
        'Comparative Genomic Hybridization (CGH): Helps identify minute chromosomal imbalances.',
      ],
    },
    {
      heading: 'Karyotyping Test for Miscarriages',
      paragraphs: [
        'Recurrent pregnancy loss is a distressing experience for couples. A Karyotyping test for miscarriages helps determine if chromosomal abnormalities are responsible for pregnancy failures. Common findings include:',
      ],
      listItems: [
        'Aneuploidy: Presence of extra or missing chromosomes (e.g., Trisomy 21 in Down syndrome).',
        'Structural Abnormalities: Deletions, duplications, or translocations of chromosomal material.',
        'Parental Chromosomal Issues: Balanced translocations in parents can lead to repeated miscarriages.',
      ],
    },
    {
      heading: 'Treatment and Intervention',
      paragraphs: [
        'Doctors can recommend suitable interventions for future pregnancies by identifying such genetic issues.',
      ],
    },
    {
      heading: 'Who Should Consider a Karyotyping Test?',
      paragraphs: [
        'Karyotyping is recommended for:',
      ],
      listItems: [
        'Couples who experienced multiple recurrent miscarriages.',
        'People suspected of having genetic syndromes.',
        'Couples struggling with infertility.',
        'Parents of children with developmental disorders.',
        'Pregnant women undergoing prenatal screening.',
      ],
    },
    {
      heading: 'Understanding Karyotyping Test Results',
      paragraphs: [
        'Karyotyping results can show different outcomes:',
      ],
      listItems: [
        'Normal Karyotype: Shows the number of chromosomes as expected, this includes 46, XX in females and 46, XY in males.',
        'Abnormal Karyotype: Indicates chromosomal abnormalities, which may include deletions, duplications, translocations, or aneuploidy.',
        'Mosaicism: Some cells have different chromosomal compositions, leading to varied genetic effects.',
      ],
    },
    {
      heading: 'Karyotyping Test Cost and Availability',
      paragraphs: [
        'The Karyotype Genetic Test can be undertaken at specialized genetic testing centres and fertility clinics. The test ranges in price according to the type of sample collected and complexity analysis, though both the Karyotyping cost is different in country and laboratory. The test generally remains a worthy investment in diagnosing genetic disorders as well as planning future medical care.',
      ],
    },
    {
      heading: 'Limitations of Karyotyping',
      paragraphs: [
        'While karyotyping is a valuable diagnostic tool, it has some limitations:',
      ],
      listItems: [
        'It detects large chromosomal abnormalities but may not identify small genetic mutations.',
        'Some conditions require additional genetic testing, such as whole genome sequencing.',
        'The test may take 1-3 weeks to produce results due to the cell culture process.',
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
              <IVFContentSection data={karyotypingContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
