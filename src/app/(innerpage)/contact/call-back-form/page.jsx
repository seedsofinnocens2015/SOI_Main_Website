"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';

const headingData = {
  title: 'Call Back Form',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Request a Call Back',
      paragraphs: [
        'Fill out the form below and our team will call you back at your preferred time. We&apos;ll answer all your questions and help you understand your fertility treatment options. Our expert team is dedicated to providing personalized guidance and support throughout your fertility journey.',
      ],
      // sideImage: '/assets/img/recent_post2.jpg',
    },
  ],
};

const Page = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const API_BASE_URL = 'https://soi.seedsofinnocens.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      callTime: formData.get('callTime'),
      date: formData.get('date'),
      reason: formData.get('reason'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/new-website/call-back-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.ok) {
        router.push('/contact/thank-you?type=call-back');
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Network error. Please check your connection and try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
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

      {/* Call Back Form Section */}
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
                border: '1px solid #e8e8e8'
              }}>
                <h2 className="cs_ivf_content_heading" style={{ marginBottom: '30px' }}>
                  Call Back Request Form
                </h2>
                
                {error && (
                  <div style={{
                    padding: '12px 16px',
                    backgroundColor: '#fee',
                    border: '1px solid #fcc',
                    borderRadius: '6px',
                    marginBottom: '20px',
                    color: '#c33'
                  }}>
                    {error}
                  </div>
                )}

                <form className="cs_contact_form" onSubmit={handleSubmit}>
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
                        Phone Number <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Enter your phone number"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email (optional)"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Preferred Call Time <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <select name="callTime" required className="cs_form_field">
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 7 PM)</option>
                        <option value="anytime">Anytime</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Reason for Call
                      </label>
                      <select name="reason" className="cs_form_field">
                        <option value="">Select reason</option>
                        <option value="consultation">General Consultation</option>
                        <option value="treatment">Treatment Information</option>
                        <option value="cost">Cost & Package Details</option>
                        <option value="appointment">Book Appointment</option>
                        <option value="followup">Follow-up Query</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        placeholder="Tell us what you'd like to discuss or any specific questions you have"
                        className="cs_form_field"
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="cs_btn cs_style_1 cs_color_1"
                        style={{ width: '100%' }}
                        disabled={isSubmitting}
                      >
                        <span>{isSubmitting ? 'Submitting...' : 'Request Call Back'}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div style={{ 
                padding: '30px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '12px',
                marginTop: '30px',
                borderLeft: '4px solid #E45352'
              }}>
                <h3 className="cs_ivf_content_heading" style={{ fontSize: '24px', marginBottom: '20px' }}>
                  What Happens Next?
                </h3>
                <ul className="cs_list cs_list_style_1">
                  <li><strong>Submit Form:</strong> Fill out the form above with your details</li>
                  <li><strong>Confirmation:</strong> You&apos;ll receive a confirmation message within minutes</li>
                  <li><strong>Our Call:</strong> Our specialist will call you at your preferred time</li>
                  <li><strong>Discussion:</strong> We&apos;ll answer all your questions and provide guidance</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Response Time</h3>
                  <p style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.6' }}>
                    We typically respond to call back requests within:
                  </p>
                  <ul className="cs_list cs_list_style_1">
                    <li>
                      <strong>Same Day:</strong><br />
                      For requests submitted before 2 PM
                    </li>
                    <li>
                      <strong>Next Day:</strong><br />
                      For requests submitted after 2 PM
                    </li>
                    <li>
                      <strong>Weekend:</strong><br />
                      Monday morning for weekend requests
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg mb-4" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Direct Contact</h3>
                  <p style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.6' }}>
                    Need immediate assistance? Contact us directly:
                  </p>
                  <div style={{ marginBottom: '15px' }}>
                    <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaPhoneAlt style={{ color: '#E45352', fontSize: '18px' }} />
                      <a href="tel:+91-9810350512" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        +91-9810350512
                      </a>
                    </p>
                    <p style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaEnvelope style={{ color: '#E45352', fontSize: '18px' }} />
                      <a href="mailto:info@seedsofinnocens.com" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        info@seedsofinnocens.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg" style={{ 
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>Other Options</h3>
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
                      <Link href="/contact/center-locator" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Find Center
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

export default Page;

