import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Blastocyst Transfer',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/blastocyst.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/blastocyst.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/blastocyst.jpg',
    '/assets/img/icons/Blastocyst Transfer.jpg'
  ],
};

const blastocystContentData = {
  sections: [
    {
      heading: 'Blastocyst Implantation Transfer',
      paragraphs: [
        'IVF proves to be a great option for couples who cannot conceive naturally. However, there is a small portion of couples who face difficulties in conceiving through a 3rd day embryo transfer through IVF. Some of these couples do not see results until they go through multiple cycles of IVF, while some do not see results at all. For these couples, a great alternative is to opt for a blastocyst IVF transfer on day 5 instead of fertilization instead.',
      ],
      sideImage: '/assets/img/Blastocyst1.jpg',
    },
    {
      heading: 'What is a blastocyst?',
      paragraphs: [
        'A blastocyst is an embryo transfer which involves transferring one or more embryos that are at blastocyst formation stage of development which advanced stage of an embryo that usually happens on the 4th or 5th day of fertilization. This is then transferred to the uterus of the expecting female. To understand it better, it is important to understand the basic differences between a 3rd, 4th, and 5th-day transfer of an embryo.',
      ],
    },
    {
      heading: '3rd-Day Transfer',
      paragraphs: [
        'An embryo starts off as a single cell that divides every 12-24 hours. By the third day of fertilisation, the embryo has divided into 4 or 8 cells and is called a multicellular embryo. This is the stage where most natural IVF Cycles are performed. A 3rd Day embryo transfer is the most commonly used practice in IVF and usually has a high success rate if all the conditions are in the favour of the patient.',
      ],
    },
    {
      heading: '4th-Day Transfer',
      paragraphs: [
        'Around the time of the 4 day, the embryo has divided into 16 cells and has arrived at the stage of what is medically known as Morula. Transfering the morula as part of an IVF Cycle is an unconventional method, though not totally unheard of. There is little scientific evidence that suggests that 4th day Morula transfers are in any way more or less successful than embryo transfer on the 3rd day.',
      ],
    },
    {
      heading: '5th-Day Transfer',
      paragraphs: [
        'A blastocyst is an advanced stage of the embryo where the cell has differentiated into 2 different cell types, with more than 70-100 cells between them. The first one is the inner cell mass which will then turn into the tissues of the baby as it develops, while the other is the trophoblast or trophoectoderm, which forms part of the placenta. This cell division is the major reason why blastocyst transfer on the 5th-6th day are more successful than embryo transfer on the 3rd day. This is especially true and helpful for couples who have been through IVF cycles to no avail or have other reasons behind their inability to conceive naturally.',
      ],
      bottomImage: '/assets/img/Blastocyst2.jpg',
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
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
              <IVFContentSection data={blastocystContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
