'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPathClient } from '@/app/utils/assetPath';

/**
 * Reusable service card for related services and listings.
 * Uses existing SCSS; card layout is responsive grid-friendly.
 */
const ServiceCard = ({ title, description, image, slug, className = '', hideImage = false }) => {
  const href = slug ? `/${slug}` : '#';
  const imgSrc = image || '/assets/img/recent_post2webp';

  return (
    <div className={`cs_service_card ${className}`}>
      <Link href={href} className="cs_service_card_link">
        {!hideImage && (
          <div className="cs_service_card_image_wrapper">
            <Image
              src={getAssetPathClient(imgSrc)}
              alt={title || 'Service'}
              fill
              loading="lazy"
              className="cs_service_card_image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="cs_service_card_body">
          <h3 className="cs_service_card_title">{title}</h3>
          {description && (
            <p className="cs_service_card_description">{description}</p>
          )}
          <span className="cs_service_card_cta">Learn More</span>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
