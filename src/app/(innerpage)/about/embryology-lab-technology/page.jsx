import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';

const page = () => {
  const headingData = {
    title: 'Our Embryology Lab & Technology',
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Lab & Technology Section */}
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
                {/* Image placeholder */}
                <div className="cs_about_thumb_1" style={{ 
                  backgroundColor: '#f5f5f5', 
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px'
                }}>
                  <p style={{ color: '#999' }}>Image placeholder - Add embryology lab image here</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="cs_section_title cs_fs_42">State-of-the-Art Embryology Laboratory</h2>
              <div className="cs_height_20" />
              <p className="cs_text_style_1">
                Our embryology laboratory is equipped with the latest technology and adheres to the highest international standards. We maintain optimal conditions for embryo development, ensuring the best possible outcomes for our patients.
              </p>
              <div className="cs_height_30" />
              <p className="cs_text_style_1">
                Our state-of-the-art facilities include advanced air filtration systems, precise temperature and humidity controls, and cutting-edge equipment for embryo culture, selection, and preservation.
              </p>
            </div>
          </div>

          <div className="cs_height_60" />

          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36 text-center">Advanced Technology & Equipment</h3>
              <div className="cs_height_40" />
            </div>
          </div>

          <div className="row cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_iconbox cs_style_1">
                <h4 className="cs_iconbox_title">Closed Working Chamber System</h4>
                <p className="cs_iconbox_subtitle">
                  Our closed working chamber maintains optimal pH, temperature, and gas concentrations throughout embryo manipulation, minimizing environmental stress and improving embryo quality.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_iconbox cs_style_1">
                <h4 className="cs_iconbox_title">Time-Lapse Embryo Monitoring</h4>
                <p className="cs_iconbox_subtitle">
                  Advanced time-lapse imaging systems allow continuous monitoring of embryo development without removing them from optimal culture conditions, enabling better embryo selection.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_iconbox cs_style_1">
                <h4 className="cs_iconbox_title">Vitrification Technology</h4>
                <p className="cs_iconbox_subtitle">
                  State-of-the-art vitrification techniques ensure high survival rates for frozen eggs and embryos, preserving fertility for future use with minimal damage.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_iconbox cs_style_1">
                <h4 className="cs_iconbox_title">Laser Assisted Hatching (LAH)</h4>
                <p className="cs_iconbox_subtitle">
                  Precise laser technology assists in embryo hatching, improving implantation rates, especially for older embryos or those with thickened zona pellucida.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_iconbox cs_style_1">
                <h4 className="cs_iconbox_title">Electronic Witness System</h4>
                <p className="cs_iconbox_subtitle">
                  Advanced tracking systems ensure complete traceability and prevent mix-ups, maintaining the highest standards of safety and accuracy in our laboratory.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_iconbox cs_style_1">
                <h4 className="cs_iconbox_title">24/7 Environmental Monitoring</h4>
                <p className="cs_iconbox_subtitle">
                  Continuous monitoring of air quality, temperature, humidity, and gas concentrations ensures optimal conditions for embryo culture at all times.
                </p>
              </div>
            </div>
          </div>

          <div className="cs_height_60" />

          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36 text-center">Laboratory Standards & Quality Control</h3>
              <div className="cs_height_30" />
              <p className="cs_text_style_1">
                Our laboratory follows strict quality control protocols and maintains certifications from leading regulatory bodies. We conduct regular quality audits, equipment calibration, and staff training to ensure consistent, high-quality outcomes.
              </p>
              <div className="cs_height_30" />
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_list_item text-center">
                    <h4 className="cs_fs_24 cs_medium">ISO Certified</h4>
                    <p className="cs_text_style_1">Maintaining ISO standards for quality management</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_list_item text-center">
                    <h4 className="cs_fs_24 cs_medium">Regular Audits</h4>
                    <p className="cs_text_style_1">Comprehensive quality audits and assessments</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_list_item text-center">
                    <h4 className="cs_fs_24 cs_medium">Expert Team</h4>
                    <p className="cs_text_style_1">Experienced embryologists and technicians</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_60" />

          <div className="row">
            <div className="col-lg-6">
              <div className="cs_about_thumb">
                {/* Image placeholder */}
                <div className="cs_about_thumb_1" style={{ 
                  backgroundColor: '#f5f5f5', 
                  minHeight: '350px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px'
                }}>
                  <p style={{ color: '#999' }}>Image placeholder - Add technology equipment image here</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="cs_section_title cs_fs_36">Embryo Culture Techniques</h3>
              <div className="cs_height_30" />
              <ul className="cs_list cs_list_style_1">
                <li>Extended culture to blastocyst stage for better selection</li>
                <li>Sequential culture media optimized for embryo development</li>
                <li>Individual embryo culture in small volumes</li>
                <li>Minimal handling and disturbance of embryos</li>
                <li>Advanced incubators with precise gas and temperature control</li>
                <li>Embryo quality assessment using advanced grading systems</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      {/* End Lab & Technology Section */}
    </div>
  );
};

export default page;

