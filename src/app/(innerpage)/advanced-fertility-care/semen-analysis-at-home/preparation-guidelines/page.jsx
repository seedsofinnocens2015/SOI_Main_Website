"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Link from 'next/link';
import { useEffect } from 'react';

const headingData = {
  title: 'Semen Analysis Preparation Guidelines',
};

const page = () => {
  useEffect(() => {
    // You can add the drive link here
    // For example, if you want to auto-redirect:
    // window.location.href = 'YOUR_DRIVE_LINK_HERE';
  }, []);

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Main Content Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#fff', 
                borderRadius: '8px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h2 style={{ marginBottom: '30px', color: '#333' }}>Preparation Guidelines</h2>
                <p style={{ marginBottom: '30px', color: '#666', fontSize: '16px' }}>
                  Please click the button below to access the detailed preparation guidelines document.
                </p>
                
                <div style={{ marginBottom: '30px' }}>
                  <a
                    href="https://drive.google.com/file/d/1MIsb2lxru4T-MRzob1gQKhR_R33MdLbk/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '15px 40px',
                      backgroundColor: '#CC2627',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontSize: '16px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#CC2627';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#CC2627';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
                    }}
                  >
                    Open Guidelines Document
                  </a>
                </div>

                <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                    <strong>Note:</strong> Replace "https://drive.google.com/file/d/1MIsb2lxru4T-MRzob1gQKhR_R33MdLbk/view" in the code with your actual Google Drive link.
                  </p>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <Link 
                    href="/advanced-fertility-care/semen-analysis-at-home"
                    style={{
                      color: '#007bff',
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}
                  >
                    ← Back to Semen Analysis at Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
