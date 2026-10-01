'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getAllIvfCosts } from '@/app/utils/ivfCostData';

const IvfCostDropdown = () => {
  const [isOpen, setIsOpen] = useState(true);
  const costList = getAllIvfCosts();

  // If there are no items in ivfcost.json, do not render
  if (!costList || costList.length === 0) {
    return null;
  }

  return (
    <div className="cs_cost_dropdown_section py-5 my-2">
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
            <span className="cs_service_main_title_span">IVF COST</span> IN OUR CENTERS
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
          <div
            className="cs_cost_box_container p-4 p-md-5"
           
          >
            <div
              className="cs_cost_links_wrapper"
              style={{
                fontSize: '15px',
                lineHeight: '2.4',
                wordBreak: 'break-word',
              }}
            >
              {costList.map((item) => {
                const label = item.hometitle || item.title;
                const linkHref = `/cost/${item.slug}/`;

                return (
                  <React.Fragment key={item.id || item.slug}>
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

export default IvfCostDropdown;
