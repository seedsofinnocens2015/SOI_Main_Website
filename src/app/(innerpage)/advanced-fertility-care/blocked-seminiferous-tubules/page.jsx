import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Blocked Seminiferous Tubules',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/male.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/male.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/male.jpg',
    '/assets/img/male.jpg'
  ],
};

const blockedSeminiferousTubulesContentData = {
  sections: [
    {
      heading: 'Blocked Seminiferous Tubules',
      paragraphs: [
        'Blocked Seminiferous Tubules, also known as Vas deferens, produces, maintains, and stores the sperms. They are long and muscular in structure and travel from the epididymis into the pelvic cavity. These tubules consist of columnar Sertoli cells surrounded by spermatogenic cells.',
        'Located within the testes, these Sertoli cells act as the nutrient bank for the immature sperm cells. They support and nourish the sperm cells until they are mature and prepared for ejaculation.',
      ],
      sideImage: '/assets/img/Blocked Seminiferous Tubules.jpg',
    },
    {
      heading: 'Blocked Seminiferous Tubules Causes',
      paragraphs: [
        'The reason for blocked seminiferous tubules include:',
      ],
      listItems: [
        'Infections: Seminiferous Tubules are prone to infections. The infections can be sexually transmitted or occur naturally due to bacteria. If the infection is left untreated, it can lead to permanent blockage of the tubules.',
        'Tumor: Tumor of the vas deferens or other adjacent organs can compress the seminiferous tubules causing blockage of sperms. In other cases, trauma or injury from surgery can also result in fewer sperms.',
        'Inflammation: Inflammation is another reason for blocked seminiferous tubules. Inflammation may be caused by a variety of pathogenic bacteria causing severe obstruction of the seminiferous tubules.',
        'Rare Genetic Conditions: Genetic conditions can also block seminiferous tubules. Congenital abnormalities can lead to functional and structural anomalies in the seminiferous tubules or vas deferens, resulting in less semen and azoospermia or infertility.',
      ],
    },
    {
      heading: 'SOI Expertise',
      paragraphs: [
        'There are a lot of indications for blocked ejaculatory ducts and blocked seminiferous tubules. A semen analysis can help identify them better than any other exam. Blocked Seminiferous Tubules does not mean infertility is untreatable.',
        'With the right diagnosis and treatment, it is possible to correct the problem. Contact SOI today for more information on treatment options or schedule an appointment to consult with our experts.',
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
              <IVFContentSection data={blockedSeminiferousTubulesContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
