"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitUnifiedForm, WEBSITE_FORM_TYPES } from '@/app/utils/websiteForms';
import { getThankYouUrl, THANK_YOU_TYPE } from '@/app/utils/thankYou';

export default function WebsiteContactForm({
  formClassName = 'cs_contact_form row cs_gap_y_30',
  submitLabel = 'Book Appointment',
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    const fd = new FormData(e.target);
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      subject: fd.get('subject'),
      phone: fd.get('phone'),
      message: fd.get('message'),
    };

    try {
      const { ok, data } = await submitUnifiedForm(WEBSITE_FORM_TYPES.HOME_CONTACT, payload);
      if (ok) {
        router.push(getThankYouUrl(THANK_YOU_TYPE.contact));
      } else {
        setError(data.error || 'Something went wrong.');
        setIsSubmitting(false);
      }
    } catch {
      setError('Network error. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <form className={formClassName} onSubmit={onSubmit}>
      <div className="col-md-6">
        <input type="text" name="name" required className="cs_form_field" placeholder="Your name" />
      </div>
      <div className="col-md-6">
        <input type="email" name="email" className="cs_form_field" placeholder="Your email (optional)" />
      </div>
      <div className="col-md-6">
        <input type="text" name="subject" className="cs_form_field" placeholder="Your Subject" />
      </div>
      <div className="col-md-6">
        <input type="text" name="phone" required className="cs_form_field" placeholder="Your phone" />
      </div>
      <div className="col-lg-12">
        <textarea rows={5} name="message" required className="cs_form_field" placeholder="Your comments" defaultValue="" />
      </div>
      {error ? (
        <div className="col-lg-12" style={{ color: '#c00', fontSize: '14px' }}>
          {error}
        </div>
      ) : null}
      <div className="col-lg-12">
        <button type="submit" disabled={isSubmitting} className="cs_btn cs_style_1 cs_color_1 cs_solution_content">
          {isSubmitting ? 'Sending…' : submitLabel}
        </button>
      </div>
    </form>
  );
}
