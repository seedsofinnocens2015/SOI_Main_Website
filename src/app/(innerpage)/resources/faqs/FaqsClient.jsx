"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import FAQAccordion from '@/app/Components/FAQAccordion';
import React from 'react';

const headingData = {
  title: 'FAQs',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2webp',
    '/assets/img/recent_post2webp'
  ],
};

const faqsContentData = {
  sections: [
    {
      heading: 'Frequently Asked Questions',
      paragraphs: [
        'Find comprehensive answers to commonly asked questions about IVF, fertility treatments, and your journey with Seeds of Innocens. If you have additional questions, our team is always available to help.',
        'We have compiled answers to the most frequently asked questions to help you understand the IVF process, treatment options, and what to expect during your journey with us.',
      ],
    },
  ],
};

const ivfFAQs = [
  {
    "question": "1. What is infertility?",
    "answer": [
      "Infertility simply means the inability to conceive after 12 months of consistent and unprotected intercourse (or after six months if the woman is over 35 years). It affects both partners and usually requires medical examination to determine the cause, rather than waiting longer."
    ]
  },
  {
    "question": "2. What are the major causes of infertility?",
    "answer": [
      "The major causes may include ovulatory problems, tubal blockages, endometriosis, poor quality of sperm, hormonal imbalance, genetic factors, age factor, and sometimes unknown causes making it unexplained infertility."
    ]
  },
  {
    "question": "3. How prevalent is infertility?",
    "answer": [
      "Infertility occurs in about one in six couples globally; hence, it is a common reproductive health issue that can be treated medically with proper interventions."
    ]
  },
  {
    "question": "4. When should a couple seek help from a fertility expert?",
    "answer": [
      "A couple needs assistance in case of lack of conception after one year (or six months if the woman is above 35 years), known cases of infertility like irregular periods, history of pelvic infection among other factors."
    ]
  },
  {
    "question": "5. Is there any way to treat infertility?",
    "answer": [
      "Yes, Many cases can be solved with medications, lifestyle modifications, IUI, IVF, ICSI, fertility preservation, surgeries, and/or genetic evaluation based on the underlying condition."
    ]
  },
  {
    "question": "7. Which factors can cause infertility in females?",
    "answer": [
      "There are PCOS, endometriosis, tubal factor, low ovarian reserve, uterine conditions, hormonal imbalances, and age-related declining fertility."
    ]
  },
  {
    "question": "8. Is it possible for PCOS to lead to infertility?",
    "answer": [
      "Yes, PCOS interferes with ovulation and therefore makes conception difficult. However, many women with PCOS still get pregnant through lifestyle modification and fertility treatments."
    ]
  },
  {
    "question": "9. How can age influence fertility in females?",
    "answer": [
      "Fertility declines in females starting from 30 years old, but even faster when reaching 35 due to declining quality and quantity of eggs."
    ]
  },
  {
    "question": "10. What is ovarian reserve?",
    "answer": [
      "Ovarian reserve is the number and quality of eggs in the ovaries. This is usually evaluated through AMH blood test and ultrasound."
    ]
  },
  {
    "question": "11. Are irregular periods a symptom of infertility?",
    "answer": [
      "Yes, Irregular or absent periods might imply that ovulation doesn't take place regularly."
    ]
  },
  {
    "question": "12. Explain what endometriosis is.",
    "answer": [
      "It is the condition where the tissue resembling the lining of the uterus grows outside the uterus. It might affect fertility, cause pain, and affect reproductive functioning."
    ]
  },
  {
    "question": "13. Can blocked fallopian tubes be a reason for infertility?",
    "answer": [
      "Yes, the problem occurs if the tubes are not able to conduct eggs and sperm and therefore fertilization is hindered."
    ]
  },
  {
    "question": "14. Do uterine fibroids influence fertility?",
    "answer": [
      "Some of the uterine fibroids are able to prevent the implantation of the embryo or make carrying pregnancy difficult depending on their size and location."
    ]
  },
  {
    "question": "15. What is the list of fertility tests prescribed for women?",
    "answer": [
      "They include AMH test, hormone profile, pelvic ultrasound, ovulation monitoring, HSG, hysteroscopy, genetic testing in necessary situations."
    ]
  },
  {
    "question": "16. Can lifestyle impact fertility?",
    "answer": [
      "Yes, maintaining a proper weight, exercising, not smoking, drinking little alcohol and dealing with stress effectively can increase fertility."
    ]
  },
  {
    "question": "17. What are the causes of male infertility?",
    "answer": [
      "Low sperm count, bad motility, morphological abnormalities, hormonal issues, genetic factors, infections, and lifestyle factors are among those."
    ]
  },
  {
    "question": "18. What tests diagnose male infertility?",
    "answer": [
      "The usual tests are semen analysis, hormone tests, physical exam, ultrasounds in some cases, and genetic tests."
    ]
  },
  {
    "question": "19. What is a semen analysis?",
    "answer": [
      "Semen analysis determines sperm count, mobility, motility, volume, and other elements to assess male fertility potential."
    ]
  },
  {
    "question": "20. Is low sperm count treatable?",
    "answer": [
      "Yes, depending on the underlying causes, treatment may include medications, modifications of one’s lifestyle, surgical procedures or artificial reproductive techniques."
    ]
  },
  {
    "question": "21. How does smoking impact male fertility?",
    "answer": [
      "Smoking can decrease sperm count, damage DNA, and generally diminish the chance of conception."
    ]
  },
  {
    "question": "22. Can obesity influence sperm quality?",
    "answer": [
      "Yes, excess weight decreases testosterone levels and impacts sperm formation and quality."
    ]
  },
  {
    "question": "23. Can stress impact male fertility?",
    "answer": [
      "Stress influences hormone production, sexual function and sperm quality. However, its effect is hard to pinpoint at first glance."
    ]
  },
  {
    "question": "24. What is azoospermia?",
    "answer": [
      "It is the lack of sperm in the semen. Fertility treatment is required."
    ]
  },
  {
    "question": "25. What is a varicocele?",
    "answer": [
      "It is the dilated veins within the scrotum, which may negatively impact sperm production and fertility."
    ]
  },
  {
    "question": "26. Can male infertility have a genetic cause?",
    "answer": [
      "Yes, there are some mutations that may impair the process of sperm formation and reproduction."
    ]
  },
  {
    "question": "27. Why is genetic testing necessary for fertility treatment?",
    "answer": [
      "The reasons to conduct genetic tests may include identification of inherited conditions and chromosome abnormalities affecting conception, implantation, and pregnancy outcomes."
    ]
  },
  {
    "question": "28. What is carrier screening?",
    "answer": [
      "Carrier screening identifies whether potential parents possess genes that cause genetic disorders in their children."
    ]
  },
  {
    "question": "29. What is PGT and why would couples need this information?",
    "answer": [
      "Preimplantation Genetic Testing (PGT) involves examination of embryos for possible genetic or chromosomal anomalies prior to the procedure of embryo transfer during IVF treatment."
    ]
  },
  {
    "question": "30. Why would people consider conducting genetic tests prior to pregnancy?",
    "answer": [
      "People who experience recurrent pregnancy loss, IVF failures, a family history of genetic disorders, and advanced age should conduct genetic tests."
    ]
  },
  {
    "question": "31. Would it be possible to improve IVF treatment success rate with genetic testing?",
    "answer": [
      "Probably, since genetic tests help to select more suitable embryos and decrease chances to transfer embryos with chromosomal abnormalities."
    ]
  },
  {
    "question": "32. What is genetic counseling?",
    "answer": [
      "Genetic counseling assists people in understanding the results of genetic tests and inherited diseases as well as reproductive possibilities."
    ]
  },
  {
    "question": "33. Is genetic testing safe?",
    "answer": [
      "Usually it is because the majority of tests require a blood sample, saliva sample, or embryo biopsy during IVF."
    ]
  },
  {
    "question": "34. Can genetics cause recurrent miscarriage?",
    "answer": [
      "Yes, because of chromosomal abnormalities that could be detected in one of the parents or in the embryo itself."
    ]
  },
  {
    "question": "35. Which genetic conditions could be diagnosed prior to pregnancy?",
    "answer": [
      "There could be detected conditions such as thalassemia, cystic fibrosis, spinal muscular atrophy, sickle cell disease, and various other genetic diseases."
    ]
  },
  {
    "question": "36. Is genetic testing recommended for all patients?",
    "answer": [
      "Not necessarily. Your fertility expert or genetic counselor will advise you on what to do depending on your medical and family histories."
    ]
  },
  {
    "question": "37. What is IVF?",
    "answer": [
      "It is a procedure of In Vitro Fertilization when eggs are fertilized with sperm in laboratory, then embryo transfer is performed."
    ]
  },
  {
    "question": "38. What is ICSI?",
    "answer": [
      "ICSI (Intracytoplasmic Sperm Injection) is a process when a single sperm is injected into an egg."
    ]
  },
  {
    "question": "39. What is the success rate of IVF?",
    "answer": [
      "Age, embryo quality, medical background, and reasons for infertility greatly determine the outcome of an IVF procedure."
    ]
  },
  {
    "question": "40. How long is one round of IVF?",
    "answer": [
      "Typically, IVF procedure lasts 4-6 weeks starting from ovarian stimulation to the transfer of the embryos."
    ]
  },
  {
    "question": "41. Does IVF treat male infertility?",
    "answer": [
      "Certainly, IVF and especially ICSI are great treatment for different types of male infertility problems."
    ]
  },
  {
    "question": "42. Is IVF procedure painful?",
    "answer": [
      "All stages of IVF do not cause any pain for women; egg retrieval is done under sedation."
    ]
  },
  {
    "question": "43. Can IVF use frozen embryos in future cycles?",
    "answer": [
      "Sure, frozen embryos can be kept until next cycles of IVF."
    ]
  },
  {
    "question": "44. What is fertility preservation?",
    "answer": [
      "Fertility preservation refers to the freezing of eggs, sperm and embryos."
    ]
  },
  {
    "question": "45. Who needs egg freezing?",
    "answer": [
      "Egg freezing is recommended to those women who plan to have children later, are going through cancer treatment and those at risk of premature ovarian insufficiency."
    ]
  },
  {
    "question": "46. Can cancer treatment influence fertility?",
    "answer": [
      "Yes. Both chemotherapy and radiation therapy could affect your fertility, which is why fertility preservation prior to undergoing therapy might be necessary."
    ]
  },
  {
    "question": "47. Why Seeds of Innocens for your fertility treatment?",
    "answer": [
      "Seeds of Innocens provides comprehensive fertility care with specialized doctors, latest reproductive technologies, individualized treatment and patient-centered approach."
    ]
  },
  {
    "question": "48. What fertility treatments do Seeds of Innocens offer?",
    "answer": [
      "Their fertility treatments include IVF, ICSI, IUI, infertility diagnosis, fertility preservation, donor programs, reproductive genetics, recurrent pregnancy loss, and others."
    ]
  },
  {
    "question": "49. Do Seeds of Innocens have genetic testing services?",
    "answer": [
      "Yes. Seeds of Innocens offers reproductive genetics services like carrier testing, genetic counseling, and Preimplantation Genetic Testing (PGT) when appropriate."
    ]
  },
  {
    "question": "50. Does Seeds of Innocens have individual fertility treatment programs?",
    "answer": [
      "Yes. Individualized program is developed for each patient taking into account medical history, test results, fertility goals, and specialists’ recommendations."
    ]
  }
];

const seedsOfInnocensFAQs = [
  {
    question: '1. What is Seeds of Innocens?',
    answer: [
      'Seeds of Innocens IVF is one of the best IVF centres that is dedicated to helping couples to achieve parenthood through advanced reproductive technologies, customized care, and expert doctors.'
    ]
  },
  {
    question: '2. What makes Seeds of Innocens different from other IVF centres?',
    answer: [
      'We believe in state-of-the-art labs, patient-centric care, high success rates, and expert fertility specialists trained in advanced reproductive technologies.'
    ]
  },
  {
    question: '3. What is the success rate of IVF at Seeds of Innocens?',
    answer: [
      'Success rates vary based on age, fertility condition, and medical profile, but Seeds of Innocens IVF is well-known for consistently high IVF success rates with evidence-based treatments.'
    ]
  },
  {
    question: '4. How can I book an appointment at Seeds of Innocens?',
    answer: [
      'You can easily book through our contact number, website, or you can visit your nearest Seeds of Innocens IVF centre for a consultation.'
    ]
  }
];

const FaqsClient = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/FAQs.webp"
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
            <div className="col-12 cs_service_page_content">
              <IVFContentSection data={faqsContentData} benefitImages={serviceData.benefitImages} accentHeadingStyle />
            </div>
          </div>

          <div className="row" style={{ marginTop: '60px' }}>
            <div className="col-12">
              <FAQAccordion faqs={ivfFAQs} />
            </div>
          </div>

          <div className="row cs_service_page_content" style={{ marginTop: '60px' }}>
            <div className="col-12">
              <AccentHeading level={3} style={{ fontSize: '26px', marginBottom: '30px' }}>Questions about Seeds of Innocens</AccentHeading>
              <FAQAccordion faqs={seedsOfInnocensFAQs} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FaqsClient;
