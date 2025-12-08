import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'PGT-A',
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

const pgtAContentData = {
  sections: [
    {
      heading: 'Understanding PGT-A: Preimplantation Genetic Screening for IVF Success',
      paragraphs: [
        'In the IVF journey, one of the most significant steps for a successful pregnancy is choosing healthy embryos to be implanted. This is where PGT-A, or Preimplantation Genetic Testing for Aneuploidy, comes in. The PGT-A test is one of the most powerful screenings for checking chromosomal abnormalities before an embryo is implanted into the uterus. This article delves further into what PGT-A is, how it is conducted, the PGTA testing process, and its significance in IVF procedures, particularly regarding the PGTA IVF success rate.',
      ],
      sideImage: '/assets/img/PGT-A1.jpg',
    },
    {
      heading: 'What is PGT-A?',
      paragraphs: [
        'PGTA stands for Preimplantation Genetic Testing for Aneuploidy. This screening test is usually done on embryos produced with the help of IVF to check for chromosomal abnormalities, such as an extra or missing chromosome associated with Down syndrome or some genetic disease. Using PGTA testing, doctors can identify embryos that are chromosomally normal for a healthy pregnancy.',
      ],
    },
    {
      heading: 'Why Should You Consider PGT-A?',
      paragraphs: [
        'There are several reasons why couples should consider PGT-A testing during IVF:',
      ],
      listItems: [
        'Increased IVF Success Rate: PGT-A helps in selecting the healthiest embryos for implantation, improving the chances of a successful pregnancy.',
        'Reduces Miscarriage Risk: By screening embryos for chromosomal abnormalities, PGT-A reduces the risk of miscarriage, which is more common when embryos have chromosomal issues.',
        'Helps Older Women: Women over 35 have a higher risk of chromosomal abnormalities in their eggs. PGT-A offers a solution to this issue by screening embryos before implantation.',
        'Increased Chances of a Healthy Baby: By using PGTA testing, you can significantly increase the chances of having a healthy baby, as only embryos with a normal chromosomal structure are chosen.',
      ],
    },

    {
      heading: 'PGTA IVF and Its Role in Improving IVF Success Rates',
      paragraphs: [
        'PGT-A is one of the factors that greatly enhance the PGTA IVF success rate. It allows doctors to screen embryos before implantation, thereby selecting the most viable ones, thus increasing the chances of successful pregnancy. This is particularly useful for women of advanced maternal age, who are likely to produce embryos with chromosomal abnormalities.',
        'One of the most important advantages of PGTA IVF is that it reduces the risk of miscarriage. In traditional IVF, even when embryos are healthy, some do not implant because of chromosomal issues. However, with PGT-A screening, the embryos chosen for implantation are genetically healthy, which increases the chances of success.',
      ],
    },
    {
      heading: 'What is the PGTA Test Cost?',
      paragraphs: [
        'The PGTA test cost varies, as this may depend on the clinic or the number of embryos. In general, the PGT-A testing could range from about 25000-50000 above the general costs of the IVF procedure. Even though this seems like a very high cost, it must be realized that PGT-A can eventually save more money in the long term by avoiding repeated IVF cycles or miscarriages, which are emotional and expensive.',
      ],
    },
    {
      heading: 'How Does PGTA Work in IVF?',
      paragraphs: [
        'During IVF, embryos are created in a laboratory setting, where eggs and sperm are combined. Once the embryos develop to a certain stage, usually day 5 or 6, a small number of cells are removed from each embryo. These cells are then tested for chromosomal abnormalities. This process is known as PGTA testing. The best candidates for implantation are those embryos that have survived the screening and are chromosomally normal. Those having abnormal chromosomes are discarded to minimize miscarriages or failed implantations.',
      ],
      sideImage: '/assets/img/PGT-A2.jpg',
    },
    {
      heading: 'PGTA IVF Success Rate: Is It Worth?',
      paragraphs: [
        'One of the main factors in determining whether to undergo PGTA testing is the PGTA IVF success rate. Research has shown that PGT-A can raise the chance of pregnancy by up to 70% in certain instances. In women over 35 years of age, the PGTA IVF success rate can be higher, as the test is able to identify genetically normal embryos, thus reducing chromosomal abnormalities.',
        'This could be a lifesaver for families who have been through many failed IVF cycles, PGT-A would mean that only the healthiest embryos are transferred, thereby increasing the chances of success in any IVF cycle.',
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'PGT-A testing can improve your IVF success rate by examining embryos for chromosomal anomalies. PGTA testing assists in selecting the best embryos to be implanted, thus bringing about a higher success rate along with a reduced risk of miscarriage. Although the PGTA test cost test may become an added expense, the benefits are worth the investment as couples would want to have a healthy and successful pregnancy.',
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
              <IVFContentSection data={pgtAContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
