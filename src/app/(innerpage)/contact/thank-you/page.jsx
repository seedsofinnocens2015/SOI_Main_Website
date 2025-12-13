"use client";
import { useSearchParams } from 'next/navigation';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Link from 'next/link';
import { FaCheckCircle, FaPhoneAlt, FaEnvelope, FaHome, FaCalendarAlt, FaPhone } from 'react-icons/fa';

const headingData = {
  title: 'Thank You',
};

const ThankYouPage = () => {
  const searchParams = useSearchParams();
  const formType = searchParams.get('type') || 'default';

  // Configuration based on form type
  const getFormConfig = () => {
    switch (formType) {
      case 'appointment':
      case 'book-appointment':
        return {
          title: 'Appointment Request Submitted Successfully!',
          description: 'Thank you for booking an appointment with Seeds of Innocence. We have received your request and our team will contact you shortly to confirm your appointment.',
          nextSteps: [
            {
              title: 'Confirmation Call',
              description: 'Our team will call you within 24 hours to confirm your appointment date and time.',
            },
            {
              title: 'Email Confirmation',
              description: 'You will receive an email confirmation with all the appointment details.',
            },
            {
              title: 'Reminder',
              description: "We'll send you a reminder 24 hours before your scheduled appointment.",
            },
            {
              title: 'Preparation',
              description: 'Please bring any relevant medical reports or documents to your appointment.',
            },
          ],
          importantInfo: [
            {
              label: 'Office Hours',
              value: 'Monday - Sunday, 9:00 AM - 6:00 PM',
            },
            {
              label: 'Location',
              value: 'Please arrive 10 minutes before your scheduled appointment time',
            },
            {
              label: 'Cancellation',
              value: 'If you need to reschedule or cancel, please contact us at least 24 hours in advance',
            },
            {
              label: 'Documents',
              value: 'Bring a valid ID and any previous medical reports or test results',
            },
          ],
          backLink: '/contact/book-appointment',
          backLinkText: 'Book Another Appointment',
          backLinkIcon: FaCalendarAlt,
        };

      case 'call-back':
        return {
          title: 'Call Back Request Submitted Successfully!',
          description: 'Thank you for requesting a call back. We have received your request and our team will call you at your preferred time.',
          nextSteps: [
            {
              title: 'Confirmation',
              description: 'You\'ll receive a confirmation message within minutes.',
            },
            {
              title: 'Our Call',
              description: 'Our specialist will call you at your preferred time.',
            },
            {
              title: 'Discussion',
              description: 'We\'ll answer all your questions and provide guidance.',
            },
            {
              title: 'Response Time',
              description: 'We typically respond to call back requests within the same day (before 2 PM) or next day (after 2 PM).',
            },
          ],
          importantInfo: [
            {
              label: 'Response Time',
              value: 'Same day for requests before 2 PM, next day for requests after 2 PM',
            },
            {
              label: 'Weekend Requests',
              value: 'Monday morning for weekend requests',
            },
            {
              label: 'Availability',
              value: 'Available 24/7 for urgent consultations',
            },
          ],
          backLink: '/contact/call-back-form',
          backLinkText: 'Request Another Call Back',
          backLinkIcon: FaPhone,
        };

      default:
        return {
          title: 'Thank You for Your Submission!',
          description: 'We have received your request and our team will contact you shortly.',
          nextSteps: [
            {
              title: 'Confirmation',
              description: 'You\'ll receive a confirmation message soon.',
            },
            {
              title: 'Response',
              description: 'Our team will get back to you as soon as possible.',
            },
          ],
          importantInfo: [],
          backLink: '/',
          backLinkText: 'Go to Home',
          backLinkIcon: FaHome,
        };
    }
  };

  const config = getFormConfig();
  const BackLinkIcon = config.backLinkIcon || FaHome;

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Thank You Content Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="60"
        bottomSpaceLg="80"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{
                padding: '50px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e8e8e8',
                textAlign: 'center'
              }}>
                <div style={{ marginBottom: '30px' }}>
                  <FaCheckCircle
                    style={{
                      fontSize: '80px',
                      color: '#28a745',
                      marginBottom: '20px'
                    }}
                  />
                  <h2 className="cs_ivf_content_heading" style={{ marginBottom: '15px', color: '#28a745' }}>
                    {config.title}
                  </h2>
                  <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8' }}>
                    {config.description}
                  </p>
                </div>

                <div style={{
                  padding: '30px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  marginBottom: '30px',
                  textAlign: 'left'
                }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#E45352' }}>
                    What Happens Next?
                  </h3>
                  <ul className="cs_list cs_list_style_1" style={{ marginBottom: '0' }}>
                    {config.nextSteps.map((step, index) => (
                      <li key={index}>
                        <strong>{step.title}:</strong> {step.description}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  padding: '30px',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  border: '2px solid #E45352',
                  marginBottom: '30px'
                }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#E45352', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                    <FaPhoneAlt /> Need Immediate Assistance?
                  </h3>
                  <p style={{ marginBottom: '15px', fontSize: '16px' }}>
                    If you have any urgent questions or need to modify your request, please contact us:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                    <p style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaPhoneAlt style={{ color: '#E45352', fontSize: '18px' }} />
                      <a href="tel:+91-9810350512" style={{ color: 'var(--body-color)', textDecoration: 'none', fontSize: '16px', fontWeight: '600' }}>
                        +91-9810350512
                      </a>
                    </p>
                    <p style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaEnvelope style={{ color: '#E45352', fontSize: '18px' }} />
                      <a href="mailto:info@seedsofinnocens.com" style={{ color: 'var(--body-color)', textDecoration: 'none', fontSize: '16px', fontWeight: '600' }}>
                        info@seedsofinnocens.com
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link
                    href="/"
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{ minWidth: '150px' }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <FaHome /> Go to Home
                    </span>
                  </Link>
                  <Link
                    href={config.backLink}
                    className="cs_btn cs_style_1"
                    style={{
                      minWidth: '150px',
                      backgroundColor: 'transparent',
                      border: '2px solid #E45352',
                      color: '#E45352'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <BackLinkIcon /> {config.backLinkText}
                    </span>
                  </Link>
                </div>
              </div>

              {config.importantInfo.length > 0 && (
                <div style={{
                  padding: '30px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  marginTop: '30px',
                  borderLeft: '4px solid #E45352'
                }}>
                  <h3 className="cs_ivf_content_heading" style={{ fontSize: '24px', marginBottom: '20px' }}>
                    Important Information
                  </h3>
                  <ul className="cs_list cs_list_style_1">
                    {config.importantInfo.map((info, index) => (
                      <li key={index}>
                        <strong>{info.label}:</strong> {info.value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ThankYouPage;

