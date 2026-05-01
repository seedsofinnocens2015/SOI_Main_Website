import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/reproductive-health-conditions/pcos-polycystic-ovarian-syndrome',
    hierarchyCandidates: [['Infertility Treatment', 'Reproductive Health Conditions'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="pcos-polycystic-ovarian-syndrome" />;
};

export default page;
