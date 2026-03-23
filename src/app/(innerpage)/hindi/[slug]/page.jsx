import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaArrowLeft } from 'react-icons/fa';
import AccentHeading from '@/app/Components/AccentHeading';
import blogsData from '@/app/data/blogs.json';
import { getAssetPath } from '@/app/utils/assetPath';
import { accentHeadingsInHtml } from '@/app/utils/accentHeadingsInHtml';

// Generate static params for static export
export async function generateStaticParams() {
  // Filter only Hindi blogs (those with Hindi category names or Hindi content)
  const hindiBlogs = blogsData.blogs.filter(blog =>
    blog.category === 'प्रजनन क्षमता' ||
    blog.title.match(/[\u0900-\u097F]/) ||
    blog.content.match(/[\u0900-\u097F]/)
  );

  return hindiBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Map category names to their route slugs (including Hindi categories)
const getCategoryRoute = (category) => {
  const categoryRouteMap = {
    'Treatment Guides': 'treatment-guides',
    'Women\'s Health': 'womens-health',
    'Men\'s Health': 'mens-health',
    'Fertility': 'fertility',
    'प्रजनन क्षमता': 'fertility', // Hindi for Fertility
    'IVF Process': 'ivf-process',
    'आईवीएफ प्रक्रिया': 'ivf-process', // Hindi for IVF Process
    'Pregnancy': 'pregnancy',
    'Success Stories': 'success-stories',
    'Doctor Insights': 'doctor-insights',
    'News & Press': 'news-press',
  };

  return categoryRouteMap[category] || category.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
};

const BlogDetailPage = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  // Find the blog by slug
  const blog = blogsData.blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div>
        <Section
          className={'cs_page_heading cs_bg_filed cs_center'}
          backgroundImage="/assets/img/Top-Header.png"
        >
          <PageHeading data={{ title: 'Blog Not Found' }} />
        </Section>
        <Section topSpaceLg="80" bottomSpaceLg="80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Blog Not Found</h2>
                <p>The blog you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/resources/blogs" style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  padding: '12px 24px',
                  backgroundColor: '#df3655',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontWeight: '600'
                }}>
                  Back to Blogs
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }

  // Get related blogs from the same category
  const relatedBlogs = blogsData.blogs
    .filter(b => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3);

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.png"
      >
        <PageHeading data={{ title: blog.title }} />
      </Section>

      {/* Blog Detail Section */}
      <Section topSpaceLg="80" bottomSpaceLg="80">
        <div className="container">
          <div className="row">
            {/* Back Button */}
            <div className="col-lg-12" style={{ marginBottom: '30px', textAlign: 'left' }}>
              <Link
                href={`/blogs/${getCategoryRoute(blog.category)}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'left',
                  gap: '8px',
                  color: '#df3655',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  transition: 'gap 0.3s ease'
                }}
              >
                <FaArrowLeft style={{ fontSize: '14px' }} />
                Back to {blog.category} Blogs
              </Link>
            </div>

            {/* Main Content - title & content centered like doctor page */}
            <div className="col-lg-8">
              <article className="cs_blog_detail_article" style={{
                overflow: 'hidden',
              }}>
                {/* Blog Image */}
                <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
                  <Image
                    src={getAssetPath(blog.image)}
                    alt={blog.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>

                {/* Blog Content - centered */}
                <div className="cs_blog_detail_content" style={{ padding: '40px', textAlign: 'center' }}>
                  {/* Category Badge */}
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    backgroundColor: '#df3655',
                    color: '#fff',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    marginBottom: '20px'
                  }}>
                    {blog.category}
                  </div>

                  {/* Blog Title - half #df3655, half black, centered (same as doctor page) */}
                  <AccentHeading level={2} className="cs_ivf_content_heading cs_blog_title" style={{ marginBottom: '20px' }}>
                    {blog.title}
                  </AccentHeading>

                  {/* Meta Information - centered */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    marginBottom: '30px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid #e8e8e8',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#666',
                      fontSize: '14px'
                    }}>
                      <FaCalendarAlt style={{ fontSize: '14px', color: '#df3655' }} />
                      {blog.date}
                    </span>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#666',
                      fontSize: '14px'
                    }}>
                      <FaUser style={{ fontSize: '14px', color: '#df3655' }} />
                      {blog.author}
                    </span>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#666',
                      fontSize: '14px'
                    }}>
                      <FaClock style={{ fontSize: '14px', color: '#df3655' }} />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Blog Content - centered */}
                  <div
                    className="blog-content cs_blog_body"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.8',
                      color: '#333',
                      marginBottom: '30px',
                      textAlign: 'center',
                      maxWidth: '100%'
                    }}
                    dangerouslySetInnerHTML={{ __html: accentHeadingsInHtml(blog.content) }}
                  />
                </div>
              </article>
            </div>

            {/* Sidebar - same structure as doctor page */}
            <div className="col-lg-4">
              <div className="cs_sidebar_sticky_wrapper">
                {/* Need Help? Card - same as doctor page Book Appointment card */}
                <div className="cs_appointment_card" style={{ marginBottom: '30px' }}>
                  <AccentHeading level={3} className="cs_sidebar_heading">Need Help?</AccentHeading>
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

                {/* Related Blogs */}
                {relatedBlogs.length > 0 && (
                  <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  }}>
                    <AccentHeading level={3} className="cs_sidebar_heading" style={{
                      fontSize: '22px',
                      fontWeight: '700',
                      marginBottom: '20px',
                      paddingBottom: '15px',
                      borderBottom: '2px solid #df3655'
                    }}>
                      Related Blogs
                    </AccentHeading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {relatedBlogs.map((relatedBlog) => {
                        // Determine if related blog is Hindi or English
                        const isHindi = relatedBlog.category === 'प्रजनन क्षमता' ||
                          relatedBlog.title.match(/[\u0900-\u097F]/) ||
                          relatedBlog.content.match(/[\u0900-\u097F]/);
                        const blogRoute = isHindi ? `/hindi/${relatedBlog.slug}` : `/english/${relatedBlog.slug}`;

                        return (
                          <Link
                            key={relatedBlog.id}
                            href={blogRoute}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            <div style={{
                              display: 'flex',
                              gap: '15px',
                              padding: '15px',
                              borderRadius: '8px',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              border: '1px solid transparent'
                            }}
                            >
                              <div style={{
                                position: 'relative',
                                width: '100px',
                                height: '80px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                flexShrink: 0
                              }}>
                                <Image
                                  src={getAssetPath(relatedBlog.image)}
                                  alt={relatedBlog.title}
                                  fill
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                              <div style={{ flex: 1 }}>
                                <h4 style={{
                                  fontSize: '15px',
                                  fontWeight: '600',
                                  color: '#000000',
                                  marginBottom: '8px',
                                  lineHeight: '1.4',
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden'
                                }}>
                                  {relatedBlog.title}
                                </h4>
                                <p style={{
                                  fontSize: '12px',
                                  color: '#999',
                                  margin: 0
                                }}>
                                  {relatedBlog.date}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
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

export default BlogDetailPage;

