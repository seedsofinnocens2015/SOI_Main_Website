import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';

const page = () => {
  const headingData = {
    title: 'Media & Press',
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Media & Press Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="cs_section_title cs_fs_42 text-center">Media & Press Coverage</h2>
              <div className="cs_height_30" />
              <p className="cs_text_style_1 text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
                Seeds of Innocens has been featured in various media outlets, highlighting our innovative treatments, success stories, and contributions to the field of reproductive medicine.
              </p>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            {/* Press Release 1 */}
            <div className="col-lg-6">
              <div className="cs_post cs_style_1">
                <div className="cs_post_thumb" style={{ 
                  backgroundColor: '#f5f5f5', 
                  minHeight: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}>
                  <p style={{ color: '#999' }}>Image placeholder - Add press/media image here</p>
                </div>
                <div className="cs_post_info">
                  <span className="cs_post_date">March 15, 2024</span>
                  <h3 className="cs_post_title">
                    <a href="#">Seeds of Innocens Launches Advanced PGT Testing Program</a>
                  </h3>
                  <p className="cs_post_subtitle">
                    Seeds of Innocens announces the launch of comprehensive preimplantation genetic testing services, offering couples improved success rates and reduced genetic risk.
                  </p>
                </div>
              </div>
            </div>

            {/* Press Release 2 */}
            <div className="col-lg-6">
              <div className="cs_post cs_style_1">
                <div className="cs_post_thumb" style={{ 
                  backgroundColor: '#f5f5f5', 
                  minHeight: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}>
                  <p style={{ color: '#999' }}>Image placeholder - Add press/media image here</p>
                </div>
                <div className="cs_post_info">
                  <span className="cs_post_date">February 10, 2024</span>
                  <h3 className="cs_post_title">
                    <a href="#">Record-Breaking Success Rates at Seeds of Innocens</a>
                  </h3>
                  <p className="cs_post_subtitle">
                    The fertility centre reports exceptional success rates, with over 20,000 successful pregnancies achieved through advanced IVF techniques and personalized care.
                  </p>
                </div>
              </div>
            </div>

            {/* Press Release 3 */}
            <div className="col-lg-6">
              <div className="cs_post cs_style_1">
                <div className="cs_post_thumb" style={{ 
                  backgroundColor: '#f5f5f5', 
                  minHeight: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}>
                  <p style={{ color: '#999' }}>Image placeholder - Add press/media image here</p>
                </div>
                <div className="cs_post_info">
                  <span className="cs_post_date">January 20, 2024</span>
                  <h3 className="cs_post_title">
                    <a href="#">International Expansion: Seeds of Innocens Opens Center in Africa</a>
                  </h3>
                  <p className="cs_post_subtitle">
                    Seeds of Innocens expands its global presence with the opening of a new state-of-the-art fertility centre in Zambia, bringing world-class fertility care to more regions.
                  </p>
                </div>
              </div>
            </div>

            {/* Press Release 4 */}
            <div className="col-lg-6">
              <div className="cs_post cs_style_1">
                <div className="cs_post_thumb" style={{ 
                  backgroundColor: '#f5f5f5', 
                  minHeight: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}>
                  <p style={{ color: '#999' }}>Image placeholder - Add press/media image here</p>
                </div>
                <div className="cs_post_info">
                  <span className="cs_post_date">December 5, 2023</span>
                  <h3 className="cs_post_title">
                    <a href="#">Dr. Gauri Agrawal Honored for Excellence in Fertility Medicine</a>
                  </h3>
                  <p className="cs_post_subtitle">
                    Founder Dr. Gauri Agrawal receives recognition for outstanding contributions to reproductive medicine and commitment to advancing fertility treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_60" />

          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36 text-center">Video Gallery</h3>
              <div className="cs_height_40" />
              <div className="row cs_gap_y_30">
                <div className="col-md-4">
                  <div className="cs_post cs_style_1">
                    <div className="cs_post_thumb" style={{ 
                      backgroundColor: '#f5f5f5', 
                      minHeight: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '10px',
                      marginBottom: '15px'
                    }}>
                      <p style={{ color: '#999' }}>Video thumbnail placeholder</p>
                    </div>
                    <h4 className="cs_post_title cs_fs_20">
                      <a href="#">Success Story: Priya & Rahul</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_post cs_style_1">
                    <div className="cs_post_thumb" style={{ 
                      backgroundColor: '#f5f5f5', 
                      minHeight: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '10px',
                      marginBottom: '15px'
                    }}>
                      <p style={{ color: '#999' }}>Video thumbnail placeholder</p>
                    </div>
                    <h4 className="cs_post_title cs_fs_20">
                      <a href="#">Our Advanced Laboratory Tour</a>
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_post cs_style_1">
                    <div className="cs_post_thumb" style={{ 
                      backgroundColor: '#f5f5f5', 
                      minHeight: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '10px',
                      marginBottom: '15px'
                    }}>
                      <p style={{ color: '#999' }}>Video thumbnail placeholder</p>
                    </div>
                    <h4 className="cs_post_title cs_fs_20">
                      <a href="#">IVF Process Explained</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_60" />

          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36 text-center">Media Contact</h3>
              <div className="cs_height_30" />
              <div className="text-center">
                <p className="cs_text_style_1">
                  For media inquiries, press releases, or interview requests, please contact our media relations team:
                </p>
                <div className="cs_height_20" />
                <p className="cs_text_style_1">
                  <strong>Email:</strong> media@seedsofinnocens.com<br />
                  <strong>Phone:</strong> +91 9876543210
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* End Media & Press Section */}
    </div>
  );
};

export default page;

