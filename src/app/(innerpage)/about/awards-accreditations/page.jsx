import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';

const page = () => {
  const headingData = {
    title: 'Awards & Accreditations',
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Awards & Accreditations Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="cs_section_title cs_fs_42 text-center">Recognition & Excellence</h2>
              <div className="cs_height_30" />
              <p className="cs_text_style_1 text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
                Seeds of Innocens has been recognized for excellence in fertility medicine, innovation, and patient care. Our accreditations and awards reflect our commitment to maintaining the highest standards in reproductive medicine.
              </p>
            </div>
          </div>

          <div className="cs_height_40" />

          {/* Awards Section */}
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36 text-center">Awards & Recognition</h3>
              <div className="cs_height_40" />
            </div>
          </div>

          <div className="row cs_gap_y_40">
            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_1 text-center">
                <div className="cs_iconbox_icon cs_center" style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#999', fontSize: '12px', textAlign: 'center' }}>Award Image<br />Placeholder</p>
                </div>
                <h4 className="cs_iconbox_title">Best IVF Centre 2023</h4>
                <p className="cs_iconbox_subtitle">
                  Recognized as the Best IVF Centre in India for excellence in fertility treatments and patient care.
                </p>
                <p className="cs_text_style_2" style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
                  Awarded by: Healthcare Excellence Awards
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_1 text-center">
                <div className="cs_iconbox_icon cs_center" style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#999', fontSize: '12px', textAlign: 'center' }}>Award Image<br />Placeholder</p>
                </div>
                <h4 className="cs_iconbox_title">Excellence in Reproductive Medicine</h4>
                <p className="cs_iconbox_subtitle">
                  Awarded for outstanding achievements in reproductive medicine and innovative treatment approaches.
                </p>
                <p className="cs_text_style_2" style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
                  Awarded by: National Fertility Association
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="cs_iconbox cs_style_1 text-center">
                <div className="cs_iconbox_icon cs_center" style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#999', fontSize: '12px', textAlign: 'center' }}>Award Image<br />Placeholder</p>
                </div>
                <h4 className="cs_iconbox_title">Innovation in Fertility Technology</h4>
                <p className="cs_iconbox_subtitle">
                  Recognized for implementing cutting-edge technology and advanced laboratory techniques in fertility treatment.
                </p>
                <p className="cs_text_style_2" style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
                  Awarded by: Medical Technology Innovation Awards
                </p>
              </div>
            </div>
          </div>

          <div className="cs_height_60" />

          {/* Accreditations Section */}
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36 text-center">Accreditations & Certifications</h3>
              <div className="cs_height_40" />
            </div>
          </div>

          <div className="row cs_gap_y_40">
            <div className="col-lg-3 col-md-6">
              <div className="cs_iconbox cs_style_1 text-center">
                <div className="cs_iconbox_icon cs_center" style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#999', fontSize: '11px', textAlign: 'center' }}>ISO Logo<br />Placeholder</p>
                </div>
                <h4 className="cs_iconbox_title cs_fs_20">ISO 9001:2015</h4>
                <p className="cs_iconbox_subtitle">
                  Quality Management System Certification
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="cs_iconbox cs_style_1 text-center">
                <div className="cs_iconbox_icon cs_center" style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#999', fontSize: '11px', textAlign: 'center' }}>NABH Logo<br />Placeholder</p>
                </div>
                <h4 className="cs_iconbox_title cs_fs_20">NABH Accredited</h4>
                <p className="cs_iconbox_subtitle">
                  National Accreditation Board for Hospitals & Healthcare Providers
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="cs_iconbox cs_style_1 text-center">
                <div className="cs_iconbox_icon cs_center" style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#999', fontSize: '11px', textAlign: 'center' }}>ISAR Logo<br />Placeholder</p>
                </div>
                <h4 className="cs_iconbox_title cs_fs_20">ISAR Member</h4>
                <p className="cs_iconbox_subtitle">
                  Indian Society of Assisted Reproduction
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="cs_iconbox cs_style_1 text-center">
                <div className="cs_iconbox_icon cs_center" style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#999', fontSize: '11px', textAlign: 'center' }}>FOGSI Logo<br />Placeholder</p>
                </div>
                <h4 className="cs_iconbox_title cs_fs_20">FOGSI Affiliated</h4>
                <p className="cs_iconbox_subtitle">
                  Federation of Obstetric and Gynaecological Societies of India
                </p>
              </div>
            </div>
          </div>

          <div className="cs_height_60" />

          {/* Partners & Associations */}
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36 text-center">Professional Associations & Memberships</h3>
              <div className="cs_height_40" />
            </div>
          </div>

          <div className="row cs_gap_y_30">
            <div className="col-md-6">
              <ul className="cs_list cs_list_style_1">
                <li>Indian Society for Assisted Reproduction (ISAR)</li>
                <li>Federation of Obstetric and Gynaecological Societies of India (FOGSI)</li>
                <li>Indian Medical Association (IMA)</li>
                <li>European Society of Human Reproduction and Embryology (ESHRE)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="cs_list cs_list_style_1">
                <li>American Society for Reproductive Medicine (ASRM)</li>
                <li>Asia Pacific Initiative on Reproduction (ASPIRE)</li>
                <li>International Federation of Fertility Societies (IFFS)</li>
                <li>Preimplantation Genetic Diagnosis International Society (PGDIS)</li>
              </ul>
            </div>
          </div>

          <div className="cs_height_60" />

          {/* Quality Assurance */}
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36 text-center">Quality Assurance & Compliance</h3>
              <div className="cs_height_30" />
              <p className="cs_text_style_1">
                Seeds of Innocens maintains the highest standards of quality and compliance across all our centers. Our commitment to excellence is demonstrated through:
              </p>
              <div className="cs_height_30" />
              <div className="row">
                <div className="col-md-6">
                  <ul className="cs_list cs_list_style_1">
                    <li>Regular internal and external quality audits</li>
                    <li>Continuous staff training and development programs</li>
                    <li>Compliance with all regulatory requirements</li>
                    <li>Ethical guidelines and best practices</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="cs_list cs_list_style_1">
                    <li>State-of-the-art equipment maintenance and calibration</li>
                    <li>Patient safety protocols and procedures</li>
                    <li>Data privacy and confidentiality measures</li>
                    <li>Transparent reporting and documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* End Awards & Accreditations Section */}
    </div>
  );
};

export default page;

