"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import React, { useState } from 'react';
import Image from 'next/image';
import mediaCoverageData from '@/app/data/mediaCoverageData.json';

function getPaginationItems(totalPages, currentPage) {
  const pageNumbers = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
  const orderedPages = [...pageNumbers]
    .filter((pageNumber) => pageNumber >= 1 && pageNumber <= totalPages)
    .sort((a, b) => a - b);

  return orderedPages.flatMap((pageNumber, index) => {
    const previousPage = orderedPages[index - 1];
    return index > 0 && pageNumber - previousPage > 1
      ? [`ellipsis-${previousPage}-${pageNumber}`, pageNumber]
      : [pageNumber];
  });
}

const headingData = {
  uspTitle: 'Media & <span class="cs_accent_color">Press </span>',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Our Media Coverage',
      paragraphs: [
        'Seeds of Innocens has been featured in various media outlets, highlighting our innovative treatments, success stories, and contributions to the field of reproductive medicine.',
      ]
    },
  ],
};



const MediaPressClient = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const reversedData = [...mediaCoverageData].reverse();
  const currentMediaItems = reversedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.max(1, Math.ceil(reversedData.length / itemsPerPage));
  const paginationItems = getPaginationItems(totalPages, currentPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Section className={'cs_page_heading cs_bg_filed cs_center'} backgroundImage="/assets/img/MediaPress.webp">
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

      {/* Media Coverage Grid */}
      <Section topSpaceLg="20" topSpaceMd="30" bottomSpaceLg="50" bottomSpaceMd="60">
        <div className="container">
          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {currentMediaItems.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div 
                  style={{ 
                    backgroundColor: '#ffffff',
                    borderRadius: '12px', 
                    overflow: 'hidden', 
                    border: '1px solid #df3655',
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Top Image */}
                  <div style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    backgroundImage: `url('${item.image || '/assets/img/default-media.jpg'}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    {/* Publisher Logo */}
                    {item.publisherLogo && (
                      <div style={{ position: 'absolute', top: '15px', left: '15px', zIndex: 2, backgroundColor: '#fff', padding: '5px 10px', borderRadius: '4px', maxWidth: '120px' }}>
                        <img src={item.publisherLogo} alt="Publisher" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                      </div>
                    )}
                  </div>

                  {/* Bottom Content */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#000000', marginBottom: '20px', lineHeight: '1.4' }}>
                      {item.title}
                    </h4>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                      <span style={{ fontSize: '14px', color: '#888', fontWeight: '400' }}>
                        {item.date || 'September 10, 2026'}
                      </span>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#df3655', textDecoration: 'none', fontWeight: '500', fontSize: '15px' }}>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav aria-label="Media pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '50px' }}>
              {currentPage > 1 && (
                <button type="button" onClick={() => setCurrentPage(currentPage - 1)} style={{ minWidth: '88px', height: '42px', padding: '0 17px', borderRadius: '21px', border: '1px solid #e8e8e8', color: '#555', backgroundColor: '#fff', fontWeight: '600' }}>Previous</button>
              )}
              {paginationItems.map((item) => (
                typeof item === 'string' ? (
                  <span key={item} aria-hidden="true" style={{ width: '28px', textAlign: 'center', color: '#999', letterSpacing: '2px' }}>•••</span>
                ) : (
                  <button key={item} type="button" onClick={() => setCurrentPage(item)} aria-current={item === currentPage ? 'page' : undefined} style={{ width: '42px', height: '42px', borderRadius: '50%', fontWeight: '600', border: item === currentPage ? '1px solid #df3655' : '1px solid #e8e8e8', backgroundColor: item === currentPage ? '#df3655' : '#fff', color: item === currentPage ? '#fff' : '#555', boxShadow: item === currentPage ? '0 5px 12px rgba(223, 54, 85, 0.22)' : 'none' }}>{item}</button>
                )
              ))}
              {currentPage < totalPages && (
                <button type="button" onClick={() => setCurrentPage(currentPage + 1)} style={{ minWidth: '72px', height: '42px', padding: '0 17px', borderRadius: '21px', border: '1px solid #e8e8e8', color: '#555', backgroundColor: '#fff', fontWeight: '600' }}>Next</button>
              )}
            </nav>
          )}
        </div>
      </Section>

    </div>
  );
};

export default MediaPressClient;
