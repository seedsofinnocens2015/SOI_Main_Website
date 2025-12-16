import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Couple Carrier Screening',
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

const coupleCarrierScreeningContentData = {
  sections: [
    {
      heading: 'Couple Carrier Screening: Ensuring a Healthy Future',
      paragraphs: [
        'Planning a family is very exciting but does not come easy. One of the most critical steps that the couple can make before conception is Carrier Screening, which is also known as a genetic test, identifying whether or not prospective parents carry genes that can cause conditions inherited in them and affect the health of the child. Given the advancements in reproductive genetics, screening has become an important part of family planning; this makes it possible for couples to make informed decisions and reduce the risk of genetic disorders to their offspring.',
      ],
      sideImage: '/assets/img/Couple Carrier Screening.webp',
    },
    {
      heading: 'What is Couple Carrier Screening?',
      paragraphs: [
        'Carrier screening is the genetic test developed to detect mutations in genes causing inherited disorders. Though many people are the carriers of genetic conditions without showing any symptoms, it occurs that they would carry a mutation within the same gene when both partners of a couple are the carriers.',
        'This screening helps in identifying conditions such as:',
      ],
      listItems: [
        'Cystic fibrosis',
        'Sickle cell anemia',
        'Tay-Sachs disease',
        'Thalassemia',
        'Spinal muscular atrophy',
      ],
    },
    {
      heading: 'Benefits of Screening',
      paragraphs: [
        'By undergoing this test, couples can determine their risk of having a child affected by a genetic disorder and explore reproductive options to ensure a healthy pregnancy.',
      ],
    },
    {
      heading: 'Who Should Consider Couple Carrier Screening?',
      paragraphs: [
        'While Couple Carrier Screening is beneficial for all couples, it is especially recommended for:',
      ],
      listItems: [
        'Couples with a family history of genetic disorders.',
        'Couples undergoing assisted reproductive technologies like IVF',
        'Those who have repeated miscarriages.',
      ],
    },
    {
      heading: 'Early Screening Benefits',
      paragraphs: [
        'Early screening helps couples to be proactive towards a successful and healthy pregnancy.',
      ],
    },
    {
      heading: 'How is Couple Carrier Screening Done?',
      paragraphs: [
        'The screening process is simple and involves:',
      ],
      listItems: [
        'Sample Collection: A blood or saliva sample is drawn from both partners.',
        'Genetic Testing: The test sample is forwarded to the laboratory to identify any gene mutations through genetic testing.',
        'Results & Counselling – A genetic counsellor interprets results and discusses risk and reproductive choices.',
      ],
    },
    {
      heading: 'Reproductive Options',
      paragraphs: [
        'If the couple is both carriers of the same genetic disorder, they may consider preimplantation genetic diagnosis during IVF, a donor egg or sperm, or other assisted reproductive techniques to prevent passing the disorder to their child.',
      ],
    },
    {
      heading: 'Couple Carrier Screening Test Cost',
      paragraphs: [
        'The Couple Carrier Screening test cost varies based on the number of conditions screened, the types of tests, and the clinic or laboratory performing the analysis. In India, it usually lies in the range from ₹10,000 to ₹50,000. Complete panels can involve more than one condition and hence may be more expensive but offer a very detailed risk assessment.',
        'Seeds of Innocens provides the latest Couple Carrier Screening at competitive prices. This ensures that couples get the most accurate and reliable results for planning their family.',
      ],
    },
    {
      heading: 'Finding a Carrier Screening Test Near Me',
      paragraphs: [
        'If you seek to obtain a Carrier Screening test near me, it is true to look for a reliable fertility clinic or genetic testing centre. Seeds of Innocens offers professional genetic screening services with expert consultancy. Our advanced facilities for genetic testing along with skilled counsellors ensure you get the best advice at each step on your way through reproductive life.',
      ],
    },
    {
      heading: 'Benefits of Couple Carrier Screening',
      paragraphs: [
        'Couple Carrier Screening offers numerous advantages:',
      ],
      listItems: [
        'Informed Decision-Making – Knowing your genetic status helps you make informed choices about pregnancy.',
        'Reduced Risk of Genetic Disorders – Couples can take preventive measures if they are at risk.',
        'Personalized Reproductive Options – Offers alternatives like PGD, donor eggs, or sperm.',
        'Peace of Mind – Reduces uncertainty and enhances confidence in pregnancy planning.',
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
              <IVFContentSection data={coupleCarrierScreeningContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
