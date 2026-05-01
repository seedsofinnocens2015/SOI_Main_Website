import { getSeoMetadata } from '@/app/utils/seoMetadata';
import TrainingRegistrationClient from './TrainingRegistrationClient';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/training-academy/training-registration',
    hierarchyCandidates: [['Training Academy'], []],
  });
}

const Page = () => <TrainingRegistrationClient />;

export default Page;
