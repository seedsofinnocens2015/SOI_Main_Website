"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { FaCalendarAlt, FaClock, FaUser, FaArrowRight } from 'react-icons/fa';
import blogsData from '@/app/data/blogs.json';

const headingData = {
  title: 'Men\'s Health Blogs',
};

// Get blogs from JSON and filter by category
const jsonBlogs = blogsData.blogs.filter(blog => 
  blog.category === 'Men\'s Health' || blog.category === 'पुरुष स्वास्थ्य'
);

// Use blogs from JSON, fallback to empty array
const blogs = jsonBlogs.length > 0 ? jsonBlogs.map(blog => ({
  title: blog.title,
  excerpt: blog.excerpt,
  image: blog.image,
  date: blog.date,
  author: blog.author,
  category: blog.category,
  readTime: blog.readTime,
  link: `/english/${blog.slug}/`,
})) : [];

const Page = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('mens-health');

  const categoryRoutes = {
    'fertility': '/resources/blogs/fertility',
    'ivf-process': '/resources/blogs/ivf-process',
    'pregnancy': '/resources/blogs/pregnancy',
    'mens-health': '/resources/blogs/mens-health',
    'womens-health': '/resources/blogs/womens-health',
    'treatment-guides': '/resources/blogs/treatment-guides',
    'success-stories': '/resources/blogs/success-stories',
    'doctor-insights': '/resources/blogs/doctor-insights',
    'news-press': '/resources/blogs/news-press',
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (categoryRoutes[category]) {
      router.push(categoryRoutes[category]);
    }
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const filteredBlogs = useMemo(() => {
    if (selectedLanguage === 'all') {
      return blogs;
    } else if (selectedLanguage === 'hindi') {
      return blogs.filter(blog => 
        blog.category === 'पुरुष स्वास्थ्य' || 
        blog.readTime.includes('मिनट') ||
        blog.date.includes('दिसंबर') || 
        blog.date.includes('नवंबर') ||
        blog.title.match(/[\u0900-\u097F]/)
      );
    } else if (selectedLanguage === 'english') {
      return blogs.filter(blog => 
        blog.category === 'Men\'s Health' && 
        !blog.readTime.includes('मिनट') &&
        !blog.date.includes('दिसंबर') && 
        !blog.date.includes('नवंबर') &&
        !blog.title.match(/[\u0900-\u097F]/)
      );
    }
    return blogs;
  }, [selectedLanguage]);

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <h2 className="cs_ivf_content_heading" style={{ marginBottom: '20px' }}>
                    Men&apos;s Health Blogs
                  </h2>
                  <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8' }}>
                    Articles focusing on male fertility, reproductive health, male infertility causes and treatments, and overall men&apos;s wellness.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                  <div style={{ minWidth: '200px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#333' }}>
                      Select Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      style={{
                        width: '100%',
                        padding: '10px 15px',
                        border: '1px solid #e8e8e8',
                        borderRadius: '8px',
                        fontSize: '15px',
                        backgroundColor: '#fff',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                      onBlur={(e) => e.target.style.borderColor = '#e8e8e8'}
                    >
                      <option value="fertility">Fertility</option>
                      <option value="ivf-process">IVF Process</option>
                      <option value="pregnancy">Pregnancy</option>
                      <option value="mens-health">Men&apos;s Health</option>
                      <option value="womens-health">Women&apos;s Health</option>
                      <option value="treatment-guides">Treatment Guides</option>
                      <option value="success-stories">Success Stories</option>
                      <option value="doctor-insights">Doctor Insights</option>
                      <option value="news-press">News & Press</option>
                    </select>
                  </div>
                  <div style={{ minWidth: '150px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#333' }}>
                      Language
                    </label>
                    <select
                      value={selectedLanguage}
                      onChange={handleLanguageChange}
                      style={{
                        width: '100%',
                        padding: '10px 15px',
                        border: '1px solid #e8e8e8',
                        borderRadius: '8px',
                        fontSize: '15px',
                        backgroundColor: '#fff',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                      onBlur={(e) => e.target.style.borderColor = '#e8e8e8'}
                    >
                      <option value="all">All</option>
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Blog Grid */}
          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {filteredBlogs.map((blog, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={blog.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="cs_blog_card cs_style_1" style={{ 
                    height: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e8e8e8',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0px 12px 30px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = '#e8e8e8';
                  }}
                  >
                    <div className="cs_blog_img" style={{ 
                      overflow: 'hidden', 
                      position: 'relative',
                      height: '250px',
                      width: '100%'
                    }}>
                      <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        width={400} 
                        height={250}
                        className="w-100"
                        loading="eager"
                        style={{ 
                          objectFit: 'cover', 
                          transition: 'transform 0.5s ease',
                          width: '100%',
                          height: '100%'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        backgroundColor: 'var(--accent-color)',
                        color: 'white',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {blog.category}
                      </div>
                    </div>
                    <div className="cs_blog_info" style={{ 
                      padding: '30px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <div className="cs_blog_meta mb-3" style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        fontSize: '13px',
                        color: '#999',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <FaCalendarAlt style={{ fontSize: '12px' }} />
                          {blog.date}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <FaClock style={{ fontSize: '12px' }} />
                          {blog.readTime}
                        </span>
                      </div>
                      <h3 className="cs_blog_title" style={{ 
                        fontSize: '22px', 
                        marginBottom: '15px', 
                        color: '#1a1a1a',
                        fontWeight: '600',
                        lineHeight: '1.4',
                        minHeight: '66px'
                      }}>
                        {blog.title}
                      </h3>
                      <p className="cs_blog_subtitle" style={{ 
                        lineHeight: '1.8', 
                        color: '#666', 
                        marginBottom: '20px',
                        fontSize: '15px',
                        flex: 1
                      }}>
                        {blog.excerpt}
                      </p>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        paddingTop: '20px',
                        borderTop: '1px solid #f0f0f0',
                        marginTop: 'auto'
                      }}>
                        <span style={{ 
                          fontSize: '14px', 
                          color: '#999',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <FaUser style={{ fontSize: '12px' }} />
                          {blog.author}
                        </span>
                        <span style={{ 
                          color: 'var(--accent-color)', 
                          fontWeight: '600',
                          fontSize: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'gap 0.3s ease'
                        }}
                        className="read-more-link"
                        >
                          Read More
                          <FaArrowRight style={{ fontSize: '12px', transition: 'transform 0.3s ease' }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Pagination */}
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_pagination text-center">
                <ul className="cs_mp_0" style={{ 
                  display: 'inline-flex', 
                  listStyle: 'none', 
                  gap: '8px',
                  alignItems: 'center'
                }}>
                  <li>
                    <a href="#" style={{ 
                      padding: '12px 18px', 
                      border: '1px solid #e8e8e8', 
                      borderRadius: '8px',
                      color: '#333',
                      textDecoration: 'none',
                      backgroundColor: '#fff',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = 'var(--accent-color)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#fff';
                      e.currentTarget.style.color = '#333';
                      e.currentTarget.style.borderColor = '#e8e8e8';
                    }}
                    >Previous</a>
                  </li>
                  <li>
                    <a href="#" style={{ 
                      padding: '12px 18px', 
                      backgroundColor: 'var(--accent-color)', 
                      color: 'white',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      border: '1px solid var(--accent-color)',
                      display: 'inline-block'
                    }}>1</a>
                  </li>
                  <li>
                    <a href="#" style={{ 
                      padding: '12px 18px', 
                      border: '1px solid #e8e8e8', 
                      borderRadius: '8px',
                      color: '#333',
                      textDecoration: 'none',
                      backgroundColor: '#fff',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = 'var(--accent-color)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#fff';
                      e.currentTarget.style.color = '#333';
                      e.currentTarget.style.borderColor = '#e8e8e8';
                    }}
                    >2</a>
                  </li>
                  <li>
                    <a href="#" style={{ 
                      padding: '12px 18px', 
                      border: '1px solid #e8e8e8', 
                      borderRadius: '8px',
                      color: '#333',
                      textDecoration: 'none',
                      backgroundColor: '#fff',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = 'var(--accent-color)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#fff';
                      e.currentTarget.style.color = '#333';
                      e.currentTarget.style.borderColor = '#e8e8e8';
                    }}
                    >Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <style jsx>{`
        .read-more-link:hover svg {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
};

export default Page;
