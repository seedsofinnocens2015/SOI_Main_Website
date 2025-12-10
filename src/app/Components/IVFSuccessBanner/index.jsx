"use client"
import Link from 'next/link';
import { FaAnglesRight } from 'react-icons/fa6';

const IVFSuccessBanner = () => {
  return (
    <div className="cs_ivf_success_banner">
      <div className="container">
        <div className="cs_ivf_success_banner_in">
          <div className="cs_ivf_success_banner_left">
            <span className="cs_new_badge">NEW</span>
            <h3 className="cs_ivf_success_title">Calculate Your IVF Success Rate</h3>
          </div>
          <div className="cs_ivf_success_banner_right">
            <Link href="/resources/fertility-calculator/" className="cs_btn cs_style_1 cs_color_1">
              <span>Calculate Now</span>
              <i>
                <FaAnglesRight />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IVFSuccessBanner;

