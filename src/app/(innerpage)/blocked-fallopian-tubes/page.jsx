import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Blocked Fallopian Tubes',
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
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const blockedFallopianTubesContentData = {
  sections: [
    {
      heading: 'Understanding Blocked Fallopian Tubes',
      paragraphs: [
        'Blocked fallopian tubes are one of the most common causes of female infertility. The fallopian tubes play a crucial role in conception, as they are the pathway through which the egg travels from the ovary to the uterus, and where fertilization typically occurs.',
        'When one or both fallopian tubes are blocked, the egg cannot meet the sperm, making natural conception difficult or impossible. At Seeds of Innocence, we specialize in diagnosing and treating blocked fallopian tubes to help women achieve their dream of motherhood.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'What are Fallopian Tubes?',
      paragraphs: [
        'The fallopian tubes are two thin tubes, one on each side of the uterus, that connect the ovaries to the uterus. They have several important functions:',
      ],
      listItems: [
        'Transport the egg from the ovary to the uterus',
        'Provide the site where fertilization occurs',
        'Help move the fertilized egg (embryo) to the uterus',
        'Nourish the egg and early embryo',
      ],
    },
    {
      heading: 'Causes of Blocked Fallopian Tubes',
      paragraphs: [
        'Several conditions can lead to blocked fallopian tubes:',
      ],
      listItems: [
        'Pelvic Inflammatory Disease (PID) - infections that cause scarring',
        'Endometriosis - tissue growth outside the uterus',
        'Previous ectopic pregnancy',
        'Previous abdominal or pelvic surgery',
        'Fibroids - especially those near the fallopian tubes',
        'Sexually transmitted infections (STIs) like chlamydia or gonorrhea',
        'Tuberculosis affecting the reproductive organs',
        'Congenital abnormalities',
      ],
    },
    {
      heading: 'Symptoms of Blocked Fallopian Tubes',
      paragraphs: [
        'Many women with blocked fallopian tubes may not experience any symptoms. However, some may notice:',
      ],
      listItems: [
        'Difficulty getting pregnant',
        'Pelvic or abdominal pain',
        'Painful periods',
        'Pain during intercourse',
        'Unusual vaginal discharge',
      ],
    },
    {
      heading: 'Diagnosis of Blocked Fallopian Tubes',
      paragraphs: [
        'At Seeds of Innocence, we use advanced diagnostic techniques:',
      ],
      listItems: [
        'Hysterosalpingography (HSG) - X-ray with contrast dye to visualize the tubes',
        'Laparoscopy - minimally invasive surgery to directly view the tubes',
        'Sonohysterography - ultrasound with saline to check tube patency',
        'Blood tests to check for infections',
      ],
    },
    {
      heading: 'Treatment Options',
      paragraphs: [
        'Treatment depends on the location and extent of the blockage:',
      ],
    },
    {
      heading: '1. Laparoscopic Surgery',
      paragraphs: [
        'Minimally invasive surgery can remove blockages and scar tissue, restoring tube function.',
      ],
    },
    {
      heading: '2. In Vitro Fertilization (IVF)',
      paragraphs: [
        'IVF bypasses the fallopian tubes entirely by fertilizing eggs in the laboratory and transferring embryos directly to the uterus. This is often the most effective treatment for blocked tubes.',
      ],
    },
    {
      heading: '3. Tubal Surgery',
      paragraphs: [
        'In some cases, surgical repair of the tubes may be possible, though success rates vary.',
      ],
    },
    {
      heading: 'Why Choose Seeds of Innocence?',
      paragraphs: [
        'Our experienced team offers:',
      ],
      listItems: [
        'Advanced diagnostic facilities',
        'Expert laparoscopic surgeons',
        'High success rates with IVF treatment',
        'Comprehensive care and support',
        'Personalized treatment plans',
      ],
      bottomImage: '/assets/img/recent_post2.jpg',
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

      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={blockedFallopianTubesContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
