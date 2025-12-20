"use client"
import React from 'react';
import SectionHeading from '../SectionHeading';
import Image from 'next/image';
import { getAssetPathClient } from '../../utils/assetPath';

const CredibilitySection = ({ data }) => {
  return (
    <div 
      className="container"
      style={{
        position: 'relative',
        padding: '60px 20px',
        backgroundColor: '#fff'
      }}
    >
      {/* Decorative Image - Left */}
      {data.leftImage && (
        <div 
          className="d-none d-md-block"
          style={{
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '120px',
            height: 'auto',
            opacity: 0.1,
            zIndex: 0
          }}
        >
          <Image
            src={getAssetPathClient(data.leftImage)}
            alt="Decorative left"
            width={120}
            height={200}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      )}

      {/* Decorative Image - Right */}
      {data.rightImage && (
        <div 
          className="d-none d-md-block"
          style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '120px',
            height: 'auto',
            opacity: 0.1,
            zIndex: 0
          }}
        >
          <Image
            src={getAssetPathClient(data.rightImage)}
            alt="Decorative right"
            width={120}
            height={200}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      )}

      {/* Heading - Using SectionHeading Component */}
      {data.subtitle && (
        <SectionHeading
          variant={'text-center'}
          SectionSubtitle={data.subtitle}
          SectionTitle={data.title || ''}
          SectionDescription={data.description || ''}
        />
      )}
      <div className="cs_height_30 cs_height_lg_30" />

      {/* Logos Row */}
      {data.logos && data.logos.length > 0 && (
        <div 
          className="row"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          {data.logos.map((logo, index) => (
            <div 
              key={index} 
              className="col-lg-2 col-md-4 col-sm-6 col-6"
              style={{
                textAlign: 'center',
                padding: '20px 15px',
                marginBottom: '20px'
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px'
              }}>
                {logo.image && (
                  <div style={{ marginBottom: '15px' }}>
                    <Image
                      src={getAssetPathClient(logo.image)}
                      alt={logo.title}
                      width={120}
                      height={120}
                      loading="lazy"
                      style={{
                        objectFit: 'contain',
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                    />
                  </div>
                )}
                {logo.title && (
                  <p 
                    style={{
                      fontSize: '12px',
                      color: '#666',
                      fontWeight: '500',
                      lineHeight: '1.4',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {logo.title}
                  </p>
                )}
                {logo.subtitle && (
                  <p 
                    style={{
                      fontSize: '11px',
                      color: '#999',
                      lineHeight: '1.3',
                      margin: '5px 0 0 0'
                    }}
                  >
                    {logo.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CredibilitySection;
