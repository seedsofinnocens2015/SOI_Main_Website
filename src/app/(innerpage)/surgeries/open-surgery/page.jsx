import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Open Surgery',
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

const openSurgeryContentData = {
  sections: [
    {
      heading: 'Open Surgery in IVF and Pregnancy',
      paragraphs: [
        'Developments in medical science have enabled the addressing of fertility problems and pregnancy complications using different procedures. Although minimally invasive methods are the first choice, open surgery is an important option in specific situations. Open surgery during IVF or pregnancy is done if there are complex reproductive problems and direct access to the reproductive system is needed.',
      ],
      sideImage: '/assets/img/Open Surgery1.jpg',
    },
    {
      heading: 'When is Open Surgery Needed in IVF and Pregnancy?',
      paragraphs: [
        'Open surgery may be recommended in cases where other treatments, such as medications or laparoscopic procedures, are not effective. Some common reasons include:',
      ],
    },
    {
      heading: '1. Open Surgery in IVF:',
      paragraphs: [
        'Open surgery may be necessary for various IVF-related conditions:',
      ],
      listItems: [
        'Fibroid Removal (Myomectomy): Large or multiple fibroids in the uterus can interfere with implantation and pregnancy. A myomectomy through open surgery helps in removing fibroids while preserving the uterus.',
        'Endometriosis Treatment: Severe endometriosis can cause adhesions and blockages in the reproductive tract, requiring surgical removal for improved fertility.',
        'Ovarian Cyst Removal: Large cysts can impact egg quality and ovulation. Open surgery may be needed if the cyst is too large for laparoscopic removal.',
        'Uterine Abnormalities: Congenital abnormalities like a uterine septum or scar tissue may require surgical correction to improve pregnancy chances.',
      ],
    },
    {
      heading: '2. Open Surgery in Pregnancy:',
      paragraphs: [
        'Open surgery during pregnancy may be required for:',
      ],
      listItems: [
        'C-Section (Cesarean Section): When vaginal delivery is not possible due to medical reasons like fetal distress, placenta previa, or multiple pregnancies, a C-section is performed.',
        'Ectopic Pregnancy Removal: If a fertilized egg implants outside the uterus, usually in the fallopian tube, open surgery is required to remove the embryo and prevent complications.',
        'Uterine Rupture Repair: A rare but serious condition where the uterus tears during pregnancy or labour, requiring immediate open surgery to save the mother and baby.',
      ],
    },
    {
      heading: 'Procedure and Recovery',
      paragraphs: [
        'Understanding the procedure and recovery process is important:',
      ],
    },
    {
      heading: 'Before Surgery:',
      paragraphs: [
        'Pre-surgery preparation includes:',
      ],
      listItems: [
        'A thorough diagnosis, including ultrasound and blood tests, helps determine the need for surgery.',
        'Patients are advised to follow specific instructions regarding food, medications, and lifestyle changes before surgery.',
      ],
    },
    {
      heading: 'During Surgery:',
      paragraphs: [
        'The surgical procedure involves:',
      ],
      listItems: [
        'The procedure is performed under general anaesthesia.',
        'The surgeon makes an incision in the lower abdomen to access the reproductive organs and perform the necessary corrections.',
        'The duration varies based on the complexity of the condition.',
      ],
    },
    {
      heading: 'After Surgery:',
      paragraphs: [
        'Post-surgery recovery includes:',
      ],
      listItems: [
        'Recovery may take a few weeks, depending on the type of surgery.',
        'Patients are advised to take rest, follow a healthy diet, and avoid strenuous activities.',
        'Follow-up appointments ensure proper healing and monitor reproductive health.',
      ],
    },
    {
      heading: 'Benefits and Risks of Open Surgery',
      paragraphs: [
        'Understanding the benefits and risks helps in making informed decisions:',
      ],
      sideImage: '/assets/img/Open Surgery2.jpg',
    },
    {
      heading: 'Benefits:',
      paragraphs: [
        'Open surgery offers several benefits:',
      ],
      listItems: [
        'Effective treatment for complex reproductive conditions.',
        'Increases chances of successful pregnancy in IVF.',
        'Can resolve long-standing fertility issues that were not treatable with other methods.',
      ],
    },
    {
      heading: 'Risks:',
      paragraphs: [
        'Like any surgical procedure, open surgery has some risks:',
      ],
      listItems: [
        'Longer recovery time compared to minimally invasive procedures.',
        'Risk of infection or excessive bleeding.',
        'Possibility of scar tissue formation, which may impact future pregnancies.',
      ],
    },
    {
      heading: 'Why Choose Seeds of Innocens for Open Surgery?',
      paragraphs: [
        'Seeds of Innocens is a trusted name in fertility and pregnancy care, offering expert surgical interventions when needed. Our skilled team of specialists ensures:',
      ],
      listItems: [
        'Advanced medical techniques for safe and effective treatment.',
        'Personalized care to support your fertility journey.',
        'High success rates in managing complex reproductive conditions.',
      ],
      paragraphs: [
        'At Seeds of Innocens, we are committed to providing the best fertility care with advanced treatment options, including open surgery when necessary. If you are facing fertility challenges, consult our experts for the right guidance.',
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
              <IVFContentSection data={openSurgeryContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
