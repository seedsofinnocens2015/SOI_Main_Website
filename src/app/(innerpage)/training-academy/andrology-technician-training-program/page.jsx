import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'Andrology Technician Training Program',
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

const andrologyContentData = {
  sections: [
    {
      heading: 'About the Andrology Technician Training Program',
      paragraphs: [
        'The andrology technician course Program is a specialized course designed for individuals looking to build a career in andrology, a crucial field in reproductive medicine. This course provides in-depth knowledge and hands-on training in sperm analysis, semen preparation, cryopreservation, and other essential techniques required in assisted reproductive technology (ART).',
      ],
    },
    {
      heading: 'Duration and Cost',
      paragraphs: [
        'Course Duration: 1 Month',
      ],
    },
    {
      heading: 'You Will Learn',
      paragraphs: [
        'This program covers key aspects of andrology, including:',
      ],
      listItems: [
        'Semen Collection & Analysis – Understanding sperm morphology, motility, and concentration.',
        'Sperm Preparation Techniques – Processing sperm for IVF, ICSI, and intrauterine insemination (IUI).',
        'Cryopreservation of Sperm – Freezing and storing sperm for future fertility treatments.',
        'Microbial Contamination & Quality Control – Ensuring laboratory safety and accuracy in sperm handling.',
        'Hormonal and Genetic Testing in Andrology – Understanding male reproductive health and fertility challenges.',
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
        'At Seeds of Innocens, we emphasize practical learning through state-of-the-art laboratory sessions. Trainees will gain real-world experience in semen handling, sperm freezing, and advanced sperm selection techniques used in fertility clinics worldwide.',
      ],
    },
    {
      heading: 'Why Choose Us?',
      paragraphs: [
        'Our Andrology Technician Training Program offers exceptional benefits:',
      ],
      listItems: [
        'Expert guidance from top embryologists and andrologists.',
        'Practical exposure to advanced lab equipment.',
        'A career-oriented course to help you excel in the field of reproductive healthcare.',
      ],
    },
    {
      heading: 'Join Our Training Program',
      paragraphs: [
        'Join our Andro-Technician Training Program and become a skilled professional in the field of male fertility and reproductive medicine!',
        'At Seeds of Innocens, we are committed to providing comprehensive training that prepares you for a successful career in andrology. Our program combines theoretical knowledge with extensive hands-on practice in a real-world laboratory setting.',
        'Whether you are a recent graduate looking to enter the field of reproductive medicine or an experienced professional seeking to enhance your skills, our Andrology Technician Training Program provides the foundation you need to excel in this specialized and rewarding field.',
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
              <IVFContentSection data={andrologyContentData} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
