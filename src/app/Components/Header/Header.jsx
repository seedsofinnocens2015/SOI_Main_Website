"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useCallback, useMemo } from 'react';
import IVFSuccessBanner from '../IVFSuccessBanner';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import { FaAnglesRight, FaLocationDot } from 'react-icons/fa6';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

const Header = ({ isTopBar, variant }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState();
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(null);
  const [hoveredStateIndex, setHoveredStateIndex] = useState(null);
  const [openMegaCategories, setOpenMegaCategories] = useState({});
  const [isMobileView, setIsMobileView] = useState(false);
  const menu = {
    email: 'info@seedsofinnocens.com',
    location: '3, opp. Aurbindo College, MMTC Colony, Malviya Nagar, New Delhi, Delhi 110017',
    logoUrl: '/assets/img/logo.svg',
    logoLink: '/',
    navItems: [
      {
        label: 'Infertility Treatment',
        href: '/',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'Fertility Treatments',
            href: '/',
            subItems: [
              { label: 'IVF / ICSI', href: '/fertility-treatments/ivf-icsi' },
              { label: 'IUI', href: '/fertility-treatments/iui' },
              { label: 'Ovulation Induction', href: '/fertility-treatments/ovulation-induction' },
              { label: 'Follicular Monitoring', href: '/fertility-treatments/follicular-monitoring' },
              { label: 'Blastocyst Transfer', href: '/fertility-treatments/blastocyst-transfer' },
            ],
          },
          {
            label: 'Advanced Fertility Care',
            href: '/',
            subItems: [
              { label: 'Egg Freezing', href: '/advanced-fertility-care/egg-freezing' },
              { label: 'PRP & Ovarian Rejuvenation', href: '/advanced-fertility-care/prp-ovarian-rejuvenation' },
              { label: 'Male Infertility', href: '/advanced-fertility-care/male-infertility' },
              { label: 'TESA / PESA', href: '/advanced-fertility-care/tesa-pesa' },
              { label: 'Semen Analysis', href: '/advanced-fertility-care/semen-analysis' },
            ],
          },
          {
            label: 'Genetic Testing (PGT)',
            href: '/',
            subItems: [
              { label: 'PGT-A', href: '/genetic-testing-pgt/pgt-a' },
              { label: 'PGT-M', href: '/genetic-testing-pgt/pgt-m' },
              { label: 'PGT-SR', href: '/genetic-testing-pgt/pgt-sr' },
            ],
          },
          {
            label: 'Maternal–Fetal Medicine (MFM)',
            href: '/',
            subItems: [
              { label: 'High-Risk Pregnancy', href: '/maternal-fetal-medicine/high-risk-pregnancy' },
              { label: 'Fetal Reduction', href: '/maternal-fetal-medicine/fetal-reduction' },
              { label: 'MFM Scans & Diagnostics', href: '/maternal-fetal-medicine/mfm-scans-diagnostics' },
            ],
          },
          {
            label: 'Surgeries',
            href: '/',
            subItems: [
              { label: 'Hysteroscopy', href: '/surgeries/hysteroscopy' },
              { label: 'Laparoscopy', href: '/surgeries/laparoscopy' },
              { label: 'Open Surgery', href: '/surgeries/open-surgery' },
            ],
          },
        ],
      },
      {
        label: 'IVF Centers',
        href: '/ivf-centers',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'India',
            href: '/ivf-centers/india',
            subItems: [
              {
                label: 'Delhi',
                href: '/ivf-centers/india/delhi',
                subItems: [
                  { label: 'Malviya Nagar, New Delhi', href: '/ivf-centers/india/delhi/malviya-nagar-delhi' },
                  { label: 'Pitampura, New Delhi', href: '/ivf-centers/india/delhi/pitampura-new-delhi' },
                  { label: 'Janakpuri, New Delhi', href: '/ivf-centers/india/delhi/janakpuri-new-delhi' },
                ],
              },
              {
                label: 'Uttar Pradesh',
                href: '/ivf-centers/india/uttar-pradesh',
                subItems: [
                  { label: 'Ghaziabad, Uttar Pradesh', href: '/ivf-centers/india/uttar-pradesh/ghaziabad-uttar-pradesh' },
                  { label: 'Lucknow, Uttar Pradesh', href: '/ivf-centers/india/uttar-pradesh/lucknow-uttar-pradesh' },
                  { label: 'Agra, Uttar Pradesh', href: '/ivf-centers/india/uttar-pradesh/agra-uttar-pradesh' },
                  { label: 'Gorakhpur, Uttar Pradesh', href: '/ivf-centers/india/uttar-pradesh/gorakhpur-uttar-pradesh' },
                  { label: 'Kanpur, Uttar Pradesh', href: '/ivf-centers/india/uttar-pradesh/kanpur-uttar-pradesh' },
                  { label: 'Meerut, Uttar Pradesh', href: '/ivf-centers/india/uttar-pradesh/meerut-uttar-pradesh' },
                ],
              },
              {
                label: 'Bihar',
                href: '/ivf-centers/india/bihar',
                subItems: [
                  { label: 'Patna, Bihar', href: '/ivf-centers/india/bihar/patna-bihar' },
                  { label: 'Muzaffarpur, Bihar', href: '/ivf-centers/india/bihar/muzaffarpur-bihar' },
                ],
              },
              {
                label: 'Haryana',
                href: '/ivf-centers/india/haryana',
                subItems: [
                  { label: 'Faridabad, Haryana', href: '/ivf-centers/india/haryana/faridabad-haryana' },
                  { label: 'Gurugram, Haryana', href: '/ivf-centers/india/haryana/gurugram-haryana' },
                ],
              },
              {
                label: 'Jharkhand',
                href: '/ivf-centers/india/jharkhand',
                subItems: [
                  { label: 'Ranchi, Jharkhand', href: '/ivf-centers/india/jharkhand/ranchi-jharkhand' },
                ],
              },
              {
                label: 'Uttarakhand',
                href: '/ivf-centers/india/uttarakhand',
                subItems: [
                  { label: 'Haldwani, Uttarakhand', href: '/ivf-centers/india/uttarakhand/haldwani-uttarakhand' },
                ],
              },
              {
                label: 'Assam',
                href: '/ivf-centers/india/assam',
                subItems: [
                  { label: 'Guwahati, Assam', href: '/ivf-centers/india/assam/guwahati-assam' },
                ],
              },
              {
                label: 'Kerala',
                href: '/ivf-centers/india/kerala',
                subItems: [
                  { label: 'Kasaragod, Kerala', href: '/ivf-centers/india/kerala/kasaragod-kerala' },
                  { label: 'Kochi, Kerala', href: '/ivf-centers/india/kerala/kochi-kerala' },
                ],
              },
              {
                label: 'Jammu & Kashmir',
                href: '/ivf-centers/india/jammu-kashmir',
                subItems: [
                  { label: 'Srinagar, J&K', href: '/ivf-centers/india/jammu-kashmir/srinagar-jk' },
                ],
              },
              {
                label: 'West Bengal',
                href: '/ivf-centers/india/west-bengal',
                subItems: [
                  { label: 'Kolkata', href: '/ivf-centers/india/west-bengal/kolkata' },
                ],
              },
            ],
          },
          {
            label: 'International',
            href: '/ivf-centers/international',
            subItems: [
              { label: 'Lusaka, Zambia, Africa', href: '/ivf-centers/lusaka-zambia-africa' },
              { label: 'Kitwe, Zambia, Africa', href: '/ivf-centers/kitwe-zambia-africa' },
              { label: 'Mabela, Muscat, Oman', href: '/ivf-centers/mabela-muscat-oman' },
            ],
          },
        ],
      },
      {
        label: 'International Patients',
        href: '/international-patients',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'Patient Concierge',
            href: '/international-patients/patient-concierge',
          },
          {
            label: 'Travel Support',
            href: '/international-patients/travel-support',
          },
          {
            label: 'International Pricing',
            href: '/international-patients/international-pricing',
          },
          {
            label: 'Patient Stories',
            href: '/international-patients/patient-stories',
          },
          {
            label: 'Contact Team',
            href: '/international-patients/contact-team',
          },
        ],
      },
      {
        label: 'Resources',
        href: '/resources',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'IVF Process / Patient Journey',
            href: '/resources/ivf-process-patient-journey',
          },
          {
            label: 'IVF Cost & Package Details',
            href: '/resources/ivf-cost-package-details',
          },
          {
            label: 'FAQs',
            href: '/resources/faqs',
          },
          {
            label: 'Success Stories',
            href: '/resources/success-stories',
          },
          {
            label: 'Patient Testimonial Videos',
            href: '/resources/patient-testimonial-videos',
          },
          {
            label: 'Downloads',
            href: '/resources/downloads',
            subItems: [
              { label: 'Forms', href: '/resources/downloads/forms' },
              { label: 'Consents', href: '/resources/downloads/consents' },
              { label: 'Checklists', href: '/resources/downloads/checklists' },
            ],
          },
          {
            label: 'Fertility Calculator',
            href: '/resources/fertility-calculator',
          },
          {
            label: 'Blogs',
            href: '/resources/blogs',
            subItems: [
              { label: 'Fertility', href: '/resources/blogs/fertility' },
              { label: 'IVF Process', href: '/resources/blogs/ivf-process' },
              { label: 'Pregnancy', href: '/resources/blogs/pregnancy' },
              { label: 'Men\'s Health', href: '/resources/blogs/mens-health' },
              { label: 'Women\'s Health', href: '/resources/blogs/womens-health' },
              { label: 'Treatment Guides', href: '/resources/blogs/treatment-guides' },
              { label: 'Success Stories', href: '/resources/blogs/success-stories' },
              { label: 'Doctor Insights', href: '/resources/blogs/doctor-insights' },
              { label: 'News & Press', href: '/resources/blogs/news-press' },
            ],
          },
          {
            label: 'Insurance / Financing Options',
            href: '/resources/insurance-financing-options',
          },
        ],
      },
      {
        label: 'About us',
        href: '/about',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'Our Story',
            href: '/about/our-story',
          },
          {
            label: 'Dr. Gauri Agrawal – Founder',
            href: '/about/dr-gauri-agrawal',
          },
          {
            label: 'Leadership Team',
            href: '/about/leadership-team',
          },
          {
            label: 'Vision, Mission & Values',
            href: '/about/vision-mission-values',
          },
          {
            label: 'Success Rates',
            href: '/about/success-rates',
          },
          {
            label: 'Our Embryology Lab & Technology',
            href: '/about/embryology-lab-technology',
          },
          {
            label: 'Media & Press',
            href: '/about/media-press',
          },
          {
            label: 'Awards & Accreditations',
            href: '/about/awards-accreditations',
          },
            ],
          },
          {
        label: 'Doctors',
        href: '/doctors',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'All IVF Specialists',
            href: '/doctors',
          },
          {
            label: 'Maternal–Fetal Medicine Specialists',
            href: '/doctors/maternal-fetal-medicine',
          },
          {
            label: 'Surgeon Panel',
            href: '/doctors/surgeon-panel',
          },
        ],
      },
      {
        label: 'Contact us',
        href: '/contact',
        isMegaMenu: false,
        subItems: [
          { label: 'Book Appointment', href: '/contact/book-appointment' },
          { label: 'WhatsApp', href: '/contact/whatsapp' },
          { label: 'Call Back Form', href: '/contact/call-back-form' },
          { label: 'Center Locator', href: '/contact/center-locator' },
          { label: 'Careers', href: '/contact/careers' },
          { label: 'Feedback', href: '/contact/feedback' },
        ],
      },
    ],
    btnUrl: '/contact/book-appointment',
    btnText: 'Book Appointment',
  };

  const handleOpenMobileSubmenu = index => {
    setOpenMobileSubmenuIndex(prev => {
      if (prev.includes(index)) {
        setOpenMegaCategories(prevMega => {
          const updatedMega = { ...prevMega };
          delete updatedMega[index];
          return updatedMega;
        });
        return prev.filter(f => f !== index);
      }
      return [...prev, index];
    });
  };

  const handleToggleMegaCategory = (menuIndex, categoryIndex) => {
    setOpenMegaCategories(prev => {
      const currentCategories = prev[menuIndex] || [];
      const isAlreadyOpen = currentCategories.includes(categoryIndex);
      const updatedCategories = isAlreadyOpen
        ? currentCategories.filter(id => id !== categoryIndex)
        : [...currentCategories, categoryIndex];
      return {
        ...prev,
        [menuIndex]: updatedCategories,
      };
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs_gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs_gescout_sticky cs_gescout_show'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobileView(window.innerWidth <= 1199);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobileView) {
      setOpenMobileSubmenuIndex([]);
      setOpenMegaCategories({});
    }
  }, [isMobileView]);

  useEffect(() => {
    if (!isShowMobileMenu) {
      setOpenMobileSubmenuIndex([]);
      setOpenMegaCategories({});
    }
  }, [isShowMobileMenu]);
  return (
    <>
      <header
        className={`cs_site_header cs_style_1 ${
          variant ? variant : ''
        } cs_primary_color cs_sticky_header ${isSticky ? isSticky : ''}`}
      >
        {/* {isTopBar && (
          <div className="cs_top_header cs_blue_bg cs_white_color">
            <div className="container">
              <div className="cs_top_header_in">
                <div className="cs_top_header_left">
                </div>
                <div className="cs_top_header_right">
                  <div className="cs_social_btns cs_style_1">
                    <Link href="/" className="cs_center cs_call">
                      <i>
                        <IoCall />
                      </i>
                    </Link>
                    <Link href="/" className="cs_center cs_facebook">
                      <i>
                        <FaFacebookF />
                      </i>
                    </Link>
                    <Link href="/" className="cs_center cs_whatsapp">
                      <i>
                        <FaWhatsapp />
                      </i>
                    </Link>
                    <Link href="/" className="cs_center cs_instagram">
                      <i>
                        <FaInstagram />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in cs_compact_gap">
                <Link className="cs_site_branding" href={menu.logoLink}>
                <Image src={menu.logoUrl} alt="img" width={350} height={110}   />
                </Link>
              <div className="cs_main_header_right ">
                <div className="cs_nav cs_primary_color ">
                  <ul
                    className={`cs_nav_list ${isShowMobileMenu && 'cs_active'}`}
                  >
                    {menu.navItems.map((item, index) => (
                      <li
                        className={
                          item.isMegaMenu
                            ? 'menu-item-has-children cs_mega_menu'
                            : item.subItems
                            ? 'menu-item-has-children'
                            : ''
                        }
                        key={index}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                        >
                          {item.label}
                        </Link>
                        {item.isMegaMenu && item.megaMenuCategories && (
                          isMobileView ? (
                            <ul
                              className="cs_mobile_mega_menu"
                              style={{
                                display: openMobileSubmenuIndex.includes(index)
                                  ? 'block'
                                  : 'none',
                              }}
                            >
                              {item.megaMenuCategories.map(
                                (category, catIndex) => {
                                  const hasSubItems =
                                    category.subItems &&
                                    category.subItems.length > 0;
                                  const isCategoryOpen =
                                    openMegaCategories[index]?.includes(
                                      catIndex
                                    );
                                  return (
                                    <li
                                      className="cs_mobile_mega_category"
                                      key={catIndex}
                                    >
                                      <div className="cs_mobile_category_header">
                                        <Link
                                          href={category.href}
                                          onClick={() =>
                                            setIsShowMobileMenu(
                                              !isShowMobileMenu
                                            )
                                          }
                                        >
                                          {category.label}
                                        </Link>
                                        {hasSubItems && (
                                          <span
                                            className={`cs_mobile_sub_toggle ${
                                              isCategoryOpen ? 'active' : ''
                                            }`}
                                            onClick={e => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              handleToggleMegaCategory(
                                                index,
                                                catIndex
                                              );
                                            }}
                                          >
                                            <span></span>
                                          </span>
                                        )}
                                      </div>
                                      {hasSubItems && (
                                        <ul
                                          style={{
                                            display: isCategoryOpen
                                              ? 'block'
                                              : 'none',
                                          }}
                                        >
                                          {category.subItems.map(
                                            (subItem, subIndex) => {
                                              const hasNestedSubItems = subItem.subItems && subItem.subItems.length > 0;
                                              const nestedKey = `${index}-${catIndex}-${subIndex}`;
                                              const isNestedOpen = openMegaCategories[nestedKey]?.includes(0);
                                              return (
                                                <li key={subIndex} className={hasNestedSubItems ? 'cs_mobile_mega_category' : ''}>
                                                  {hasNestedSubItems ? (
                                                    <>
                                                      <div className="cs_mobile_category_header">
                                                        <Link
                                                          href={subItem.href}
                                                          onClick={() =>
                                                            setIsShowMobileMenu(
                                                              !isShowMobileMenu
                                                            )
                                                          }
                                                        >
                                                          {subItem.label}
                                                        </Link>
                                                        <span
                                                          className={`cs_mobile_sub_toggle ${
                                                            isNestedOpen ? 'active' : ''
                                                          }`}
                                                          onClick={e => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleToggleMegaCategory(
                                                              nestedKey,
                                                              0
                                                            );
                                                          }}
                                                        >
                                                          <span></span>
                                                        </span>
                                                      </div>
                                                      <ul
                                                        style={{
                                                          display: isNestedOpen
                                                            ? 'block'
                                                            : 'none',
                                                        }}
                                                      >
                                                        {subItem.subItems.map(
                                                          (nestedItem, nestedIndex) => (
                                                            <li key={nestedIndex}>
                                                              <Link
                                                                href={nestedItem.href}
                                                                onClick={() =>
                                                                  setIsShowMobileMenu(
                                                                    !isShowMobileMenu
                                                                  )
                                                                }
                                                              >
                                                                {nestedItem.label}
                                                              </Link>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    </>
                                                  ) : (
                                                    <Link
                                                      href={subItem.href}
                                                      onClick={() =>
                                                        setIsShowMobileMenu(
                                                          !isShowMobileMenu
                                                        )
                                                      }
                                                    >
                                                      {subItem.label}
                                                    </Link>
                                                  )}
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      )}
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          ) : (
                            <ul
                              className={`cs_mega_wrapper ${
                                hoveredCategoryIndex !== null &&
                                item.megaMenuCategories[
                                  hoveredCategoryIndex
                                ]?.subItems &&
                                item.megaMenuCategories[hoveredCategoryIndex]
                                  .subItems.length > 0
                                  ? hoveredStateIndex !== null
                                    ? 'cs_has_three_columns'
                                    : 'cs_has_right_column'
                                  : ''
                              }`}
                              onMouseLeave={() => {
                                setHoveredCategoryIndex(null);
                                setHoveredStateIndex(null);
                              }}
                            >
                              {/* Left Column - States (Categories) */}
                              <li>
                                <ul>
                                  {item.megaMenuCategories.map(
                                    (category, catIndex) => {
                                      const hasSubItems = category.subItems && category.subItems.length > 0;
                                      return (
                                        <li
                                          key={catIndex}
                                          onMouseEnter={() => {
                                            if (hasSubItems) {
                                              setHoveredCategoryIndex(catIndex);
                                              setHoveredStateIndex(null);
                                            } else {
                                              // Reset state when hovering over items without subItems
                                              // Using CSS transitions to prevent blinking
                                              setHoveredCategoryIndex(null);
                                              setHoveredStateIndex(null);
                                            }
                                          }}
                                          className={`${hoveredCategoryIndex === catIndex ? 'cs_active_category' : ''} ${hasSubItems ? 'cs_has_subitems' : ''}`}
                                        >
                                          <Link
                                            href={category.href}
                                            onClick={() =>
                                              setIsShowMobileMenu(
                                                !isShowMobileMenu
                                              )
                                            }
                                          >
                                            {category.label}
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </li>
                              {/* Middle Column - Centers of hovered state */}
                              <li style={{ 
                                opacity: hoveredCategoryIndex !== null &&
                                  item.megaMenuCategories[
                                    hoveredCategoryIndex
                                  ]?.subItems &&
                                  item.megaMenuCategories[hoveredCategoryIndex]
                                    .subItems.length > 0 ? 1 : 0,
                                visibility: hoveredCategoryIndex !== null &&
                                  item.megaMenuCategories[
                                    hoveredCategoryIndex
                                  ]?.subItems &&
                                  item.megaMenuCategories[hoveredCategoryIndex]
                                    .subItems.length > 0 ? 'visible' : 'hidden',
                                pointerEvents: hoveredCategoryIndex !== null &&
                                  item.megaMenuCategories[
                                    hoveredCategoryIndex
                                  ]?.subItems &&
                                  item.megaMenuCategories[hoveredCategoryIndex]
                                    .subItems.length > 0 ? 'auto' : 'none',
                                transition: 'opacity 0.15s ease, visibility 0.15s ease'
                              }}>
                                <ul>
                                  {hoveredCategoryIndex !== null &&
                                    item.megaMenuCategories[
                                      hoveredCategoryIndex
                                    ]?.subItems &&
                                    item.megaMenuCategories[hoveredCategoryIndex]
                                      .subItems.length > 0 &&
                                    item.megaMenuCategories[
                                      hoveredCategoryIndex
                                    ].subItems.map((subItem, subIndex) => {
                                      const hasNestedSubItems = subItem.subItems && subItem.subItems.length > 0;
                                      return (
                                        <li 
                                          key={subIndex}
                                          onMouseEnter={() => {
                                            if (hasNestedSubItems) {
                                              setHoveredStateIndex(subIndex);
                                            }
                                            // Don't reset state when hovering over items without nested subItems
                                            // This prevents blinking
                                          }}
                                          className={
                                            hoveredStateIndex === subIndex
                                              ? 'cs_active_subcategory'
                                              : ''
                                          }
                                        >
                                          <Link
                                            href={subItem.href}
                                            onClick={() =>
                                              setIsShowMobileMenu(
                                                !isShowMobileMenu
                                              )
                                            }
                                          >
                                            {subItem.label}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                </ul>
                              </li>
                              {/* Right Column - Nested centers of hovered state */}
                              <li style={{ 
                                opacity: hoveredCategoryIndex !== null &&
                                  hoveredStateIndex !== null &&
                                  item.megaMenuCategories[
                                    hoveredCategoryIndex
                                  ]?.subItems?.[hoveredStateIndex]?.subItems &&
                                  item.megaMenuCategories[hoveredCategoryIndex]
                                    .subItems[hoveredStateIndex].subItems.length > 0 ? 1 : 0,
                                visibility: hoveredCategoryIndex !== null &&
                                  hoveredStateIndex !== null &&
                                  item.megaMenuCategories[
                                    hoveredCategoryIndex
                                  ]?.subItems?.[hoveredStateIndex]?.subItems &&
                                  item.megaMenuCategories[hoveredCategoryIndex]
                                    .subItems[hoveredStateIndex].subItems.length > 0 ? 'visible' : 'hidden',
                                pointerEvents: hoveredCategoryIndex !== null &&
                                  hoveredStateIndex !== null &&
                                  item.megaMenuCategories[
                                    hoveredCategoryIndex
                                  ]?.subItems?.[hoveredStateIndex]?.subItems &&
                                  item.megaMenuCategories[hoveredCategoryIndex]
                                    .subItems[hoveredStateIndex].subItems.length > 0 ? 'auto' : 'none',
                                transition: 'opacity 0.15s ease, visibility 0.15s ease'
                              }}>
                                <ul>
                                  {hoveredCategoryIndex !== null &&
                                    hoveredStateIndex !== null &&
                                    item.megaMenuCategories[
                                      hoveredCategoryIndex
                                    ]?.subItems?.[hoveredStateIndex]?.subItems &&
                                    item.megaMenuCategories[hoveredCategoryIndex]
                                      .subItems[hoveredStateIndex].subItems.length > 0 &&
                                    item.megaMenuCategories[
                                      hoveredCategoryIndex
                                    ].subItems[hoveredStateIndex].subItems.map(
                                      (nestedItem, nestedIndex) => (
                                        <li key={nestedIndex}>
                                          <Link
                                            href={nestedItem.href}
                                            onClick={() =>
                                              setIsShowMobileMenu(
                                                !isShowMobileMenu
                                              )
                                            }
                                          >
                                            {nestedItem.label}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                </ul>
                              </li>
                            </ul>
                          )
                        )}
                        {item.subItems && !item.isMegaMenu && (
                          <ul
                            style={{
                              display: openMobileSubmenuIndex.includes(index)
                                ? 'block'
                                : 'none',
                            }}
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subItem.href}
                                  onClick={() =>
                                    setIsShowMobileMenu(!isShowMobileMenu)
                                  }
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        {(item.subItems?.length || item.isMegaMenu) && (
                          <span
                            className={`cs_menu_dropdown_toggle ${
                              openMobileSubmenuIndex.includes(index)
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => handleOpenMobileSubmenu(index)}
                          >
                            <span></span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`cs_menu_toggle ${
                      isShowMobileMenu && 'cs_toggle_active'
                    }`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
                <div className="cs_search_wrap">
                  {/* <div
                    className="cs_search_toggle cs_center"
                    onClick={() => setIsSearchActive(!isSearchActive)}
                  >
                    <i>
                      <HiMiniMagnifyingGlass />
                    </i>
                  </div> */}
                  <form
                    action="#"
                    className={`cs_header_search_form ${
                      isSearchActive ? 'active' : ''
                    }`}
                  >
                    <div className="cs_header_search_form_in">
                      <input
                        type="text"
                        placeholder="Search"
                        className="cs_header_search_field"
                      />
                      <button className="cs_header_submit_btn">
                        <i>
                          <HiMiniMagnifyingGlass />
                        </i>
                      </button>
                    </div>
                  </form>
                </div>
                <Link href={menu.btnUrl} className="cs_btn cs_style_1 cs_color_1">
                  <span>{menu.btnText}</span>
                  <i>
                    <FaAnglesRight />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <IVFSuccessBanner />
        {variant == 'cs_type_1' && (
          <div className="cs_main_header_shape">
            <svg
              width={1679}
              height={112}
              viewBox="0 0 1679 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L1679 0.014C1679 0.014 1639 23.128 1639 48.261V111.014H40V47.351C40 22.567 0 0 0 0Z"
                fill="#2EA6F7"
              />
              <path
                d="M10 0L1669 0.014C1669 0.014 1629 23.128 1629 48.261V111.014H50V47.351C50 22.567 10 0 10 0Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </header>
      {isTopBar && <div className="cs_site_header_spacing_150" />}
    </>
  );
};

export default Header;
