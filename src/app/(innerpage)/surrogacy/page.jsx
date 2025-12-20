import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Surrogacy: A Journey to Parenthood',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/recent_post2.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/recent_post2.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const surrogacyContentData = {
  sections: [
    {
      heading: 'Surrogacy: A Journey to Parenthood',
      paragraphs: [
        'At Seeds of Innocence, we understand the dreams of parenthood and the challenges some couples face in achieving them. Surrogacy is an advanced and legally approved method that allows individuals to experience the joy of having their child. As a trusted name in fertility care, we aim to guide you through this remarkable journey with compassion and expertise.',
      ],
    },
    {
      heading: 'What Is Surrogacy?',
      paragraphs: [
        'Surrogacy is an arrangement where a woman, known as a surrogate, carries and delivers a child for another individual or couple. The process involves in-vitro fertilization (IVF), where an embryo is created from the intended parent\'s or donor\'s eggs and sperm is implanted into the surrogate womb. The surrogate nurtures the baby during pregnancy and delivers the child to the intended parents.',
      ],
    },
    {
      heading: 'Types of Surrogacy',
      paragraphs: [
        'Gestational Surrogacy: This is the most common type of surrogacy, where the surrogate has no genetic link to the child. The embryo is created using the genetic material of the intended parents or donors.',
        'Traditional Surrogacy: In this less common approach, the surrogate\'s eggs are used, making her the biological mother of the child. However, this method is not allowed under Indian surrogacy laws.',
      ],
    },
    {
      heading: 'Surrogacy Laws',
      paragraphs: [
        'In India, surrogacy is governed by strict laws to ensure ethical practices and protect the rights of all parties involved. Key points include:',
      ],
      listItems: [
        'Eligibility: Only Indian couples who have been married for at least five years and are unable to conceive naturally are eligible for surrogacy. They must also provide proof of medical infertility.',
        'Age Limit: The intended mother must be between 23 and 50 years old, and the intended father between 26 and 55 years old.',
        'Altruistic Surrogacy: Commercial surrogacy is prohibited in India. Only altruistic surrogacy is allowed, where the surrogate is a close relative and is compensated only for medical expenses and insurance.',
        'Prohibition of Single and Foreign Couples: Surrogacy is restricted to Indian heterosexual married couples, and foreign nationals are not permitted surrogacy in India.',
      ],
    },
    {
      heading: 'Why Choose Seeds of Innocence for Surrogacy?',
      paragraphs: [
        'At Seeds of Innocence, we combine medical excellence with a deep sense of empathy to support you at every step of your surrogacy journey. Here\'s why we\'re a trusted partner for many:',
      ],
      listItems: [
        'Expert Team: Our fertility specialists, embryologists, and counsellors have extensive experience in surrogacy and fertility treatments. They work tirelessly to ensure a smooth and successful process.',
        'Advanced Technology: We use state-of-the-art technology for IVF and embryo transfer to maximize success rates.',
        'Legal and Ethical Guidance: Surrogacy involves legal procedures, and we ensure full compliance with Indian laws. Our team provides comprehensive support to simplify the legal aspects for you.',
        'Personalized Care: We understand that every couple\'s journey is unique. Our approach is tailored to meet your specific needs and address your concerns.',
        'Comprehensive Facilities: From advanced IVF labs to counseling and psychological support, we provide holistic care under one roof.',
      ],
    },
    {
      heading: 'The Surrogacy Process at Seeds of Innocence',
      listItems: [
        'Initial Consultation: We begin with an in-depth discussion to understand your medical history and surrogacy requirements.',
        'Medical and Legal Screening: Both the intended parents and the surrogate undergo detailed medical and legal evaluations.',
        'IVF and Embryo Transfer: Eggs and sperm are collected, and an embryo is created in our advanced labs. The embryo is then implanted into the surrogate\'s womb.',
        'Pregnancy Care: The surrogate receives regular medical check-ups and care throughout the pregnancy to ensure the health of the baby.',
        'Birth and Legal Handover: Once the baby is born, all legal formalities are completed, and the child is handed over to the intended parents.',
      ],
    },
    {
      heading: 'Building Families, Creating Happiness',
      paragraphs: [
        'Surrogacy is more than just a medical procedure, it is a life-changing journey for everyone involved. At Seeds of Innocence, we are proud to be a part of your story, helping you overcome challenges and embrace the joys of parenthood.',
        'We invite you to visit our centers or contact us to learn more about surrogacy and how we can assist you. Together, let\'s take a step closer to fulfilling your dream of becoming a parent.',
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

      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={surrogacyContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

