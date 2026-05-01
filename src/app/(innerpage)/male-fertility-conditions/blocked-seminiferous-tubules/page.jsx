import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/male-fertility-conditions/blocked-seminiferous-tubules',
    hierarchyCandidates: [['Infertility Treatment', 'Male Fertility Conditions'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="blocked-seminiferous-tubules" />;
};

export default page;
