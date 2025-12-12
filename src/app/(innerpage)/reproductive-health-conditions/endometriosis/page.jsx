import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Endometriosis',
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

const endometriosisContentData = {
  sections: [
    {
      heading: 'Understanding Endometriosis: What You Need to Know',
      paragraphs: [
        'Living with constant pain, heavy periods, or unexplained fatigue? It might not just be "normal period pain". It could be endometriosis a common but often misunderstood condition that affects millions of women around the world.',
        'At its core, endometriosis happens when the tissue that normally lines the inside of the uterus (called the endometrium) starts growing outside the uterus. These growths can appear on the ovaries, fallopian tubes, and even the bladder or intestines. And because this tissue behaves like the lining of the uterus thickening, breaking down, and bleeding with each menstrual cycle it can cause pain, swelling, and other healh problems.',
      ],
      sideImage: '/assets/img/Endometriosis.webp',
    },
    {
      heading: 'Common Symptoms of Endometriosis',
      paragraphs: [
        'Endometriosis can show up in different ways, and not everyone experiences the same symptoms. Some of the most common signs include:',
      ],
      listItems: [
        'Painful periods (also known as dysmenorrhea)',
        'Pelvic pain that may start before and last several days after your period',
        'Pain during or after sex',
        'Pain while urinating or having a bowel movement, especially during periods',
        'Heavy bleeding during or between periods',
        'Fertility problems',
        'Fatigue, bloating, or nausea',
      ],
    },
    {
      heading: 'Silent Endometriosis',
      paragraphs: [
        'Some women may not experience any noticeable symptoms at all, and the condition might only be discovered during investigations for infertility.',
      ],
    },
    {
      heading: 'What Causes Endometriosis?',
      paragraphs: [
        'While the exact cause isn\'t fully known, several theories exist. One common explanation is retrograde menstruation when menstrual blood flows backward through the fallopian tubes into the pelvic cavity. Other possible causes include:',
      ],
      listItems: [
        'Genetic factors',
        'Immune system issues',
        'Surgical scars that cause cells to stick and grow in unwanted places',
      ],
    },
    {
      heading: 'How is Endometriosis Diagnosed?',
      paragraphs: [
        'Diagnosing endometriosis can be tricky. Many women suffer for years before getting a proper diagnosis. Doctors usually beign with a detailed medical history and physical exam. You might also need:',
      ],
      listItems: [
        'Ultrasound',
        'MRI',
        'Laparoscopy – a minor surgical procedure that allows doctors to see inside the pelvis and confirm the presence of endometrial tissue.',
      ],
    },
    {
      heading: 'Treatment Options for Endometriosis',
      paragraphs: [
        'While there\'s currently no cure for endometriosis, the good news is it can be managed. Treatment depends on the severity of your symptoms and whether you\'re trying to get pregnant. Options include:',
      ],
    },
    {
      heading: '1. Medications',
      paragraphs: [
        'Medication-based treatments can help manage symptoms:',
      ],
      listItems: [
        'Pain relievers, like NSAIDs (ibuprofen), to ease discomfort.',
        'Hormonal therapies (like birth control pills, hormonal IUDs, or GnRH agonists) to reduce or stop menstruation and slow the growth of endometrial tissue.',
      ],
    },
    {
      heading: '2. Surgery',
      paragraphs: [
        'If medication isn\'t effective, laparoscopic surgery may help remove or destroy the patches of endometriosis. This can relieve pain and improve fertility.',
      ],
    },
    {
      heading: '3. Lifestyle Support',
      paragraphs: [
        'Lifestyle changes can make a real difference in managing endometriosis:',
      ],
      listItems: [
        'Eating a healthy diet',
        'Regular exercise',
        'Stress management',
        'Getting enough rest',
      ],
    },
    {
      heading: 'Additional Support Options',
      paragraphs: [
        'Some women also find relief through acupuncture or physical therapy.',
      ],
    },
    {
      heading: 'Living with Endometriosis',
      paragraphs: [
        'Endometriosis can affect many areas of life physical health, emotional wellbeing, relationships, and fertility. But you\'re not alone. Talking openly with your doctor, exploring treatment options, and finding a support system can make this journey easier. You deserve to be heard, understood, and cared for.',
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
              <IVFContentSection data={endometriosisContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
