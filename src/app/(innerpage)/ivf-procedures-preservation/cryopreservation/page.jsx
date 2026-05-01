import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/ivf-procedures-preservation/cryopreservation',
    hierarchyCandidates: [['Infertility Treatment', 'IVF Procedures & Preservation'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="cryopreservation" />;
};

export default page;
