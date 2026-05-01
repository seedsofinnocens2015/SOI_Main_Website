import { getSeoMetadata } from '@/app/utils/seoMetadata';
import PatientTestimonialVideosClient from './PatientTestimonialVideosClient';

export const dynamic = 'force-static';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/resources/patient-testimonial-videos',
    hierarchyCandidates: [['Resources'], []],
  });
}

export default function Page() {
  return <PatientTestimonialVideosClient />;
}
