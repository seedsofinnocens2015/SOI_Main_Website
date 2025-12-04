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
        backgroundImage="/assets/img/page_heading_bg.jpg"
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
                {/* Image placeholder - add your image path here */}
                <div className="cs_about_thumb_1" style={{ 
                  backgroundColor: '#f5f5f5', 
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px'
                }}>
                  <p style={{ color: '#999' }}>Image placeholder - Add your image here</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="cs_section_title cs_fs_42">Our Journey</h2>
              <div className="cs_height_20" />
              <p className="cs_text_style_1">
                Seeds of Innocens IVF Centre was founded with a vision to make advanced fertility treatments accessible to every couple who dreams of parenthood. Our journey began with a simple yet powerful mission: to provide world-class fertility care with compassion, expertise, and cutting-edge technology.
              </p>
              <div className="cs_height_30" />
              <p className="cs_text_style_1">
                Over the years, we have grown from a single center to a network of fertility clinics across India and internationally. Our commitment to excellence and patient-centered care has helped thousands of couples achieve their dream of becoming parents.
              </p>
              <div className="cs_height_30" />
              <p className="cs_text_style_1">
                We believe that every individual deserves access to the best fertility treatments, and our story is one of dedication, innovation, and countless success stories that continue to inspire us every day.
              </p>
            </div>
          </div>
          
          <div className="cs_height_60" />
          
          <div className="row cs_gap_y_40">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36">Our Milestones</h3>
              <div className="cs_height_30" />
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_iconbox cs_style_1 text-center">
                    <h4 className="cs_iconbox_title">2013</h4>
                    <p className="cs_iconbox_subtitle">Foundation Year - Started with a single center in Delhi</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_iconbox cs_style_1 text-center">
                    <h4 className="cs_iconbox_title">2018</h4>
                    <p className="cs_iconbox_subtitle">Expansion - Opened 10 centers across India</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_iconbox cs_style_1 text-center">
                    <h4 className="cs_iconbox_title">2023</h4>
                    <p className="cs_iconbox_subtitle">International Presence - Centers in multiple countries</p>
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

