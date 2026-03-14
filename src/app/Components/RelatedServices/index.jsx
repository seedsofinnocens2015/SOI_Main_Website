'use client';

import React from 'react';
import Link from 'next/link';
import ServiceCard from '@/app/Components/ServiceCard';
import { getRelatedSlugs, getCategory } from '@/app/utils/serviceSeo';

const SECTION_HEADINGS = {
  treatment: 'Related Fertility Treatments',
  'male-infertility': 'Related Male Infertility Services',
  'diagnostic-test': 'Related Diagnostic Tests',
  surgery: 'Related Surgical Procedures',
  'women-health': 'Related Conditions & Women Health',
  lifestyle: 'Related Lifestyle & Wellness',
};

/**
 * Shows 4–6 related services from the same category.
 * Place above FAQ. Excludes current page; uses Next.js Link in ServiceCard.
 */
const RelatedServices = ({
  currentSlug,
  servicesContent,
  serviceMeta = {},
  limit = 6,
  heading,
}) => {
  if (!servicesContent || !currentSlug) return null;

  const slugs = getRelatedSlugs(currentSlug, servicesContent, limit);
  if (slugs.length === 0) return null;

  const category = serviceMeta[currentSlug]?.category || getCategory(currentSlug);
  const displayHeading = heading || SECTION_HEADINGS[category] || 'Related Services';

  const words = String(displayHeading).trim().split(/\s+/);
  const mid = Math.ceil(words.length / 2);
  const firstPart = words.slice(0, mid).join(' ');
  const restPart = words.slice(mid).join(' ');

  return (
    <div className="cs_ivf_content_section cs_related_services_section">
      <h2 className="cs_ivf_content_heading cs_related_services_heading">
        <span className="cs_related_services_heading_accent">{firstPart}</span>
        {restPart ? <span> {restPart}</span> : null}
      </h2>
      <div className="row cs_gap_y_30 cs_related_services_grid">
        {slugs.map((slug) => {
          const config = servicesContent[slug];
          if (!config) return null;
          const meta = serviceMeta[slug] || {};
          const title = config.title || slug;
          const description = meta.description || config.description || (config.ivfContentData?.sections?.[0]?.paragraphs?.[0]?.slice(0, 120) + '…') || '';
          return (
            <div key={slug} className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                title={title}
                description={description}
                slug={slug}
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
