import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'Gynecologic Surgical Training Program',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '',
  serviceDetails: [],
  footerText: '',
  additionalImages: '',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [],
};

const gynecologicSurgicalContentData = {
  sections: [
    {
      heading: 'About the Fellowship',
      paragraphs: [
        'At Seeds of Innocens, we believe that quality surgical training builds safer surgeons and better outcomes. Our Fellowship in Minimally Invasive Gynecologic Surgeries (MIGS) is designed to empower gynaecologists with in-depth knowledge, precision-based skills, and confidence in performing advanced laparoscopic and hysteroscopic surgeries.',
        'This is a hands-on, high-impact fellowship that combines theory, simulation-based practice, and live surgical exposure – all under the guidance of leading fertility-enhancing surgical experts.',
        'Whether you\'re a recent postgraduate or an experienced practitioner looking to upskill, our tailored modules cater to different learning curves.',
      ],
    },
    {
      heading: 'What You Will Learn',
      paragraphs: [
        'This program ensures a deep understanding of key concepts and practical techniques, including:',
      ],
      listItems: [
        'Pelvic anatomy and important surgical landmarks',
        'Surgical ergonomics for safety and comfort',
        'Instrumentation, port site selection, and insertion techniques',
        'Energy sources: their types, uses, and safety',
        'Step-by-step laparoscopic and hysteroscopic approaches',
        'Tissue handling and dissection methods',
        'Traction/counter-traction principles in pelvic surgery',
        'Advanced endosuturing skills',
        'Diagnosing subclinical conditions and choosing the right interventions',
        'Evaluating pelvic anatomy in infertility cases and selecting procedures accordingly',
      ],
    },
    {
      heading: 'Procedures You\'ll Gain Hands-On Experience In',
      paragraphs: [
        'Under expert guidance, fellows will learn and assist in:',
      ],
      listItems: [
        'Diagnostic hysteroscopy & laparoscopy',
        'Hysteroscopic septal resection, adhesiolysis, metroplasty & polypectomy',
        'Management of ectopic pregnancy',
        'Laparoscopic tubal clipping, cystectomy, myomectomy, adenomyomectomy',
        'Endometriosis surgery',
        'Total laparoscopic hysterectomy (TLH)',
        'And Many More',
      ],
    },
    {
      heading: 'Building Surgical Confidence',
      paragraphs: [
        'Our hands-on training ensures fellows build surgical confidence through real-time observation, participation, and skill-building.',
      ],
    },
    {
      heading: 'Who Can Apply?',
      paragraphs: [
        'You are eligible if you hold any of the following qualifications:',
      ],
      listItems: [
        'DGO',
        'DNB (OBGY)',
        'MD/MS (OBGY)',
      ],
    },
    {
      heading: 'Duration Options',
      paragraphs: [
        'We offer flexible durations to suit your learning needs and availability:',
      ],
      listItems: [
        '2 Weeks',
        '1 Month',
        '3 Months',
        '6 Months',
      ],
    },
    {
      heading: 'Program Structure',
      paragraphs: [
        'Each duration includes daily modules, hands-on sessions, and skill assessments.',
      ],
    },
    {
      heading: 'Why Train with Seeds of Innocens?',
      paragraphs: [
        'Our Fellowship offers exceptional benefits:',
      ],
      listItems: [
        'One-on-One Fellowship: We take only one fellow at a time, ensuring personal attention and customised learning.',
        'Individualised Training Plan: Whether you\'re a beginner or an advanced learner, we adapt the curriculum to match your experience.',
        'Hands-On Learning from Day One: Live surgical exposure and daily endotrainer practice under expert supervision.',
        'Faculty with 20+ Years of Surgical Experience: Learn directly from India\'s leading gynecologic laparoscopic surgeons and fertility specialists.',
        'Advanced Surgical Setup: Train in a modern, fully-equipped OT with the latest instruments and energy devices.',
        'Focus on Fertility-Enhancing Surgeries: Our expertise in fertility treatments gives you an edge in understanding reproductive anatomy and surgical decision-making.',
      ],
    },
    {
      heading: 'What Makes Our Fellowship Unique?',
      paragraphs: [
        'Our program stands out with:',
      ],
      listItems: [
        'Direct surgical mentorship',
        'Structured academic sessions',
        'Simulation-based practice',
        'Certification on completion',
        'Clinical exposure to both routine and complex cases',
        'Exclusive access to live procedures, video libraries, and research discussions',
      ],
    },
    {
      heading: 'Seeds of Innocens – Delhi/NCR',
      paragraphs: [
        'State-of-the-art facility with access to high-volume surgical cases.',
      ],
    },
    {
      heading: 'Ready to Begin Your Surgical Journey?',
      paragraphs: [
        'Upgrade your skills and become a confident, competent minimally invasive gynecologic surgeon.',
        'At Seeds of Innocens, we are committed to providing comprehensive surgical training that prepares you for excellence in minimally invasive gynecologic surgeries. Our fellowship program combines theoretical knowledge with extensive hands-on practice in a real-world surgical setting.',
        'Whether you are a recent postgraduate looking to specialize in minimally invasive surgery or an experienced practitioner seeking to enhance your skills, our Gynecologic Surgical Training Program provides the foundation you need to excel in this specialized and rewarding field.',
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
              <IVFContentSection data={gynecologicSurgicalContentData} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
