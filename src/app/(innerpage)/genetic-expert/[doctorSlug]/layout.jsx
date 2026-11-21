import SeoRawHead from '@/app/Components/SeoRawHead';

export default async function GeneticExpertSeoLayout({ children, params }) {
  const resolvedParams = await params;
  const doctorSlug = resolvedParams?.doctorSlug;

  return (
    <>
      {doctorSlug ? <SeoRawHead pageUrl={`/genetic-expert/${doctorSlug}`} /> : null}
      {children}
    </>
  );
}
