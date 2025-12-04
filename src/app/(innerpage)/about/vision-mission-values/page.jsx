import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';

const page = () => {
  const headingData = {
    title: 'Vision, Mission & Values',
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Vision Mission Values Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row cs_gap_y_50">
            {/* Vision */}
            <div className="col-lg-4">
              <div className="cs_iconbox cs_style_1 text-center">
                <div className="cs_iconbox_icon cs_center" style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#999', fontSize: '12px' }}>Vision Icon</p>
                </div>
                <h3 className="cs_iconbox_title">Our Vision</h3>
                <p className="cs_iconbox_subtitle">
                  To be the leading fertility centre globally, recognized for excellence in reproductive medicine, innovative treatments, and compassionate care. We envision a world where every couple can realize their dream of parenthood with the highest standards of medical care and emotional support.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="col-lg-4">
              <div className="cs_iconbox cs_style_1 text-center">
                <div className="cs_iconbox_icon cs_center" style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#999', fontSize: '12px' }}>Mission Icon</p>
                </div>
                <h3 className="cs_iconbox_title">Our Mission</h3>
                <p className="cs_iconbox_subtitle">
                  To provide world-class fertility treatments with personalized care, using advanced technology and evidence-based medicine. We are committed to maintaining the highest success rates, continuous innovation, and making fertility treatments accessible to all who need them.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="col-lg-4">
              <div className="cs_iconbox cs_style_1 text-center">
                <div className="cs_iconbox_icon cs_center" style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#999', fontSize: '12px' }}>Values Icon</p>
                </div>
                <h3 className="cs_iconbox_title">Our Values</h3>
                <p className="cs_iconbox_subtitle">
                  Excellence, Compassion, Integrity, Innovation, and Patient-Centered Care. These core values guide everything we do, from medical practice to patient interactions, ensuring that we provide the best possible care while maintaining the highest ethical standards.
                </p>
              </div>
            </div>
          </div>

          <div className="cs_height_60" />

          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36 text-center">Our Core Values in Detail</h3>
              <div className="cs_height_40" />
              <div className="row cs_gap_y_30">
                <div className="col-md-6">
                  <div className="cs_list_item">
                    <h4 className="cs_fs_24 cs_medium">Excellence</h4>
                    <p className="cs_text_style_1">
                      We strive for excellence in every aspect of our work, from clinical care to patient service, continuously improving our practices and outcomes.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_list_item">
                    <h4 className="cs_fs_24 cs_medium">Compassion</h4>
                    <p className="cs_text_style_1">
                      We understand the emotional journey of fertility treatment and provide compassionate, empathetic care to support our patients every step of the way.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_list_item">
                    <h4 className="cs_fs_24 cs_medium">Integrity</h4>
                    <p className="cs_text_style_1">
                      We maintain the highest ethical standards, transparency, and honesty in all our interactions with patients, partners, and the community.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cs_list_item">
                    <h4 className="cs_fs_24 cs_medium">Innovation</h4>
                    <p className="cs_text_style_1">
                      We embrace cutting-edge technology and innovative treatment approaches to provide the best possible outcomes for our patients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* End Vision Mission Values Section */}
    </div>
  );
};

export default page;

