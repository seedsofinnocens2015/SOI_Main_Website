/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';

const headingData = {
  title: 'Success Stories',
};

const successStories = [
  {
    name: 'Priya & Rahul',
    location: 'Delhi',
    treatment: 'IVF Treatment',
    year: '2024',
    image: '/assets/img/recent_post_1.png',
    story: 'After 5 years of trying to conceive, we found hope at Seeds of Innocens. The entire team was incredibly supportive throughout our journey. Dr. Gauri Agarwal\'s expertise and personalized care made all the difference. We are now proud parents of a beautiful baby girl. Thank you for making our dream come true!',
    quote: 'Seeds of Innocens gave us the gift of parenthood. We are forever grateful!',
  },
  {
    name: 'Anjali & Mohan',
    location: 'Mumbai',
    treatment: 'ICSI Treatment',
    year: '2024',
    image: '/assets/img/recent_post_1.png',
    story: 'We had almost given up hope after multiple failed attempts elsewhere. Then we came to Seeds of Innocens. The ICSI treatment was successful on our first attempt! The doctors explained everything clearly, and the staff was always available to answer our questions. Our twin boys are our greatest blessing.',
    quote: 'The best decision we ever made was choosing Seeds of Innocens.',
  },
  {
    name: 'Sneha & Vikram',
    location: 'Bangalore',
    treatment: 'Egg Freezing & IVF',
    year: '2023',
    image: '/assets/img/recent_post_1.png',
    story: 'As a career-focused couple, we decided to freeze eggs early. When we were ready, Seeds of Innocens helped us with the IVF process using our frozen eggs. The entire process was smooth, and the team guided us through every step. We now have a healthy baby girl and couldn\'t be happier!',
    quote: 'Professional care, excellent results, and a wonderful experience.',
  },
  {
    name: 'Meera & Arjun',
    location: 'Pune',
    treatment: 'IVF with PGT',
    year: '2024',
    image: '/assets/img/recent_post_1.png',
    story: 'Due to genetic concerns in our family, we opted for IVF with Preimplantation Genetic Testing. The team at Seeds of Innocens was thorough and reassuring. The PGT testing gave us peace of mind, and we now have a healthy baby boy. The genetic counseling was particularly helpful.',
    quote: 'Advanced technology and compassionate care - the perfect combination.',
  },
  {
    name: 'Kavita & Ramesh',
    location: 'Hyderabad',
    treatment: 'IUI Treatment',
    year: '2023',
    image: '/assets/img/recent_post_1.png',
    story: 'We started with IUI treatment at Seeds of Innocens, and it was successful on our second attempt! The treatment was less invasive than we expected, and the team made us feel comfortable throughout. Our journey to parenthood was smooth and stress-free.',
    quote: 'Simple, effective, and successful - exactly what we needed.',
  },
  {
    name: 'Divya & Sanjay',
    location: 'Chennai',
    treatment: 'IVF Treatment',
    year: '2024',
    image: '/assets/img/recent_post_1.png',
    story: 'After years of struggling with infertility, Seeds of Innocens gave us hope. The personalized treatment plan, regular monitoring, and constant support made our IVF journey manageable. We are now parents to a beautiful baby, and words cannot express our gratitude.',
    quote: 'From hopeless to hopeful - Seeds of Innocens changed our lives.',
  },
];

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
                  Real stories from real couples who achieved their dream of parenthood with Seeds of Innocens. These testimonials reflect the hope, dedication, and joy that define our patients' journeys.
                </p>
              </div>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            {successStories.map((story, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_blog_card cs_style_1" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="cs_blog_img" style={{ overflow: 'hidden', borderRadius: '10px 10px 0 0' }}>
                    <Image 
                      src={story.image} 
                      alt={story.name} 
                      width={400} 
                      height={250}
                      className="w-100"
                      style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    />
                  </div>
                  <div className="cs_blog_info" style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div className="cs_blog_meta mb-2" style={{ fontSize: '14px', color: '#999' }}>
                      <span>{story.treatment}</span>
                      <span style={{ margin: '0 10px' }}>•</span>
                      <span>{story.year}</span>
                    </div>
                    <h3 className="cs_blog_title" style={{ fontSize: '22px', marginBottom: '15px' }}>
                      {story.name}
                    </h3>
                    <p className="cs_blog_subtitle" style={{ flex: 1, marginBottom: '15px', lineHeight: '1.8' }}>
                      {story.story}
                    </p>
                    <div style={{ 
                      padding: '15px', 
                      backgroundColor: '#f5f5f5', 
                      borderRadius: '5px',
                      borderLeft: '4px solid var(--accent-color)'
                    }}>
                      <p style={{ 
                        margin: 0, 
                        fontStyle: 'italic', 
                        color: '#333',
                        fontSize: '15px'
                      }}>
                        "{story.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          <div className="row">
            <div className="col-lg-12">
              <div className="cs_service_details text-center" style={{ 
                padding: '40px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px' 
              }}>
                <h4 className="cs_service_heading mb-3">Share Your Success Story</h4>
                <p className="cs_service_subtitle mb-4">
                  If you have a success story to share, we would love to hear from you. Your journey can inspire and give hope to others who are on their fertility journey.
                </p>
                <a 
                  href="/contact" 
                  className="cs_btn cs_style_1 cs_color_1"
                  style={{ display: 'inline-block', textDecoration: 'none' }}
                >
                  <span>Contact Us to Share Your Story</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

