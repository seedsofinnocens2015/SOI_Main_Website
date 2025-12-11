"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { FaCalculator, FaChartLine, FaUserMd, FaInfoCircle } from 'react-icons/fa';

const headingData = {
  title: 'Fertility Calculator',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const calculatorContentData = {
  sections: [
    {
      heading: 'Fertility Calculator - Estimate Your Chances of Conception',
      paragraphs: [
        'Use our fertility calculator to get an estimate of your chances of natural conception. This tool provides general guidance based on age and time trying to conceive. Our calculator uses established fertility research data to help you understand your fertility potential.',
        'Please note that this calculator provides general estimates only. Many factors affect fertility including medical history, lifestyle, partner factors, and underlying health conditions. For accurate assessment and personalized treatment recommendations, please schedule a consultation with our fertility specialists.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Understanding Fertility by Age',
      paragraphs: [
        'Fertility naturally declines with age due to various biological factors:',
      ],
      listItems: [
        'Under 25: Peak fertility years with highest chances of natural conception',
        '25-30: Excellent fertility with very good chances of natural conception',
        '30-35: Good fertility, but slight decline begins to occur',
        '35-40: Moderate fertility with noticeable decline, may need assistance',
        'Over 40: Significantly reduced fertility, often requires fertility treatment',
      ],
    },
    {
      heading: 'When Should You Consult a Fertility Specialist?',
      paragraphs: [
        'Consider scheduling a consultation if:',
      ],
      listItems: [
        'Under 35 and trying to conceive for 12+ months without success',
        'Over 35 and trying to conceive for 6+ months without success',
        'You have irregular periods or known fertility issues',
        'You have experienced previous miscarriages or pregnancy complications',
        'Your partner has known fertility concerns',
        'You have a family history of fertility problems',
        'You want to preserve fertility for the future (egg/sperm freezing)',
      ],
    },
  ],
};

const FertilityCalculatorPage = () => {
  const [age, setAge] = useState('');
  const [tryingFor, setTryingFor] = useState('');
  const [result, setResult] = useState(null);

  const calculateFertility = () => {
    if (!age || !tryingFor) {
      alert('Please fill in all fields');
      return;
    }

    const ageNum = parseInt(age);
    const tryingNum = parseInt(tryingFor);

    if (ageNum < 18 || ageNum > 50) {
      alert('Please enter a valid age between 18 and 50');
      return;
    }

    if (tryingNum < 1 || tryingNum > 120) {
      alert('Please enter a valid number of months (1-120)');
      return;
    }

    let baseChance = 0;
    if (ageNum < 25) baseChance = 85;
    else if (ageNum < 30) baseChance = 75;
    else if (ageNum < 35) baseChance = 65;
    else if (ageNum < 40) baseChance = 45;
    else baseChance = 25;

    // Adjust based on how long trying
    if (tryingNum > 12) baseChance -= 10;
    if (tryingNum > 24) baseChance -= 15;
    if (tryingNum > 36) baseChance -= 10;

    const finalChance = Math.max(5, Math.min(95, baseChance));

    let recommendation = '';
    let urgency = 'normal';
    
    if (ageNum >= 35 || tryingNum >= 12) {
      recommendation = 'We recommend consulting with a fertility specialist soon. Early intervention can improve your chances of success.';
      urgency = 'high';
    } else if (ageNum >= 30 && tryingNum >= 6) {
      recommendation = 'Consider scheduling a consultation if you don\'t conceive in the next 3-6 months.';
      urgency = 'medium';
    } else {
      recommendation = 'Continue trying naturally. If you don\'t conceive within 6 months, consider a consultation for peace of mind.';
      urgency = 'normal';
    }

    setResult({
      chance: finalChance,
      recommendation: recommendation,
      urgency: urgency,
    });
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Main Content Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          {/* First Content Section */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection 
                data={{
                  sections: [calculatorContentData.sections[0]]
                }} 
                benefitImages={serviceData.benefitImages} 
              />
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Calculator Section */}
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_service_details">
                <div style={{ 
                  padding: '40px', 
                  backgroundColor: '#ffffff', 
                  borderRadius: '10px',
                  border: '1px solid #e8e8e8',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '30px',
                    paddingBottom: '20px',
                    borderBottom: '2px solid #f0f0f0'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'var(--accent-color)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '28px'
                    }}>
                      <FaCalculator />
                    </div>
                    <div>
                      <h3 className="cs_ivf_content_heading" style={{ margin: 0, fontSize: '28px' }}>
                        Calculate Your Fertility Chances
                      </h3>
                      <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                        Enter your information below to get an estimate
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '12px', 
                        fontWeight: '600',
                        fontSize: '16px',
                        color: '#1a1a1a'
                      }}>
                        Your Age <span style={{ color: 'var(--accent-color)' }}>*</span>
                      </label>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter your age"
                        className="cs_form_field"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          border: '1px solid #ddd',
                          borderRadius: '8px',
                          fontSize: '16px',
                          backgroundColor: '#f8f9fa',
                          transition: 'all 0.3s ease'
                        }}
                        min="18"
                        max="50"
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--accent-color)';
                          e.target.style.backgroundColor = '#ffffff';
                          e.target.style.boxShadow = '0px 0px 0px 3px rgba(228, 83, 82, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#ddd';
                          e.target.style.backgroundColor = '#f8f9fa';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#999' }}>
                        Enter age between 18-50 years
                      </p>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '12px', 
                        fontWeight: '600',
                        fontSize: '16px',
                        color: '#1a1a1a'
                      }}>
                        How long have you been trying? (months) <span style={{ color: 'var(--accent-color)' }}>*</span>
                      </label>
                      <input
                        type="number"
                        value={tryingFor}
                        onChange={(e) => setTryingFor(e.target.value)}
                        placeholder="Enter number of months"
                        className="cs_form_field"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          border: '1px solid #ddd',
                          borderRadius: '8px',
                          fontSize: '16px',
                          backgroundColor: '#f8f9fa',
                          transition: 'all 0.3s ease'
                        }}
                        min="1"
                        max="120"
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--accent-color)';
                          e.target.style.backgroundColor = '#ffffff';
                          e.target.style.boxShadow = '0px 0px 0px 3px rgba(228, 83, 82, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#ddd';
                          e.target.style.backgroundColor = '#f8f9fa';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#999' }}>
                        How many months have you been trying to conceive?
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={calculateFertility}
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{
                      width: '100%',
                      padding: '16px 30px',
                      fontSize: '18px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginTop: '10px',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0px 4px 15px rgba(228, 83, 82, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <FaCalculator style={{ marginRight: '10px' }} />
                    Calculate Fertility Chances
                  </button>
                </div>

                {/* Results */}
                {result && (
                  <div style={{ 
                    padding: '35px', 
                    backgroundColor: result.urgency === 'high' ? '#fff3e0' : result.urgency === 'medium' ? '#e3f2fd' : '#e8f5e9', 
                    borderRadius: '10px',
                    borderLeft: `4px solid ${result.urgency === 'high' ? '#ff9800' : result.urgency === 'medium' ? '#2196f3' : '#4caf50'}`,
                    marginBottom: '30px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      marginBottom: '25px'
                    }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: result.urgency === 'high' ? '#ff9800' : result.urgency === 'medium' ? '#2196f3' : '#4caf50',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '24px'
                      }}>
                        <FaChartLine />
                      </div>
                      <h4 style={{ 
                        margin: 0, 
                        color: result.urgency === 'high' ? '#e65100' : result.urgency === 'medium' ? '#1565c0' : '#2e7d32',
                        fontSize: '24px',
                        fontWeight: '600'
                      }}>
                        Your Estimated Chances
                      </h4>
                    </div>
                    <div style={{ 
                      fontSize: '72px', 
                      fontWeight: '700', 
                      color: result.urgency === 'high' ? '#ff9800' : result.urgency === 'medium' ? '#2196f3' : '#4caf50',
                      marginBottom: '20px',
                      textAlign: 'center',
                      lineHeight: '1'
                    }}>
                      {result.chance}%
                    </div>
                    <div style={{ 
                      padding: '20px',
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      border: `1px solid ${result.urgency === 'high' ? '#ffcc80' : result.urgency === 'medium' ? '#90caf9' : '#c8e6c9'}`
                    }}>
                      <div style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start'
                      }}>
                        <FaInfoCircle style={{ 
                          color: result.urgency === 'high' ? '#ff9800' : result.urgency === 'medium' ? '#2196f3' : '#4caf50',
                          fontSize: '20px',
                          marginTop: '3px',
                          flexShrink: 0
                        }} />
                        <div>
                          <p style={{ 
                            fontSize: '16px', 
                            lineHeight: '1.8',
                            margin: 0,
                            color: '#333',
                            fontWeight: '500'
                          }}>
                            <strong style={{ 
                              color: result.urgency === 'high' ? '#e65100' : result.urgency === 'medium' ? '#1565c0' : '#2e7d32'
                            }}>
                              Recommendation:
                            </strong> {result.recommendation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div style={{ 
                  padding: '30px', 
                  backgroundColor: '#fff3cd', 
                  borderRadius: '10px',
                  borderLeft: '4px solid #ffc107',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'flex-start'
                  }}>
                    <FaInfoCircle style={{ 
                      color: '#856404',
                      fontSize: '24px',
                      marginTop: '3px',
                      flexShrink: 0
                    }} />
                    <div>
                      <h4 style={{ marginBottom: '12px', color: '#856404', fontSize: '20px', fontWeight: '600' }}>
                        Important Note
                      </h4>
                      <p style={{ lineHeight: '1.8', margin: 0, color: '#856404', fontSize: '15px' }}>
                        This calculator provides general estimates only. Many factors affect fertility including medical history, lifestyle choices, partner factors, and underlying health conditions. For accurate assessment and personalized treatment recommendations, please schedule a consultation with our fertility specialists. This tool should not replace professional medical advice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4" style={{
                  padding: '25px',
                  borderRadius: '10px',
                  border: '1px solid #e8e8e8'
                }}>
                  <h3 className="cs_widget_title" style={{ marginBottom: '20px', fontSize: '22px' }}>
                    When to Consult a Specialist
                  </h3>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px', fontWeight: 'bold' }}>•</span>
                      Under 35 and trying for 12+ months
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px', fontWeight: 'bold' }}>•</span>
                      Over 35 and trying for 6+ months
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px', fontWeight: 'bold' }}>•</span>
                      Irregular periods or known fertility issues
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px', fontWeight: 'bold' }}>•</span>
                      Previous miscarriages or complications
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px', fontWeight: 'bold' }}>•</span>
                      Family history of fertility problems
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg" style={{
                  padding: '25px',
                  borderRadius: '10px',
                  border: '1px solid #e8e8e8',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: 'var(--accent-color)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'white',
                    fontSize: '32px'
                  }}>
                    <FaUserMd />
                  </div>
                  <h3 className="cs_widget_title" style={{ marginBottom: '15px', fontSize: '20px' }}>
                    Schedule Consultation
                  </h3>
                  <p style={{ marginBottom: '20px', fontSize: '14px', lineHeight: '1.7', color: '#666' }}>
                    Get personalized fertility assessment and treatment recommendations from our expert specialists.
                  </p>
                  <Link 
                    href="/contact" 
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{ 
                      width: '100%', 
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '14px 20px',
                      borderRadius: '8px',
                      fontWeight: '600'
                    }}
                  >
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Remaining Content Sections */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection 
                data={{
                  sections: calculatorContentData.sections.slice(1)
                }} 
                benefitImages={serviceData.benefitImages} 
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FertilityCalculatorPage;
