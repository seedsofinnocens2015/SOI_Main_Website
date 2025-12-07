"use client"
import { useState } from 'react';
import Image from 'next/image';
import SectionHeading from '../SectionHeading';

const IVFContentSection = ({ data, benefitImages }) => {
  const [openSteps, setOpenSteps] = useState({});

  const toggleStep = (stepIndex) => {
    setOpenSteps(prev => ({
      ...prev,
      [stepIndex]: !prev[stepIndex]
    }));
  };

  return (
    <div className="cs_ivf_content_wrapper">
      {data.sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          {/* Show 2 images side by side before "Benefits of IVF Treatment in India" section */}
          {section.heading === 'Benefits of IVF Treatment in India' && benefitImages && benefitImages.length >= 2 && (
            <div className="cs_ivf_content_image_wrapper">
              <div className="row cs_gap_y_20">
                <div className="col-lg-6 col-md-6">
                  <div className="cs_service_details_thumbnail cs_side_image">
                    <Image 
                      src={benefitImages[0]} 
                      alt="IVF ICSI" 
                      width={500}
                      height={300}
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        borderRadius: '15px',
                        objectFit: 'cover',
                        display: 'block'
                      }} 
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="cs_service_details_thumbnail cs_side_image">
                    <Image 
                      src={benefitImages[1]} 
                      alt="IVF ICSI" 
                      width={500} 
                      height={300} 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        borderRadius: '15px',
                        objectFit: 'cover',
                        display: 'block'
                      }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="cs_ivf_content_section">
            {/* Section Heading */}
            <h2 className="cs_ivf_content_heading">{section.heading}</h2>
            
            {/* Paragraphs */}
            {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="cs_ivf_content_paragraph">
                {paragraph}
              </p>
            ))}
            
            {/* List Items */}
            {section.listItems && (
              <ul className="cs_ivf_content_list">
                {section.listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="cs_ivf_content_list_item">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            
            {/* Steps - Accordion Style */}
            {section.steps && (
              <div className="cs_ivf_content_steps">
                {section.steps.map((step, stepIndex) => (
                  <div 
                    key={stepIndex} 
                    className={`cs_ivf_content_step ${openSteps[stepIndex] ? 'cs_step_open' : ''}`}
                  >
                    <div 
                      className="cs_ivf_step_header" 
                      onClick={() => toggleStep(stepIndex)}
                    >
                      <span className="cs_ivf_step_number">{stepIndex + 1}</span>
                      <h3 className="cs_ivf_step_title">{step.title}</h3>
                      <span className="cs_ivf_step_toggle">
                        <span className="cs_ivf_step_toggle_line"></span>
                      </span>
                    </div>
                    {openSteps[stepIndex] && (
                      <div className="cs_ivf_step_content">
                        <p className="cs_ivf_step_description">{step.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IVFContentSection;

