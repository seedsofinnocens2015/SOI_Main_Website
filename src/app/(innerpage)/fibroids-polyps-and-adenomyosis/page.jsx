import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Fibroids, Uterine Polyps and Adenomyosis Treatments',
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

const fibroidsPolypsAdenomyosisContentData = {
  sections: [
    {
      heading: 'Understanding Fibroids, Polyps, and Adenomyosis',
      paragraphs: [
        'Fibroids, Polyps, and Adenomyosis are the names of the various kinds of growths and developments that may grow on different organs of the reproductive system of a female. These have a great tremendous negative impact on the fertility of a woman. Here is all that you need to know about these three conditions:',
      ],
      sideImage: '/assets/img/Endometriosis.webp',
    },
    {
      heading: 'What are Fibroids?',
      paragraphs: [
        'These are non-cancerous tumours that grow in and around the ovaries, fallopian tubes, and uterus. These may vary in size.',
      ],
    },
    {
      heading: 'Symptoms of Fibroids',
      paragraphs: [
        'Symptoms may include:',
      ],
      listItems: [
        'Irregular menstrual cycle',
        'Pelvis pain',
        'Frequent urge to urinate',
        'Difficulty in emptying the bladder',
        'Constipation',
        'Painful intercourse',
        'Backache or leg pain',
      ],
    },
    {
      heading: 'Asymptomatic Fibroids',
      paragraphs: [
        'Sometimes fibroids even go unnoticed because they may be asymptomatic.',
      ],
    },
    {
      heading: 'What is Uterine Polyps?',
      paragraphs: [
        'These are small and non-cancerous growths found on the uterus lining, cervix and vagina.',
      ],
    },
    {
      heading: 'Symptoms of Polyps',
      paragraphs: [
        'Symptoms of Polyps may include:',
      ],
      listItems: [
        'Spotting in between periods',
        'Irregular menstrual cycle',
        'Heavy periods',
        'Spotting after intercourse',
      ],
    },
    {
      heading: 'What is Adenomyosis?',
      paragraphs: [
        'When the endometrial tissue that makes up the uterus lining begins to grow on the muscular layer of the uterus, also known as the myometrium. Specialists do not yet know the exact cause of this disease, but it is most often found in women beyond the age of 40, or the ones who have had 3, 4 or more children.',
      ],
    },
    {
      heading: 'Symptoms of Adenomyosis',
      paragraphs: [
        'Mostly, Adenomyosis is accompanied by no symptoms. However, there are some symptoms that may be telltale signs of the condition, like:',
      ],
      listItems: [
        'Heavy or prolonged periods',
        'Sharp pain and cramps during periods',
        'Painful intercourse',
        'Spotting and passing blood clots between periods',
        'Tender or enlarged abdomen',
      ],
    },
    {
      heading: 'SOI Expertise',
      paragraphs: [
        'At SOI, we have an extensive experience in helping women with these conditions understand their situation, and assist them in achieving their dream of parenthood. SOI also provides an extensive service in treating these conditions shall there be a need for it.',
      ],
    },
    {
      heading: 'Q. Can you have both polyps and fibroids?',
      paragraphs: [
        'Yes, you can have a certain type of polyps and fibroids coexisting. However, the chances of that happening to women under the age of 45 are really less. If you wish to know more about your health in relation to these conditions, book an appointment with our experts today.',
      ],
    },
    {
      heading: 'Q. Can polyps affect pregnancy?',
      paragraphs: [
        'Yes. Polyps are a known factor of infertility, and there are research studies that have concluded the removal of polyps increases the likelihood of pregnancy in women.',
      ],
    },
    {
      heading: 'Q. Can a polyp cause a miscarriage?',
      paragraphs: [
        'A normal uterus and uteral lining are important factors to maintain pregnancy, and to keep the baby healthy. That is why polyps, especially uterine polyps are known to increase the likelihood of a miscarriage.',
      ],
    },
    {
      heading: 'Q. Can a polyp be removed while pregnant?',
      paragraphs: [
        'Polyps are growths that occur in the uterus, cervix, and vagina of a women. Needless to say, these locations cannot be operated for the removal of polyps during pregnancy as this may pose the threat of a miscarriage or preterm delivery due to the surgery. If you are pregnant and may have polyps, talk to our experts to know about your next step.',
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
              <IVFContentSection data={fibroidsPolypsAdenomyosisContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
