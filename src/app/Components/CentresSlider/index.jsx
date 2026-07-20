"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { getAssetPath } from "@/app/utils/assetPath";

const CentresSlider = ({ centres }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: centres.length > 3,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: centres.length > 3,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: { slidesToShow: 2, infinite: centres.length > 2, autoplay: centres.length > 2 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, infinite: centres.length > 1, autoplay: centres.length > 1 },
      },
    ],
  };

  return (
    <div className="cs_slider cs_style_1 cs_slider_gap_24">
      <div className="cs_slider_container">
        <div className="cs_slider_wrapper">
          <Slider ref={sliderRef} {...settings}>
            {centres.map((centre) => (
              <div
                className="cs_slide h-100"
                key={centre.href}
                onMouseEnter={() => sliderRef.current?.slickPause()}
                onMouseLeave={() => sliderRef.current?.slickPlay()}
              >
                <div
                  className="cs_centre_card_premium cs_white_bg cs_radius_15 overflow-hidden position-relative h-100 d-flex flex-column"
                  style={{
                    boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.08)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "15px",
                    margin: "0 12px 30px",
                  }}
                >
                  <Link
                    href={centre.href}
                    className="cs_centre_thumbnail position-relative overflow-hidden"
                    style={{ height: "260px", display: "block" }}
                  >
                    <Image
                      src={getAssetPath(centre.image || "/assets/img/recent_post2webp")}
                      alt={centre.name}
                      width={500}
                      height={350}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className="cs_centre_badge position-absolute"
                      style={{
                        top: "20px",
                        left: "20px",
                        backgroundColor: "var(--accent-color)",
                        color: "#fff",
                        padding: "6px 16px",
                        borderRadius: "50px",
                        fontSize: "13px",
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        zIndex: 2,
                      }}
                    >
                      {centre.state}
                    </div>
                  </Link>

                  <div className="cs_centre_content p-4 d-flex flex-column flex-grow-1">
                    <h3
                      className="cs_centre_title mb-3"
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        fontFamily: "var(--heading-font)",
                        color: "var(--heading-color)",
                        lineHeight: 1.3,
                      }}
                    >
                      <Link href={centre.href} style={{ color: "inherit", textDecoration: "none" }}>
                        {centre.name}
                      </Link>
                    </h3>
                    <div className="cs_centre_location_box mb-4 flex-grow-1 d-flex align-items-start gap-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          flexShrink: 0,
                          marginTop: "3px",
                          color: "var(--accent-color)",
                          width: "20px",
                          height: "20px",
                        }}
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p
                        className="mb-0"
                        style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.6 }}
                      >
                        {centre.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CentresSlider;
