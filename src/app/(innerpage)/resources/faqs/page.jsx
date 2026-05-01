import { getSeoMetadata } from '@/app/utils/seoMetadata';
import FaqsClient from './FaqsClient';

export const dynamic = 'force-static';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/resources/faqs',
    hierarchyCandidates: [['Resources'], []],
  });
}

export default function Page() {
  return <FaqsClient />;
}
