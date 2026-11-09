'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import centerBlogsData from '@/app/data/centerblogs.json';

const IvfDoctorsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const blogsList = Array.isArray(centerBlogsData)
    ? centerBlogsData
    : centerBlogsData?.centerBlogs || [];

  // If there are no items in centerblogs.json, do not render
  if (!blogsList || blogsList.length === 0) {
    return null;
  }

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
            <span className="cs_service_main_title_span">IVF DOCTORS</span> IN INDIA
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
              {blogsList.map((item, index) => {
                const label = item.hometitle || item.title;
                const linkHref = item.href || `/blog/${item.slug}/`;
                const isLast = index === blogsList.length - 1;

                return (
                  <React.Fragment key={item.slug || item.id || index}>
                    <Link
                      href={linkHref}
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
                      {label}
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

export default IvfDoctorsDropdown;
