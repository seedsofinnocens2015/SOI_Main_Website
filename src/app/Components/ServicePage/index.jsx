import React from 'react';
import Section from '../Section';
import PageHeading from '../PageHeading';
import IVFContentSection from '../IVFContentSection';
import servicesContent from '@/app/data/servicesContent.json';
import { getRelatedSlugs, getDefaultDescription } from '@/app/utils/serviceSeo';

const ServicePage = ({ serviceKey }) => {
  const config = servicesContent[serviceKey];

  if (!config) {
    return null;
  }

  const headingData = {
    title: config.title,
    ...(config.uspTitle != null && config.uspTitle !== '' && { uspTitle: config.uspTitle }),
  };

  const bannerImage = config.headerImage ?? config.heroBackground ?? '/assets/img/Top-Header.webp';
  const relatedServices = getRelatedSlugs(serviceKey, servicesContent, 6).map((slug) => {
    const relatedConfig = servicesContent[slug];
    if (!relatedConfig) return null;
    return {
      slug,
      title: relatedConfig.title || slug,
      description: getDefaultDescription(relatedConfig),
    };
  }).filter(Boolean);

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage={bannerImage}
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
            <div className="col-12 cs_service_page_content">
              {config.layoutType === 'ivfContent' && config.ivfContentData && (
                <IVFContentSection
                  data={config.ivfContentData}
                  benefitImages={config.benefitImages}
                  accentHeadingStyle
                  serviceName={config.title}
                  faq={config.faq}
                  keyHighlights={config.keyHighlights}
                  serviceKey={serviceKey}
                  treatmentContent={config.treatmentContent}
                  maleInfertilityContent={config.maleInfertilityContent}
                  diagnosticContent={config.diagnosticContent}
                  surgeryContent={config.surgeryContent}
                  womenHealthContent={config.womenHealthContent}
                  lifestyleBlogContent={config.lifestyleBlogContent}
                  relatedServices={relatedServices}
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

