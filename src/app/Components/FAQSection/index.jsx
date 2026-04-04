"use client"
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPathClient } from '../../utils/assetPath';

const FAQSection = ({ data }) => {
  const getFaqIconColor = (iconUrl) => {
    const normalized = (iconUrl || '').toString().toLowerCase();

    // Same palette mapping by icon filename
    if (normalized.endsWith('/ffc.svg') || normalized.includes('ffc.svg')) return '#df3655';
    if (normalized.endsWith('/mfc.svg') || normalized.includes('mfc.svg')) return '#4cacae';
    if (normalized.endsWith('/cgt.svg') || normalized.includes('cgt.svg')) return '#fcca1d';
    if (normalized.endsWith('/fa.svg') || normalized.includes('fa.svg')) return '#45536e';

    return '#df3655';
  };

  return (
    <div className="cs_faq_section">
      <div className="container">
        {/* Section Title */}
        {data.sectionTitle && (
          <div className="cs_faq_title_section">
            <h2 className="cs_faq_main_title">
              {typeof data.sectionTitle === 'object' && data.sectionTitle.part1 ? (
                <>
                  <span className="cs_faq_title_part1" style={{ color: '#df3655' }}>
                    {data.sectionTitle.part1}
                  </span>{' '}
                  <span className="cs_faq_title_part2" style={{ color: '#333333' }}>
                    {data.sectionTitle.part2}
                  </span>
                </>
              ) : (
                data.sectionTitle
              )}
            </h2>
          </div>
        )}

        <div className="cs_height_30 cs_height_lg_30" />

        <div className="cs_faq_section_wrapper">
          {/* Design Image - Background (behind the grid, left side) */}
          {data?.designImage && (
            <div className="cs_faq_design_image">
              <Image
                src={getAssetPathClient(data.designImage)}
                alt="Design Background"
                width={300}
                height={400}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          )}

          {/* FAQ Cards Grid */}
          <div className="row cs_gap_y_30">
          {data.faqCategories.map((category, index) => {
            return (
              <div key={index} className="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="cs_faq_card">
                  <div className="cs_faq_card_content">
                    {category.icon && (
                      <div
                        className="cs_faq_icon"
                        style={{
                          '--faq-icon-color': getFaqIconColor(category.icon),
                          '--faq-icon-url': `url("${getAssetPathClient(category.icon)}")`,
                        }}
                      >
                        <span className="cs_faq_icon_mask" aria-hidden="true" />
                      </div>
                    )}
                    <div className="cs_faq_card_body">
                      <h3 className="cs_faq_card_title">{category.title}</h3>
                      <p className="cs_faq_card_description">{category.description}</p>
                      {category.link && (
                        <Link href={category.link} className="cs_faq_explore_link">
                          Explore Now
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
