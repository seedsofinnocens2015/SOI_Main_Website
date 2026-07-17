import { getSeoMetadata } from '@/app/utils/seoMetadata';
import FertilityCalculatorClient from './FertilityCalculatorClient';


export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/resources/fertility-calculator',
    hierarchyCandidates: [['Resources'], []],
  });
}

export default function Page() {
  return <FertilityCalculatorClient />;
}
