import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Blogs',
};

const blogCategories = [
  {
    title: 'Fertility',
    description: 'Comprehensive articles about fertility, conception, and reproductive health.',
    image: '/assets/img/recent_post2.jpg',
    link: '/resources/blogs/fertility',
  },
  {
    title: 'IVF Process',
    description: 'Detailed guides and information about the IVF treatment process and procedures.',
    image: '/assets/img/recent_post2.jpg',
    link: '/resources/blogs/ivf-process',
  },
  {
    title: 'Pregnancy',
    description: 'Essential information about pregnancy, prenatal care, and what to expect.',
    image: '/assets/img/recent_post2.jpg',
    link: '/resources/blogs/pregnancy',
  },
  {
    title: 'Men\'s Health',
    description: 'Articles focusing on male fertility, reproductive health, and wellness.',
    image: '/assets/img/recent_post2.jpg',
    link: '/resources/blogs/mens-health',
  },
  {
    title: 'Women\'s Health',
    description: 'Comprehensive information about women\'s reproductive health and wellness.',
    image: '/assets/img/recent_post2.jpg',
    link: '/resources/blogs/womens-health',
  },
  {
    title: 'Treatment Guides',
    description: 'Step-by-step guides and detailed information about various fertility treatments.',
    image: '/assets/img/recent_post2.jpg',
    link: '/resources/blogs/treatment-guides',
  },
  {
    title: 'Success Stories',
    description: 'Inspiring stories from couples who achieved their dream of parenthood.',
    image: '/assets/img/recent_post2.jpg',
    link: '/resources/blogs/success-stories',
  },
  {
    title: 'Doctor Insights',
    description: 'Expert insights and advice from our experienced fertility specialists.',
    image: '/assets/img/recent_post2.jpg',
    link: '/resources/blogs/doctor-insights',
  },
  {
    title: 'News & Press',
    description: 'Latest news, updates, and press releases from Seeds of Innocens.',
    image: '/assets/img/recent_post2.jpg',
    link: '/resources/blogs/news-press',
  },
];

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header2.jpg"
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
                <h3 className="cs_service_heading">Fertility & IVF Blogs</h3>
                <p className="cs_service_subtitle">
                  Explore our comprehensive collection of blogs covering fertility, IVF, pregnancy, health, and more. Stay informed with expert insights, treatment guides, and inspiring stories.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="cs_service_details_thumbnail">
                <Image 
                  src="/assets/img/recent_post2.jpg" 
                  alt="Blogs" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Blog Categories Grid */}
          <div className="row cs_gap_y_40">
            {blogCategories.map((category, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={category.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="cs_blog_card cs_style_1" style={{ 
                    height: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  >
                    <div className="cs_blog_img" style={{ overflow: 'hidden', borderRadius: '10px 10px 0 0' }}>
                      <Image 
                        src={category.image} 
                        alt={category.title} 
                        width={400} 
                        height={250}
                        className="w-100"
                        style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      />
                    </div>
                    <div className="cs_blog_info" style={{ padding: '25px' }}>
                      <h3 className="cs_blog_title" style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>
                        {category.title}
                      </h3>
                      <p className="cs_blog_subtitle" style={{ lineHeight: '1.8', color: '#666', margin: 0 }}>
                        {category.description}
                      </p>
                      <div style={{ marginTop: '15px', color: 'var(--accent-color)', fontWeight: '600' }}>
                        Read Articles →
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Newsletter Section */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_service_details text-center" style={{ 
                padding: '40px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px' 
              }}>
                <h4 className="cs_service_heading mb-3">Stay Updated</h4>
                <p className="cs_service_subtitle mb-4">
                  Subscribe to our newsletter to receive the latest blog posts, fertility tips, and updates directly in your inbox.
                </p>
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    style={{
                      width: '70%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      borderRadius: '5px 0 0 5px',
                      fontSize: '16px'
                    }}
                  />
                  <button 
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{
                      padding: '12px 25px',
                      border: 'none',
                      borderRadius: '0 5px 5px 0',
                      cursor: 'pointer'
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

