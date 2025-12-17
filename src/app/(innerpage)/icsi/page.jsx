import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'ICSI (Intracytoplasmic Sperm Injection)',
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
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/IVF-ICSI.jpg',
    '/assets/img/IVF-ICSI2.webp'
  ],
};

const icsiContentData = {
  sections: [
    {
      heading: 'What is ICSI?',
      paragraphs: [
        'A specialized method that is used in Assisted Reproductive Technology (ART) to treat infertility is known as Intracytoplasmic Sperm Injection (ICSI). It is a part of the IVF process which involves the direct injection of a single sperm into the egg for fertilization. The ICSI process is done by highly skilled embryologists using a micromanipulation technique. The specialists mainly advise the ICSI process for couples with male infertility factors such as low sperm count, poor sperm motility, or abnormal sperm morphology.',
      ],
    },
    {
      heading: 'About ICSI Treatment',
      paragraphs: [
        'ICSI is an advanced fertility treatment technique that has revolutionized the treatment of male infertility. By directly injecting a single, carefully selected sperm into an egg, ICSI bypasses many of the natural barriers to fertilization, making it possible for couples with severe male factor infertility to achieve pregnancy.',
      ],
    },
    {
      heading: 'Who Needs ICSI?',
      paragraphs: [
        'The ICSI process is mainly recommended for couples who are undergoing IVF and have certain male infertility factors:',
      ],
      listItems: [
        'Low sperm count: If the sperm count of a male is low then through the ICSI process, selected sperm can directly inject into an egg and increase the chances of fertilization.',
        'Poor sperm motility: The natural conception is hampered by low sperm motility. If the sperm have trouble in moving or swimming then it becomes difficult for them to reach the egg and fertilization will not happen. In this case, ICSI can help by directly injecting a single sperm into the egg.',
        'Abnormal sperm morphology: If the shape of the sperm is abnormal then it is not able to penetrate the outer layer of the egg. However, through ICSI, a single sperm with a normal shape can be directly injected into the egg.',
        'Previous IVF failure: ICSI is a major advantage for couples who have experienced failed IVF because it increases the chances of successful fertilization.',
        'Obstructive azoospermia: In this condition, there is a blockage in the male testis from where sperm cannot ejaculate so through the ICSI process, it can be directly retrieved from the testicle or epididymis and injected into the egg for fertilization.',
        'Unexplained infertility: In cases of unexplained infertility, the ICSI technique is advised by the doctor as it improves the chances of ICSI fertilization.',
      ],
    },
    {
      heading: 'ICSI Treatment Step-By-Step',
      paragraphs: [
        'Several key steps are involved in the ICSI treatment from consultation to embryo transfer:',
      ],
      steps: [
        {
          title: 'Initial Consultation',
          description: 'The first step is to consult with the fertility specialist to review medical history, perform required tests, and discuss the treatment.',
        },
        {
          title: 'Ovarian Stimulation',
          description: 'The female undergoes ovarian stimulation before egg retrieval to encourage the ovaries to produce multiple eggs.',
        },
        {
          title: 'Egg Retrieval',
          description: 'The egg retrieval procedure starts when the follicle reaches an appropriate size. It is a small surgical procedure done under anesthesia where a thin needle is inserted into each follicle to retrieve eggs.',
        },
        {
          title: 'Sperm Collection',
          description: 'The sperm is collected from the male partner on the day of egg retrieval. If the quality or quantity of the sperm is not proper then it can be retrieved through other methods such as TESA or TESE.',
        },
        {
          title: 'ICSI Procedure',
          description: 'During the ICSI process, a single sperm is selected by using a specialized microscope and micromanipulation and directly injected into each mature egg. This procedure is done by highly skilled and trained embryologists.',
        },
        {
          title: 'Fertilization Check',
          description: 'To confirm the fertilization, the eggs are observed in the laboratory and allowed the embryos to develop for several days.',
        },
        {
          title: 'Embryo Transfer',
          description: 'At the time of embryo transfer, one or more healthy embryos are transferred into the woman\'s uterus by using a small catheter. It is usually done after 3-5 days of fertilization.',
        },
        {
          title: 'Progesterone Supplementation',
          description: 'To support the uterine lining, the woman may be prescribed progesterone supplements once the embryo is transferred. This will help to improve the chances of embryo implantation.',
        },
        {
          title: 'Pregnancy Test',
          description: 'A pregnancy test is done after 10-14 days of embryo transfer to determine whether the treatment was successful or not.',
        },
      ],
    },
    {
      heading: 'ICSI Treatment Success Rate',
      paragraphs: [
        'The success rate of ICSI treatment is around 60-70% as it varies on several factors such as a woman\'s age, sperm & egg quality, infertility cause, and clinic reputation. Additionally, the ICSI attempts, advanced technology, and others also vary the success rate of the ICSI treatment.',
      ],
    },
    {
      heading: 'Risks Associated with ICSI',
      paragraphs: [
        'There are several potential complications and risks associated with the ICSI procedure:',
      ],
      listItems: [
        'Failed Fertilization – Even after a proper ICSI procedure, there is still a possibility of failed fertilization because sometimes injected sperm fails to fertilize the egg.',
        'Embryo Quality – The quality of the resulting embryos is not guaranteed by the ICSI. There are chances that some embryos may not develop properly or have chromosomal abnormalities and this will impact the successful pregnancy chances.',
        'Birth Defects – As per some studies, it is suggested that the risk of certain birth defects in babies is higher who are conceived through procedures like ICSI.',
      ],
    },
    {
      heading: 'How Much Does ICSI Treatment Cost?',
      paragraphs: [
        'The ICSI treatment price is widely dependent on several factors such as fertility clinic location, the expertise of the medical team, medications required, or additional services. It is suggested to consult with a specialist first and get a detailed breakdown of the ICSI treatment cost.',
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
              <IVFContentSection data={icsiContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
