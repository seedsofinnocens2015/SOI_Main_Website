import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'Patient Testimonial Videos',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const videosContentData = {
  sections: [
    {
      heading: 'Patient Testimonial Videos',
      paragraphs: [
        'Watch real stories from our patients as they share their IVF journey, experiences, and success stories. These video testimonials provide genuine insights into what you can expect at Seeds of Innocens.',
        'Hearing directly from our patients about their experiences, challenges, and successes can provide comfort, hope, and valuable information for those considering fertility treatment. Each video tells a unique story of hope, determination, and ultimate success.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Priya & Rahul - IVF Treatment Success Story',
      paragraphs: [
        'Watch Priya and Rahul from Delhi share their inspiring journey from years of trying to conceive to finally achieving parenthood through IVF treatment at Seeds of Innocens. They discuss their initial fears, the support they received, and the joy of holding their baby girl.',
        '"Our journey to parenthood was made possible by Seeds of Innocens. The team\'s support and expertise were incredible throughout our entire journey."',
      ],
    },
    {
      heading: 'Anjali & Mohan - ICSI Treatment Success Story',
      paragraphs: [
        'Anjali and Mohan from Mumbai share how ICSI treatment at Seeds of Innocens changed their lives. After multiple failed attempts elsewhere, they found success on their first attempt with us. Learn about their experience with ICSI and their joy of becoming parents to twin boys.',
        '"The best decision we ever made was choosing Seeds of Innocens. ICSI treatment worked perfectly for us."',
      ],
    },
    {
      heading: 'Sneha & Vikram - Egg Freezing & IVF Success Story',
      paragraphs: [
        'Sneha and Vikram from Bangalore share their unique journey of egg freezing followed by IVF treatment. As a career-focused couple, they discuss how egg freezing gave them flexibility and how the IVF process using frozen eggs was smooth and successful.',
        '"Professional care and excellent results throughout our journey. Egg freezing and IVF gave us the flexibility and success we needed."',
      ],
    },
    {
      heading: 'Meera & Arjun - IVF with PGT Success Story',
      paragraphs: [
        'Meera and Arjun from Pune share their experience with IVF and Preimplantation Genetic Testing. They discuss their genetic concerns, how PGT provided peace of mind, and their joy of having a healthy baby boy. The video highlights the importance of genetic testing in their journey.',
        '"Advanced technology and compassionate care made all the difference. PGT testing was exactly what we needed."',
      ],
    },
    {
      heading: 'Kavita & Ramesh - IUI Treatment Success Story',
      paragraphs: [
        'Kavita and Ramesh from Hyderabad share their successful IUI treatment experience. They discuss why IUI was the right choice for them, how the treatment was less invasive than expected, and their smooth journey to parenthood.',
        '"Simple, effective, and successful treatment experience. IUI worked perfectly for us, and we couldn\'t be happier."',
      ],
    },
    {
      heading: 'Divya & Sanjay - IVF Treatment Success Story',
      paragraphs: [
        'Divya and Sanjay from Chennai share their emotional journey from years of infertility struggles to finally achieving parenthood through IVF. They discuss the personalized care they received, the support throughout treatment, and their gratitude to the team.',
        '"From hopeless to hopeful - Seeds of Innocens changed our lives. The personalized care and support made all the difference."',
      ],
    },
    {
      heading: 'What Our Patients Say About Their Video Experience',
      paragraphs: [
        'Our patients value the opportunity to share their stories:',
      ],
      listItems: [
        'Helping others by sharing experiences and insights',
        'Expressing gratitude to the medical team',
        'Providing hope to couples considering treatment',
        'Celebrating their success and journey',
        'Contributing to awareness about fertility treatments',
      ],
    },
    {
      heading: 'Share Your Video Testimonial',
      paragraphs: [
        'If you\'d like to share your success story through a video testimonial, we would love to hear from you. Your story can inspire others on their fertility journey. Contact us to discuss how you can share your experience and help others realize their dream of parenthood.',
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
              <IVFContentSection data={videosContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
