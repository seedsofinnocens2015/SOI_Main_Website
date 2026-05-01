import { getSeoMetadata } from '@/app/utils/seoMetadata';

export const dynamic = 'force-static';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/thank-you',
    hierarchyCandidates: [['Thank You'], []],
  });
}

export default function ThankYouLayout({ children }) {
  return children;
}
