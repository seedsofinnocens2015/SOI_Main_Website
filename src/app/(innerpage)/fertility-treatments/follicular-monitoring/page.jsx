import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/fertility-treatments/follicular-monitoring',
    hierarchyCandidates: [['Infertility Treatment', 'Fertility Treatments'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="follicular-monitoring" />;
};

export default page;
