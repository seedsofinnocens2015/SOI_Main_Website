import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';

const headingData = {
  title: 'News & Press',
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
                <h3 className="cs_service_heading">Latest News & Press Releases</h3>
                <p className="cs_service_subtitle">
                  Stay updated with the latest news, achievements, and press releases from Seeds of Innocens. We share our milestones, new center openings, awards, and important announcements.
                </p>
              </div>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            {/* News Item 1 */}
            <div className="col-lg-6">
              <div className="cs_blog_card cs_style_1">
                <div className="cs_blog_img">
                  <Image 
                    src="/assets/img/recent_post_1.png" 
                    alt="News" 
                    width={600} 
                    height={300}
                    className="w-100"
                  />
                </div>
                <div className="cs_blog_info">
                  <div className="cs_blog_meta mb-2">
                    <span>Press Release</span>
                    <span>December 2024</span>
                  </div>
                  <h3 className="cs_blog_title">Seeds of Innocens Opens New Center in Mumbai</h3>
                  <p className="cs_blog_subtitle">
                    We are excited to announce the opening of our new state-of-the-art IVF center in Mumbai. The center is equipped with the latest technology and staffed by experienced fertility specialists to serve patients in the region.
                  </p>
                </div>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="col-lg-6">
              <div className="cs_blog_card cs_style_1">
                <div className="cs_blog_img">
                  <Image 
                    src="/assets/img/recent_post_1.png" 
                    alt="News" 
                    width={600} 
                    height={300}
                    className="w-100"
                  />
                </div>
                <div className="cs_blog_info">
                  <div className="cs_blog_meta mb-2">
                    <span>Award</span>
                    <span>November 2024</span>
                  </div>
                  <h3 className="cs_blog_title">Best IVF Center Award 2024</h3>
                  <p className="cs_blog_subtitle">
                    Seeds of Innocens has been recognized as the Best IVF Center in India for 2024. This award reflects our commitment to excellence in fertility care and our high success rates.
                  </p>
                </div>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="col-lg-6">
              <div className="cs_blog_card cs_style_1">
                <div className="cs_blog_img">
                  <Image 
                    src="/assets/img/recent_post_1.png" 
                    alt="News" 
                    width={600} 
                    height={300}
                    className="w-100"
                  />
                </div>
                <div className="cs_blog_info">
                  <div className="cs_blog_meta mb-2">
                    <span>Research</span>
                    <span>October 2024</span>
                  </div>
                  <h3 className="cs_blog_title">New PGT Technology Implementation</h3>
                  <p className="cs_blog_subtitle">
                    We have successfully implemented the latest Preimplantation Genetic Testing (PGT) technology, improving our success rates and helping more couples achieve healthy pregnancies.
                  </p>
                </div>
              </div>
            </div>

            {/* News Item 4 */}
            <div className="col-lg-6">
              <div className="cs_blog_card cs_style_1">
                <div className="cs_blog_img">
                  <Image 
                    src="/assets/img/recent_post_1.png" 
                    alt="News" 
                    width={600} 
                    height={300}
                    className="w-100"
                  />
                </div>
                <div className="cs_blog_info">
                  <div className="cs_blog_meta mb-2">
                    <span>Event</span>
                    <span>September 2024</span>
                  </div>
                  <h3 className="cs_blog_title">Fertility Awareness Month Campaign</h3>
                  <p className="cs_blog_subtitle">
                    Seeds of Innocens launched a comprehensive fertility awareness campaign, offering free consultations and educational seminars to help couples understand their fertility options.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          <div className="row">
            <div className="col-lg-12">
              <div className="cs_service_details text-center">
                <h4 className="cs_service_heading">Media Inquiries</h4>
                <p className="cs_service_subtitle">
                  For media inquiries, press releases, or interview requests, please contact our media relations team at <a href="mailto:media@seedsofinnocens.com">media@seedsofinnocens.com</a>
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

