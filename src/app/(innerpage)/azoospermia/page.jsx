import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Azoospermia',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/male.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/male.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/male.jpg',
    '/assets/img/male.jpg'
  ],
};

const azoospermiaContentData = {
  sections: [
    {
      heading: 'Azoospermia: Understanding the Condition & Finding Hope',
      paragraphs: [
        'Azoospermia is a medical condition in men where there is no sperm present in the semen. This can make natural conception difficult or impossible. But the good news is that having azoospermia doesn\'t mean giving up on the dream of fatherhood. At Seeds of Innocens, we specialise in diagnosing and treating male infertility conditions like azoospermia with care, compassion and advanced medical expertise.',
      ],
      sideImage: '/assets/img/male.jpg',
    },
    {
      heading: 'What Is Azoospermia?',
      paragraphs: [
        'In simple words, azoospermia means zero sperm count in the ejaculate. This condition affects around 1 in 100 men and up to 10% of men with infertility issues. Often, azoospermia doesn\'t cause obvious symptoms, so many men only find out about it when trying to conceive.',
      ],
    },
    {
      heading: 'Types of Azoospermia',
      paragraphs: [
        'There are two main types:',
      ],
      listItems: [
        'Obstructive Azoospermia: In this type, the body produces sperm, but a blockage prevents the sperm from getting into the semen. Common causes include: Prior surgeries, Infections, Vasectomy, Congenital absence of the vas deferens (a condition some men are born with)',
        'Non-Obstructive Azoospermia: Here, the problem lies in poor or no sperm production by the testicles. This can be due to: Genetic disorders, Hormonal imbalances, Undescended testicles, Exposure to radiation or chemotherapy, Certain medical conditions or medications',
      ],
    },
    {
      heading: 'Symptoms of Azoospermia',
      paragraphs: [
        'Azoospermia typically does not have clear physical symptoms. However, some signs may include:',
      ],
      listItems: [
        'Trouble conceiving a child',
        'Low sex drive',
        'Erectile dysfunction',
        'Swelling or discomfort in the testicles',
      ],
    },
    {
      heading: 'Detection and Diagnosis',
      paragraphs: [
        'Because symptoms are often hidden, a semen analysis is the best way to detect it.',
      ],
    },
    {
      heading: 'Diagnosis at Seeds of Innocens',
      paragraphs: [
        'At Seeds of Innocens, we take a thorough and compassionate approach to diagnosis. Our team uses advanced tests to understand the root cause of azoospermia. This may include:',
      ],
      listItems: [
        'Semen Analysis: The first step to check if sperm is present.',
        'Hormonal Tests: To check levels of FSH, LH, and testosterone.',
        'Scrotal Ultrasound: To detect blockages or abnormalities.',
        'Genetic Testing: For detecting inherited conditions.',
        'Testicular Biopsy: In some cases, a sample of testicular tissue is examined to look for sperm.',
      ],
    },
    {
      heading: 'Treatments for Azoospermia',
      paragraphs: [
        'The treatment depends on whether the azoospermia is obstructive or non-obstructive:',
      ],
    },
    {
      heading: '1. Surgical Treatments (for Obstructive Azoospermia)',
      paragraphs: [
        'If a blockage is found, it can sometimes be corrected with minor surgery. Procedures like Vasoepididymostomy or Vasovasostomy can help restore the flow of sperm.',
      ],
    },
    {
      heading: '2. Sperm Retrieval Techniques',
      paragraphs: [
        'In many cases, especially with non-obstructive azoospermia, sperm can be retrieved directly from the testicles using methods like:',
      ],
      listItems: [
        'TESA (Testicular Sperm Aspiration)',
        'TESE (Testicular Sperm Extraction)',
        'Micro-TESE (Microsurgical TESE)',
      ],
    },
    {
      heading: 'Using Retrieved Sperm with IVF/ICSI',
      paragraphs: [
        'Retrieved sperm can be used with IVF (In Vitro Fertilisation) and ICSI (Intracytoplasmic Sperm Injection) to achieve pregnancy.',
      ],
    },
    {
      heading: '3. Hormonal Therapy',
      paragraphs: [
        'For hormone-related issues, medication may help balance levels and improve sperm production.',
      ],
    },
    {
      heading: 'Personalized Treatment Plans',
      paragraphs: [
        'At Seeds of Innocens, our fertility experts craft personalised treatment plans tailored to each couple\'s unique journey.',
      ],
    },
    {
      heading: 'Why Choose Seeds of Innocens?',
      paragraphs: [
        'We understand the emotional toll infertility can take on couples. That\'s why we combine clinical excellence with empathetic care. With advanced diagnostics, state-of-the-art labs, and experienced specialists, Seeds of Innocens is one of India\'s trusted names in fertility treatment. Our goal is simple: to help you build your dream family.',
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
              <IVFContentSection data={azoospermiaContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
