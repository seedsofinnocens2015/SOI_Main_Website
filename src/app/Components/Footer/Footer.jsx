"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPathClient } from '../../utils/assetPath';

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
          { href: '/fertility-treatments/ivf-icsi/', text: 'IVF-ICSI' },
          { href: '/fertility-treatments/iui/', text: 'IUI' },
          { href: '/advanced-fertility-care/male-infertility/', text: 'Male Infertility' },
          { href: '/advanced-fertility-care/egg-freezing/', text: 'Egg Freezing' },
          { href: '/fertility-treatments/blastocyst-transfer/', text: 'Blastocyst Transfer' },
          { href: '/fertility-treatments/ovulation-induction/', text: 'Ovulation Induction' },
          { href: '/fertility-treatments/follicular-monitoring/', text: 'Follicular Monitoring' },
          { href: '/fertility-treatments/tesa-pesa/', text: 'TESA/PESA' },
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
      { href: '/embryo-biopsy-training-program', text: 'Embryo Biopsy' },
      { href: '/embryologist-training-program', text: 'Embryologist' },
      { href: '/training-academy/andrology-technician-training-program', text: 'Andrology Technician' },
      { href: '/gynecologic-surgical-training-program', text: 'Gynecologic Surgical' },
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
                <Link href={data.facebookHref} target="_blank" rel="noopener noreferrer" className="cs_center">
                  <Image
                    src={getAssetPathClient('/assets/img/icons/facebook.png')}
                    alt="Facebook"
                    width={20}
                    height={20}
                    style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                  />
                </Link>
                <Link href={data.youtubeHref} target="_blank" rel="noopener noreferrer" className="cs_center">
                  <Image
                    src={getAssetPathClient('/assets/img/icons/youtube.png')}
                    alt="YouTube"
                    width={20}
                    height={20}
                    style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                  />
                </Link>
                <Link href={data.linkedinHref} target="_blank" rel="noopener noreferrer" className="cs_center">
                  <Image
                    src={getAssetPathClient('/assets/img/icons/linkedin.png')}
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                  />
                </Link>
                <Link href={data.instagramHref} target="_blank" rel="noopener noreferrer" className="cs_center">
                  <Image
                    src={getAssetPathClient('/assets/img/icons/instagram.png')}
                    alt="Instagram"
                    width={20}
                    height={20}
                    style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                  />
                </Link>
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
