"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitBookAppointment } from '@/app/utils/websiteForms';
import { getThankYouUrl, THANK_YOU_TYPE } from '@/app/utils/thankYou';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaClock, FaGlobe } from 'react-icons/fa';
import centresAllData from '@/app/data/centres-data.json';

const centresData = centresAllData.centres;

const ivfContentData = {
  sections: [
    {
      heading: 'Contact Our Patient Support Team',
      paragraphs: [
        'Our dedicated team assists international patients with consultations, travel, and treatment planning. Schedule a call or visit using the form below — the same secure booking flow as our main appointment page, so your request reaches our care team and LeadSquared pipeline immediately.',
      ],
    },
  ],
};

function buildAppointmentMessage(formData) {
  const parts = [];
  parts.push(
    `[International patient] Country: ${formData.country.trim()}${formData.city ? ` | City: ${formData.city.trim()}` : ''}${formData.visaStatus ? ` | Visa: ${formData.visaStatus}` : ''}`
  );
  parts.push(formData.message.trim());
  return parts.join(' | ');
}

const Page = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formError, setFormError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    visaStatus: '',
    center: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your full name.';
    if (!formData.phone.trim()) return 'Please enter your phone number.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email)) return 'Please enter a valid email address.';
    if (!formData.country.trim()) return 'Please enter your country.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validateForm();
    if (err) {
      setFormError(err);
      return;
    }
    setIsSubmitting(true);
    setError('');

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      center: formData.center,
      message: buildAppointmentMessage(formData),
    };

    try {
      const { ok, data: result } = await submitBookAppointment(payload);

      if (ok) {
        router.push(getThankYouUrl(THANK_YOU_TYPE.appointment));
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    } catch (submitErr) {
      console.error('Form submission error:', submitErr);
      setError('Network error. Please check your connection and try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Section
        className="cs_clear_fixed_header"
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={ivfContentData} accentHeadingStyle />
            </div>
          </div>
        </div>
      </Section>

      <Section topSpaceLg="0" topSpaceMd="0" bottomSpaceLg="80" bottomSpaceMd="120">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div
                style={{
                  padding: '40px',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: '0 20px 45px rgba(31, 43, 58, 0.08)',
                  border: '1px solid #ebedf0',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ filter: isSubmitting ? 'blur(2px)' : 'none', transition: 'filter 0.2s ease', pointerEvents: isSubmitting ? 'none' : 'auto' }}>
                  <div
                    style={{
                      padding: '24px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #fff4f4 0%, #f7fbff 100%)',
                      border: '1px solid #f1e2e2',
                      marginBottom: '36px',
                    }}
                  >
                    <AccentHeading style={{ marginBottom: '6px' }}>Contact Team — Book a Consultation</AccentHeading>
                    <p style={{ margin: 0, color: 'var(--body-color)', fontSize: '15px', textAlign: 'center' }}>
                      Same secure booking as Book Appointment: your details go to our team via the official appointment API.
                    </p>
                  </div>

                {error && (
                  <div
                    style={{
                      padding: '12px 16px',
                      backgroundColor: '#fee',
                      border: '1px solid #fcc',
                      borderRadius: '8px',
                      marginBottom: '24px',
                      color: '#c33',
                      fontSize: '14px',
                    }}
                  >
                    {error}
                  </div>
                )}

                <div>
                  <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>International Patient Details</h4>
                  <p style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--body-color)' }}>
                    Share your details and our international care team will contact you shortly.
                  </p>
                  <div className="row cs_gap_y_30">
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Full Name <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Phone Number <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Include country code if applicable"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Email Address <span style={{ fontSize: '12px', color: '#999' }}>(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Country <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Enter your country"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">Visa status</label>
                      <select name="visaStatus" value={formData.visaStatus} onChange={handleChange} className="cs_form_field">
                        <option value="">Select visa status</option>
                        <option value="not-applied">Not applied yet</option>
                        <option value="applied">Applied</option>
                        <option value="approved">Approved</option>
                        <option value="have-visa">Already have visa</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">Select Centre</label>
                      <select name="center" value={formData.center} onChange={handleChange} className="cs_form_field">
                        <option value="">Select nearest centre</option>
                        <optgroup label="India Centres">
                          {centresData
                            .filter((c) => !c.isInternational)
                            .map((c) => (
                              <option key={c.slug} value={c.slug}>
                                {c.name}
                              </option>
                            ))}
                        </optgroup>
                        <optgroup label="International Centres">
                          {centresData
                            .filter((c) => c.isInternational)
                            .map((c) => (
                              <option key={c.slug} value={c.slug}>
                                {c.name}
                              </option>
                            ))}
                        </optgroup>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Reason for contact / visit <span style={{ fontSize: '12px', color: '#999' }}>(Optional)</span>
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Treatment questions, travel support, or other needs"
                        className="cs_form_field"
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                    <div className="col-md-12">
                      <div
                        style={{
                          padding: '14px 16px',
                          borderRadius: '8px',
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #eceef1',
                          fontSize: '13px',
                          color: 'var(--body-color)',
                        }}
                      >
                        By submitting, you allow our care team to contact you via call, WhatsApp or email regarding your request.
                      </div>
                    </div>
                  </div>
                </div>

                {formError && (
                  <div
                    style={{
                      marginTop: '20px',
                      padding: '11px 16px',
                      backgroundColor: '#fff5f5',
                      border: '1px solid #fcc',
                      borderRadius: '8px',
                      color: '#c33',
                      fontSize: '14px',
                    }}
                  >
                    {formError}
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    marginTop: '32px',
                    alignItems: 'center',
                  }}
                >
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{
                      flex: 1,
                      minHeight: '54px',
                      fontSize: '16px',
                      fontWeight: '600',
                      boxShadow: 'none',
                      outline: 'none',
                      border: 'none',
                    }}
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Submitting…' : 'Submit Request'}</span>
                  </button>
                </div>
                </div>
                {isSubmitting && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.45)',
                      backdropFilter: 'blur(2px)',
                      WebkitBackdropFilter: 'blur(2px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3,
                      fontWeight: '600',
                      color: '#1f2b3a',
                    }}
                  >
                    Processing your request...
                  </div>
                )}
              </div>

              <div
                style={{
                  padding: '30px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  marginTop: '30px',
                  borderLeft: '4px solid #df3655',
                  border: '1px solid #ebeef2',
                }}
              >
                <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>
                  <AccentHeading style={{ marginBottom: '6px' }}>What Happens Next</AccentHeading>
                </h3>
                <ul className="cs_list cs_list_style_1">
                  <li>Our team reviews your details and preferred centre</li>
                  <li>You may receive confirmation by call, WhatsApp, or email</li>
                  <li>International patients get coordination support as needed</li>
                  <li>Medical questions are routed to the right specialist</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div
                  className="cs_sidebar_widget mb-4"
                  style={{
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 20px 45px rgba(31, 43, 58, 0.08)',
                    border: '1px solid #ebedf0',
                    backgroundColor: '#fff',
                  }}
                >
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>
                    <AccentHeading style={{ marginBottom: '6px' }}>Quick Contact</AccentHeading>
                  </h3>
                  <p style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaPhoneAlt style={{ color: '#de3554', fontSize: '18px', flexShrink: 0 }} />
                    <a href="tel:+919289311767" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                    +91-9289311767
                    </a>
                  </p>
                  {/* <p style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaEnvelope style={{ color: '#de3554', fontSize: '18px', flexShrink: 0 }} />
                    <a
                      href="mailto:international@seedsofinnocens.com"
                      style={{ color: 'var(--body-color)', textDecoration: 'none' }}
                    >
                      international@seedsofinnocens.com
                    </a>
                  </p> */}
                  <p style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaEnvelope style={{ color: '#de3554', fontSize: '18px', flexShrink: 0 }} />
                    <a href="mailto:info@seedsofinnocens.com" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                      info@seedsofinnocens.com
                    </a>
                  </p>
                  <p style={{ marginBottom: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaGlobe style={{ color: '#de3554', fontSize: '18px', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px' }}>24/7 support for international patients</span>
                  </p>
                </div>

                <div
                  className="cs_sidebar_widget mb-4"
                  style={{
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 20px 45px rgba(31, 43, 58, 0.08)',
                    border: '1px solid #ebedf0',
                    backgroundColor: '#fff',
                  }}
                >
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>
                    <AccentHeading style={{ marginBottom: '6px' }}>Office Hours</AccentHeading>
                  </h3>
                  <ul className="cs_list cs_list_style_1">
                    <li>
                      <strong>Monday – Sunday:</strong>
                      <br />
                      9:00 AM – 6:00 PM (IST)
                    </li>
                  </ul>
                </div>

                <div
                  className="cs_sidebar_widget"
                  style={{
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 20px 45px rgba(31, 43, 58, 0.08)',
                    border: '1px solid #ebedf0',
                    backgroundColor: '#fff',
                  }}
                >
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}>
                    <AccentHeading style={{ marginBottom: '6px' }}>More Options</AccentHeading>
                  </h3>
                  <ul className="cs_list cs_list_style_1">
                    <li>
                      <Link href="/contact/book-appointment" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Book Appointment (main form)
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/whatsapp" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        WhatsApp Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/call-back-form" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Request Call Back
                      </Link>
                    </li>
                    <li>
                      <Link href="/international-patients/travel-support" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Travel Support
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/centre-locator" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Find Nearest Centre
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
