import { getSeoMetadata } from '@/app/utils/seoMetadata';
import MediaPressClient from './MediaPressClient';

export const dynamic = 'force-static';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/about/media-press',
    hierarchyCandidates: [['About Us'], []],
  });
}

export default function Page() {
  return <MediaPressClient />;
}

