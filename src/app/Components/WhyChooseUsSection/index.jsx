"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaCalendarAlt } from "react-icons/fa";
import Slider from "react-slick";
import { getAssetPathClient } from "../../utils/assetPath";

const WhyChooseUsSection = ({ data }) => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    fade: false,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: "cs_pagination cs_style_2",
  };

  // Desktop View (Original Layout)
  const DesktopView = () => (
    <>
      <div className="row cs_gap_y_40">
        {/* Top Row - Left: Family Image */}
        <div className="col-lg-6">
          <div className="cs_why_choose_image_wrapper">
            <Image
              src={getAssetPathClient(data.familyImage)}
              alt="Happy Family"
              width={600}
              height={500}
              className="cs_why_choose_image"
              loading="eager"
            />
          </div>
        </div>

        {/* Top Row - Right: Why Choose Us Content */}
        <div className="col-lg-6 d-flex align-items-center">
          <div className="cs_why_choose_content">
            <h2 className="cs_why_choose_heading">{data.whyChooseHeading}</h2>
            <p className="cs_why_choose_text">{data.whyChooseText}</p>
            <Link href={data.callUsLink || '/contact'} className="cs_why_choose_btn">
              <FaPhone className="cs_btn_icon" />
              <span>{data.callUsText || 'CALL US'}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="row cs_gap_y_40">
        {/* Bottom Row - Left: Self Cycle Content */}
        <div className="col-lg-6 d-flex align-items-center">
          <div className="cs_why_choose_content">
            <h2 className="cs_why_choose_heading">
              {data.selfCycleHeading.includes('™') ? (
                data.selfCycleHeading.split('™').map((part, index, arr) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < arr.length - 1 && <sup style={{ fontSize: '0.6em', marginLeft: '2px' }}>™</sup>}
                  </React.Fragment>
                ))
              ) : (
                <>
                  {data.selfCycleHeading}
                  <sup style={{ fontSize: '0.6em', marginLeft: '2px' }}>™</sup>
                </>
              )}
            </h2>
            <p className="cs_why_choose_text">{data.selfCycleText}</p>
            <Link href={data.bookAppointmentLink || '/contact/book-appointment'} className="cs_why_choose_btn">
              <FaCalendarAlt className="cs_btn_icon" />
              <span>{data.bookAppointmentText || 'BOOK AN APPOINTMENT'}</span>
            </Link>
          </div>
        </div>

        {/* Bottom Row - Right: Selfie Image with Speech Bubble */}
        <div className="col-lg-6">
          <div className="cs_why_choose_image_wrapper cs_relative">
            <Image
              src={getAssetPathClient(data.selfieImage)}
              alt="Self Cycle"
              width={600}
              height={500}
              className="cs_why_choose_image"
              loading="eager"
            />
            {data.speechBubbleText && (
              <div className="cs_speech_bubble">
                <p className="cs_speech_bubble_text">
                  {data.speechBubbleText.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < data.speechBubbleText.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  // Mobile View (Slider)
  const MobileView = () => (
    <div className="cs_why_choose_slider_wrapper">
      <div className="cs_slider cs_style_1">
        <div className="cs_slider_container">
          <div className="cs_slider_wrapper">
            <Slider ref={sliderRef} {...sliderSettings}>
              {/* Slide 1: Why Choose Us */}
              <div className="cs_slide">
                <div className="cs_why_choose_mobile_slide">
                  <div className="cs_why_choose_image_wrapper">
                    <Image
                      src={getAssetPathClient(data.familyImage)}
                      alt="Happy Family"
                      width={600}
                      height={400}
                      className="cs_why_choose_image"
                      loading="eager"
                    />
                  </div>
                  <div className="cs_why_choose_content">
                    <h2 className="cs_why_choose_heading">{data.whyChooseHeading}</h2>
                    <p className="cs_why_choose_text">{data.whyChooseText}</p>
                    <Link href={data.callUsLink || '/contact'} className="cs_why_choose_btn">
                      <FaPhone className="cs_btn_icon" />
                      <span>{data.callUsText || 'CALL US'}</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 2: Vision and Mission */}
              <div className="cs_slide">
                <div className="cs_why_choose_mobile_slide">
                  <div className="cs_why_choose_image_wrapper cs_relative">
                    <Image
                      src={getAssetPathClient(data.selfieImage)}
                      alt="Vision and Mission"
                      width={600}
                      height={400}
                      className="cs_why_choose_image"
                      loading="eager"
                    />
                    {data.speechBubbleText && (
                      <div className="cs_speech_bubble">
                        <p className="cs_speech_bubble_text">
                          {data.speechBubbleText.split('\n').map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < data.speechBubbleText.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="cs_why_choose_content">
                    <h2 className="cs_why_choose_heading">
                      {data.selfCycleHeading.includes('™') ? (
                        data.selfCycleHeading.split('™').map((part, index, arr) => (
                          <React.Fragment key={index}>
                            {part}
                            {index < arr.length - 1 && <sup style={{ fontSize: '0.6em', marginLeft: '2px' }}>™</sup>}
                          </React.Fragment>
                        ))
                      ) : (
                        <>
                          {data.selfCycleHeading}
                          <sup style={{ fontSize: '0.6em', marginLeft: '2px' }}>™</sup>
                        </>
                      )}
                    </h2>
                    <p className="cs_why_choose_text">{data.selfCycleText}</p>
                    <Link href={data.bookAppointmentLink || '/contact/book-appointment'} className="cs_why_choose_btn">
                      <FaCalendarAlt className="cs_btn_icon" />
                      <span>{data.bookAppointmentText || 'BOOK AN APPOINTMENT'}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container">
        {/* Desktop View */}
        <div className="cs_why_choose_desktop_view">
          <DesktopView />
        </div>

        {/* Mobile View */}
        <div className="cs_why_choose_mobile_view">
          <MobileView />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSection;

