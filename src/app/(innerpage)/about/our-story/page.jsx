"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';
import Image from 'next/image';

const page = () => {
  const headingData = {
    title: 'Our Story',
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Our Story Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-6">
              <div className="cs_about_thumb">
                <div className="cs_about_thumb_1" style={{ 
                  borderRadius: '10px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <Image 
                    src="/assets/img/ourstory.JPG" 
                    alt="Our Journey" 
                    width={600} 
                    height={400}
                    loading="eager"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '10px'
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="cs_section_title cs_fs_42" style={{ 
                fontSize: '42px',
                fontWeight: '700',
                color: '#0A2A43',
                marginBottom: '30px',
                position: 'relative',
                display: 'inline-block',
                lineHeight: '1.2'
              }}>
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  Our
                  <span style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '60px',
                    height: '4px',
                    backgroundColor: '#E45352',
                    borderRadius: '2px'
                  }}></span>
                </span>
                {' '}Journey
              </h2>
              <div className="cs_height_20" />
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                In 2015, the second generation of the promoter family, Dr. Rajat Arora, and Dr. Gauri Agarwal, co-founded Seeds of Innocens, one of India&apos;s most recognised chains of IVF Clinics.
              </p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                Since then, SOI has grown to more than 35+ IVF centres across 8 states. In addition to the domestic expansion, SOI has also ventured overseas such as in Muscat, Oman, and Lusaka, Zambia.
              </p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                Seeds of Innocens has collaborated with the Department of Reproductive Sciences, University of Gent, Belgium for the exchange of best practices, research, and technology in the field of Infertility.
              </p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                Seeds of Innocens is the first IVF lab in India and the only lab in North India, to establish an in-house center of excellence for Reproductive Genetics with its own Genetic Testing Lab.
              </p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                Dr. Gauri has been a visionary in the field of IVF and has pioneered in implementing path-breaking research & use of new technologies/ techniques like PRP and Genetic Screening (PGS/ PGD) to achieve success rates of up to 78% along with assurance of Healthy Term Pregnancy and Genetically Healthy Baby.
              </p>
            </div>
          </div>
          
          <div className="cs_height_60" />
          
          <div className="row cs_gap_y_40">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36" style={{ 
                fontSize: '36px',
                fontWeight: '700',
                color: '#0A2A43',
                marginBottom: '30px',
                position: 'relative',
                display: 'inline-block',
                lineHeight: '1.2'
              }}>
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  Our
                  <span style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '60px',
                    height: '4px',
                    backgroundColor: '#E45352',
                    borderRadius: '2px'
                  }}></span>
                </span>
                {' '}Milestones
              </h3>
              <div className="cs_height_30" />
              <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
                {/* Ghaziabad Centre */}
                <div className="col-lg-4 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                  }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                      <Image 
                        src="/assets/img/Picture1.png" 
                        alt="Ghaziabad Centre Inauguration" 
                        width={400} 
                        height={250}
                        loading="eager"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#0A2A43',
                        marginBottom: '10px',
                        lineHeight: '1.4'
                      }}>
                        Ghaziabad Centre
                      </h4>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#666', 
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Inaugurated by Shri Brajesh Pathak Ji, Deputy Chief Minister, Uttar Pradesh
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lucknow Centre */}
                <div className="col-lg-4 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                  }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                      <Image 
                        src="/assets/img/Picture2.png" 
                        alt="Lucknow Centre Inauguration" 
                        width={400} 
                        height={250}
                        loading="eager"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#0A2A43',
                        marginBottom: '10px',
                        lineHeight: '1.4'
                      }}>
                        Lucknow Centre
                      </h4>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#666', 
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Inaugurated by Shri Brajesh Pathak Ji, Deputy Chief Minister, Uttar Pradesh
                      </p>
                    </div>
                  </div>
                </div>

                {/* Patna Centre */}
                <div className="col-lg-4 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                  }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                      <Image 
                        src="/assets/img/Picture3.png" 
                        alt="Patna Centre Inauguration" 
                        width={400} 
                        height={250}
                        loading="eager"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#0A2A43',
                        marginBottom: '10px',
                        lineHeight: '1.4'
                      }}>
                        Patna Centre
                      </h4>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#666', 
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Inaugurated by Mangal Pandey Ji, Minister of Health, Bihar
                      </p>
                    </div>
                  </div>
                </div>

                {/* Guwahati Centre */}
                <div className="col-lg-4 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                  }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                      <Image 
                        src="/assets/img/Picture4.png" 
                        alt="Genestrings Diagnostic Centre Inauguration" 
                        width={400} 
                        height={250}
                        loading="eager"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#0A2A43',
                        marginBottom: '10px',
                        lineHeight: '1.4'
                      }}>
                        Guwahati Centre
                      </h4>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#666', 
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                       Inaugurated by Smt Riniki Bhuyan Sharma,w/o CM Shri Himanta Biswa Sarma, Assam
                      </p>
                    </div>
                  </div>
                </div>

                {/* Jagriti Enclave Centre */}
                <div className="col-lg-4 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                  }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                      <Image 
                        src="/assets/img/Picture5.png" 
                        alt="Jagriti Enclave Centre Inauguration" 
                        width={400} 
                        height={250}
                        loading="eager"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#0A2A43',
                        marginBottom: '10px',
                        lineHeight: '1.4'
                      }}>
                        Jagriti Enclave Centre
                      </h4>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#666', 
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Inaugurated by Shri Mahesh Giri, Former MP, Delhi
                      </p>
                    </div>
                  </div>
                </div>

                {/* Genestrings Diagnostic Centre - Second */}
                <div className="col-lg-4 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                  }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                      <Image 
                        src="/assets/img/Picture6.png" 
                        alt="Genestrings Diagnostic Centre Inauguration" 
                        width={400} 
                        height={250}
                        loading="eager"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#0A2A43',
                        marginBottom: '10px',
                        lineHeight: '1.4'
                      }}>
                        Genestrings Diagnostic Centre
                      </h4>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#666', 
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Inaugurated by Shri J.P Nadda, Health and Family Welfare and Parliamentary Affairs
                      </p>
                    </div>


                  </div>
                </div>

                {/* Faridabad Centre */}
                <div className="col-lg-4 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                  }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                      <Image 
                        src="/assets/img/Picture7.png" 
                        alt="Faridabad Centre Inauguration" 
                        width={400} 
                        height={250}
                        loading="eager"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#0A2A43',
                        marginBottom: '10px',
                        lineHeight: '1.4'
                      }}>
                        Faridabad Centre
                      </h4>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#666', 
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                       Inaugurated by Shri Rajnath Singh Ji, Home Minister
                      </p>
                    </div>
                  </div>
                </div>

                {/* Malviya Nagar Centre */}
                <div className="col-lg-4 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                  }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                      <Image 
                        src="/assets/img/Picture8.png" 
                        alt="Faridabad Centre Inauguration" 
                        width={400}
                        loading="eager" 
                        height={250}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h4 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#0A2A43',
                        marginBottom: '10px',
                        lineHeight: '1.4'
                      }}>
                        Malviya Nagar Centre
                      </h4>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#666', 
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Inaugurated by Shri Rajnath Singh Ji, Home Minister
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* End Our Story Section */}
    </div>
  );
};

export default page;

