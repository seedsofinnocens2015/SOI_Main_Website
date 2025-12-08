import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'PGT-M',
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
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/genetic.jpg',
    '/assets/img/genetic.jpg'
  ],
};

const pgtMContentData = {
  sections: [
    {
      heading: 'Understanding PGT-M: Preimplantation Genetic Testing at Seeds of Innocens',
      paragraphs: [
        'Genetic health plays a significant role in preparation for a healthy pregnancy. One of the advanced ways of doing this is PGT-M, (Preimplantation Genetic Testing for Monogenic Disorders). This test will enable the identification of embryos that carry certain genetic disorders before they are implanted in an IVF cycle. Therefore, to make an informed decision, it is necessary to understand what PGT-M testing involves, how it is conducted, and its benefits. This will also include relevant information about the success rate of PGT-M, the cost of testing for PGT-M, and how it differs from PGT-A.',
      ],
      sideImage: '/assets/img/PGT-M1.webp',
    },
    {
      heading: 'What is PGT-M Testing?',
      paragraphs: [
        'Preimplantation genetic testing for monogenic disorders is a terminology referred to as PGT-M, which means the screening process involving genetics to detect single-gene disorders among embryos. Such conditions include cystic fibrosis, sickle cell anemia, Huntington\'s disease, and others. This technique allows embryos that are carrying genetic defects to be identified through testing, and only those not suffering from the defect can be transferred with the process of IVF.',
        'This testing particularly benefits the couples that come with a family history of genetic disorders. This would reduce their anxiety level since it reduces the chance of inherited disorders being transmitted to the child, providing peace of mind to the couple.',
      ],
    },
    {
      heading: 'Comparing PGT-A vs. PGT-M',
      paragraphs: [
        'Many couples wonder about the difference between PGT-A vs. PGT-M and which test is more suitable for their needs:',
      ],
      listItems: [
        'PGT-A screens for chromosomal abnormalities, while PGT-M screens for specific genetic mutations.',
        'PGT-A focuses on overall embryo health, while PGT-M focuses on preventing genetic disorders.',
        'PGT-A is recommended for older women or recurrent miscarriages, while PGT-M is recommended for couples with known genetic disorders.',
      ],
    },
    {
      heading: 'PGT-M Testing Process at Seeds of Innocence',
      paragraphs: [
        'For couples searching for a "PGT-M test near me," At Seeds of Innocence, our advanced testing processes ensure accuracy and care at every step, helping families achieve their dream of healthy parenthood.',
      ],
    },
    {
      heading: 'Why Consider PGT-M?',
      paragraphs: [
        'PGT-M offers several benefits:',
      ],
      listItems: [
        'Prevention of Genetic Disorders: By identifying and avoiding embryos with genetic mutations, PGT-M reduces the risk of inherited conditions.',
        'Increased IVF Success: Although primarily used for genetic screening, PGT-M indirectly boosts the chances of successful pregnancy by focusing on healthy embryos.',
        'Peace of Mind: For families with genetic conditions, PGT-M ensures a healthy start for their child.',
      ],
    },
    {
      heading: 'Where Can I Find PGT-M Testing Near Me?',
      paragraphs: [
        'If you are looking for a trustworthy PGT-M test near me, Seeds of Innocens is here to assist. State-of-the-art laboratories and experienced genetic counselors guide you through this journey personally. With an exceptional reputation for excellence and care, Seeds of Innocence is the name in fertility treatments.',
      ],
    },
    {
      heading: 'PGT-M Success Rate and How It Helps',
      paragraphs: [
        'The PGT-M success rate depends on several factors such as the couple\'s genetic background, the quality of their embryos, and the effectiveness of the IVF overall. On average, by selecting embryos free from monogenic disorders, PGT-M significantly increases the likelihood of a successful and healthy pregnancy.',
        'We have seen countless success stories where PGT-M helped families overcome genetic challenges and welcomed healthy babies into their lives at Seeds of Innocens.',
      ],
    },
    {
      heading: 'How Does PGT-M Work?',
      paragraphs: [
        'The PGT-M test involves a detailed process:',
      ],
      listItems: [
        'IVF Cycle: Embryos are created in a lab through IVF, combining the egg and sperm.',
        'Embryo Biopsy: A small sample of cells is taken from each embryo once they reach the blastocyst stage (day 5 or 6 of development).',
        'Genetic Analysis: These cells are tested for specific gene mutations linked to monogenic disorders.',
        'Embryo Selection: Embryos free of the targeted genetic mutations are selected for implantation.',
      ],
      sideImage: '/assets/img/PGT-M2.jpg',
    },
    {
      heading: 'Choosing Between PGT-A and PGT-M',
      paragraphs: [
        'Both tests play a key role in IVF, but they serve different purposes. Discuss with a genetic counselor at Seeds of Innocence to know which is appropriate for your family.',
      ],
    },
    {
      heading: 'PGT-M Testing Cost in India',
      paragraphs: [
        'One of the most frequently asked questions we hear is, "What is the PGT-M testing cost in India?" The cost is different based on the number of embryos that are tested and the complexity of the genetic disorder that needs to be screened. On average, the cost ranges between ₹50,000 and ₹1,50,000.',
        'We ensure at Seeds of Innocence that the pricing, as well as financing options, are so transparent that this essential service can reach more families. For this reason, investing in PGT-M is an investment in your child\'s future health and happiness.',
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'PGT-M is an essential tool for families wanting to avoid genetic disorders and ensure the health of their children. It increases the success rate of IVF and gives hope to parents with the screening of embryos from monogenic conditions.',
        'We have pledged to provide the best and most innovative fertility solutions, like PGT-M, with care and counseling in Seeds of Innocence. If you are interested in doing a PGT-M test, we are here for you. Contact us today, and let\'s begin to welcome that healthy and happy family you\'ve always wanted.',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
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
              <IVFContentSection data={pgtMContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
