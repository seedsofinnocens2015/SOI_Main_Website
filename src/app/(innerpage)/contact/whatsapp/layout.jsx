import { getSeoMetadata } from '@/app/utils/seoMetadata';

export const dynamic = 'force-static';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/contact/whatsapp',
    hierarchyCandidates: [['Contact Us'], []],
  });
}

export default function Layout({ children }) {
  return children;
}
