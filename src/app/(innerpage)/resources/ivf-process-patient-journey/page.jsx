/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';

const headingData = {
  title: 'IVF Process / Patient Journey',
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
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
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_service_details text-center mb-5">
                <h3 className="cs_service_heading">Your Complete IVF Journey with Seeds of Innocens</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  At Seeds of Innocens, we guide you through every step of your IVF journey with care, expertise, and support. Understanding the process helps reduce anxiety and sets realistic expectations. Here's what you can expect during your journey with us.
                </p>
              </div>
            </div>
          </div>

          {/* Main Image Placeholder */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="cs_service_details_thumbnail">
                <Image 
                  src="/assets/img/recent_post_1.png" 
                  alt="IVF Process Journey" 
                  width={1200} 
                  height={500}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div className="cs_service_details">
                {/* Step 1 */}
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-color)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      marginBottom: '20px'
                    }}>
                      1
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h4 className="cs_service_heading" style={{ marginBottom: '15px' }}>Initial Consultation</h4>
                    <p className="cs_service_subtitle" style={{ lineHeight: '1.8' }}>
                      Your journey begins with a comprehensive consultation where our fertility specialist reviews your medical history, conducts necessary tests, and discusses your treatment options. This is an opportunity to ask questions and understand the IVF process.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-color)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      marginBottom: '20px'
                    }}>
                      2
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h4 className="cs_service_heading" style={{ marginBottom: '15px' }}>Pre-Treatment Evaluation</h4>
                    <p className="cs_service_subtitle" style={{ lineHeight: '1.8' }}>
                      Before starting treatment, we perform thorough evaluations including blood tests, ultrasound scans, and fertility assessments. This helps us create a personalized treatment plan tailored to your specific needs.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-color)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      marginBottom: '20px'
                    }}>
                      3
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h4 className="cs_service_heading" style={{ marginBottom: '15px' }}>Ovarian Stimulation</h4>
                    <p className="cs_service_subtitle" style={{ lineHeight: '1.8' }}>
                      During this phase, you'll receive fertility medications to stimulate your ovaries to produce multiple eggs. Regular monitoring through blood tests and ultrasounds ensures optimal response to the medications.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-color)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      marginBottom: '20px'
                    }}>
                      4
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h4 className="cs_service_heading" style={{ marginBottom: '15px' }}>Egg Retrieval</h4>
                    <p className="cs_service_subtitle" style={{ lineHeight: '1.8' }}>
                      Once the eggs are mature, a minor surgical procedure is performed to retrieve them. This is done under sedation and typically takes 15-20 minutes. You can go home the same day after a brief recovery period.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-color)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      marginBottom: '20px'
                    }}>
                      5
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h4 className="cs_service_heading" style={{ marginBottom: '15px' }}>Fertilization & Embryo Development</h4>
                    <p className="cs_service_subtitle" style={{ lineHeight: '1.8' }}>
                      In our advanced laboratory, eggs are fertilized with sperm (IVF) or through ICSI. The embryos are then cultured and monitored for 3-5 days. Our embryologists select the best quality embryos for transfer.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-color)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      marginBottom: '20px'
                    }}>
                      6
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h4 className="cs_service_heading" style={{ marginBottom: '15px' }}>Embryo Transfer</h4>
                    <p className="cs_service_subtitle" style={{ lineHeight: '1.8' }}>
                      The selected embryo(s) are transferred into your uterus through a simple, painless procedure. This is done in our clinic and takes just a few minutes. You can resume normal activities after a short rest.
                    </p>
                  </div>
                </div>

                {/* Step 7 */}
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-color)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      marginBottom: '20px'
                    }}>
                      7
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h4 className="cs_service_heading" style={{ marginBottom: '15px' }}>Pregnancy Test & Follow-up</h4>
                    <p className="cs_service_subtitle" style={{ lineHeight: '1.8' }}>
                      Approximately 10-14 days after embryo transfer, a blood test confirms pregnancy. If positive, we continue monitoring and provide support throughout your pregnancy journey. Our team is with you every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">Timeline Overview</h3>
                  <ul className="cs_mp_0">
                    <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', fontWeight: 'bold', color: 'var(--accent-color)' }}>Week 1-2:</span>
                      <br />Initial Consultation & Evaluation
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', fontWeight: 'bold', color: 'var(--accent-color)' }}>Week 3-4:</span>
                      <br />Ovarian Stimulation
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', fontWeight: 'bold', color: 'var(--accent-color)' }}>Week 5:</span>
                      <br />Egg Retrieval & Fertilization
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', fontWeight: 'bold', color: 'var(--accent-color)' }}>Week 6:</span>
                      <br />Embryo Transfer
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '20px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', fontWeight: 'bold', color: 'var(--accent-color)' }}>Week 7-8:</span>
                      <br />Pregnancy Test & Follow-up
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg">
                  <h3 className="cs_widget_title">Support Resources</h3>
                  <ul className="cs_mp_0">
                    <li style={{ marginBottom: '10px' }}>
                      <a href="/resources/faqs" style={{ color: 'var(--body-color)' }}>FAQs</a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <a href="/resources/blogs/fertility" style={{ color: 'var(--body-color)' }}>Fertility Blogs</a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <a href="/contact" style={{ color: 'var(--body-color)' }}>Contact Support</a>
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

