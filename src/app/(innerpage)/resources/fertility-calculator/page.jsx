"use client"
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import FertilityCalculatorsPage from './FertilityCalculatorsPage';
import { FaCalculator, FaChartLine, FaUserMd, FaInfoCircle } from 'react-icons/fa';

const headingData = {
  uspTitle: 'Fertility <span class="cs_accent_color">Calculator </span>',
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
      // sideImage: '/assets/img/Fertility Calculator.jpg',
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
        backgroundImage="/assets/img/Top-Header.png"
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
            <div className="col-12 cs_service_page_content">
              <IVFContentSection
                data={{
                  sections: [calculatorContentData.sections[0]]
                }}
                benefitImages={serviceData.benefitImages}
                accentHeadingStyle
              />
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Calculator Section */}
          <FertilityCalculatorsPage />

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Remaining Content Sections */}
          <div className="row">
            <div className="col-12 cs_service_page_content">
              <IVFContentSection
                data={{
                  sections: calculatorContentData.sections.slice(1)
                }}
                benefitImages={serviceData.benefitImages}
                accentHeadingStyle
              />
            </div>
          </div>
        </div>
        
      </Section>
    </div>
  );
};

export default FertilityCalculatorPage;
