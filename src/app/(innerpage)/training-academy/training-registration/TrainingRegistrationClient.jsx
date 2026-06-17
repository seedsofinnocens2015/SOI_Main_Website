"use client";

import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import React from 'react';
import TrainingProgramRegistrationForm from '../TrainingProgramRegistrationForm';

const headingData = {
  title: 'Training Registration',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Training Registration Form',
      paragraphs: [
        "Thank you for your interest in our training programs at Seeds of Innocens. Please fill out the form below to register for the training program of your choice. We'll review your registration and get back to you soon. We look forward to helping you advance your career in reproductive medicine and fertility science.",
      ],
    },
  ],
};

const TrainingRegistrationClient = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.webp"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="80"
        bottomSpaceMd="90"
      >
        <div className="container">
          <div className="row cs_gap_y_40 align-items-start">
            <div className="col-lg-5">
              <IVFContentSection data={ivfContentData} />
              <div
                style={{
                  padding: '26px',
                  marginTop: '24px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  borderLeft: '4px solid #df3655',
                }}
              >
                <AccentHeading level={3} style={{ fontSize: '24px', marginBottom: '18px' }}>
                  What Happens Next?
                </AccentHeading>
                <ul className="cs_list cs_list_style_1" style={{ marginBottom: 0 }}>
                  <li><strong>Registration Review:</strong> Our training team will review your registration within 2-3 business days</li>
                  <li><strong>Confirmation:</strong> If selected, you&apos;ll receive a confirmation call or email with training details</li>
                  <li><strong>Payment:</strong> You&apos;ll be guided through the payment process for the selected training program</li>
                  <li><strong>Training Schedule:</strong> Final training schedule and materials will be shared before the program starts</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <TrainingProgramRegistrationForm title="Registration Form" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TrainingRegistrationClient;
