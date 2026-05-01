import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/fertility-wellness/yoga-and-fertility-heres-how-yoga-can-support-fertility',
    hierarchyCandidates: [['Infertility Treatment', 'Fertility Wellness'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="yoga-and-fertility-heres-how-yoga-can-support-fertility" />;
};

export default page;
