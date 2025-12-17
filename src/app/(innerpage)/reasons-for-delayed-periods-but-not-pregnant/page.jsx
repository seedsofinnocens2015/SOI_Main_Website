import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Reasons For Delayed Periods But Not Pregnant',
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

const delayedPeriodsContentData = {
  sections: [
    {
      heading: 'Reasons For Delayed Periods But Not Pregnant',
      paragraphs: [
        'Some of the biggest questions that come into the mind of every female are, Is it normal to have delayed periods for a month? Is periods delaying a serious issue? Why is my period getting later every month? So let\'s find out the answers to these questions.',
        'The menstrual cycle of every woman is unique as she is. However, it is a natural curiosity when this cycle deviates from its regular pattern. The medical term that is used for delayed menstruation is Oligomenorrhea. One of the common signs of period coming late is pregnancy but not always. If you are not pregnant then we should count on some other reasons for delayed periods except pregnancy.',
      ],
      sideImage: '/assets/img/genetic.jpg',
    },
    {
      heading: 'What are the reasons for delayed periods?',
      paragraphs: [
        'There are several factors that can cause delayed periods when you\'re not pregnant:',
      ],
    },
    {
      heading: 'Emotional Weakness and Stress',
      paragraphs: [
        'One of the common reasons for delayed periods every month is stress or if you are emotionally weak. When you are under stress then at the time hormone cortisol can disturb the regularity of your menstrual cycle. You should do physical exercise, use relaxation techniques, and continue meditation. This will encourage the regularity of periods and maintain hormonal balance.',
      ],
    },
    {
      heading: 'Weight Fluctuations',
      paragraphs: [
        'The fast increase or decrease of weight may impact the regularity of the menstrual cycle. Women who do an intense workout and have low body fat can face the issue of delayed periods. You should maintain a balance in exercise and healthy weight through a balanced diet. It will help to affirm the stability of your menstrual cycle.',
      ],
    },
    {
      heading: 'Polycystic Ovary Syndrome (PCOS)',
      paragraphs: [
        'A typical hormonal condition that affects women in their reproductive age. It is the development of small cysts on the ovaries that may prevent ovulation from occurring normally. It can be one of the reasons for delayed periods for 2 months or every month. It is important to visit the doctor and get a medical diagnosis done. There might be some medications and dietary adjustments that your doctor will suggest to reverse PCOS.',
      ],
    },
    {
      heading: 'Thyroid Disorders',
      paragraphs: [
        'Hypothyroidism and Hyperthyroidism are the two conditions due to which the menstrual cycle can be disturbed. If there is an imbalance of thyroid hormone then periods can be delayed. The abnormalities of the thyroid hormone can be checked through blood testing and medicines can treat this condition as well.',
      ],
    },
    {
      heading: 'Medical Conditions',
      paragraphs: [
        'There are some chronic medical conditions such as diabetes and autoimmune diseases due to which periods can be delayed. The intake of medicines like antidepressants, antipsychotics, and chemotherapy treatments can also be the reasons for delayed periods except pregnancy. In this situation, always consult with a healthcare professional for more evaluation and advice.',
      ],
    },
    {
      heading: 'Birth Control Pills',
      paragraphs: [
        'One of the signs of period coming late but not pregnant can be taking birth control pills on a regular basis. For example – hormonal functioning can be disturbed by contraceptive pills and this will impact the menstrual cycle.',
      ],
    },
    {
      heading: 'Abnormal Ovulation',
      paragraphs: [
        'When the brain master gland named the pituitary gland underactive the signals then the process of ovulation becomes abnormal. The two hormones that are released by the pituitary gland are Follicle Stimulating Hormone (FSH) and Luteinizing Hormone (LH). The production of these hormones gets disturbed and because of this either this will result in delayed periods or no periods. It can further become the reason for infertility in females.',
      ],
    },
    {
      heading: 'How much delay in periods is normal?',
      paragraphs: [
        'The usual menstrual cycle is about 28 days and goes up to 38 days. The periods are considered late when your expected due date is passed by 7 days. If this will extend till 6 weeks then it will be considered as a missed period. The delay of a day or two is normal.',
        'If you don\'t have any medication conditions or known issues that can disturb your menstrual cycle, then you should consult a doctor for delays in periods.',
      ],
    },
    {
      heading: 'What to do when periods are late but not pregnant?',
      paragraphs: [
        'The first step is to check out what can be the reasons for delayed periods. There might be one reason why your menstrual cycle gets disturbed. However, if you don\'t have any known condition then always consult with a healthcare professional. They will evaluate and check whether your reproductive system is functioning properly or not.',
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'Delay in periods can indeed be disturbing but it is very important to understand that there are some causes of irregular periods in 20s that can be controllable and treatable. You need to understand the signs that your body is giving to you. This will help in maintaining the menstrual cycle and good health. If you are dealing with any of the chronic medical conditions or alarming changes then take the guidance from a healthcare provider.',
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
              <IVFContentSection data={delayedPeriodsContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

