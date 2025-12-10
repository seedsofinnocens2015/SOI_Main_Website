import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'TESA / PESA',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/icons/TESA PESA.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/icons/TESA PESA.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/icons/TESA PESA.jpg',
    '/assets/img/icons/TESA PESA.jpg'
  ],
};

const tesaPesaContentData = {
  sections: [
    {
      heading: 'TESA/PESA',
      paragraphs: [
        'Testicular Sperm Aspiration or TESA is a minor procedure yet a great technological advancement in the field of male infertility. The procedure that takes about 5 to 10 minutes under sedation is a marvel for men suffering with Obstructive Azoospermia. The procedure is mainly used to find sperm and source them from where they are directly produced.',
        'The sperm that is then found from the testes can be either directly used for an IVF-ICSI cycle or can be preserved for later use. It should, however, be noted that while TESA is a viable option for both, Obstructive Azoospermia, as well as Non-Obstructive Azoospermia. But the chances of success of TESA are higher in men with Obstructive Azoospermia.',
        'The combined effect of TESA with artificial reproductive technology has proven to be a boon to a high percentage of couples who face trouble in natural conception.',
      ],
      sideImage: '/assets/img/TESA  PESA1.png',
    },
    {
      heading: 'What are azoospermia and TESA/PESA?',
      paragraphs: [
        'Azoospermia is a condition where there are no sperm at all in a man\'s ejaculated semen and there can be various reasons for this.',
        'Sperm production and delivery involves a system of tubes within the male reproductive system. Sperm are initially produced in the testis in fine tubes called seminiferous tubules. In each testis these tubules are connected to a larger coiled tube called the epididymis in which sperm are held for a short while after production. The epididymis is in turn connected to the vas deferens which lead to the urethra. Sperm must move through this system in order to be deposited in the semen during ejaculation.',
        'Azoospermia can be caused by an abnormality or blockage in the epididymis or the vas deferens. This is referred to as obstructive azoospermia. In these cases, sperm are being produced in the testes, they just can\'t get out.',
        'Sometimes however, sperm production in the seminiferous tubules does not occur at all or is happening at such a low level that sperm are not detectable in the ejaculate. This is referred to as non-obstructive azoospermia.',
        'Using surgical procedures to try and extract sperm from the epididymis (PESA) or to dissect it out of tubules from the testis (TESA) can be an effective way of diagnosing what is causing the azoospermia.',
        'More importantly though, these procedures can also be effective ways of isolating sperm for use in treatment to try to achieve a pregnancy. Even in non-obstructive azoospermia, as long as some sperm production is occurring, PESA/ TESA can still be an effective way of retrieving sperm for use in treatment.',
      ],
    },
    {
      heading: 'Who can benefit from TESA/PESA?',
      paragraphs: [
        'The possible causes of lack of sperm in your ejaculate include:',
      ],
      listItems: [
        'Testicular problems resulting in poor sperm production. These can be caused by various factors such as genetic issues, previous infection (e.g. mumps), maldescended testes.',
        'An irreversible obstruction of the genital tract (possibly caused by a previous infection, trauma or surgery)',
        'Congenital absence (absence from birth) of the vas deferens, which is common in carriers of cystic fibrosis',
        'A previous vasectomy or an unsuccessful vasectomy reversal.',
      ],
    },
    {
      heading: 'What do these procedures involve?',
      paragraphs: [
        'PESA involves passing a fine needle through the skin into the epididymis to obtain sperm. TESA involves passing a fine needle through the skin directly into the testes and retrieving a small number of the seminiferous tubules themselves. The tubules are then dissected in the laboratory and the contents searched for the presence of sperm.',
        'Both of these surgical procedures can be performed under either local anaesthetic or sedation. Your doctor will talk to you about which approach is suitable for you.',
      ],
      sideImage: '/assets/img/TESA  PESA1.jpeg',
    },
    {
      heading: 'How is PESA/TESA sperm used?',
      paragraphs: [
        'The number of sperm retrieved through PESA or TESA is usually very low compared to the number present in an ejaculate, so the sperm usually need to be used in combination with a specific type of IVF called ICSI (Intracytoplasmic sperm injection) – see separate fact sheet. Surgically retrieved samples are rarely suitable for use in intrauterine insemination (IUI).',
        'Your partner will undergo an IVF cycle and, once her eggs have been collected (usually the same day as your PESA or TESA), your sperm will be injected directly into her eggs (a process called ICSI). The fertilised eggs are then cultured for a few days in the laboratory before a healthy embryo is transferred into your partner\'s uterus.',
        'Sometimes enough sperm is retrieved for some to be frozen for use in future ICSI cycles.',
      ],
    },
    {
      heading: 'What is the success rate of this procedure?',
      paragraphs: [
        'IVF treatment using PESA or TESA sperm is a regular procedure at Life Fertility Clinic and it has a similar success rate to IVF/ICSI using fresh semen produced at the clinic.',
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
              <IVFContentSection data={tesaPesaContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
