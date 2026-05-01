import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/male-fertility-conditions/azoospermia',
    hierarchyCandidates: [['Infertility Treatment', 'Male Fertility Conditions'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="azoospermia" />;
};

export default page;
