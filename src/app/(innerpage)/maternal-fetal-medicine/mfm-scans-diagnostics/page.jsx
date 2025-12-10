import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'MFM Scans & Diagnostics',
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

const mfmScansContentData = {
  sections: [
    {
      heading: 'Who is Maternal-Fetal Medicine specialist (MFM)?',
      paragraphs: [
        'Maternal-fetal medicine specialists Or perinatologists, are obstetricians who specialize in the diagnosis, treatment, and ongoing care of expectant mothers and unborn babies who may be at risk of developing specific health problems.',
        'While most pregnancy do good with good maternal & fetal outcome, about 10 % of pregnancy are associated with different complication & around 3-4% of babies may have some structural or genetic abnormalities that may result in mental or physical handicap.',
        'MFM specialists look after pregnant women who have complicated pregnancy histories, medical condition (hypertension, diabetes, seizure disorders, autoimmune diseases, and blood clotting disorders, heart disease or infections) and high risk for pregnancy complication, such as, high blood pressure, a short cervix or early labour, IVF or multiple pregnancies. They look after your babies to diagnose different congenital abnormalities, chromosomal & genetic defect, fetal infection or anaemia, or risk to be very small.',
      ],
      sideImage: '/assets/img/MFM Scans & Diagnostics1.png',
    },
    {
      heading: 'Department of Maternal and Fetal Medicine Seeds of innocence',
      paragraphs: [
        'At our center we conduct a detailed clinical & genetic evaluation including family tree, individualized risk assessment for each patients to arrive at a precise diagnosis. Our aim is to offer personalized care, counseling and management strategies to provide our patients proper support and education that they need to deliver a healthy baby.',
        'The center is equipped with best equipment & all scans are done as per international fetal medicine foundation (FMF, UK) & ISUOG guidelines including extended cardiac screening.',
      ],
    },
    {
      heading: 'Who should schedule a visit to Maternal-fetal medicine specialist?',
      paragraphs: [
        'If the expectant mother & unborn baby is at risk for complications during pregnancy because of her pre-existing medical & surgical condition or previous pregnancy complication like:',
      ],
      listItems: [
        'Advanced maternal age',
        'Obesity',
        'Pre-existing medical disorder',
        'Previous pregnancy complication',
        'Growth restricted babies',
        'Prematurity',
        'Multiple pregnancy',
        'Congenital malformation',
        'history of recurrent pregnancy losses,',
        'Prenatal screening for chromosomal & genetic condition',
      ],
    },
    {
      heading: 'What is the role of Maternal-fetal medicine in proving care to high risk pregnancies?',
      paragraphs: [
        'Maternal-fetal medicine experts will make plan of care for women with high risk pregnancy, will monitor for different maternal and fetal condition, do different prenatal ultrasound examinations, and will provide you genetic counseling, prenatal diagnostic test & fetal intervention when indicated.',
      ],
    },
    {
      heading: 'SERVICES PROVIDED UNDER THIS DEPARTMENT ARE:–',
      paragraphs: [
        'Our department offers comprehensive services including:',
      ],
    },
    {
      heading: 'Premarital counseling',
      paragraphs: [
        'We provide premarital counseling to help couples understand potential genetic risks and plan for a healthy pregnancy.',
      ],
    },
    {
      heading: 'PRECONCEPTIONAL & PRENATAL CONSULTATION FOR:',
      paragraphs: [
        'We offer specialized consultation for:',
      ],
      listItems: [
        'Prior pregnancy complications',
        'Prior pregnancy loss: stillbirth & recurrent pregnancy loss',
        'Twins or other multiple gestations',
        'Medical disorders- diabetes, hypertension, or other complex medical conditions; or',
        'Genetic problems',
      ],
    },
    {
      heading: 'Prenatal Screening',
      paragraphs: [
        'Our comprehensive prenatal screening services include:',
      ],
      listItems: [
        'Down\'s syndrome screening',
        'Pre-eclampsia screening',
        'Fetal growth restriction',
        'Preterm labour screening',
        'Prenatal screening & diagnosis of Beta thalassemia & other genetic condition',
      ],
      sideImage: '/assets/img/MFM Scans & Diagnostics2.png',
    },
    {
      heading: 'A. NON –INVASIVE (USG)',
      paragraphs: [
        'Non-invasive ultrasound services we provide:',
      ],
      listItems: [
        'Early pregnancy scans',
        'First trimester NT/ NB scans',
        'First trimester combined screening',
        'Non-invasive prenatal screening (NIPS)',
        'Anomaly scans (Level II)',
        'Cervical screening with uterine artery Doppler',
        'Fetal wellbeing scans',
        'Fetal growth & Doppler\'s',
        'Fetal 3D/ 4D scan',
        'Multiple pregnancy scans',
      ],
    },
    {
      heading: 'Genetic Counseling',
      paragraphs: [
        'We provide comprehensive genetic counseling to help families understand genetic risks, testing options, and make informed decisions about their pregnancy.',
      ],
    },
    {
      heading: 'B. INVASIVE PRENATAL DIAGNOSTIC AND THERAPEUTIC PROCEDURES',
      paragraphs: [
        'Invasive procedures we perform include:',
      ],
      listItems: [
        'CVS (Chorionic Villous Sampling)',
        'Amniocentesis.',
        'Fetal blood sampling',
        'Fetal reduction',
        'Amnioreduction',
        'Intrauterine transfusion',
        'Shunt procedures',
      ],
    },
    {
      heading: 'C. Management of multiple pregnancy (twins, triplets & higher order)',
      paragraphs: [
        'Our specialized management services for multiple pregnancies include:',
      ],
      listItems: [
        'Management of monochorionic/dichorionic twins',
        'Screening for chromosomal abnormalities in twins',
        'Management of growth problems/fetal growth restriction',
        'Management of twin to twin transfusion syndrome (TTTS)',
        'Management of twin anaemia polycythemia sequence (TAPS)',
        'Management of twin reverse arterial perfusion (TRAP)',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header2.jpg"
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
              <IVFContentSection data={mfmScansContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
