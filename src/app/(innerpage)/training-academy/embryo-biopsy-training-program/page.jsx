import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';
import { getSeoMetadata } from '@/app/utils/seoMetadata';
import TrainingProgramPageContent from '../TrainingProgramPageContent';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/training-academy/embryo-biopsy-training-program',
    hierarchyCandidates: [['Training Academy'], []],
  });
}

const headingData = {
  title: 'Embryo Biopsy Training Program',
};

const embryoBiopsyContentData = {
  sections: [
    {
      heading: 'About the Embryo Biopsy Training Program',
      paragraphs: [
        'The embryo biopsy training Program is a specialized course designed for embryologists and IVF professionals seeking expertise in embryo biopsy techniques for Preimplantation Genetic Testing (PGT). This program provides hands-on training in embryo handling, cell biopsy, and micromanipulation techniques essential for genetic screening in ART (Assisted Reproductive Technology).',
      ],
    },
    {
      heading: 'Duration and Cost',
      paragraphs: [
        'Course Duration: 20 Days',
      ],
    },
    {
      heading: 'You Will Learn',
      paragraphs: [
        'This intensive training program covers:',
      ],
      listItems: [
        'Blastomere and Trophectoderm Biopsy – Techniques for extracting cells from embryos at different developmental stages.',
        'Laser-Assisted Hatching – Using precision laser technology for embryo biopsy.',
        'Handling and Fixation of Biopsied Cells – Safe transfer of cells for genetic analysis.',
        'Quality Control in Embryo Biopsy – Ensuring accurate and contamination-free biopsy procedures.',
        'Preimplantation Genetic Testing (PGT-A, PGT-M, PGT-SR) – Understanding genetic screening for chromosomal abnormalities and inherited diseases.',
      ],
    },
    {
      heading: 'Who Can Apply?',
      paragraphs: [
        'This Embryo Biopsy Training program is ideal for:',
      ],
      listItems: [
        'Clinical Embryologists and IVF lab professionals.',
        'Medical professionals specializing in ART and genetic testing.',
      ],
    },
    {
      heading: 'Hands-On Training',
      paragraphs: [
        'At Seeds of Innocens, we emphasize practical learning through live demonstrations and hands-on training in an advanced IVF laboratory. Trainees gain experience in micromanipulation, biopsy techniques, and quality control measures essential for high-precision genetic testing.',
      ],
    },
    {
      heading: 'Why Choose Us?',
      paragraphs: [
        'Our Embryo Biopsy Training Program offers exceptional benefits:',
      ],
      listItems: [
        'Learn from leading embryologists and PGT experts.',
        'Hands-on training with cutting-edge biopsy and laser-assisted techniques.',
        'Industry-recognized certification to boost your career in reproductive genetics.',
      ],
    },
    {
      heading: 'Join Our Training Program',
      paragraphs: [
        'Join our Embryo Biopsy Training Program to master the latest techniques in genetic screening and enhance IVF success rates!',
        'At Seeds of Innocens, we are committed to advancing the field of reproductive medicine through comprehensive training programs. Our state-of-the-art facilities and experienced instructors ensure that you receive the highest quality education and hands-on experience.',
        'Whether you are looking to enhance your skills, advance your career, or gain expertise in the latest embryo biopsy techniques, our program provides the knowledge and practical experience you need to excel in the field of assisted reproductive technology.',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/EmbryoBiopsyTrainingProgram.webp"
      >
        <PageHeading data={headingData} />
      </Section>

      <TrainingProgramPageContent
        contentData={embryoBiopsyContentData}
        defaultProgram="embryo-biopsy"
      />
    </div>
  );
};

export default page;
