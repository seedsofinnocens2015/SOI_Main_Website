import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'IUI Treatment',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/IUI.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/IUI.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/IUI.jpg',
    '/assets/img/icons/IUI, IVF & ICSI.jpg'
  ],
};

const iuiContentData = {
  sections: [
    {
      heading: 'IUI Treatment & Success Rate',
      paragraphs: [
        'IUI, or Intra Uterine Insemination, is the simplest technique in the field of artificial insemination. In an IUI cycle, the sperm from the male is directly placed inside the uterus of the female to increase the chances of conception.',
        'In a case where both the male and female are not diagnosed with infertility and yet are not able to conceive, chances are that there are other factors that need to be addressed, before going for IUI pregnancy. In order to provide a small push to healthy couples who are not able to conceive naturally, our fertility specialists often recommend the IUI treatment procedure. IUI test is a simple, affordable, and effective treatment for couples who are unable to conceive naturally. Book an appointment with Seeds of Innocens to know what is IUI treatment, IUI treatment cost in India, IUI success rates, and more.',
      ],
    },
    {
      heading: 'When is IUI Treatment Recommended?',
      paragraphs: [
        'IUI treatment is recommended in the following conditions:',
      ],
      listItems: [
        'Physical or medical conditions hindering the ability to produce healthy sperm',
        'Low sperm count',
        'Impotence',
        'Irregular or absent ovulation cycle in female',
        'Cervix related condition or disorder',
        'Unknown causes',
      ],
      sideImage: '/assets/img/IUI Treatment.jpg',
    },
    {
      heading: 'Steps and Duration of IUI Cycle',
      paragraphs: [
        'The sperm sample that is collected for an IUI cycle needs to be concentrated before use. It is placed in the uterus right before the beginning of ovulation in women. Apart from this, some medication may also be provided to stimulate the ovaries into ovulation. Here is a short timeline for a successful IUI Cycle.',
      ],
      steps: [
        {
          title: 'Day 3 of Menstrual Cycle',
          description: 'Through an ultrasound assessment and blood test, the process will begin. The doctors may prescribe medication to stimulate the growth of extra follicles which will then develop into eggs.',
        },
        {
          title: 'Day 8,9, or 10',
          description: 'Another ultrasound will be performed to judge the follicle size and endometrial lining, which helps in determining the date of the next visit.',
        },
        {
          title: 'Day 11,12, or 13',
          description: 'The doctor may then give an hCG "trigger" shot, which matures the egg as per a decided timeframe, so the IUI Cycle can be timed accordingly.',
        },
        {
          title: 'IUI',
          description: 'About 36 to 40 hours after the shot, IUI is scheduled. At this appointment, the semen is placed in the uterus with the help of a precise catheter.',
        },
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header2.jpg"
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
              <IVFContentSection data={iuiContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
