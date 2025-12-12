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
  mainImage: '/assets/img/male.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/male.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/male.jpg',
    '/assets/img/male.jpg'
  ],
};

const blockedFallopianTubesContentData = {
  sections: [
    {
      heading: 'Understanding Blocked Fallopian Tubes – Symptoms, Causes & Treatment',
      paragraphs: [
        'Trying to conceive but facing unexpected roadblocks? One common yet often overlooked reason for infertility in women is blocked fallopian tubes. These tiny tubes play a big role in helping you get pregnant, and when they\'re blocked, it can be difficult for the egg and sperm to meet. In this blog, we\'ll break down everything you need to know about blocked fallopian tubes in simple and easy language.',
      ],
      sideImage: '/assets/img/Blocked Fallopian Tubes.webp',
    },
    {
      heading: 'What Are Fallopian Tubes?',
      paragraphs: [
        'Fallopian tubes are two narrow tubes that connect the ovaries to the uterus. Every month during ovulation, an egg is released from the ovary and travels through one of these tubes to meet the sperm. If fertilization happens, the embryo then moves to the uterus for implantation.',
        'When one or both fallopian tubes are blocked, this natural journey is disrupted, making it harder to conceive.',
      ],
    },
    {
      heading: 'Symptoms of Blocked Fallopian Tubes',
      paragraphs: [
        'Blocked fallopian tubes often don\'t cause any obvious symptoms. Many women find out only when they are trying to get pregnant. However, in some cases, you might experience:',
      ],
      listItems: [
        'Difficulty conceiving: The most common sign.',
        'Pain in the lower abdomen or pelvis: Especially during periods or sex.',
        'Unusual vaginal discharge (if there\'s an infection).',
        'Painful periods (in some cases).',
      ],
    },
    {
      heading: 'Hydrosalpinx',
      paragraphs: [
        'If a blocked tube causes a condition called hydrosalpinx (fluid-filled tube), you may notice more discomfort or unusual symptoms.',
      ],
    },
    {
      heading: 'What Causes Blocked Fallopian Tubes?',
      paragraphs: [
        'There are several reasons why fallopian tubes can become blocked:',
      ],
      listItems: [
        'Pelvic Inflammatory Disease (PID): A common cause due to infection in the reproductive organs.',
        'Endometriosis: The tissue that normally lines the uterus grows outside and can block the tubes.',
        'Sexually Transmitted Infections (STIs): Infections like chlamydia and gonorrhea can cause scarring.',
        'Previous Surgeries: Especially surgeries involving the uterus, ovaries, or abdomen.',
        'Ectopic Pregnancy: A previous pregnancy in the tube can lead to damage.',
        'Fibroids: Large fibroids near the uterus can block the tube openings.',
      ],
    },
    {
      heading: 'Understanding the Cause',
      paragraphs: [
        'Understanding the cause helps doctors plan the most effective treatment.',
      ],
    },
    {
      heading: 'How Are Blocked Fallopian Tubes Diagnosed?',
      paragraphs: [
        'Doctors use special imaging tests to check if your fallopian tubes are open:',
      ],
      listItems: [
        'Hysterosalpingography (HSG): An X-ray test where a special dye is injected into the uterus to see if it flows through the tubes.',
        'Sonohysterography: A saline ultrasound that also checks for blockages.',
        'Laparoscopy: A minor surgical procedure that gives a direct view of your reproductive organs.',
      ],
    },
    {
      heading: 'Advanced Diagnostics at Seeds of Innocens',
      paragraphs: [
        'At Seeds of Innocens, we use advanced and minimally invasive diagnostic techniques to detect and evaluate tubal conditions with precision and care.',
      ],
      // sideImage: '/assets/img/male.jpg',
    },
    {
      heading: 'Treatment Options for Blocked Fallopian Tubes',
      paragraphs: [
        'The treatment depends on the location and severity of the blockage:',
      ],
    },
    {
      heading: '1. Laparoscopic Surgery',
      paragraphs: [
        'If the blockage is minor or due to scar tissue, surgery can remove the obstruction and improve chances of natural conception.',
      ],
    },
    {
      heading: '2. Tubal Cannulation',
      paragraphs: [
        'This non-invasive procedure is used for blockages near the uterus. A thin tube is used to open the blockage.',
      ],
    },
    {
      heading: '3. IVF (In Vitro Fertilization)',
      paragraphs: [
        'When the tubes are severely damaged or both are blocked, IVF is often the best option. IVF bypasses the fallopian tubes completely. Eggs are retrieved, fertilized in a lab, and the embryo is placed directly into the uterus.',
      ],
    },
    {
      heading: 'World-Class IVF Services',
      paragraphs: [
        'Seeds of Innocens offers world-class IVF services with high success rates and personalised care for each couple.',
      ],
    },
    {
      heading: 'Can You Get Pregnant With Blocked Tubes?',
      paragraphs: [
        'If only one fallopian tube is blocked, you may still conceive naturally from the other side. But if both tubes are blocked, natural pregnancy becomes very unlikely. In such cases, IVF offers a safe and effective way to achieve pregnancy.',
      ],
    },
    {
      heading: 'Taking Care of Your Reproductive Health',
      paragraphs: [
        'Maintaining good reproductive health is essential:',
      ],
      listItems: [
        'Get regular health checkups.',
        'Treat infections early.',
        'Practice safe sex to prevent STIs.',
        'Maintain a healthy lifestyle with proper diet and exercise.',
      ],
    },
    {
      heading: 'When to See a Fertility Expert?',
      paragraphs: [
        'If you\'ve been trying to get pregnant for a year (or 6 months if you\'re over 35), it\'s time to see a specialist. An early diagnosis can save time and improve your chances of successful treatment.',
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'Blocked fallopian tubes may seem like a major hurdle, but with the right diagnosis and treatment, you can still fulfil your dream of parenthood. Whether it\'s surgical correction or assisted reproductive techniques like IVF, there\'s always a solution.',
        'At Seeds of Innocens, we believe every woman deserves the chance to experience motherhood. Our team of expert fertility specialists is here to guide you with compassion, care, and cutting-edge treatment.',
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
              <IVFContentSection data={blockedFallopianTubesContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
