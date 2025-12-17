import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Donor Program – Egg, Sperm & Embryo Donation',
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

const donorProgramContentData = {
  sections: [
    {
      heading: 'Donor Program: Third Party Reproduction',
      paragraphs: [
        'The DONATION also known as third party reproduction is a ray of hope for childless couples who are unable to have their biological child. The donor program may vary depending on the health problems of the infertile couple, from egg donation, and sperm donation to embryo donation. Depending on the patient\'s need, egg, sperm or embryo may be donated. Seeds of Innocence is a trusted sperm donation centre where several infertile couples come for consultation. If you want to get a thorough understanding of the sperm donation process, egg donation procedure, egg donation risks, etc., book an appointment with us today!',
      ],
    },
    {
      heading: 'Egg Donation',
      paragraphs: [
        'Indication For Oocyte Donation',
      ],
      listItems: [
        'Patients who have had multiple IVF or ICSI cycles and still have failed to conceive',
        'Women after 40 years tend to have a poor ovarian reserve and low quality eggs',
        'Older or menopausal women',
        'Patients suffering from severe endometriosis and tuberculosis produce poor quality eggs',
        'Women suffering from PCOS and ovarian cysts may benefit from egg donation with egg donation',
        'Premature ovarian failure',
        'An inherited genetic disorder',
      ],
    },
    {
      heading: 'Sperm Donation',
      paragraphs: [
        'Sperm donation is an option for a couple with severe male infertility.',
        'The donor should be over 40 years old and have his own children.',
        'Indications For Sperm Donation',
      ],
      listItems: [
        'Obstructive Azoospermia: Congenital absence of vas deferens or vasectomy',
        'Non-obstructive Azoospermia: primary testicular failure or secondary testicular failure due to radiation therapy or chemotherapy',
        'Ejaculation dysfunction or if the man is carrying a genetic disorder',
        'Severe oligospermia or abnormal seminal fluid',
      ],
    },
    {
      heading: 'Embryo Donation',
      paragraphs: [
        'Embryo donation is the process by which an embryo created by the IVF procedure of a conceived patient is transferred to the uterus of a infertile woman.',
        'Indications For Embryo Donation',
      ],
      listItems: [
        'Couples who have trouble getting pregnant with their own eggs and semen',
        'Adverse medical-genetic prognosis',
        'If poor quality embryos are repeatedly produced and their transfer does not lead to pregnancy',
      ],
    },
    {
      heading: 'Q. Can you donate sperm if you smoke?',
      paragraphs: [
        'While there is no abstinence from smoking and drinking alcohol while donating sperm, it is a well known fact that these do affect the overall health of your sperm. If that is the case, the result of this will be quite apparent in the sperm analysis result. For more information on this, feel free to talk to one of our experts. Book your consultation today.',
      ],
    },
    {
      heading: 'Q. How do I choose a sperm donor?',
      paragraphs: [
        'For everything that you will need during this process, SOI will be ready to help you every step of the way. Be it choosing the donor profile or choosing your preference, feel free to get in touch with one of our experts today. Book an appointment now.',
      ],
    },
    {
      heading: 'Q. How much does sperm injection cost?',
      paragraphs: [
        'Every patient is different in their own way as they require a different set of procedures. For information on how much will the procedure cost you, you can get in touch with us for a consultation on your current condition.',
      ],
    },
    {
      heading: 'Q. Is egg donation legal in India?',
      paragraphs: [
        'As per the Indian Council of Medical Research (ICMR), egg donation is legal in India. However, the egg donor has to sign certifications of anonymity and confidentiality, giving her consent to the clinic and forsaking any rights on the donated egg.',
      ],
    },
    {
      heading: 'Q. What are the side effects of donating your eggs?',
      paragraphs: [
        'The side effects of egg donation may include discomfort, redness, bruising, breast tenderness, fluid retention, feeling of being full, and a temporary weight gain. However, some women show mild symptoms while for others, it may be a little difficult.',
      ],
    },
    {
      heading: 'Q. What happens when you donate sperm?',
      paragraphs: [
        'While donating sperm, the male is directed to deposit their specimen into a sterile container, which is then frozen cryogenically using liquid nitrogen. The sperm will then only be thawed when they will be used.',
      ],
    },
    {
      heading: 'Q. How does embryo donation work?',
      paragraphs: [
        'Often times in IVF cycles, it so happens that after conceiving, the couples have embryos (eggs fertillised by sperm) that are left unused. In such a case, the embryo is donated to a couple in need, thus spreading happiness in families that require it dearly.',
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
              <IVFContentSection data={donorProgramContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

