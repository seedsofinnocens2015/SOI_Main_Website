import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';

const headingData = {
  title: 'Treatment Guides',
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div className="cs_service_details">
                <h3 className="cs_service_heading">Comprehensive Treatment Guides</h3>
                <p className="cs_service_subtitle">
                  At Seeds of Innocens, we believe in empowering our patients with knowledge. Our comprehensive treatment guides are designed to help you understand every aspect of fertility treatments, from initial consultation to post-treatment care.
                </p>
                
                <div className="cs_height_30 cs_height_lg_30" />
                
                {/* Image Placeholder */}
                <div className="cs_service_details_thumbnail mb-4">
                  <Image 
                    src="/assets/img/recent_post_1.png" 
                    alt="Treatment Guides" 
                    width={800} 
                    height={450}
                    className="w-100"
                  />
                </div>

                <h4 className="cs_service_heading">Understanding Your Treatment Options</h4>
                <p className="cs_service_subtitle">
                  Our treatment guides cover a wide range of fertility procedures including IVF, ICSI, IUI, egg freezing, and more. Each guide provides detailed information about:
                </p>
                <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>✓</span>
                    Treatment procedure and timeline
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>✓</span>
                    What to expect during each phase
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>✓</span>
                    Preparation and requirements
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>✓</span>
                    Success rates and outcomes
                  </li>
                  <li style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>✓</span>
                    Post-treatment care and follow-up
                  </li>
                </ul>

                <div className="cs_height_40 cs_height_lg_40" />

                <h4 className="cs_service_heading">Step-by-Step Process</h4>
                <p className="cs_service_subtitle">
                  Each treatment guide includes a detailed step-by-step process, helping you understand what happens at each stage of your fertility journey. We provide clear explanations of medical procedures, timelines, and what you can expect during your treatment.
                </p>

                <div className="cs_height_30 cs_height_lg_30" />

                {/* Image Placeholder */}
                <div className="cs_service_details_thumbnail mb-4">
                  <Image 
                    src="/assets/img/recent_post_1.png" 
                    alt="Treatment Process" 
                    width={800} 
                    height={450}
                    className="w-100"
                  />
                </div>

                <h4 className="cs_service_heading">Expert Insights</h4>
                <p className="cs_service_subtitle">
                  Our guides are developed by our team of experienced fertility specialists, ensuring that you receive accurate, up-to-date information. We regularly update our guides to reflect the latest advances in fertility treatment and research.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg">
                  <h3 className="cs_widget_title">Related Resources</h3>
                  <ul className="cs_mp_0">
                    <li style={{ marginBottom: '10px' }}>
                      <a href="/resources/ivf-process-patient-journey" style={{ color: 'var(--body-color)' }}>IVF Process / Patient Journey</a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <a href="/resources/faqs" style={{ color: 'var(--body-color)' }}>FAQs</a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <a href="/resources/blogs/fertility" style={{ color: 'var(--body-color)' }}>Fertility Blogs</a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <a href="/resources/downloads" style={{ color: 'var(--body-color)' }}>Downloads</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

