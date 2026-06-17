import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';
import { getSeoMetadata } from '@/app/utils/seoMetadata';
import TrainingProgramPageContent from '../TrainingProgramPageContent';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/training-academy/embryologist-training-program',
    hierarchyCandidates: [['Training Academy'], []],
  });
}

const headingData = {
  title: 'Embryologist Training Program',
};

const embryologistContentData = {
  sections: [
    {
      heading: 'About the Embryologist Training Program',
      paragraphs: [
        'The embryologist course details Program is a specialized course designed for individuals aspiring to work in clinical embryology and assisted reproductive technology (ART). This program provides hands-on training in embryo handling, IVF techniques, cryopreservation, and laboratory procedures essential for fertility treatments.',
      ],
    },
    {
      heading: 'Duration and Cost',
      paragraphs: [
        'Course Duration: 3 Months',
        'Course Duration: 1 Year',
      ],
    },
    {
      heading: 'You Will Learn',
      paragraphs: [
        'This program covers key aspects of embryology, including:',
      ],
      listItems: [
        'Sperm and Oocyte Handling – Techniques for gamete collection, evaluation, and preparation.',
        'In-vitro fertilisation (IVF) & ICSI – Mastering embryo culture and micromanipulation techniques.',
        'Embryo Freezing & Thawing (Cryopreservation) – Vitrification techniques for embryo storage.',
        'Embryo Grading & Transfer Techniques – Selection and implantation of high-quality embryos.',
        'Quality Control in ART Labs – Maintaining laboratory standards for successful IVF outcomes.',
      ],
    },
    {
      heading: 'Who Can Apply?',
      paragraphs: [
        'The Certified Andrology Training program is ideal for:',
      ],
      listItems: [
        'Graduates/Postgraduates in Life Sciences, Biotechnology, Reproductive Biology, or MSc Clinical embryology.',
        'Medical professionals looking to specialize in male fertility treatments.',
      ],
    },
    {
      heading: 'Hands-On Training',
      paragraphs: [
        'At Seeds of Innocens, we focus on practical learning with live demonstrations and lab-based training in a state-of-the-art IVF laboratory. Trainees gain expertise in handling embryos, performing micromanipulation, and ensuring high success rates in ART treatments.',
      ],
    },
    {
      heading: 'Why Choose Us?',
      paragraphs: [
        'Our Embryologist Training Program offers exceptional benefits:',
      ],
      listItems: [
        'Learn from leading embryologists and fertility experts.',
        'Hands-on experience with advanced lab technologies.',
        'Industry-recognized certification to advance your career in reproductive medicine.',
      ],
    },
    {
      heading: 'Join Our Training Program',
      paragraphs: [
        'Join our Embryologist Training Program and step into the world of fertility science with confidence and expertise!',
        'At Seeds of Innocens, we are committed to providing comprehensive training that prepares you for a successful career in clinical embryology. Our program combines theoretical knowledge with extensive hands-on practice in a real-world IVF laboratory setting.',
        'Whether you are a recent graduate looking to enter the field of reproductive medicine or an experienced professional seeking to enhance your skills, our Embryologist Training Program provides the foundation you need to excel in this specialized and rewarding field.',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.webp"
      >
        <PageHeading data={headingData} />
      </Section>

      <TrainingProgramPageContent
        contentData={embryologistContentData}
        defaultProgram="embryologist-training"
      />
    </div>
  );
};

export default page;
