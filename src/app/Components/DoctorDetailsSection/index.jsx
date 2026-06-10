'use client';
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/app/utils/assetPath";
import AccentHeading from '@/app/Components/AccentHeading';
import DoctorSubtitle from '@/app/Components/DoctorSubtitle';
import {
  FaLocationDot,
  FaSuitcase,
  FaGraduationCap,
  FaGlobe,
} from 'react-icons/fa6';

function getYoutubeVideoId(url) {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url.split('youtube.com/embed/')[1]?.split(/[?&]/)[0] || '';
  if (url.includes('youtube.com/watch?v=')) return url.split('v=')[1]?.split('&')[0] || '';
  if (url.includes('youtu.be/')) return url.split('youtu.be/')[1]?.split(/[?&]/)[0] || '';
  return '';
}

function getVideoSource(video) {
  if (!video) return '';
  if (typeof video === 'string') return video;
  if (video.videoId) return `https://www.youtube.com/embed/${video.videoId}`;
  return video.url || video.link || video.videoUrl || '';
}

function getYoutubeWatchUrl(video) {
  if (!video) return '#';
  if (typeof video === 'string') return video;
  if (video.link || video.url || video.videoUrl) return video.link || video.url || video.videoUrl;
  if (video.videoId) return `https://www.youtube.com/watch?v=${video.videoId}`;
  return '#';
}

const DoctorDetailsSection = ({ data }) => {
  const youtubeVideos = data.youtubeVideos || [];

  return (
    <div className="container">
      <div className="cs_doctor_details_wrapper">
        <div className="row cs_gap_y_40">
          {/* Left Main Content */}
          <div className="col-lg-8">
            {/* Back to All Doctors Link */}
            <Link href="/ivf-doctor" className="cs_back_link">
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
                    <DoctorSubtitle text={data.subtitle} className="cs_doctor_subtitle" />
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
                  <AccentHeading level={3} className="cs_section_title_small">Awards & Publications</AccentHeading>
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

              {/* Doctor YouTube Videos Section */}
              {youtubeVideos.length > 0 && (
                <div className="cs_other_doctors">
                  <AccentHeading level={3} className="cs_sidebar_title">Happy Patients</AccentHeading>
                  <div className="cs_other_doctors_list">
                    {youtubeVideos.map((video, index) => {
                      const videoSource = getVideoSource(video);
                      const videoLink = getYoutubeWatchUrl(video);
                      const videoId = getYoutubeVideoId(videoSource);
                      const thumbnailUrl = video.thumbnail || video.image || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : '');
                      const thumbnailSrc = thumbnailUrl && thumbnailUrl.startsWith('/') ? getAssetPath(thumbnailUrl) : thumbnailUrl;
                      const videoTitle = video.title || `Video ${index + 1}`;

                      return (
                        <a
                          href={videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={`${videoTitle}-${index}`}
                          className="cs_other_doctor_item"
                        >
                          {thumbnailSrc && (
                            <Image
                              src={thumbnailSrc}
                              alt={videoTitle}
                              width={80}
                              height={80}
                              className="cs_other_doctor_image"
                              loading="lazy"
                            />
                          )}
                          <div className="cs_other_doctor_info">
                            <h4>{videoTitle}</h4>
                          </div>
                        </a>
                      );
                    })}
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
