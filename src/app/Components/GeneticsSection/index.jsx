"use client"
import React from 'react';
import Link from 'next/link';

const GeneticsSection = ({ data }) => {
  return (
    <div className="container">
      <div className="row cs_gap_y_30">
        {data.cards && data.cards.map((card, index) => (
          <div key={index} className="col-lg-6 col-md-12">
            <div 
              className="cs_service_feature_card"
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: card.bgColor || '#E45352',
                padding: '30px 40px',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Wavy Top Edge */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '80px',
                  overflow: 'hidden',
                  zIndex: 1
                }}
              >
                <svg 
                  width="100%" 
                  height="80" 
                  viewBox="0 0 1200 80" 
                  preserveAspectRatio="none"
                  style={{ display: 'block' }}
                >
                  <path 
                    d="M0,40 Q150,0 300,40 T600,40 T900,40 T1200,40 L1200,0 L0,0 Z" 
                    fill={card.bgColor || '#4ECDC4'}
                  />
                </svg>
              </div>

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {/* Title */}
                <div style={{ marginBottom: '25px', marginTop: '20px' }}>
                  <h2 
                    style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#fff',
                      marginBottom: '0px',
                      lineHeight: '1.3'
                    }}
                  >
                    {card.title}
                  </h2>
                </div>

                {/* Body Text */}
                <div style={{ marginBottom: '30px', flex: 1 }}>
                  {card.description && (
                    <p 
                      style={{
                        fontSize: '16px',
                        color: '#fff',
                        lineHeight: '1.8',
                        marginBottom: '15px'
                      }}
                    >
                      {card.description}
                    </p>
                  )}
                  {card.highlightText && (
                    <p 
                      style={{
                        fontSize: '18px',
                        color: '#fff',
                        fontWeight: '700',
                        lineHeight: '1.6',
                        marginTop: '15px'
                      }}
                    >
                      {card.highlightText}
                    </p>
                  )}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  {card.primaryButton && (
                    <Link 
                      href={card.primaryButton.link || '#'}
                      style={{
                        padding: '14px 28px',
                        backgroundColor: '#fff',
                        color: card.bgColor || '#4ECDC4',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {card.primaryButton.text}
                    </Link>
                  )}
                  {card.secondaryButton && (
                    <Link 
                      href={card.secondaryButton.link || '#'}
                      style={{
                        padding: '14px 28px',
                        backgroundColor: 'transparent',
                        color: '#fff',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        border: '2px solid #fff',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {card.secondaryButton.text}
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneticsSection;
