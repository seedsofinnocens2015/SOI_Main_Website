import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/male-fertility-conditions/endocrinological-disorder-in-men',
    hierarchyCandidates: [['Infertility Treatment', 'Male Fertility Conditions'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="endocrinological-disorder-in-men" />;
};

export default page;
