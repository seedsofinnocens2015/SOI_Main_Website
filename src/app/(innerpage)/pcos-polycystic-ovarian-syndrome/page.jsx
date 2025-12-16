import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'PCOS (Polycystic Ovarian Syndrome)',
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

const pcosContentData = {
  sections: [
    {
      heading: 'Understanding PCOS (Polycystic Ovarian Syndrome)',
      paragraphs: [
        'Polycystic Ovarian Syndrome (PCOS) is one of the most common hormonal disorders affecting women of reproductive age. It is characterized by irregular menstrual periods, excess androgen levels, and polycystic ovaries.',
        'PCOS is a leading cause of infertility in women, but with proper diagnosis and treatment, many women with PCOS can achieve successful pregnancies. At Seeds of Innocence, we specialize in diagnosing and treating PCOS to help women achieve their fertility goals.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Symptoms of PCOS',
      paragraphs: [
        'Common symptoms of PCOS include:',
      ],
      listItems: [
        'Irregular or absent menstrual periods',
        'Excess hair growth (hirsutism)',
        'Acne',
        'Weight gain or difficulty losing weight',
        'Thinning hair or hair loss',
        'Dark patches of skin',
        'Difficulty conceiving',
      ],
    },
    {
      heading: 'How PCOS Affects Fertility',
      paragraphs: [
        'PCOS can impact fertility in several ways:',
      ],
      listItems: [
        'Irregular or absent ovulation',
        'Hormonal imbalances',
        'Increased risk of miscarriage',
        'Insulin resistance affecting egg quality',
        'Metabolic issues',
      ],
    },
    {
      heading: 'Treatment Options for PCOS',
      paragraphs: [
        'At Seeds of Innocence, we offer comprehensive PCOS treatment:',
      ],
      listItems: [
        'Lifestyle modifications (diet and exercise)',
        'Weight management programs',
        'Ovulation induction medications',
        'Insulin-sensitizing medications',
        'Hormone therapy',
        'Laparoscopic ovarian drilling',
        'In Vitro Fertilization (IVF)',
        'Intrauterine Insemination (IUI)',
      ],
    },
    {
      heading: 'Success Rates with PCOS Treatment',
      paragraphs: [
        'With proper treatment, many women with PCOS can achieve successful pregnancies:',
      ],
      listItems: [
        'Lifestyle changes can restore ovulation in many cases',
        'Ovulation induction has high success rates',
        'IVF success rates are comparable to other causes of infertility',
        'Early diagnosis and treatment improve outcomes',
      ],
      bottomImage: '/assets/img/recent_post2.jpg',
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
              <IVFContentSection data={pcosContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

