"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";
import WebsiteContactForm from "../WebsiteContactForm/WebsiteContactForm";

const ContactSection2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <section className="cs_card cs_style_3 cs_light_bg_1 position-relative">
        <div className="cs_height_80 cs_height_lg_50"></div>
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-6">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_section_subtitle_black">
                <span className="cs_shape_left"></span>CONTACT US
              </p>
              <h2 className="cs_section_title">Book Your Online Appointment <br/>Begin Your IVF Journey Here</h2>
            </div>
            <div className="cs_height_25 cs_height_lg_25"></div>
            <WebsiteContactForm formClassName="cs_contact_form row cs_gap_y_30 home_form_area" />
            </div>
            <div className="col-lg-6">
              <div className="cs_solution_thumbnail cs_bg_filed" data-background="/assets/img/medical_solution.png" >
              </div>
            </div>
          </div>
        </div>
        <div className="cs_solution_shape position-absolute">
        <Image src="/assets/img/stethoscope2.png" alt="img" width={304} height={399}   />
        </div>
        <div className="cs_height_80 cs_height_lg_50"></div>
      </section>
    );
};

export default ContactSection2;