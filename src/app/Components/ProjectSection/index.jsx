"use client"
import { useMemo } from "react";
import Spacing from "../Spacing";
import SectionHeading from "../SectionHeading";
import LocationsMap from "../LocationsMap";

const ProjectSection = ({ data }) => {
  
  // Separate India and International locations
  const indiaTabs = useMemo(() => data?.tabData?.filter(tab => tab.id !== 'international') || [], [data?.tabData]);
  const internationalTab = useMemo(() => data?.tabData?.find(tab => tab.id === 'international') || null, [data?.tabData]);
  
  const indiaLocations = useMemo(() => indiaTabs.flatMap(tab => tab.items) || [], [indiaTabs]);
  const internationalLocations = useMemo(() => internationalTab?.items || [], [internationalTab]);

  // Get all locations with coordinates for map
  const allLocationsForMap = useMemo(() => {
    const all = [...indiaLocations, ...internationalLocations];
    return all.filter(loc => loc.coordinates && loc.coordinates.length === 2);
  }, [indiaLocations, internationalLocations]);
  

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
        
        {/* Map and Locations Layout */}
        <div className="row cs_gap_y_30 align-items-start">
          {/* Locations Section - Left Side */}
          <div className="col-lg-7 col-md-12">
            <div className="cs_locations_scroll_wrapper">
              {/* India Locations */}
              <div className="cs_location_section">
                <h3 className="cs_location_section_title">India</h3>
                <div className="cs_locations_scroll_container">
                  <div className="cs_centres_grid">
                    {indiaLocations.map((item, index) => (
                      <div key={index} className="cs_centre_card">
                        <div className="cs_centre_content">
                          <span className="cs_centre_icon">📍</span>
                          <h3 className="cs_centre_title">{item.title}</h3>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
          
              {/* International Locations */}
              {internationalLocations.length > 0 && (
                <div className="cs_location_section">
                  <h3 className="cs_location_section_title">International</h3>
                  <div className="cs_locations_scroll_container">
            <div className="cs_centres_grid">
                      {internationalLocations.map((item, index) => (
                        <div key={index} className="cs_centre_card">
                  <div className="cs_centre_content">
                            <span className="cs_centre_icon">📍</span>
                    <h3 className="cs_centre_title">{item.title}</h3>
                  </div>
                </div>
              ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Map Section - Right Side */}
          <div className="col-lg-5 col-md-12">
            <div className="cs_locations_map_wrapper">
              <LocationsMap locations={allLocationsForMap} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
