import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'PRP & Ovarian Rejuvenation',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/icons/PRP & Ovarian Rejuvenation.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/icons/PRP & Ovarian Rejuvenation.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/icons/PRP & Ovarian Rejuvenation.jpg',
    '/assets/img/icons/PRP & Ovarian Rejuvenation.jpg'
  ],
};

const prpContentData = {
  sections: [
    {
      heading: 'PRP for DOR',
      paragraphs: [
        'Decline in egg reserve is a phenomenon that all women experience as their age advances, taking them gradually towards menopause as they enter their 40s. However, it comes as a shock to some in their early 20s or 30s when they are unable to conceive and their USG (AFC count) or blood report (AMH) reveals a reduction in their egg count. This is known as premature ovarian failure (POF) and it may affect as many as 10% of patients suffering from infertility. Until now there was little or no hope for this set of patients if conventional/mini IVF protocols did not work. They could only go for donor oocytes (using eggs recovered from someone else).',
        'But today, a new kid on the block – \'ovarian rejuvenation therapy\' or \'ovarian PRP treatment\', is offering some hope to women unwilling for donor egg treatment. PRP in IVF has emerged to be a highly effective option for infertile couples. Come to Seeds of Innocens to get the best PRP treatment. Book an appointment today to know more about PRP fertility treatment.',
      ],
      listItems: [
        'Physical or medical conditions hindering the ability to produce healthy sperm',
        'Low sperm count',
        'Impotence',
        'Irregular or absent ovulation cycle in female',
        'Cervix related condition or disorder',
        'Unknown causes',
      ],
      sideImage: '/assets/img/PRP1.png',
    },
    {
      heading: 'Who may benefit?',
      paragraphs: [
        'Encouraging PRP results in experimental trials has opened a potential window for treating a variety of problems in women. Women with following conditions can give it a try:',
      ],
      listItems: [
        'Primary ovarian insufficiency.',
        'Advanced maternal age.',
        'Poor ovarian reserve.',
        'Loss of ovarian function due to chemotherapy.',
        'Ovarian dysfunction.',
      ],
    },
    {
      heading: 'How is it done?',
      paragraphs: [
        'The procedure takes place in two steps:',
        'First, several tubes of blood are extracted from your body using injection. The blood sample in then processed to separate the platelet-rich plasma component from the white blood cells and red blood cells.',
        'The second step involves injection of this PRP into the ovaries in a procedure quite similar to egg pick-up. The PRP therapy is minimally invasive. Local anesthesia is provided in order to ensure that you don\'t feel any pain during the procedure. The whole process takes 2-3 hours.',
        'Just after the periods finish and before the follicles start to grow, the patient is called empty stomach to the clinic. Blood is taken and the PRP prepared. Under light sedation (same as used for IVF egg collection) and ultrasound guidance, the prepared sample is injected into both ovaries. The process takes roughly 20-30 minutes and the patient can go home in an hour or so. This process is repeated once every month for a total of three times.',
      ],
      sideImage: '/assets/img/PRP1.webp',
    },
    {
      heading: 'How does it work?',
      paragraphs: [
        'This procedure involves separation and concentration of platelet rich plasma from your blood using a special centrifugation and aspiration technique. This contains several platelet-derived growth factors, transforming growth factor-beta, vascular endothelial growth factor, endothelial and fibroblast growth factor, etc. Upon injection into ovaries these cytokines may help stimulate the ovarian stem cells to produce new follicles.',
        'After repeating this procedure for 2-3 cycles, an improvement in the follicle count and blood parameters may be seen. Several studies have shown not only a resumption in menses, but also positive pregnancies with IVF.',
        'Although this procedure is still under trial, but given its safety and promising initial results, it holds potential for women with reduced egg counts unwilling to give up on their own eggs.',
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
              <IVFContentSection data={prpContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
