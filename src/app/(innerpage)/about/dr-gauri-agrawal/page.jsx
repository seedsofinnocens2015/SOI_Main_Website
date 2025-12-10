/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';
import Image from 'next/image';

const page = () => {
  const headingData = {
    title: 'Dr. Gauri Agrawal – Founder',
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header2.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Founder Section */}
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
                {/* Image placeholder - add Dr. Gauri Agrawal's image path here */}
                <div className="cs_about_thumb_1" style={{ 
                  backgroundColor: '#f5f5f5', 
                  minHeight: '500px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px'
                }}>
                  <p style={{ color: '#999' }}>Image placeholder - Add Dr. Gauri Agrawal's photo here</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="cs_section_title cs_fs_42">Dr. Gauri Agrawal</h2>
              <p className="cs_text_lg cs_accent_color" style={{ marginBottom: '10px' }}>Founder & Chief Fertility Specialist</p>
              <div className="cs_height_20" />
              <p className="cs_text_style_1">
                Dr. Gauri Agrawal is a renowned fertility specialist and the visionary founder of Seeds of Innocens IVF Centre. With over 15 years of experience in reproductive medicine, she has dedicated her career to helping couples achieve their dream of parenthood.
              </p>
              <div className="cs_height_30" />
              <p className="cs_text_style_1">
                Her expertise spans across advanced IVF techniques, reproductive endocrinology, and minimally invasive fertility procedures. Dr. Agrawal is known for her compassionate approach to patient care and her commitment to staying at the forefront of fertility medicine.
              </p>
              <div className="cs_height_30" />
              
              <h3 className="cs_section_title cs_fs_30">Education & Qualifications</h3>
              <div className="cs_height_20" />
              <ul className="cs_list cs_list_style_1">
                <li>MBBS from prestigious medical institution</li>
                <li>MD in Obstetrics & Gynecology</li>
                <li>Fellowship in Reproductive Medicine</li>
                <li>Training in Advanced IVF Techniques from international centers</li>
              </ul>
              
              <div className="cs_height_30" />
              
              <h3 className="cs_section_title cs_fs_30">Professional Achievements</h3>
              <div className="cs_height_20" />
              <ul className="cs_list cs_list_style_1">
                <li>Successfully treated thousands of couples</li>
                <li>Published research papers in leading fertility journals</li>
                <li>Invited speaker at national and international conferences</li>
                <li>Member of prestigious fertility organizations</li>
              </ul>
            </div>
          </div>
          
          <div className="cs_height_60" />
          
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36">Vision & Philosophy</h3>
              <div className="cs_height_30" />
              <p className="cs_text_style_1">
                Dr. Gauri Agrawal believes in providing personalized, patient-centric care that combines medical excellence with emotional support. Her vision is to make advanced fertility treatments accessible to all, ensuring that every couple has the opportunity to experience the joy of parenthood.
              </p>
              <div className="cs_height_20" />
              <p className="cs_text_style_1">
                Under her leadership, Seeds of Innocens has become a trusted name in fertility care, known for its high success rates, cutting-edge technology, and compassionate approach to patient care.
              </p>
            </div>
          </div>
        </div>
      </Section>
      {/* End Founder Section */}
    </div>
  );
};

export default page;

