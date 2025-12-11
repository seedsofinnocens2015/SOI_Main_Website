import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'Success Stories',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const storiesContentData = {
  sections: [
    {
      heading: 'Inspiring Success Stories',
      paragraphs: [
        'Real stories from real couples who achieved their dream of parenthood with Seeds of Innocens. These testimonials reflect the hope, dedication, and joy that define our patients\' journeys.',
        'Each story represents a unique journey filled with challenges, determination, and ultimately, success. Our patients come from diverse backgrounds and face different fertility challenges, but they all share one common goal: the dream of becoming parents.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Priya & Rahul from Delhi - IVF Success',
      paragraphs: [
        'After 5 years of trying to conceive, Priya and Rahul found hope at Seeds of Innocens. The entire team was incredibly supportive throughout their journey. Dr. Gauri Agarwal\'s expertise and personalized care made all the difference. They are now proud parents of a beautiful baby girl.',
        '"Seeds of Innocens gave us the gift of parenthood. We are forever grateful! The team\'s support and expertise made our dream come true."',
      ],
    },
    {
      heading: 'Anjali & Mohan from Mumbai - ICSI Treatment Success',
      paragraphs: [
        'Anjali and Mohan had almost given up hope after multiple failed attempts elsewhere. Then they came to Seeds of Innocens. The ICSI treatment was successful on their first attempt! The doctors explained everything clearly, and the staff was always available to answer questions. Their twin boys are their greatest blessing.',
        '"The best decision we ever made was choosing Seeds of Innocens. The ICSI treatment worked perfectly, and we now have two beautiful boys."',
      ],
    },
    {
      heading: 'Sneha & Vikram from Bangalore - Egg Freezing & IVF Success',
      paragraphs: [
        'As a career-focused couple, Sneha and Vikram decided to freeze eggs early. When they were ready, Seeds of Innocens helped them with the IVF process using their frozen eggs. The entire process was smooth, and the team guided them through every step. They now have a healthy baby girl and couldn\'t be happier!',
        '"Professional care, excellent results, and a wonderful experience. Egg freezing gave us flexibility, and IVF gave us our baby girl."',
      ],
    },
    {
      heading: 'Meera & Arjun from Pune - IVF with PGT Success',
      paragraphs: [
        'Due to genetic concerns in their family, Meera and Arjun opted for IVF with Preimplantation Genetic Testing. The team at Seeds of Innocens was thorough and reassuring. The PGT testing gave them peace of mind, and they now have a healthy baby boy. The genetic counseling was particularly helpful.',
        '"Advanced technology and compassionate care - the perfect combination. PGT testing was exactly what we needed, and we now have a healthy son."',
      ],
    },
    {
      heading: 'Kavita & Ramesh from Hyderabad - IUI Treatment Success',
      paragraphs: [
        'Kavita and Ramesh started with IUI treatment at Seeds of Innocens, and it was successful on their second attempt! The treatment was less invasive than they expected, and the team made them feel comfortable throughout. Their journey to parenthood was smooth and stress-free.',
        '"Simple, effective, and successful - exactly what we needed. IUI worked for us, and we couldn\'t be happier with our experience."',
      ],
    },
    {
      heading: 'Divya & Sanjay from Chennai - IVF Treatment Success',
      paragraphs: [
        'After years of struggling with infertility, Divya and Sanjay found hope at Seeds of Innocens. The personalized treatment plan, regular monitoring, and constant support made their IVF journey manageable. They are now parents to a beautiful baby, and words cannot express their gratitude.',
        '"From hopeless to hopeful - Seeds of Innocens changed our lives. The personalized care and support made all the difference."',
      ],
    },
    {
      heading: 'Why Patients Choose Seeds of Innocens',
      paragraphs: [
        'Common themes from our success stories:',
      ],
      listItems: [
        'Experienced and compassionate medical professionals',
        'Advanced technology and state-of-the-art facilities',
        'Personalized treatment plans tailored to individual needs',
        'Comprehensive support throughout the journey',
        'High success rates with various treatment options',
        'Transparent communication and clear expectations',
        'Emotional support and counseling services',
      ],
    },
    {
      heading: 'Share Your Success Story',
      paragraphs: [
        'If you have a success story to share, we would love to hear from you. Your journey can inspire and give hope to others who are on their fertility journey. Contact us to share your story and help others realize their dream of parenthood.',
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
              <IVFContentSection data={storiesContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
