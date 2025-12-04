"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

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
            <form className="cs_contact_form row cs_gap_y_30 home_form_area">
              <div className="col-md-6">
                <input type="text" name="name" className="cs_form_field" placeholder="Your name" />
              </div>
              <div className="col-md-6">
                <input type="email" name="email" className="cs_form_field" placeholder="Your email" />
              </div>
              <div className="col-md-6">
                <input type="text" name="subject" className="cs_form_field" placeholder="Your Subject" />
              </div>
              <div className="col-md-6">
                <input type="text" name="phone" className="cs_form_field" placeholder="Your phone" />
              </div>
              <div className="col-lg-12">
                <textarea rows="5" name="message" className="cs_form_field" placeholder="Your comments"></textarea>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="cs_btn cs_style_1 cs_color_1 cs_solution_content">Book Appointment</button>
              </div>
            </form>
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