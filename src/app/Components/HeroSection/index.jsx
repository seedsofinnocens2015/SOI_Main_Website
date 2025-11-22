"use client"
import { useEffect, useRef, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Slider from "react-slick";
import Button from "../Buttons";
import Image from "next/image";
const HeroSection = ({ data }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  // Handle page visibility changes to resume slider and video when page becomes active
  useEffect(() => {
    const resumeSliderAndVideos = () => {
      // Resume slider autoplay
      if (sliderRef1 && typeof sliderRef1.slickPlay === 'function') {
        try {
          sliderRef1.slickPlay();
        } catch (e) {
          console.log("Slider play error:", e);
        }
      }
      if (sliderRef2 && typeof sliderRef2.slickPlay === 'function') {
        try {
          sliderRef2.slickPlay();
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
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Page became visible - resume everything
        resumeSliderAndVideos();
      }
    };

    // Add visibility change listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Also check when window gains focus
    const handleFocus = () => {
      resumeSliderAndVideos();
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
      }
    }, 3000); // Check every 3 seconds

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
      clearInterval(checkInterval);
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
    pauseOnHover: false,
    pauseOnFocus: false,
    afterChange: (currentSlide) => {
      // When slide changes, ensure video on current slide plays
      const videoEl = videoRefs.current[currentSlide];
      if (videoEl && videoEl.paused && !document.hidden) {
        videoEl.play().catch(() => {});
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
  };

  return (
    <>
      <section className="position-relative">
        <div className="cs_hero_slider_thumb slick-slider">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
          >
            {data?.primarySlider.map((items, index) => {
              const isVideo = items.bgImageUrl?.toLowerCase().endsWith(".mp4");
              
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
                            backgroundImage: `url(${items.bgImageUrl})`,
                          }
                    }
                  >
                    {isVideo && (
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
                      >
                        <source src={items.bgImageUrl} type="video/mp4" />
                      </video>
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
                          <div className="cs_hero_info">
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: items.contactTitle,
                              }}
                            />
                            <p
                              dangerouslySetInnerHTML={{ __html: items.contact }}
                            />
                          </div>
                          <div className="cs_hero_btns">
                            <Button
                              btnText={items.btnText1}
                              variant={"cs_btn cs_style_1 cs_color_1"}
                              btnIcons={<FaAnglesRight />}
                              btnUrl={items.link}
                            />
                            <Button
                              btnText={items.btnText2}
                              variant={"cs_btn cs_style_1 cs_color_2"}
                              btnIcons={<FaAnglesRight />}
                              btnUrl={items.link2}
                            />
                          </div>
                        </div>
                        <div className="cs_hero_shape">
                          <Image
                            src={items.iconImgUrl}
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
            ref={(slider) => (sliderRef2 = slider)}
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
