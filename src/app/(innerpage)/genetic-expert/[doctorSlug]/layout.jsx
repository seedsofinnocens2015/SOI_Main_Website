import SeoRawHead from '@/app/Components/SeoRawHead';

export default function GeneticExpertSeoLayout({ children, params }) {
  return (
    <>
      <SeoRawHead pageUrl={`/genetic-expert/${params.doctorSlug}`} />
      {children}
    </>
  );
}
