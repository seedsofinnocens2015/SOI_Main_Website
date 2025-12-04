/* eslint-disable react/no-unescaped-entities */
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Patient Stories',
};

const stories = [
  {
    name: 'Sarah & James',
    country: 'United Kingdom',
    treatment: 'IVF Treatment',
    year: '2024',
    image: '/assets/img/recent_post_1.png',
    story: 'After multiple failed attempts in the UK, we decided to explore treatment options in India. Seeds of Innocens exceeded all our expectations. The quality of care, advanced technology, and compassionate team made our journey successful. We are now proud parents of twins!',
    quote: 'The best decision we made was choosing Seeds of Innocens. Quality care at affordable prices.',
  },
  {
    name: 'Maria & Carlos',
    country: 'Spain',
    treatment: 'ICSI Treatment',
    year: '2024',
    image: '/assets/img/recent_post_1.png',
    story: 'Traveling from Spain for IVF treatment seemed daunting, but the team at Seeds of Innocens made everything so easy. From visa assistance to accommodation, everything was taken care of. The treatment was successful on our first attempt, and we couldn\'t be happier!',
    quote: 'Professional care, excellent results, and amazing support throughout our journey.',
  },
  {
    name: 'Emma & David',
    country: 'Australia',
    treatment: 'IVF with PGT',
    year: '2023',
    image: '/assets/img/recent_post_1.png',
    story: 'As a couple from Australia, we were looking for quality fertility treatment at reasonable costs. Seeds of Innocens provided exactly that. The PGT testing gave us peace of mind, and the entire experience was smooth and well-coordinated.',
    quote: 'From Australia to India - a journey that gave us our greatest blessing.',
  },
  {
    name: 'Sophie & Michael',
    country: 'Canada',
    treatment: 'IVF Treatment',
    year: '2024',
    image: '/assets/img/recent_post_1.png',
    story: 'The cost savings compared to Canada were significant, but what impressed us most was the quality of care. The doctors, the facilities, and the support staff were all exceptional. We felt cared for every step of the way.',
    quote: 'World-class treatment at a fraction of the cost - Seeds of Innocens delivered on every promise.',
  },
  {
    name: 'Lisa & Robert',
    country: 'USA',
    treatment: 'Egg Freezing & IVF',
    year: '2023',
    image: '/assets/img/recent_post_1.png',
    story: 'We traveled from the USA for egg freezing and later returned for IVF. The coordination between our initial visit and subsequent treatment was seamless. The team maintained excellent communication, and we achieved success!',
    quote: 'Seeds of Innocens made our international fertility journey smooth and successful.',
  },
  {
    name: 'Anna & Thomas',
    country: 'Germany',
    treatment: 'IVF Treatment',
    year: '2024',
    image: '/assets/img/recent_post_1.png',
    story: 'Coming from Germany, we were initially hesitant about treatment abroad. But Seeds of Innocens proved to be an excellent choice. The medical expertise, modern facilities, and personalized care exceeded our expectations.',
    quote: 'Professional excellence and compassionate care - exactly what we needed.',
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
                <h3 className="cs_service_heading">International Patient Success Stories</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Read inspiring stories from international patients who traveled to India for fertility treatment at Seeds of Innocens. These real experiences showcase successful outcomes and the quality care we provide to patients from around the world.
                </p>
              </div>
            </div>
          </div>

          {/* Main Image Placeholder */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="cs_service_details_thumbnail">
                <Image 
                  src="/assets/img/recent_post_1.png" 
                  alt="Patient Stories" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Stories Grid */}
          <div className="row cs_gap_y_40">
            {stories.map((story, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_blog_card cs_style_1" style={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  border: '1px solid #e0e0e0',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div className="cs_blog_img" style={{ overflow: 'hidden', borderRadius: '10px 10px 0 0' }}>
                    <Image 
                      src={story.image} 
                      alt={story.name} 
                      width={400} 
                      height={250}
                      className="w-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="cs_blog_info" style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div className="cs_blog_meta mb-2" style={{ fontSize: '13px', color: '#999' }}>
                      <span>{story.country}</span>
                      <span style={{ margin: '0 10px' }}>•</span>
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
                      borderLeft: '4px solid var(--accent-color)',
                      marginTop: 'auto'
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

          {/* Share Your Story Section */}
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_service_details text-center" style={{ 
                padding: '40px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px' 
              }}>
                <h4 className="cs_service_heading mb-3">Share Your Success Story</h4>
                <p className="cs_service_subtitle mb-4">
                  If you're an international patient who has successfully completed treatment at Seeds of Innocens, we would love to hear your story. Your experience can inspire and help other couples on their fertility journey.
                </p>
                <Link 
                  href="/international-patients/contact-team" 
                  className="cs_btn cs_style_1 cs_color_1"
                  style={{ display: 'inline-block', textDecoration: 'none' }}
                >
                  <span>Share Your Story</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

