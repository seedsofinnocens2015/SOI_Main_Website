"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaStar, FaCheckCircle, FaClock, FaHeart } from 'react-icons/fa';

const headingData = {
  title: 'Feedback',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Share Your Feedback',
      paragraphs: [
        'Your feedback helps us improve our services and provide better care. We value your opinion and would love to hear about your experience with Seeds of Innocens. Your insights help us enhance patient care and continue delivering excellence in fertility treatment.',
      ],
      // sideImage: '/assets/img/recent_post2.jpg',
    },
  ],
};

const page = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Content Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={ivfContentData} />
            </div>
          </div>
        </div>
      </Section>

      {/* Feedback Form Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">

          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#ffffff', 
                borderRadius: '12px',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e8e8e8',
                marginBottom: '30px'
              }}>
                <h2 className="cs_ivf_content_heading" style={{ marginBottom: '30px' }}>
                  Feedback Form
                </h2>
                
                <form className="cs_contact_form">
                  <div className="row cs_gap_y_30">
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Your Name <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Email Address <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone (optional)"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Center Visited
                      </label>
                      <select name="center" className="cs_form_field">
                        <option value="">Select center (optional)</option>
                        <option value="delhi">Malviya Nagar, Delhi</option>
                        <option value="gurugram">Gurugram, Haryana</option>
                        <option value="kolkata">Kolkata, West Bengal</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Feedback Type <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <select name="feedbackType" required className="cs_form_field">
                        <option value="">Select feedback type</option>
                        <option value="compliment">Compliment</option>
                        <option value="suggestion">Suggestion</option>
                        <option value="complaint">Complaint</option>
                        <option value="testimonial">Testimonial</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Overall Rating <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <label 
                            key={star} 
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            onClick={() => setRating(star)}
                          >
                            <input 
                              type="radio" 
                              name="rating" 
                              value={star} 
                              required 
                              style={{ display: 'none' }}
                              checked={rating === star}
                              onChange={() => setRating(star)}
                            />
                            <FaStar 
                              style={{ 
                                fontSize: '30px',
                                color: (hoveredRating >= star || rating >= star) ? '#FFD700' : '#ddd',
                                transition: 'color 0.2s ease'
                              }} 
                            />
                          </label>
                        ))}
                      </div>
                      <small style={{ color: '#666', fontSize: '14px' }}>
                        Click on stars to rate (1 = Poor, 5 = Excellent)
                      </small>
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Your Feedback <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <textarea
                        rows="6"
                        name="feedback"
                        required
                        placeholder="Please share your detailed feedback, suggestions, or experience with us..."
                        className="cs_form_field"
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                    <div className="col-md-12">
                      <label style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start',
                        cursor: 'pointer',
                        gap: '10px'
                      }}>
                        <input
                          type="checkbox"
                          name="agree"
                          required
                          style={{ marginTop: '4px', width: '18px', height: '18px', flexShrink: 0 }}
                        />
                        <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                          I agree to share my feedback and allow Seeds of Innocens to use it for improvement purposes.
                        </span>
                      </label>
                    </div>
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="cs_btn cs_style_1 cs_color_1"
                        style={{ width: '100%' }}
                      >
                        <span>Submit Feedback</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div style={{ 
                padding: '30px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '12px',
                borderLeft: '4px solid #E45352'
              }}>
                <h3 className="cs_ivf_content_heading" style={{ fontSize: '24px', marginBottom: '20px' }}>
                  How We Use Your Feedback
                </h3>
                <ul className="cs_list cs_list_style_1">
                  <li>Improve our services and patient care quality</li>
                  <li>Train our staff based on your valuable insights</li>
                  <li>Address concerns and resolve issues promptly</li>
                  <li>Share success stories (with your permission)</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  textAlign: 'center'
                }}>
                  <FaHeart style={{ fontSize: '50px', color: '#E45352', marginBottom: '15px' }} />
                  <h3 className="cs_widget_title" style={{ marginBottom: '15px' }}>Thank You!</h3>
                  <p style={{ marginBottom: '0', fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                    We truly appreciate you taking the time to share your feedback. Your input helps us serve you better and improve our services for all our patients.
                  </p>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg mb-4" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Response Time</h3>
                  <p style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.6' }}>
                    We review all feedback and respond within:
                  </p>
                  <ul className="cs_list cs_list_style_1">
                    <li>
                      <strong>Compliments:</strong><br />
                      Thank you message within 24 hours
                    </li>
                    <li>
                      <strong>Suggestions:</strong><br />
                      Review and response within 3-5 days
                    </li>
                    <li>
                      <strong>Complaints:</strong><br />
                      Immediate acknowledgment and resolution within 48 hours
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Other Ways to Connect</h3>
                  <ul className="cs_list cs_list_style_1">
                    <li>
                      <Link href="/contact/book-appointment" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Book Appointment
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/whatsapp" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        WhatsApp Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/success-stories" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Share Success Story
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

