"use client"
import { useState } from "react";
import Slider from "react-slick";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import SectionHeading from "../SectionHeading";

const TestimonialSection = ({ data }) => {
  const [rating, setRating] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `cs_pagination cs_style_2 cs_accent_color cs_flex_left`,
  };

  // Get current video URL based on slide index
  const getCurrentVideoUrl = () => {
    if (data.testimonials && data.testimonials[currentSlide] && data.testimonials[currentSlide].videoUrl) {
      const videoUrl = data.testimonials[currentSlide].videoUrl;
      // Convert YouTube URL to embed format if needed
      if (videoUrl.includes('youtube.com/watch?v=')) {
        const videoId = videoUrl.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      } else if (videoUrl.includes('youtu.be/')) {
        const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      } else if (videoUrl.includes('youtube.com/embed/')) {
        return videoUrl;
      }
      return videoUrl;
    }
    return null;
  };

  return (
    <>
      <div className="container">
        {data.subtitle && (
          <SectionHeading
            variant={'text-center'}
            SectionTitle={data.title || ''}
            SectionSubtitle={data.subtitle}
            SectionDescription={data.description || ''}
          />
        )}
        <div className="cs_height_30 cs_height_lg_30" />
        <div className="row cs_gap_y_50 align-items-center">
          <div className="col-lg-5" data-aos="fade-left">
            <div className="cs_testimonial_thumbnail">
              {getCurrentVideoUrl() ? (
                <iframe
                  key={currentSlide}
                  width="100%"
                  height="463"
                  src={getCurrentVideoUrl()}
                  title="Testimonial Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '10px' }}
                />
              ) : (
                <Image src={data.thumbnail} alt="img" width={484} height={463} />
              )}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cs_testimonial_content">
              <div className="cs_slider cs_style_1 cs_slider_gap_24 position-relative">
                <div className="cs_slider_container">
                  <div className="cs_slider_wrapper">
                    <Slider {...settings}>
                      {data.testimonials.map((testimonial, index) => (
                        <div key={index} className="cs_slide">
                          <div className="cs_testimonial cs_style_1">
                            <div className="cs_testimonial_info">
                              <div className="cs_rating_container">
                                <Rating
                                  style={{ maxWidth: 150 }}
                                  value={testimonial.rating}
                                  onChange={() => setRating(testimonial.rating)}
                                  isRequired
                                />
                              </div>
                              <p className="cs_testimonial_subtitle">
                                {testimonial.subtitle}
                              </p>
                            </div>
                            <div className="cs_avatar cs_style_1">
                              <div className="cs_avatar_thumbnail cs_center">
                              <Image src={testimonial.avatar} alt="img" width={73} height={73}   />
                              </div>
                              <div className="cs_avatar_info">
                                <h3 className="cs_avatar_title">
                                  {testimonial.name}
                                </h3>
                                <p className="cs_avatar_subtitle mb-0">
                                  {testimonial.position}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
