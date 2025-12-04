/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';

const headingData = {
  title: 'Patient Testimonial Videos',
};

const testimonials = [
  {
    name: 'Priya & Rahul',
    location: 'Delhi',
    treatment: 'IVF Treatment',
    videoThumbnail: '/assets/img/recent_post_1.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: 'Our journey to parenthood was made possible by Seeds of Innocens',
  },
  {
    name: 'Anjali & Mohan',
    location: 'Mumbai',
    treatment: 'ICSI Treatment',
    videoThumbnail: '/assets/img/recent_post_1.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: 'The best decision we ever made was choosing Seeds of Innocens',
  },
  {
    name: 'Sneha & Vikram',
    location: 'Bangalore',
    treatment: 'Egg Freezing & IVF',
    videoThumbnail: '/assets/img/recent_post_1.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: 'Professional care and excellent results throughout our journey',
  },
  {
    name: 'Meera & Arjun',
    location: 'Pune',
    treatment: 'IVF with PGT',
    videoThumbnail: '/assets/img/recent_post_1.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: 'Advanced technology and compassionate care made all the difference',
  },
  {
    name: 'Kavita & Ramesh',
    location: 'Hyderabad',
    treatment: 'IUI Treatment',
    videoThumbnail: '/assets/img/recent_post_1.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: 'Simple, effective, and successful treatment experience',
  },
  {
    name: 'Divya & Sanjay',
    location: 'Chennai',
    treatment: 'IVF Treatment',
    videoThumbnail: '/assets/img/recent_post_1.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: 'From hopeless to hopeful - Seeds of Innocens changed our lives',
  },
];

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
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
                <h3 className="cs_service_heading">Patient Testimonial Videos</h3>
                <p className="cs_service_subtitle">
                  Watch real stories from our patients as they share their IVF journey, experiences, and success stories. These video testimonials provide genuine insights into what you can expect at Seeds of Innocens.
                </p>
              </div>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_blog_card cs_style_1" style={{ height: '100%' }}>
                  <div className="cs_blog_img" style={{ 
                    position: 'relative', 
                    overflow: 'hidden',
                    borderRadius: '10px 10px 0 0',
                    cursor: 'pointer'
                  }}>
                    <Image 
                      src={testimonial.videoThumbnail} 
                      alt={testimonial.name} 
                      width={400} 
                      height={250}
                      className="w-100"
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '70px',
                      height: '70px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{
                        width: 0,
                        height: 0,
                        borderLeft: '20px solid var(--accent-color)',
                        borderTop: '12px solid transparent',
                        borderBottom: '12px solid transparent',
                        marginLeft: '5px'
                      }}></div>
                    </div>
                  </div>
                  <div className="cs_blog_info" style={{ padding: '25px' }}>
                    <div className="cs_blog_meta mb-2" style={{ fontSize: '14px', color: '#999' }}>
                      <span>{testimonial.treatment}</span>
                      <span style={{ margin: '0 10px' }}>•</span>
                      <span>{testimonial.location}</span>
                    </div>
                    <h3 className="cs_blog_title" style={{ fontSize: '22px', marginBottom: '15px' }}>
                      {testimonial.name}
                    </h3>
                    <p style={{ 
                      fontStyle: 'italic', 
                      color: '#666',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      "{testimonial.quote}"
                    </p>
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
                <h4 className="cs_service_heading mb-3">Share Your Video Testimonial</h4>
                <p className="cs_service_subtitle mb-4">
                  If you'd like to share your success story through a video testimonial, we would love to hear from you. Your story can inspire others on their fertility journey.
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

