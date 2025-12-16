import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Difference between PGT A & PGT-M/SR',
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

const pgtDifferenceContentData = {
  sections: [
    {
      heading: 'Pre-implantation Genetic Testing & PGT A, PGT-M',
      paragraphs: [
        'Pre-implantation genetic testing is detection of genetic information in an embryo made by examining a few cells which are representative of the whole embryo, at the pre-implantation stage of development. Previously it was called as PGS (pre-implantation genetic screening) & PGD (pre-implantation genetic diagnosis), which are now replaced by the terms PGT-A (PGT for aneuploidies) & PGT-M & PGT-SR (PGT for monogenic disorders & structural rearrangement) respectively.',
      ],
      sideImage: '/assets/img/PGT A & PGT-MSR.jpg',
    },
    {
      heading: 'Difference between PGT A & PGT-M/SR',
      paragraphs: [
        'Understanding the key differences between PGT-A and PGT-M/SR helps couples make informed decisions about their fertility treatment options.',
      ],
    },
    {
      heading: 'PGT-A (Pre-implantation Genetic Testing for Aneuploidies)',
      paragraphs: [
        'This is indicated when genetic parents are presumed or known to be normal chromosomally.',
        'The embryos are screened for most of the aneuploidies for which genetic probes are available. These aneuploidies can arise de novo as both the parents are at high risk, like old age parents.',
      ],
      listItems: [
        'This is done in infertile couples with recurrent implantation failure, recurrent pregnancy loss patient, old females, males more than 50 years of age or severe male factor infertility.',
        'No preliminary work up like collection of parents\' blood/ saliva is required which is required to identify the flanking markers/ genetic probes linked with mutation.',
        'It decreases the need of invasive antenatal testing as well.',
      ],
    },
    {
      heading: 'PGT-M/SR (Pre-implantation Genetic Testing for Monogenic Disorders & Structural Rearrangement)',
      paragraphs: [
        'This is indicated when one or both genetic parents carry a genetic mutation or chromosomal rearrangement.',
        'Also, whenever the disease we are looking for is known, like hereditary cancers or we are doing HLA matching.',
        'Genetic testing is done to determine if the same genetic mutation or unbalanced chromosomal anomalies have been transmitted to the formed embryos, & therefore to decide which embryos can be transferred intra-uterine & which can\'t be.',
        'The couple are usually able to conceive normally in these patients but to confirm the absence of similar disease in their child, they opt for PGT-M/SR.',
      ],
      listItems: [
        'These tests require preliminary work up like collection of parents\' blood / saliva, required to identify the flanking markers/ genetic probes linked with mutation.',
      ],
    },
    {
      heading: 'Key Differences Summary',
      paragraphs: [
        'In short, both PGT-A & PGT-M / SR differ basically in the indication for which they are done & the work up required for them also differs slightly. The genetic testing is done on the cells removed from the embryos which we get after IVF & reach day 5 stage. The best embryos which are normal chromosomally are transferred in to the patient once the endometrial lining is ready. This gives the best chance to the patient to have a successful & healthy pregnancy, decreased chance of miscarriages/ aneuploid conception and a live & healthy baby.',
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
              <IVFContentSection data={pgtDifferenceContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
