import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/surgeries/hysteroscopy',
    hierarchyCandidates: [['Infertility Treatment', 'Surgeries'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="hysteroscopy" />;
};

export default page;
