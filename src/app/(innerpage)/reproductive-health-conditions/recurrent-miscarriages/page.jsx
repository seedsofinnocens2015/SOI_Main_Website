import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/reproductive-health-conditions/recurrent-miscarriages',
    hierarchyCandidates: [['Infertility Treatment', 'Reproductive Health Conditions'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="recurrent-miscarriages" />;
};

export default page;
