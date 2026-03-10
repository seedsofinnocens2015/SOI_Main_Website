"use client"
import React from 'react';

const LazyGoogleMap = ({ title, height = 335, src }) => {
  return (
    <div className="w-full h-full min-h-[335px] relative">
      <iframe
        title={title}
        src={src || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1264353816654!2d88.45934147596008!3d22.593051431908487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM1JzM1LjAiTiA4OMKwMjcnNDEuNSJF!5e0!3m2!1sen!2sin!4v1642150000000!5m2!1sen!2sin"}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default LazyGoogleMap;
