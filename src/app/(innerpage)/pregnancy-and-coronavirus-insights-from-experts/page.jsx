import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Pregnancy and Coronavirus',
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

const pregnancyCoronavirusContentData = {
  sections: [
    {
      heading: 'Pregnancy and Coronavirus',
      paragraphs: [
        'Pregnancy is a beautiful phase in the life of a woman with some challenges and lots of happy moments. However, during the pandemic, stress and anxiety can quickly multiply, impacting the lives of the mother and the family.',
        'We understand that the time is crucial, and with daily hose of news about coronavirus, you must be having many questions in your mind. A growing number of families are facing difficult questions like "Do newborn babies need to be separated from mothers infected with the new coronavirus?" every now and then.',
        'Although not much is known about the disease, health care providers and doctors across the world have managed to estimate the risk posed by the virus and come up with some strategies to reduce the impact on the mother and the child.',
        'In light of all this, we discussed the area of concerns with our experts to get detailed insights. So, let\'s have a look!',
      ],
      sideImage: '/assets/img/genetic.jpg',
    },
    {
      heading: 'Pregnant Women and Risk of Getting Infected With Coronavirus',
      paragraphs: [
        'Almost 98% of the pregnant women have asked: "Am I more at risk if I\'m pregnant?" The answer is that there is no indication that pregnant women are at a greater risk. However, this doesn\'t mean that they can\'t get affected.',
        'In fact, during the 2003 outbreak of SARS, the fatality rate of pregnant women was considerably higher. So, it is important to take proper cautions.',
      ],
    },
    {
      heading: 'Pregnant Women with Coronavirus: Things to Consider',
      paragraphs: [
        'Studies suggest that pregnancy alters the immune system of the woman so the complications may increase if she catches coronavirus. However, the risk varies from person to person as a study conducted with 43 pregnant women in New York revealed that a majority don\'t experience any severity. Nevertheless, some portion of the women were at risk. The risk further aggravates if the woman has any underlying health condition like lupus, diabetes, or respiratory diseases.',
      ],
    },
    {
      heading: 'Can the virus be transmitted to the uterus or to the child during breastfeeding?',
      paragraphs: [
        'Some viruses like Zika, cytomegalovirus, rubella, can be passed from mother to fetus in the uterus. However, respiratory viruses are less likely to be transmitted to the uterus.',
        'Considering transmitting the virus to the child, there was a study conducted in Wuhan on 33 women, which showed that three of the babies contracted the disease despite measures to prevent the spread. This implies that the chances of transmitting the virus is low, but the child can get the virus.',
      ],
    },
    {
      heading: 'Home Birth Amid Coronavirus',
      paragraphs: [
        'At this point, women should not change their delivery plans. Hospitals in India are taking precautions to ensure that pregnant women are not exposed to ill patients. Homebirth requires moths of education, training, and preparation; therefore, you should refrain from doing it.',
        'In addition, if you are pregnant with IVF or any other fertility procedure, then you should strictly avoid preparing yourself for a home birth. Government has allowed each mother to have a support person in the delivery room so that the process of delivery remains risk-free. However, the person must be tested for coronavirus before assisting the woman.',
        'Further, the woman is discharged earlier than usual to minimise the risk of getting an infection or transmitting it.',
      ],
    },
    {
      heading: 'Breastfeeding and Coronavirus',
      paragraphs: [
        'There is no data that support whether breastfeeding is dangerous or not if the woman is infected with the virus. However, WHO suggests that the baby can be provided with breast milk using a breast pump.',
        'In addition, direct breastfeeding is also possible if the mother wears a mask and take proper sanitisation measures before touching the baby. However, doctors still suggest that the mother and baby be separated if the mother is infected until she recovers and advice using a breast pump for feeding the child.',
      ],
    },
    {
      heading: 'Additional Steps to Protect Yourself and Your Child From Coronavirus',
      paragraphs: [
        'You need to take proper precaution and must change the structure of prenatal care. This includes limiting exposure to other relatives, medical staff and the woman should practice social distancing as much as possible. If required, ob-gyne and others can be contacted using software applications.',
      ],
    },
    {
      heading: 'Some Do\'s and Don\'ts',
      paragraphs: [
        'To protect yourself and your baby during the pandemic, follow these important guidelines:',
      ],
      listItems: [
        'Avoid contact with anyone with cold or flu symptoms',
        'Use alcohol-based hand sanitizers',
        'Wash your hands frequently with soap and water',
        'Avoid places with large numbers of people',
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'More and more research is conducted with numbers skyrocketing globally. In the meantime, the best thing you can do is to limit your exposure and follow strict hygiene measures. By limiting your exposure, you limit your risk.',
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
              <IVFContentSection data={pregnancyCoronavirusContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

