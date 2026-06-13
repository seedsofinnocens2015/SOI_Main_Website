import ServicePage from '@/app/Components/ServicePage';
import React from 'react';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/ivf-procedures-preservation/surrogacy',
    hierarchyCandidates: [['Infertility Treatment', 'IVF Procedures & Preservation'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="surrogacy" />;
};

export default page;
