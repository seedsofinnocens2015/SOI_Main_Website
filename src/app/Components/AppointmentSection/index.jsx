import Link from "next/link";
import SectionHeading from "../SectionHeading";
import Image from "next/image";
import { FaSuitcase, FaLocationDot } from "react-icons/fa6";
import { getAssetPathClient } from "@/app/utils/assetPath";

const AppointmentSection = ({ data }) => {
  return (
    <>
      <div className="container">
        {(data.subtitle || data.title) && (
          <>
            <SectionHeading
              SectionSubtitle={data.subtitle}
              SectionTitle={data.title}
              variant={"text-center"}
            />
            <div className="cs_height_50 cs_height_lg_50" />
          </>
        )}

        {!data.subtitle && !data.title && <div className="cs_height_30 cs_height_lg_30" />}
        <div className="cs_doctors_grid cs_style_1">
          {data.doctorsData.map((doctor, index) => (
            <div className="cs_team cs_style_1 cs_blue_bg" key={index}>
              <div className="cs_team_shape cs_accent_bg" />
              <Link href={doctor.profileLink} className="cs_team_thumbnail">
              <Image src={getAssetPathClient(doctor.imageUrl)} alt={`${doctor.name} Thumbnail`} width={302} height={423} loading="eager" />
              </Link>
              <div className="cs_team_bio">
                <h3 className="cs_team_title cs_extra_bold mb-0">
                  <Link href={doctor.profileLink}>{doctor.name}</Link>
                </h3>
                <p className="cs_team_subtitle">{doctor.specialty}</p>
                <div className="cs_team_info_items">
                  {doctor.experience && (
                    <div className="cs_team_info_item">
                      <i>
                        <FaSuitcase />
                      </i>
                      <span>{doctor.experience} Experience </span>
                    </div>
                  )}
                  {doctor.state && (
                    <div className="cs_team_info_item">
                      <i>
                        <FaLocationDot />
                      </i>
                      <span>{doctor.state}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppointmentSection;
