"use client"
import { useEffect, useRef, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Slider from "react-slick";
import Button from "../Buttons";
import Image from "next/image";
import { getAssetPathClient } from "../../utils/assetPath";
const HeroSection = ({ data }) => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const hasSecondarySlider = Array.isArray(data?.secondarySlider) && data.secondarySlider.length > 0;

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

  // Handle page visibility changes to resume slider when page becomes active
  useEffect(() => {
    const resumeSliders = () => {
      // Resume slider autoplay
      if (sliderRef1.current && typeof sliderRef1.current.slickPlay === 'function') {
        try {
          sliderRef1.current.slickPlay();
        } catch (e) {
          // no-op
        }
      }
      if (sliderRef2.current && typeof sliderRef2.current.slickPlay === 'function') {
        try {
          sliderRef2.current.slickPlay();
        } catch (e) {
          // no-op
        }
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Page became visible - resume everything
        setTimeout(() => {
          resumeSliders();
        }, 100);
      }
    };

    // Add visibility change listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Also check when window gains focus
    const handleFocus = () => {
      setTimeout(() => {
        resumeSliders();
      }, 100);
    };

    window.addEventListener("focus", handleFocus);

    // IntersectionObserver to detect when hero section comes back into view
    let intersectionObserver = null;
    
    const setupIntersectionObserver = () => {
      const heroSection = document.querySelector('.cs_hero_slider_thumb');
      if (heroSection && typeof window !== 'undefined' && window.IntersectionObserver) {
        intersectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Hero section is visible - ensure slider keeps playing
                setTimeout(() => {
                  resumeSliders();
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
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: false,
    pauseOnDotsHover: true,
    arrows: true,
    adaptiveHeight: false,
    lazyLoad: 'progressive',
    afterChange: () => {
      // Ensure slider keeps playing
      if (sliderRef1.current && typeof sliderRef1.current.slickPlay === 'function') {
        sliderRef1.current.slickPlay();
      }
    },
    onInit: () => {
      // Ensure slider starts playing on init
      if (sliderRef1.current && typeof sliderRef1.current.slickPlay === 'function') {
        setTimeout(() => {
          sliderRef1.current.slickPlay();
        }, 100);
      }
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
            ref={(slider) => {
              sliderRef1.current = slider;
            }}
          >
            {data?.primarySlider.map((items, index) => {
              // Use mobile image if available and on mobile, otherwise use desktop image
              const imageUrl = (isMobile && items.mobileBgImageUrl) ? items.mobileBgImageUrl : items.bgImageUrl;
              const bgImagePath = getAssetPathClient(imageUrl);
              const iconImagePath = getAssetPathClient(items.iconImgUrl);
              
              return (
                <div className="cs_hero_slider_thumb_item" key={index}>
                  <div
                    className={`cs_hero cs_style_1 cs_center cs_bg_filed${items.isCenterLayout ? " cs_has_bg_image" : ""}`}
                    style={{ position: 'relative' }}
                  >
                    <Image
                      src={bgImagePath}
                      alt={items.title ? String(items.title).replace(/<[^>]*>/g, ' ').trim() : 'Hero background'}
                      fill
                      priority={index === 0}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      sizes="100vw"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    {items.isCenterLayout && (
                      <div className="cs_hero_overlay_dark"></div>
                    )}
                    {/* {!isVideo && (
                      <div className="cs_hero_overlay"></div>
                    )} */}
                    <div className="container">
                      <div className={`cs_hero_text ${items.isCenterLayout ? 'cs_hero_text_center' : ''}`}>
                        <div className={`cs_hero_text_in ${items.isCenterLayout ? 'cs_hero_text_in_center' : ''}`}>
                          <h1
                            className={`cs_hero_title ${
                              items.titleClass ?? ""
                            }`.trim()}
                            style={items.titleStyle}
                            dangerouslySetInnerHTML={{ __html: items.title }}
                          />
                          <p
                            className="cs_hero_subtitle"
                            style={items.subtitleStyle}
                            dangerouslySetInnerHTML={{
                              __html: items.contactSubtitle,
                            }}
                          />
                          <div className={`cs_hero_btns ${items.isCenterLayout ? 'cs_hero_btns_center' : ''}`}>
                            <Button
                              btnText={items.btnText1}
                              variant={`cs_btn cs_style_1 ${items.btnStyle || 'cs_color_1'}`}
                              btnIcons={<FaAnglesRight />}
                              btnUrl={items.link}
                            />
                            {items.phoneNumber && (
                              <a href={items.phoneLink || `tel:+91${items.phoneNumber.replace(/\s/g, '')}`} className="cs_hero_phone">
                                <FaPhoneAlt className="cs_hero_phone_icon" />
                                <span className="cs_hero_phone_text">{items.phoneNumber}</span>
                              </a>
                            )}
                          </div>
                        </div>
                        {!items.isCenterLayout && (
                          <div className="cs_hero_shape">
                            <Image
                              src={iconImagePath}
                              className="cs_spinner_img"
                              alt="img"
                              width={142}
                              height={190}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        {hasSecondarySlider && (
          <div className="cs_hero_slider_nav slick-slider">
            <Slider
              ref={(slider) => {
                sliderRef2.current = slider;
              }}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              {...settings2}
            >
              {data.secondarySlider.map((items, index) => (
                <div
                  className="cs_hero_slider_thumb_mini"
                  key={index}
                  onClick={() => {
                    if (sliderRef1.current && typeof sliderRef1.current.slickGoTo === "function") {
                      sliderRef1.current.slickGoTo(index);
                    }
                  }}
                >
                  <Image src={items} alt="img" width={90} height={92} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </section>
    </>
  );
};

export default HeroSection;
