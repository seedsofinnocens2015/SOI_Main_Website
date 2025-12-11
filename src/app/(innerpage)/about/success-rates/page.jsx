"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React, { useState } from 'react';

const headingData = {
  title: 'Success Rates',
};

const countersData = [
  {
    iconUrl: '/assets/img/icons/counter_icon_1.png',
    number: '20,000+',
    title: 'Healthy Babies',
    backgroundColor: '#17A2B8', // Teal/Light Blue
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_4.png',
    number: '78%',
    title: 'UPTO Success Rate*',
    backgroundColor: '#E45352', // Red/Pink
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_3.png',
    number: '30+',
    title: 'Certified Trained Clinicians',
    backgroundColor: '#FFC107', // Yellow/Gold
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_2.png',
    number: '35+',
    title: 'IVF Centres',
    backgroundColor: '#0A2A43', // Dark Blue/Navy
  },
];

const firstSectionData = {
  sections: [
    {
      heading: 'Our Success Rates',
      paragraphs: [
        'At Seeds of Innocens, we are proud of our consistently high success rates. Our commitment to excellence, advanced technology, and personalized care has helped thousands of couples achieve their dream of parenthood.',
        'Our success rates reflect our dedication to providing the highest quality of fertility care, utilizing state-of-the-art technology, and maintaining the highest standards in embryology and patient care.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
  ],
};

const remainingSectionsData = {
  sections: [
    {
      heading: 'Success Rate by Treatment Type',
      paragraphs: [
        'Our success rates vary by treatment type and patient factors. Below are our average success rates for different fertility treatments:',
      ],
      listItems: [
        'IVF-ICSI: Our IVF-ICSI program maintains a success rate of approximately 65-70% for women under 35 years, with personalized protocols tailored to each patient\'s needs.',
        'IUI (Intrauterine Insemination): Our IUI procedures show success rates of 15-20% per cycle, with higher success rates when combined with appropriate ovarian stimulation.',
        'Frozen Embryo Transfer (FET): Our advanced freezing techniques ensure high survival rates, with FET success rates comparable to fresh cycles at approximately 60-65%.',
        'PGT (Preimplantation Genetic Testing): PGT cycles show improved success rates, with up to 70-75% pregnancy rates when genetically normal embryos are transferred.',
        'Blastocyst Transfer: Our blastocyst transfer program shows success rates of 65-70% for women under 35 years, with higher implantation rates compared to day 3 transfers.',
        'Donor Egg IVF: Donor egg cycles show excellent success rates of 70-80%, as donor eggs are typically from younger, healthy donors.',
      ],
    },
    {
      heading: 'Factors Affecting Success Rates',
      paragraphs: [
        'Several factors can influence the success rates of fertility treatments. Understanding these factors helps us provide personalized care and realistic expectations:',
      ],
      listItems: [
        'Patient Age: Success rates are highest for women under 35 years, gradually decreasing with age. Our team provides personalized counseling based on age-related factors.',
        'Treatment History: Previous treatment history, medical conditions, and lifestyle factors all play a role in determining the best treatment approach for optimal success.',
        'Technology & Expertise: Our state-of-the-art laboratory, advanced equipment, and experienced embryologists contribute significantly to our high success rates.',
        'Embryo Quality: The quality of embryos plays a crucial role in success rates. Our advanced embryo selection techniques help identify the best embryos for transfer.',
        'Lifestyle Factors: Factors such as BMI, smoking, alcohol consumption, and stress can impact success rates. We provide comprehensive counseling on lifestyle modifications.',
        'Underlying Medical Conditions: Conditions such as endometriosis, PCOS, and male factor infertility can affect success rates. Our personalized treatment protocols address these factors.',
      ],
    },
    {
      heading: 'Our Commitment to Excellence',
      paragraphs: [
        'At Seeds of Innocens, we are committed to maintaining and improving our success rates through:',
      ],
      listItems: [
        'Continuous quality improvement and monitoring of outcomes',
        'Regular training and professional development for our medical team',
        'Investment in the latest technology and equipment',
        'Personalized treatment protocols based on individual patient needs',
        'Comprehensive pre-treatment evaluation and counseling',
        'Ongoing research and adoption of best practices in reproductive medicine',
      ],
    },
    {
      heading: 'Understanding Success Rates',
      paragraphs: [
        'It\'s important to understand that success rates can vary based on individual circumstances. Our team provides detailed counseling during your initial consultation to discuss your specific situation and expected outcomes.',
        'We believe in transparency and will always provide honest, realistic expectations while doing everything possible to maximize your chances of success.',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* First Content Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          {/* Content Section - Centered and Full Width */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={firstSectionData} />
            </div>
          </div>
        </div>
      </Section>

      {/* Counter Section - Card Design */}
      <Section 
        topSpaceLg="60" 
        topSpaceMd="70" 
        bottomSpaceLg="40" 
        bottomSpaceMd="50" 
      >
        <div className="container">
          <div className="row cs_gap_y_30">
            {countersData.map((counter, index) => {
              const [isHovered, setIsHovered] = useState(false);
              
              return (
                <div key={index} className="col-lg-3 col-md-6">
                  <div 
                    style={{
                      backgroundColor: counter.backgroundColor || '#ffffff',
                      borderRadius: '12px',
                      padding: '40px 30px',
                      textAlign: 'center',
                      boxShadow: isHovered ? '0px 12px 30px rgba(0, 0, 0, 0.15)' : '0px 4px 15px rgba(0, 0, 0, 0.1)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Icon */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '4px',
                      height: '100%',
                      // backgroundColor: isHovered ? '#E45352' : 'transparent',
                      transition: 'all 0.3s ease'
                    }} />
                   
                    {/* Number */}
                    <div style={{
                      fontSize: '48px',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '12px',
                      lineHeight: '1.2',
                      transition: 'all 0.3s ease',
                      textShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                    }}>
                      {counter.number}
                    </div>
                    
                    {/* Title */}
                    <div style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      fontWeight: '600',
                      lineHeight: '1.5',
                      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)'
                    }}>
                      {counter.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Remaining Content Sections */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          {/* Content Section - Centered and Full Width */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={remainingSectionsData} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

