"use client";

import { useRouter } from 'next/navigation';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import FAQAccordion from '@/app/Components/FAQAccordion';

export default function FAQCategoryTemplate({ pageTitle, heading, description, contentHeading, contentParagraphs, faqs }) {
  const router = useRouter();

  const headingData = { title: pageTitle };

  const pageContentData = {
    sections: [
      {
        heading: contentHeading,
        paragraphs: contentParagraphs,
      },
    ],
  };

  const onSubmit = (e) => {
    e.preventDefault();
    router.push('/contact/book-appointment?type=faq');
  };

  return (
    <div>
      <Section className={'cs_page_heading cs_bg_filed cs_center'} backgroundImage="/assets/img/Top-Header.png">
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="50" topSpaceMd="60" bottomSpaceLg="40" bottomSpaceMd="50">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-7">
              <div
                style={{
                  padding: '34px',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e8e8e8',
                }}
              >
                <AccentHeading style={{ marginBottom: '22px' }}>Ask Our Fertility Team</AccentHeading>
                <p className="mb-4" style={{ color: '#666' }}>
                  Fill this quick form and our team will guide you with the right next steps.
                </p>

                <form className="cs_contact_form" onSubmit={onSubmit}>
                  <div className="row cs_gap_y_20">
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Full Name <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input type="text" required placeholder="Enter your full name" className="cs_form_field" />
                    </div>
                    <div className="col-md-6">
                      <label className="cs_form_label">
                        Phone Number <span style={{ color: '#E45352' }}>*</span>
                      </label>
                      <input type="tel" required placeholder="Enter your phone number" className="cs_form_field" />
                    </div>
                    <div className="col-md-12">
                      <label className="cs_form_label">Your Question</label>
                      <textarea rows="1" placeholder="Type your concern here" className="cs_form_field" style={{ resize: 'vertical' }} />
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="cs_btn cs_style_1 cs_color_1">
                        <span>Submit & Book Consultation</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5 cs_service_page_content">
              <AccentHeading style={{ marginBottom: '18px' }}>{heading}</AccentHeading>
              <p className="cs_ivf_content_paragraph">{description}</p>
              <ul className="cs_list cs_list_style_1">
                <li>Personalized guidance from fertility experts</li>
                <li>Clear treatment understanding and timeline</li>
                <li>Help with tests, planning and cost clarity</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section topSpaceLg="0" topSpaceMd="0" bottomSpaceLg="40" bottomSpaceMd="50">
        <div className="container">
          <div className="row">
            <div className="col-12 cs_service_page_content">
              <IVFContentSection data={pageContentData} accentHeadingStyle />
            </div>
          </div>

          <div className="row" style={{ marginTop: '40px' }}>
            <div className="col-12">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

