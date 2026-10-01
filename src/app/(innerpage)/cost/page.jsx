import Section from '@/app/Components/Section';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import AccentHeading from '@/app/Components/AccentHeading';
import { getAllIvfCosts } from '@/app/utils/ivfCostData';
import { getAssetPath } from '@/app/utils/assetPath';

export async function generateMetadata() {
  return {
    title: 'IVF Cost Guides | Seeds of Innocens',
    description: 'Explore comprehensive IVF treatment costs, inclusions, and procedures across centres at Seeds of Innocens IVF.',
  };
}

const CostIndexPage = () => {
  const costList = getAllIvfCosts();

  return (
    <div>
      <Section topSpaceLg="100" topSpaceMd="130" bottomSpaceLg="80">
        <div className="container">
          <div className="text-center mb-5">
            <div
              style={{
                display: 'inline-block',
                padding: '6px 18px',
                backgroundColor: '#b61e42',
                color: '#fff',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '15px',
                letterSpacing: '0.5px',
              }}
            >
              IVF COST GUIDES
            </div>
            <AccentHeading level={1} className="cs_ivf_content_heading" style={{ marginBottom: '16px' }}>
              IVF Cost in Our Center
            </AccentHeading>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: '#555', fontSize: '16px', lineHeight: '1.7' }}>
              Explore detailed IVF treatment cost breakdowns, factors, and expert insights from Seeds of Innocens specialists.
            </p>
          </div>

          <div className="row g-4">
            {costList.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id || item.slug}>
                <div
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {item.image && (
                    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                      <Image
                        src={getAssetPath(item.image)}
                        alt={item.title}
                        width={600}
                        height={350}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      {item.category && (
                        <span style={{ fontSize: '12px', color: '#b61e42', fontWeight: '600', textTransform: 'uppercase' }}>
                          {item.category}
                        </span>
                      )}
                      <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111', margin: '8px 0 12px' }}>
                        {item.title}
                      </h3>
                      {item.date && (
                        <p style={{ fontSize: '13px', color: '#666', marginBottom: '16px' }}>
                          {item.date} • {item.readTime || '5 min read'}
                        </p>
                      )}
                    </div>
                    <Link
                      href={`/cost/${item.slug}/`}
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        backgroundColor: '#b61e42',
                        color: '#fff',
                        padding: '10px 16px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '14px',
                      }}
                    >
                      Read Cost Guide →
                    </Link>
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

export default CostIndexPage;
