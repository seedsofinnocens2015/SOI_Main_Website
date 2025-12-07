import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Semen Analysis',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/male.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/male.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/male.jpg',
    '/assets/img/male.jpg'
  ],
};

const semenAnalysisContentData = {
  sections: [
    {
      heading: 'What is semen?',
      paragraphs: [
        'Semen is a whitish-gray fluid that releases from your penis, usually after you orgasm. It contains:',
        'Other names for semen include ejaculate or cum.',
      ],
      listItems: [
        'Sperm. Sperm are reproductive cells. Sperm have a unique shape — they look like tadpoles. The head includes genetic material (DNA) which fertilizes an egg cell. The tail helps it "swim" through the female reproductive system to fertilize an egg cell.',
        'Fluids. The fluids lubricate your urethra and make it possible to deposit sperm toward the back of a vagina.',
        'Proteins, vitamins and minerals. These help fuel your sperm cells.',
      ],
      sideImage: '/assets/img/Semen Analysis1.webp',
    },
    {
      heading: 'What is a semen analysis?',
      paragraphs: [
        'A semen analysis is a lab test that examines a semen sample under a microscope. It evaluates:',
      ],
      listItems: [
        'How much sperm is in your semen (sperm count).',
        'Sperm activity (motility).',
        'Sperm shape (morphology).',
      ],
    },
    {
      heading: 'When is a semen analysis performed?',
      paragraphs: [
        'A healthcare provider may recommend a semen analysis for:',
      ],
      listItems: [
        'Infertility. If you\'re having difficulty conceiving a biological child, there may be an abnormality in your semen. A semen analysis evaluates the health of your sperm and the likelihood that you can cause a pregnancy.',
        'Vasectomy follow-up. A vasectomy is a type of permanent birth control that stops sperm from entering your semen and leaving your body. A semen analysis determines whether a vasectomy was successful.',
      ],
    },

    {
      heading: 'How does a semen analysis work?',
      paragraphs: [
        'You must bring a government-issued photo ID (state identification, driver\'s license, passport) to the fertility clinic or lab to verify your identity. A fertility clinic is a medical facility that provides tests and sometimes treatments to people who want to have biological children. Sperm counts vary from day to day, so you may need to provide more than one sample a few weeks apart. Healthcare providers use research-based methods to handle and test the semen.',
        'The preferred method of producing a semen sample during a semen analysis is to masturbate. This often takes place at home. But you can also provide the sample in a private, comfortable room at a fertility clinic or lab. A lab or fertility clinic may provide visual masturbatory material. However, many choose to view erotic material on their smartphone.',
        'Your hands and penis should be clean before you masturbate. A healthcare provider will give you a sterile, wide-mouthed container to collect your semen sample. The container has a label with your name and collection number.',
        'Avoid touching the inside of the container. If you spill any semen or miss the container when you ejaculate, don\'t try to collect it in the container or clean it up. This could contaminate your sample. If you\'re at a fertility clinic or lab, inform a provider once you finish. If you\'re at home, clean it up after securing the lid onto the container.',
        'If you produce a semen sample at home, bring the sample to the fertility clinic or lab within one hour. You should keep your sample at room temperature — about 68 degrees Fahrenheit (20 degrees Celsius). Exposure to different temperatures can affect the sperm.',
        'If you can\'t masturbate due to religious reasons, you still have options. A provider can give you a nonlubricated condom to use during sexual intercourse. After you ejaculate, transfer your semen sample from the condom to the sterile container.',
      ],
    },
    {
      heading: 'What does a sperm analysis include?',
      paragraphs: [
        'It depends on why a healthcare provider ordered a semen analysis. For a fertility test, a semen analysis looks at:',
        'A post-vasectomy semen analysis checks to see whether your semen contains sperm. Expected results show no sperm or very few nonmoving sperm. Abnormal results show moving sperm or high numbers of nonmoving sperm.',
      ],
      listItems: [
        'pH scale. Your pH scale is the levels of acids and bases in your semen. If your semen is too acidic, it can affect the health of your sperm.',
        'Semen volume. Semen volume is the amount of semen in the sample (in milliliters).',
        'Sperm concentration (density). Sperm concentration is the number of sperm per milliliter of semen.',
        'Sperm morphology. Sperm morphology is the size and shape of your sperm.',
        'Sperm motility. Sperm motility is the ability of your sperm to swim.',
        'Time to liquefaction. Time to liquefaction is how quickly your semen changes from a sticky substance to a fluid.',
        'Vitality. Vitality is the percent of live sperm in your semen sample.',
        'White blood cells. The presence of white blood cells may be a sign of infection or inflammation.',
      ],
    },
    {
      heading: 'What should I expect before a semen analysis?',
      paragraphs: [
        'It depends on the reason for your semen analysis.',
        'Before a semen analysis for fertility testing, a healthcare provider may first review your medical history and perform a physical exam, including a genital exam. They\'ll order a semen analysis and give you instructions. You shouldn\'t engage in any sexual activity for two to seven days before a semen analysis. This includes sexual intercourse and masturbation. Refraining from sexual activity ensures that your sperm counts are at their highest level, so you get the most accurate analysis.',
        'A semen analysis after a vasectomy usually takes place eight to 12 weeks after your procedure. It\'s helpful to masturbate or have protected sexual intercourse several times after your vasectomy. This helps clear sperm from your system.',
      ],
    },
    {
      heading: 'What is the normal range for a sperm analysis?',
      paragraphs: [
        'For fertility testing, a healthcare provider will explain your results to you. Normal ranges for a semen analysis include:',
        'It\'s normal to have small amounts of white blood cells in your semen. But more than 1 million white blood cells per 1 milliliter of semen indicates pyospermia.',
      ],
      listItems: [
        'pH scale: 7.2 to 8.0 pH',
        'Semen volume: 1.5 to 7.6 milliliters',
        'Sperm concentration (density): 15 to 259 million per milliliter',
        'Sperm morphology: 4 to 48 percent',
        'Sperm motility: 40 to 81 percent',
        'Time to liquefaction: 15 to 30 minutes after collection',
        'Vitality: 54 to 97%',
      ],
    },
    {
      heading: 'What do abnormal results mean for my ability to help a person conceive?',
      paragraphs: [
        'Abnormal results mean that you have a below-average chance of achieving pregnancy. But a semen analysis isn\'t the only factor in male infertility testing. Extra testing is often necessary to learn more. A provider may order additional tests, including:',
      ],
      listItems: [
        'Blood tests. Blood tests can help determine hormone levels (including low testosterone) that may affect your sperm. They can also identify genetic causes of infertility, including conditions that affect your Y chromosome. If something is affecting your Y chromosome, it can affect your body\'s ability to produce sperm.',
        'Imaging tests. Imaging tests, such as an ultrasound, are a noninvasive way to examine your testicles and other structures in your reproductive system. They can confirm or rule out blockages that prevent your body from releasing sperm into your semen.',
      ],
      bottomImage: '/assets/img/Semen Analysis1.png',
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
              <IVFContentSection data={semenAnalysisContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
