import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'IVF Cost & Package Details',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const costContentData = {
  sections: [
    {
      heading: 'Transparent IVF Pricing & Packages',
      paragraphs: [
        'At Seeds of Innocens, we believe in transparent pricing with no hidden costs. Our comprehensive packages are designed to provide complete care at competitive prices. All packages include consultations, procedures, and follow-up care.',
        'We understand that fertility treatment is a significant investment, and we are committed to providing value-driven packages that make quality fertility care accessible to all couples.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Basic IVF Package - ₹1,50,000 - ₹2,50,000',
      paragraphs: [
        'Our Basic IVF Package is suitable for couples with no major complications and includes:',
      ],
      listItems: [
        'Initial consultation and comprehensive evaluation',
        'Ovarian stimulation medications',
        'Egg retrieval procedure',
        'IVF fertilization process',
        'Embryo transfer procedure',
        'Basic monitoring and follow-up consultations',
      ],
    },
    {
      heading: 'Standard IVF Package - ₹2,50,000 - ₹3,50,000',
      paragraphs: [
        'Our most popular choice for comprehensive care, the Standard Package includes everything in the Basic Package plus:',
      ],
      listItems: [
        'ICSI (Intracytoplasmic Sperm Injection) if needed',
        'Extended embryo culture to blastocyst stage',
        'Comprehensive monitoring throughout the cycle',
        'Additional consultations with specialists',
        'Extended follow-up support',
        'Priority appointment scheduling',
      ],
    },
    {
      heading: 'Premium IVF Package - ₹3,50,000 - ₹5,00,000',
      paragraphs: [
        'For couples requiring advanced genetic testing, our Premium Package includes everything in the Standard Package plus:',
      ],
      listItems: [
        'Preimplantation Genetic Testing (PGT)',
        'Embryo freezing with 1 year storage included',
        'Priority scheduling for all appointments',
        'Dedicated care coordinator',
        'Extended follow-up and support',
        'Advanced laboratory techniques',
      ],
    },
    {
      heading: 'Important Pricing Information',
      paragraphs: [
        'Understanding the details of our pricing structure:',
      ],
      listItems: [
        'Medications: Medication costs are additional and vary based on individual requirements (typically ₹30,000 - ₹80,000)',
        'Insurance: We accept most insurance plans and offer assistance with insurance claims',
        'Payment Plans: Zero-interest EMI options available for up to 12 months',
        'Transparency: No hidden costs - all charges are clearly explained upfront',
        'Consultation: Free initial consultation to discuss your specific needs and get a personalized quote',
        'Financing: Flexible payment plans and financing options available for qualifying patients',
      ],
    },
    {
      heading: 'What\'s Included in Our Packages',
      paragraphs: [
        'All our packages include:',
      ],
      listItems: [
        'Initial and follow-up consultations with fertility specialists',
        'All necessary diagnostic tests and evaluations',
        'Treatment procedures (egg retrieval, fertilization, embryo transfer)',
        'Laboratory services and embryo culture',
        'Monitoring during treatment (ultrasounds, blood tests)',
        'Post-treatment follow-up appointments',
      ],
    },
    {
      heading: 'Additional Costs to Consider',
      paragraphs: [
        'Some costs may be additional depending on your specific treatment needs:',
      ],
      listItems: [
        'Medications: Typically ₹30,000 - ₹80,000 depending on protocol',
        'Genetic Testing (PGT): Additional cost if not included in package',
        'Embryo Freezing: Additional storage fees beyond first year',
        'Additional Procedures: ICSI, assisted hatching, etc. if required separately',
        'Travel and Accommodation: For patients traveling from other cities',
      ],
    },
    {
      heading: 'Customized Packages',
      paragraphs: [
        'We understand that every patient has unique needs. Our team can create customized packages based on your specific requirements, medical condition, and budget. Contact us to discuss a personalized treatment plan and pricing that works for you.',
      ],
    },
    {
      heading: 'Insurance and Financing Options',
      paragraphs: [
        'We offer various payment options to make fertility treatment more accessible:',
      ],
      listItems: [
        'Insurance acceptance for eligible treatments',
        'Zero-interest EMI plans up to 12 months',
        'Flexible payment schedules',
        'Discounts for package payments upfront',
        'Assistance with insurance claim processing',
      ],
    },
    {
      heading: 'Get a Personalized Quote',
      paragraphs: [
        'For a personalized cost estimate based on your specific situation, please schedule a free consultation with our team. We will assess your needs, explain all costs transparently, and help you choose the best package for your journey to parenthood.',
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
              <IVFContentSection data={costContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
