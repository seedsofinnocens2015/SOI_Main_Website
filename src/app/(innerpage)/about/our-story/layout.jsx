import { getSeoMetadata } from '@/app/utils/seoMetadata';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/about/our-story',
    hierarchyCandidates: [['About Us'], []],
  });
}

export default function Layout({ children }) {
  return children;
}
