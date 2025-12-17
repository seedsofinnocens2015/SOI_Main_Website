import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Vasectomy Reversal',
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

const vasectomyReversalContentData = {
  sections: [
    {
      heading: 'Vasectomy Reversal: Restoring Fertility for Couples Looking to Conceive',
      paragraphs: [
        'Vasectomy is the procedure of cutting up the tubes (vas deferens) of the male reproductive system in order to prevent conception. For couples who did not want children early in their relationships, vasectomy is a common procedure. However, after a certain time, when the couple decides of conceiving, vasectomy can be reversed.',
        'However, it is noteworthy that the success of Vasectomy Reversal has a direct correlation with the amount of time that has passed since the vasectomy was performed.',
        'What the procedure does is that it reconnects each of the tubes that carries the sperm into the semen. This reversal then helps couples in conceiving through natural means as the sperms are back into the semen and can fertilise the female egg again.',
      ],
    },
    {
      heading: 'Q. Is vasectomy reversal possible?',
      paragraphs: [
        'Yes. It is basically tying the tubes back that were cut during Vasectomy.',
      ],
    },
    {
      heading: 'Q. How long does a vasectomy reversal take?',
      paragraphs: [
        'Mostly performed as an outpatient procedure under local or general anaesthesia, the procedure usually takes 3 to 4 hours of time. Recovery from the surgery is a variable factor and may be anywhere between 5 to 14 days.',
      ],
    },
    {
      heading: 'Q. What is the cost to reverse a vasectomy?',
      paragraphs: [
        'Since every body is different than the other, the cost of the procedure is a subjective matter. For more information on what the reversal will cost for you, feel free to visit us anytime. Book your appointment today.',
      ],
    },
    {
      heading: 'Q. How difficult is it to reverse a vasectomy?',
      paragraphs: [
        'It can be quite a difficult process. Normally, it is more difficult than performing a vasectomy, which is why it performed as a microsurgery. It requires special skill, expertise, and experience.',
      ],
    },
    {
      heading: 'Q. Can vasectomy reversal cause birth defects?',
      paragraphs: [
        'Problems like birth defects and other complications remain at the same level as the general population as compared to the people who have had a vasectomy reversal.',
      ],
    },
    {
      heading: 'Q. Does sperm count increase after vasectomy reversal?',
      paragraphs: [
        'No. As a procedure, vasectomy reversal has no effect whatsoever on the sperm count of a male.',
      ],
    },
    {
      heading: 'Q. Risks involved in vasectomy reversal?',
      paragraphs: [
        'Risks involved in the process of vasectomy reversal includes the following:',
      ],
      listItems: [
        'Bleeding in the scrotum',
        'Infection on the surgery site',
        'Pain around the surgery site',
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
              <IVFContentSection data={vasectomyReversalContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

