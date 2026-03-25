"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import AccentHeading from '@/app/Components/AccentHeading';
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
        backgroundImage="/assets/img/Top-Header.png"
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
                    src={getAssetPathClient("/assets/img/ourstory.jpg")}
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
              <AccentHeading style={{ fontSize: '42px', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>Our Journey</AccentHeading>
              <div className="cs_height_20" />
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                At Seeds of Innocens IVF, we believe that the journey of parenthood deserves happiness and a premium standard of care. </p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                It was founded in 2015 by the second generation of the promoter family, Dr. Gauri Agarwal and Dr. Rajat Arora.
              </p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                With grown to over 35 centres across 8 states and has expanded overseas to Oman, Zambia, and Muscat.
              </p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                From individualized consultations and advanced diagnostics to ICSI, IVF, Genetic screening, and post-treatment support-we walk by your side at each step of your journey.
              </p>
              <p className="cs_text_style_1" style={{ marginBottom: '5px', lineHeight: '1.8' }}>
                Furthermore, what truly sets us apart is our heartfelt commitment. We treat you as a person, not as a case. Your hopes, your story, and your family-building dreams.
              </p>
            </div>
          </div>

          <div className="cs_height_60" />

          <div className="row cs_gap_y_40">
            <div className="col-lg-12">
              <AccentHeading level={3} style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>Our Milestones</AccentHeading>
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
                        src={getAssetPathClient("/assets/img/Picture1.png")}
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
                        color: '#000000',
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
                        src={getAssetPathClient("/assets/img/Picture2.png")}
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
                        color: '#000000',
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
                        src={getAssetPathClient("/assets/img/Picture3.png")}
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
                        color: '#000000',
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
                        src={getAssetPathClient("/assets/img/Picture4.png")}
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
                        color: '#000000',
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
                        src={getAssetPathClient("/assets/img/Picture5.png")}
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
                        color: '#000000',
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
                        src={getAssetPathClient("/assets/img/Picture6.png")}
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
                        color: '#000000',
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
                        src={getAssetPathClient("/assets/img/Picture7.png")}
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
                        color: '#000000',
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
                        src={getAssetPathClient("/assets/img/Picture8.png")}
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
                        color: '#000000',
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
              <AccentHeading level={3} style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>Our Promise</AccentHeading>
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
                      color: '#df3655',
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
                      We combine cutting-edge reproductive treatments with compassionate care. Beyond labs and machines, we know real hopes and regal lives.                    </p>
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
                      color: '#df3655',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Trust &Transparency
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      We believe in clear communication, honest counselling, and realistic expectations. Also, we believe in sharing information about procedures, success rates, and possible risks and costs so that you can make an informed decision.
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
                      color: '#df3655',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Personalized Care
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      Each fertility journey is unique, which is why we tailor treatment plans to your preferences and medical, emotional, and social needs.
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
                      color: '#df3655',
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
                      We respect diversity in backgrounds, beliefs, and family definitions. We uphold patients&apos; confidentiality and empathy.
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
                      color: '#df3655',
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
                      We understand that fertility care is more than medical procedures-it’s emotional, deeply personal, and delicate.
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
              <AccentHeading level={3} style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>Why Choose Us</AccentHeading>
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
                      color: '#df3655',
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
                      Whether you are starting your journey or in need of an advanced genetic screening provides it all under one roof.
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
                      color: '#df3655',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Modern Labs & Specialized clinicians
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      Our expert team brings experience and empathy, and our lab uses advanced protocols to ensure the highest standards.
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
                      color: '#df3655',
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
                      From costs to procedures and to realistic outcomes, believe in building trust and honest conversations.
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
                      color: '#df3655',
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
                     We hear you, understand you and guide you towards the IVF journey.
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
                      color: '#df3655',
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
                      We welcome couples and individuals from all the walks of life and will treat you with every patient with respect, privacy and dignity.
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
              <AccentHeading level={3} style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>Our Story</AccentHeading>
              <div className="cs_height_30" />
              <p className="cs_text_style_1" style={{
                marginBottom: '20px',
                lineHeight: '2',
                fontSize: '17px',
                color: '#333',
                textAlign: 'justify',
                maxWidth: '100%'
              }}>
                Seeds of Innocens IVF is born from a desire to fulfill the parenthood dream. Since Infertility issues are rising and we believe in providing a space where science meets empathy. Furthermore, we have made the place where every couple’s problem is to be heard and respected. We also envisioned a place where families are built on trust and where each decision is backed by knowledge and compassion. This vision continues to guide us.
              </p>
            </div>
          </div>

          {/* What We Believe In Section */}
          <div className="cs_height_80" />
          <div className="row">
            <div className="col-lg-12">
              <AccentHeading level={3} style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>What We Believe In</AccentHeading>
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
                      color: '#df3655',
                      marginBottom: '15px',
                      lineHeight: '1.4'
                    }}>
                      Respect & Kindness
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                     We treat you the way we want to be treated with kindness and patience.
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
                      color: '#df3655',
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
                      Fertility journeys are emotionally exhausting. But we understand your emotions and how you feel. So we will walk with you, offering support, compassionate care.
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
                      color: '#df3655',
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
                      Every couple, each person deserves a chance at parenthood.
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
                      color: '#df3655',
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
                      We believe in empowering you with the knowledge about the costs, options and procedures with the positive outcome.
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
                      color: '#df3655',
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
                      We stay updated with the ethical standards, emerging science to provide you with an effective care.
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
              <AccentHeading level={3} style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', lineHeight: '1.2' }}>Our Commitment</AccentHeading>
              <div className="cs_height_30" />
              <p className="cs_text_style_1" style={{
                marginBottom: '25px',
                lineHeight: '2',
                fontSize: '17px',
                color: '#333',
                textAlign: 'justify',
                maxWidth: '100%'
              }}>
                From the moment you reach out to us to the day you will hold your little one in your arms and we are dedicated to stand by you with respect, dignity and medical excellence. Since your hope becomes our purpose and your journey will become our story.
              </p>
              <p className="cs_text_style_1" style={{
                marginBottom: '0',
                lineHeight: '2',
                fontSize: '19px',
                fontWeight: '600',
                color: '#df3655',
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

