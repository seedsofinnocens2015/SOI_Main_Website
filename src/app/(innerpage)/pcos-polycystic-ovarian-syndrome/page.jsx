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
      heading: 'PCOS Symptoms, Treatment, Cost and Side Effects',
      paragraphs: [
        'PCOS is an imbalance in the hormones of a female that cause irregular menstrual cycles in a female. Some common PCOS side effects are infertility, cardiovascular diseases, and altered physical appearances. There are different types of PCOS and it can be managed with a PCOS diet at an early PCOS stage. The term Polycystic Ovarian Syndrome describes the appearance of the ovaries when viewed under ultrasound. They appear to have cysts growing around them.',
        'In PCOS, there may be anywhere from 12 to more cysts on the ovaries, that range in size from 2 mm to 9 mm. What this does is that the condition hinders ovulation, making it irregular or non existent. Naturally, an absent ovulation cycle means that the lady will have issues in conceiving naturally.',
      ],
    },
    {
      heading: 'Cause of PCOS',
      paragraphs: [
        'The exact cause of PCOS in women is unknown as of yet. However, it may have a genetic basis as it is seen to run in families. If a female in your family has had history of PCOS, there are chances that even you may be at a higher risk of developing the condition yourself.',
      ],
    },
    {
      heading: 'Symptoms of PCOS',
      listItems: [
        'Irregular Menstrual Cycle',
        'Difficulty in Natural conception',
        'Rapid increase in weight',
        'Increase in facial and body hair',
        'Thick and dark brown patches on skin',
        'Skin tags or excess skin patches in neck folds and armpits',
        'Hair loss',
        'Oily skin and acne',
        'Mood swings',
        'Pelvic pain',
        'Sleep apnea or interrupted breathing while sleeping',
      ],
    },
    {
      heading: 'Effects of PCOS on fertility',
      paragraphs: [
        'Absence of Ovulation (Anovulation)',
        'One of the major effects of PCOS on the female reproductive system is anovulation. Because of this, the chances of getting pregnant get very slim for a women.',
        'Weight Gain',
        'An excessive weight gain will only further decrease the chances of getting pregnant as it already a known factor of infertility. Furthermore, increased weight also is a known cause of the body resisting any ovulation inducing drugs as well.',
      ],
    },
    {
      heading: 'Q. How Do I Know If I Have PCOS?',
      paragraphs: [
        'There are set symptoms for PCOS that tell you about the condition. The most obvious is the abnormal irregularity of your menstrual cycle. Aside from this, excessive weight gain, facial hair growth, oily skin and acne are major telltale signs.',
      ],
    },
    {
      heading: 'Q. What is the main cause of PCOS?',
      paragraphs: [
        'An exact cause of PCOS is not known. However, it is true that it has a genetic factor to it as it is commonly observed to run in families. If you think you have family history of the disease, you can get checked by one of our experts at Seeds of Innocence. Book an appointment today.',
      ],
    },
    {
      heading: 'Q. How does PCOS affect fertility?',
      paragraphs: [
        'PCOS causes anovulation and brings excessive weight gain. Both of these are huge factors of infertility.',
      ],
    },
    {
      heading: 'Q. Does PCOS make you smell?',
      paragraphs: [
        'Yes. Another common symptom of PCOS is that it causes excessive body odour problems in females.',
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
              <IVFContentSection data={pcosContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

