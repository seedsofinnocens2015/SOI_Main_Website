"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React, { useState } from 'react';

const headingData = {
  title: 'Patient Testimonial Videos',
};

// Convert YouTube URL to embed format
const getEmbedUrl = (url) => {
  if (!url) return '';
  
  // If already in embed format
  if (url.includes('youtube.com/embed/')) {
    return url;
  }
  
  // Extract video ID from different YouTube URL formats
  let videoId = '';
  
  if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1]?.split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  } else if (url.includes('youtube.com/embed/')) {
    videoId = url.split('embed/')[1]?.split('?')[0];
  }
  
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  return url;
};

// Common quote for all videos - suitable for all fertility treatments
const commonQuote = 'Our journey to parenthood was made possible by Seeds of Innocens. The team\'s support, expertise, and compassionate care were incredible throughout our entire journey. We are forever grateful for making our dream of becoming parents come true.';

// Video data - Add your YouTube video URLs here
const videoTestimonials = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/watch?v=0XD9OrkunWI',
    quote: commonQuote,
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/watch?v=wmZZrZFaGB8',
    quote: commonQuote,
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/watch?v=GzfaoO4W_D8',
    quote: commonQuote,
  },
  {
    id: 4,
    videoUrl: 'https://www.youtube.com/watch?v=GfgHnx7gMQM',
    quote: commonQuote,
  },
  {
    id: 5,
    videoUrl: 'https://www.youtube.com/watch?v=bigHXd1uRT8',
    quote: commonQuote,
  },
  {
    id: 6,
    videoUrl: 'https://www.youtube.com/watch?v=qHYM7KDUus0',
    quote: commonQuote,
  },
  //not
  {
    id: 7,
    videoUrl: 'https://www.youtube.com/watch?v=2tHF8osCj58',
    quote: commonQuote,
  },
  //not
  {
    id: 8,
    videoUrl: 'https://www.youtube.com/watch?v=zlhyWV7RMaA',
    quote: commonQuote,
  },
  {
    id: 9,
    videoUrl: 'https://www.youtube.com/watch?v=cfbgezUuDlo',
    quote: commonQuote,
  },
  {
    id: 10,
    videoUrl: 'https://www.youtube.com/watch?v=OP_z12amdIc',
    quote: commonQuote,
  },
  {
    id: 11,
    videoUrl: 'https://www.youtube.com/watch?v=zw1JqCgAPzY',
    quote: commonQuote,
  },
  {
    id: 12,
    videoUrl: 'https://www.youtube.com/watch?v=uE-jGEQc06Y',
    quote: commonQuote,
  },
  {
    id: 13,
    videoUrl: 'https://www.youtube.com/watch?v=r0ALtfwOocg',
    quote: commonQuote,
  },
  {
    id: 14,
    videoUrl: 'https://www.youtube.com/watch?v=t83B5YaAzGo',
    quote: commonQuote, 
  },
  {
    id: 15,
    videoUrl: 'https://www.youtube.com/watch?v=7aSViXkirBY',
    quote: commonQuote, 
  },
  {
    id: 16,
    videoUrl: 'https://www.youtube.com/watch?v=5o6SdAfQvWk',
    quote: commonQuote,
  },
  {
    id: 17,
    videoUrl: 'https://www.youtube.com/watch?v=0XD9OrkunWI',
    quote: commonQuote,
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 12;

  // Calculate pagination
  const totalPages = Math.ceil(videoTestimonials.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = videoTestimonials.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Introduction Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36" style={{
                fontSize: '26px',
                fontWeight: '700',
                color: '#0A2A43',
                position: 'relative',
                display: 'inline-block',
                lineHeight: '1.2'
              }}>
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  Patient
                  <span style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '60px',
                    height: '4px',
                    backgroundColor: '#E45352',
                    borderRadius: '2px'
                  }}></span>
                </span>
                {' '}Testimonial Videos
              </h3>
              <div className="cs_height_30" />
              <p className="cs_text_style_1" style={{
                marginBottom: '20px',
                lineHeight: '2',
                fontSize: '17px',
                color: '#333',
                textAlign: 'justify',
                maxWidth: '100%'
              }}>
                Watch real stories from our patients as they share their IVF journey, experiences, and success stories. These video testimonials provide genuine insights into what you can expect at Seeds of Innocens. Hearing directly from our patients about their experiences, challenges, and successes can provide comfort, hope, and valuable information for those considering fertility treatment. .
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Video Gallery Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="cs_height_30 cs_height_lg_30" />
          <div className="row cs_gap_y_40">
            {currentVideos.map((video, index) => (
              <div key={video.id} className="col-lg-4 col-md-6">
                <div className="cs_news_media_item" style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease'
                }}>
                  <div className="cs_news_media_video" style={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden'
                  }}>
                    <iframe
                      src={getEmbedUrl(video.videoUrl)}
                      title={`Patient Testimonial Video ${startIndex + index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </div>
                  {video.quote && (
                    <div className="cs_news_media_content" style={{
                      padding: '20px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <p className="cs_news_media_description" style={{
                        fontSize: '14px',
                        color: '#666',
                        lineHeight: '1.6',
                        margin: 0,
                        flex: 1
                      }}>
                        {video.quote}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{
              marginTop: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                  padding: '10px 20px',
                  backgroundColor: currentPage === 1 ? '#e0e0e0' : '#E45352',
                  color: currentPage === 1 ? '#999' : '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.backgroundColor = '#d43f3e';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 1) {
                    e.currentTarget.style.backgroundColor = '#E45352';
                  }
                }}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      style={{
                        padding: '10px 15px',
                        backgroundColor: currentPage === page ? '#E45352' : '#fff',
                        color: currentPage === page ? '#fff' : '#333',
                        border: '1px solid #e0e0e0',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: currentPage === page ? '600' : '400',
                        transition: 'all 0.3s ease',
                        minWidth: '40px'
                      }}
                      onMouseEnter={(e) => {
                        if (currentPage !== page) {
                          e.currentTarget.style.backgroundColor = '#f5f5f5';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentPage !== page) {
                          e.currentTarget.style.backgroundColor = '#fff';
                        }
                      }}
                    >
                      {page}
                    </button>
                  );
                } else if (
                  page === currentPage - 2 ||
                  page === currentPage + 2
                ) {
                  return (
                    <span key={page} style={{ padding: '0 5px', color: '#999' }}>
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{
                  padding: '10px 20px',
                  backgroundColor: currentPage === totalPages ? '#e0e0e0' : '#E45352',
                  color: currentPage === totalPages ? '#999' : '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.backgroundColor = '#d43f3e';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== totalPages) {
                    e.currentTarget.style.backgroundColor = '#E45352';
                  }
                }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </Section>

      {/* Share Your Story Section */}
      {/* <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{
                padding: '40px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid #e8e8e8'
              }}>
                <h3 className="cs_section_title cs_fs_36" style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#0A2A43',
                  marginBottom: '20px'
                }}>
                  Share Your Video Testimonial
                </h3>
                <p className="cs_text_style_1" style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#666',
                  marginBottom: '0'
                }}>
                  If you&apos;d like to share your success story through a video testimonial, we would love to hear from you. Your story can inspire others on their fertility journey. Contact us to discuss how you can share your experience and help others realize their dream of parenthood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section> */}
    </div>
  );
};

export default Page;
