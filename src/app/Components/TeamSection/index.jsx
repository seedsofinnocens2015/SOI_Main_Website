'use client';
import { useRef } from "react";
import Slider from "react-slick";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Link from "next/link";
import Image from "next/image";

const TeamSection = ({ data, bgColor, variant, hr }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `${variant}`,
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
    <div className="about-team">
      <div className="container">
        {(data.subtitle || data.title) && (
          <>
            <SectionHeading
              SectionSubtitle={data.subtitle}
              SectionTitle={data.title}
              variant={"text-center"}
            />
            <div className="cs_height_50 cs_height_lg_50" />
          </>
        )}

        {!data.subtitle && !data.title && <div className="cs_height_30 cs_height_lg_30" />}
        <div className="cs_slider cs_style_1 cs_slider_gap_24">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              <Slider ref={sliderRef} {...settings}>
                {data?.sliderData.map((item, index) => (
                  <div
                    className="cs_slide"
                    key={index}
                    onMouseEnter={() => sliderRef.current?.slickPause()}
                    onMouseLeave={() => sliderRef.current?.slickPlay()}
                  >
                    <div className="cs_team cs_style_1 cs_team_minimalistic">
                      <Link href={item.link} className="cs_team_thumbnail">
                        <Image src={item.imageUrl} alt={item.name} width={280} height={300} />
                      </Link>
                      <div className="cs_team_bio">
                        <h3 className="cs_team_title cs_extra_bold mb-0">
                          <Link href={item.link}>{item.name}</Link>
                        </h3>
                        <p className="cs_team_subtitle">{item.profession}</p>
                        <p className="cs_team_experience">Experience: 12+ Years</p>
                        <Link href={item.link} className="cs_team_view_profile">
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {bgColor && (
        <div className="cs_team_bg_dark cs_blue_bg">
          <div className="cs_team_bg_white cs_white_bg" />
        </div>
      )}
      <Spacing lg={80} md={120} />

      {hr && <hr />}
    </div>
  );
};

export default TeamSection;
