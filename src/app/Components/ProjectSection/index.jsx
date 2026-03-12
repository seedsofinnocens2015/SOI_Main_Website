"use client"
import { useMemo } from "react";
import Spacing from "../Spacing";
import LocationsMap from "../LocationsMap";
import Image from "next/image";
import { getAssetPathClient } from "../../utils/assetPath";

const ProjectSection = ({ data }) => {
  const getCentreBorderColor = (title) => {
    const key = (title || "").toString().trim().toLowerCase();

    const groupCB3148 = new Set([
      "malviya nagar, delhi",
      "jankpuri, delhi",
      "pitampura, delhi",
      "ranchi, jharkhand",
      "mabela, muscat, oman",
      "lusaka, zambia, africa",
    ]);

    const group53A7A7 = new Set([
      "haldwani, uttarakhand",
      "muzaffarpur, bihar",
      "patna, bihar",
      "kitwe, zambia, africa",
    ]);

    const groupE1B41A = new Set([
      "gurgaon, haryana",
      "faridabad, haryana",
      "guwahati, assam",
      "kochi, kerala",
      "kasaragod, kerala",
    ]);

    const group38425B = new Set([
      "gorakhpur, uttar pradesh",
      "lucknow, uttar pradesh",
      "kanpur, uttar pradesh",
      "meerut, uttar pradesh",
      "agra, uttar pradesh",
    ]);

    if (groupCB3148.has(key)) return "#df3655";
    if (group53A7A7.has(key)) return "#53A7A7";
    if (groupE1B41A.has(key)) return "#E1B41A";
    if (group38425B.has(key)) return "#38425B";

    return "#df3655";
  };
  
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

  // Split the subtitle to get first two words and rest
  const getTitleParts = (title) => {
    if (!title) return { first: '', rest: '' };
    const words = title.split(' ');
    const first = words.slice(0, 2).join(' ') || ''; // First two words
    const rest = words.slice(2).join(' '); // Rest of the words
    return { first, rest };
  };

  const titleParts = getTitleParts(data.subtitle);
  

  return (
    <>
      <div className="container">
        {data.subtitle && (
          <div className="cs_service_title_section">
            <h2 className="cs_service_main_title">
              <span className="cs_service_main_title_span">{titleParts.first}</span> {titleParts.rest}
            </h2>
          </div>
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
                <div className="cs_locations_container">
                  <div className="cs_centres_grid">
                    {indiaLocations.map((item, index) => (
                      <div
                        key={index}
                        className="cs_centre_card"
                        style={{ "--centre-border-color": getCentreBorderColor(item.title) }}
                      >
                        <div className="cs_centre_content">
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
                        <div
                          key={index}
                          className="cs_centre_card"
                          style={{ "--centre-border-color": getCentreBorderColor(item.title) }}
                        >
                  <div className="cs_centre_content">
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
              {/* <LocationsMap locations={allLocationsForMap} /> */}
              <Image src={getAssetPathClient("/assets/img/map.png")} alt="map" width={1500} height={1500} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
