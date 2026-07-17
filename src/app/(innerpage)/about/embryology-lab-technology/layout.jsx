import { getSeoMetadata } from '@/app/utils/seoMetadata';


export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/about/embryology-lab-technology',
    hierarchyCandidates: [['About Us'], []],
  });
}

export default function Layout({ children }) {
  return children;
}
