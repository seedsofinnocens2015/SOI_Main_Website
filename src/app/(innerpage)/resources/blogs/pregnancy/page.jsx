import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'Pregnancy Blogs',
};

const blogs = [
  {
    title: 'First Trimester: What to Expect',
    excerpt: 'Comprehensive guide to the first trimester of pregnancy, including symptoms, development milestones, and essential care tips.',
    image: '/assets/img/recent_post_1.png',
    date: 'December 14, 2024',
    author: 'Dr. Gauri Agarwal',
    category: 'Pregnancy',
    readTime: '8 min read',
    link: '#',
  },
  {
    title: 'Nutrition During Pregnancy',
    excerpt: 'Essential nutrients, dietary guidelines, and foods to include or avoid during pregnancy for optimal health.',
    image: '/assets/img/recent_post_1.png',
    date: 'December 9, 2024',
    author: 'Dr. Aditi Bhatnagar',
    category: 'Pregnancy',
    readTime: '7 min read',
    link: '#',
  },
  {
    title: 'Exercise and Fitness During Pregnancy',
    excerpt: 'Safe exercise guidelines, recommended activities, and fitness tips for maintaining health during pregnancy.',
    image: '/assets/img/recent_post_1.png',
    date: 'December 4, 2024',
    author: 'Dr. Gauri Agarwal',
    category: 'Pregnancy',
    readTime: '6 min read',
    link: '#',
  },
  {
    title: 'Prenatal Care: Your Guide to Healthy Pregnancy',
    excerpt: 'Understanding prenatal appointments, tests, screenings, and what to expect throughout your pregnancy journey.',
    image: '/assets/img/recent_post_1.png',
    date: 'November 27, 2024',
    author: 'Dr. Aditi Bhatnagar',
    category: 'Pregnancy',
    readTime: '9 min read',
    link: '#',
  },
  {
    title: 'Managing Pregnancy Symptoms',
    excerpt: 'Practical tips for managing common pregnancy symptoms like morning sickness, fatigue, and mood changes.',
    image: '/assets/img/recent_post_1.png',
    date: 'November 19, 2024',
    author: 'Dr. Gauri Agarwal',
    category: 'Pregnancy',
    readTime: '6 min read',
    link: '#',
  },
  {
    title: 'Preparing for Delivery',
    excerpt: 'Essential information about preparing for labor and delivery, including birth plans and what to pack.',
    image: '/assets/img/recent_post_1.png',
    date: 'November 13, 2024',
    author: 'Dr. Aditi Bhatnagar',
    category: 'Pregnancy',
    readTime: '7 min read',
    link: '#',
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
                <h3 className="cs_service_heading">Pregnancy Blogs</h3>
                <p className="cs_service_subtitle">
                  Essential information about pregnancy, prenatal care, nutrition, and tips for expecting mothers to ensure a healthy pregnancy journey.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="cs_service_details_thumbnail">
                <Image 
                  src="/assets/img/recent_post_1.png" 
                  alt="Pregnancy Blogs" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="row cs_gap_y_40">
            {blogs.map((blog, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Link href={blog.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="cs_blog_card cs_style_1" style={{ 
                    height: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  >
                    <div className="cs_blog_img" style={{ overflow: 'hidden', borderRadius: '10px 10px 0 0' }}>
                      <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        width={400} 
                        height={250}
                        className="w-100"
                        style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      />
                    </div>
                    <div className="cs_blog_info" style={{ padding: '25px' }}>
                      <div className="cs_blog_meta mb-2" style={{ fontSize: '13px', color: '#999' }}>
                        <span>{blog.date}</span>
                        <span style={{ margin: '0 10px' }}>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="cs_blog_title" style={{ fontSize: '22px', marginBottom: '12px', color: '#333' }}>
                        {blog.title}
                      </h3>
                      <p className="cs_blog_subtitle" style={{ lineHeight: '1.8', color: '#666', marginBottom: '15px' }}>
                        {blog.excerpt}
                      </p>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        paddingTop: '15px',
                        borderTop: '1px solid #eee'
                      }}>
                        <span style={{ fontSize: '14px', color: '#999' }}>
                          By {blog.author}
                        </span>
                        <span style={{ 
                          color: 'var(--accent-color)', 
                          fontWeight: '600',
                          fontSize: '14px'
                        }}>
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_pagination text-center" style={{ marginTop: '50px' }}>
                <ul className="cs_mp_0" style={{ 
                  display: 'inline-flex', 
                  listStyle: 'none', 
                  gap: '10px',
                  alignItems: 'center'
                }}>
                  <li>
                    <a href="#" style={{ 
                      padding: '10px 15px', 
                      border: '1px solid #ddd', 
                      borderRadius: '5px',
                      color: '#333',
                      textDecoration: 'none'
                    }}>Previous</a>
                  </li>
                  <li>
                    <a href="#" style={{ 
                      padding: '10px 15px', 
                      backgroundColor: 'var(--accent-color)', 
                      color: 'white',
                      borderRadius: '5px',
                      textDecoration: 'none'
                    }}>1</a>
                  </li>
                  <li>
                    <a href="#" style={{ 
                      padding: '10px 15px', 
                      border: '1px solid #ddd', 
                      borderRadius: '5px',
                      color: '#333',
                      textDecoration: 'none'
                    }}>2</a>
                  </li>
                  <li>
                    <a href="#" style={{ 
                      padding: '10px 15px', 
                      border: '1px solid #ddd', 
                      borderRadius: '5px',
                      color: '#333',
                      textDecoration: 'none'
                    }}>Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

