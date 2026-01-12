"use client"
import { FaAngleDoubleRight } from 'react-icons/fa';
import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getAssetPathClient } from '../../utils/assetPath';

const Service = ({ data, cardBg }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const servicesPerSlide = 5;
  const servicesPerSlideMobile = 3;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate total slides for desktop
  const totalSlides = Math.ceil((data?.services?.length || 0) / servicesPerSlide);
  
  // Calculate total slides for mobile
  const totalMobileSlides = Math.ceil((data?.services?.length || 0) / servicesPerSlideMobile);

  // Get services for current slide (desktop)
  const getCurrentSlideServices = () => {
    const start = currentSlide * servicesPerSlide;
    const end = start + servicesPerSlide;
    return data?.services?.slice(start, end) || [];
  };
  
  // Get services for current mobile slide
  const getCurrentMobileSlideServices = () => {
    const start = currentMobileSlide * servicesPerSlideMobile;
    const end = start + servicesPerSlideMobile;
    return data?.services?.slice(start, end) || [];
  };

  // Handle next slide
  const handleNext = () => {
    setCurrentSlide((prev) => {
      const newSlide = (prev + 1) % totalSlides;
      // Update selected service to first service of new slide
      setSelectedServiceIndex(newSlide * servicesPerSlide);
      return newSlide;
    });
  };

  // Handle previous slide
  const handlePrev = () => {
    setCurrentSlide((prev) => {
      const newSlide = (prev - 1 + totalSlides) % totalSlides;
      // Update selected service to first service of new slide
      setSelectedServiceIndex(newSlide * servicesPerSlide);
      return newSlide;
    });
  };

  // Handle slide indicator click
  const handleSlideClick = (index) => {
    setCurrentSlide(index);
    // Update selected service to first service of clicked slide
    setSelectedServiceIndex(index * servicesPerSlide);
  };
  
  // Handle mobile next slide
  const handleMobileNext = () => {
    setCurrentMobileSlide((prev) => {
      const newSlide = (prev + 1) % totalMobileSlides;
      // Update selected service to first service of new slide
      setSelectedServiceIndex(newSlide * servicesPerSlideMobile);
      return newSlide;
    });
  };

  // Handle mobile previous slide
  const handleMobilePrev = () => {
    setCurrentMobileSlide((prev) => {
      const newSlide = (prev - 1 + totalMobileSlides) % totalMobileSlides;
      // Update selected service to first service of new slide
      setSelectedServiceIndex(newSlide * servicesPerSlideMobile);
      return newSlide;
    });
  };

  // Handle service icon click
  const handleServiceClick = (index, e) => {
    e.preventDefault();
    setSelectedServiceIndex(index);
  };

  // Get selected service subtitle
  const getSelectedServiceSubtitle = () => {
    const selectedService = data?.services?.[selectedServiceIndex];
    return selectedService?.subtitle || '';
  };

  // Get selected service link
  const getSelectedServiceLink = () => {
    const selectedService = data?.services?.[selectedServiceIndex];
    return selectedService?.link || '/';
  };

  // Desktop View with Slider (5 services per slide)
  const DesktopView = () => {
    const currentServices = getCurrentSlideServices();
    // Find active service position in current slide (0-4)
    const activePositionInSlide = selectedServiceIndex >= currentSlide * servicesPerSlide && 
                                  selectedServiceIndex < (currentSlide + 1) * servicesPerSlide
                                  ? selectedServiceIndex - (currentSlide * servicesPerSlide)
                                  : 0;
    
    return (
      <>
        <div className="cs_service_slider_container">
          <div className="cs_service_slider_wrapper">
            <div className="cs_service_slider_slide">
              {currentServices.map((service, index) => {
                const globalIndex = currentSlide * servicesPerSlide + index;
                const isSelected = globalIndex === selectedServiceIndex;
                
                return (
                  <div key={globalIndex} className="cs_service_slider_item">
                    <div className="cs_service_simple_item">
                      <div 
                        className="cs_service_simple_link_wrapper"
                        onClick={(e) => handleServiceClick(globalIndex, e)}
                      >
                        <div className="cs_service_simple_link">
                          <div 
                            className={`cs_service_simple_icon ${isSelected ? 'cs_service_icon_active' : ''}`}
                          >
                            <Image 
                              src={getAssetPathClient(service.iconUrl)} 
                              alt={service.title} 
                              width={80} 
                              height={80}
                              loading="eager"
                            />
                          </div>
                          <h4 className="cs_service_simple_title">{service.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Single Continuous Line */}
          <div className="cs_service_single_line">
            <div 
              className="cs_service_single_line_active"
              style={{
                width: `${100 / servicesPerSlide}%`,
                left: `${(activePositionInSlide / servicesPerSlide) * 100}%`,
              }}
            />
          </div>
          
          {/* Slider Navigation */}
          {totalSlides > 1 && (
            <div className="cs_service_slider_navigation">
              {/* Show Previous button only when NOT on first slide */}
              {currentSlide > 0 && (
                <button 
                  className="cs_service_slider_btn cs_service_slider_btn_prev"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#CCC968">
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      <polyline fill="none" stroke="#CCC968" strokeWidth="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"></polyline>
                    </g>
                  </svg>
                </button>
              )}
              {/* Show Next button only when NOT on last slide */}
              {currentSlide < totalSlides - 1 && (
                <button 
                  className="cs_service_slider_btn cs_service_slider_btn_next"
                  onClick={handleNext}
                  aria-label="Next slide"
                >
                  <svg fill="#CCC968" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve">
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      <g>
                        <g>
                          <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
        
        {/* Subtitle Rectangle Box */}
        <div className="cs_service_subtitle_box">
          <p className="cs_service_subtitle_text">{getSelectedServiceSubtitle()}</p>
          <Link href={getSelectedServiceLink()} className="cs_service_learn_more_link">
            Learn More
            <span>
              <i>
                <FaAngleDoubleRight />
              </i>
            </span>
          </Link>
        </div>
      </>
    );
  };

  // Mobile View with Slider (3 services per slide)
  const MobileView = () => {
    const currentServices = getCurrentMobileSlideServices();
    // Find active service position in current mobile slide (0-2)
    const activePositionInSlide = selectedServiceIndex >= currentMobileSlide * servicesPerSlideMobile && 
                                  selectedServiceIndex < (currentMobileSlide + 1) * servicesPerSlideMobile
                                  ? selectedServiceIndex - (currentMobileSlide * servicesPerSlideMobile)
                                  : 0;
    
    return (
      <>
        <div className="cs_service_slider_container">
          <div className="cs_service_slider_wrapper">
            <div className="cs_service_slider_slide cs_service_slider_slide_mobile">
              {currentServices.map((service, index) => {
                const globalIndex = currentMobileSlide * servicesPerSlideMobile + index;
                const isSelected = globalIndex === selectedServiceIndex;
                
                return (
                  <div key={globalIndex} className="cs_service_slider_item cs_service_slider_item_mobile">
                    <div className="cs_service_simple_item">
                      <div 
                        className="cs_service_simple_link_wrapper"
                        onClick={(e) => handleServiceClick(globalIndex, e)}
                      >
                        <div className="cs_service_simple_link">
                          <div 
                            className={`cs_service_simple_icon ${isSelected ? 'cs_service_icon_active' : ''}`}
                          >
                            <Image 
                              src={getAssetPathClient(service.iconUrl)} 
                              alt={service.title} 
                              width={80} 
                              height={80}
                              loading="eager"
                            />
                          </div>
                          <h4 className="cs_service_simple_title">{service.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Single Continuous Line for Mobile */}
          <div className="cs_service_single_line">
            <div 
              className="cs_service_single_line_active"
              style={{
                width: `${100 / servicesPerSlideMobile}%`,
                left: `${(activePositionInSlide / servicesPerSlideMobile) * 100}%`,
              }}
            />
          </div>
          
          {/* Slider Navigation for Mobile */}
          {totalMobileSlides > 1 && (
            <div className="cs_service_slider_navigation cs_service_slider_navigation_mobile">
              {/* Show Previous button only when NOT on first slide */}
              {currentMobileSlide > 0 && (
                <button 
                  className="cs_service_slider_btn cs_service_slider_btn_prev"
                  onClick={handleMobilePrev}
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#CCC968">
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      <polyline fill="none" stroke="#CCC968" strokeWidth="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"></polyline>
                    </g>
                  </svg>
                </button>
              )}
              {/* Show Next button only when NOT on last slide */}
              {currentMobileSlide < totalMobileSlides - 1 && (
                <button 
                  className="cs_service_slider_btn cs_service_slider_btn_next"
                  onClick={handleMobileNext}
                  aria-label="Next slide"
                >
                  <svg fill="#CCC968" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve">
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      <g>
                        <g>
                          <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
        
        {/* Subtitle Rectangle Box for Mobile */}
        <div className="cs_service_subtitle_box">
          <p className="cs_service_subtitle_text">{getSelectedServiceSubtitle()}</p>
          <Link href={getSelectedServiceLink()} className="cs_service_learn_more_link">
            Learn More
            <span>
              <i>
                <FaAngleDoubleRight />
              </i>
            </span>
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        {/* Title Section - "OUR SERVICES" */}
        <div className="cs_service_title_section">
          <h2 className="cs_service_main_title">OUR SERVICES</h2>
        </div>
        <div className="cs_height_30 cs_height_lg_30" />
        
        {/* Desktop View with Slider */}
        <div className="cs_service_desktop_view">
          <DesktopView />
        </div>

        {/* Mobile View */}
        <div className="cs_service_mobile_view">
          <MobileView />
        </div>

        {data.footerText && data.footerLink && (
          <div className="cs_service_footer" data-aos="fade-up">
            <div className="cs_service_footer_text cs_medium">
              <span dangerouslySetInnerHTML={{ __html: data.footerText }} />
              <Link href={data.footerLink}>
                {data.footerLinkText}
                <span>
                  <i>
                    <FaAngleDoubleRight />
                  </i>
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Service;
