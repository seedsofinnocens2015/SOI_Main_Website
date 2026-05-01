import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/surgeries/laparoscopy',
    hierarchyCandidates: [['Infertility Treatment', 'Surgeries'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="laparoscopy" />;
};

export default page;
