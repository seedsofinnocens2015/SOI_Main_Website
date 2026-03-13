import React from 'react';
import Section from '../Section';
import PageHeading from '../PageHeading';
import IVFContentSection from '../IVFContentSection';
import servicesContent from '@/app/(innerpage)/service/servicesContent.json';

const ServicePage = ({ serviceKey }) => {
  const config = servicesContent[serviceKey];

  if (!config) {
    return null;
  }

  const headingData = {
    title: config.title,
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage={config.heroBackground || '/assets/img/Top-Header.png'}
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg={config.topSpaceLg || '50'}
        topSpaceMd={config.topSpaceMd || '60'}
        bottomSpaceLg={config.bottomSpaceLg || '50'}
        bottomSpaceMd={config.bottomSpaceMd || '60'}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              {config.layoutType === 'ivfContent' && config.ivfContentData && (
                <IVFContentSection
                  data={config.ivfContentData}
                  benefitImages={config.benefitImages}
                />
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServicePage;

