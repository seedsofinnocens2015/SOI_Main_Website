"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useParams } from 'next/navigation';
import { FaCalendarAlt, FaClock, FaUser, FaArrowLeft } from 'react-icons/fa';
import blogsData from '@/app/data/blogs.json';

const headingData = {
  title: 'Blog Details',
};

const BlogDetailPage = () => {
  const params = useParams();
  const slug = params?.slug;

  // Find the blog by slug
  const blog = blogsData.blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div>
        <Section
          className={'cs_page_heading cs_bg_filed cs_center'}
          backgroundImage="/assets/img/Top-Header.jpg"
        >
          <PageHeading data={{ title: 'Blog Not Found' }} />
        </Section>
        <Section topSpaceLg="80" bottomSpaceLg="80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Blog Not Found</h2>
                <p>The blog you're looking for doesn't exist.</p>
                <Link href="/resources/blogs" style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  padding: '12px 24px',
                  backgroundColor: '#E45352',
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
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Blog Detail Section */}
      <Section topSpaceLg="80" bottomSpaceLg="80">
        <div className="container">
          <div className="row">
            {/* Back Button */}
            <div className="col-lg-12" style={{ marginBottom: '30px' }}>
              <Link 
                href={`/resources/blogs/${blog.category.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#E45352',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  transition: 'gap 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '12px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '8px';
                }}
              >
                <FaArrowLeft style={{ fontSize: '14px' }} />
                Back to {blog.category} Blogs
              </Link>
            </div>

            {/* Main Content */}
            <div className="col-lg-8">
              <article style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                marginBottom: '40px'
              }}>
                {/* Blog Image */}
                <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>

                {/* Blog Content */}
                <div style={{ padding: '40px' }}>
                  {/* Category Badge */}
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    backgroundColor: '#E45352',
                    color: '#fff',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    marginBottom: '20px'
                  }}>
                    {blog.category}
                  </div>

                  {/* Blog Title */}
                  <h1 style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: '#0A2A43',
                    marginBottom: '20px',
                    lineHeight: '1.3'
                  }}>
                    {blog.title}
                  </h1>

                  {/* Meta Information */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    marginBottom: '30px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid #e8e8e8'
                  }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#666',
                      fontSize: '14px'
                    }}>
                      <FaCalendarAlt style={{ fontSize: '14px', color: '#E45352' }} />
                      {blog.date}
                    </span>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#666',
                      fontSize: '14px'
                    }}>
                      <FaUser style={{ fontSize: '14px', color: '#E45352' }} />
                      {blog.author}
                    </span>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#666',
                      fontSize: '14px'
                    }}>
                      <FaClock style={{ fontSize: '14px', color: '#E45352' }} />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Blog Content */}
                  <div 
                    className="blog-content"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.8',
                      color: '#333',
                      marginBottom: '30px'
                    }}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div style={{ position: 'sticky', top: '20px' }}>
                {/* Related Blogs */}
                {relatedBlogs.length > 0 && (
                  <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    marginBottom: '30px'
                  }}>
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: '700',
                      color: '#0A2A43',
                      marginBottom: '20px',
                      paddingBottom: '15px',
                      borderBottom: '2px solid #E45352'
                    }}>
                      Related Blogs
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {relatedBlogs.map((relatedBlog) => (
                        <Link
                          key={relatedBlog.id}
                          href={`/resources/blogs/${relatedBlog.slug}`}
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
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                            e.currentTarget.style.borderColor = '#E45352';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.borderColor = 'transparent';
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
                                src={relatedBlog.image}
                                alt={relatedBlog.title}
                                fill
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                            <div style={{ flex: 1 }}>
                              <h4 style={{
                                fontSize: '15px',
                                fontWeight: '600',
                                color: '#0A2A43',
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
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Section */}
                <div style={{
                  backgroundColor: '#E45352',
                  borderRadius: '12px',
                  padding: '30px',
                  color: '#fff',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    marginBottom: '15px'
                  }}>
                    Need Help?
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    marginBottom: '20px',
                    lineHeight: '1.6',
                    opacity: 0.9
                  }}>
                    Our fertility specialists are here to help you on your journey to parenthood.
                  </p>
                  <Link
                    href="/contact/book-appointment"
                    style={{
                      display: 'inline-block',
                      padding: '12px 24px',
                      backgroundColor: '#fff',
                      color: '#E45352',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontWeight: '600',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogDetailPage;
