import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/genetic-testing-screening/difference-between-pgt-a-and-pgt-m',
    hierarchyCandidates: [['Infertility Treatment', 'Genetic Testing & Screening'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="difference-between-pgt-a-and-pgt-m" />;
};

export default page;
