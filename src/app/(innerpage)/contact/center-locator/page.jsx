"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaSearch } from 'react-icons/fa';
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
    phone: '+260-976832953',
    email: 'lusaka@seedsofinnocens.com',
    timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
    link: '/ivf-centers/lusaka-zambia-africa',
    country: 'International',
    state: 'Zambia',
  },
  {
    name: 'Kitwe, Zambia, Africa',
    address: 'Kitwe, Zambia',
    phone: '+260-976837261',
    email: 'kitwe@seedsofinnocens.com',
    timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
    link: '/ivf-centers/kitwe-zambia-africa',
    country: 'International',
    state: 'Zambia',
  },
  {
    name: 'Mabela, Muscat, Oman',
    address: 'Mabela, Muscat, Oman',
    phone: '+968-22717111',
    email: 'muscat@seedsofinnocens.com',
    timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
    link: '/ivf-centers/mabela-muscat-oman',
    country: 'International',
    state: 'Oman',
  },
];

const allCenters = [...indiaCenters, ...internationalCenters];

const ivfContentData = {
  sections: [
    {
      heading: 'Find Your Nearest Center',
      paragraphs: [
        'Locate the nearest Seeds of Innocens center to you. We have multiple locations across India and internationally to serve you better. Find contact details, directions, and book appointments at your preferred center.',
      ],
      // sideImage: '/assets/img/recent_post2.jpg',
    },
  ],
};

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIndiaCenters = indiaCenters.filter(center =>
    center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInternationalCenters = internationalCenters.filter(center =>
    center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
    center.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Content Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={ivfContentData} />
            </div>
          </div>
        </div>
      </Section>

      {/* Centers Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          {/* Search Bar */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div style={{ 
                position: 'relative',
                padding: '20px', 
                backgroundColor: '#ffffff', 
                borderRadius: '12px',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e8e8e8'
              }}>
                <FaSearch style={{ 
                  position: 'absolute', 
                  left: '35px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#999',
                  fontSize: '18px'
                }} />
                <input
                  type="text"
                  placeholder="Search by city, state, or center name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="cs_form_field"
                  style={{
                    paddingLeft: '45px',
                    width: '100%'
                  }}
                />
              </div>
            </div>
          </div>

          {/* India Centers Section */}
          <div className="row mb-4">
            <div className="col-lg-12">
              <h2 className="cs_ivf_content_heading" style={{ marginBottom: '40px' }}>
                India Centers ({filteredIndiaCenters.length})
              </h2>
            </div>
          </div>

          <div className="row cs_gap_y_30 mb-5" style={{ gap: '30px 0' }}>
            {filteredIndiaCenters.map((center, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div style={{ 
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e8e8e8',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '30px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                }}
                >
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
                  <h4 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    color: '#0A2A43',
                    marginBottom: '20px',
                    lineHeight: '1.4'
                  }}>
                    {center.name}
                  </h4>
                  
                  <div style={{ marginBottom: '20px', flex: 1 }}>
                    <p style={{ marginBottom: '12px', fontSize: '14px', color: '#666', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <FaMapMarkerAlt style={{ color: '#E45352', fontSize: '16px', marginTop: '3px', flexShrink: 0 }} />
                      <span><strong>Address:</strong> {center.address}</span>
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '14px', color: '#666', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaPhoneAlt style={{ color: '#E45352', fontSize: '16px', flexShrink: 0 }} />
                      <span>
                        <strong>Phone:</strong>{' '}
                        <a href={`tel:${center.phone}`} style={{ color: '#E45352', textDecoration: 'none' }}>
                          {center.phone}
                        </a>
                      </span>
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '14px', color: '#666', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaEnvelope style={{ color: '#E45352', fontSize: '16px', flexShrink: 0 }} />
                      <span>
                        <strong>Email:</strong>{' '}
                        <a href={`mailto:${center.email}`} style={{ color: '#E45352', textDecoration: 'none' }}>
                          {center.email}
                        </a>
                      </span>
                    </p>
                    <p style={{ marginBottom: '0', fontSize: '14px', color: '#666', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaClock style={{ color: '#E45352', fontSize: '16px', flexShrink: 0 }} />
                      <span><strong>Timing:</strong> {center.timing}</span>
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
                        border: '1px solid #E45352',
                        borderRadius: '5px',
                        color: '#E45352',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#E45352';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#E45352';
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
          <div className="row mb-4">
            <div className="col-lg-12">
              <h2 className="cs_ivf_content_heading" style={{ marginBottom: '40px' }}>
                International Centers ({filteredInternationalCenters.length})
              </h2>
            </div>
          </div>

          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {filteredInternationalCenters.map((center, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div style={{ 
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e8e8e8',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '30px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                }}
                >
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
                  <h4 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    color: '#0A2A43',
                    marginBottom: '20px',
                    lineHeight: '1.4'
                  }}>
                    {center.name}
                  </h4>
                  
                  <div style={{ marginBottom: '20px', flex: 1 }}>
                    <p style={{ marginBottom: '12px', fontSize: '14px', color: '#666', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <FaMapMarkerAlt style={{ color: '#E45352', fontSize: '16px', marginTop: '3px', flexShrink: 0 }} />
                      <span><strong>Address:</strong> {center.address}</span>
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '14px', color: '#666', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaPhoneAlt style={{ color: '#E45352', fontSize: '16px', flexShrink: 0 }} />
                      <span>
                        <strong>Phone:</strong>{' '}
                        <a href={`tel:${center.phone}`} style={{ color: '#E45352', textDecoration: 'none' }}>
                          {center.phone}
                        </a>
                      </span>
                    </p>
                    <p style={{ marginBottom: '12px', fontSize: '14px', color: '#666', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaEnvelope style={{ color: '#E45352', fontSize: '16px', flexShrink: 0 }} />
                      <span>
                        <strong>Email:</strong>{' '}
                        <a href={`mailto:${center.email}`} style={{ color: '#E45352', textDecoration: 'none' }}>
                          {center.email}
                        </a>
                      </span>
                    </p>
                    <p style={{ marginBottom: '0', fontSize: '14px', color: '#666', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaClock style={{ color: '#E45352', fontSize: '16px', flexShrink: 0 }} />
                      <span><strong>Timing:</strong> {center.timing}</span>
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
                        border: '1px solid #E45352',
                        borderRadius: '5px',
                        color: '#E45352',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#E45352';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#E45352';
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

export default Page;

