"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  FaLocationDot,
  FaRegClock,
} from 'react-icons/fa6';
import { getAssetPathClient } from '../../utils/assetPath';

const data = {
  backgroundImage: 'assets/img/footer_bg.jpg',
  logo: '/assets/img/footer_logo.svg',
  contact: [
    {
      icon: 'fa-regular fa-clock',
      text: 'Open Hours of Government: <br /> Mon - Fri: 8.00 am. - 6.00 pm.',
    },
    {
      icon: 'fa-solid fa-location-dot',
      text: '13/A, Miranda Halim City.',
    },
    {
      icon: 'fa-solid fa-phone',
      text: '099 695 695 35',
    },
  ],
  socialLinks: [
    { href: 'https://www.facebook.com/SeedsofInnocence', icon: 'fa-brands fa-facebook-f' },
    { href: '#', icon: 'fa-brands fa-pinterest-p' },
    { href: '#', icon: 'fa-brands fa-twitter' },
    { href: '#', icon: 'fa-brands fa-instagram' },
  ],
  widgets: [
    {
      title: 'Service',
      links: [
        { href: '#', text: 'Why choose us' },
        { href: '#', text: 'Our solutions' },
        { href: '#', text: 'Partners' },
        { href: '#', text: 'Core values' },
        { href: '#', text: 'Our projects' },
      ],
    },
    {
      title: 'Quick Link',
      links: [
        { href: '#', text: 'Residents' },
        { href: '#', text: 'Business' },
        { href: '#', text: 'Online Service' },
        { href: '#', text: 'Visiting' },
        { href: '#', text: 'Employment' },
      ],
    },
  ],
  recentPosts: [
    {
      href: '/blog/blog-details',
      image: 'assets/img/recent_post2.jpg',
      date: '23 jun 2024',
      title: 'We round Solution york Blog',
    },
    {
      href: '/blog/blog-details',
      image: 'assets/img/recent_post_2.png',
      date: '20 jun 2024',
      title: 'The Medical Of This Working Health',
    },
  ],
  copyrightText: 'Copyright © 2024 Medilo, All Rights Reserved.',
  footerMenu: [
    { href: 'about.html', text: 'About Us' },
    { href: '#', text: 'Events' },
    { href: 'blog.html', text: 'News' },
    { href: 'service.html', text: 'Service' },
  ],
};

const Footer = () => {
  // Use useState to ensure images are processed on client-side
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  const data = {
    backgroundImage: '/assets/img/footer_bg.jpg',
    logo: '/assets/img/footer_logo.svg',
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
        ],
      },
      {
        title: 'Quick Links',
        links: [
          { href: '/', text: 'Home' },
          { href: '/about/our-story/', text: 'About Us' },
          { href: '/#fertility-treatments', text: 'Our Services' },
          { href: '/doctors', text: 'Our Doctors' },
          { href: '/contact/call-back-form/', text: 'Contact' },
        ],
      },
    ],
    recentPosts: [
      {
        href: '/blog/blog-details',
        image: '/assets/img/recent_post2.jpg',
        date: '08 Apr 2025',
        title: 'कम शुक्राणु संख्या: कारण, लक्षण, और उपचार',
      },
      {
        href: '/blog/blog-details',
        image: '/assets/img/recent_post_2.png',
        date: '08 Apr 2024',
        title: 'Genetic Conditions: Understanding Their Role in Fertility and Parenthood',
      },
    ],
    copyrightText: 'Copyright © 2025 Seeds of Innocens, All Rights Reserved.',
    footerMenu: [
      // { href: '/about', text: 'About Us' },
      // { href: '/appointments', text: 'Book Appointment' },
      // { href: '/blog', text: 'Blogs' },
      // { href: '/service', text: 'Services' },
    ],
  };

  return (
    <footer
      className="cs_footer cs_white_color"
      style={{ backgroundColor: '#071D32' }}
      //  style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col">
              <div className="cs_footer_logo">
              <Image src={mounted ? getAssetPathClient(data.logo) : data.logo} alt="img" width={305} height={63} loading="eager" />
              </div>
              <ul className="cs_footer_contact cs_mp_0">
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaRegClock />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaLocationDot />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText2 }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaPhoneAlt />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText3 }}
                  />
                </li>
              </ul>
              <div className="cs_social_btns cs_style_1">
                <Link href={data.facebookHref} className="cs_center">
                  <Image
                    src={getAssetPathClient('/assets/img/icons/facebook.png')}
                    alt="Facebook"
                    width={20}
                    height={20}
                    style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                  />
                </Link>
                <Link href={data.youtubeHref} className="cs_center">
                  <Image
                    src={getAssetPathClient('/assets/img/icons/youtube.png')}
                    alt="YouTube"
                    width={20}
                    height={20}
                    style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                  />
                </Link>
                <Link href={data.linkedinHref} className="cs_center">
                  <Image
                    src={getAssetPathClient('/assets/img/icons/linkedin.png')}
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                  />
                </Link>
                <Link href={data.instagramHref} className="cs_center">
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
                  {widget.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Recent Posts</h2>
              <ul className="cs_recent_post_list cs_mp_0">
                {data.recentPosts.map((post, index) => (
                  <li key={index}>
                    <div className="cs_recent_post">
                      <Link href={post.href} className="cs_recent_post_thumb">
                      <Image src={mounted ? getAssetPathClient(post.image) : post.image} alt="img" width={85} height={85} loading="eager" />
                      </Link>
                      <div className="cs_recent_post_right">
                        <p>{post.date}</p>
                        <h3 className="cs_recent_post_title">
                          <Link href={post.href}>{post.title}</Link>
                        </h3>
                      </div>
                    </div>
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
            <ul className="cs_footer_menu cs_mp_0">
              {data.footerMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
