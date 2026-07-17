import { getSeoMetadata } from '@/app/utils/seoMetadata';


export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/contact/call-back-form',
    hierarchyCandidates: [['Contact Us'], []],
  });
}

export default function Layout({ children }) {
  return children;
}
