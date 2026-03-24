"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaCheck } from 'react-icons/fa';

const headingData = {
  title: 'Call Back Form',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Request a Call Back',
      paragraphs: [
        "Fill out the form below and our team will call you back at your preferred time. We'll answer all your questions and help you understand your fertility treatment options. Our expert team is dedicated to providing personalized guidance and support throughout your fertility journey.",
      ],
    },
  ],
};

const STEPS = [
  { number: 1, label: 'Personal Details' },
  { number: 2, label: 'Call Preferences' },
  { number: 3, label: 'Reason & Message' },
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
    callTime: '',
    reason: '',
    message: '',
  });

  const API_BASE_URL = 'https://soi.seedsofinnocens.com';

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStepError('');
  };

  const validateStep = (step) => {
    if (step === 1) {
      if (!formData.name.trim()) return 'Please enter your name.';
      if (!formData.phone.trim()) return 'Please enter your phone number.';
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        return 'Please enter a valid email address.';
    }
    if (step === 2) {
      if (!formData.callTime) return 'Please select your preferred call time.';
    }
    if (step === 3) {
      if (!formData.reason) return 'Please select a reason for the call.';
    }
    return '';
  };

  const handleNext = () => {
    const err = validateStep(currentStep);
    if (err) { setStepError(err); return; }
    setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
    setStepError('');
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStepError('');
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    const err = validateStep(3);
    if (err) { setStepError(err); return; }
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/new-website/call-back-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.ok) {
        router.push('/thank-you?type=call-back');
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
    ...(state === 'completed' && { backgroundColor: '#df3655', color: '#fff', border: '2px solid #df3655' }),
    ...(state === 'active' && { backgroundColor: '#fff', color: '#df3655', border: '2px solid #df3655' }),
    ...(state === 'inactive' && { backgroundColor: '#f5f5f5', color: '#aaa', border: '2px solid #e0e0e0' }),
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
                  <AccentHeading style={{ marginBottom: '6px' }}>Call Back Request Form</AccentHeading>
                  <p style={{ margin: 0, color: 'var(--body-color)', fontSize: '15px' }}>
                    Share your details and we will call you back at your preferred time — no waiting, no hassle.
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

                {/* API Error */}
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

                {/* Step 1: Personal Details */}
                {currentStep === 1 && (
                  <div>
                    <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>Personal Details</h4>
                    <p style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--body-color)' }}>
                      We will use this information to reach you for the call back.
                    </p>
                    <div className="row cs_gap_y_30">
                      <div className="col-md-6">
                        <label className="cs_form_label">
                          Your Name <span style={{ color: '#df3655' }}>*</span>
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
                        <label className="cs_form_label">Email Address <span style={{ fontSize: '12px', color: '#999' }}>(Optional)</span></label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email (optional)"
                          className="cs_form_field"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Call Preferences */}
                {currentStep === 2 && (
                  <div>
                    <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>Call Preferences</h4>
                    <p style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--body-color)' }}>
                      Let us know the best date and time to reach you.
                    </p>
                    <div className="row cs_gap_y_30">
                      <div className="col-md-6">
                        <label className="cs_form_label">
                          Preferred Call Time <span style={{ color: '#df3655' }}>*</span>
                        </label>
                        <select
                          name="callTime"
                          value={formData.callTime}
                          onChange={handleChange}
                          className="cs_form_field"
                        >
                          <option value="">Select preferred time</option>
                          <option value="morning">Morning (9 AM – 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                          <option value="evening">Evening (4 PM – 7 PM)</option>
                          <option value="anytime">Anytime</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="cs_form_label">
                          Preferred Date <span style={{ fontSize: '12px', color: '#999' }}>(Optional)</span>
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
                    </div>
                  </div>
                )}

                {/* Step 3: Reason & Message */}
                {currentStep === 3 && (
                  <div>
                    <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>Reason &amp; Message</h4>
                    <p style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--body-color)' }}>
                      Help us prepare for your call by sharing what you&apos;d like to discuss.
                    </p>
                    <div className="row cs_gap_y_30">
                      <div className="col-md-12">
                        <label className="cs_form_label">
                          Reason for Call <span style={{ color: '#df3655' }}>*</span>
                        </label>
                        <select
                          name="reason"
                          value={formData.reason}
                          onChange={handleChange}
                          className="cs_form_field"
                        >
                          <option value="">Select reason</option>
                          <option value="consultation">General Consultation</option>
                          <option value="treatment">Treatment Information</option>
                          <option value="cost">Cost &amp; Package Details</option>
                          <option value="appointment">Book Appointment</option>
                          <option value="followup">Follow-up Query</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-md-12">
                        <label className="cs_form_label">
                          Additional Message <span style={{ fontSize: '12px', color: '#999' }}>(Optional)</span>
                        </label>
                        <textarea
                          rows="4"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us what you'd like to discuss or any specific questions you have"
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
                          By submitting this form, you allow our care team to contact you via call, WhatsApp or email regarding your request.
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
                <div style={{ display: 'flex', gap: '16px', marginTop: '32px', alignItems: 'center' }}>
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
                      <span>{isSubmitting ? 'Submitting Your Request...' : 'Request Call Back'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* What Happens Next */}
              <div style={{
                padding: '30px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                marginTop: '30px',
                borderLeft: '4px solid #df3655',
                border: '1px solid #ebeef2',
              }}>
                <AccentHeading level={3} style={{ fontSize: '24px', marginBottom: '20px' }}>What Happens Next?</AccentHeading>
                <ul className="cs_list cs_list_style_1">
                  <li><strong>Submit Form:</strong> Fill out the form above with your details</li>
                  <li><strong>Confirmation:</strong> You&apos;ll receive a confirmation message within minutes</li>
                  <li><strong>Our Call:</strong> Our specialist will call you at your preferred time</li>
                  <li><strong>Discussion:</strong> We&apos;ll answer all your questions and provide guidance</li>
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
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}><AccentHeading style={{ marginBottom: '6px' }}>Response Time</AccentHeading></h3>
                  <p style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.6' }}>
                    We typically respond to call back requests within:
                  </p>
                  <ul className="cs_list cs_list_style_1">
                    <li><strong>Same Day:</strong><br />For requests submitted before 2 PM</li>
                    <li><strong>Next Day:</strong><br />For requests submitted after 2 PM</li>
                    <li><strong>Weekend:</strong><br />Monday morning for weekend requests</li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget mb-4" style={{
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: '0 20px 45px rgba(31, 43, 58, 0.08)',
                  border: '1px solid #ebedf0',
                  backgroundColor: '#fff',
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px' }}><AccentHeading style={{ marginBottom: '6px' }}>Direct Contact</AccentHeading></h3>
                  <p style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.6' }}>
                    Need immediate assistance? Contact us directly:
                  </p>
                  <div>
                    <p style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaPhoneAlt style={{ color: '#de3554', fontSize: '18px', flexShrink: 0 }} />
                      <a href="tel:+91-9810350512" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        +91-9810350512
                      </a>
                    </p>
                    <p style={{ marginBottom: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaEnvelope style={{ color: '#de3554', fontSize: '18px', flexShrink: 0 }} />
                      <a href="mailto:info@seedsofinnocens.com" style={{ color: 'var(--body-color)', textDecoration: 'none' }}>
                        info@seedsofinnocens.com
                      </a>
                    </p>
                  </div>
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
