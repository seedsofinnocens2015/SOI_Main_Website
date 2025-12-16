import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Fetal Reduction',
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

const fetalReductionContentData = {
  sections: [
    {
      heading: 'What is fetal or embryo reduction?',
      paragraphs: [
        'Fetal Reduction is a procedure used to reduce the number of fetuses in a multiple pregnancy, usually to two to decrease the health risks to the mother & decrease the risk of complications to the remaining fetuses. The goal of fetal reduction is to increase the chance of a successful, healthy pregnancy.',
      ],
      sideImage: '/assets/img/Fetal Reduction1.png',
    },
    {
      heading: 'What are the risks associated with multiple pregnancy?',
      paragraphs: [
        'If a pregnancy involves 3 or more fetuses, the risks of miscarriage, stillbirth premature rupture of membrane, early delivery, structural malformation & early neonatal death increase with each additional fetus.',
        'Premature delivery affects babies\' lungs, heart, stomach, and brain. It can cause long term health issues in babies like cerebral palsy, intellectual disability, and vision & hearing loss, obesity chronic hypertension & diabetes',
        'Maternal risk like anaemia, gestational hypertension, preeclampsia, gestational diabetes, antepartum & postpartum hemorrhage also increases with multiple pregnancies. It further causes economic & mental challenges to family. Parents of multiples pregnancies are at an increased risk of severe stress and depression',
      ],
    },
    {
      heading: 'What are the benefits of embryo reduction?',
      paragraphs: [
        'Multifetal pregnancy reduction may maximize the woman\'s health and the health of her surviving neonates. It substantially increases the duration of pregnancy, reduces the incidence of premature delivery which in turn has the benefit of increasing the baby\'s birth weight and reducing neonatal morbidity & mortality along with shortening the neonatal intensive care stay. The benefits are even more pronounced with quadruplets and other higher order multiple pregnancies.',
      ],
    },
    {
      heading: 'Is mutifetal reduction & Selective Reduction same?',
      paragraphs: [
        'In Selective reduction, one of the fetuses who have a grave and incurable disease is electively reduced, to allow pregnancy to continue for the sake of the healthy fetus or fetuses. However, in multifetal pregnancy reduction, fetus is reduced in cases of high-order multiple pregnancies (more than three fetuses) to reduce the obstetrical and perinatal risks inherent in this kind of pregnancy.',
      ],
    },
    {
      heading: 'Role of fetal reduction in an IVF conceived pregnancy?',
      paragraphs: [
        'IVF is associated with increased incidence of multiple pregnancies. However, it may seem paradoxical in an IVF pregnancy as so much effort is involved to get pregnant; embryo reduction is advised with aim to not just conceive, but to give the mother a healthy baby at the end of pregnancy.',
      ],
    },
    {
      heading: 'Is there any role of fetal reduction in twin pregnancy?',
      paragraphs: [
        'Certain medical (heart disease) or obstetric considerations (eg- uterine anomaly, history of cervical insufficiency, or preeclampsia) can significantly increase the risks of carrying even a twin pregnancy compared with a singleton pregnancy. A fetal reduction to a singleton may be an appropriate for these conditions and also for nonmedical reasons, such as financial, social, or emotional concerns.',
      ],
    },
    {
      heading: 'When is the procedure of embryo reduction typically done?',
      paragraphs: [
        'If a couple or individual has decided for fetal reduction, a thorough ultrasound is usually done between 11-13 weeks. We at our center, prefer to do it at around 12 weeks when we can do the first trimester screening and also rule out any structural abnormality in the babies. The results of such tests may assist patients in making their decisions about intervention.',
        'In addition, about 8 to 20% multiple pregnancies may reduce by themselves by the end of first trimester. The \'vanishing\' twin does not have any adverse effect on the surviving fetus.',
      ],
    },
    {
      heading: 'How is the procedure performed?',
      paragraphs: [
        'The fetus which displays signs of any abnormality is usually selected for reduction. In case all the fetuses appear normal during the scan, then the fetus that is easily approachable is targeted for reduction. It must be noted that fetuses are not selected based on gender. This is strictly prohibited under PCPNDT law and the sex of the fetuses is not revealed and is also not studied.',
        'The most common method of fetal reduction is Trans abdominal (through the abdomen). For this procedure, the doctor uses ultrasound as a guide and inserts a needle through the mother\'s abdomen and into the uterus to the selected & then injects the fetus with a potassium chloride/ lignocaine solution, which stops the fetal heart. Because the fetus is very small during the first trimester, the reduced fetus is usually absorbed by the mother\'s body. This may include some vaginal bleeding.',
        'Sometimes, we use a different technique called radiofrequency ablation instead in case of monochorionic pregnancy. A small needle device uses electric currents to cut off the blood flow from your umbilical cord to one or more fetuses.',
      ],
      bottomImage: '/assets/img/Fetal Reduction2.png',
    },
    {
      heading: 'What are the risks associated with the procedure?',
      paragraphs: [
        'After fetal reduction, there is a 5- 7 % chance that the woman will lose the entire pregnancy prior to 20 weeks\' gestation. The original number of fetuses, the route of the needle as well as the number terminated may influence the likelihood and the rate of pregnancy loss.',
        'In small number of cases, women have a chance of going into labor too early. Other side effects include fever, vaginal bleeding, leaking or contractions. Infections from fetal reduction are rare.',
        'The procedure usually does not have any adverse effect on the surviving fetus. In cases where a multi-fetal pregnancy of three or more fetuses is reduced to two fetuses, the remaining fetuses develop as they would if they had been conceived as twins. The benefits of fetal reduction far outweigh the risks associated with the procedure.',
      ],
    },
    {
      heading: 'What should I expect after the procedure?',
      paragraphs: [
        'You will be asked to rest and the baby\'s heart beat will be checked after half an hour of the procedure. You may have slight bruising at the site of needle entry. You may also have some spotting or mild cramping for a couple of hours for which you may take oral paracetamol. There is no restriction to your daily activities though the doctor may advice you to stay home for 3 days to minimize chances of infection.',
        'If you have fever, vaginal bleeding or leaking or contractions, you must report to the hospital.',
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
              <IVFContentSection data={fetalReductionContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
