import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Irregular Menstrual Cycle',
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

const irregularMenstrualCycleContentData = {
  sections: [
    {
      heading: 'Understanding Irregular Menstrual Cycles',
      paragraphs: [
        'An irregular menstrual cycle is one that doesn\'t follow a regular pattern. While a normal cycle typically ranges from 21 to 35 days, irregular cycles can vary significantly in length, timing, or flow.',
        'Irregular menstrual cycles can affect fertility by making it difficult to predict ovulation, which is crucial for conception. At Seeds of Innocence, we help diagnose and treat irregular menstrual cycles to improve fertility outcomes.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Causes of Irregular Menstrual Cycles',
      paragraphs: [
        'Several factors can cause irregular menstrual cycles:',
      ],
      listItems: [
        'Polycystic Ovary Syndrome (PCOS)',
        'Thyroid disorders',
        'Hormonal imbalances',
        'Stress and lifestyle factors',
        'Excessive exercise',
        'Weight fluctuations',
        'Perimenopause',
        'Certain medications',
        'Medical conditions affecting the reproductive system',
      ],
    },
    {
      heading: 'Impact on Fertility',
      paragraphs: [
        'Irregular menstrual cycles can affect fertility in several ways:',
      ],
      listItems: [
        'Difficulty predicting ovulation',
        'Reduced frequency of ovulation',
        'Anovulatory cycles (cycles without ovulation)',
        'Hormonal imbalances affecting egg quality',
        'Reduced chances of natural conception',
      ],
    },
    {
      heading: 'Diagnosis and Treatment',
      paragraphs: [
        'At Seeds of Innocence, we offer comprehensive evaluation and treatment:',
      ],
      listItems: [
        'Detailed medical history and physical examination',
        'Hormonal testing',
        'Ultrasound evaluation',
        'Ovulation induction medications',
        'Lifestyle modifications',
        'Hormone therapy',
        'Fertility treatments (IUI, IVF)',
      ],
    },
    {
      heading: 'When to Seek Help',
      paragraphs: [
        'You should consult a fertility specialist if you experience:',
      ],
      listItems: [
        'Cycles shorter than 21 days or longer than 35 days',
        'Missed periods for 3+ months',
        'Heavy or prolonged bleeding',
        'Severe menstrual cramps',
        'Difficulty conceiving for 6+ months',
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
              <IVFContentSection data={irregularMenstrualCycleContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

