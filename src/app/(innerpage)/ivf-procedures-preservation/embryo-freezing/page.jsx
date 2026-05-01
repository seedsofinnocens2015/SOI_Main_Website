import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/ivf-procedures-preservation/embryo-freezing',
    hierarchyCandidates: [['Infertility Treatment', 'IVF Procedures & Preservation'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="embryo-freezing" />;
};

export default page;
