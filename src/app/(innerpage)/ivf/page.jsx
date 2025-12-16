import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'IVF (In-Vitro Fertilization)',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/IVF-ICSI.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/IVF-ICSI.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/IVF-ICSI.jpg',
    '/assets/img/IVF-ICSI2.webp'
  ],
};


const ivfContentData = {
  sections: [
    {
      heading: 'In-Vitro Fertilization (IVF) Overview',
      paragraphs: [
        'In-Vitro Fertilization (IVF) is a method that helps couples with fertility related problems and in conceiving a child. During the IVF treatment, the mature eggs are retrieved from the ovaries of women and sperms from the partner which are further fertilized in the laboratory to make embryos. After a few days, these embryos are transferred into the uterus of the woman.',
      ],
    },
    {
      heading: 'Why is IVF Done?',
      paragraphs: [
        'The couples who face challenges in having a baby can opt for IVF treatment. However, there are a wide range of infertility conditions because of which IVF treatment in India is suggested by the IVF specialist in India to the patients. Below mentioned are the following conditions in which IVF is suggested by the specialists:',
      ],
      listItems: [
        'Blocked or damaged fallopian tubes',
        'Endometriosis',
        'Ovulation disorders',
        'Low sperm count or motility',
        'Unexplained infertility',
      ],
    },
    {
      heading: 'What are the steps in IVF Procedure?',
      steps: [
        {
          title: 'Ovarian Hyperstimulation',
          description: 'The IVF procedure starts with the stimulation of ovaries. During a normal menstrual cycle, only one egg is released per month so ovarian stimulation helps to increase the number of eggs available for fertilization.',
        },
        {
          title: 'Oocyte or Egg Retrieval',
          description: 'After a few days when doctors find that the eggs are mature then they go ahead with the retrieval of eggs by using a minor surgical procedure known as transvaginal ultrasound aspiration.',
        },
        {
          title: 'Sperm Collection',
          description: 'The semen sample is collected from the male partner which is processed in the lab to isolate healthy and motile sperm. However, in some cases, if any problem occurs with the sperm quality or quantity then a surgical procedure called TESA (Testicular Sperm Aspiration) may be done to retrieve sperm from testicles or epididymis.',
        },
        {
          title: 'Fertilization',
          description: 'This process can be done through two methods. First, the retrieved eggs and sperm are put in the laboratory dish and left overnight for natural fertilization. Second, the fertilization is done through the ICSI (intracytoplasmic sperm injection) process where a single sperm is injected into every egg directly to achieve fertilization.',
        },
        {
          title: 'Embryo Culture',
          description: 'In this step, the embryologist will monitor the development of embryos to see whether they are properly growing and diving or not. The best quality embryos are selected after complete evaluation for the transferring process.',
        },
        {
          title: 'Embryo Transfer',
          description: 'Once the embryos are ready and grown into a blastocysts then they are transferred into the uterus of a woman by using a thin catheter. This is one of the important steps of the IVF process.',
        },
        {
          title: 'Pregnancy Test',
          description: 'This is the last stage of the IVF process in which after 2 weeks of embryo transfer, the patient has to do a pregnancy test.',
        },
      ],
    },
    {
      heading: 'Benefits of IVF Treatment in India',
      paragraphs: [
        'IVF treatment offers several advantages for couples struggling with infertility:',
      ],
      listItems: [
        'Chances of Pregnancy Increased: If the couple is not able to conceive and fertility treatments are not successful then IVF is the best option. In the IVF treatment in India, the eggs and sperm are combined in a controlled environment that increases the chances of fertilization and pregnancy.',
        'Solution of Various Infertility Causes: There are various fertility issues such as low sperm count in men, blocked fallopian tubes in women, failed IUI cycles, endometriosis, ovulation disorders, and more. These can be fixed through an IVF treatment and couples can consider this as a promising solution for completing their dream of parenthood.',
        'Preimplantation Genetic Testing (PGT): During the IVF process, the genetic testing of embryos can be done before implantation. This can help to decrease the chances of passing genetic conditions to the baby.',
        'Control Over Pregnancy Time: The couples who have busy schedules or currently don\'t want to plan their family, they can freeze their eggs or sperm and can use them in future. So in this way, you can choose the ideal time to get pregnant through the IVF process.',
      ],
    },
    {
      heading: 'IVF Risks and Complications',
      paragraphs: [
        'There are some risks and potential complications that come hand in hand with the IVF treatment:',
      ],
      listItems: [
        'The chances of multiple pregnancies increase such as twins, triplets, or higher-order multiples.',
        'During the IVF process, the women may experience an ectopic pregnancy where embryo implants outside the uterus, often in a fallopian tube. The chances of pregnancy are reduced because the embryo cannot survive outside the uterus.',
        'It is mostly seen that the chances of premature delivery is more in the pregnancies done through IVF process. There might be some chances that the baby weight will be less due to premature delivery.',
        'IVF cannot eliminate the risk of miscarriage. It is similar to natural pregnancy.',
      ],
    },
    {
      heading: 'How much does IVF cost?',
      paragraphs: [
        'The total cost of IVF treatment in India varies on different factors such as selected fertility treatment option, medications needed, location of the clinic, genetic testing, and others. It is suggested to properly discuss the IVF cost with your healthcare provider and available treatment options.',
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
              <IVFContentSection data={ivfContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

