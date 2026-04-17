import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';
import servicesContent from '@/app/data/servicesContent.json';
const vasectomyReversalData = servicesContent['vasectomy-reversal'] || {};
const vasectomyReversalContentData = vasectomyReversalData.ivfContentData || { sections: [] };
const headingData = {
  uspTitle: vasectomyReversalData.uspTitle || '',
  title: vasectomyReversalData.title || 'Vasectomy Reversal',
};


const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage={vasectomyReversalData.heroBackground || '/assets/img/Top-Header.webp'}
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
            <div className="col-12 cs_service_page_content">
              <IVFContentSection
                data={vasectomyReversalContentData}
                benefitImages={vasectomyReversalData.benefitImages || []}
                accentHeadingStyle
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
