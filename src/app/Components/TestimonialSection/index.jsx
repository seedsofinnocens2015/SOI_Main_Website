"use client"
import Image from "next/image";
import { getAssetPathClient } from "../../utils/assetPath";

const StarIcon = () => (
  <svg viewBox="0 -0.5 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#df3655" width="20" height="20">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <title>star</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Vivid.JS" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Vivid-Icons" transform="translate(-903.000000, -411.000000)" fill="#df3655">
          <g id="Icons" transform="translate(37.000000, 169.000000)">
            <g id="star" transform="translate(858.000000, 234.000000)">
              <g transform="translate(7.000000, 8.000000)" id="Shape">
                <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22"></polygon>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const CARD_BG_COLORS = ['#9de3e3', '#f0d473', '#99ade0'];

const TestimonialSection = ({ data }) => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...data.testimonials, ...data.testimonials];

  return (
    <>
      <div className="container">
        {data.sectionTitle && (
          <div className="cs_service_title_section">
            <h1 className="cs_service_main_title">
              {typeof data.sectionTitle === 'object' && data.sectionTitle.part1 ? (
                <>
                  <span className="cs_news_media_main_title" style={{ color: '#df3655' }}>
                    {data.sectionTitle.part1}
                  </span>{' '}
                  <span style={{ color: '#000000' }}>{data.sectionTitle.part2}</span>
                </>
              ) : (
                data.sectionTitle
              )}
            </h1>
            {data.sectionSubtitle && (
              <div
                style={{
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  color: '#555555',
                  fontWeight: '700',
                  textAlign: 'center',
                  textTransform: 'none',
                  marginTop: '10px',
                  display: 'block',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {typeof data.sectionSubtitle === 'object' && data.sectionSubtitle.part1 ? (
                  <>
                    <div>{data.sectionSubtitle.part1}</div>
                    <div>{data.sectionSubtitle.part2}</div>
                  </>
                ) : (
                  data.sectionSubtitle
                )}
              </div>
            )}
          </div>
        )}
        <div className="cs_height_30 cs_height_lg_30" />
        <div className="cs_testimonial_marquee_wrapper">
          <div className="cs_testimonial_marquee">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="cs_testimonial_marquee_item">
                <div
                  className="cs_testimonial_card cs_testimonial_card_tinted"
                  style={{ backgroundColor: CARD_BG_COLORS[index % CARD_BG_COLORS.length] }}
                >
                  {/* Profile Picture */}
                  <div className="cs_testimonial_avatar_wrapper">
                    <div className="cs_testimonial_avatar">
                      <Image 
                        src={getAssetPathClient(testimonial.avatar)} 
                        alt={testimonial.name} 
                        width={80} 
                        height={80} 
                        loading="eager"
                      />
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="cs_testimonial_rating_wrapper">
                    {Array.from({ length: testimonial.rating || 5 }).map((_, starIndex) => (
                      <StarIcon key={starIndex} />
                    ))}
                  </div>
                  
                  {/* Name */}
                  <h3 className="cs_testimonial_name">
                    {testimonial.name}
                  </h3>
                  
                  {/* Testimonial Text */}
                  <p className="cs_testimonial_text">
                    {testimonial.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
