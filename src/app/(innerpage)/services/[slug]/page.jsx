import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import ServiceSchema from '@/app/Components/ServiceSchema';
import servicesContent from '@/app/(innerpage)/service/servicesContent.json';
import { getDefaultDescription, getSchemaType } from '@/app/utils/serviceSeo';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.seedsofinnocence.com';

export async function generateStaticParams() {
  return Object.keys(servicesContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = servicesContent[slug];
  if (!config) {
    return { title: 'Service | Seeds of Innocence' };
  }

  const title = config.title || slug;
  const description = config.description || getDefaultDescription(config);
  const ogImage = config.heroBackground || config.benefitImages?.[0] || '/assets/img/Top-Header.png';
  const canonicalUrl = `${SITE_URL}/services/${slug}`;

  return {
    title: `${title} | Seeds of Innocence - Fertility Clinic`,
    description,
    openGraph: {
      title: `${title} | Seeds of Innocence`,
      description,
      url: canonicalUrl,
      siteName: 'Seeds of Innocence',
      images: ogImage ? [{ url: ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}` }] : undefined,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Seeds of Innocence`,
      description,
    },
    alternates: { canonical: canonicalUrl },
  };
}

export default async function ServiceSlugPage({ params }) {
  const { slug } = await params;
  const config = servicesContent[slug];
  const schemaType = getSchemaType(slug);
  const description = config?.description || (config && getDefaultDescription(config));

  return (
    <>
      {config && (
        <ServiceSchema
          schemaType={schemaType}
          name={config.title}
          description={description}
          slug={`services/${slug}`}
        />
      )}
      <ServicePage serviceKey={slug} />
    </>
  );
}
