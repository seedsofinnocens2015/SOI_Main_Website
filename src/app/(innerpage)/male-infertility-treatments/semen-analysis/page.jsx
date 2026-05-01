import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/male-infertility-treatments/semen-analysis',
    hierarchyCandidates: [['Infertility Treatment', 'Male Infertility Treatments'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="semen-analysis" />;
};

export default page;
