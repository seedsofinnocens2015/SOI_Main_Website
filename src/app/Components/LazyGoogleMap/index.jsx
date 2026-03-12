"use client"
import React from 'react';

const LazyGoogleMap = ({ title, height = 335, src }) => {
  return (
    <div className="cs_map_wrapper">
      <iframe
        title={title}
        src={src || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2246332573263!2d77.20100627528524!3d28.532967075719295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce20320e1d805%3A0x7d88d4bcd484e5ec!2sSeeds%20of%20Innocens%20IVF%20Centre%20-%20Best%20IVF%20Centre%20in%20Delhi%20%7C%20Fertility%20Clinics!5e0!3m2!1sen!2sin!4v1773123385736!5m2!1sen!2sin"}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LazyGoogleMap;
