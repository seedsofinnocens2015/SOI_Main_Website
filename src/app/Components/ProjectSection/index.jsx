"use client"
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAssetPathClient } from "../../utils/assetPath";

const INDIA_STATE_ORDER = [
  "Delhi",
  "Uttar Pradesh",
  "Haryana",
  "Bihar",
  "Kerala",
  "Assam",
  "Uttarakhand",
  "Jharkhand",
  "West Bengal",
  "Jammu and Kashmir",
];

const getLocationState = (title) => {
  if (!title) return "Other";
  const parts = title.split(",").map((part) => part.trim()).filter(Boolean);
  return parts[parts.length - 1] || "Other";
};

const ProjectSection = ({ data }) => {
  const getCentreBorderColor = (title) => {
    const key = (title || "").toString().trim().toLowerCase();

    const groupCB3148 = new Set([
      "malviya nagar, delhi",
      "janakpuri, delhi",
      "pitampura, delhi",
      "ranchi, jharkhand",
      "mabela, muscat, oman",
    ]);

    const group53A7A7 = new Set([
      "haldwani, uttarakhand",
      "muzaffarpur, bihar",
      "patna, bihar",
      "kolkata, west bengal",
      "jammu, jammu and kashmir",
    ]);

    const groupE1B41A = new Set([
      "gurgaon, haryana",
      "faridabad, haryana",
      "guwahati, assam",
      "kochi, kerala",
      "kasaragod, kerala",
    ]);

    const group38425B = new Set([
      "ghaziabad, uttar pradesh",
      "gorakhpur, uttar pradesh",
      "lucknow, uttar pradesh",
      "kanpur, uttar pradesh",
      "meerut, uttar pradesh",
      "agra, uttar pradesh",
    ]);

    if (groupCB3148.has(key)) return "#df3655";
    if (group53A7A7.has(key)) return "#4cacae";
    if (groupE1B41A.has(key)) return "#fcca1d";
    if (group38425B.has(key)) return "#45536e";

    return "#df3655";
  };
  
  // Separate India and International locations
  const indiaTabs = useMemo(() => data?.tabData?.filter(tab => tab.id !== 'international') || [], [data?.tabData]);
  const internationalTab = useMemo(() => data?.tabData?.find(tab => tab.id === 'international') || null, [data?.tabData]);
  
  const indiaLocations = useMemo(() => {
    const items = indiaTabs.flatMap((tab) => tab.items) || [];
    return [...items].sort((a, b) => {
      const stateA = getLocationState(a.title);
      const stateB = getLocationState(b.title);
      const indexA = INDIA_STATE_ORDER.indexOf(stateA);
      const indexB = INDIA_STATE_ORDER.indexOf(stateB);
      const orderA = indexA === -1 ? INDIA_STATE_ORDER.length : indexA;
      const orderB = indexB === -1 ? INDIA_STATE_ORDER.length : indexB;
      return orderA - orderB;
    });
  }, [indiaTabs]);
  const internationalLocations = useMemo(() => internationalTab?.items || [], [internationalTab]);

  const renderCentreCard = (item, index) => (
    <div
      key={`${item.title}-${index}`}
      className="cs_centre_card"
      style={{ "--centre-border-color": getCentreBorderColor(item.title) }}
    >
      {item.link ? (
        <Link href={item.link} className="cs_centre_content">
          <h3 className="cs_centre_title">{item.title}</h3>
        </Link>
      ) : (
        <div className="cs_centre_content">
          <h3 className="cs_centre_title">{item.title}</h3>
        </div>
      )}
    </div>
  );

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
            <h3 className="cs_service_main_title">
              <span className="cs_service_main_title_span">{titleParts.first}</span> {titleParts.rest}
            </h3>
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
                    {indiaLocations.map((item, index) => renderCentreCard(item, index))}
                  </div>
                </div>
              </div>
          
              {/* International Locations */}
              {internationalLocations.length > 0 && (
                <div className="cs_location_section">
                  <h3 className="cs_location_section_title">International</h3>
                  <div className="cs_locations_scroll_container">
                    <div className="cs_centres_grid">
                      {internationalLocations.map((item, index) => renderCentreCard(item, index))}
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
              <Image src={getAssetPathClient("/assets/img/map.webp")} alt="map" width={1500} height={1500} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
