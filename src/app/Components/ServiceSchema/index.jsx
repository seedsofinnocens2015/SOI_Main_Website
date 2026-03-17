'use client';

import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.seedsofinnocence.com';

/**
 * JSON-LD schema for medical content (MedicalProcedure, MedicalCondition, MedicalTest).
 * Renders a script tag for SEO.
 */
const ServiceSchema = ({ schemaType, name, description, slug }) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: name || 'Fertility Service',
    description: description || '',
    url: `${SITE_URL}/${slug || ''}`,
  };

  if (schemaType === 'MedicalProcedure') {
    baseSchema.procedureType = name;
  }
  if (schemaType === 'MedicalTest') {
    baseSchema.usedToDiagnose = description ? description.slice(0, 100) : undefined;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
};

export default ServiceSchema;
