"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaSearch } from 'react-icons/fa';
import centresAllData from '@/app/data/centres-data.json';
import { getAssetPathClient } from '@/app/utils/assetPath';
import agraImage from '../../../../../public/gads/assets/image/center/agra1.webp';
import faridabadImage from '../../../../../public/gads/assets/image/center/faridabad.webp';
import ghaziabadImage from '../../../../../public/gads/assets/image/center/yashoda1.webp';
import gorakhpurImage from '../../../../../public/gads/assets/image/center/gorakhpur1.webp';
import gurgaonImage from '../../../../../public/gads/assets/image/center/gurugram.webp';
import guwahatiImage from '../../../../../public/gads/assets/image/center/guwahati.webp';
import haldwaniImage from '../../../../../public/gads/assets/image/center/haldwani.webp';
import jankpuriImage from '../../../../../public/gads/assets/image/center/janakpuri.webp';
import kanpurImage from '../../../../../public/gads/assets/image/center/kanpur1.webp';
import kasaragodImage from '../../../../../public/gads/assets/image/center/kasaragod.webp';
import kochiImage from '../../../../../public/gads/assets/image/center/kochi.webp';
import kolkataImage from '../../../../../public/gads/assets/image/center/kolkata.webp';
import lucknowImage from '../../../../../public/gads/assets/image/center/lucknow.webp';
import malviyanagarImage from '../../../../../public/gads/assets/image/center/malviyanagar.webp';
import meerutImage from '../../../../../public/gads/assets/image/center/meerut1.webp';
import muzaffarpurImage from '../../../../../public/gads/assets/image/center/muzaffarpur.webp';
import patnaImage from '../../../../../public/gads/assets/image/center/patna1.webp';
import pitampuraImage from '../../../../../public/gads/assets/image/center/pitampura.webp';
import ranchiImage from '../../../../../public/gads/assets/image/center/ranchi1.webp';
import mabelaImage from '../../../../../public/assets/img/centres/mabela.jpeg';
const allCentresRaw = centresAllData.centres;

const headingData = { uspTitle: 'Centre <span class="cs_accent_color">Locator </span>' };

const centreImages = {
  '/assets/img/Centres/agra.jpg': agraImage,
  '/assets/img/Centres/faridabad.jpg': faridabadImage,
  '/assets/img/Centres/ghaziabad.jpg': ghaziabadImage,
  '/assets/img/Centres/gorakhpur.jpg': gorakhpurImage,
  '/assets/img/Centres/gurgaon.jpg': gurgaonImage,
  '/assets/img/Centres/guwahati.jpg': guwahatiImage,
  '/assets/img/Centres/haldwani.jpg': haldwaniImage,
  '/assets/img/Centres/jankpuri.jpg': jankpuriImage,
  '/assets/img/Centres/kanpur.jpg': kanpurImage,
  '/assets/img/Centres/kasaragod.jpg': kasaragodImage,
  '/assets/img/Centres/kochi.jpg': kochiImage,
  '/assets/img/Centres/kolkata.webp': kolkataImage,
  '/assets/img/Centres/lucknow.jpg': lucknowImage,
  '/assets/img/Centres/mabela.jpeg': mabelaImage,
  '/assets/img/Centres/malviyanagar.webp': malviyanagarImage,
  '/assets/img/Centres/meerut.jpg': meerutImage,
  '/assets/img/Centres/muzaffarpur.jpg': muzaffarpurImage,
  '/assets/img/Centres/patna.jpg': patnaImage,
  '/assets/img/Centres/pitampura.jpg': pitampuraImage,
  '/assets/img/Centres/ranchi.jpg': ranchiImage,
  '/assets/img/Centres/srinagar.png': pitampuraImage,
};

function getCentreImage(imagePath) {
  return centreImages[imagePath] || getAssetPathClient(imagePath || '/assets/img/recent_post2webp');
}

function cityNameToSlug(cityName) {
  return cityName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function getCenterLink(center) {
  const isMalviyaDelhi = center.name === 'Malviya Nagar, Delhi' && center.stateSlug === 'delhi';
  const cityParam = isMalviyaDelhi ? 'delhi' : cityNameToSlug(center.name.split(',')[0].trim());
  const slug = isMalviyaDelhi ? 'best-ivf-centre-in-malviyanagar' : `best-ivf-centre-in-${cityParam}`;
  return `/${center.stateSlug}/${slug}/`;
}

const indiaCentres = allCentresRaw.filter(c => !c.isInternational).map(c => ({
  name: c.name,
  address: c.location,
  phone: c.phone,
  email: c.email,
  timing: c.timing,
  image: getCentreImage(c.image),
  link: getCenterLink(c),
  state: c.state,
  isInternational: false,
}));

const internationalCentres = allCentresRaw.filter(c => c.isInternational).map(c => ({
  name: c.name,
  address: c.location,
  phone: c.phone,
  email: c.email,
  timing: c.timing,
  image: getCentreImage(c.image),
  link: `/${c.slug}/`,
  state: c.state,
  isInternational: true,
}));

const ivfContentData = {
  sections: [{
    heading: 'Find Your Nearest Centre',
    paragraphs: [
      'Locate the nearest Seeds of Innocens centre to you. We have multiple locations across India and internationally to serve you better. Find contact details, directions, and book appointments at your preferred centre.',
    ],
  }],
};

const CenterCard = ({ center }) => (
  <div style={{
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
    border: '1px solid #ebedf0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)';
    }}
  >
    {/* Centre Image */}
    <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
      <Image
        src={center.image}
        alt={center.name}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* State badge overlay */}
      <div style={{
        position: 'absolute',
        top: '14px',
        left: '14px',
        padding: '5px 12px',
        backgroundColor: center.isInternational ? 'rgba(133,100,4,0.9)' : 'rgba(21,101,192,0.9)',
        color: '#fff',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: '600',
        backdropFilter: 'blur(4px)',
      }}>
        {center.state}
      </div>
    </div>

    {/* Card Body */}
    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <h4 style={{
        fontSize: '18px',
        fontWeight: '700',
        color: 'var(--body-color)',
        marginBottom: '16px',
        lineHeight: '1.4',
      }}>
        {center.name}
      </h4>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#555' }}>
          <FaMapMarkerAlt style={{ color: '#de3554', fontSize: '15px', marginTop: '2px', flexShrink: 0 }} />
          <span style={{ lineHeight: '1.5' }}>{center.address}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#555' }}>
          <FaPhoneAlt style={{ color: '#de3554', fontSize: '14px', flexShrink: 0 }} />
          <a href={`tel:${center.phone}`} style={{ color: '#de3554', textDecoration: 'none', fontWeight: '500' }}>
            {center.phone}
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#555' }}>
          <FaEnvelope style={{ color: '#de3554', fontSize: '14px', flexShrink: 0 }} />
          <a href={`mailto:${center.email}`} style={{ color: '#555', textDecoration: 'none' }}>
            {center.email}
          </a>
        </div>
        {center.timing && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#555' }}>
            <FaClock style={{ color: '#de3554', fontSize: '14px', flexShrink: 0 }} />
            <span>{center.timing}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
        <Link
          href={center.link}
          style={{
            flex: 1,
            textAlign: 'center',
            padding: '11px 10px',
            backgroundColor: '#de3554',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: '600',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#c73b3a'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#de3554'}
        >
          View Details
        </Link>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            textAlign: 'center',
            padding: '11px 10px',
            border: '1.5px solid #de3554',
            color: '#de3554',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: '600',
            transition: 'all 0.2s',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#de3554';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#de3554';
          }}
        >
          Get Directions
        </a>
      </div>
    </div>
  </div>
);

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const q = searchQuery.toLowerCase();

  const filteredIndia = indiaCentres.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.state.toLowerCase().includes(q) ||
    c.address.toLowerCase().includes(q)
  );

  const filteredInternational = internationalCentres.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.state.toLowerCase().includes(q) ||
    c.address.toLowerCase().includes(q)
  );

  const noResults = filteredIndia.length === 0 && filteredInternational.length === 0;

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.webp"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="50" topSpaceMd="60" bottomSpaceLg="50" bottomSpaceMd="60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={ivfContentData} accentHeadingStyle />
            </div>
          </div>
        </div>
      </Section>

      <Section topSpaceLg="0" topSpaceMd="0" bottomSpaceLg="80" bottomSpaceMd="120">
        <div className="container">

          {/* Search Bar */}
          <div className="row mb-5">
            <div className="col-lg-7 mx-auto">
              <div style={{
                position: 'relative',
                backgroundColor: '#fff',
                borderRadius: '50px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                border: '1.5px solid #ebedf0',
                display: 'flex',
                alignItems: 'center',
                padding: '6px 20px 6px 50px',
              }}>
                <FaSearch style={{
                  position: 'absolute',
                  left: '20px',
                  color: '#de3554',
                  fontSize: '17px',
                }} />
                <input
                  type="text"
                  placeholder="Search by city, state or centre name..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    fontSize: '15px',
                    padding: '10px 0',
                    background: 'transparent',
                    color: '#1f2b3a',
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#aaa',
                      fontSize: '18px',
                      lineHeight: 1,
                      padding: '0 4px',
                      flexShrink: 0,
                    }}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* India Centres */}
          {filteredIndia.length > 0 && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <AccentHeading style={{ margin: 0 }}>India Centres</AccentHeading>
                <span style={{
                  backgroundColor: '#e3f2fd',
                  color: '#1565c0',
                  borderRadius: '20px',
                  padding: '4px 18px',
                  fontSize: '13px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}>
                  {filteredIndia.length} {filteredIndia.length === 1 ? 'Centre' : 'Centres'}
                </span>
              </div>
              <div className="row cs_gap_y_30 mb-5" style={{ gap: '30px 0' }}>
                {filteredIndia.map((center, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <CenterCard center={center} />
                  </div>
                ))}
              </div>
            </>
          )}

          {filteredIndia.length > 0 && filteredInternational.length > 0 && (
            <div style={{ borderTop: '2px solid #f0f0f0', margin: '10px 0 50px' }} />
          )}

          {/* International Centres */}
          {filteredInternational.length > 0 && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <AccentHeading style={{ margin: 0 }}>International Centres</AccentHeading>
                <span style={{
                  backgroundColor: '#fff3cd',
                  color: '#856404',
                  borderRadius: '20px',
                  padding: '4px 18px',
                  fontSize: '13px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}>
                  {filteredInternational.length} {filteredInternational.length === 1 ? 'Centre' : 'Centres'}
                </span>
              </div>
              <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
                {filteredInternational.map((center, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <CenterCard center={center} />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* No Results */}
          {noResults && searchQuery && (
            <div style={{
              textAlign: 'center',
              padding: '70px 20px',
              color: '#888',
            }}>
              <FaSearch style={{ fontSize: '40px', marginBottom: '16px', color: '#ddd' }} />
              <p style={{ fontSize: '17px', margin: '0 0 6px' }}>
                No centres found for <strong>&quot;{searchQuery}&quot;</strong>
              </p>
              <p style={{ fontSize: '14px', margin: 0 }}>
                Try searching by city name, state or centre name.
              </p>
            </div>
          )}

        </div>
      </Section>
    </div>
  );
};

export default Page;
