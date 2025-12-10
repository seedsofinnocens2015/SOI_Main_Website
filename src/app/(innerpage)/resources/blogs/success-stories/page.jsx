"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { FaCalendarAlt, FaClock, FaUser, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const headingData = {
  title: 'Success Stories',
};

const stories = [
  {
    title: 'Priya & Rahul\'s Journey to Parenthood',
    excerpt: 'After 5 years of trying, we found hope at Seeds of Innocens. The personalized care and advanced IVF treatment helped us welcome our beautiful daughter. The entire team was supportive throughout our journey.',
    image: '/assets/img/recent_post2.jpg',
    date: 'December 2024',
    author: 'Priya & Rahul',
    category: 'IVF Success',
    readTime: '5 min read',
    link: '#',
    treatment: 'IVF Treatment',
  },
  {
    title: 'Anjali & Mohan\'s Miracle Twins',
    excerpt: 'We are forever grateful to Seeds of Innocens for making our dream come true. The ICSI treatment was successful on our first attempt, and now we have twin boys. The doctors\' expertise and care made all the difference.',
    image: '/assets/img/recent_post2.jpg',
    date: 'November 2024',
    author: 'Anjali & Mohan',
    category: 'ICSI Success',
    readTime: '6 min read',
    link: '#',
    treatment: 'ICSI Treatment',
  },
  {
    title: 'Sneha & Vikram\'s Joyful Journey',
    excerpt: 'The egg freezing and IVF process at Seeds of Innocens was smooth and stress-free. The team guided us through every step, and we couldn\'t be happier with our baby girl. Highly recommended!',
    image: '/assets/img/recent_post2.jpg',
    date: 'October 2024',
    author: 'Sneha & Vikram',
    category: 'Egg Freezing & IVF',
    readTime: '7 min read',
    link: '#',
    treatment: 'Egg Freezing & IVF',
  },
  {
    title: 'Neha & Rohit\'s Story of Hope',
    excerpt: 'After multiple failed attempts elsewhere, Seeds of Innocens gave us hope. Their personalized approach and advanced techniques helped us achieve our dream of becoming parents.',
    image: '/assets/img/recent_post2.jpg',
    date: 'September 2024',
    author: 'Neha & Rohit',
    category: 'IVF Success',
    readTime: '5 min read',
    link: '#',
    treatment: 'IVF Treatment',
  },
  {
    title: 'Riya & Arjun\'s Surrogacy Success',
    excerpt: 'Through the surrogacy program at Seeds of Innocens, we finally became parents. The entire process was handled with care, compassion, and professionalism. We are forever grateful.',
    image: '/assets/img/recent_post2.jpg',
    date: 'August 2024',
    author: 'Riya & Arjun',
    category: 'Surrogacy',
    readTime: '8 min read',
    link: '#',
    treatment: 'Surrogacy Program',
  },
  {
    title: 'Divya & Karan\'s First-Time Success',
    excerpt: 'We were nervous about IVF, but the team at Seeds of Innocens made us feel comfortable from day one. Their expertise and support led to our first successful cycle. Thank you!',
    image: '/assets/img/recent_post2.jpg',
    date: 'July 2024',
    author: 'Divya & Karan',
    category: 'IVF Success',
    readTime: '6 min read',
    link: '#',
    treatment: 'IVF Treatment',
  },
  // Hindi Blogs
  {
    title: 'प्रिया और राहुल की माता-पिता बनने की यात्रा',
    excerpt: '5 साल तक कोशिश करने के बाद, हमें Seeds of Innocens में आशा मिली। व्यक्तिगत देखभाल और उन्नत आईवीएफ उपचार ने हमारी सुंदर बेटी का स्वागत करने में मदद की। पूरी टीम हमारी यात्रा में सहायक रही।',
    image: '/assets/img/recent_post2.jpg',
    date: 'दिसंबर 2024',
    author: 'प्रिया और राहुल',
    category: 'आईवीएफ सफलता',
    readTime: '5 मिनट पढ़ें',
    link: '#',
    treatment: 'आईवीएफ उपचार',
  },
  {
    title: 'अंजलि और मोहन के जुड़वा बच्चों का चमत्कार',
    excerpt: 'हम Seeds of Innocens के हमेशा आभारी हैं कि उन्होंने हमारे सपने को सच कर दिया। आईसीएसआई उपचार हमारी पहली कोशिश में सफल रहा, और अब हमारे दो जुड़वा बेटे हैं। डॉक्टरों की विशेषज्ञता और देखभाल ने सभी अंतर पैदा किया।',
    image: '/assets/img/recent_post2.jpg',
    date: 'नवंबर 2024',
    author: 'अंजलि और मोहन',
    category: 'आईसीएसआई सफलता',
    readTime: '6 मिनट पढ़ें',
    link: '#',
    treatment: 'आईसीएसआई उपचार',
  },
  {
    title: 'स्नेहा और विक्रम की खुशी की यात्रा',
    excerpt: 'Seeds of Innocens में अंडा फ्रीजिंग और आईवीएफ प्रक्रिया सुचारू और तनाव-मुक्त थी। टीम ने हर कदम पर हमारा मार्गदर्शन किया, और हम अपनी बेटी से खुश नहीं हो सकते। अत्यधिक अनुशंसित!',
    image: '/assets/img/recent_post2.jpg',
    date: 'अक्टूबर 2024',
    author: 'स्नेहा और विक्रम',
    category: 'अंडा फ्रीजिंग और आईवीएफ',
    readTime: '7 मिनट पढ़ें',
    link: '#',
    treatment: 'अंडा फ्रीजिंग और आईवीएफ',
  },
];

const Page = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('success-stories');

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
      return stories;
    } else if (selectedLanguage === 'hindi') {
      return stories.filter(story => 
        story.category === 'आईवीएफ सफलता' || 
        story.category === 'आईसीएसआई सफलता' ||
        story.category === 'अंडा फ्रीजिंग और आईवीएफ' ||
        story.readTime.includes('मिनट') ||
        story.date.includes('दिसंबर') || 
        story.date.includes('नवंबर') ||
        story.title.match(/[\u0900-\u097F]/)
      );
    } else if (selectedLanguage === 'english') {
      return stories.filter(story => 
        (story.category === 'IVF Success' || 
         story.category === 'ICSI Success' ||
         story.category === 'Egg Freezing & IVF' ||
         story.category === 'Surrogacy') && 
        !story.readTime.includes('मिनट') &&
        !story.date.includes('दिसंबर') && 
        !story.date.includes('नवंबर') &&
        !story.title.match(/[\u0900-\u097F]/)
      );
    }
    return stories;
  }, [selectedLanguage, stories]);

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header2.jpg"
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
                    Inspiring Success Stories
                  </h2>
                  <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8' }}>
                    Real stories from couples who achieved their dream of parenthood with Seeds of Innocens. These testimonials reflect the hope, dedication, and joy that define our patients&apos; journeys.
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

          {/* Stories Grid */}
          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {filteredBlogs.map((story, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={story.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                    flexDirection: 'column',
                    position: 'relative'
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
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      fontSize: '40px',
                      color: 'var(--accent-color)',
                      opacity: 0.2,
                      zIndex: 1
                    }}>
                      <FaQuoteLeft />
                    </div>
                    <div className="cs_blog_img" style={{ 
                      overflow: 'hidden', 
                      position: 'relative',
                      height: '250px',
                      width: '100%'
                    }}>
                      <Image 
                        src={story.image} 
                        alt={story.title} 
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
                        {story.category}
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
                          {story.date}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <FaClock style={{ fontSize: '12px' }} />
                          {story.readTime}
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
                        {story.title}
                      </h3>
                      <p className="cs_blog_subtitle" style={{ 
                        lineHeight: '1.8', 
                        color: '#666', 
                        marginBottom: '15px',
                        fontSize: '15px',
                        flex: 1,
                        fontStyle: 'italic'
                      }}>
                        &quot;{story.excerpt}&quot;
                      </p>
                      <div style={{ 
                        padding: '12px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        marginBottom: '15px'
                      }}>
                        <span style={{ 
                          fontSize: '13px',
                          fontWeight: '600',
                          color: 'var(--accent-color)'
                        }}>
                          Treatment: {story.treatment}
                        </span>
                      </div>
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
                          {story.author}
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
                          Read Story
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
