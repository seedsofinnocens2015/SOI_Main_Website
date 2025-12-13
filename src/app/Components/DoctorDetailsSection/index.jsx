'use client';
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/app/utils/assetPath";
import {
  FaLocationDot,
  FaSuitcase,
  FaCertificate,
  FaGlobe,
} from 'react-icons/fa6';

const DoctorDetailsSection = ({ data, otherDoctors }) => {
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
                <div className="col-md-4">
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
                <div className="col-md-8">
                  <div className="cs_doctor_info_header">
                    <h2 className="cs_doctor_title">{data.name}</h2>
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
                        <i><FaCertificate /></i>
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
              <h3 className="cs_section_title_small">About</h3>
              {data.description && data.description.map((desc, index) => (
                <p key={index} className="cs_text_style_1">
                  {desc}
                </p>
              ))}
            </div>

            {/* Performance Statistics */}
            {data.progressBars && data.progressBars.length > 0 && (
              <div className="cs_performance_stats">
                <h3 className="cs_section_title_small">Performance Statistics</h3>
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
            )}

            {/* Work Experience */}
            {data.workExperience && (
              <div className="cs_work_experience">
                <div className="cs_section_header">
                  <h3 className="cs_section_title_small">Work Experience</h3>
                </div>
                <p className="cs_text_style_1">{data.workExperience}</p>
              </div>
            )}

            {/* Education & Training */}
            {data.education && data.education.length > 0 && (
              <div className="cs_education">
                <div className="cs_section_header">
                  <h3 className="cs_section_title_small">Education & Training</h3>
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
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4">
            <div className="cs_sidebar_sticky_wrapper">
              {/* Book Appointment Card */}
              <div className="cs_appointment_card">
                <h3>Book an Appointment</h3>
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
                  <h3 className="cs_sidebar_title">Other Doctors</h3>
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
