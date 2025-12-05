"use client"
import { useState } from "react";
import Spacing from "../Spacing";
import SectionHeading from "../SectionHeading";

const ProjectSection = ({ data }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Separate India and International locations
  const indiaTabs = data?.tabData?.filter(tab => tab.id !== 'international') || [];
  const internationalTab = data?.tabData?.find(tab => tab.id === 'international') || null;
  
  const indiaLocations = indiaTabs.flatMap(tab => tab.items) || [];
  const internationalLocations = internationalTab?.items || [];
  
  // Calculate if last row has less than 4 items for India
  const indiaTotalItems = indiaLocations.length;
  const indiaItemsInLastRow = indiaTotalItems % 4;
  const isIndiaLastRowIncomplete = indiaItemsInLastRow > 0 && indiaItemsInLastRow < 4;
  
  // Calculate if last row has less than 4 items for International
  const intlTotalItems = internationalLocations.length;
  const intlItemsInLastRow = intlTotalItems % 4;
  const isIntlLastRowIncomplete = intlItemsInLastRow > 0 && intlItemsInLastRow < 4;

  const toggleDropdown = (type) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  return (
    <>
      <div className="container">
        {data.subtitle && (
          <SectionHeading
            variant={'text-center'}
            SectionTitle={data.title || ''}
            SectionSubtitle={data.subtitle}
            SectionDescription={data.description || ''}
          />
        )}
        <div className="cs_height_30 cs_height_lg_30" />
        
        {/* Dropdown Accordion for Locations */}
        <div className="cs_locations_dropdown_wrapper">
          {/* India Dropdown */}
          <div className="cs_location_dropdown">
            <div 
              className={`cs_location_dropdown_header ${activeDropdown === 'india' ? 'active' : ''}`}
              onClick={() => toggleDropdown('india')}
            >
              <h3 className="cs_location_dropdown_title">India</h3>
              <span className={`cs_location_dropdown_icon ${activeDropdown === 'india' ? 'active' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <div className={`cs_location_dropdown_content ${activeDropdown === 'india' ? 'active' : ''}`}>
              <div className="cs_centres_grid_wrapper">
                <div className={`cs_centres_grid ${isIndiaLastRowIncomplete ? 'cs_last_row_incomplete' : ''}`} data-last-row-count={indiaItemsInLastRow}>
                  {indiaLocations.map((item, index) => {
                    const isLastRow = index >= indiaTotalItems - indiaItemsInLastRow;
                    const positionInLastRow = index - (indiaTotalItems - indiaItemsInLastRow);
                    
                    return (
                      <div
                        key={index}
                        className={`cs_centre_card ${isLastRow ? `cs_last_row_item cs_pos_${positionInLastRow}` : ''}`}
                      >
                        <div className="cs_centre_content">
                          <span className="cs_centre_icon">📍</span>
                          <h3 className="cs_centre_title">{item.title}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* International Dropdown */}
          {internationalLocations.length > 0 && (
            <div className="cs_location_dropdown">
              <div 
                className={`cs_location_dropdown_header ${activeDropdown === 'international' ? 'active' : ''}`}
                onClick={() => toggleDropdown('international')}
              >
                <h3 className="cs_location_dropdown_title">International</h3>
                <span className={`cs_location_dropdown_icon ${activeDropdown === 'international' ? 'active' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div className={`cs_location_dropdown_content ${activeDropdown === 'international' ? 'active' : ''}`}>
                <div className="cs_centres_grid_wrapper">
                  <div className={`cs_centres_grid ${isIntlLastRowIncomplete ? 'cs_last_row_incomplete' : ''}`} data-last-row-count={intlItemsInLastRow}>
                    {internationalLocations.map((item, index) => {
                      const isLastRow = index >= intlTotalItems - intlItemsInLastRow;
                      const positionInLastRow = index - (intlTotalItems - intlItemsInLastRow);
                      
                      return (
                        <div
                          key={index}
                          className={`cs_centre_card ${isLastRow ? `cs_last_row_item cs_pos_${positionInLastRow}` : ''}`}
                        >
                          <div className="cs_centre_content">
                            <span className="cs_centre_icon">📍</span>
                            <h3 className="cs_centre_title">{item.title}</h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
