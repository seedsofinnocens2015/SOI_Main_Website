import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';

const headingData = {
  title: 'Doctor Insights',
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
                <h3 className="cs_service_heading">Expert Insights from Our Fertility Specialists</h3>
                <p className="cs_service_subtitle">
                  Our team of experienced fertility specialists shares valuable insights, tips, and advice to help you on your fertility journey. From understanding treatment options to lifestyle recommendations, our doctors provide expert guidance.
                </p>
                
                <div className="cs_height_30 cs_height_lg_30" />
                
                {/* Image Placeholder */}
                <div className="cs_service_details_thumbnail mb-4">
                  <Image 
                    src="/assets/img/recent_post_1.png" 
                    alt="Doctor Insights" 
                    width={800} 
                    height={450}
                    className="w-100"
                  />
                </div>

                <h4 className="cs_service_heading">Understanding Fertility Treatments</h4>
                <p className="cs_service_subtitle">
                  Our doctors regularly share insights about various fertility treatments, explaining the science behind procedures, success factors, and what patients should know before starting treatment. These insights help demystify the fertility treatment process.
                </p>

                <div className="cs_height_30 cs_height_lg_30" />

                <h4 className="cs_service_heading">Lifestyle and Fertility</h4>
                <p className="cs_service_subtitle">
                  Learn about the impact of lifestyle factors on fertility, including diet, exercise, stress management, and environmental factors. Our specialists provide evidence-based recommendations to optimize your fertility health.
                </p>

                <div className="cs_height_30 cs_height_lg_30" />

                {/* Image Placeholder */}
                <div className="cs_service_details_thumbnail mb-4">
                  <Image 
                    src="/assets/img/recent_post_1.png" 
                    alt="Lifestyle and Fertility" 
                    width={800} 
                    height={450}
                    className="w-100"
                  />
                </div>

                <h4 className="cs_service_heading">Latest Research and Advances</h4>
                <p className="cs_service_subtitle">
                  Stay updated with the latest research and technological advances in fertility treatment. Our doctors share information about new techniques, improved success rates, and emerging treatments that can benefit patients.
                </p>

                <div className="cs_height_30 cs_height_lg_30" />

                <h4 className="cs_service_heading">Common Questions Answered</h4>
                <p className="cs_service_subtitle">
                  Our specialists address common questions and concerns that patients have about fertility treatments, helping you make informed decisions about your care. These insights are based on years of clinical experience and patient care.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">Featured Insights</h3>
                  <ul className="cs_mp_0">
                    <li style={{ marginBottom: '15px' }}>
                      <h5 style={{ fontSize: '16px', marginBottom: '5px' }}>IVF Success Factors</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Understanding what contributes to successful IVF outcomes</p>
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                      <h5 style={{ fontSize: '16px', marginBottom: '5px' }}>Age and Fertility</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>How age affects fertility and treatment options</p>
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                      <h5 style={{ fontSize: '16px', marginBottom: '5px' }}>Male Fertility</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Important factors in male fertility health</p>
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg">
                  <h3 className="cs_widget_title">Meet Our Doctors</h3>
                  <div className="cs_doctor_card mb-3">
                    <Image 
                      src="/assets/img/recent_post_1.png" 
                      alt="Doctor" 
                      width={100} 
                      height={100}
                      style={{ borderRadius: '50%', marginBottom: '10px' }}
                    />
                    <h5>Dr. Gauri Agarwal</h5>
                    <p style={{ fontSize: '14px', color: '#666' }}>Founder & Chief IVF Specialist</p>
                  </div>
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

