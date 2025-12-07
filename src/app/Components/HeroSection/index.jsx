"use client"
import { useEffect, useRef, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Slider from "react-slick";
import Button from "../Buttons";
import Image from "next/image";
import { getAssetPathClient } from "../../utils/assetPath";
const HeroSection = ({ data }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const videoRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ensure slider is visible and playing on mount
  useEffect(() => {
    const initializeSlider = () => {
      if (sliderRef1.current) {
        // Force slider to show first slide and start playing
        setTimeout(() => {
          if (sliderRef1.current && typeof sliderRef1.current.slickGoTo === 'function') {
            sliderRef1.current.slickGoTo(0);
          }
          if (sliderRef1.current && typeof sliderRef1.current.slickPlay === 'function') {
            sliderRef1.current.slickPlay();
          }
        }, 200);
      }
      if (sliderRef2.current) {
        setTimeout(() => {
          if (sliderRef2.current && typeof sliderRef2.current.slickGoTo === 'function') {
            sliderRef2.current.slickGoTo(0);
          }
          if (sliderRef2.current && typeof sliderRef2.current.slickPlay === 'function') {
            sliderRef2.current.slickPlay();
          }
        }, 200);
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initializeSlider, 300);
    
    return () => clearTimeout(timer);
  }, [data]);

  // Handle page visibility changes to resume slider and video when page becomes active
  useEffect(() => {
    const resumeSliderAndVideos = () => {
      // Resume slider autoplay
      if (sliderRef1.current && typeof sliderRef1.current.slickPlay === 'function') {
        try {
          sliderRef1.current.slickPlay();
        } catch (e) {
          console.log("Slider play error:", e);
        }
      }
      if (sliderRef2.current && typeof sliderRef2.current.slickPlay === 'function') {
        try {
          sliderRef2.current.slickPlay();
        } catch (e) {
          console.log("Slider play error:", e);
        }
      }

      // Resume video playback
      videoRefs.current.forEach((videoEl) => {
        if (videoEl && videoEl.play) {
          videoEl.play().catch((error) => {
            // Ignore autoplay errors silently
          });
        }
      });
      
      // Ensure current slide is visible
      if (sliderRef1.current) {
        const sliderElement = sliderRef1.current.innerSlider;
        if (sliderElement) {
          const currentSlide = sliderElement.currentSlide || 0;
          const slides = document.querySelectorAll('.cs_hero_slider_thumb_item');
          if (slides[currentSlide]) {
            slides[currentSlide].style.display = 'block';
            slides[currentSlide].style.opacity = '1';
            slides[currentSlide].style.visibility = 'visible';
            slides[currentSlide].style.zIndex = '1';
          }
        }
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Page became visible - resume everything
        setTimeout(() => {
          resumeSliderAndVideos();
        }, 100);
      }
    };

    // Add visibility change listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Also check when window gains focus
    const handleFocus = () => {
      setTimeout(() => {
        resumeSliderAndVideos();
      }, 100);
    };

    window.addEventListener("focus", handleFocus);

    // Periodic check to ensure slider and videos keep running even when idle
    // This helps when page becomes idle but visibility API might not trigger properly
    const checkInterval = setInterval(() => {
      if (!document.hidden) {
        // Check if slider is still playing (slick doesn't have a direct "isPlaying" method,
        // so we'll just try to resume it periodically)
        resumeSliderAndVideos();

        // Ensure all videos are playing
        videoRefs.current.forEach((videoEl) => {
          if (videoEl && videoEl.paused && !document.hidden) {
            videoEl.play().catch(() => {});
          }
        });

        // Force slider to show current slide if it's not visible
        if (sliderRef1.current) {
          const sliderElement = sliderRef1.current.innerSlider;
          if (sliderElement) {
            const currentSlide = sliderElement.currentSlide || 0;
            // Ensure current slide is visible
            const slides = document.querySelectorAll('.cs_hero_slider_thumb_item');
            if (slides[currentSlide]) {
              slides[currentSlide].style.display = 'block';
              slides[currentSlide].style.opacity = '1';
              slides[currentSlide].style.visibility = 'visible';
            }
          }
        }
      }
    }, 2000); // Check every 2 seconds

    // IntersectionObserver to detect when hero section comes back into view
    let intersectionObserver = null;
    
    const setupIntersectionObserver = () => {
      const heroSection = document.querySelector('.cs_hero_slider_thumb');
      if (heroSection && typeof window !== 'undefined' && window.IntersectionObserver) {
        intersectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Hero section is visible - ensure everything is playing
                setTimeout(() => {
                  resumeSliderAndVideos();
                }, 300);
              }
            });
          },
          { threshold: 0.1 }
        );
        
        intersectionObserver.observe(heroSection);
      }
    };
    
    // Setup observer after a delay to ensure DOM is ready
    const observerTimer = setTimeout(setupIntersectionObserver, 500);

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
      clearInterval(checkInterval);
      clearTimeout(observerTimer);
      if (intersectionObserver) {
        const heroSection = document.querySelector('.cs_hero_slider_thumb');
        if (heroSection) {
          intersectionObserver.unobserve(heroSection);
        }
      }
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    fade: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    arrows: true,
    adaptiveHeight: false,
    lazyLoad: 'ondemand',
    beforeChange: (current, next) => {
      // Ensure slides are visible during transition
      const slides = document.querySelectorAll('.cs_hero_slider_thumb_item');
      if (slides[current]) {
        slides[current].style.display = 'block';
        slides[current].style.opacity = '1';
        slides[current].style.visibility = 'visible';
      }
      if (slides[next]) {
        slides[next].style.display = 'block';
        slides[next].style.opacity = '1';
        slides[next].style.visibility = 'visible';
      }
    },
    afterChange: (currentSlide) => {
      // When slide changes, ensure video on current slide plays
      const videoEl = videoRefs.current[currentSlide];
      if (videoEl && videoEl.paused && !document.hidden) {
        videoEl.play().catch(() => {});
      }
      // Ensure slider keeps playing
      if (sliderRef1.current && typeof sliderRef1.current.slickPlay === 'function') {
        sliderRef1.current.slickPlay();
      }
      // Ensure current slide is visible
      const slides = document.querySelectorAll('.cs_hero_slider_thumb_item');
      if (slides[currentSlide]) {
        slides[currentSlide].style.display = 'block';
        slides[currentSlide].style.opacity = '1';
        slides[currentSlide].style.visibility = 'visible';
      }
    },
    onInit: () => {
      // Ensure slider starts playing on init
      if (sliderRef1.current && typeof sliderRef1.current.slickPlay === 'function') {
        setTimeout(() => {
          sliderRef1.current.slickPlay();
        }, 100);
      }
      // Ensure first slide is visible
      setTimeout(() => {
        const slides = document.querySelectorAll('.cs_hero_slider_thumb_item');
        if (slides[0]) {
          slides[0].style.display = 'block';
          slides[0].style.opacity = '1';
          slides[0].style.visibility = 'visible';
        }
      }, 200);
    },
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    fade: false,
    swipeToSlide: true,
    vertical: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    onInit: () => {
      // Ensure slider starts playing on init
      if (sliderRef2.current && typeof sliderRef2.current.slickPlay === 'function') {
        setTimeout(() => {
          sliderRef2.current.slickPlay();
        }, 100);
      }
    },
  };

  return (
    <>
      <section className="position-relative">
        <div className="cs_hero_slider_thumb slick-slider">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider) => {
              sliderRef1.current = slider;
              if (slider) {
                setNav1(slider);
              }
            }}
          >
            {data?.primarySlider.map((items, index) => {
              const isVideo = items.bgImageUrl?.toLowerCase().endsWith(".mp4");
              // Use mobile image if available and on mobile, otherwise use desktop image
              const imageUrl = (isMobile && items.mobileBgImageUrl) ? items.mobileBgImageUrl : items.bgImageUrl;
              const bgImagePath = getAssetPathClient(imageUrl);
              const iconImagePath = getAssetPathClient(items.iconImgUrl);
              
              return (
                <div className="cs_hero_slider_thumb_item" key={index}>
                  <div
                    className={`cs_hero cs_style_1 cs_center cs_bg_filed${
                      isVideo ? " cs_has_video_bg" : ""
                    }`}
                    style={
                      isVideo
                        ? undefined
                        : {
                            backgroundImage: `url(${bgImagePath})`,
                          }
                    }
                  >
                    {/* {!isVideo && (
                      <div className="cs_hero_overlay"></div>
                    )} */}
                    {isVideo && (
                      <>
                        <video
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[index] = el;
                            }
                          }}
                          className="cs_hero_video_bg"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          poster={items.posterUrl ?? ""}
                          onLoadedData={(e) => {
                            // Ensure video plays after loading
                            if (e.target) {
                              e.target.play().catch((error) => {
                                console.log("Video autoplay prevented:", error);
                              });
                            }
                          }}
                          onPlay={() => {
                            // Ensure video stays playing
                            const video = videoRefs.current[index];
                            if (video && video.paused) {
                              video.play().catch(() => {});
                            }
                          }}
                          onPause={(e) => {
                            // If video pauses unintentionally (not user-initiated), try to resume it
                            // Only resume if page is visible and it's not a user interaction
                            if (!document.hidden && e.target) {
                              // Check if it's paused
                              if (e.target.paused) {
                                // Use requestAnimationFrame for better performance
                                requestAnimationFrame(() => {
                                  if (!document.hidden && e.target && e.target.paused) {
                                    e.target.play().catch(() => {
                                      // Ignore play errors
                                    });
                                  }
                                });
                              }
                            }
                          }}
                          onError={(e) => {
                            console.error("Video load error:", {
                              error: e.target?.error,
                              path: bgImagePath,
                              originalPath: items.bgImageUrl,
                              currentPath: window.location.pathname
                            });
                          }}
                          onLoadedMetadata={(e) => {
                            // Video loaded successfully
                            console.log("Video loaded successfully:", bgImagePath);
                          }}
                        >
                          <source src={bgImagePath} type="video/mp4" />
                        </video>
                        {/* <div className="cs_hero_overlay"></div> */}
                      </>
                    )}
                    <div className="container">
                      <div className="cs_hero_text">
                        <div className="cs_hero_text_in">
                          <h1
                            className={`cs_hero_title ${
                              items.titleClass ?? ""
                            }`.trim()}
                            style={items.titleStyle}
                            dangerouslySetInnerHTML={{ __html: items.title }}
                          />
                          <p
                            className="cs_hero_subtitle"
                            dangerouslySetInnerHTML={{
                              __html: items.contactSubtitle,
                            }}
                          />
                          <div className="cs_hero_btns">
                            <Button
                              btnText={items.btnText1}
                              variant={"cs_btn cs_style_1 cs_color_1"}
                              btnIcons={<FaAnglesRight />}
                              btnUrl={items.link}
                            />
                          </div>
                        </div>
                        <div className="cs_hero_shape">
                          <Image
                            src={iconImagePath}
                            className="cs_spinner_img"
                            alt="img"
                            width={142}
                            height={190}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="cs_hero_slider_nav slick-slider">
          <Slider
            asNavFor={nav1}
            ref={(slider) => {
              sliderRef2.current = slider;
              if (slider) {
                setNav2(slider);
              }
            }}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            {...settings2}
          >
            {data?.secondarySlider?.map((items, index) => (
              <div className="cs_hero_slider_thumb_mini" key={index}>
                <Image src={items}  alt="img" width={90} height={92}   />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
