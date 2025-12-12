"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';
import Image from 'next/image';
import { getAssetPathClient } from '@/app/utils/assetPath';

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
                    src={getAssetPathClient("/assets/img/ourstory.JPG")}
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
                We at Seeds of Innocens believes that the journey of parenthood deserves dignity, joy and the premium standard of care.</p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                Founded in 2015 by the second generation of the promoter family, Dr. Gauri Agarwal and Dr. Rajat Arora, Seeds of Innocens is the leading India’s best IVF centre.
              </p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                It  has grown to over 35 centres across 8 states and has expanded overseas to Oman, Zambia and Muscat.
              </p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                From individualized consultations and advanced diagnostics to ICSI, IVF, Genetic screening, and post-treatment support-we walk by your side at each step of your journey.
              </p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                However, what truly sets us apart is our heartfelt commitment: We treat you as a person, not as a case. Your hopes, your story, and your family-building dreams.
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

          {/* Our Promise Section */}
          <div className="cs_height_80" />
          <div className="row">
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
                {' '}Promise
              </h3>
              <div className="cs_height_30" />
              <div className="row cs_gap_y_30">
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Compassion with Competence
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      We combine cutting-edge reproductive treatments with a compassionate, human touch. Because beyond labs and machines, we know real lives and real hopes are involved.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Transparency & Trust
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      We believe in honest counselling, clear communication, and realistic expectations. We share information about success rates, procedures, possible costs, and risks so that you can make an informed decision.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Customized Care
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      Every fertility journey is unique. Which is why we tailor treatment plans to your preferences and needs-emotional, medical, and social.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Ethical & Inclusive
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      We respect diversity in beliefs, backgrounds, and family definitions. We uphold patients with dignity, confidentiality, and empathy.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Support Beyond Treatment
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      We understand that fertility care is more than medical procedures-it&apos;s emotional, deeply personal, and delicate. We are here to support you at each step, from the first consultation to counselling, follow-ups, and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="cs_height_80" />
          <div className="row">
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
                  Why
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
                {' '}Choose Us
              </h3>
              <div className="cs_height_30" />
              <div className="row cs_gap_y_30">
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Comprehensive Fertility Services
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      Whether you are beginning your journey or need an advanced genetic screening offer it all under one roof.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Expert Team & Modern Labs
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      Our team brings empathy and experience, and our lab uses advanced protocols to ensure the highest standards.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Transparent Communication
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      From procedures to costs and to realistic outcomes, believe in honest conversations, building trust.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Patient-centred Approach
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      We listen first, treat after. You are always part of the conversation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Inclusive and Respectful Environment
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      We welcome individuals and couples from all walks of life and treat each patient with privacy, respect, and dignity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Story Expanded Section */}
          <div className="cs_height_80" />
          <div className="row">
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
                {' '}Story
              </h3>
              <div className="cs_height_30" />
              <p className="cs_text_style_1" style={{ 
                marginBottom: '20px', 
                lineHeight: '2', 
                fontSize: '17px',
                color: '#333',
                textAlign: 'justify',
                maxWidth: '100%'
              }}>
                Seeds of Innocens was born from a desire to make fertility care accessible and dignified. Since we saw too many clinics treating people like numbers, and wanted something different. A space where science meets empathy, where clinic corridors echo hope, not anxiety, and where each couple, every individual, feels respected and heard. We envisioned a place where families are built on trust–where every decision is backed by compassion and knowledge. That vision continues to guide us.
              </p>
            </div>
          </div>

          {/* What We Believe In Section */}
          <div className="cs_height_80" />
          <div className="row">
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
                  What We
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
                {' '}Believe In
              </h3>
              <div className="cs_height_30" />
              <div className="row cs_gap_y_30">
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Kindness & Respect
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      We treat you the way we would want to be treated with patience and kindness.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Empathy over Everything
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      Fertility journeys are emotionally taxing. We walk with you, offering support, comfort, and care.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Inclusivity and Equality
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      Each person, every couple, regardless of background, deserves a chance at parenthood.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    height: '100%',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Honesty and Transparency
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      We believe in empowering you with knowledge about procedures, options, costs, and realistic outcomes.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e8e8e8',
                    transition: 'all 0.3s ease'
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
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#E45352',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Quality with Integrity
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      We stay updated with the best practices, emerging science, and ethical standards to offer you effective care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className="cs_height_80" />
          <div className="row">
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
                {' '}Commitment
              </h3>
              <div className="cs_height_30" />
              <p className="cs_text_style_1" style={{ 
                marginBottom: '25px', 
                lineHeight: '2', 
                fontSize: '17px',
                color: '#333',
                textAlign: 'justify',
                maxWidth: '100%'
              }}>
                From the moment you reach out to us to the day you hold your little one in your arms and we commit to stand by you with dignity, respect, and medical excellence. Your hopes become our purpose, and your journey becomes our story.
              </p>
              <p className="cs_text_style_1" style={{ 
                marginBottom: '0', 
                lineHeight: '2', 
                fontSize: '19px', 
                fontWeight: '600', 
                color: '#E45352',
                textAlign: 'center'
              }}>
                So, let&apos;s walk together and begin this parenthood journey!
              </p>
            </div>
          </div>
        </div>
      </Section>
      {/* End Our Story Section */}
    </div>
  );
};

export default page;

