"use client";

import { useEffect, useState } from 'react';
import centresAllData from '@/app/data/centres-data.json';
import { submitSurgicalConsultation } from '@/app/utils/websiteForms';
import styles from './surgicalCenter.module.scss';

const centres = centresAllData.centres;

export default function SurgicalConsultationModal({ buttonText }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeModal = () => {
    if (isSubmitting) return;
    setIsOpen(false);
    setMessage('');
    setIsSuccess(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setIsSubmitting(true);
    setMessage('');
    setIsSuccess(false);

    const formData = new FormData(formElement);
    const result = await submitSurgicalConsultation({
      name: formData.get('name'),
      phone: formData.get('phone'),
      center: formData.get('center'),
      source: 'Surgical Center Popup',
    });

    if (result.ok) {
      formElement.reset();
      setIsSuccess(true);
      setMessage('Your consultation request has been submitted successfully.');
    } else {
      setMessage(result.data?.error || 'Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <button type="button" className={styles.ctaButton} onClick={() => setIsOpen(true)}>
        {buttonText}
      </button>

      {isOpen && (
        <div className={styles.modalBackdrop} role="presentation" onMouseDown={closeModal}>
          <div
            className={styles.modalDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="surgical-form-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button type="button" className={styles.modalClose} onClick={closeModal} aria-label="Close consultation form">
              ×
            </button>
            <div className={`${styles.popupFormWrapper} cs_header_form_wrapper`}>
              <div style={{ filter: isSubmitting ? 'blur(2px)' : 'none', transition: 'filter 0.2s ease', pointerEvents: isSubmitting ? 'none' : 'auto' }}>
                <div id="surgical-form-title" className="cs_header_form_title">
                  Book your<br />
                  <span className={`cs_accent_color ${styles.softZoom}`} style={{ fontWeight: 700 }}>Free Consultation</span>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="cs_form_group">
                    <input type="text" name="name" placeholder="Full Name *" required className="cs_form_field" />
                  </div>
                  <div className="cs_form_group">
                    <input type="tel" name="phone" placeholder="Phone Number *" required className="cs_form_field" />
                  </div>
                  <div className="cs_form_group">
                    <select name="center" className="cs_form_field" defaultValue="" required>
                      <option value="" disabled>Select Centre *</option>
                      <optgroup label="India Centres">
                        {centres.filter((center) => !center.isInternational).map((center) => (
                          <option key={center.slug} value={center.name.split(',')[0].trim()}>{center.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="International Centres">
                        {centres.filter((center) => center.isInternational).map((center) => (
                          <option key={center.slug} value={center.name.split(',')[0].trim()}>{center.name}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  {message && (
                    <p className={isSuccess ? styles.formSuccess : styles.formError} role="status">{message}</p>
                  )}
                  <button type="submit" disabled={isSubmitting} className="cs_btn cs_style_1 cs_color_1 cs_header_form_btn">
                    <span>{isSubmitting ? 'Submitting...' : 'Book Appointment'}</span>
                  </button>
                </form>
              </div>
              {isSubmitting && <div className={styles.processingOverlay}>Processing your request...</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
