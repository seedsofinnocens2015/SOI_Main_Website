import Image from "next/image";
import SectionHeading from "../SectionHeading";

const ChooseUs = ({ data }) => {
  const { subtitle, title, services } = data || {};

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <SectionHeading SectionSubtitle={subtitle} SectionTitle={title} />
            <div className="cs_height_30 cs_height_lg_30" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="cs_chooseus_minimalistic">
              <div className="cs_chooseus_grid">
                {services.map((service, index) => (
                  <div key={index} className="cs_chooseus_card">
                    <div className="cs_chooseus_icon">
                      <Image src={service.iconUrl} alt={service.title} width={20} height={20} />
                    </div>
                    <h3 className="cs_chooseus_title">{service.title}</h3>
                    <p className="cs_chooseus_subtitle">{service.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
