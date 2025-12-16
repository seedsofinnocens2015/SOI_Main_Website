import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Diabetes, Thyroid and Obesity',
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

const diabetesThyroidObesityContentData = {
  sections: [
    {
      heading: 'Diabetes, Thyroid Disorders, and Obesity: Impact on Fertility',
      paragraphs: [
        'Diabetes, thyroid disorders, and obesity are common health conditions that can significantly impact fertility in both men and women. Understanding how these conditions affect reproductive health is crucial for successful fertility treatment.',
        'At Seeds of Innocence, we provide comprehensive care for patients with these conditions, offering specialized treatment plans to optimize fertility outcomes.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Diabetes and Fertility',
      paragraphs: [
        'Diabetes can affect fertility in several ways:',
      ],
      listItems: [
        'Irregular menstrual cycles in women',
        'Reduced sperm quality and quantity in men',
        'Increased risk of miscarriage',
        'Higher risk of birth defects',
        'Complications during pregnancy',
        'Delayed conception',
      ],
    },
    {
      heading: 'Thyroid Disorders and Fertility',
      paragraphs: [
        'Thyroid hormones play a crucial role in reproductive health. Both hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid) can affect fertility:',
      ],
      listItems: [
        'Irregular ovulation',
        'Menstrual cycle abnormalities',
        'Increased risk of miscarriage',
        'Reduced libido',
        'Hormonal imbalances',
        'Impact on fetal development',
      ],
    },
    {
      heading: 'Obesity and Fertility',
      paragraphs: [
        'Obesity is a significant factor affecting fertility in both men and women:',
      ],
      listItems: [
        'Irregular menstrual cycles',
        'Reduced ovulation',
        'Lower success rates with IVF',
        'Increased risk of miscarriage',
        'Reduced sperm quality in men',
        'Hormonal imbalances',
        'Complications during pregnancy',
      ],
    },
    {
      heading: 'Treatment Approach',
      paragraphs: [
        'At Seeds of Innocence, we take a comprehensive approach to treating fertility issues related to diabetes, thyroid disorders, and obesity:',
      ],
      listItems: [
        'Comprehensive medical evaluation',
        'Collaboration with endocrinologists',
        'Lifestyle modification programs',
        'Weight management support',
        'Optimized fertility treatment protocols',
        'Close monitoring during treatment',
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
              <IVFContentSection data={diabetesThyroidObesityContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

