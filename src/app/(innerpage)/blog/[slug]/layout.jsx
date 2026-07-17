import SeoRawHead from '@/app/Components/SeoRawHead';

export default function BlogSeoLayout({ children, params }) {
  return (
    <>
      <SeoRawHead pageUrl={`/blog/${params.slug}`} />
      {children}
    </>
  );
}
