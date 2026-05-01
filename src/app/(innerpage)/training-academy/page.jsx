import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/training-academy',
    hierarchyCandidates: [['Training Academy'], []],
  });
}

const headingData = {
  title: 'Training Programs Academy',
};



const trainingAcademyContentData = {
  sections: [
    {
      heading: 'Page is under construction',
      paragraphs: [
        'Page is under construction. Please check back later. Thank you for your patience.',
      ],

    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.webp"
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
              <IVFContentSection data={trainingAcademyContentData} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
