"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { FaCalendarAlt, FaClock, FaTag, FaArrowRight } from 'react-icons/fa';

const headingData = {
  title: 'News & Press',
};

const news = [
  {
    title: 'Seeds of Innocens Opens New Center in Mumbai',
    excerpt: 'We are excited to announce the opening of our new state-of-the-art IVF center in Mumbai. The center is equipped with the latest technology and staffed by experienced fertility specialists to serve patients in the region.',
    image: '/assets/img/recent_post2.jpg',
    date: 'December 2024',
    category: 'Press Release',
    readTime: '3 min read',
    link: '#',
    type: 'Press Release',
  },
  {
    title: 'Best IVF Center Award 2024',
    excerpt: 'Seeds of Innocens has been recognized as the Best IVF Center in India for 2024. This award reflects our commitment to excellence in fertility care and our high success rates.',
    image: '/assets/img/recent_post2.jpg',
    date: 'November 2024',
    category: 'Award',
    readTime: '4 min read',
    link: '#',
    type: 'Award',
  },
  {
    title: 'New PGT Technology Implementation',
    excerpt: 'We have successfully implemented the latest Preimplantation Genetic Testing (PGT) technology, improving our success rates and helping more couples achieve healthy pregnancies.',
    image: '/assets/img/recent_post2.jpg',
    date: 'October 2024',
    category: 'Research',
    readTime: '5 min read',
    link: '#',
    type: 'Research',
  },
  {
    title: 'Fertility Awareness Month Campaign',
    excerpt: 'Seeds of Innocens launched a comprehensive fertility awareness campaign, offering free consultations and educational seminars to help couples understand their fertility options.',
    image: '/assets/img/recent_post2.jpg',
    date: 'September 2024',
    category: 'Event',
    readTime: '4 min read',
    link: '#',
    type: 'Event',
  },
  {
    title: 'International Center Expansion Announcement',
    excerpt: 'Seeds of Innocens announces the expansion of international services with new partnerships in Africa and Southeast Asia, bringing world-class fertility care to more regions.',
    image: '/assets/img/recent_post2.jpg',
    date: 'August 2024',
    category: 'Announcement',
    readTime: '5 min read',
    link: '#',
    type: 'Announcement',
  },
  {
    title: 'Record Success Rates Achieved in 2024',
    excerpt: 'Seeds of Innocens celebrates record-breaking success rates across all treatment modalities, reaffirming our position as a leader in fertility care.',
    image: '/assets/img/recent_post2.jpg',
    date: 'July 2024',
    category: 'Achievement',
    readTime: '3 min read',
    link: '#',
    type: 'Achievement',
  },
  // Hindi Blogs
  {
    title: 'Seeds of Innocens मुंबई में नया केंद्र खोलता है',
    excerpt: 'हम मुंबई में अपने नए अत्याधुनिक आईवीएफ केंद्र के उद्घाटन की घोषणा करते हुए खुशी व्यक्त करते हैं। केंद्र नवीनतम प्रौद्योगिकी से सुसज्जित है और क्षेत्र में रोगियों की सेवा करने के लिए अनुभवी प्रजनन विशेषज्ञों द्वारा संचालित है।',
    image: '/assets/img/recent_post2.jpg',
    date: 'दिसंबर 2024',
    category: 'प्रेस विज्ञप्ति',
    readTime: '3 मिनट पढ़ें',
    link: '#',
    type: 'प्रेस विज्ञप्ति',
  },
  {
    title: '2024 का सर्वश्रेष्ठ आईवीएफ केंद्र पुरस्कार',
    excerpt: 'Seeds of Innocens को 2024 में भारत का सर्वश्रेष्ठ आईवीएफ केंद्र के रूप में मान्यता दी गई है। यह पुरस्कार प्रजनन देखभाल में उत्कृष्टता के लिए हमारी प्रतिबद्धता और उच्च सफलता दर को दर्शाता है।',
    image: '/assets/img/recent_post2.jpg',
    date: 'नवंबर 2024',
    category: 'पुरस्कार',
    readTime: '4 मिनट पढ़ें',
    link: '#',
    type: 'पुरस्कार',
  },
  {
    title: 'नई पीजीटी प्रौद्योगिकी कार्यान्वयन',
    excerpt: 'हमने सफलतापूर्वक नवीनतम प्रीइम्प्लांटेशन जेनेटिक टेस्टिंग (पीजीटी) प्रौद्योगिकी को लागू किया है, जिससे हमारी सफलता दर में सुधार हुआ है और अधिक जोड़ों को स्वस्थ गर्भावस्था प्राप्त करने में मदद मिल रही है।',
    image: '/assets/img/recent_post2.jpg',
    date: 'अक्टूबर 2024',
    category: 'अनुसंधान',
    readTime: '5 मिनट पढ़ें',
    link: '#',
    type: 'अनुसंधान',
  },
  {
    title: 'प्रजनन जागरूकता माह अभियान',
    excerpt: 'Seeds of Innocens ने एक व्यापक प्रजनन जागरूकता अभियान शुरू किया, जोड़ों को उनके प्रजनन विकल्पों को समझने में मदद करने के लिए निःशुल्क परामर्श और शैक्षिक सेमिनार प्रदान कर रहा है।',
    image: '/assets/img/recent_post2.jpg',
    date: 'सितंबर 2024',
    category: 'कार्यक्रम',
    readTime: '4 मिनट पढ़ें',
    link: '#',
    type: 'कार्यक्रम',
  },
];

const page = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('news-press');

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
      return news;
    } else if (selectedLanguage === 'hindi') {
      return news.filter(item => 
        item.category === 'प्रेस विज्ञप्ति' || 
        item.category === 'पुरस्कार' ||
        item.category === 'अनुसंधान' ||
        item.category === 'कार्यक्रम' ||
        item.readTime.includes('मिनट') ||
        item.date.includes('दिसंबर') || 
        item.date.includes('नवंबर') ||
        item.title.match(/[\u0900-\u097F]/)
      );
    } else if (selectedLanguage === 'english') {
      return news.filter(item => 
        (item.category === 'Press Release' || 
         item.category === 'Award' ||
         item.category === 'Research' ||
         item.category === 'Event' ||
         item.category === 'Announcement' ||
         item.category === 'Achievement') && 
        !item.readTime.includes('मिनट') &&
        !item.date.includes('दिसंबर') && 
        !item.date.includes('नवंबर') &&
        !item.title.match(/[\u0900-\u097F]/)
      );
    }
    return news;
  }, [selectedLanguage, news]);

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
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
                    Latest News & Press Releases
                  </h2>
                  <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8' }}>
                    Stay updated with the latest news, achievements, and press releases from Seeds of Innocens. We share our milestones, new center openings, awards, and important announcements.
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
                      <option value="mens-health">Men's Health</option>
                      <option value="womens-health">Women's Health</option>
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

          {/* News Grid */}
          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {filteredBlogs.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={item.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                        src={item.image} 
                        alt={item.title} 
                        width={400} 
                        height={250}
                        className="w-100"
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
                        {item.category}
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
                          {item.date}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <FaClock style={{ fontSize: '12px' }} />
                          {item.readTime}
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
                        {item.title}
                      </h3>
                      <p className="cs_blog_subtitle" style={{ 
                        lineHeight: '1.8', 
                        color: '#666', 
                        marginBottom: '20px',
                        fontSize: '15px',
                        flex: 1
                      }}>
                        {item.excerpt}
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
                          <FaTag style={{ fontSize: '12px' }} />
                          {item.type}
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

          {/* Media Contact Section */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div style={{
                padding: '40px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid #e8e8e8'
              }}>
                <h3 className="cs_ivf_content_heading" style={{ marginBottom: '15px', fontSize: '24px' }}>
                  Media Inquiries
                </h3>
                <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
                  For media inquiries, press releases, or interview requests, please contact our media relations team.
                </p>
                <p style={{ fontSize: '16px', color: '#333', fontWeight: '600' }}>
                  <a href="mailto:info@seedsofinnocence.com" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>
                    info@seedsofinnocence.com
                  </a>
                </p>
              </div>
            </div>
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

export default page;
