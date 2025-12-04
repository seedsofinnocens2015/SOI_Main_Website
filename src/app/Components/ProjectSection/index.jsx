"use client"
import { useState } from "react";
import Spacing from "../Spacing";
import SectionHeading from "../SectionHeading";

const ProjectSection = ({ data }) => {
  // Collect all locations from all tabs
  const allLocations = data?.tabData?.flatMap(tab => tab.items) || [];
  
  // State for showing all or limited centers
  const [showAll, setShowAll] = useState(false);
  
  // Show only first 8 items (2 rows) initially
  const initialDisplayCount = 8;
  const displayedLocations = showAll ? allLocations : allLocations.slice(0, initialDisplayCount);
  
  // Calculate if last row has less than 4 items (only when showing all)
  const totalDisplayed = displayedLocations.length;
  const itemsInLastRow = showAll ? (totalDisplayed % 4) : 0;
  const isLastRowIncomplete = showAll && itemsInLastRow > 0 && itemsInLastRow < 4;

  const toggleView = () => {
    setShowAll(!showAll);
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
        
        {/* All Locations List - Clean Grid Layout */}
        <div className="cs_centres_grid_wrapper">
          <div className={`cs_centres_grid ${isLastRowIncomplete ? 'cs_last_row_incomplete' : ''}`} data-last-row-count={itemsInLastRow}>
            {displayedLocations.map((item, index) => {
              const isLastRow = showAll && index >= totalDisplayed - itemsInLastRow;
              const positionInLastRow = index - (totalDisplayed - itemsInLastRow);
              
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
          
          {/* View All / View Less Button */}
          {allLocations.length > initialDisplayCount && (
            <div className="cs_centres_view_toggle">
              <button 
                onClick={toggleView}
                className="cs_btn cs_style_1"
              >
                {showAll ? 'View Less' : 'View All Centers'}
              </button>
            </div>
          )}
        </div>
      </div>
      <Spacing lg={40} md={70} />
      <hr />
    </>
  );
};

export default ProjectSection;
