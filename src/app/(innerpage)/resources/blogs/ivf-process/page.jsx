import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'IVF Process Blogs',
};

const blogs = [
  {
    title: 'Complete Guide to the IVF Process',
    excerpt: 'A step-by-step explanation of the entire IVF journey from initial consultation to pregnancy test, including what to expect at each stage.',
    image: '/assets/img/recent_post_1.png',
    date: 'December 12, 2024',
    author: 'Dr. Gauri Agarwal',
    category: 'IVF Process',
    readTime: '10 min read',
    link: '#',
  },
  {
    title: 'Understanding Ovarian Stimulation in IVF',
    excerpt: 'Learn about fertility medications, how they work, monitoring protocols, and what to expect during the stimulation phase.',
    image: '/assets/img/recent_post_1.png',
    date: 'December 8, 2024',
    author: 'Dr. Aditi Bhatnagar',
    category: 'IVF Process',
    readTime: '8 min read',
    link: '#',
  },
  {
    title: 'Egg Retrieval: What to Expect',
    excerpt: 'Comprehensive guide to the egg retrieval procedure, preparation, recovery, and post-procedure care instructions.',
    image: '/assets/img/recent_post_1.png',
    date: 'December 3, 2024',
    author: 'Dr. Gauri Agarwal',
    category: 'IVF Process',
    readTime: '7 min read',
    link: '#',
  },
  {
    title: 'Embryo Transfer: The Final Step',
    excerpt: 'Everything you need to know about embryo transfer procedure, preparation, what happens during transfer, and post-transfer care.',
    image: '/assets/img/recent_post_1.png',
    date: 'November 25, 2024',
    author: 'Dr. Aditi Bhatnagar',
    category: 'IVF Process',
    readTime: '6 min read',
    link: '#',
  },
  {
    title: 'IVF vs ICSI: Understanding the Difference',
    excerpt: 'Learn about the differences between traditional IVF and ICSI, when each is recommended, and success rates for both procedures.',
    image: '/assets/img/recent_post_1.png',
    date: 'November 18, 2024',
    author: 'Dr. Gauri Agarwal',
    category: 'IVF Process',
    readTime: '9 min read',
    link: '#',
  },
  {
    title: 'The Two-Week Wait: Managing Expectations',
    excerpt: 'Tips for managing anxiety and expectations during the crucial two-week wait period after embryo transfer.',
    image: '/assets/img/recent_post_1.png',
    date: 'November 12, 2024',
    author: 'Dr. Aditi Bhatnagar',
    category: 'IVF Process',
    readTime: '5 min read',
    link: '#',
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
                <h3 className="cs_service_heading">IVF Process Blogs</h3>
                <p className="cs_service_subtitle">
                  Detailed guides and articles about the IVF treatment process, procedures, and what to expect at each stage of your journey.
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
                  alt="IVF Process Blogs" 
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

