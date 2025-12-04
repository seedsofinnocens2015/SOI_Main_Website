import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Insurance / Financing Options',
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
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_service_details text-center mb-5">
                <h3 className="cs_service_heading">Making Fertility Treatment Accessible</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  At Seeds of Innocens, we understand that fertility treatment is a significant investment. We are committed to making quality fertility care accessible through various insurance and financing options. Our team will work with you to find the best payment solution for your needs.
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
                  alt="Insurance & Financing" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div className="cs_service_details">
                {/* Insurance Coverage Section */}
                <div style={{ 
                  padding: '40px', 
                  backgroundColor: '#f5f5f5', 
                  borderRadius: '10px',
                  marginBottom: '30px'
                }}>
                  <div className="row align-items-start">
                    <div className="col-md-3 mb-4 mb-md-0">
                      <div style={{ textAlign: 'center' }}>
                        <div style={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          backgroundColor: '#ffc1cc',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 20px',
                          padding: '20px'
                        }}>
                          <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#9b59b6',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                          }}>
                            <span style={{
                              position: 'absolute',
                              top: '-5px',
                              right: '-5px',
                              width: '20px',
                              height: '20px',
                              backgroundColor: '#e74c3c',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '12px',
                              fontWeight: 'bold'
                            }}>+</span>
                          </div>
                        </div>
                        <h4 className="cs_service_heading" style={{ fontSize: '22px', marginBottom: '10px', textAlign: 'left' }}>Insurance Coverage</h4>
                        <p className="cs_service_subtitle" style={{ fontSize: '14px', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
                          We accept most major health insurance plans and work directly with your provider to maximize benefits.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h4 className="cs_service_heading mb-3" style={{ fontSize: '24px' }}>Accepted Insurance Plans</h4>
                      <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '0', color: '#e74c3c', fontSize: '24px', fontWeight: 'bold' }}>✓</span>
                          Corporate health insurance plans
                        </li>
                        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '0', color: '#e74c3c', fontSize: '24px', fontWeight: 'bold' }}>✓</span>
                          Government health schemes
                        </li>
                        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '0', color: '#e74c3c', fontSize: '24px', fontWeight: 'bold' }}>✓</span>
                          Cashless treatment options
                        </li>
                        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '0', color: '#e74c3c', fontSize: '24px', fontWeight: 'bold' }}>✓</span>
                          Reimbursement support and claim assistance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Financing Plans Section */}
                <div style={{ 
                  padding: '40px', 
                  backgroundColor: '#f5f5f5', 
                  borderRadius: '10px',
                  marginBottom: '30px'
                }}>
                  <div className="row align-items-start">
                    <div className="col-md-3 mb-4 mb-md-0">
                      <div style={{ textAlign: 'center' }}>
                        <div style={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          backgroundColor: '#ffc1cc',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 20px',
                          padding: '20px'
                        }}>
                          <div style={{
                            fontSize: '50px'
                          }}>
                            💳
                          </div>
                        </div>
                        <h4 className="cs_service_heading" style={{ fontSize: '22px', marginBottom: '10px', textAlign: 'left' }}>Flexible Financing</h4>
                        <p className="cs_service_subtitle" style={{ fontSize: '14px', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
                          Multiple payment options including zero-interest EMI and extended payment plans.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h4 className="cs_service_heading mb-3" style={{ fontSize: '24px' }}>Financing Options Available</h4>
                      <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '0', color: '#e74c3c', fontSize: '24px', fontWeight: 'bold' }}>✓</span>
                          Zero-interest EMI options (up to 12 months)
                        </li>
                        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '0', color: '#e74c3c', fontSize: '24px', fontWeight: 'bold' }}>✓</span>
                          Extended payment plans with flexible terms
                        </li>
                        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '0', color: '#e74c3c', fontSize: '24px', fontWeight: 'bold' }}>✓</span>
                          Treatment packages with special discounts
                        </li>
                        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '0', color: '#e74c3c', fontSize: '24px', fontWeight: 'bold' }}>✓</span>
                          Partner financing institutions for easy approval
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Financial Counseling Section */}
                <div style={{ 
                  padding: '40px', 
                  backgroundColor: '#e3f2fd', 
                  borderRadius: '10px',
                  borderLeft: '4px solid #2196f3'
                }}>
                  <h4 className="cs_service_heading mb-3" style={{ color: '#1565c0', fontSize: '24px' }}>
                    Financial Counseling Services
                  </h4>
                  <p className="cs_service_subtitle" style={{ lineHeight: '1.8', margin: 0, fontSize: '16px' }}>
                    Our dedicated financial counseling team is available to help you understand all payment options, insurance coverage, and financing plans. We believe in transparency and will provide a clear breakdown of all costs before you begin treatment. Schedule a free consultation to discuss your financial options.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">Quick Contact</h3>
                  <p style={{ marginBottom: '15px' }}>
                    For insurance and financing inquiries, contact our team:
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <strong>Phone:</strong><br />
                    <a href="tel:+91-XXXXXXXXXX">+91-XXXXXXXXXX</a>
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <strong>Email:</strong><br />
                    <a href="mailto:finance@seedsofinnocens.com">finance@seedsofinnocens.com</a>
                  </p>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg">
                  <h3 className="cs_widget_title">Related Resources</h3>
                  <ul className="cs_mp_0">
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/resources/ivf-cost-package-details" style={{ color: 'var(--body-color)' }}>IVF Cost & Package Details</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/resources/faqs" style={{ color: 'var(--body-color)' }}>FAQs</Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <Link href="/contact" style={{ color: 'var(--body-color)' }}>Contact Us</Link>
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

