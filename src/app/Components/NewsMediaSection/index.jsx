"use client";
import { useRef, useState, useCallback } from "react";
import Slider from "react-slick";

/** Extract YouTube video id from common URL shapes */
function getYoutubeVideoId(url) {
  if (!url || typeof url !== "string") return "";
  try {
    if (url.includes("youtube.com/embed/")) {
      return url.split("embed/")[1]?.split(/[?&/]/)[0] || "";
    }
    if (url.includes("youtube.com/watch?v=")) {
      return url.split("v=")[1]?.split("&")[0] || "";
    }
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1]?.split("?")[0] || "";
    }
  } catch {
    return "";
  }
  return "";
}

function getEmbedUrl(url) {
  const videoId = getYoutubeVideoId(url);
  if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  if (url && url.includes("youtube.com/embed/")) return url;
  return url || "";
}

const NewsMediaSection = ({ data }) => {
  const sliderRef = useRef(null);
  /** Keys like "0-abc123" — iframe only mounts after user taps Play */
  const [activatedKeys, setActivatedKeys] = useState(() => new Set());

  const activate = useCallback((key) => {
    setActivatedKeys((prev) => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  }, []);

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

  return (
    <>
      <div className="container">
        {data.sectionTitle && (
          <div className="cs_service_title_section">
            <h3 className="cs_service_main_title">
              {typeof data.sectionTitle === "object" && data.sectionTitle.part1 ? (
                <>
                  <span className="cs_news_media_main_title" style={{ color: "#df3655" }}>
                    {data.sectionTitle.part1}
                  </span>{" "}
                  <span style={{ color: "#000000" }}>{data.sectionTitle.part2}</span>
                </>
              ) : (
                data.sectionTitle
              )}
            </h3>
            {data.sectionSubtitle && (
              <p
                style={{
                  fontSize: "clamp(14px, 2vw, 18px)",
                  color: "#555555",
                  fontWeight: "400",
                  textAlign: "center",
                  textTransform: "none",
                  marginTop: "10px",
                  display: "block",
                  width: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
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
                {data.videos.map((video, index) => {
                  const videoId = getYoutubeVideoId(video.videoUrl);
                  const embedUrl = getEmbedUrl(video.videoUrl);
                  const rowKey = `${index}-${videoId || "vid"}`;
                  const isPlaying = activatedKeys.has(rowKey);
                  const thumbSrc =
                    videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";

                  return (
                    <div
                      key={rowKey}
                      className="cs_slide"
                      onMouseEnter={() => sliderRef.current?.slickPause()}
                      onMouseLeave={() => sliderRef.current?.slickPlay()}
                    >
                      <div className="cs_news_media_item">
                        <div className="cs_news_media_video">
                          {isPlaying ? (
                            <iframe
                              src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
                              title={video.title || `News Media Video ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              loading="lazy"
                            />
                          ) : (
                            <button
                              type="button"
                              className="cs_news_media_facade"
                              onClick={() => activate(rowKey)}
                              aria-label={video.title ? `Play video: ${video.title}` : "Play video"}
                            >
                              <span className="cs_news_media_facade_thumb">
                                {thumbSrc ? (
                                  <img
                                    src={thumbSrc}
                                    alt=""
                                    className="cs_news_media_facade_img"
                                    loading="lazy"
                                    decoding="async"
                                    fetchPriority="low"
                                  />
                                ) : (
                                  <span className="cs_news_media_facade_fallback" />
                                )}
                              </span>
                              <span className="cs_news_media_play" aria-hidden="true">
                                <svg viewBox="0 0 68 48" width="68" height="48" focusable="false">
                                  <path
                                    d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                                    fill="red"
                                    fillOpacity="0.9"
                                  />
                                  <path d="M45 24 27 14v20" fill="#fff" />
                                </svg>
                              </span>
                            </button>
                          )}
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
                                  style={{
                                    color: "#474343",
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                  }}
                                >
                                  {video.description}
                                </a>
                              </p>
                            )}
                            {video.date && <div className="cs_news_media_date">{video.date}</div>}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsMediaSection;
