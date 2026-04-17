import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';
import servicesContent from '@/app/data/servicesContent.json';

const varicoceleData = servicesContent.varicocele || {};
const varicoceleContentData = varicoceleData.ivfContentData || { sections: [] };

const headingData = {
  uspTitle: varicoceleData.uspTitle || '',
  title: varicoceleData.title || 'Varicocele Symptoms & Treatment',
};


const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage={varicoceleData.heroBackground || '/assets/img/Top-Header.webp'}
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
                data={varicoceleContentData}
                benefitImages={varicoceleData.benefitImages || []}
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
