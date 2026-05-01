import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/maternal-fetal-medicine/pregnancy-and-coronavirus-insights-from-experts',
    hierarchyCandidates: [['Infertility Treatment', 'Maternal–Fetal Medicine (MFM)'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="pregnancy-and-coronavirus-insights-from-experts" />;
};

export default page;
