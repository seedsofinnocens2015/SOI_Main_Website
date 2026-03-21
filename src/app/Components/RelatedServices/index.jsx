'use client';

import React from 'react';
import Link from 'next/link';
import ServiceCard from '@/app/Components/ServiceCard';
import AccentHeading from '@/app/Components/AccentHeading';

/**
 * Shows precomputed related services above FAQ.
 */
const RelatedServices = ({
  relatedServices = [],
  heading,
}) => {
  if (!relatedServices || relatedServices.length === 0) return null;
  const displayHeading = heading || 'Related Services';

  return (
    <div className="cs_ivf_content_section cs_related_services_section">
      <AccentHeading className="cs_related_services_heading">{displayHeading}</AccentHeading>
      <div className="row cs_gap_y_30 cs_related_services_grid">
        {relatedServices.map((service) => {
          if (!service?.slug) return null;
          return (
            <div key={service.slug} className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                title={service.title || service.slug}
                description={service.description || ''}
                slug={service.slug}
                hideImage
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedServices;
