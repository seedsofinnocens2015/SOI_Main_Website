"use client";

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import centresAllData from '@/app/data/centres-data.json';
import { submitBookAppointment } from '@/app/utils/websiteForms';
import { getThankYouUrl, THANK_YOU_TYPE } from '@/app/utils/thankYou';

const APPOINTMENT_SUBMITTED_KEY = 'soi_appointment_submitted';
const centresData = centresAllData.centres;

const GlobalAppointmentPopup = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!pathname) return;
    if (pathname.includes('/thank-you')) {
      setIsOpen(false);
      return;
    }

    const alreadySubmitted = typeof window !== 'undefined' && localStorage.getItem(APPOINTMENT_SUBMITTED_KEY) === 'true';
    setIsOpen(!alreadySubmitted);
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const dataObj = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: '',
      center: formData.get('center') || 'Popup Form',
      message: 'Appointment requested from popup form',
    };

    try {
      const { ok, data: result } = await submitBookAppointment(dataObj);
      if (ok) {
        if (typeof window !== 'undefined') {
          localStorage.setItem(APPOINTMENT_SUBMITTED_KEY, 'true');
        }
        setIsOpen(false);
        router.push(getThankYouUrl(THANK_YOU_TYPE.appointment));
      } else {
        alert(result.error || 'Something went wrong.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Network error.');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="soi_popup_overlay" role="dialog" aria-modal="true" aria-label="Book consultation popup">
      <div className="soi_popup_card cs_header_form_wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
        <button
          type="button"
          className="soi_popup_close"
          onClick={handleClose}
          aria-label="Close popup"
        >
          x
        </button>

        <div className="soi_popup_content" style={{ filter: isSubmitting ? 'blur(2px)' : 'none', transition: 'filter 0.2s ease', pointerEvents: isSubmitting ? 'none' : 'auto' }}>
          <h3 className="cs_header_form_title">Book your<br /><span className="cs_accent_color cs_blink_soft" style={{ fontWeight: '700' }}> Free Consultation </span></h3>

          <form onSubmit={handleSubmit}>
            <div className="cs_form_group">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                className="cs_form_field"
              />
            </div>
            <div className="cs_form_group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                className="cs_form_field"
              />
            </div>
            <div className="cs_form_group">
              <select
                name="center"
                className="cs_form_field"
                defaultValue=""
              >
                <option value="">Select Centre</option>
                <optgroup label="India Centres">
                  {centresData
                    .filter((c) => !c.isInternational)
                    .map((c) => (
                      <option key={c.slug} value={c.slug}>{c.name}</option>
                    ))}
                </optgroup>
                <optgroup label="International Centres">
                  {centresData
                    .filter((c) => c.isInternational)
                    .map((c) => (
                      <option key={c.slug} value={c.slug}>{c.name}</option>
                    ))}
                </optgroup>
              </select>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="cs_btn cs_style_1 cs_color_1 cs_header_form_btn soi_popup_submit_btn"
              style={{ width: '100%' }}
            >
              <span>{isSubmitting ? 'Submitting...' : 'Book Appointment'}</span>
            </button>
          </form>
        </div>
        {isSubmitting && (
          <div style={{
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
          }}>
            Processing your request...
          </div>
        )}
      </div>

      <style jsx>{`
        .soi_popup_overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .soi_popup_card {
          width: 100%;
          max-width: 520px;
          min-height: 445px;
          background: #fff;
          border-radius: 16px;
          padding: 50px 44px 44px 44px;
          position: relative;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
        }

        .soi_popup_content .cs_header_form_title {
          text-align: center;
          line-height: 1.2;
          margin-bottom: 18px;
          padding-right: 14px;
        }

        .soi_popup_content .cs_form_group {
          margin-bottom: 14px;
        }

        .soi_popup_content .cs_form_field {
          height: 48px;
          border-radius: 8px;
        }

        .soi_popup_submit_btn {
          border: none !important;
          box-shadow: none !important;
          outline: none !important;
          margin-top: 4px;
        }

        .soi_popup_submit_btn::before,
        .soi_popup_submit_btn::after {
          display: none !important;
          border: 0 !important;
          box-shadow: none !important;
        }

        .soi_popup_close {
          position: absolute;
          top: 8px;
          right: 10px;
          border: none;
          background: transparent;
          font-size: 24px;
          line-height: 1;
          color: #1f2b3a;
          cursor: pointer;
          z-index: 4;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
        }

        .soi_popup_close:hover {
          background-color: #f1f1f1;
        }

        .cs_blink_soft {
          display: inline-block;
          transform-origin: center;
          animation: csSoftZoom 1.2s ease-in-out infinite;
        }

        @keyframes csSoftZoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cs_blink_soft {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default GlobalAppointmentPopup;
