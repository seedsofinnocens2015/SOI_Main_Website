import { getSeoMetadata } from '@/app/utils/seoMetadata';

export const dynamic = 'force-static';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/contact/careers',
    hierarchyCandidates: [['Contact Us'], []],
  });
}

export default function Layout({ children }) {
  return (
    <>
      <div className="cs_site_header_spacing_150" />
      {children}
    </>
  );
}
