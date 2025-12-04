/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import React from 'react';

const page = () => {
  const headingData = {
    title: 'Success Rates',
  };

  const counterData = [
    {
      iconSrc: '/assets/img/icons/counter_icon_1.png',
      countTo: 20000,
      suffix: '+',
      title: 'Successful Pregnancies',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_2.png',
      countTo: 35,
      suffix: '+',
      title: 'Centres Across India',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_3.png',
      countTo: 30,
      suffix: '+',
      title: 'Expert Doctors',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_4.png',
      countTo: 78,
      suffix: '%',
      title: 'Success Rate',
    },
  ];

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Success Rates Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="cs_section_title cs_fs_42 text-center">Our Success Rates</h2>
              <div className="cs_height_30" />
              <p className="cs_text_style_1 text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
                At Seeds of Innocens, we are proud of our consistently high success rates. Our commitment to excellence, advanced technology, and personalized care has helped thousands of couples achieve their dream of parenthood.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Counter Section */}
      <Section
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_counter_area_2"
      >
        <CounterSection2 data={counterData} />
      </Section>

      {/* Success Rates Details */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row cs_gap_y_40">
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
                  <p style={{ color: '#999' }}>Image placeholder - Add success rates chart/image here</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="cs_section_title cs_fs_36">Success Rate by Treatment Type</h3>
              <div className="cs_height_30" />
              
              <div className="cs_list_item">
                <h4 className="cs_fs_24 cs_medium">IVF-ICSI</h4>
                <p className="cs_text_style_1">
                  Our IVF-ICSI program maintains a success rate of approximately 65-70% for women under 35 years, with personalized protocols tailored to each patient's needs.
                </p>
              </div>
              
              <div className="cs_height_30" />
              
              <div className="cs_list_item">
                <h4 className="cs_fs_24 cs_medium">IUI (Intrauterine Insemination)</h4>
                <p className="cs_text_style_1">
                  Our IUI procedures show success rates of 15-20% per cycle, with higher success rates when combined with appropriate ovarian stimulation.
                </p>
              </div>
              
              <div className="cs_height_30" />
              
              <div className="cs_list_item">
                <h4 className="cs_fs_24 cs_medium">Frozen Embryo Transfer (FET)</h4>
                <p className="cs_text_style_1">
                  Our advanced freezing techniques ensure high survival rates, with FET success rates comparable to fresh cycles at approximately 60-65%.
                </p>
              </div>
              
              <div className="cs_height_30" />
              
              <div className="cs_list_item">
                <h4 className="cs_fs_24 cs_medium">PGT (Preimplantation Genetic Testing)</h4>
                <p className="cs_text_style_1">
                  PGT cycles show improved success rates, with up to 70-75% pregnancy rates when genetically normal embryos are transferred.
                </p>
              </div>
            </div>
          </div>

          <div className="cs_height_60" />

          <div className="row">
            <div className="col-lg-12">
              <h3 className="cs_section_title cs_fs_36 text-center">Factors Affecting Success Rates</h3>
              <div className="cs_height_40" />
              <div className="row cs_gap_y_30">
                <div className="col-md-4">
                  <div className="cs_iconbox cs_style_1">
                    <h4 className="cs_iconbox_title">Patient Age</h4>
                    <p className="cs_iconbox_subtitle">
                      Success rates are highest for women under 35 years, gradually decreasing with age. Our team provides personalized counseling based on age-related factors.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_iconbox cs_style_1">
                    <h4 className="cs_iconbox_title">Treatment History</h4>
                    <p className="cs_iconbox_subtitle">
                      Previous treatment history, medical conditions, and lifestyle factors all play a role in determining the best treatment approach for optimal success.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_iconbox cs_style_1">
                    <h4 className="cs_iconbox_title">Technology & Expertise</h4>
                    <p className="cs_iconbox_subtitle">
                      Our state-of-the-art laboratory, advanced equipment, and experienced embryologists contribute significantly to our high success rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* End Success Rates Section */}
    </div>
  );
};

export default page;

