import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Egg Freezing',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/egg.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/egg.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/egg.jpg',
    '/assets/img/egg.jpg'
  ],
};

const eggFreezingContentData = {
  sections: [
    {
      heading: 'What is Egg Freezing?',
      paragraphs: [
        'Egg freezing, which is also known as oocyte cryopreservation, is a process in which eggs are retrieved from the women\'s ovaries, frozen, and then stored for future use. This procedure is often opted by women who wish to delay childbearing or other medical issues. In the egg freezing process, ovary stimulation is required to produce multiple eggs then through a minor surgical procedure, those eggs are retrieved and frozen by using a process called vitrification.',
        'The eggs are frozen under liquid nitrogen at a specialized facility and remain viable for many years. When the woman is ready to get pregnant then through IVF procedure, a healthy egg is fertilized with sperm and implanted in the uterus to achieve pregnancy.',
      ],
      sideImage: '/assets/img/Egg-Freezing1.jpg',
    },
    {
      heading: 'Why is Egg Freezing Done?',
      paragraphs: [
        'Several reasons because of why egg freezing is done such as:',
      ],
      listItems: [
        'Delaying Childbearing: Women who want to get pregnant at a particular age or don\'t want a child until they become independent can choose egg freezing. It is the best option to have your own biological baby even after their 30s.',
        'Medical Reasons: There might be some medical conditions or treatments such as cancer that can affect a woman\'s fertility. Women should freeze their eggs before undergoing such treatments so that in the future they can have their own biological children.',
        'Preserving Fertility: Women who are not ready to get pregnant or have children but are concerned about their future fertility, may opt for egg freezing as a proactive measure.',
        'Genetic Reasons: If a woman carries a genetic problem or condition because of which her fertility may affect then preserving eggs is the best option to use them for future use.',
      ],
    },
    {
      heading: 'The Egg Freezing Procedure',
      paragraphs: [
        'There are several steps involved in egg freezing process:',
      ],
      steps: [
        {
          title: 'Initial Consultation',
          description: 'The first step is to consult with a fertility specialist. During this appointment, the doctor will check the medical history of the woman, perform a physical examination, and share the details of egg freezing. In this step, an evaluation of ovarian reserve will also be done to measure the supply of eggs.',
        },
        {
          title: 'Ovarian Stimulation',
          description: 'If a woman decides to go for egg freezing then the ovarian stimulation process starts with a course of medications (hormone injections) to produce multiple eggs. This process typically lasts for 10-14 days.',
        },
        {
          title: 'Monitoring',
          description: 'During the ovarian stimulation phase, a woman has to visit a doctor regularly for the monitoring of hormone levels and ultrasound examinations to record the growth and development of follicles (fluid-filled sacs in the ovaries that contain eggs).',
        },
        {
          title: 'Egg Retrieval',
          description: 'Once the follicles have matured and reached the optimal size, the woman will undergo egg retrieval. It is a minimal surgical process that is performed under sedation. Typically, a thin needle is inserted into each follicle through the vaginal wall to aspirate the fluid and retrieve the eggs. This procedure takes about 20-30 minutes.',
        },
        {
          title: 'Egg Freezing',
          description: 'The retrieved eggs are then evaluated and healthy or suitable eggs are frozen immediately by using a process called vitrification. The eggs are frozen under a very low temperature i.e., -196°C.',
        },
      ],
    },
    {
      heading: 'Why do Women Opt for Egg Freezing?',
      paragraphs: [
        'Egg freezing is a great method to preserve the eggs for the future and have your own biological child. Those women who are at the start of their careers and want to become independent can freeze their eggs. Also, it is a part of family planning and if a woman doesn\'t have a desire to have children right now then she can freeze her eggs.',
        'So, a woman can choose to become a mother at their own preference by using egg freezing.',
      ],
      sideImage: '/assets/img/Egg-Freezing2.jpg',
    },
    {
      heading: 'Cost of Egg Freezing',
      paragraphs: [
        'The egg freezing cost depends on various factors such as fertility clinic location, medical conditions, specific procedures, and additional services. We can suggest to you the exact cost of egg freezing. Once you consult the fertility specialist then you will get the breakdown of egg freezing price in detail.',
      ],
    },
    {
      heading: 'Risk with Egg Freezing',
      paragraphs: [
        'The egg freezing technique is generally safe but just like any other medical procedure, this also carries some risks.',
      ],
      listItems: [
        'Complications during egg retrieval such as bleeding, surrounding organ damage, or infection.',
        'A challenging process and can impact one emotionally and psychologically.',
        'Does not give any guarantee for future pregnancy.',
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
              <IVFContentSection data={eggFreezingContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
