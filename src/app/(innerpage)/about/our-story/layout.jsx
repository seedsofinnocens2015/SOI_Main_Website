import { getSeoMetadata } from '@/app/utils/seoMetadata';


export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/about/our-story',
    hierarchyCandidates: [['About Us'], []],
  });
}

export default function Layout({ children }) {
  return children;
}
