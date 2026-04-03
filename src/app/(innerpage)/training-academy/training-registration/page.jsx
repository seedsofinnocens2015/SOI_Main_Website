"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitUnifiedForm, WEBSITE_FORM_TYPES } from '@/app/utils/websiteForms';
import { getThankYouUrl, THANK_YOU_TYPE } from '@/app/utils/thankYou';

const headingData = {
  title: 'Training Registration',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Training Registration Form',
      paragraphs: [
        'Thank you for your interest in our training programs at Seeds of Innocens. Please fill out the form below to register for the training program of your choice. We\'ll review your registration and get back to you soon. We look forward to helping you advance your career in reproductive medicine and fertility science.',
      ],
    },
  ],
};

const trainingPrograms = [
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

const Page = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

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
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.png"
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

      {/* Registration Form Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{
                padding: '40px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e8e8e8',
                marginBottom: '30px'
              }}>
                <AccentHeading style={{ marginBottom: '30px' }}>Registration Form</AccentHeading>

                <form className="cs_contact_form" onSubmit={handleSubmit}>
                  <div className="row cs_gap_y_30">
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Training Program <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <select
                        required
                        name="trainingProgram"
                        className="cs_form_field"
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
                        Email <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="email"
                        required
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
                      <label style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        cursor: 'pointer',
                        gap: '10px'
                      }}>
                        <input
                          type="checkbox"
                          required
                          name="terms"
                          style={{ marginTop: '4px', width: '18px', height: '18px', flexShrink: 0 }}
                        />
                        <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
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
                        style={{ width: '100%' }}
                      >
                        <span>{isSubmitting ? 'Submitting…' : 'Submit Registration'}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div style={{
                padding: '30px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                borderLeft: '4px solid #df3655'
              }}>
                <AccentHeading level={3} style={{ fontSize: '24px', marginBottom: '20px' }}>What Happens Next?</AccentHeading>
                <ul className="cs_list cs_list_style_1">
                  <li><strong>Registration Review:</strong> Our training team will review your registration within 2-3 business days</li>
                  <li><strong>Confirmation:</strong> If selected, you&apos;ll receive a confirmation call or email with training details</li>
                  <li><strong>Payment:</strong> You&apos;ll be guided through the payment process for the selected training program</li>
                  <li><strong>Training Schedule:</strong> Final training schedule and materials will be shared before the program starts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Page;
