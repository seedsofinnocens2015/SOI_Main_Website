import { getSeoMetadata } from '@/app/utils/seoMetadata';


export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/contact/book-appointment',
    hierarchyCandidates: [['Contact Us'], []],
  });
}

export default function Layout({ children }) {
  return children;
}
