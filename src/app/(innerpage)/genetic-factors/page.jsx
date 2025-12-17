import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Genetic Factors in Infertility',
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

const geneticFactorsContentData = {
  sections: [
    {
      heading: 'Genetic Factors',
      paragraphs: [
        'There are several factors of infertility that do not relate to diseases that a female developed in her life due to infections, exposures, or other underlying conditions. In a few cases, infertility is caused due to a mix of genetic factors. These factors may be an inherited chromosome abnormality or can be a single gene defect/disorder passed from one generation to the next.',
        'Aside from this, if there is any history of early menopause, endometriosis, or any other infertility factors in the women of your family, this also puts you at a higher risk of getting these diseases as well.',
      ],
    },
    {
      heading: 'Chromosomal Abnormalities',
      paragraphs: [
        'One of the most common causes of low implantation rate, embryos with chromosomal abnormalities often also have a high chance of causing a miscarriage. Even with a successful pregnancy and birth, there are chances that the child born will have a chromosomal defect like down syndrome, or infertility.',
      ],
    },
    {
      heading: 'Inherited Genetic Diseases',
      paragraphs: [
        'In many other cases, infertility factors are inherited genetic diseases, that may have been transferred due to abnormal or mutated genes. There are diseases that cause changes in the DNA sequence of a gene, causing lack of function or the probability of dysfunction of the gene. Most commonly, single gene disorders like cystic fibrosis and Tay Sachs, even though rare, cause a devastating effect on the family.',
      ],
    },
    {
      heading: 'Getting Ahead of Genetic Factors',
      paragraphs: [
        'Pre-implantation genetic diagnosis (PGD) is a simple testing of the genes of both the parents in order to identify these genetic disorders, chromosomal abnormalities, and inherited genetic diseases. This is an important step in preventing a number of things, including identification of genetic disorders, single gene mutations, and chances of miscarriages caused by chromosomal abnormalities. The genetic testing facility at SOI has the latest technology to not only detect problems like these, but also to tackle the consequences. With our technology, couples have been realizing their dream of parenthood even with all the factors that prevented them before.',
      ],
    },
    {
      heading: 'Q. What genetic disorders can be detected during pregnancy?',
      paragraphs: [
        'There are a number of conditions that can be detected during pregnancy.',
      ],
      listItems: [
        'Down Syndrome',
        'Trisomy 18',
        'Trisomy 13',
        'Spina bifida',
      ],
    },
    {
      heading: 'Q. Who has stronger genes mother or father?',
      paragraphs: [
        'Several research studies have pointed out that the genes obtained from the father are often more dominant than the ones received from the mother.',
      ],
    },
    {
      heading: 'Q. What genetic disorders cause miscarriage?',
      paragraphs: [
        'Chromosomal abnormalities are the major cause of miscarriages in women.',
      ],
    },
    {
      heading: 'Q. Is genetic testing safe during pregnancy?',
      paragraphs: [
        'Yes. Not only is it safe during pregnancy, it is also an important part of making sure that the baby growing inside a mother is safe and healthy.',
      ],
    },
    {
      heading: 'Q. Should I get genetic testing during pregnancy?',
      paragraphs: [
        'Yes. Genetic testing is an important part of ensuring a healthy baby is delivered to a couple expecting their child. For more information on these tests, simply visit one of our centers. Book an appointment.',
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
              <IVFContentSection data={geneticFactorsContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

