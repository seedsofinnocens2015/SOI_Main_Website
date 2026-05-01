import { getSeoMetadata } from '@/app/utils/seoMetadata';
import ContactTeamClient from './ContactTeamClient';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/international-patients/contact-team',
    hierarchyCandidates: [['International Patients'], []],
  });
}

export default function Page() {
  return <ContactTeamClient />;
}
