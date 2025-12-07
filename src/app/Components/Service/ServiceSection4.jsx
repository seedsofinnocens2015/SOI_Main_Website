"use client"
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const ServiceSection4 = ({ data }) => {
  return (
    <>
      <div className="container">
        {/* Related Services Section - Only show if data exists */}
        {(data.serviceHeading || (data.services && data.services.length > 0)) && (
          <div className="row cs_gap_y_40">
            <div className="col-xl-4 col-lg-5">
              <div className="cs_solution_content_wrapper cs_gray_bg cs_type_1">
                {data.serviceHeading && (
                  <h3 className="cs_service_heading">{data.serviceHeading}</h3>
                )}
                {data.services && data.services.length > 0 && (
                  <ul className="cs_solution_links cs_style_2 cs_mp0">
                    {data.services.map((service, index) => (
                      <li key={index}>
                        <Link href={service.url}>
                          <span className="cs_tab_link_icon_left cs_center">
                            <i>
                              <FaCheckCircle />
                            </i>
                          </span>
                          <span>{service.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details_thumbnail">
              <Image src={data.mainImage} alt="img" width={856} height={448}   />
              </div>
            </div>
          </div>
        )}
        
        {/* Main Image - Show if no related services */}
        {(!data.serviceHeading && (!data.services || data.services.length === 0)) && data.mainImage && (
          <div className="row cs_gap_y_40">
            <div className="col-12">
              <div className="cs_service_details_thumbnail">
                <Image src={data.mainImage} alt="img" width={856} height={448}   />
              </div>
            </div>
          </div>
        )}
        
        {/* Service Details Section - Only show if data exists */}
        {(data.serviceDetails && data.serviceDetails.length > 0) && (
          <>
            <div className="cs_height_35 cs_height_lg_30" />
            <div className="cs_service_details">
              <h3 className="cs_service_heading">Service Details:</h3>
              {data.serviceDetails.map((detail, index) => (
                <p key={index} className="cs_service_subtitle">
                  {detail}
                </p>
              ))}
            </div>
          </>
        )}
        
        {/* Additional Images and Icon Boxes - Only show if data exists */}
        {((data.additionalImages && data.iconBoxes && data.iconBoxes.length > 0) || data.subtitle) && (
          <>
            <div className="cs_height_35 cs_height_lg_30" />
            <div className="row cs_gap_y_30">
              {data.additionalImages && (
                <div className="col-lg-6">
                  <div className="cs_service_details_thumbnail">
                  <Image src={data.additionalImages} alt="img" width={636} height={327}   />
                  </div>
                </div>
              )}
              {(data.iconBoxes && data.iconBoxes.length > 0) || data.subtitle ? (
                <div className={`col-lg-${data.additionalImages ? '6' : '12'}`}>
                  {data.iconBoxes && data.iconBoxes.length > 0 && (
                    <div className="row cs_gap_y_30">
                      {data.iconBoxes.map((box, index) => (
                        <div key={index} className="col-xl-6 col-lg-12 col-md-6">
                          <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg">
                            <div
                              className="cs_iconbox_overlay cs_bg_filed"
                              style={{ backgroundImage: `url(${box.bgImage})` }}
                            />
                            <div className="cs_iconbox_shape" />
                            <div className="cs_iconbox_header d-flex align-items-center justify-content-between">
                              <div className="cs_iconbox_icon cs_center">
                              <Image src={box.icon} alt="img" width={26} height={25}   />

                              </div>
                              <h3 className="iconbox_index">{box.index}</h3>
                            </div>
                            <h3 className="cs_iconbox_title">
                              <Link href={box.link}>{box.title}</Link>
                            </h3>
                            <p className="cs_iconbox_subtitle m-0">{box.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {data.subtitle && (
                    <div className="cs_about_iconbox">
                      <div className="cs_about_iconbox_icon cs_center">
                        <i>
                          <FaCheckCircle />
                        </i>
                      </div>
                      <p className="cs_about_iconbox_subtitle">
                        {data.subtitle}{" "}
                        {data.readMoreUrl && (
                          <Link href={data.readMoreUrl}>{data.readMoreText}</Link>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </>
        )}
        
        {/* Footer Text - Only show if exists */}
        {data.footerText && (
          <>
            <div className="cs_height_45 cs_height_lg_30" />
            <p className="cs_service_subtitle mb-0">{data.footerText}</p>
          </>
        )}
      </div>
    </>
  );
};

export default ServiceSection4;
