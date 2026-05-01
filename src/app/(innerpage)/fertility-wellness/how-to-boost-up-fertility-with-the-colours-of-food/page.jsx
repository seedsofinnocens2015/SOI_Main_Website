import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/fertility-wellness/how-to-boost-up-fertility-with-the-colours-of-food',
    hierarchyCandidates: [['Infertility Treatment', 'Fertility Wellness'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="how-to-boost-up-fertility-with-the-colours-of-food" />;
};

export default page;
