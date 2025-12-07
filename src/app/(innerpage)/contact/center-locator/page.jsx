import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';
import indiaCentersData from '../../ivf-centers/india-centers-data.json';

const headingData = {
  title: 'Center Locator',
};

// Transform India centers data
const indiaCenters = indiaCentersData.map(center => ({
  name: center.name,
  address: center.location,
  phone: center.phone,
  email: center.email,
  timing: center.timing,
  link: `/ivf-centers/india/${center.stateSlug}/${center.slug}`,
  country: 'India',
  state: center.state,
}));

// International centers
const internationalCenters = [
  {
    name: 'Lusaka, Zambia, Africa',
    address: 'Lusaka, Zambia',
    phone: '+260-XXXXXXXXXX',
    email: 'lusaka@seedsofinnocens.com',
    timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
    link: '/ivf-centers/lusaka-zambia-africa',
    country: 'International',
    state: 'Zambia',
  },
  {
    name: 'Kitwe, Zambia, Africa',
    address: 'Kitwe, Zambia',
    phone: '+260-XXXXXXXXXX',
    email: 'kitwe@seedsofinnocens.com',
    timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
    link: '/ivf-centers/kitwe-zambia-africa',
    country: 'International',
    state: 'Zambia',
  },
  {
    name: 'Mabela, Muscat, Oman',
    address: 'Mabela, Muscat, Oman',
    phone: '+968-XXXXXXXXXX',
    email: 'muscat@seedsofinnocens.com',
    timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
    link: '/ivf-centers/mabela-muscat-oman',
    country: 'International',
    state: 'Oman',
  },
];

const allCenters = [...indiaCenters, ...internationalCenters];

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
                <h3 className="cs_service_heading">Find Your Nearest Center</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Locate the nearest Seeds of Innocens center to you. We have multiple locations across India and internationally to serve you better. Find contact details, directions, and book appointments at your preferred center.
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
                  alt="Center Locator" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div style={{ 
                padding: '20px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px'
              }}>
                <input
                  type="text"
                  placeholder="Search by city, state, or center name..."
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '16px'
                  }}
                />
              </div>
            </div>
          </div>

          {/* India Centers Section */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <h4 className="cs_service_heading mb-4" style={{ fontSize: '28px', borderBottom: '3px solid var(--accent-color)', paddingBottom: '15px' }}>
                India Centers ({indiaCenters.length})
              </h4>
            </div>
          </div>

          <div className="row cs_gap_y_40 mb-5">
            {indiaCenters.map((center, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg" style={{ 
                  height: '100%', 
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e0e0e0'
                }}>
                  <div style={{ marginBottom: '15px' }}>
                    <span style={{ 
                      display: 'inline-block',
                      padding: '5px 12px',
                      backgroundColor: '#e3f2fd',
                      color: '#1565c0',
                      borderRadius: '5px',
                      fontSize: '12px',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      {center.state}
                    </span>
                  </div>
                  <h4 className="cs_service_heading mb-3" style={{ fontSize: '22px' }}>
                    {center.name}
                  </h4>
                  
                  <div style={{ marginBottom: '20px', flex: 1 }}>
                    <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                      <strong>Address:</strong><br />
                      {center.address}
                    </p>
                    <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                      <strong>Phone:</strong><br />
                      <a href={`tel:${center.phone}`} style={{ color: 'var(--accent-color)' }}>
                        {center.phone}
                      </a>
                    </p>
                    <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                      <strong>Email:</strong><br />
                      <a href={`mailto:${center.email}`} style={{ color: 'var(--accent-color)' }}>
                        {center.email}
                      </a>
                    </p>
                    <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                      <strong>Timing:</strong><br />
                      {center.timing}
                    </p>
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <Link 
                      href={center.link}
                      className="cs_btn cs_style_1 cs_color_1"
                      style={{ 
                        width: '100%', 
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'block',
                        marginBottom: '10px'
                      }}
                    >
                      <span>View Details</span>
                    </Link>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '100%',
                        textAlign: 'center',
                        display: 'block',
                        padding: '10px',
                        border: '1px solid var(--accent-color)',
                        borderRadius: '5px',
                        color: 'var(--accent-color)',
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* International Centers Section */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <h4 className="cs_service_heading mb-4" style={{ fontSize: '28px', borderBottom: '3px solid var(--accent-color)', paddingBottom: '15px' }}>
                International Centers ({internationalCenters.length})
              </h4>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            {internationalCenters.map((center, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg" style={{ 
                  height: '100%', 
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e0e0e0'
                }}>
                  <div style={{ marginBottom: '15px' }}>
                    <span style={{ 
                      display: 'inline-block',
                      padding: '5px 12px',
                      backgroundColor: '#fff3cd',
                      color: '#856404',
                      borderRadius: '5px',
                      fontSize: '12px',
                      fontWeight: '600',
                      marginBottom: '10px'
                    }}>
                      {center.state}
                    </span>
                  </div>
                  <h4 className="cs_service_heading mb-3" style={{ fontSize: '22px' }}>
                    {center.name}
                  </h4>
                  
                  <div style={{ marginBottom: '20px', flex: 1 }}>
                    <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                      <strong>Address:</strong><br />
                      {center.address}
                    </p>
                    <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                      <strong>Phone:</strong><br />
                      <a href={`tel:${center.phone}`} style={{ color: 'var(--accent-color)' }}>
                        {center.phone}
                      </a>
                    </p>
                    <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                      <strong>Email:</strong><br />
                      <a href={`mailto:${center.email}`} style={{ color: 'var(--accent-color)' }}>
                        {center.email}
                      </a>
                    </p>
                    <p style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                      <strong>Timing:</strong><br />
                      {center.timing}
                    </p>
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <Link 
                      href={center.link}
                      className="cs_btn cs_style_1 cs_color_1"
                      style={{ 
                        width: '100%', 
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'block',
                        marginBottom: '10px'
                      }}
                    >
                      <span>View Details</span>
                    </Link>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '100%',
                        textAlign: 'center',
                        display: 'block',
                        padding: '10px',
                        border: '1px solid var(--accent-color)',
                        borderRadius: '5px',
                        color: 'var(--accent-color)',
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

