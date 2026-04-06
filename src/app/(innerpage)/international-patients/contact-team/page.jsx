"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitBookAppointment } from '@/app/utils/websiteForms';
import { getThankYouUrl, THANK_YOU_TYPE } from '@/app/utils/thankYou';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaClock, FaCheck, FaGlobe } from 'react-icons/fa';
import centresAllData from '@/app/data/centres-data.json';

const centresData = centresAllData.centres;

const ivfContentData = {
  sections: [
    {
      heading: 'Contact Our Patient Support Team',
      paragraphs: [
        'Our dedicated team assists international and India-based patients with consultations, travel, and treatment planning. Schedule a call or visit using the form below — the same secure booking flow as our main appointment page, so your request reaches our care team and LeadSquared pipeline immediately.',
      ],
    },
  ],
};

const STEPS = [
  { number: 1, label: 'Personal Information' },
  { number: 2, label: 'Date & Time' },
  { number: 3, label: 'Center & Reason' },
];

const today = new Date().toISOString().split('T')[0];

function buildAppointmentMessage(formData) {
  const parts = [];
  if (formData.patientType === 'international') {
    parts.push(
      `[International patient] Country: ${formData.country.trim()}${formData.city ? ` | City: ${formData.city.trim()}` : ''}${formData.visaStatus ? ` | Visa: ${formData.visaStatus}` : ''}`
    );
  } else {
    parts.push('[India patient]');
  }
  parts.push(formData.message.trim());
  return parts.join(' | ');
}

const Page = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [stepError, setStepError] = useState('');

  const [formData, setFormData] = useState({
    patientType: 'international',
    name: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    visaStatus: '',
    date: '',
    time: '',
    center: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'patientType') {
      setFormData((prev) => ({ ...prev, patientType: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setStepError('');
  };

  const validateStep = (step) => {
    if (step === 1) {
      if (!formData.name.trim()) return 'Please enter your full name.';
      if (!formData.phone.trim()) return 'Please enter your phone number.';
      if (!formData.email.trim()) return 'Please enter your email address.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) return 'Please enter a valid email address.';
      if (formData.patientType === 'international' && !formData.country.trim()) {
        return 'Please enter your country.';
      }
    }
    if (step === 2) {
      if (!formData.date) return 'Please select a preferred date.';
      if (!formData.time) return 'Please select a preferred time.';
    }
    if (step === 3) {
      if (!formData.message.trim()) return 'Please mention your reason for contact or visit.';
    }
    return '';
  };

  const handleNext = () => {
    const err = validateStep(currentStep);
    if (err) {
      setStepError(err);
      return;
    }
    setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
    setStepError('');
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStepError('');
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validateStep(3);
    if (err) {
      setStepError(err);
      return;
    }
    setIsSubmitting(true);
    setError('');

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      date: formData.date,
      time: formData.time,
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

  const getStepState = (stepNum) => {
    if (completedSteps.includes(stepNum)) return 'completed';
    if (currentStep === stepNum) return 'active';
    return 'inactive';
  };

  const stepCircleStyle = (state) => ({
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '16px',
    flexShrink: 0,
    transition: 'all 0.3s ease',
    ...(state === 'completed' && {
      backgroundColor: '#df3655',
      color: '#fff',
      border: '2px solid #df3655',
    }),
    ...(state === 'active' && {
      backgroundColor: '#fff',
      color: '#df3655',
      border: '2px solid #df3655',
    }),
    ...(state === 'inactive' && {
      backgroundColor: '#f5f5f5',
      color: '#aaa',
      border: '2px solid #e0e0e0',
    }),
  });

  const connectorStyle = (filled) => ({
    flex: 1,
    height: '3px',
    borderRadius: '2px',
    backgroundColor: filled ? '#df3655' : '#e0e0e0',
    transition: 'background-color 0.3s ease',
    margin: '0 8px',
    marginBottom: '20px',
  });

  const stepLabelStyle = (state) => ({
    fontSize: '13px',
    fontWeight: state === 'active' ? '700' : '500',
    color: state === 'inactive' ? '#aaa' : state === 'completed' ? '#df3655' : '#1f2b3a',
    textAlign: 'center',
    marginTop: '8px',
    transition: 'color 0.3s ease',
  });

  const radioLabelStyle = (active) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '12px 24px',
    borderRadius: '8px',
    border: `2px solid ${active ? '#df3655' : '#e8e8e8'}`,
    backgroundColor: active ? '#fff5f5' : '#ffffff',
    transition: 'all 0.3s ease',
  });

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
                }}
              >
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

                <div style={{ marginBottom: '36px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    {STEPS.map((step, idx) => {
                      const state = getStepState(step.number);
                      return (
                        <div
                          key={step.number}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            flex: idx < STEPS.length - 1 ? 1 : 'none',
                          }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={stepCircleStyle(state)}>
                              {state === 'completed' ? <FaCheck size={16} /> : step.number}
                            </div>
                            <span style={stepLabelStyle(state)}>{step.label}</span>
                          </div>
                          {idx < STEPS.length - 1 && (
                            <div style={connectorStyle(completedSteps.includes(step.number))} />
                          )}
                        </div>
                      );
                    })}
                  </div>
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

                {currentStep === 1 && (
                  <div>
                    <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>Personal Information</h4>
                    <p style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--body-color)' }}>
                      We will use this to contact and confirm your preferred date and time.
                    </p>

                    <div style={{ marginBottom: '24px' }}>
                      <label className="cs_form_label" style={{ marginBottom: '12px', display: 'block' }}>
                        Patient type <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <label style={radioLabelStyle(formData.patientType === 'india')}>
                          <input
                            type="radio"
                            name="patientType"
                            value="india"
                            checked={formData.patientType === 'india'}
                            onChange={handleChange}
                            style={{ marginRight: '8px' }}
                          />
                          India patient
                        </label>
                        <label style={radioLabelStyle(formData.patientType === 'international')}>
                          <input
                            type="radio"
                            name="patientType"
                            value="international"
                            checked={formData.patientType === 'international'}
                            onChange={handleChange}
                            style={{ marginRight: '8px' }}
                          />
                          International patient
                        </label>
                      </div>
                    </div>

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
                          placeholder={
                            formData.patientType === 'international'
                              ? 'Include country code if applicable'
                              : 'Enter your phone number'
                          }
                          className="cs_form_field"
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="cs_form_label">
                          Email Address <span style={{ color: '#df3655' }}>*</span>
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
                      {formData.patientType === 'international' && (
                        <>
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
                        </>
                      )}
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>Preferred Date &amp; Time</h4>
                    <p style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--body-color)' }}>
                      Choose a convenient slot for our team to reach you or for your visit (IST).
                    </p>
                    <div className="row cs_gap_y_30">
                      <div className="col-md-6">
                        <label className="cs_form_label">
                          Preferred Date <span style={{ color: '#df3655' }}>*</span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          min={today}
                          value={formData.date}
                          onChange={handleChange}
                          className="cs_form_field"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="cs_form_label">
                          Preferred Time <span style={{ color: '#df3655' }}>*</span>
                        </label>
                        <select name="time" value={formData.time} onChange={handleChange} className="cs_form_field">
                          <option value="">Select time slot</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="17:00">05:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>Select Center &amp; Reason</h4>
                    <p style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--body-color)' }}>
                      Choose a center if you have a preference, and describe how we can help.
                    </p>
                    <div className="row cs_gap_y_30">
                      <div className="col-md-12">
                        <label className="cs_form_label">Select Center</label>
                        <select name="center" value={formData.center} onChange={handleChange} className="cs_form_field">
                          <option value="">Select nearest center</option>
                          <optgroup label="India Centers">
                            {centresData
                              .filter((c) => !c.isInternational)
                              .map((c) => (
                                <option key={c.slug} value={c.slug}>
                                  {c.name}
                                </option>
                              ))}
                          </optgroup>
                          <optgroup label="International Centers">
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
                          Reason for contact / visit <span style={{ color: '#df3655' }}>*</span>
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
                )}

                {stepError && (
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
                    {stepError}
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    marginTop: '32px',
                    alignItems: 'center',
                  }}
                >
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      style={{
                        flex: 1,
                        minHeight: '54px',
                        fontSize: '15px',
                        fontWeight: '600',
                        border: '2px solid #df3655',
                        backgroundColor: '#fff',
                        color: '#df3655',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: 'none',
                        outline: 'none',
                      }}
                    >
                      ← Back
                    </button>
                  )}

                  {currentStep < 3 && (
                    <button
                      type="button"
                      onClick={handleNext}
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
                    >
                      <span>Next Step →</span>
                    </button>
                  )}

                  {currentStep === 3 && (
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
                  )}
                </div>
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
                  <li>Our team reviews your preferred date, time, and center</li>
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
                      <Link href="/contact/center-locator" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        Find Nearest Center
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
