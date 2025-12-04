"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const headingData = {
  title: 'Fertility Calculator',
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

    let baseChance = 0;
    if (ageNum < 25) baseChance = 85;
    else if (ageNum < 30) baseChance = 75;
    else if (ageNum < 35) baseChance = 65;
    else if (ageNum < 40) baseChance = 45;
    else baseChance = 25;

    // Adjust based on how long trying
    if (tryingNum > 12) baseChance -= 10;
    if (tryingNum > 24) baseChance -= 15;

    setResult({
      chance: Math.max(5, baseChance),
      recommendation: ageNum >= 35 || tryingNum >= 12 
        ? 'Consider consulting a fertility specialist' 
        : 'Continue trying naturally, but consult if no success in 6 months',
    });
  };

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
                <h3 className="cs_service_heading">Fertility Calculator</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Use our fertility calculator to get an estimate of your chances of natural conception. This tool provides general guidance based on age and time trying to conceive. For personalized assessment, please consult with our fertility specialists.
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
                  alt="Fertility Calculator" 
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
                {/* Calculator Form */}
                <div style={{ 
                  padding: '40px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '10px',
                  marginBottom: '30px'
                }}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        fontWeight: '600',
                        fontSize: '16px'
                      }}>
                        Your Age
                      </label>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter your age"
                        style={{
                          width: '100%',
                          padding: '12px 15px',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '16px'
                        }}
                        min="18"
                        max="50"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        fontWeight: '600',
                        fontSize: '16px'
                      }}>
                        How long have you been trying? (months)
                      </label>
                      <input
                        type="number"
                        value={tryingFor}
                        onChange={(e) => setTryingFor(e.target.value)}
                        placeholder="Enter months"
                        style={{
                          width: '100%',
                          padding: '12px 15px',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          fontSize: '16px'
                        }}
                        min="1"
                        max="120"
                      />
                    </div>
                  </div>
                  <button
                    onClick={calculateFertility}
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{
                      width: '100%',
                      padding: '15px',
                      fontSize: '18px',
                      cursor: 'pointer'
                    }}
                  >
                    Calculate Fertility Chances
                  </button>
                </div>

                {/* Results */}
                {result && (
                  <div style={{ 
                    padding: '30px', 
                    backgroundColor: '#e8f5e9', 
                    borderRadius: '10px',
                    borderLeft: '4px solid #4caf50',
                    marginBottom: '30px'
                  }}>
                    <h4 style={{ marginBottom: '15px', color: '#2e7d32' }}>
                      Your Estimated Chances
                    </h4>
                    <div style={{ 
                      fontSize: '48px', 
                      fontWeight: 'bold', 
                      color: '#4caf50',
                      marginBottom: '15px'
                    }}>
                      {result.chance}%
                    </div>
                    <p style={{ 
                      fontSize: '16px', 
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      <strong>Recommendation:</strong> {result.recommendation}
                    </p>
                  </div>
                )}

                <div style={{ 
                  padding: '30px', 
                  backgroundColor: '#fff3cd', 
                  borderRadius: '10px',
                  borderLeft: '4px solid #ffc107'
                }}>
                  <h4 style={{ marginBottom: '15px', color: '#856404' }}>
                    Important Note
                  </h4>
                  <p style={{ lineHeight: '1.8', margin: 0, color: '#856404' }}>
                    This calculator provides general estimates only. Many factors affect fertility including medical history, lifestyle, and partner factors. For accurate assessment and personalized treatment recommendations, please schedule a consultation with our fertility specialists.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">When to Consult a Specialist</h3>
                  <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px' }}>•</span>
                      Under 35 and trying for 12+ months
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px' }}>•</span>
                      Over 35 and trying for 6+ months
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px' }}>•</span>
                      Irregular periods or known fertility issues
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '18px' }}>•</span>
                      Previous miscarriages or pregnancy complications
                    </li>
                  </ul>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg">
                  <h3 className="cs_widget_title">Schedule Consultation</h3>
                  <p style={{ marginBottom: '15px' }}>
                    Get personalized fertility assessment and treatment recommendations from our experts.
                  </p>
                  <Link 
                    href="/contact" 
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{ 
                      width: '100%', 
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'block'
                    }}
                  >
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FertilityCalculatorPage;

