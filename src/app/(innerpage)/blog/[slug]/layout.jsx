import SeoRawHead from '@/app/Components/SeoRawHead';

export default async function BlogSeoLayout({ children, params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  return (
    <>
      {slug ? <SeoRawHead pageUrl={`/blog/${slug}`} /> : null}
      {children}
    </>
  );
}
