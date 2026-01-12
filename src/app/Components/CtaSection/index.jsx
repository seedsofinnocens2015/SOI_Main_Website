"use client"
import Image from "next/image";
import Link from "next/link";
import { getAssetPathClient } from "../../utils/assetPath";

const CtaSection = ({ data = {} }) => {
  const serviceCards = [
    {
      imageUrl: "/assets/img/icons/ffc.svg",
      title: "Female fertility care",
      link:  "/female-infertility",
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
      link:  "/fertility-academy",
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
                <Link href={card.link} key={index} className="cs_cta_card">
                  <div className="cs_cta_card_image">
                    <Image 
                      src={getAssetPathClient(card.imageUrl)} 
                      alt={card.title}
                      width={100}
                      height={100}
                      style={{ objectFit: 'contain' }}
                    />
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
