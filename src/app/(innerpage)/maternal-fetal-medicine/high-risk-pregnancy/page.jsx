import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'High-Risk Pregnancy',
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
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const highRiskPregnancyContentData = {
  sections: [
    {
      heading: 'What is a high-risk pregnancy?',
      paragraphs: [
        'All pregnancies carry risks. The definition of a high-risk pregnancy is any pregnancy that carries increased health risks for you, the fetus or both. People with high-risk pregnancies may need extra medical care before, during and after they give birth. This helps to reduce the possibility and severity of complications.',
        'But having a pregnancy that\'s considered high risk doesn\'t mean you or the fetus will have health problems. Many people experience healthy pregnancies and normal labor and delivery despite having special health needs leading up to the birth.',
        'It can be easy to panic and worry when you hear your pregnancy care provider say your pregnancy is at a higher risk. You\'re not alone. It doesn\'t mean your pregnancy will automatically be difficult. It may just mean your pregnancy care team watches you more closely. Trust your healthcare team\'s recommendations and ask them for help managing your feelings. Many people have high-risk pregnancies, and most end in healthy babies. Routine prenatal care can help ensure your pregnancy is safe, even if it\'s high risk.',
      ],
      sideImage: '/assets/img/High-Risk Pregnancy1.jpeg',
    },
    {
      heading: 'How common is high-risk pregnancy?',
      paragraphs: [
        'Approximately 30,000 to 50,000 pregnant women (between 6% and 8%) in the U.S. have high-risk pregnancies per year.',
      ],
    },
    {
      heading: 'What qualifies a pregnancy as high risk?',
      paragraphs: [
        'A high-risk pregnancy means you have a higher-than-average risk of experiencing a pregnancy complication. Some pregnancies begin as high risk, while others become high risk at some point during the pregnancy.',
        'Factors that make a pregnancy high risk include:',
      ],
      listItems: [
        'Preexisting health conditions. These are health conditions you have before pregnancy.',
        'Pregnancy-related health conditions. These are conditions you develop once pregnancy begins.',
        'Lifestyle factors (including smoking, substance use disorder, alcohol use disorder and exposure to certain toxins).',
      ],
    },
    {
      heading: 'What factors make a pregnancy high risk?',
      paragraphs: [
        'People with preexisting conditions have increased health risks during pregnancy. Some of these conditions include:',
      ],
      listItems: [
        'Autoimmune diseases, such as lupus or multiple sclerosis (MS).',
        'Diabetes.',
        'High blood pressure.',
        'Fibroids.',
        'HIV/AIDS.',
        'Kidney disease.',
        'Obesity.',
        'Mental health disorders, such as depression.',
        'Polycystic ovary syndrome (PCOS).',
        'Thyroid disease.',
        'Blood clotting disorders.',
      ],
    },
    {
      heading: 'Pregnancy-Related Health Conditions',
      paragraphs: [
        'Pregnancy-related health conditions that can cause potential complications include:',
      ],
      listItems: [
        'Gestational diabetes.',
        'Low birth weight.',
        'Multiple gestation (pregnancy with more than one fetus, such as twins or triplets).',
        'Gestational hypertension, preeclampsia, and eclampsia.',
        'Placental conditions like placenta previa or a placental abruption.',
        'Previous preterm birth, or other complications with previous pregnancies.',
        'Too much or too little amniotic fluid.',
      ],
      sideImage: '/assets/img/High-Risk Pregnancy2.jpg',
    },
    {
      heading: 'Understanding High-Risk Pregnancy Labels',
      paragraphs: [
        'These factors are only some of the conditions or factors that may result in your provider calling your pregnancy "high risk." The label isn\'t meant to scare you. Rather, it\'s a way for your provider to recognize and identify potential complications to keep you and the fetus safe through pregnancy and delivery.',
      ],
    },
    {
      heading: 'What are the signs and symptoms of high-risk pregnancy?',
      paragraphs: [
        'Talk to your pregnancy care provider right away if you experience any of the following symptoms during pregnancy, regardless of if your pregnancy is high risk or low risk:',
      ],
      listItems: [
        'Abdominal pain that doesn\'t go away.',
        'Chest pain.',
        'Dizziness or fainting.',
        'Extreme fatigue.',
        'The fetus\'s movement stopping or slowing.',
        'Heart palpitations.',
        'Nausea and vomiting that\'s worse than typical morning sickness.',
        'Severe headache that won\'t go away or gets worse.',
        'Swelling, redness or pain in your face or limbs.',
        'Thoughts about harming yourself.',
        'Trouble breathing.',
        'Vaginal bleeding or increased discharge.',
      ],
    },
    {
      heading: 'At what age is a pregnancy considered high risk?',
      paragraphs: [
        'Age alone isn\'t a determining factor in a high-risk pregnancy. Your pregnancy care provider determines if your pregnancy is likely to have complications based on several other factors.',
      ],
    },
    {
      heading: 'What are the complications of high-risk pregnancies?',
      paragraphs: [
        'A high-risk pregnancy can be life-threatening for you or the fetus. Some of the most common complications can include:',
      ],
      listItems: [
        'Preeclampsia-spectrum disorders, including gestational hypertension, preeclampsia and eclampsia.',
        'Preterm delivery.',
        'Cesarean delivery.',
        'Excessive bleeding during labor and delivery, or after birth (postpartum hemorrhage).',
        'Low birth weight.',
        'Birth defects (problems with the development of a baby\'s organs such as the heart or brain, also called congenital conditions).',
        'Neonatal intensive care unit (NICU) admission for your baby.',
        'Intensive care unit (ICU) admission for you.',
        'Miscarriage.',
        'Stillbirth.',
      ],
    },
    {
      heading: 'Managing Complications in High-Risk Pregnancies',
      paragraphs: [
        'It\'s important to talk to your pregnancy care provider about your risks for these complications. Ask them any questions you have. With proper monitoring and care, you and your providers may be able to reduce your risk of having these or other complications.',
      ],
    },
    {
      heading: 'How is high-risk pregnancy diagnosed and monitored?',
      paragraphs: [
        'Getting early and thorough prenatal care as soon as you know you\'re pregnant is critical. It\'s the best way to detect and manage a high-risk pregnancy. Be sure to tell your healthcare provider about your health history and any past pregnancies. If you do have a high-risk pregnancy, you may need special monitoring throughout your pregnancy.',
        'Tests to monitor your health and the health of the fetus during pregnancy may include:',
      ],
      listItems: [
        'Blood and urine testing to check your health and the fetus\'s risk for genetic conditions.',
        'Ultrasound, which uses sound waves to create images of the fetus to ensure the fetus is developing appropriately. People with high-risk pregnancies usually have more frequent ultrasounds.',
        'Other ultrasound and fetal heart rate monitoring tests that check on the overall health of the fetus and placenta, called a biophysical profile and nonstress test.',
      ],
    },
    {
      heading: 'What is the treatment for a high-risk pregnancy?',
      paragraphs: [
        'Management for a high-risk pregnancy will depend on your specific risk profile. Your care plan may include:',
      ],
      listItems: [
        'Closer monitoring from your obstetrician.',
        'Consultation with a maternal-fetal medicine specialist.',
        'Consultation with other medical specialists.',
        'More ultrasounds and closer fetal evaluation.',
        'Home blood pressure monitoring.',
        'Careful monitoring of medications used to manage preexisting conditions.',
      ],
      paragraphs: [
        'If there are signs that the pregnancy is in danger, your healthcare provider may recommend labor induction or a cesarean delivery earlier than planned.',
      ],
    },
    {
      heading: 'How many ultrasounds do you get in a high-risk pregnancy?',
      paragraphs: [
        'It depends. Typical low-risk pregnancies have two to three ultrasounds throughout pregnancy. How many additional ultrasounds your pregnancy care provider recommends will be unique to you (but you\'ll likely have more than three). Your provider will let you know how many additional ultrasounds you can expect to have if your pregnancy is high risk and when these should happen.',
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
              <IVFContentSection data={highRiskPregnancyContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
