import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'Patient Stories',
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
      heading: 'Inspiring International Patient Success Stories',
      paragraphs: [
        'Read inspiring stories from international patients who traveled to India for fertility treatment at Seeds of Innocens. These real experiences showcase successful outcomes and the quality care we provide to patients from around the world.',
        'Each story represents a journey of hope, determination, and success. Our international patients come from diverse backgrounds and countries, united by their dream of parenthood and trust in our world-class fertility treatments.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Sarah & James from United Kingdom - IVF Success',
      paragraphs: [
        'After multiple failed attempts in the UK, Sarah and James decided to explore treatment options in India. Seeds of Innocens exceeded all their expectations. The quality of care, advanced technology, and compassionate team made their journey successful. They are now proud parents of twins!',
        '"The best decision we made was choosing Seeds of Innocens. Quality care at affordable prices. The entire team was supportive throughout our journey, and we felt like we were in safe hands from day one."',
      ],
    },
    {
      heading: 'Maria & Carlos from Spain - ICSI Treatment Success',
      paragraphs: [
        'Traveling from Spain for IVF treatment seemed daunting, but the team at Seeds of Innocens made everything so easy. From visa assistance to accommodation, everything was taken care of. The treatment was successful on their first attempt, and they couldn\'t be happier!',
        '"Professional care, excellent results, and amazing support throughout our journey. The language support was excellent, and we always felt understood and cared for."',
      ],
    },
    {
      heading: 'Emma & David from Australia - IVF with PGT Success',
      paragraphs: [
        'As a couple from Australia, Emma and David were looking for quality fertility treatment at reasonable costs. Seeds of Innocens provided exactly that. The PGT testing gave them peace of mind, and the entire experience was smooth and well-coordinated.',
        '"From Australia to India - a journey that gave us our greatest blessing. The genetic testing option was important to us, and Seeds of Innocens delivered everything they promised."',
      ],
    },
    {
      heading: 'Sophie & Michael from Canada - IVF Treatment Success',
      paragraphs: [
        'The cost savings compared to Canada were significant, but what impressed Sophie and Michael most was the quality of care. The doctors, the facilities, and the support staff were all exceptional. They felt cared for every step of the way.',
        '"World-class treatment at a fraction of the cost - Seeds of Innocens delivered on every promise. We saved thousands while receiving the best care possible."',
      ],
    },
    {
      heading: 'Lisa & Robert from USA - Egg Freezing & IVF Success',
      paragraphs: [
        'Lisa and Robert traveled from the USA for egg freezing and later returned for IVF. The coordination between their initial visit and subsequent treatment was seamless. The team maintained excellent communication, and they achieved success!',
        '"Seeds of Innocens made our international fertility journey smooth and successful. The ability to freeze eggs and return later for IVF gave us flexibility we couldn\'t find back home."',
      ],
    },
    {
      heading: 'Anna & Thomas from Germany - IVF Treatment Success',
      paragraphs: [
        'Coming from Germany, Anna and Thomas were initially hesitant about treatment abroad. But Seeds of Innocens proved to be an excellent choice. The medical expertise, modern facilities, and personalized care exceeded their expectations.',
        '"Professional excellence and compassionate care - exactly what we needed. The team understood our concerns and addressed every question we had."',
      ],
    },
    {
      heading: 'Why International Patients Choose Seeds of Innocens',
      paragraphs: [
        'Common themes from our international patient success stories:',
      ],
      listItems: [
        'Significant cost savings compared to home countries',
        'World-class medical facilities and advanced technology',
        'Experienced and compassionate medical professionals',
        'Excellent support services including travel and accommodation',
        'High success rates and personalized treatment plans',
        'Multilingual support and clear communication',
        'Seamless coordination from initial consultation to post-treatment',
      ],
    },
    {
      heading: 'Share Your Success Story',
      paragraphs: [
        'If you are an international patient who has successfully completed treatment at Seeds of Innocens, we would love to hear your story. Your experience can inspire and help other couples on their fertility journey. Contact us to share your success story and help others realize their dream of parenthood.',
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
              <IVFContentSection data={storiesContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
