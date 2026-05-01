import { getSeoMetadata } from '@/app/utils/seoMetadata';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/contact/careers/apply',
    hierarchyCandidates: [['Contact Us'], []],
  });
}

export default function Layout({ children }) {
  return children;
}
