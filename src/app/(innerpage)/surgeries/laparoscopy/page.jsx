import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Laparoscopy',
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

const laparoscopyContentData = {
  sections: [
    {
      heading: 'Understanding Laparoscopy: A Guide for You',
      paragraphs: [
        'Laparoscopy is a modern surgical technique that allows doctors to view the inside of the abdomen and pelvis without making large incisions. It\'s often referred to as minimally invasive surgery because it uses small incisions, leading to quicker recovery, less pain, and fewer complications compared to traditional surgery. This procedure helps diagnose and treat various conditions in both men and women, including those related to fertility, the digestive system, and reproductive organs.',
        'In this guide, we\'ll explain what laparoscopy is, how it\'s performed, its benefits, and its role in women\'s health, particularly regarding fertility. We will also provide answers to some frequently asked questions to give you a clear understanding.',
      ],
      sideImage: '/assets/img/Laparoscopy1.jpg',
    },
    {
      heading: 'What is Laparoscopy?',
      paragraphs: [
        'Laparoscopy is a procedure that involves inserting a laparoscope a thin, lighted tube with a camera attached to it — through small incisions made in the abdomen. This allows the surgeon to see the inside of the abdomen or pelvic area on a monitor in real-time. It can be used for both diagnostic and therapeutic purposes.',
        'Laparoscopy is commonly used to:',
      ],
      listItems: [
        'Diagnose conditions such as endometriosis, ovarian cysts, fibroids, and pelvic infections.',
        'Treat conditions like ectopic pregnancies, remove cysts or fibroids, and perform sterilization or other fertility-related surgeries.',
      ],
    },
    {
      heading: 'How is Laparoscopy Performed?',
      paragraphs: [
        'Laparoscopy is usually done under general anaesthesia, meaning you will be asleep during the procedure. Here\'s what to expect:',
      ],
      listItems: [
        'Preparation: Before the surgery, the doctor will discuss the procedure, answer any questions, and ask you to follow specific instructions, such as fasting the night before. You will be given anaesthesia to ensure you don\'t feel any pain.',
        'Making Small Incisions: The surgeon will make small incisions (usually 1-2 cm) in your abdomen. One incision is used to insert the laparoscope, and other incisions may be made to introduce additional instruments needed for surgery if necessary.',
        'Inserting the Laparoscope: The laparoscope is inserted through one of the incisions. It has a light and camera at the tip that transmits images to a monitor, so the surgeon can clearly see inside your abdomen or pelvis.',
        'Examination or Treatment: The surgeon can use the laparoscope to examine organs like the ovaries, fallopian tubes, uterus, liver, or other parts of the abdomen. If a problem is found, the surgeon can treat it during the same procedure using small instruments inserted through the other incisions.',
        'Recovery: After the procedure, you will be moved to a recovery room. Most people can go home the same day, although some may stay overnight if more complex surgery is performed.',
      ],
    },
    {
      heading: 'Why is Laparoscopy Important?',
      paragraphs: [
        'Laparoscopy is a crucial tool in modern medicine, particularly in the field of gynaecology and fertility. Here\'s why:',
      ],
      listItems: [
        'Accurate Diagnosis: Laparoscopy allows doctors to see inside the body and obtain a direct view of the organs. This is especially important when diagnosing conditions like endometriosis, fibroids, ovarian cysts, or pelvic inflammatory disease, which can be difficult to diagnose through imaging alone.',
        'Less Invasive: Unlike traditional surgery, which involves large incisions, laparoscopy requires only small cuts, which means less pain, smaller scars, and quicker recovery times. Most people can return to their normal activities within a few days.',
        'Treatment of Fertility Issues: Many women who struggle with infertility find laparoscopy to be an essential part of their diagnosis and treatment. Conditions such as blocked fallopian tubes, endometriosis, or fibroids can be treated through laparoscopy, improving the chances of pregnancy.',
        'Faster Recovery: Because the incisions are smaller, the healing process is faster. You may experience some discomfort after the procedure, but it\'s typically much less than traditional surgery.',
      ],
    },
    {
      heading: 'Benefits of Laparoscopy',
      paragraphs: [
        'Laparoscopy offers several key benefits:',
      ],
      listItems: [
        'Minimally invasive: The small incisions reduce the risk of complications, bleeding, and infection.',
        'Faster recovery: With smaller cuts, recovery time is shorter, allowing you to return to daily activities sooner.',
        'Reduced pain: Less trauma to the body means less pain after the procedure.',
        'Accurate diagnosis: Laparoscopy gives the doctor a clear view of the area in question, making it easier to diagnose and treat conditions.',
      ],
    },
    {
      heading: 'Who Should Consider Laparoscopy?',
      paragraphs: [
        'Laparoscopy can be recommended for women who experience any of the following:',
      ],
      listItems: [
        'Pelvic pain or discomfort that cannot be explained.',
        'Infertility or difficulty getting pregnant.',
        'Chronic pelvic infections or conditions like endometriosis.',
        'Ovarian cysts or fibroids that may need removal.',
        'Ectopic pregnancy, where the pregnancy occurs outside the uterus and needs surgical intervention.',
      ],
      sideImage: '/assets/img/Laparoscopy2.jpg',
    },
    {
      heading: 'When to Consider Laparoscopy',
      paragraphs: [
        'If you are facing any of these issues, laparoscopy could be a valuable tool to identify the cause and potentially resolve the problem.',
      ],
    },
    {
      heading: 'Risks and Considerations',
      paragraphs: [
        'Like all surgeries, laparoscopy has some risks, although they are relatively rare. These can include:',
      ],
      listItems: [
        'Infection at the incision site.',
        'Injury to nearby organs, such as the bladder or intestines.',
        'Blood clots or reactions to anaesthesia.',
      ],
    },
    {
      heading: 'Minimizing Risks',
      paragraphs: [
        'However, these risks are minimal, especially with an experienced surgeon. It\'s important to follow your doctor\'s instructions carefully before and after surgery to reduce risks.',
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'Laparoscopy is a powerful and minimally invasive procedure that helps doctors diagnose and treat various conditions, particularly those related to fertility and reproductive health. It offers many benefits, including quicker recovery times, less pain, and the ability to treat problems like ovarian cysts, fibroids, and endometriosis.',
        'At Seeds of Innocens, we are committed to supporting women\'s health and fertility through knowledge, compassion, and the latest medical treatments. If you have any questions or need guidance regarding laparoscopy or fertility treatment options, we are here to help you every step of the way.',
      ],
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
              <IVFContentSection data={laparoscopyContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
