"use client"
import {
  FaLocationDot,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';

const IconBox = ({ type, children }) => {
  const getIcon = () => {
    switch (type) {
      case 'location':
        return <FaLocationDot />;
      case 'phone':
        return <FaPhoneAlt />;
      case 'email':
        return <FaEnvelope />;
      case 'clock':
        return <FaClock />;
      default:
        return null;
    }
  };

  return (
    <div className="cs_iconbox_icon">
      {getIcon()}
    </div>
  );
};

export default IconBox;

