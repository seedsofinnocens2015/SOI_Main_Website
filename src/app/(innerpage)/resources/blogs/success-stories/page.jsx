/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';

const headingData = {
  title: 'Success Stories',
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_service_details text-center mb-5">
                <h3 className="cs_service_heading">Inspiring Success Stories</h3>
                <p className="cs_service_subtitle">
                  Real stories from couples who achieved their dream of parenthood with Seeds of Innocens. These testimonials reflect the hope, dedication, and joy that define our patients' journeys.
                </p>
              </div>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            {/* Success Story 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="cs_blog_card cs_style_1">
                <div className="cs_blog_img">
                  <Image 
                    src="/assets/img/recent_post_1.png" 
                    alt="Success Story" 
                    width={400} 
                    height={250}
                    className="w-100"
                  />
                </div>
                <div className="cs_blog_info">
                  <h3 className="cs_blog_title">Priya & Rahul's Journey</h3>
                  <p className="cs_blog_subtitle">
                    After 5 years of trying, we found hope at Seeds of Innocens. The personalized care and advanced IVF treatment helped us welcome our beautiful daughter. The entire team was supportive throughout our journey.
                  </p>
                  <div className="cs_blog_meta">
                    <span>IVF Treatment</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="cs_blog_card cs_style_1">
                <div className="cs_blog_img">
                  <Image 
                    src="/assets/img/recent_post_1.png" 
                    alt="Success Story" 
                    width={400} 
                    height={250}
                    className="w-100"
                  />
                </div>
                <div className="cs_blog_info">
                  <h3 className="cs_blog_title">Anjali & Mohan's Miracle</h3>
                  <p className="cs_blog_subtitle">
                    We are forever grateful to Seeds of Innocens for making our dream come true. The ICSI treatment was successful on our first attempt, and now we have twin boys. The doctors' expertise and care made all the difference.
                  </p>
                  <div className="cs_blog_meta">
                    <span>ICSI Treatment</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="cs_blog_card cs_style_1">
                <div className="cs_blog_img">
                  <Image 
                    src="/assets/img/recent_post_1.png" 
                    alt="Success Story" 
                    width={400} 
                    height={250}
                    className="w-100"
                  />
                </div>
                <div className="cs_blog_info">
                  <h3 className="cs_blog_title">Sneha & Vikram's Joy</h3>
                  <p className="cs_blog_subtitle">
                    The egg freezing and IVF process at Seeds of Innocens was smooth and stress-free. The team guided us through every step, and we couldn't be happier with our baby girl. Highly recommended!
                  </p>
                  <div className="cs_blog_meta">
                    <span>Egg Freezing & IVF</span>
                    <span>2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          <div className="row">
            <div className="col-lg-12">
              <div className="cs_service_details">
                <h4 className="cs_service_heading">Share Your Story</h4>
                <p className="cs_service_subtitle">
                  If you have a success story to share, we would love to hear from you. Your journey can inspire and give hope to others who are on their fertility journey. Contact us to share your experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

