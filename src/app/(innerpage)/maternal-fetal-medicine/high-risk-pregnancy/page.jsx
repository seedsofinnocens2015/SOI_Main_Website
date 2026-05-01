import React from 'react';
import ServicePage from '@/app/Components/ServicePage';
import { getSeoMetadata } from '@/app/utils/seoMetadata';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/maternal-fetal-medicine/high-risk-pregnancy',
    hierarchyCandidates: [['Infertility Treatment', 'Maternal–Fetal Medicine (MFM)'], ['Infertility Treatment'], []],
  });
}

const page = () => {
  return <ServicePage serviceKey="high-risk-pregnancy" />;
};

export default page;