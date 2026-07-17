import SeoRawHead from '@/app/Components/SeoRawHead';

export default function DoctorSeoLayout({ children, params }) {
  return (
    <>
      <SeoRawHead pageUrl={`/ivf-doctor/${params.doctorSlug}`} />
      {children}
    </>
  );
}
