'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const IVF_CENTRES = [
  { label: 'IVF Centre In Malviya Nagar', href: '/delhi/best-ivf-centre-in-malviyanagar/' },
  { label: 'IVF Centre In Janakpuri', href: '/delhi/best-ivf-centre-in-janakpuri/' },
  { label: 'IVF Centre In Pitampura', href: '/delhi/best-ivf-centre-in-pitampura/' },
  { label: 'IVF Centre In Ghaziabad', href: '/uttar-pradesh/best-ivf-centre-in-ghaziabad/' },
  { label: 'IVF Centre In Gorakhpur', href: '/uttar-pradesh/best-ivf-centre-in-gorakhpur/' },
  { label: 'IVF Centre In Lucknow', href: '/uttar-pradesh/best-ivf-centre-in-lucknow/' },
  { label: 'IVF Centre In Kanpur', href: '/uttar-pradesh/best-ivf-centre-in-kanpur/' },
  { label: 'IVF Centre In Meerut', href: '/uttar-pradesh/best-ivf-centre-in-meerut/' },
  { label: 'IVF Centre In Agra', href: '/uttar-pradesh/best-ivf-centre-in-agra/' },
  { label: 'IVF Centre in Gurgaon', href: '/haryana/best-ivf-centre-in-gurgaon/' },
  { label: 'IVF Centre In Faridabad', href: '/haryana/best-ivf-centre-in-faridabad/' },
  { label: 'IVF Centre In Patna', href: '/bihar/best-ivf-centre-in-patna/' },
  { label: 'IVF Centre In Muzaffarpur', href: '/bihar/best-ivf-centre-in-muzaffarpur/' },
  { label: 'IVF Centre In Kochi', href: '/kerala/best-ivf-centre-in-kochi/' },
  { label: 'IVF Centre In Kasaragod', href: '/kerala/best-ivf-centre-in-kasaragod/' },
  { label: 'IVF Centre In Guwahati', href: '/assam/best-ivf-centre-in-guwahati/' },
  { label: 'IVF Centre In Haldwani', href: '/uttarakhand/best-ivf-centre-in-haldwani/' },
  { label: 'IVF Centre In Ranchi', href: '/jharkhand/best-ivf-centre-in-ranchi/' },
  { label: 'IVF Centre In Kolkata', href: '/west-bengal/best-ivf-centre-in-kolkata/' },
  { label: 'IVF Centre In Jammu', href: '/jammu-kashmir/best-ivf-centre-in-jammu/' },
  { label: 'IVF Centre In India', href: '/best-ivf-centre-in-india/' },
  { label: 'IVF Center In Oman', href: '/best-ivf-centre-in-mabela-muscat/' },
];

const IvfCentresDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cs_cost_dropdown_section pt-2 pb-4 mt-2">
      <div className="container">
        {/* Toggle Button / Header matching site theme */}
        <div
          className="cs_cost_accordion_header d-flex justify-content-between align-items-center cursor-pointer pb-3"
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          aria-expanded={isOpen}
          style={{
            borderBottom: '1px solid #e5e7eb',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <h2
            className="cs_service_main_title mb-0"
            style={{
              fontSize: 'clamp(20px, 2.5vw, 12px)',
              letterSpacing: '0.8px',
              fontWeight: '700',
              fontFamily: 'var(--heading-font, sans-serif)',
              textTransform: 'uppercase',
            }}
          >
            <span className="cs_service_main_title_span">IVF CENTRES</span> IN KEY LOCATIONS
          </h2>

          <span
            className="cs_cost_toggle_icon"
            style={{
              color: '#df3655',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '1',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              transition: 'transform 0.2s ease',
            }}
          >
            {isOpen ? '-' : '+'}
          </span>
        </div>

        {/* Expandable Content Container - Pure White Background */}
        {isOpen && (
          <div className="cs_cost_box_container p-4 p-md-5">
            <div
              className="cs_cost_links_wrapper"
              style={{
                fontSize: '15px',
                lineHeight: '2.4',
                wordBreak: 'break-word',
              }}
            >
              {IVF_CENTRES.map((item, index) => {
                const isLast = index === IVF_CENTRES.length - 1;
                return (
                  <React.Fragment key={item.href}>
                    <Link
                      href={item.href}
                      className="cs_cost_city_link text-decoration-none"
                      style={{
                        color: 'var(--body-color, #1a1a1a)',
                        fontWeight: '500',
                        display: 'inline-block',
                        transition: 'color 0.2s ease, text-decoration 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#df3655';
                        e.currentTarget.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--body-color, #1a1a1a)';
                        e.currentTarget.style.textDecoration = 'none';
                      }}
                    >
                      {item.label}
                    </Link>
                    {!isLast && (
                      <span
                        className="cs_cost_separator"
                        style={{
                          margin: '0 10px',
                          color: '#cbd5e1',
                          fontWeight: '300',
                          userSelect: 'none',
                        }}
                      >
                        |
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IvfCentresDropdown;
