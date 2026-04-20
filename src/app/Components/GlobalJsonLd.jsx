const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Seeds Of Innocens IVF',
  url: 'https://seedsofinnocens.com/',
  logo: 'https://seedsofinnocens.com/assets/img/Header%20Logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '09810350512',
    contactType: 'customer service',
    contactOption: 'TollFree',
    areaServed: 'IN',
    availableLanguage: ['en', 'Hindi', 'Malayalam'],
  },
  sameAs: [
    'https://www.facebook.com/seedsofinnocens/',
    'https://www.instagram.com/seedsofinnocensivf/',
    'https://www.youtube.com/@seedsofinnocens',
    'https://in.linkedin.com/company/seedsofinnocens',
  ],
};

const graphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Hospital', 'MedicalOrganization'],
      '@id': 'https://www.seedsofinnocens.com/#hospital',
      name: 'Seeds Of Innocens IVF',
      alternateName: 'Seeds Of Innocens',
      description:
        'Seeds of Innocens IVF is a leading fertility clinic offering IVF, ICSI, IUI and test tube baby treatments. Find trusted care and high success rates.',
      url: 'https://www.seedsofinnocens.com',
      telephone: '9810350512',
      logo: 'https://www.seedsofinnocens.com/assets/img/Header%20Logo.svg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '9810350512',
        contactType: 'Customer Support',
        contactOption: 'TollFree',
        availableLanguage: ['Hindi', 'English', 'Malayalam'],
        areaServed: 'IN',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          '3, opposite Aurobindo College, MMTC Colony, Malviya Nagar',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110017',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'WebPage',
      hasPart: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.seedsofinnocens.com/',
      name: 'Seeds Of Innocens IVF',
      url: 'https://www.seedsofinnocens.com/',
      potentialAction: {
        '@type': 'SearchAction',
        target:
          'https://www.seedsofinnocens.com/search-result?s={search_term_string}',
        query:
          'https://www.seedsofinnocens.com/search-result?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

function jsonLdStringify(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export default function GlobalJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdStringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdStringify(graphSchema),
        }}
      />
    </>
  );
}
