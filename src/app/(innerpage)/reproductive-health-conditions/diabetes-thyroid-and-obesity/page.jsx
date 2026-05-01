import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/reproductive-health-conditions/diabetes-thyroid-and-obesity',
    hierarchyCandidates: [['Infertility Treatment', 'Reproductive Health Conditions'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="diabetes-thyroid-and-obesity" />;
};

export default page;
