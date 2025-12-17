import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Yoga and Fertility - How Yoga Can Support Fertility',
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

const yogaFertilityContentData = {
  sections: [
    {
      heading: 'Yoga for Fertility: Supporting Your Journey to Parenthood',
      paragraphs: [
        'How Yoga Can Support Fertility and Enhance Your Chances of Conception',
        'When a couple is trying to have a baby, every day can be filled with lots of challenges and surprises. Unfortunately, not every woman get to experience it. Many couples struggle with fertility issues due to modern-day stressful lifestyle, certain medical conditions, and other factors.',
        'It is true that infertility can take a toll on a couple\'s mental health, body, and relationships. However, yoga can play a role in helping couples manage their ups and downs.',
        'That is why it is not only important to get rid of all the toxins in your body before attempting pregnancy but it is also necessary to eat food that may boost your fertility factors to get the best results. Here are some fertility boosting food tips, based on their colours.',
        'Now many of you must be thinking that yoga is just a form of exercises and posture designed for young people to remain in great shape. But yoga is much more than that. It is a scientific system that helps in altering the brain and body chemistry, creating a holistic positive effect on the body.',
        'Yoga can help a couple along the way to pregnancy by supporting fertility and increasing the possibility of getting pregnant. So, in this blog, we talk about how yoga can help in supporting fertility.',
      ],
    },
    {
      heading: 'Yoga Creates a Rebound Effect and Synchronisation',
      paragraphs: [
        'Conception occurs when the woman is in a state of receptivity, stress-free, and relaxed. When the body is under prolonged stress and anxiety, the health gets deteriorated. Both men and women can get into the best possible health for conception through yoga. Yoga basically helps in bringing the practitioner into a relaxed state. It reduces stress and increases the ability of the individual to handle daily challenges effectively. In essence, it helps in creating synchronisation and rebound effect on the mind and the body.',
      ],
    },
    {
      heading: 'Yoga Helps in Core Alignment',
      paragraphs: [
        'Yoga helps in aligning core, which means that a person feels his or her essence and a centre of calmness, despite the challenges such as infertility. The future can get bright with possibilities when their depression is not long-lasting or deep. It can help open those energy channels that are essential for fertility.',
      ],
    },
    {
      heading: 'Fertility Yoga Aids in Increasing Blood Flow and Circulation',
      paragraphs: [
        'Improving blood and energy flow to our reproductive organs is essential for fertility. Yoga helps in increasing that blood flow to the pelvic region and reproductive organs, providing them with fresh blood and all the essential nutrients.',
      ],
    },
    {
      heading: 'Yoga Balances Hormones',
      paragraphs: [
        'The endocrine system in our body produces different hormones, including sex hormones. When one or a few hormones are imbalanced due to any reason, it can lead to creating a domino effect, meaning more hormonal imbalance.',
        'Yoga can help in creating a calming effect, resulting in a balanced hormonal level. Your chakras can line up, ultimately helping to balance and regulate hormones.',
        'The practice of yoga is not just for staying in shape; it is beneficial for everyone. It can grow the emotional, physical and spiritual possibilities within your bodies. Simple postures of yoga can have deep and lasting effects on your fertility.',
        'From maintaining a sense of calm to tuning up your hormones, yoga assists in supporting fertility in numerous ways. So, ask your doctors about the poses you can do.',
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
              <IVFContentSection data={yogaFertilityContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

