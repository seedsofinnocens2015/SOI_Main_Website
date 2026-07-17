import { getSeoMetadata } from '@/app/utils/seoMetadata';
import FaqsClient from './FaqsClient';


export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/resources/faqs',
    hierarchyCandidates: [['Resources'], []],
  });
}

export default function Page() {
  return <FaqsClient />;
}
