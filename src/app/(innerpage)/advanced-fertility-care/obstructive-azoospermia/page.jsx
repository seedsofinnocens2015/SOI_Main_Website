import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Obstructive Azoospermia',
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

const obstructiveAzoospermiaContentData = {
  sections: [
    {
      heading: 'Obstructive Azoospermia',
      paragraphs: [
        'It is a condition where there is a blockage of the male reproductive tract, leading to a complete absence of sperm in the ejaculate. In obstructive azoospermia, optimal quality of sperms are present in the proximal epididymis but in very poor quality in the distal segments. It is not a very common condition as it is found in less than 1% of all men but in 10-15% of infertile men.',
      ],
      sideImage: '/assets/img/Obstructive Azoospermia.png',
    },
    {
      heading: 'Causes of Obstructive Azoospermia',
      paragraphs: [
        'Obstructive azoospermia may result from epididymal (the coiled tube on the back of each testicle), vasal (the tube that transport sperms), or ejaculatory duct (the tube from which sperm exit in the urethra) pathology. The causes may include:',
      ],
      listItems: [
        'Blockages due to trauma or infection',
        'Sexually transmitted diseases (STD)',
        'Hernia Surgery',
        'Scar Tissue',
        'Cystic fibrosis',
        'Dysfunction in the process of ejaculation',
      ],
    },
    {
      heading: 'Treatment for Obstructive Azoospermia',
      paragraphs: [
        'The management of obstructive azoospermia depends on its cause, and it also takes account of any existing female infertility factors. Generally, males with this type of infertility can be treated with surgical correction of the obstruction or by retrieving sperms directly from epididymis or testis, which is then followed by IVF-ICSI.',
      ],
    },
    {
      heading: 'How Seeds of Innocens can Help',
      paragraphs: [
        'At seeds of Innocens, we examine the various causes of obstructive azoospermia, and the suitable treatment is then decided. At our center, we provide both microsurgical vasal reconstruction and sperm retrieval, paired with IVF to males facing infertility issues.',
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
              <IVFContentSection data={obstructiveAzoospermiaContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
