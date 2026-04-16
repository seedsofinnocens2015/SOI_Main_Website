"use client";

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { getAssetPathClient } from '@/app/utils/assetPath';
import { THANK_YOU_TYPE } from '@/app/utils/thankYou';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import AccentHeading from '@/app/Components/AccentHeading';
import Link from 'next/link';
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaCalendarAlt,
  FaPhone,
  FaGlobe,
  FaBriefcase,
  FaGraduationCap,
  FaStar,
  FaBlog,
  FaQuestionCircle,
  FaComments,
} from 'react-icons/fa';

const headingData = {
  title: 'Thank You',
};

const TYPE_CONFIG = {
  [THANK_YOU_TYPE.appointment]: {
    label: 'Appointment request',
    icon: FaCalendarAlt,
    headline: 'Your appointment request is in',
    subline:
      'We have received your booking details. Our team will contact you shortly to confirm your preferred date and time.',
    steps: [
      {
        title: 'Confirmation',
        description:
          'We will call or message you to confirm your slot and answer any initial questions.',
      },
      {
        title: 'Before your visit',
        description:
          'Keep your phone reachable and note any medical reports you may need to bring.',
      },
      {
        title: 'Need to change plans',
        description: 'Contact us if you need to reschedule — we are happy to help.',
      },
    ],
  },
  [THANK_YOU_TYPE.callBack]: {
    label: 'Call back request',
    icon: FaPhone,
    headline: 'We will call you back',
    subline:
      'Your call back request has been received. Our team will reach you at the time you preferred.',
    steps: [
      {
        title: 'Short wait',
        description: 'We usually respond the same day for requests before 2 PM IST.',
      },
      {
        title: 'Your call',
        description: 'A specialist will call to discuss your questions and next steps.',
      },
      {
        title: 'Missed call',
        description: 'If you miss our call, we will try again or you can reach us on the number below.',
      },
    ],
  },
  [THANK_YOU_TYPE.internationalContact]: {
    label: 'International patient inquiry',
    icon: FaGlobe,
    headline: 'Thank you for contacting us',
    subline:
      'Our international patient support team has received your details and will guide you on treatment and travel-related queries.',
    steps: [
      {
        title: 'Dedicated support',
        description: 'A coordinator may reach out to understand your needs and timeline.',
      },
      {
        title: 'Information',
        description: 'We can share treatment options, estimates, and travel-related guidance.',
      },
      {
        title: 'Stay reachable',
        description: 'Please keep your email and phone handy for follow-up.',
      },
    ],
  },
  [THANK_YOU_TYPE.careersApply]: {
    label: 'Job application',
    icon: FaBriefcase,
    headline: 'Application received',
    subline:
      'Thank you for applying to Seeds of Innocence. Our HR team will review your profile and get back to you if your profile matches the role.',
    steps: [
      {
        title: 'Review',
        description: 'Applications are typically screened within a few business days.',
      },
      {
        title: 'Shortlist',
        description: 'If shortlisted, we will invite you for the next round of discussion.',
      },
      {
        title: 'Updates',
        description: 'We will contact you using the email or phone you provided.',
      },
    ],
  },
  [THANK_YOU_TYPE.careersGeneral]: {
    label: 'General career application',
    icon: FaBriefcase,
    headline: 'Your profile is with us',
    subline:
      'We have saved your general application. When a suitable role opens, our HR team may contact you.',
    steps: [
      {
        title: 'Talent pool',
        description: 'Your details remain in our database for future opportunities.',
      },
      {
        title: 'Open roles',
        description: 'You can also browse current openings and apply directly for faster matching.',
      },
      {
        title: 'Follow-up',
        description: 'We may reach out when a role fits your background.',
      },
    ],
  },
  [THANK_YOU_TYPE.training]: {
    label: 'Training registration',
    icon: FaGraduationCap,
    headline: 'Registration received',
    subline:
      'Thank you for registering for our training program. Our training team will review and contact you with next steps.',
    steps: [
      {
        title: 'Review',
        description: 'We will confirm your program, slot, and eligibility if needed.',
      },
      {
        title: 'Communication',
        description: 'Expect an email or call with schedule and fee details where applicable.',
      },
      {
        title: 'Preparation',
        description: 'We will share any materials or prerequisites before the program starts.',
      },
    ],
  },
  [THANK_YOU_TYPE.feedback]: {
    label: 'Feedback',
    icon: FaStar,
    headline: 'Thank you for your feedback',
    subline:
      'Your feedback helps us improve patient care and services. We truly appreciate you taking the time.',
    steps: [
      {
        title: 'We read every message',
        description: 'Your input is shared with the relevant teams for action.',
      },
      {
        title: 'Improvement',
        description: 'Suggestions and compliments shape how we train and serve our patients.',
      },
      {
        title: 'Privacy',
        description: 'We handle your information responsibly and only use it to improve our services.',
      },
    ],
  },
  [THANK_YOU_TYPE.blogAppointment]: {
    label: 'Blog — appointment request',
    icon: FaBlog,
    headline: 'We received your request',
    subline:
      'Thank you for reaching out from our blog. Our team will contact you to help with your appointment or query.',
    steps: [
      {
        title: 'Follow-up',
        description: 'We will use the contact details you shared to get in touch.',
      },
      {
        title: 'Questions',
        description: 'Feel free to mention any article or topic you read about.',
      },
      {
        title: 'Direct help',
        description: 'For urgent needs, call us on the number below.',
      },
    ],
  },
  [THANK_YOU_TYPE.faq]: {
    label: 'FAQ inquiry',
    icon: FaQuestionCircle,
    headline: 'Your message is with our team',
    subline:
      'We have received your question from the FAQ section. A fertility team member will guide you on the next steps.',
    steps: [
      {
        title: 'Expert reply',
        description: 'We aim to respond with clear, helpful information.',
      },
      {
        title: 'Consultation',
        description: 'We can help you book a consultation if that is the right next step.',
      },
      {
        title: 'Stay reachable',
        description: 'Please keep your phone available for our call or message.',
      },
    ],
  },
  [THANK_YOU_TYPE.contact]: {
    label: 'Contact form',
    icon: FaComments,
    headline: 'Message received',
    subline:
      'Thank you for contacting Seeds of Innocence. We have your details and will respond as soon as possible.',
    steps: [
      {
        title: 'We are on it',
        description: 'Our team will read your message and reply using your email or phone.',
      },
      {
        title: 'Timing',
        description: 'Most queries receive a response within one business day.',
      },
      {
        title: 'Urgent',
        description: 'For urgent medical concerns, please call the number below.',
      },
    ],
  },
  [THANK_YOU_TYPE.default]: {
    label: 'Submission',
    icon: FaCheckCircle,
    headline: 'Form submitted successfully',
    subline:
      'Thank you — we have received your submission. Our team at Seeds of Innocence will get back to you soon.',
    steps: [
      {
        title: 'We have your details',
        description: 'Your information was received securely.',
      },
      {
        title: 'What happens next',
        description:
          'A team member will review and contact you at the phone number or email you provided.',
      },
      {
        title: 'Need anything sooner',
        description: 'If your query is urgent, use the phone or email below.',
      },
    ],
  },
};

function getConfig(typeParam) {
  const raw = (typeParam || '').trim();
  if (raw && TYPE_CONFIG[raw]) {
    return { typeKey: raw, ...TYPE_CONFIG[raw] };
  }
  return { typeKey: THANK_YOU_TYPE.default, ...TYPE_CONFIG[THANK_YOU_TYPE.default] };
}

const ThankYouInner = () => {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  const config = getConfig(typeParam);
  const TypeIcon = config.icon || FaCheckCircle;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: 'AW-719316761/M2nuCPTl4pgcEJnO_9YC' });
      return;
    }

    // Queue conversion event in case gtag loads a moment later.
    window.dataLayer.push([
      'event',
      'conversion',
      { send_to: 'AW-719316761/M2nuCPTl4pgcEJnO_9YC' },
    ]);
  }, []);

  return (
    <div>

      <Section topSpaceLg="80" topSpaceMd="60" bottomSpaceLg="80" bottomSpaceMd="60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                style={{
                  padding: '50px 40px',
                  textAlign: 'center',
                }}
              >
                <div style={{ marginBottom: '28px' }}>
                 
                  <FaCheckCircle
                    style={{
                      fontSize: '80px',
                      color: '#28a745',
                      marginBottom: '16px',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '13px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: '#df3655',
                      fontWeight: '700',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                    }}
                  >
                    <TypeIcon style={{ fontSize: '16px' }} />
                    {config.label}
                  </p>
                  <AccentHeading forcePlain style={{ marginBottom: '12px', color: '#28a745' }}>
                    {config.headline}
                  </AccentHeading>
                  <p
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '12px',
                      lineHeight: '1.5',
                    }}
                  >
                    Thank you — we’ve received your submission.
                  </p>
                  <p style={{ fontSize: '17px', color: '#666', lineHeight: '1.8', marginBottom: 0 }}>
                    {config.subline}
                  </p>
                </div>

                <div
                  style={{
                    padding: '28px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    marginBottom: '28px',
                    textAlign: 'left',
                  }}
                >
                  <h3 style={{ fontSize: '20px', marginBottom: '18px', color: '#df3655' }}>
                    What happens next
                  </h3>
                  <ul className="cs_list cs_list_style_1" style={{ marginBottom: 0 }}>
                    {config.steps.map((step, index) => (
                      <li key={index}>
                        <strong>{step.title}:</strong> {step.description}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    padding: '28px',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    border: '2px solid #df3655',
                    marginBottom: '28px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '20px',
                      marginBottom: '15px',
                      color: '#df3655',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      justifyContent: 'center',
                    }}
                  >
                    <FaPhoneAlt /> Need help right away?
                  </h3>
                  <p style={{ marginBottom: '15px', fontSize: '16px' }}>
                    Call or email us — we’re here to assist you.
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ marginBottom: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaPhoneAlt style={{ color: '#df3655', fontSize: '18px' }} />
                      <a
                        href="tel:+91-9810350512"
                        style={{
                          color: 'var(--body-color)',
                          textDecoration: 'none',
                          fontSize: '16px',
                          fontWeight: '600',
                        }}
                      >
                        +91-9810350512
                      </a>
                    </p>
                    <p style={{ marginBottom: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaEnvelope style={{ color: '#df3655', fontSize: '18px' }} />
                      <a
                        href="mailto:info@seedsofinnocens.com"
                        style={{
                          color: 'var(--body-color)',
                          textDecoration: 'none',
                          fontSize: '16px',
                          fontWeight: '600',
                        }}
                      >
                        info@seedsofinnocens.com
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/" className="cs_btn cs_style_1 cs_color_1" style={{ minWidth: '160px' }}>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        justifyContent: 'center',
                      }}
                    >
                      <FaHome /> Go to home
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="cs_btn cs_style_1"
                    style={{
                      minWidth: '160px',
                      backgroundColor: 'transparent',
                      border: '2px solid #df3655',
                      color: '#df3655',
                    }}
                  >
                    <span>Contact us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

const ThankYouPage = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Section
            className={'cs_page_heading cs_bg_filed cs_center'}
            backgroundImage="/assets/img/Top-Header.webp"
          >
            <PageHeading data={headingData} />
          </Section>
          <Section topSpaceLg="80" topSpaceMd="60" bottomSpaceLg="80" bottomSpaceMd="60">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <p style={{ textAlign: 'center', padding: '40px' }}>Loading…</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      }
    >
      <ThankYouInner />
    </Suspense>
  );
};

export default ThankYouPage;
