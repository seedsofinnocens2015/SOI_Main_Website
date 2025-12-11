"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { FaCalendarAlt, FaClock, FaUser, FaArrowRight } from 'react-icons/fa';

const headingData = {
  title: 'IVF Process Blogs',
};

const blogs = [
  {
    title: 'Complete Guide to the IVF Process',
    excerpt: 'A step-by-step explanation of the entire IVF journey from initial consultation to pregnancy test, including what to expect at each stage.',
    image: '/assets/img/recent_post2.jpg',
    date: 'December 12, 2024',
    author: 'Dr. Gauri Agarwal',
    category: 'IVF Process',
    readTime: '10 min read',
    link: '#',
  },
  {
    title: 'Understanding Ovarian Stimulation in IVF',
    excerpt: 'Learn about fertility medications, how they work, monitoring protocols, and what to expect during the stimulation phase.',
    image: '/assets/img/recent_post2.jpg',
    date: 'December 8, 2024',
    author: 'Dr. Aditi Bhatnagar',
    category: 'IVF Process',
    readTime: '8 min read',
    link: '#',
  },
  {
    title: 'Egg Retrieval: What to Expect',
    excerpt: 'Comprehensive guide to the egg retrieval procedure, preparation, recovery, and post-procedure care instructions.',
    image: '/assets/img/recent_post2.jpg',
    date: 'December 3, 2024',
    author: 'Dr. Gauri Agarwal',
    category: 'IVF Process',
    readTime: '7 min read',
    link: '#',
  },
  {
    title: 'Embryo Transfer: The Final Step',
    excerpt: 'Everything you need to know about embryo transfer procedure, preparation, what happens during transfer, and post-transfer care.',
    image: '/assets/img/recent_post2.jpg',
    date: 'November 25, 2024',
    author: 'Dr. Aditi Bhatnagar',
    category: 'IVF Process',
    readTime: '6 min read',
    link: '#',
  },
  {
    title: 'IVF vs ICSI: Understanding the Difference',
    excerpt: 'Learn about the differences between traditional IVF and ICSI, when each is recommended, and success rates for both procedures.',
    image: '/assets/img/recent_post2.jpg',
    date: 'November 18, 2024',
    author: 'Dr. Gauri Agarwal',
    category: 'IVF Process',
    readTime: '9 min read',
    link: '#',
  },
  {
    title: 'The Two-Week Wait: Managing Expectations',
    excerpt: 'Tips for managing anxiety and expectations during the crucial two-week wait period after embryo transfer.',
    image: '/assets/img/recent_post2.jpg',
    date: 'November 12, 2024',
    author: 'Dr. Aditi Bhatnagar',
    category: 'IVF Process',
    readTime: '5 min read',
    link: '#',
  },
  // Hindi Blogs
  {
    title: 'आईवीएफ प्रक्रिया की पूरी गाइड',
    excerpt: 'प्रारंभिक परामर्श से लेकर गर्भावस्था परीक्षण तक पूरे आईवीएफ सफर की चरण-दर-चरण व्याख्या, प्रत्येक चरण में क्या उम्मीद करें।',
    image: '/assets/img/recent_post2.jpg',
    date: '12 दिसंबर, 2024',
    author: 'Dr. Gauri Agarwal',
    category: 'आईवीएफ प्रक्रिया',
    readTime: '10 मिनट पढ़ें',
    link: '#',
  },
  {
    title: 'आईवीएफ में अंडाशय उत्तेजना को समझना',
    excerpt: 'प्रजनन दवाओं के बारे में जानें, वे कैसे काम करती हैं, निगरानी प्रोटोकॉल और उत्तेजना चरण के दौरान क्या उम्मीद करें।',
    image: '/assets/img/recent_post2.jpg',
    date: '8 दिसंबर, 2024',
    author: 'Dr. Aditi Bhatnagar',
    category: 'आईवीएफ प्रक्रिया',
    readTime: '8 मिनट पढ़ें',
    link: '#',
  },
  {
    title: 'अंडे की पुनर्प्राप्ति: क्या उम्मीद करें',
    excerpt: 'अंडे की पुनर्प्राप्ति प्रक्रिया, तैयारी, रिकवरी और प्रक्रिया के बाद की देखभाल निर्देशों की व्यापक गाइड।',
    image: '/assets/img/recent_post2.jpg',
    date: '3 दिसंबर, 2024',
    author: 'Dr. Gauri Agarwal',
    category: 'आईवीएफ प्रक्रिया',
    readTime: '7 मिनट पढ़ें',
    link: '#',
  },
  {
    title: 'भ्रूण स्थानांतरण: अंतिम कदम',
    excerpt: 'भ्रूण स्थानांतरण प्रक्रिया, तैयारी, स्थानांतरण के दौरान क्या होता है, और स्थानांतरण के बाद की देखभाल के बारे में सब कुछ।',
    image: '/assets/img/recent_post2.jpg',
    date: '25 नवंबर, 2024',
    author: 'Dr. Aditi Bhatnagar',
    category: 'आईवीएफ प्रक्रिया',
    readTime: '6 मिनट पढ़ें',
    link: '#',
  },
];

const Page = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('ivf-process');

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

  // Filter blogs based on language
  const filteredBlogs = useMemo(() => {
    if (selectedLanguage === 'all') {
      return blogs;
    } else if (selectedLanguage === 'hindi') {
      return blogs.filter(blog => 
        blog.category === 'आईवीएफ प्रक्रिया' || 
        blog.readTime.includes('मिनट') ||
        blog.date.includes('दिसंबर') || 
        blog.date.includes('नवंबर') ||
        blog.title.match(/[\u0900-\u097F]/)
      );
    } else if (selectedLanguage === 'english') {
      return blogs.filter(blog => 
        blog.category === 'IVF Process' && 
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
                    IVF Process Blogs
                  </h2>
                  <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8' }}>
                    Detailed guides and articles about the IVF treatment process, procedures, and what to expect at each stage of your journey.
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
