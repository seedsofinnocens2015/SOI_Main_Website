import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Secondary Infertility Causes & Treatment',
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

const secondaryInfertilityContentData = {
  sections: [
    {
      heading: 'Secondary Infertility Causes & Treatment',
      paragraphs: [
        'While it is a common belief that once a couple has had a child, it means that they are fertile enough to have a second one. In fact, a number of couples who face infertility do so when they plan their second or third child.',
        'When a couple fails to conceive another child naturally, the condition is called secondary infertility. For couples unable to conceive their first child, it is easy to seek treatment. However, for couples with child/children conceived naturally before remain in the misconception that they can do it again, naturally. It is not true that once a couple becomes fertile, they remain fertile. On the contrary, the truth is that in between these 2 pregnancies, a lot of things. can change. This can be attributed to secondary infertility in male or female partner. Our experienced fertility specialists at Seeds of Innocens will tell you more about what is secondary infertility, secondary infertility causes, secondary infertility symptoms, secondary infertility treatment, and more. With the right secondary infertility investigations, we help in ensuring high secondary infertility success rates.',
      ],
      sideImage: '/assets/img/genetic.jpg',
    },
    {
      heading: 'Causes of Secondary Infertility',
      paragraphs: [
        'The causes of secondary infertility may remain the same as primary infertility. In the time between the two attempts, there are chances that the husband or wife may have gained weight, had a condition develop, or developed an unhealthy lifestyle. Furthermore, in the time that passed by, the health of the eggs or the sperms may have decreased. For men, the main cause of secondary infertility is often abnormalities in sperm and ejaculate. For women, however, the major causes of secondary infertility are as follows:',
      ],
      listItems: [
        'Irregular menstrual cycles',
        'Endometriosis',
        'Pelvic Adhesions',
        'Fibroids and Polyps',
        'Dimished Ovarian Reserve',
      ],
    },
    {
      heading: 'Secondary infertility: Struggle inconceivable Vs Conceivable',
      paragraphs: [
        'A woman empowered to give birth to her own child embarks the journey of life smoothly and happily is a well-known fact. The stigma and agony of being infertile may not be experienced by some women as they naturally conceived and gave birth to a healthy baby in the first go. It is also possible that some couples may not believe that they are having problem in conceiving for the second time as they experienced their first pregnancy without any medical help.',
      ],
    },
    {
      heading: 'What is secondary infertility?',
      paragraphs: [
        'Inability to conceive or to carry the baby to term for the second time is referred to as secondary infertility. The female must have had at least one conception, successful or unsuccessful in the past. The pain, anxiety and sheer despair is not less than primary infertility and approximately 11% couples suffer from secondary infertility.',
        'The main causes of secondary infertility may be same as of primary infertility.',
      ],
    },
    {
      heading: 'Key Factors Contributing to Secondary Infertility',
      paragraphs: [
        'Several factors can contribute to secondary infertility:',
      ],
      listItems: [
        'Age: Fertility declines with advancing age. It is very much likely that if you had conceived earlier in your early 30\'s and now trying in late 30\'s you face the problem of secondary infertility. Ovarian reserve declines rapidly in females with advancing age, sperm quality is also affected with age.',
        'Primary infertility cause: It is possible that if a woman has conceived to full term through IVF in the previous attempt then she might face the same problem for the second time as the reason of primary infertility might have not been cured yet.',
        'Fertility issues: Fertility issues such as PCOS, endometriosis, poor ovarian reserve, fallopian tube factors play a significant role in secondary infertility. Problems with the uterus, fibroids or endometrial polyps, previous miscarriages also diminish the chances of pregnancy. Sperm quality also declines by age, the use of narcotics, infection, some drugs and excessive smoking or abuse of alcohol may lead to secondary infertility.',
      ],
    },
    {
      heading: 'How is secondary infertility diagnosed?',
      paragraphs: [
        'The diagnosis of secondary infertility is same as of primary infertility. Blood tests for hormones, ultrasounds, CT scan, hysteroscopy and laparoscopy may be performed to rule out the cause. For males, semen analysis and blood tests may serve the purpose.',
      ],
    },
    {
      heading: 'What is the treatment of secondary infertility?',
      paragraphs: [
        'Fertility drugs to boost up the hormones, IUI, IVF, ICSI or donor (egg or sperm) may be the treatment options. If age is too advanced or the case is of uterine dysfunction or hysterectomy.',
      ],
    },
    {
      heading: 'Expert Care at Seeds of Innocens',
      paragraphs: [
        'Secondary infertility sufferers often don\'t seek advice early, till the time they had convinced themselves that they are not able to produce their offspring now on their own. At Seeds of Innocens we encourage such couples to open up and advise them not to keep themselves in isolation for long. It is not incurable and it is too exhilarating to have the bundle of joy again.',
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
              <IVFContentSection data={secondaryInfertilityContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
