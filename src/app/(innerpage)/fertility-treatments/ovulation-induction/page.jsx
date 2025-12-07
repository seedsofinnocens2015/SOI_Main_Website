import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Ovulation Induction',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/ovarian.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/ovarian.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/ovarian.jpg',
    '/assets/img/icons/PRP & Ovarian Rejuvenation.jpg'
  ],
};

const ovulationContentData = {
  sections: [
    {
      heading: 'What is ovulation induction?',
      paragraphs: [
        'Ovulation induction is the process of using medications to stimulate ovulation in women who have irregular or absent ovulation (anovulation). According to the National Institutes of Health, 25 to 30 percent of women with infertility have problems with ovulation.',
        'Normal ovulation occurs when the ovary releases a mature egg in preparation for that egg to be fertilized. Normal ovulation occurs roughly once every 28 days during a woman\'s menstrual cycle. Intervals of 21 to 35 days are considered acceptable and reflective of normal ovulation. If fertilization does not occur, the mature egg and any supplementary tissues are broken down and cleared from the uterus naturally.',
        'When ovulation happens less than once every 35 days or is unpredictable, it is considered to be irregular. When ovulation is completely unpredictable – in interval or duration – it is considered oligoovulation. If it doesn\'t occur at all, it is called anovulation. Ovulatory problems impact fertility by taking away the predictability of ovulation and potentially the availability of an egg to be fertilized.',
        'The goal of ovulation induction is to increase a woman\'s chances of conceiving a child, either through sexual intercourse or by using intrauterine insemination (IUI) or another fertility treatment. However, when the absence of ovulation is a symptom of another fertility issue, treating the underlying problem can also restore normal ovulation and fertility.',
      ],
      sideImage: '/assets/img/Ovulation.jpg',
    },
    {
      heading: 'Ovulation induction at a glance',
      paragraphs: [
        'Ovulation induction is a treatment for anovulation (irregular ovulation), an infertility condition in which follicles in a woman\'s ovary do not mature and release eggs (ovulate).',
      ],
      listItems: [
        'Anovulation can be caused by certain reproductive disorders such as polycystic ovary syndrome (PCOS), nutritional problems or excessive exercise.',
        'Ovulation induction is typically achieved with a variety of medications that stimulate the ovary to produce and release eggs.',
        'If the treatment is successful, the woman will ovulate and can become pregnant naturally using intrauterine insemination (IUI) or other fertility treatments.',
        'Approximately 25 percent of female infertility cases stem from problems with ovulation, so ovulation induction can be a beneficial and cost-effective first treatment.',
      ],
    },
    {
      heading: 'Medications used for ovulation induction',
      paragraphs: [
        'Ovulation induction uses a variety of hormone-based medications to regulate a woman\'s reproductive hormones and increase the chances of ovulation. Some of the commonly used medications are:',
        'In some cases, treating another condition, such as obesity or hypothyroidism, can jump-start ovulation naturally.',
      ],
      listItems: [
        'Clomiphen citrate: Stimulates ovulation in women who have normal pituitary (a gland in the brain) hormones but in whom the normal monthly changes in these hormones are not occurring. Most patients know this medication by its brand name Clomid.',
        'Aromatase inhibitors: With similar indications as for clomiphene citrate, this type of medication is very effective in patients with PCOS. Most patients know this medication as letrozole or by the brand name Femara.',
        'Insulin-sensitizing agents: These are used in some PCOS patients who have evidence of diabetes or prediabetes. Most patients know this medication as metformin.',
        'Gonadotropins: Consist of two injectable hormones, luteinizing hormone (LH) and follicle-stimulating hormone (FSH), that encourage egg development and are normally produced by the pituitary gland. Because of how powerfully gonadotropins stimulate egg development, they require more frequent monitoring than clomiphene citrate and letrozole. Risks include multiple pregnancy and ovarian hyperstimulation syndrome (OHSS), in which the ovaries become overstimulated and swollen.',
      ],
    },
    {
      heading: 'Who could benefit from ovulation induction',
      paragraphs: [
        'Ovulation induction is a common treatment for women with absent or infrequent ovulation. Women with ovulation-interrupting disorders such as PCOS can also benefit from ovulation induction.',
        'Ovulation induction also works in conjunction with in vitro fertilization (IVF) by stimulating multiple mature eggs to release for collection and use in lab fertilization. This is typically called controlled ovarian hyperstimulation.',
        'When determining whether or not to use ovulation induction, physicians usually look at:',
      ],
      listItems: [
        'Disorders that can directly inhibit normal ovulation such as PCOS.',
        'A woman\'s hormone levels, specifically the presence of FSH, AMH and LH.',
        'Disorders than can indirectly affect ovulation, such as thyroid disorders, eating disorders and obesity.',
        'The amount of exercise a woman does.',
      ],
    },
    {
      heading: 'Superovulation',
      paragraphs: [
        'For women who continue to experience abnormal ovulation after ovulation induction treatment, physicians can also try superovulation. Superovulation uses the human chorionic gonadotropin hormone to induce the release of potential mature eggs in the follicle.',
      ],
    },
    {
      heading: 'Risks and side effects of ovulation induction',
      paragraphs: [
        'Ovulation induction medications can sometimes cause OHSS (Ovarian Hyperstimulation Syndrome). The side effects of OHSS range from mild to severe, and usually fade after a few weeks without treatment. They can include:',
      ],
      listItems: [
        'Bloating.',
        'Nausea.',
        'Headaches.',
        'Loss of breath.',
        'Hot flashes.',
        'Weight gain.',
        'Tenderness in the pelvic region.',
        'Blurry vision.',
        'The ovarian superovulation treatment can cause multiple eggs to release, increasing the chance of multiple fertilized eggs (embryos) and a high-risk pregnancy.',
      ],
      sideImage: '/assets/img/Induction.jpg',
    },
    {
      heading: 'Benefits of Ovulation Induction',
      paragraphs: [
        'Ovulation induction is usually one of the first treatments used for infertility because it is noninvasive and relatively low cost compared with other fertility treatments, such as IVF that includes costs of tests, medications, minor procedures and lab work.',
        'For more severe cases of anovulation or other causes of infertility, ovulation induction can also be an effective treatment in conjunction with IVF, intrauterine insemination (IUI) and other holistic treatments.',
      ],
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
              <IVFContentSection data={ovulationContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
