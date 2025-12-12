import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'Embryo Biopsy Training Program',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '',
  serviceDetails: [],
  footerText: '',
  additionalImages: '',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [],
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
              <IVFContentSection data={embryoBiopsyContentData} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
