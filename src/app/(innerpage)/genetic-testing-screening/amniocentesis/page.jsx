import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/genetic-testing-screening/amniocentesis',
    hierarchyCandidates: [['Infertility Treatment', 'Genetic Testing & Screening'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="amniocentesis" />;
};

export default page;
