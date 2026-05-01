import { getSeoMetadata } from '@/app/utils/seoMetadata';
import FaqsClient from './FaqsClient';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/resources/faqs',
    hierarchyCandidates: [['Resources'], []],
  });
}

export default function Page() {
  return <FaqsClient />;
}
