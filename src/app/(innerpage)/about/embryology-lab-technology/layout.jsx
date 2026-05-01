import { getSeoMetadata } from '@/app/utils/seoMetadata';

export const dynamic = 'force-static';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/about/embryology-lab-technology',
    hierarchyCandidates: [['About Us'], []],
  });
}

export default function Layout({ children }) {
  return children;
}
