import SeoRawHead from '@/app/Components/SeoRawHead';

export default async function DoctorSeoLayout({ children, params }) {
  const resolvedParams = await params;
  const doctorSlug = resolvedParams?.doctorSlug;

  return (
    <>
      {doctorSlug ? <SeoRawHead pageUrl={`/ivf-doctor/${doctorSlug}`} /> : null}
      {children}
    </>
  );
}
