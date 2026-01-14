"use client"
import { useRef } from "react";
import Slider from "react-slick";
import SectionHeading from "../SectionHeading";

const NewsMediaSection = ({ data }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    fade: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: "cs_pagination cs_style_2",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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

  return (
    <>
      <div className="container">
        {data.sectionTitle && (
          <div className="cs_service_title_section">
            <h2 className="cs_service_main_title">
              {typeof data.sectionTitle === 'object' && data.sectionTitle.part1 ? (
                <>
                  <span className="cs_news_media_main_title" style={{ color: '#CCC968' }}>
                    {data.sectionTitle.part1}
                  </span>{' '}
                  <span style={{ color: '#000000' }}>{data.sectionTitle.part2}</span>
                </>
              ) : (
                data.sectionTitle
              )}
            </h2>
            {data.sectionSubtitle && (
              <p
                style={{
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  color: '#555555',
                  fontWeight: '400',
                  textAlign: 'center',
                  textTransform: 'none',
                  marginTop: '10px',
                  display: 'block',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {data.sectionSubtitle}
              </p>
            )}
          </div>
        )}

        <div className="cs_height_30 cs_height_lg_30" />
        <div className="cs_slider cs_style_1 cs_slider_gap_24">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              <Slider ref={sliderRef} {...settings}>
                {data.videos.map((video, index) => (
                  <div
                    key={index}
                    className="cs_slide"
                    onMouseEnter={() => sliderRef.current?.slickPause()}
                    onMouseLeave={() => sliderRef.current?.slickPlay()}
                  >
                    <div className="cs_news_media_item">
                      <div className="cs_news_media_video">
                        <iframe
                          src={getEmbedUrl(video.videoUrl)}
                          title={video.title || `News Media Video ${index + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      {video.title && (
                        <div className="cs_news_media_content">
                          <h3 className="cs_news_media_title">{video.title}</h3>
                          {video.description && (
                            <p className="cs_news_media_description">
                              <a 
                                href="https://www.youtube.com/@seedsofinnocens" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#474343', textDecoration: 'underline', cursor: 'pointer' }}
                              >
                                {video.description}
                              </a>
                            </p>
                          )}
                          {video.date && (
                            <div className="cs_news_media_date">{video.date}</div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsMediaSection;

