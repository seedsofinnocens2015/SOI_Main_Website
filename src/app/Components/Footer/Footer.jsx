"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPathClient } from '../../utils/assetPath';

const SOCIAL_COLORS = ['#df3655', '#53A7A7', '#E1B41A', '#38425B'];

const Footer = () => {
  const data = {
 
    logo: '/assets/img/Footer Logo.svg',
    contactText:
      'All Days Open <br /> Open Hours:<br />  Mon - Sun: 9.00 am. - 7.00 pm. ',
    contactText2: '3, opp. Aurbindo College, MMTC Colony, Malviya Nagar, New Delhi, Delhi 110017',
    contactText3: '+91-9810350512',
    facebookHref: 'https://www.facebook.com/SeedsofInnocence',
    youtubeHref: 'https://www.youtube.com/@seedsofinnocens',
    linkedinHref: 'https://www.linkedin.com/company/seedsofinnocens',
    instagramHref: 'https://www.instagram.com/seedsofinnocensivf',
    widgets: [
      {
        title: 'Fertility Treatment',
        links: [
          { href: '/fertility-treatments/ivf/', text: 'IVF' },
          { href: '/fertility-treatments/icsi/', text: 'ICSI' },
          { href: '/fertility-treatments/iui/', text: 'IUI' },
          { href: '/male-infertility-treatments/male-infertility-treatment-in-india/', text: 'Male Infertility' },
          { href: '/ivf-procedures-preservation/egg-freezing/', text: 'Egg Freezing' },
          { href: '/fertility-treatments/blastocyst-transfer/', text: 'Blastocyst Transfer' },
          { href: '/fertility-treatments/ovulation-induction/', text: 'Ovulation Induction' },
          { href: '/fertility-treatments/follicular-monitoring/', text: 'Follicular Monitoring' },
          { href: '/male-infertility-treatments/tesa/', text: 'TESA/PESA' },
        ],
      },
      {
        title: 'Quick Links',
        links: [
          { href: '/doctors', text: 'Our Doctors' },
          { href: '/contact/center-locator/', text: 'Our Centers' },
          { href: '/contact/careers/', text: 'Careers' },
          { href: '/contact/feedback/', text: 'Feedback' },
          { href: '/contact/call-back-form/', text: 'Contact' },
        ],
      },
    ],
    trainingAcademyLinks: [
      { href: '/training-academy/embryo-biopsy-training-program', text: 'Embryo Biopsy' },
      { href: '/training-academy/embryologist-training-program', text: 'Embryologist' },
      { href: '/training-academy/andrology-technician-training-program', text: 'Andrology Technician' },
      { href: '/training-academy/gynecologic-surgical-training-program', text: 'Gynecologic Surgical' },
      { href: '/training-academy/training-registration', text: 'Training Registration' },
    ],
    copyrightText: 'Copyright © 2026 Felicity. All rights reserved.',
  };

  return (
    <footer className="cs_footer">
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_company_info">
              <div className="cs_footer_logo">
                <Image 
                  src={getAssetPathClient(data.logo)} 
                  alt="Seeds of Innocens IVF" 
                  width={305} 
                  height={63} 
                  loading="eager" 
                />
              </div>
              <div className="cs_footer_contact_info">
                <div className="cs_footer_open_hours">
                  <p className="cs_footer_label">Open Hours:</p>
                  <p className="cs_footer_text">Mon - Sun: 9.00 a.m. - 7.00 p.m.</p>
                </div>
                <div className="cs_footer_address">
                  <p className="cs_footer_text">3, opp. Aurbindo College,</p>
                  <p className="cs_footer_text">MMTC Colony, Malviya Nagar,</p>
                  <p className="cs_footer_text">New Delhi, Delhi 110017</p>
                </div>
                <div className="cs_footer_phone">
                  <p className="cs_footer_text">+91-9810350512</p>
                </div>
              </div>
              <div className="cs_social_btns cs_style_1">
                {[
                  { href: data.facebookHref, icon: '/assets/img/icons/facebook.svg', alt: 'Facebook' },
                  { href: data.youtubeHref, icon: '/assets/img/icons/youtube.svg', alt: 'YouTube' },
                  { href: data.linkedinHref, icon: '/assets/img/icons/linkedin.svg', alt: 'LinkedIn' },
                  { href: data.instagramHref, icon: '/assets/img/icons/instagram.svg', alt: 'Instagram' },
                ].map((item, index) => (
                  <Link
                    key={item.alt}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs_footer_social_link"
                    style={{
                      backgroundColor: SOCIAL_COLORS[index],
                      ['--footer-social-icon-url']: `url("${getAssetPathClient(item.icon)}")`,
                    }}
                    aria-label={item.alt}
                  >
                    <span className="cs_footer_social_icon" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {data.widgets.map((widget, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title">{widget.title}</h2>
                <ul className="cs_footer_widget_nav_list cs_mp_0">
                  {widget.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Training Academy</h2>
              <ul className="cs_footer_widget_nav_list cs_mp_0">
                {data.trainingAcademyLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_footer_bottom">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_footer_copyright mb-0">{data.copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
