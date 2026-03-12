"use client"
import Link from "next/link";
import { getAssetPathClient } from "../../utils/assetPath";

const CtaSection = ({ data = {} }) => {
  const getCtaIconColor = (imageUrl) => {
    const normalized = (imageUrl || "").toString().toLowerCase();

    // Same 4-color palette mapping by icon URL
    if (normalized.endsWith("/ffc.svg") || normalized.includes("ffc.svg")) return "#df3655";
    if (normalized.endsWith("/mfc.svg") || normalized.includes("mfc.svg")) return "#53A7A7";
    if (normalized.endsWith("/cgt.svg") || normalized.includes("cgt.svg")) return "#E1B41A";
    if (normalized.endsWith("/fa.svg") || normalized.includes("fa.svg")) return "#38425B";

    return "#df3655";
  };

  const serviceCards = [
    {
      imageUrl: "/assets/img/icons/ffc.svg",
      title: "Female fertility care",
      link:  "/ivf",
    },
    {
      imageUrl: "/assets/img/icons/mfc.svg",
      title: "Male fertility care",
      link:  "/male-infertility-treatment-in-india",
    },
    {
      imageUrl:  "/assets/img/icons/cgt.svg",
      title: "Couples genetic testing",
      link:  "/couple-carrier-screening",
    },
    {
      imageUrl:"/assets/img/icons/fa.svg",
      title: "Fertility Academy",
      link:  "/gynecologic-surgical-training-program",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="cs_cta_in">
          <div className="cs_cta_left">
            <h2 className="cs_cta_title">BEGIN YOUR<br /> FERTILITY JOURNEY<br /> TODAY.</h2>
          </div>
          <div className="cs_cta_right">
            <div className="cs_cta_cards">
              {serviceCards.map((card, index) => (
                <Link
                  href={card.link}
                  key={index}
                  className="cs_cta_card"
                  style={{
                    "--cta-icon-color": getCtaIconColor(card.imageUrl),
                    "--cta-icon-url": `url("${getAssetPathClient(card.imageUrl)}")`,
                  }}
                >
                  <div className="cs_cta_card_image">
                    <span className="cs_cta_icon" aria-hidden="true" />
                  </div>
                  <h3 className="cs_cta_card_title">{card.title}</h3>
                  <span className="cs_cta_card_link">START NOW →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="cs_cta_shape" /> */}
    </>
  );
};

export default CtaSection;
