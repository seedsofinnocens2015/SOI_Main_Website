import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaClock, FaArrowLeft } from 'react-icons/fa';
import AccentHeading from '@/app/Components/AccentHeading';
import BlogFaqAccordion from '@/app/Components/BlogFaqAccordion';
import { extractFaqsFromBlogHtml } from '@/app/utils/blogFaqParser';
import { getAssetPath } from '@/app/utils/assetPath';
import { accentHeadingsInHtml } from '@/app/utils/accentHeadingsInHtml';
import { getAllCenterBlogs, getCenterBlogBySlug } from '@/app/utils/centerBlogData';
import { getSeoMetadata } from '@/app/utils/seoMetadata';
import SeoRawHead from '@/app/Components/SeoRawHead';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.seedsofinnocens.com';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export async function generateStaticParams() {
  const list = getAllCenterBlogs();
  const params = [];
  list.forEach((item) => {
    params.push({ slug: item.slug });
    if (Array.isArray(item.aliases)) {
      item.aliases.forEach((alias) => {
        params.push({ slug: alias });
      });
    }
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getCenterBlogBySlug(slug);

  if (!blog) {
    return { title: 'Doctor Blog Not Found | Seeds of Innocens' };
  }

  const pageUrl = `/doctor/${blog.slug}`;
  const seoMetadata = await getSeoMetadata({
    pageUrl,
    pageUrlCandidates: [`/doctor/${blog.slug}/`, `/doctor/${slug}`],
    hierarchyCandidates: [
      ['IVF Doctors In India', blog.hometitle || blog.title],
      ['IVF Doctors In India'],
      [],
    ],
  }).catch(() => null);

  if (seoMetadata && (seoMetadata.title || seoMetadata.description)) {
    return seoMetadata;
  }

  const title = `${blog.title} | Seeds of Innocens`;
  const cleanExcerpt = blog.content
    ? blog.content.replace(/<[^>]*>?/gm, '').slice(0, 160)
    : `Consult with top fertility specialists for ${blog.title} at Seeds of Innocens.`;
  const path = `${basePath}/doctor/${blog.slug}/`.replace(/\/{2,}/g, '/');
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = blog.image || '/assets/img/Top-Header.webp';
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${basePath}${ogImage}`;

  return {
    title,
    description: cleanExcerpt,
    openGraph: {
      title,
      description: cleanExcerpt,
      url: canonicalUrl,
      siteName: 'Seeds of Innocens',
      images: [{ url: ogImageUrl }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: cleanExcerpt,
    },
    alternates: { canonical: canonicalUrl },
  };
}

const DoctorBlogDetailPage = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const blog = getCenterBlogBySlug(slug);
  const allCenterBlogs = getAllCenterBlogs();

  if (!blog) {
    return (
      <div>
        <Section topSpaceLg="100" topSpaceMd="130" bottomSpaceLg="80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1>Page Not Found</h1>
                <p>The doctor page you&apos;re looking for doesn&apos;t exist.</p>
                <Link
                  href="/"
                  style={{
                    display: 'inline-block',
                    marginTop: '20px',
                    padding: '12px 24px',
                    backgroundColor: '#df3655',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontWeight: '600',
                  }}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }

  const relatedBlogs = allCenterBlogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 3);

  const { beforeHtml, faqs, afterHtml } = extractFaqsFromBlogHtml(blog.content);

  return (
    <div>
      <SeoRawHead
        pageUrl={`/doctor/${blog.slug}`}
        pageUrlCandidates={[`/doctor/${blog.slug}/`, `/doctor/${slug}`]}
        hierarchyCandidates={[
          ['IVF Doctors In India', blog.hometitle || blog.title],
          ['IVF Doctors In India'],
          [],
        ]}
      />
      <Section topSpaceLg="100" topSpaceMd="130" bottomSpaceLg="80">
        <div className="container">
          {blog.image ? (
            <div className="row">
              <div className="col-12" style={{ marginBottom: '28px' }}>
                <div className="cs_blog_banner_image">
                  <Image
                    src={getAssetPath(blog.image)}
                    alt={blog.title}
                    width={1600}
                    height={800}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      objectPosition: 'top center',
                    }}
                    className="cs_blog_banner_image_el"
                    priority
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 100vw, 1140px"
                  />
                </div>
              </div>
            </div>
          ) : null}

          <div className="row">
            <div className="col-lg-8">
              <div style={{ marginBottom: '24px', textAlign: 'left' }}>
                <Link
                  href="/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#df3655',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '16px',
                    transition: 'gap 0.3s ease',
                  }}
                >
                  <FaArrowLeft style={{ fontSize: '14px' }} />
                  Back to Home
                </Link>
              </div>

              <article className="cs_blog_detail_article" style={{ overflow: 'hidden' }}>
                <div
                  className="cs_blog_detail_content"
                  style={{ padding: '0 0 40px', textAlign: 'center' }}
                >
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '6px 16px',
                      backgroundColor: '#df3655',
                      color: '#fff',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: '600',
                      marginBottom: '20px',
                    }}
                  >
                    {blog.category || 'IVF Doctor in India'}
                  </div>

                  <AccentHeading
                    level={1}
                    className="cs_ivf_content_heading cs_blog_title"
                    style={{ marginBottom: '20px' }}
                  >
                    {blog.title}
                  </AccentHeading>

                  <div
                    style={{
                      marginBottom: '30px',
                      paddingBottom: '10px',
                      borderBottom: '1px solid #e8e8e8',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        marginBottom: '10px',
                        justifyContent: 'center',
                      }}
                    >
                      {blog.date && (
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#666',
                            fontSize: '14px',
                          }}
                        >
                          <FaCalendarAlt style={{ fontSize: '14px', color: '#df3655' }} />
                          {blog.date}
                        </span>
                      )}
                      {blog.readTime && (
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#666',
                            fontSize: '14px',
                          }}
                        >
                          <FaClock style={{ fontSize: '14px', color: '#df3655' }} />
                          {blog.readTime}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className="blog-content cs_blog_body"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.8',
                      color: '#333',
                      marginBottom: faqs.length > 0 ? '10px' : '30px',
                      textAlign: 'left',
                      maxWidth: '100%',
                    }}
                    dangerouslySetInnerHTML={{ __html: accentHeadingsInHtml(beforeHtml) }}
                  />

                  {faqs.length > 0 && (
                    <div
                      className="cs_blog_faq_section"
                      style={{ marginTop: '35px', marginBottom: '35px' }}
                    >
                      <h3
                        className="cs_ivf_content_heading cs_blog_body_heading"
                        style={{ textAlign: 'left', marginBottom: '20px' }}
                      >
                        <span className="cs_heading_accent_start">Frequently Asked</span>{' '}
                        <span>Questions</span>
                      </h3>
                      <BlogFaqAccordion faqs={faqs} />
                    </div>
                  )}

                  {afterHtml && (
                    <div
                      className="blog-content cs_blog_body"
                      style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '30px',
                        textAlign: 'left',
                        maxWidth: '100%',
                      }}
                      dangerouslySetInnerHTML={{ __html: accentHeadingsInHtml(afterHtml) }}
                    />
                  )}

                  <style>
                    {`
                      .cs_blog_body a {
                        color: #072f92;
                        font-weight: 700;
                      }
                      .cs_blog_body a:hover {
                        color: #df3655;
                      }
                    `}
                  </style>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <div className="cs_sidebar_sticky_wrapper">
                <div className="cs_appointment_card" style={{ marginBottom: '30px' }}>
                  <AccentHeading level={3} className="cs_sidebar_heading">
                    Need Help?
                  </AccentHeading>
                  <p>
                    Our fertility specialists are here to help you on your journey to parenthood.
                  </p>
                  <Link
                    href="/contact/book-appointment"
                    className="cs_btn cs_style_1 cs_appointment_btn"
                  >
                    Book Appointment
                  </Link>
                </div>

                {relatedBlogs.length > 0 && (
                  <div
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: '12px',
                      padding: '30px',
                      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <AccentHeading
                      level={3}
                      className="cs_sidebar_heading"
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        marginBottom: '20px',
                        paddingBottom: '15px',
                        borderBottom: '2px solid #df3655',
                      }}
                    >
                      Top IVF Doctor Guides
                    </AccentHeading>
                    <div className="cs_related_blog_list">
                      {relatedBlogs.map((item) => (
                        <Link
                          key={item.id || item.slug}
                          href={`/doctor/${item.slug}/`}
                          className="cs_related_blog_item"
                        >
                          {item.image ? (
                            <div className="cs_related_blog_banner">
                              <Image
                                src={getAssetPath(item.image)}
                                alt={item.title}
                                width={640}
                                height={320}
                                className="cs_related_blog_banner_el"
                                sizes="(max-width: 991px) 100vw, 360px"
                              />
                            </div>
                          ) : null}
                          <div className="cs_related_blog_copy">
                            <h4>{item.title}</h4>
                            {item.date && <p>{item.date}</p>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DoctorBlogDetailPage;
