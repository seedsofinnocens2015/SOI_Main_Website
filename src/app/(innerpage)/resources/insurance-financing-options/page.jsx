import { getSeoMetadata } from '@/app/utils/seoMetadata';
import InsuranceFinancingClient from './InsuranceFinancingClient';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/resources/insurance-financing-options',
    hierarchyCandidates: [['Resources'], []],
  });
}

export default function Page() {
  return <InsuranceFinancingClient />;
}
