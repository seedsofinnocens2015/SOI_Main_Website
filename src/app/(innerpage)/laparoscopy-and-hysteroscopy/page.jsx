import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Laparoscopy and Hysteroscopy',
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

const laparoscopyHysteroscopyContentData = {
  sections: [
    {
      heading: 'Laparoscopy and Hysteroscopy: Minimally Invasive Fertility Surgery',
      paragraphs: [
        'Laparoscopy and hysteroscopy are minimally invasive surgical procedures used to diagnose and treat various fertility-related conditions. These advanced techniques allow our surgeons to examine and treat issues within the reproductive organs with minimal scarring and faster recovery times.',
        'At Seeds of Innocence, we specialize in both procedures, offering comprehensive diagnostic and therapeutic options for fertility issues.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'What is Laparoscopy?',
      paragraphs: [
        'Laparoscopy is a surgical procedure that uses a thin, lighted tube (laparoscope) inserted through small incisions in the abdomen to examine and treat conditions affecting the pelvic organs:',
      ],
      listItems: [
        'Diagnosis of endometriosis',
        'Removal of ovarian cysts',
        'Treatment of blocked fallopian tubes',
        'Removal of fibroids',
        'Treatment of pelvic adhesions',
        'Ovarian drilling for PCOS',
      ],
    },
    {
      heading: 'What is Hysteroscopy?',
      paragraphs: [
        'Hysteroscopy is a procedure that uses a thin, lighted tube (hysteroscope) inserted through the cervix to examine and treat conditions within the uterus:',
      ],
      listItems: [
        'Removal of uterine polyps',
        'Removal of fibroids',
        'Treatment of uterine adhesions (Asherman\'s syndrome)',
        'Correction of uterine septum',
        'Removal of retained products of conception',
        'Diagnosis of abnormal uterine bleeding',
      ],
    },
    {
      heading: 'Benefits of Minimally Invasive Surgery',
      paragraphs: [
        'Both laparoscopy and hysteroscopy offer several advantages:',
      ],
      listItems: [
        'Smaller incisions and minimal scarring',
        'Faster recovery time',
        'Reduced pain and discomfort',
        'Lower risk of infection',
        'Shorter hospital stay',
        'Better cosmetic outcomes',
      ],
    },
    {
      heading: 'When Are These Procedures Recommended?',
      paragraphs: [
        'These procedures may be recommended for:',
      ],
      listItems: [
        'Unexplained infertility',
        'Recurrent miscarriages',
        'Abnormal uterine bleeding',
        'Suspected endometriosis or fibroids',
        'Blocked fallopian tubes',
        'Uterine abnormalities',
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
              <IVFContentSection data={laparoscopyHysteroscopyContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

