"use client";

import AccentHeading from '@/app/Components/AccentHeading';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCalendarAlt, FaCheckCircle, FaClock, FaGraduationCap } from 'react-icons/fa';
import { submitUnifiedForm, WEBSITE_FORM_TYPES } from '@/app/utils/websiteForms';
import { getThankYouUrl, THANK_YOU_TYPE } from '@/app/utils/thankYou';

export const trainingPrograms = [
  {
    id: 'embryo-biopsy',
    title: 'Embryo Biopsy Training Program',
    duration: '20 Days',
  },
  {
    id: 'embryologist-training',
    title: 'Embryologist Training Program',
    duration: '3 Months / 1 Year',
  },
  {
    id: 'andrology-technician',
    title: 'Andrology Technician Training Program',
    duration: '1 Month',
  },
  {
    id: 'gynecologic-surgical',
    title: 'Gynecologic Surgical Training Program',
    duration: '2 Weeks / 1 Month / 3 Months / 6 Months',
  },
];

const TrainingProgramRegistrationForm = ({
  defaultProgram = '',
  title = 'Apply for this Training Program',
  intro = 'Fill in your details and our training team will help you with eligibility, schedule, and next steps.',
}) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const selectedProgram = trainingPrograms.find((program) => program.id === defaultProgram);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    const fd = new FormData(e.target);
    const payload = {
      trainingProgram: fd.get('trainingProgram'),
      name: fd.get('name'),
      email: fd.get('email'),
      mobile: fd.get('mobile'),
      city: fd.get('city'),
      qualification: fd.get('qualification'),
      slot: fd.get('slot'),
    };

    try {
      const { ok, data } = await submitUnifiedForm(WEBSITE_FORM_TYPES.TRAINING_REGISTRATION, payload);
      if (ok) {
        router.push(getThankYouUrl(THANK_YOU_TYPE.training));
      } else {
        setError(data.error || 'Something went wrong.');
        setIsSubmitting(false);
      }
    } catch {
      setError('Network error.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cs_training_form_card">
      <div className="cs_training_form_header">
        <div className="cs_training_form_badge">
          <FaGraduationCap />
          Training Academy
        </div>
        <AccentHeading level={3} className="cs_training_form_title">
          {title}
        </AccentHeading>
        <p className="cs_training_form_intro">{intro}</p>
        {selectedProgram ? (
          <div className="cs_training_form_program">
            <span>
              <FaCheckCircle />
              {selectedProgram.title}
            </span>
            <span>
              <FaClock />
              {selectedProgram.duration}
            </span>
          </div>
        ) : null}
      </div>

      <div className="cs_training_form_body">
        <form className="cs_contact_form" onSubmit={handleSubmit}>
          <div className="row cs_gap_y_24">
            <div className="col-md-12">
              <label className="cs_form_label">
                Training Program <span style={{ color: '#df3655' }}>*</span>
              </label>
              <select
                required
                name="trainingProgram"
                className="cs_form_field"
                defaultValue={defaultProgram}
              >
                <option value="">Select Training Program</option>
                {trainingPrograms.map((program) => (
                  <option key={program.id} value={program.id}>
                    {program.title} ({program.duration})
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-12">
              <label className="cs_form_label">
                Name <span style={{ color: '#df3655' }}>*</span>
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="Enter your full name"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-12">
              <label className="cs_form_label">
                Email <span style={{ fontSize: '12px', color: '#999' }}>(Optional)</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-12">
              <label className="cs_form_label">
                Mobile Number <span style={{ color: '#df3655' }}>*</span>
              </label>
              <input
                type="tel"
                required
                name="mobile"
                placeholder="Enter your mobile number"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-12">
              <label className="cs_form_label">
                City <span style={{ color: '#df3655' }}>*</span>
              </label>
              <input
                type="text"
                required
                name="city"
                placeholder="Enter your city"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-12">
              <label className="cs_form_label">
                Qualification <span style={{ color: '#df3655' }}>*</span>
              </label>
              <input
                type="text"
                required
                name="qualification"
                placeholder="e.g., DGO, DNB (OBGY), MD/MS (OBGY), B.Sc, M.Sc, etc."
                className="cs_form_field"
              />
            </div>
            <div className="col-md-12">
              <label className="cs_form_label">
                Book Your Slot <span style={{ color: '#df3655' }}>*</span>
              </label>
              <input
                type="date"
                required
                name="slot"
                className="cs_form_field"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="col-md-12">
              <label className="cs_training_terms">
                <input
                  type="checkbox"
                  required
                  name="terms"
                />
                <span>
                  I confirm that the information provided is accurate and I agree to the terms and conditions.
                </span>
              </label>
            </div>
            {error ? (
              <div className="col-md-12" style={{ color: '#c00', fontSize: '14px' }}>
                {error}
              </div>
            ) : null}
            <div className="col-md-12">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cs_btn cs_style_1 cs_color_1"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Submit Registration'}</span>
              </button>
            </div>
          </div>
        </form>

        <div className="cs_training_form_footer">
          <FaCalendarAlt />
          Our team usually reviews registrations within 2-3 business days.
        </div>
      </div>
    </div>
  );
};

export default TrainingProgramRegistrationForm;
