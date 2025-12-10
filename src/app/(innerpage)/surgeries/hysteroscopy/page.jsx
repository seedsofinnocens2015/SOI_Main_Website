import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Hysteroscopy',
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

const hysteroscopyContentData = {
  sections: [
    {
      heading: 'Understanding Hysteroscopy: A Simple Guide for You',
      paragraphs: [
        'Hysteroscopy is a medical procedure that allows doctors to look inside the uterus to diagnose or treat conditions affecting the uterus. This procedure is often performed when a woman has symptoms like abnormal bleeding, infertility, or pelvic pain that can\'t be explained through other tests. With advancements in medical technology, hysteroscopy is now a relatively simple and safe procedure, making it a valuable tool for gynaecologists and fertility specialists.',
        'In this guide, we will break down the hysteroscopy procedure, its uses, and how it can help women with various health concerns, all simply and clearly.',
      ],
      sideImage: '/assets/img/Hysteroscopy1.webp',
    },
    {
      heading: 'What is Hysteroscopy?',
      paragraphs: [
        'Hysteroscopy is a procedure that uses a thin, lighted tube called a hysteroscope to look inside the uterus. This tube is inserted through the vagina and cervix, offering a clear view of the uterus, fallopian tubes, and ovaries. The scope is about the size of a pencil, so the procedure is minimally invasive, with only small incisions needed.',
        'There are two main types of hysteroscopy:',
      ],
      listItems: [
        'Diagnostic hysteroscopy: This is done to examine the inside of the uterus for any abnormalities. It helps doctors diagnose problems like uterine fibroids, polyps, adhesions, or other conditions that may affect fertility.',
        'Operative hysteroscopy: This is a more advanced procedure where the doctor not only examines the uterus but also uses instruments to treat conditions. For example, they can remove fibroids, polyps, or adhesions that might be causing discomfort or fertility issues.',
      ],
    },
    {
      heading: 'How is Hysteroscopy Performed?',
      paragraphs: [
        'The procedure is typically done in a doctor\'s office, outpatient clinic, or hospital. Here\'s a step-by-step explanation of how it works:',
      ],
      listItems: [
        'Preparation: Before the procedure, the doctor may give you medication to relax your cervix and open it up slightly. You may be given local anesthesia, or in some cases, general anesthesia if the procedure requires it.',
        'Insertion of the Hysteroscope: The doctor inserts the hysteroscope through the vagina and cervix into the uterus. The light on the scope helps the doctor get a clear view of the uterine cavity.',
        'Examination: The doctor looks for any abnormalities, such as fibroids, polyps, or signs of infection. The procedure typically lasts between 15 to 30 minutes.',
        'Treatment (if necessary): If any issues are found, the doctor may choose to treat them right away. For instance, they can remove small fibroids or polyps using special surgical instruments passed through the hysteroscope.',
        'Recovery: Recovery from hysteroscopy is usually quick, with most women going home the same day. It\'s common to have mild cramping or spotting for a few days afterwards.',
      ],
    },
    {
      heading: 'Why is Hysteroscopy Important?',
      paragraphs: [
        'Hysteroscopy plays an essential role in women\'s health because it allows doctors to detect and treat issues that could affect fertility or cause discomfort. It is especially beneficial for women who have been struggling with infertility or recurrent miscarriages. By using hysteroscopy, doctors can identify potential problems, such as uterine fibroids or polyps, and provide treatments to improve the chances of a successful pregnancy.',
        'The procedure is also valuable for diagnosing abnormal bleeding, chronic pelvic pain, or other gynaecological conditions that can be difficult to understand with imaging tests alone.',
      ],
    },
    {
      heading: 'Benefits of Hysteroscopy',
      paragraphs: [
        'Hysteroscopy offers several key benefits:',
      ],
      listItems: [
        'Minimally invasive: The procedure requires only small incisions, making it less painful and leading to quicker recovery.',
        'Accurate diagnosis: It allows doctors to see directly inside the uterus, which provides more detailed and accurate information than other diagnostic methods.',
        'Treatment options: In addition to diagnosis, hysteroscopy can be used to treat various conditions like fibroids or polyps without the need for major surgery.',
        'Quick recovery: Most women can return to their normal activities within a few days after the procedure.',
      ],
    },
    {
      heading: 'Who Should Consider Hysteroscopy?',
      paragraphs: [
        'Women who experience any of the following conditions might be recommended for hysteroscopy:',
      ],
      listItems: [
        'Heavy or abnormal menstrual bleeding.',
        'Painful periods.',
        'Recurrent miscarriages.',
        'Difficulty getting pregnant.',
        'Chronic pelvic pain.',
      ],
      sideImage: '/assets/img/Hysteroscopy2.jpg',
    },
    {
      heading: 'Consulting Your Doctor About Hysteroscopy',
      paragraphs: [
        'Your doctor will discuss your symptoms and recommend whether hysteroscopy is the right choice for you.',
      ],
    },
    {
      heading: 'Risks and Considerations',
      paragraphs: [
        'While hysteroscopy is generally safe, like any medical procedure, there are some risks, including:',
      ],
      listItems: [
        'Infection.',
        'Injury to the uterus or cervix.',
        'Scarring or adhesions (though this is rare).',
      ],
    },
    {
      heading: 'Understanding the Risks',
      paragraphs: [
        'However, these risks are minimal, especially when the procedure is performed by an experienced doctor. Your healthcare provider will go over the risks and benefits specific to your case.',
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'Hysteroscopy is an invaluable tool in women\'s healthcare, offering both diagnostic and treatment benefits with minimal discomfort and recovery time. If you are experiencing symptoms that affect your reproductive health, talking to a trusted healthcare provider about hysteroscopy could be a positive step toward better health and fertility.',
        'At Seeds of Innocens, we understand the importance of knowledge when it comes to women\'s health. Whether you are looking for information on hysteroscopy or exploring options to enhance your fertility, we are here to support you on your journey. Always feel free to reach out for guidance and advice tailored to your unique needs.',
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
              <IVFContentSection data={hysteroscopyContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
