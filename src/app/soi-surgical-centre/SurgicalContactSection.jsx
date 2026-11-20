"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaPhone, FaEnvelope, FaClock, FaLocationDot, FaShieldHalved } from 'react-icons/fa6';
import { submitSurgicalConsultation } from '@/app/utils/websiteForms';
import { getThankYouUrl, THANK_YOU_TYPE } from '@/app/utils/thankYou';
import styles from './surgicalContact.module.scss';

const SURGICAL_CENTRES = [
  'Delhi - Malviya Nagar',
  'Delhi - Janakpuri',
  'Gurugram - Sector 14',
  'Noida - Sector 62',
  'Ghaziabad',
  'Meerut',
  'Lucknow',
  'Kolkata',
];

const PROCEDURES = [
  'Hysteroscopy (Polyps / Septum / Adhesions)',
  'Laparoscopy (Fibroids / Cysts / Endometriosis)',
  'Laparoscopic Myomectomy (Fibroid Removal)',
  'Tubal Recanalization / Cannulation',
  'Fertility-Enhancing Surgery',
  'Second Opinion on Surgery',
  'Other Gynecological Query',
];

export default function SurgicalContactSection() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      center: formData.get('center'),
      message: `${formData.get('procedure') || ''} - ${formData.get('message') || ''}`.trim(),
      source: 'Surgical Center Contact Section',
      captchaAccepted: true,
    };

    if (!payload.center) {
      setErrorMessage('Please select your nearest centre.');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitSurgicalConsultation(payload);
      if (result.ok) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('soi_appointment_submitted', 'true');
        }
        form.reset();
        router.push(getThankYouUrl(THANK_YOU_TYPE.appointment));
      } else {
        setErrorMessage(result.data?.error || 'Failed to submit. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage('A network error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactWrapper}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>GET IN TOUCH</span>
          <h2 className={styles.headingTitle}>
            Contact Seeds of Innocence <span className="cs_accent_color">Surgical Centre</span>
          </h2>
          <p className={styles.headingSubtitle}>
            Schedule an in-depth consultation with our senior laparoscopic & hysteroscopic surgeons. We provide confidential guidance, second opinions, and personalized surgical care.
          </p>
        </div>

        <div className="row cs_gap_y_40 align-items-stretch">
          {/* Left Column: Direct Helpline & Centres */}
          <div className="col-lg-5">
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Connect With Our Care Coordinators</h3>
              <p className={styles.infoDescription}>
                Reach out directly to book an immediate appointment or discuss insurance and daycare procedures.
              </p>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.iconCircle}>
                    <FaPhone aria-hidden="true" />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Consultation & Helpline</span>
                    <a href="tel:+91-9810350512" className={styles.contactValue}>
                      +91-9810350512
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconCircle}>
                    <FaEnvelope aria-hidden="true" />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Official Email</span>
                    <a href="mailto:info@seedsofinnocens.com" className={styles.contactValue}>
                      info@seedsofinnocens.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconCircle}>
                    <FaClock aria-hidden="true" />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>OPD & Surgery Timings</span>
                    <span className={styles.contactValueText}>
                      Mon – Sun: 9:00 AM – 6:00 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.centresSection}>
                <h4 className={styles.centresHeading}>
                  <FaLocationDot aria-hidden="true" className={styles.locationIcon} />
                  <span>Key Surgical Centre Locations</span>
                </h4>
                <div className={styles.centresGrid}>
                  <div className={styles.centreBadge}>Delhi - Malviya Nagar</div>
                  <div className={styles.centreBadge}>Delhi - Janakpuri</div>
                  <div className={styles.centreBadge}>Gurugram - Sec 14</div>
                  <div className={styles.centreBadge}>Noida - Sec 62</div>
                  <div className={styles.centreBadge}>Ghaziabad</div>
                  <div className={styles.centreBadge}>Meerut</div>
                  <div className={styles.centreBadge}>Lucknow</div>
                  <div className={styles.centreBadge}>Kolkata</div>
                </div>
              </div>

              <div className={styles.insuranceBox}>
                <FaShieldHalved className={styles.shieldIcon} aria-hidden="true" />
                <div>
                  <strong>Cashless Mediclaim & Insurance</strong>
                  <p>All major TPAs and health insurance accepted with dedicated paperwork support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="col-lg-7">
            <div className={styles.formCard}>
              <div className={styles.formCardHeader}>
                <h3 className={styles.formTitle}>Book Your Surgical Consultation</h3>
                <p className={styles.formSubtitle}>
                  Fill in your details below and our medical team will get in touch within 30 minutes.
                </p>
              </div>

              {errorMessage && (
                <div className={styles.errorAlert} role="alert">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className={styles.fieldLabel} htmlFor="contact-name">
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ananya Sharma"
                      className={styles.inputField}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className={styles.fieldLabel} htmlFor="contact-phone">
                      Mobile Number <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={styles.inputField}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className={styles.fieldLabel} htmlFor="contact-centre">
                      Nearest Centre <span className={styles.required}>*</span>
                    </label>
                    <select
                      id="contact-centre"
                      name="center"
                      required
                      defaultValue=""
                      className={styles.selectField}
                    >
                      <option value="" disabled>Select your nearest centre</option>
                      {SURGICAL_CENTRES.map((centre) => (
                        <option key={centre} value={centre}>
                          {centre}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className={styles.fieldLabel} htmlFor="contact-procedure">
                      Condition / Procedure
                    </label>
                    <select
                      id="contact-procedure"
                      name="procedure"
                      defaultValue=""
                      className={styles.selectField}
                    >
                      <option value="">Select condition or procedure (optional)</option>
                      {PROCEDURES.map((proc) => (
                        <option key={proc} value={proc}>
                          {proc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className={styles.fieldLabel} htmlFor="contact-message">
                    Tell us about your symptoms or medical history (optional)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="Briefly describe your symptoms or share if you have prior ultrasound/MRI reports..."
                    className={styles.textareaField}
                  />
                </div>

                <div className={styles.privacyNote}>
                  <span>🔒 100% Confidential. Your medical data is strictly protected.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? 'Submitting Request...' : 'Book Your Consultation Now'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
