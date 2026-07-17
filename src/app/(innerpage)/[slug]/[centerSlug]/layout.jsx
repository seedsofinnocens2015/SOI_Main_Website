import SeoRawHead from '@/app/Components/SeoRawHead';

export default function SeoLayout({ children, params }) {
  return (
    <>
      <SeoRawHead pageUrl={`/${params.slug}/${params.centerSlug}`} />
      {children}
    </>
  );
}
