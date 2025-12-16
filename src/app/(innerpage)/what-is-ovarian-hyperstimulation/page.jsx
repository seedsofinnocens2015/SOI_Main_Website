import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'What is Ovarian Hyperstimulation?',
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

const ovarianHyperstimulationContentData = {
  sections: [
    {
      heading: 'Understanding Ovarian Hyperstimulation Syndrome (OHSS)',
      paragraphs: [
        'Ovarian Hyperstimulation Syndrome (OHSS) is a condition that can occur as a complication of fertility treatments, particularly during in vitro fertilization (IVF) cycles. It happens when the ovaries become swollen and fluid leaks into the abdomen.',
        'While OHSS can be concerning, it is usually mild and resolves on its own. However, in rare cases, it can be severe and require medical attention. At Seeds of Innocence, we take all necessary precautions to minimize the risk of OHSS while maximizing treatment success.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Causes of OHSS',
      paragraphs: [
        'OHSS typically occurs when:',
      ],
      listItems: [
        'High doses of fertility medications are used',
        'Multiple eggs are produced during stimulation',
        'High estrogen levels are present',
        'Pregnancy occurs during the treatment cycle',
        'Younger women with PCOS are treated',
      ],
    },
    {
      heading: 'Symptoms of OHSS',
      paragraphs: [
        'Symptoms can range from mild to severe:',
      ],
      listItems: [
        'Mild: Abdominal bloating, mild discomfort, slight weight gain',
        'Moderate: Increased abdominal swelling, nausea, vomiting, diarrhea',
        'Severe: Severe abdominal pain, rapid weight gain, difficulty breathing, decreased urination',
      ],
    },
    {
      heading: 'Prevention and Management',
      paragraphs: [
        'At Seeds of Innocence, we employ several strategies to prevent and manage OHSS:',
      ],
      listItems: [
        'Careful monitoring during ovarian stimulation',
        'Individualized medication protocols',
        'Coasting (withholding medications) when needed',
        'Freezing embryos for later transfer (freeze-all cycles)',
        'Using lower doses of medications when appropriate',
        'Close monitoring and early intervention',
      ],
    },
    {
      heading: 'Treatment of OHSS',
      paragraphs: [
        'If OHSS occurs, treatment may include:',
      ],
      listItems: [
        'Mild cases: Rest, increased fluid intake, pain management',
        'Moderate cases: Close monitoring, medication adjustments',
        'Severe cases: Hospitalization, IV fluids, drainage of fluid if needed',
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
              <IVFContentSection data={ovarianHyperstimulationContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

