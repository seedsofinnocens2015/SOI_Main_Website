import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Link from 'next/link';
import React from 'react';

const headingData = {
  title: 'Maternal and Fetal Medicine',
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

      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Maternal and Fetal Medicine</h2>
              <p>For detailed information about Maternal-Fetal Medicine services, please visit our comprehensive page.</p>
              <Link href="/maternal-fetal-medicine" className="cs_btn cs_style_1 cs_color_1" style={{ marginTop: '20px', display: 'inline-block' }}>
                <span>Learn More About MFM Services</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

