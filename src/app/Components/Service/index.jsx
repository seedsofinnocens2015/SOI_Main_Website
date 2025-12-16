"use client"
import { FaAngleDoubleRight } from 'react-icons/fa';
import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getAssetPathClient } from '../../utils/assetPath';

const Service = ({ data, cardBg }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop View (Original Grid)
  const DesktopView = () => (
    <div className="row cs_service_simple_grid">
      {data?.services.map((service, index) => (
        <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
          <div 
            className="cs_service_simple_item"
            onMouseEnter={() => setHoveredServiceIndex(index)}
            onMouseLeave={() => setHoveredServiceIndex(null)}
            style={{ position: 'relative' }}
          >
            <Link href={service.link} className="cs_service_simple_link">
              <div className="cs_service_simple_icon">
                <Image 
                  src={getAssetPathClient(service.iconUrl)} 
                  alt={service.title} 
                  width={40} 
                  height={40}
                  loading="eager"
                />
              </div>
              <h4 className="cs_service_simple_title">{service.title}</h4>
            </Link>
            {service.subtitle && hoveredServiceIndex === index && (
              <div
                className="cs_service_tooltip"
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginBottom: '10px',
                  padding: '12px 16px',
                  backgroundColor: '#fff',
                  color: '#333',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  maxWidth: '280px',
                  width: 'max-content',
                  zIndex: 1000,
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                  border: '1px solid #e8e8e8',
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '8px solid #fff',
                  }}
                />
                {service.subtitle}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  // Mobile View (3x3 Grid - No Slider)
  const MobileView = () => (
    <div className="row cs_service_simple_grid cs_service_mobile_grid">
      {data?.services.map((service, index) => (
        <div key={index} className="col-4">
          <div 
            className="cs_service_simple_item"
            onMouseEnter={() => setHoveredServiceIndex(index)}
            onMouseLeave={() => setHoveredServiceIndex(null)}
            onTouchStart={() => setHoveredServiceIndex(index)}
            style={{ position: 'relative' }}
          >
            <Link href={service.link} className="cs_service_simple_link">
              <div className="cs_service_simple_icon">
                <Image 
                  src={getAssetPathClient(service.iconUrl)} 
                  alt={service.title} 
                  width={40} 
                  height={40}
                  loading="eager"
                />
              </div>
              <h4 className="cs_service_simple_title">{service.title}</h4>
            </Link>
            {service.subtitle && hoveredServiceIndex === index && (
              <div
                className="cs_service_tooltip"
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginBottom: '10px',
                  padding: '12px 16px',
                  backgroundColor: '#fff',
                  color: '#333',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  maxWidth: isMobile ? '90vw' : '280px',
                  width: isMobile ? 'auto' : 'max-content',
                  zIndex: 1000,
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                  border: '1px solid #e8e8e8',
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '8px solid #fff',
                  }}
                />
                {service.subtitle}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

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
        
        {/* Desktop View */}
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
