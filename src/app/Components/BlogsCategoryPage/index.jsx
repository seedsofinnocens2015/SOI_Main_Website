"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import AccentHeading from '@/app/Components/AccentHeading';
import { FaArrowRight, FaCalendarAlt, FaClock, FaTag, FaUser } from 'react-icons/fa';
import { getAssetPathClient } from '@/app/utils/assetPath';

const categoryRoutes = {
  fertility: '/blogs/fertility',
  'ivf-process': '/blogs/ivf-process',
  pregnancy: '/blogs/pregnancy',
  'mens-health': '/blogs/mens-health',
  'womens-health': '/blogs/womens-health',
  'treatment-guides': '/blogs/treatment-guides',
  'success-stories': '/blogs/success-stories',
  'doctor-insights': '/blogs/doctor-insights',
  'news-press': '/blogs/news-press',
};

const categoryFilters = {
  fertility: ['Fertility', 'Lifestyle & Fertility'],
  'ivf-process': ['IVF Process'],
  pregnancy: ['Pregnancy'],
  'mens-health': ["Men's Health"],
  'womens-health': ["Women's Health"],
  'treatment-guides': ['Treatment Guides', 'Treatment Guide'],
  'doctor-insights': ['Doctor Insights', 'Doctor Insight'],
  'news-press': ['News & Press'],
};

function isHindi(item) {
  return /[\u0900-\u097F]/.test(String(item?.title || '')) || /[\u0900-\u097F]/.test(String(item?.category || ''));
}

function getPaginationItems(totalPages, currentPage) {
  const pageNumbers = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
  const orderedPages = [...pageNumbers]
    .filter((pageNumber) => pageNumber >= 1 && pageNumber <= totalPages)
    .sort((a, b) => a - b);

  return orderedPages.flatMap((pageNumber, index) => {
    const previousPage = orderedPages[index - 1];
    return index > 0 && pageNumber - previousPage > 1
      ? [`ellipsis-${previousPage}-${pageNumber}`, pageNumber]
      : [pageNumber];
  });
}

export default function BlogsCategoryPage({
  pageTitle,
  sectionTitle,
  sectionDescription,
  selectedCategory,
  blogs = [],
  backgroundImage = '/assets/img/Top-Header.webp',
  showMediaInquiry = false,
  showAllCategories = false,
  enablePagination = false,
}) {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [currentCategory, setCurrentCategory] = useState(selectedCategory || 'all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs = useMemo(() => {
    const categoryFilteredBlogs = currentCategory === 'all'
      ? blogs
      : blogs.filter((blog) => categoryFilters[currentCategory]?.includes(blog.category));
    if (selectedLanguage === 'all') return categoryFilteredBlogs;
    if (selectedLanguage === 'hindi') return categoryFilteredBlogs.filter((blog) => isHindi(blog));
    return categoryFilteredBlogs.filter((blog) => !isHindi(blog));
  }, [blogs, currentCategory, selectedLanguage]);

  const blogsPerPage = 12;
  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
  const visibleBlogs = enablePagination
    ? filteredBlogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage)
    : filteredBlogs;
  const paginationItems = getPaginationItems(totalPages, currentPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory, selectedLanguage]);

  return (
    <div>
      <Section className={'cs_page_heading cs_bg_filed cs_center'} backgroundImage={backgroundImage}>
        <PageHeading data={{ title: pageTitle }} />
      </Section>

      <Section topSpaceLg="50" topSpaceMd="60" bottomSpaceLg="50" bottomSpaceMd="60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-5" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <AccentHeading style={{ marginBottom: '20px' }}>{sectionTitle}</AccentHeading>
                  <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8' }}>{sectionDescription}</p>
                </div>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                  <div style={{ minWidth: '200px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#333' }}>Select Category</label>
                    <select
                      value={currentCategory}
                      onChange={(e) => {
                        const category = e.target.value;
                        setCurrentCategory(category);
                        if (!showAllCategories && categoryRoutes[category]) router.push(categoryRoutes[category]);
                      }}
                      style={{ width: '100%', padding: '10px 15px', border: '1px solid #e8e8e8', borderRadius: '8px', fontSize: '15px', backgroundColor: '#fff', cursor: 'pointer' }}
                    >
                      {showAllCategories && <option value="all">All Categories</option>}
                      <option value="fertility">Fertility</option>
                      <option value="ivf-process">IVF Process</option>
                      <option value="pregnancy">Pregnancy</option>
                      <option value="mens-health">Men&apos;s Health</option>
                      <option value="womens-health">Women&apos;s Health</option>
                      <option value="treatment-guides">Treatment Guides</option>
                      {/* <option value="success-stories">Success Stories</option> */}
                      <option value="doctor-insights">Doctor Insights</option>
                      {/* <option value="news-press">News & Press</option> */}
                    </select>
                  </div>
                  <div style={{ minWidth: '150px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#333' }}>Language</label>
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      style={{ width: '100%', padding: '10px 15px', border: '1px solid #e8e8e8', borderRadius: '8px', fontSize: '15px', backgroundColor: '#fff', cursor: 'pointer' }}
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

          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {visibleBlogs.map((blog, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={blog.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="cs_blog_card cs_style_1" style={{ height: '100%', backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e8e8e8', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column' }}>
                    {blog.image ? (
                      <div className="cs_blog_img" style={{ overflow: 'hidden', position: 'relative', height: '250px', width: '100%' }}>
                        <Image src={getAssetPathClient(blog.image)} alt={blog.title} width={400} height={250} className="w-100" loading="lazy" style={{ objectFit: 'contain' }} />
                      </div>
                    ) : null}
                    <div className="cs_blog_info" style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div className="cs_blog_meta mb-3" style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '13px', color: '#999', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FaCalendarAlt style={{ fontSize: '12px' }} />{blog.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FaClock style={{ fontSize: '12px' }} />{blog.readTime}</span>
                      </div>
                      <h3 className="cs_blog_title" style={{ fontSize: '22px', marginBottom: '15px', color: '#1a1a1a', fontWeight: '600', lineHeight: '1.4', minHeight: '66px' }}>{blog.title}</h3>
                      <p className="cs_blog_subtitle" style={{ lineHeight: '1.8', color: '#666', marginBottom: '20px', fontSize: '15px', flex: 1 }}>{blog.excerpt}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid #f0f0f0', marginTop: 'auto' }}>
                        <span style={{ fontSize: '14px', color: '#999', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          {showMediaInquiry ? <FaTag style={{ fontSize: '12px' }} /> : <FaUser style={{ fontSize: '12px' }} />}
                          {showMediaInquiry ? (blog.type || blog.category) : blog.author}
                        </span>
                        <span style={{ color: 'var(--accent-color)', fontWeight: '600', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          Read More <FaArrowRight style={{ fontSize: '12px' }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {enablePagination && totalPages > 1 && (
            <nav aria-label="Blog pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '50px' }}>
              {currentPage > 1 && (
                <button type="button" onClick={() => setCurrentPage(currentPage - 1)} style={{ minWidth: '88px', height: '42px', padding: '0 17px', borderRadius: '21px', border: '1px solid #e8e8e8', color: '#555', backgroundColor: '#fff', fontWeight: '600' }}>Previous</button>
              )}
              {paginationItems.map((item) => (
                typeof item === 'string' ? (
                  <span key={item} aria-hidden="true" style={{ width: '28px', textAlign: 'center', color: '#999', letterSpacing: '2px' }}>•••</span>
                ) : (
                  <button key={item} type="button" onClick={() => setCurrentPage(item)} aria-current={item === currentPage ? 'page' : undefined} style={{ width: '42px', height: '42px', borderRadius: '50%', fontWeight: '600', border: item === currentPage ? '1px solid var(--accent-color)' : '1px solid #e8e8e8', backgroundColor: item === currentPage ? 'var(--accent-color)' : '#fff', color: item === currentPage ? '#fff' : '#555', boxShadow: item === currentPage ? '0 5px 12px rgba(223, 54, 85, 0.22)' : 'none' }}>{item}</button>
                )
              ))}
              {currentPage < totalPages && (
                <button type="button" onClick={() => setCurrentPage(currentPage + 1)} style={{ minWidth: '72px', height: '42px', padding: '0 17px', borderRadius: '21px', border: '1px solid #e8e8e8', color: '#555', backgroundColor: '#fff', fontWeight: '600' }}>Next</button>
              )}
            </nav>
          )}

          {showMediaInquiry && (
            <div className="row" style={{ marginTop: '50px' }}>
              <div className="col-lg-10 mx-auto">
                <div style={{ padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '12px', border: '1px solid #e8e8e8' }}>
                  <AccentHeading level={3} style={{ marginBottom: '15px', fontSize: '24px' }}>Media Inquiries</AccentHeading>
                  <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
                    For media inquiries, press releases, or interview requests, please contact our media relations team.
                  </p>
                  <p style={{ fontSize: '16px', color: '#333', fontWeight: '600' }}>
                    <a href="mailto:info@seedsofinnocence.com" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>info@seedsofinnocence.com</a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}

