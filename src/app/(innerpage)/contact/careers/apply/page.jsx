"use client";
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getWebsiteApiBaseUrl, submitJobApplicationMultipart } from '@/app/utils/websiteForms';
import { getThankYouUrl, THANK_YOU_TYPE } from '@/app/utils/thankYou';

const ivfContentData = {
  sections: [
    {
      heading: 'Job Application Form',
      paragraphs: [
        'Thank you for your interest in joining Seeds of Innocens. Please fill out the form below to apply for the position. We\'ll review your application and get back to you soon. We look forward to learning more about you and how you can contribute to our mission of helping couples achieve their dream of parenthood.',
      ],
      // sideImage: '/assets/img/recent_post2webp',
    },
  ],
};

const JOBS_API_URL = `${getWebsiteApiBaseUrl()}/api/jobs`;

const Page = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [jobOpenings, setJobOpenings] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState('');
  const [jobsLoading, setJobsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const requestedJobId = new URLSearchParams(window.location.search).get('jobId');
    fetch(JOBS_API_URL, { cache: 'no-store' })
      .then(async (response) => {
        const payload = await response.json().catch(() => null);
        if (!response.ok || !payload?.ok) throw new Error('Unable to load positions');
        return Array.isArray(payload.data) ? payload.data : [];
      })
      .then((jobs) => {
        if (cancelled) return;
        setJobOpenings(jobs);
        const requestedJob = jobs.find((job) => job._id === requestedJobId);
        if (requestedJob) setSelectedJobId(requestedJob._id);
      })
      .catch(() => {
        if (!cancelled) setError('Current positions could not be loaded. Please return to the careers page and try again.');
      })
      .finally(() => {
        if (!cancelled) setJobsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    const fd = new FormData(e.target);
    try {
      const { ok, data } = await submitJobApplicationMultipart(fd);
      if (ok) {
        router.push(getThankYouUrl(THANK_YOU_TYPE.careersApply));
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
              <IVFContentSection data={ivfContentData} accentHeadingStyle />
            </div>
          </div>
        </div>
      </Section>

      {/* Application Form Section */}
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
                <AccentHeading style={{ marginBottom: '30px' }}>Application Form</AccentHeading>

                <form className="cs_contact_form" onSubmit={handleSubmit}>
                  <div className="row cs_gap_y_30">
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Position Applied For <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <select
                        required
                        name="jobOpeningId"
                        className="cs_form_field"
                        value={selectedJobId}
                        onChange={(event) => setSelectedJobId(event.target.value)}
                        disabled={jobsLoading || jobOpenings.length === 0}
                      >
                        <option value="">{jobsLoading ? 'Loading positions...' : 'Select Position'}</option>
                        {jobOpenings.map((job) => (
                          <option key={job._id} value={job._id}>
                            {job.title} - {job.location} ({job.jobField})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Full Name <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="fullName"
                        placeholder="Enter your full name"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Email Address <span style={{ fontSize: '12px', color: '#999' }}>(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Phone Number <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        placeholder="Enter your phone number"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Years of Experience <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="number"
                        required
                        name="experience"
                        placeholder="Enter years of experience"
                        min="0"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Current Location <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="location"
                        placeholder="Enter your current city"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Notice Period <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <select
                        required
                        name="noticePeriod"
                        className="cs_form_field"
                      >
                        <option value="">Select notice period</option>
                        <option value="immediate">Immediate Joining</option>
                        <option value="15">15 days</option>
                        <option value="30">30 days</option>
                        <option value="45">45 days</option>
                        <option value="60">60 days</option>
                        <option value="90">90 days</option>
                        <option value="90+">90+ days</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Educational Qualification <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="qualification"
                        placeholder="e.g., MBBS, MD, B.Sc, M.Sc, etc."
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Current/Last Organization
                      </label>
                      <input
                        type="text"
                        name="currentOrg"
                        placeholder="Enter your current or last organization name"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Current CTC <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="currentCtc"
                        placeholder="e.g., ₹6 LPA or Not Applicable"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Expected CTC <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="expectedCtc"
                        placeholder="e.g., ₹8 LPA"
                        className="cs_form_field"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Resume/CV <span style={{ color: '#df3655' }}>*</span>
                      </label>
                      <input
                        type="file"
                        required
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        className="cs_form_field"
                      />
                      <small style={{ color: '#666', display: 'block', marginTop: '5px', fontSize: '14px' }}>
                        Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                      </small>
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">
                        Cover Letter / Additional Information
                      </label>
                      <textarea
                        rows="5"
                        name="coverLetter"
                        placeholder="Tell us why you're interested in this position and what makes you a good fit..."
                        className="cs_form_field"
                        style={{ resize: 'vertical' }}
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
                        <span>{isSubmitting ? 'Submitting…' : 'Submit Application'}</span>
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
                  <li><strong>Application Review:</strong> Our HR team will review your application within 3-5 business days</li>
                  <li><strong>Shortlisting:</strong> If shortlisted, you&apos;ll receive a call or email for the next steps</li>
                  <li><strong>Interview:</strong> Selected candidates will be invited for an interview</li>
                  <li><strong>Decision:</strong> Final decision will be communicated within 2 weeks of interview</li>
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

