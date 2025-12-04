"use client"
import { useRef } from "react";
import Slider from "react-slick";
import Button from "../Buttons";
import { FaAngleRight } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";
import Link from "next/link";
import Image from "next/image";

const BlogSection = ({ data }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    fade: false,
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
          <SectionHeading
            SectionSubtitle={data.sectionTitle}
            SectionTitle={data.sectionSubtitle || ''}
            variant={"text-center"}
          />
        )}

        <div className="cs_height_30 cs_height_lg_30" />
        <div className="cs_slider cs_style_1 cs_slider_gap_24">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              <Slider ref={sliderRef} {...settings}>
                {data.postsData.map((post, index) => (
                  <div
                    key={index}
                    className="cs_slide"
                    onMouseEnter={() => sliderRef.current?.slickPause()}
                    onMouseLeave={() => sliderRef.current?.slickPlay()}
                  >
                    <article className="cs_post cs_style_1 cs_post_clean">
                      <div className="cs_post_content position-relative">
                        <div className="cs_post_date">
                          {post.date}
                        </div>
                        <div className="cs_post_title_wrapper">
                          <h3 className="cs_post_title">
                            <Link href={post.postLink}>{post.title}</Link>
                          </h3>
                          {post.thumbnail && (
                            <Link
                              href={post.postLink}
                              className="cs_post_thumbnail_small"
                            >
                              <Image 
                                src={post.thumbnail} 
                                alt={post.title} 
                                width={100} 
                                height={80}
                              />
                            </Link>
                          )}
                        </div>
                        <Button
                          variant={"cs_post_btn"}
                          btnIcons={<FaAngleRight />}
                          btnUrl={post.postLink}
                          btnText={post.btnText}
                        />
                      </div>
                    </article>
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

export default BlogSection;
