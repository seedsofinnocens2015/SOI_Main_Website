import SeoRawHead from '@/app/Components/SeoRawHead';

export default async function SeoLayout({ children, params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const centerSlug = resolvedParams?.centerSlug;
  const pageUrl = slug && centerSlug ? `/${slug}/${centerSlug}` : null;

  return (
    <>
      {pageUrl ? <SeoRawHead pageUrl={pageUrl} /> : null}
      {children}
    </>
  );
}
