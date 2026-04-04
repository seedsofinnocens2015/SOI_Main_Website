'use client';
import { useMemo, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import Slider from 'react-slick';
import { getAssetPath } from "@/app/utils/assetPath";
import AccentHeading from '@/app/Components/AccentHeading';
import {
  FaLocationDot,
  FaSuitcase,
  FaGraduationCap,
  FaGlobe,
} from 'react-icons/fa6';

function getEmbedUrl(url) {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url;
  let videoId = '';
  if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1]?.split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  }
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
}

const DoctorDetailsSection = ({ data, otherDoctors }) => {
  const youtubeSliderRef = useRef(null);
  const youtubeVideos = data.youtubeVideos || [];

  const youtubeSliderSettings = useMemo(() => {
    const n = youtubeVideos.length;
    return {
      dots: n > 1,
      infinite: n > 2,
      speed: 1000,
      slidesToShow: n >= 2 ? 2 : 1,
      slidesToScroll: 1,
      fade: false,
      swipeToSlide: true,
      autoplay: n > 2,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      pauseOnFocus: true,
      pauseOnDotsHover: true,
      appendDots: (dots) => (
        <div>
          <ul>{dots}</ul>
        </div>
      ),
      dotsClass: 'cs_pagination cs_style_2',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: Math.min(2, n),
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }, [youtubeVideos.length]);

  return (
    <div className="container">
      <div className="cs_doctor_details_wrapper">
        <div className="row cs_gap_y_40">
          {/* Left Main Content */}
          <div className="col-lg-8">
            {/* Back to All Doctors Link */}
            <Link href="/doctors" className="cs_back_link">
              ← Back to All Doctors
            </Link>

            {/* Doctor Image and Basic Info Card */}
            <div className="cs_doctor_info_card">
              <div className="row cs_row_gap_30 cs_gap_y_30">
                <div className="col-md-4 order-2 order-md-1">
                  <div className="cs_doctor_details_thumbnail">
                    <Image 
                      src={getAssetPath(data.image)} 
                      alt={data.name} 
                      width={300} 
                      height={400} 
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="col-md-8 order-1 order-md-2">
                  <div className="cs_doctor_info_header">
                    <AccentHeading level={2} className="cs_doctor_title">{data.name}</AccentHeading>
                    <p className="cs_doctor_subtitle">{data.subtitle}</p>
                  </div>
                  
                  {/* 4 Info Items in 2x2 Grid */}
                  <div className="cs_doctor_info_wrapper">
                    <div className="cs_iconbox cs_style_10">
                      <div className="cs_iconbox_icon">
                        <i><FaLocationDot /></i>
                      </div>
                      <div className="cs_iconbox_text">
                        <h4 className="cs_iconbox_title">Location</h4>
                        <p className="cs_iconbox_subtitle mb-0">{data.location}</p>
                      </div>
                    </div>
                    <div className="cs_iconbox cs_style_10">
                      <div className="cs_iconbox_icon">
                        <i><FaSuitcase /></i>
                      </div>
                      <div className="cs_iconbox_text">
                        <h4 className="cs_iconbox_title">Experience</h4>
                        <p className="cs_iconbox_subtitle mb-0">{data.experience}</p>
                      </div>
                    </div>
                    <div className="cs_iconbox cs_style_10">
                      <div className="cs_iconbox_icon">
                        <i><FaGraduationCap /></i>
                      </div>
                      <div className="cs_iconbox_text">
                        <h4 className="cs_iconbox_title">Qualification</h4>
                        <p className="cs_iconbox_subtitle mb-0">{data.qualification}</p>
                      </div>
                    </div>
                    <div className="cs_iconbox cs_style_10">
                      <div className="cs_iconbox_icon">
                        <i><FaGlobe /></i>
                      </div>
                      <div className="cs_iconbox_text">
                        <h4 className="cs_iconbox_title">Specialization</h4>
                        <p className="cs_iconbox_subtitle mb-0">{data.specialization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="cs_about_section">
              <AccentHeading level={3} className="cs_section_title_small">About</AccentHeading>
              {data.description && data.description.map((desc, index) => (
                <p key={index} className="cs_text_style_1">
                  {desc}
                </p>
              ))}
            </div>

            {/* Performance Statistics */}
            {/* {data.progressBars && data.progressBars.length > 0 && (
              <div className="cs_performance_stats">
                <AccentHeading level={3} className="cs_section_title_small">Performance Statistics</AccentHeading>
                <div className="cs_progress_bar_wrapper">
                  {data.progressBars.map((progress, index) => (
                    <div className="cs_progress_item" key={index}>
                      <div className="cs_progress_head">
                        <span>{progress.label}</span>
                        <span>{progress.percentage}%</span>
                      </div>
                      <div className="cs_progress">
                        <div
                          className="cs_progress_in"
                          style={{ width: `${progress.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )} */}

            {/* Work Experience */}
            {data.workExperience && (
              <div className="cs_work_experience">
                <div className="cs_section_header">
                  <AccentHeading level={3} className="cs_section_title_small">Work Experience</AccentHeading>
                </div>
                {Array.isArray(data.workExperience) ? (
                  <ul className="cs_education_list">
                    {data.workExperience.map((exp, index) => (
                      <li key={index}>
                        <span className="cs_education_number">{index + 1}.</span>
                        {exp}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="cs_text_style_1">{data.workExperience}</p>
                )}
              </div>
            )}

            {/* Education & Training */}
            {data.education && data.education.length > 0 && (
              <div className="cs_education">
                <div className="cs_section_header">
                  <AccentHeading level={3} className="cs_section_title_small">Education & Training</AccentHeading>
                </div>
                <ul className="cs_education_list">
                  {data.education.map((edu, index) => (
                    <li key={index}>
                      <span className="cs_education_number">{index + 1}.</span>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Awards */}
            {data.awards && data.awards.length > 0 && (
              <div className="cs_awards">
                <div className="cs_section_header">
                  <AccentHeading level={3} className="cs_section_title_small">Awards</AccentHeading>
                </div>
                <ul className="cs_education_list">
                  {data.awards.map((award, index) => (
                    <li key={index}>
                      <span className="cs_education_number">{index + 1}.</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* YouTube videos — react-slick autoplay, same pattern as home / centre */}
            {youtubeVideos.length > 0 && (
              <div className="cs_youtube_video">
                <AccentHeading level={3} className="cs_section_title_small">
                  {youtubeVideos.length > 1 ? 'YouTube Videos' : 'YouTube Video'}
                </AccentHeading>
                <div className="cs_slider cs_style_1 cs_slider_gap_24">
                  <div className="cs_slider_container">
                    <div className="cs_slider_wrapper">
                      <Slider ref={youtubeSliderRef} {...youtubeSliderSettings}>
                        {youtubeVideos.map((video, index) => (
                          <div
                            key={index}
                            className="cs_slide"
                            onMouseEnter={() => youtubeSliderRef.current?.slickPause()}
                            onMouseLeave={() => youtubeSliderRef.current?.slickPlay()}
                          >
                            <div className="cs_news_media_item">
                              <div className="cs_news_media_video">
                                <iframe
                                  src={getEmbedUrl(video.url)}
                                  title={video.title || `Video ${index + 1}`}
                                  frameBorder={0}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4">
            <div className="cs_sidebar_sticky_wrapper">
              {/* Book Appointment Card */}
              <div className="cs_appointment_card">
                <AccentHeading level={3}>Book an Appointment</AccentHeading>
                <p>
                  Schedule a consultation with <span className="cs_doctor_name">{data.name.split(' ').slice(1).join(' ')}</span> to discuss your fertility journey.
                </p>
                <Link 
                  href="/contact/book-appointment" 
                  className="cs_btn cs_style_1 cs_appointment_btn"
                >
                  Book Appointment
                </Link>
              </div>

              {/* Other Doctors Section */}
              {otherDoctors && otherDoctors.length > 0 && (
                <div className="cs_other_doctors">
                  <AccentHeading level={3} className="cs_sidebar_title">Other Doctor's</AccentHeading>
                  <div className="cs_other_doctors_list">
                    {otherDoctors.map((doctor, index) => (
                      <Link 
                        key={index} 
                        href={doctor.link}
                        className="cs_other_doctor_item"
                      >
                        <Image 
                          src={getAssetPath(doctor.imageUrl)} 
                          alt={doctor.name} 
                          width={80} 
                          height={80}
                          className="cs_other_doctor_image"
                        />
                        <div className="cs_other_doctor_info">
                          <h4>{doctor.name}</h4>
                          <p className="cs_other_doctor_profession">{doctor.profession}</p>
                          <p className="cs_other_doctor_experience">{doctor.experience || 'Experience'}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsSection;
