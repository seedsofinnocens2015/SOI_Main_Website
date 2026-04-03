"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitBookAppointment } from '@/app/utils/websiteForms';
import { getThankYouUrl, THANK_YOU_TYPE } from '@/app/utils/thankYou';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaClock, FaCheck } from 'react-icons/fa';
import centresAllData from '@/app/data/centres-data.json';
const centresData = centresAllData.centres;

const headingData = {
  title: 'Book Appointment',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Book Your Appointment',
      paragraphs: [
        "Schedule a consultation with our experienced fertility specialists. We're here to help you on your journey to parenthood. Choose your preferred date and time, and our team will confirm your appointment. Our expert team is dedicated to providing personalized care and guidance throughout your fertility journey. Book your appointment today and take the first step towards achieving your dream of parenthood.",
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

const Page = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [stepError, setStepError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    center: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStepError('');
  };

  const validateStep = (step) => {
    if (step === 1) {
      if (!formData.name.trim()) return 'Please enter your full name.';
      if (!formData.phone.trim()) return 'Please enter your phone number.';
      if (!formData.email.trim()) return 'Please enter your email address.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) return 'Please enter a valid email address.';
    }
    if (step === 2) {
      if (!formData.date) return 'Please select a preferred date.';
      if (!formData.time) return 'Please select a preferred time.';
    }
    if (step === 3) {
      if (!formData.message.trim()) return 'Please mention your reason for visit.';
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

    try {
      const { ok, data: result } = await submitBookAppointment(formData);

      if (ok) {
        router.push(getThankYouUrl(THANK_YOU_TYPE.appointment));
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

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.png"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="50" topSpaceMd="60" bottomSpaceLg="50" bottomSpaceMd="60">
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
              <div style={{
                padding: '40px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 20px 45px rgba(31, 43, 58, 0.08)',
                border: '1px solid #ebedf0',
              }}>
                {/* Header */}
                <div style={{
                  padding: '24px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #fff4f4 0%, #f7fbff 100%)',
                  border: '1px solid #f1e2e2',
                  marginBottom: '36px',
                }}>
                  <AccentHeading style={{ marginBottom: '6px' }}>Appointment Booking Form</AccentHeading>
                  <p style={{ margin: 0, color: 'var(--body-color)', fontSize: '15px' }}>
                    Fill in your details to schedule a confirmed consultation with our fertility specialists.
                  </p>
                </div>

                {/* Step Indicator */}
                <div style={{ marginBottom: '36px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    {STEPS.map((step, idx) => {
                      const state = getStepState(step.number);
                      return (
                        <div key={step.number} style={{ display: 'flex', alignItems: 'center', flex: idx < STEPS.length - 1 ? 1 : 'none' }}>
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

                {/* Error */}
                {error && (
                  <div style={{
                    padding: '12px 16px',
                    backgroundColor: '#fee',
                    border: '1px solid #fcc',
                    borderRadius: '8px',
                    marginBottom: '24px',
                    color: '#c33',
                    fontSize: '14px',
                  }}>
                    {error}
                  </div>
                )}

                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div>
                    <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>Personal Information</h4>
                    <p style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--body-color)' }}>
                      We will use this to contact and confirm your appointment.
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
                          placeholder="Enter your phone number"
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
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time */}
                {currentStep === 2 && (
                  <div>
                    <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>Preferred Date &amp; Time</h4>
                    <p style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--body-color)' }}>
                      Choose a convenient date and time slot for your consultation.
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
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="cs_form_field"
                        >
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

                {/* Step 3: Center & Reason */}
                {currentStep === 3 && (
                  <div>
                    <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>Select Center &amp; Reason for Visit</h4>
                    <p style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--body-color)' }}>
                      Choose your nearest center and briefly describe your concern.
                    </p>
                    <div className="row cs_gap_y_30">
                      <div className="col-md-12">
                        <label className="cs_form_label">Select Center</label>
                        <select
                          name="center"
                          value={formData.center}
                          onChange={handleChange}
                          className="cs_form_field"
                        >
                          <option value="">Select nearest center</option>
                          <optgroup label="India Centers">
                            {centresData
                              .filter((c) => !c.isInternational)
                              .map((c) => (
                                <option key={c.slug} value={c.slug}>{c.name}</option>
                              ))}
                          </optgroup>
                          <optgroup label="International Centers">
                            {centresData
                              .filter((c) => c.isInternational)
                              .map((c) => (
                                <option key={c.slug} value={c.slug}>{c.name}</option>
                              ))}
                          </optgroup>
                        </select>
                      </div>
                      <div className="col-md-12">
                        <label className="cs_form_label">
                          Reason for Visit <span style={{ color: '#df3655' }}>*</span>
                        </label>
                        <textarea
                          rows="4"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your concern or any specific requirements"
                          className="cs_form_field"
                          style={{ resize: 'vertical' }}
                        />
                      </div>
                      <div className="col-md-12">
                        <div style={{
                          padding: '14px 16px',
                          borderRadius: '8px',
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #eceef1',
                          fontSize: '13px',
                          color: 'var(--body-color)',
                        }}>
                          By submitting this form, you allow our care team to contact you via call, WhatsApp or email regarding your appointment.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step-level error */}
                {stepError && (
                  <div style={{
                    marginTop: '20px',
                    padding: '11px 16px',
                    backgroundColor: '#fff5f5',
                    border: '1px solid #fcc',
                    borderRadius: '8px',
                    color: '#c33',
                    fontSize: '14px',
                  }}>
                    {stepError}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  marginTop: '32px',
                  alignItems: 'center',
                }}>
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
                      style={{ flex: 1, minHeight: '54px', fontSize: '16px', fontWeight: '600', boxShadow: 'none', outline: 'none', border: 'none' }}
                    >
                      <span>Next Step →</span>
                    </button>
                  )}

                  {currentStep === 3 && (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="cs_btn cs_style_1 cs_color_1"
                      style={{ flex: 1, minHeight: '54px', fontSize: '16px', fontWeight: '600', boxShadow: 'none', outline: 'none', border: 'none' }}
                      disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? 'Booking Your Appointment...' : 'Confirm My Appointment'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* What to Expect */}
              <div style={{
                padding: '30px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                marginTop: '30px',
                borderLeft: '4px solid #df3655',
                border: '1px solid #ebeef2',
              }}>
                <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}><AccentHeading style={{ marginBottom: '6px' }}>What to Expect</AccentHeading></h3>
                <ul className="cs_list cs_list_style_1">
                  <li>Comprehensive consultation with our fertility specialist</li>
                  <li>Review of medical history and previous treatments</li>
                  <li>Discussion of treatment options and personalized plan</li>
                  <li>Time to ask questions and address concerns</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget mb-4" style={{
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0 20px 45px rgba(31, 43, 58, 0.08)',
                  border: '1px solid #ebedf0',
                  backgroundColor: '#fff',
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}><AccentHeading style={{ marginBottom: '6px' }}>Quick Contact</AccentHeading></h3>
                  
                  <div>
                    <p style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaPhoneAlt style={{ color: '#de3554', fontSize: '18px', flexShrink: 0 }} />
                      <a href="tel:+91-9810350512" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        +91-9810350512
                      </a>
                    </p>
                    <p style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaEnvelope style={{ color: '#de3554', fontSize: '18px', flexShrink: 0 }} />
                      <a href="mailto:info@seedsofinnocens.com" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        info@seedsofinnocens.com
                      </a>
                    </p>
                    <p style={{ marginBottom: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaClock style={{ color: '#de3554', fontSize: '18px', flexShrink: 0 }} />
                      <span>Available 24/7 for urgent consultations</span>
                    </p>
                  </div>
                </div>

                <div className="cs_sidebar_widget mb-4" style={{
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0 20px 45px rgba(31, 43, 58, 0.08)',
                  border: '1px solid #ebedf0',
                  backgroundColor: '#fff',
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}><AccentHeading style={{ marginBottom: '6px' }}>Office Hours</AccentHeading></h3>
                  <ul className="cs_list cs_list_style_1">
                    <li>
                      <strong>Monday – Sunday:</strong><br />
                      9:00 AM – 6:00 PM
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget" style={{
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0 20px 45px rgba(31, 43, 58, 0.08)',
                  border: '1px solid #ebedf0',
                  backgroundColor: '#fff',
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}><AccentHeading style={{ marginBottom: '6px' }}>Other Options</AccentHeading></h3>
                  <ul className="cs_list cs_list_style_1">
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
