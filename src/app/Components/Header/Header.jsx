"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { FaPhone } from 'react-icons/fa6';
import IVFSuccessBanner from '../IVFSuccessBanner';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import { FaAnglesRight, FaLocationDot } from 'react-icons/fa6';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { getAssetPathClient } from '@/app/utils/assetPath';

const Header = ({ isTopBar, variant }) => {
  const router = useRouter();
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
    logoUrl: '/assets/img/SOI Logo.svg',
    logoLink: '/',
    navItems: [
      {
        label: 'Infertility Treatment',
        href: '/infertility-treatment',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'Fertility Treatments',
            href: '/infertility-treatment/fertility-treatments',
            subItems: [
              { label: 'IVF', href: '/ivf' },
              { label: 'ICSI', href: '/icsi' },
              // { label: 'IVF / ICSI', href: '/fertility-treatments/ivf-icsi' },
              { label: 'IUI', href: '/iui' },
              { label: 'Monitoring in an IUI Cycle', href: '/monitoring-in-an-iui-cycle-steps' },
              { label: 'Ovulation Induction', href: '/ovulation-induction' },
              { label: 'Follicular Monitoring', href: '/follicular-monitoring' },
              { label: 'Blastocyst Transfer', href: '/blastocyst-transfer' },
              { label: 'Secondary Infertility', href: '/secondary-infertility' },
            ],
          },
          {
            label: 'Advanced Fertility Care',
            href: '/infertility-treatment/advanced-fertility-care',
            subItems: [
              { label: 'Egg Freezing', href: '/egg-freezing' },
              { label: 'Embryo Freezing', href: '/embryo-freezing' },
              { label: 'Cryopreservation', href: '/cryopreservation' },
              { label: 'PRP & Ovarian Rejuvenation', href: '/prp' },
              { label: 'Male Infertility', href: '/male-infertility-treatment-in-india' },
              { label: 'TESA / PESA', href: '/tesa' },
              { label: 'MicroTESE', href: '/microtese' },
              { label: 'Semen Analysis', href: '/semen-analysis' },
              { label: 'Semen Analysis at Home', href: '/semen-analysis-at-home' },
              { label: 'Azoospermia', href: '/azoospermia' },
              { label: 'Non-Obstructive Azoospermia', href: '/non-obstructive-azoospermia' },
              { label: 'Obstructive Azoospermia', href: '/obstructive-azoospermia' },
              { label: 'Oligospermia', href: '/oligospermia' },
              { label: 'Blocked Seminiferous Tubules', href: '/blocked-seminiferous-tubules' },
              { label: 'Endocrinological Disorder in Men', href: '/endocrinological-disorder-in-men' },
              { label: 'Retrograde Ejaculation', href: '/retrograde-ejaculation' },
            ],
          },
          {
            label: 'Genetic Testing & Screening',
            href: '/infertility-treatment/genetic-testing-screening',
            subItems: [
              { label: 'Genetic Testing', href: '/genetic-testing' },
              { label: 'PGT-A', href: '/pgt-a' },
              { label: 'PGT-M', href: '/pgt-m' },
              { label: 'PGT-SR', href: '/pgt-sr' },
              { label: 'Difference between PGT A & PGT-M', href: '/difference-between-pgt-a-and-pgt-m' },
              { label: 'Amniocentesis', href: '/amniocentesis' },
              { label: 'Chorionic Villus Sampling (CVS)', href: '/chorionic-villus-sampling-cvs' },
              { label: 'Couple Carrier Screening', href: '/couple-carrier-screening' },
              { label: 'Karyotyping', href: '/karyotyping' },
              { label: 'Microarray', href: '/microarray' },
              { label: 'HLA Matching', href: '/hla-matching' },
            ],
          },
          {
            label: 'Maternal–Fetal Medicine (MFM)',
            href: '/infertility-treatment/maternal-fetal-medicine',
            subItems: [
              // { label: 'Maternal and Fetal Medicine', href: '/maternal-and-fetal-medicine' },
              { label: 'High-Risk Pregnancy', href: '/maternal-fetal-medicine/high-risk-pregnancy' },
              { label: 'Fetal Reduction', href: '/fetal-reduction' },
              { label: 'MFM Scans & Diagnostics', href: '/maternal-and-fetal-medicine' },
              { label: 'Pregnancy and Coronavirus', href: '/pregnancy-and-coronavirus-insights-from-experts' },
            ],
          },
          {
            label: 'Surgeries',
            href: '/infertility-treatment/surgeries',
            subItems: [
              // { label: 'Laparoscopy and Hysteroscopy', href: '/laparoscopy-and-hysteroscopy' },
              { label: 'Hysteroscopy', href: '/hysteroscopy' },
              { label: 'Laparoscopy', href: '/laparoscopy' },
              { label: 'Open Surgery', href: '/open-surgery' },
            ],
          },
          {
            label: 'Reproductive Health Conditions',
            href: '',
            subItems: [
              { label: 'Blocked Fallopian Tubes', href: '/blocked-fallopian-tubes' },
              { label: 'PCOS (Polycystic Ovarian Syndrome)', href: '/pcos-polycystic-ovarian-syndrome' },
              { label: 'Irregular Menstrual Cycle', href: '/irregular-menstrual-cycle' },
              { label: 'Diabetes, Thyroid and Obesity', href: '/diabetes-thyroid-and-obesity' },
              { label: 'Endometrial and Ovarian', href: '/endometrial-and-ovarian' },
              { label: 'Endometriosis', href: '/endometriosis' },
              { label: 'Fibroids, Polyps and Adenomyosis', href: '/fibroids-polyps-and-adenomyosis' },
              { label: 'Tuberculosis', href: '/tuberculosis' },
              { label: 'Recurrent Miscarriages', href: '/recurrent-miscarriages' },
              { label: 'Why Delayed Periods But Not Pregnant', href: '/reasons-for-delayed-periods-but-not-pregnant' },
              { label: 'What is Ovarian Hyperstimulation', href: '/what-is-ovarian-hyperstimulation' },
            ],
          },
          {
            label: 'Fertility Wellness',
            href: '/infertility-treatment/fertility-wellness',
            subItems: [
              { label: 'Boost Fertility With Colours Of Food', href: '/how-to-boost-up-fertility-with-the-colours-of-food' },
            ],
          },
        ],
      },
      {
        label: 'IVF Centers',
        href: '',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'India',
            href: '',
            subItems: [
              {
                label: 'Delhi',
                href: '',
                subItems: [
                  { label: 'Malviya Nagar, New Delhi', href: '/delhi/best-ivf-centre-in-delhi' },
                  { label: 'Pitampura, New Delhi', href: '/delhi/best-ivf-centre-in-pitampura' },
                  { label: 'Janakpuri, New Delhi', href: '/delhi/best-ivf-centre-in-janakpuri' },
                ],
              },
              {
                label: 'Uttar Pradesh',
                href: '',
                subItems: [
                  { label: 'Ghaziabad, Uttar Pradesh', href: '/uttar-pradesh/best-ivf-centre-in-ghaziabad' },
                  { label: 'Lucknow, Uttar Pradesh', href: '/uttar-pradesh/best-ivf-centre-in-lucknow' },
                  { label: 'Agra, Uttar Pradesh', href: '/uttar-pradesh/best-ivf-centre-in-agra' },
                  { label: 'Gorakhpur, Uttar Pradesh', href: '/uttar-pradesh/best-ivf-centre-in-gorakhpur' },
                  { label: 'Kanpur, Uttar Pradesh', href: '/uttar-pradesh/best-ivf-centre-in-kanpur' },
                  { label: 'Meerut, Uttar Pradesh', href: '/uttar-pradesh/best-ivf-centre-in-meerut' },
                ],
              },
              {
                label: 'Bihar',
                href: '',
                subItems: [
                  { label: 'Patna, Bihar', href: '/bihar/best-ivf-centre-in-patna' },
                  { label: 'Muzaffarpur, Bihar', href: '/bihar/best-ivf-centre-in-muzaffarpur' },
                ],
              },
              {
                label: 'Haryana',
                href: '',
                subItems: [
                  { label: 'Faridabad, Haryana', href: '/haryana/best-ivf-centre-in-faridabad' },
                  { label: 'Gurugram, Haryana', href: '/haryana/best-ivf-centre-in-gurugram' },
                ],
              },
              {
                label: 'Jharkhand',
                href: '',
                subItems: [
                  { label: 'Ranchi, Jharkhand', href: '/jharkhand/best-ivf-centre-in-ranchi' },
                ],
              },
              {
                label: 'Uttarakhand',
                href: '',
                subItems: [
                  { label: 'Haldwani, Uttarakhand', href: '/uttarakhand/best-ivf-centre-in-haldwani' },
                ],
              },
              {
                label: 'Assam',
                href: '',
                subItems: [
                  { label: 'Guwahati, Assam', href: '/assam/best-ivf-centre-in-guwahati' },
                ],
              },
              {
                label: 'Kerala',
                href: '',
                subItems: [
                  { label: 'Kasaragod, Kerala', href: '/kerala/best-ivf-centre-in-kasaragod' },
                  { label: 'Kochi, Kerala', href: '/kerala/best-ivf-centre-in-kochi' },
                ],
              },
              {
                label: 'Jammu & Kashmir',
                href: '',
                subItems: [
                  { label: 'Srinagar, J&K', href: '/jammu-kashmir/best-ivf-centre-in-srinagar' },
                ],
              },
              {
                label: 'West Bengal',
                href: '',
                subItems: [
                  { label: 'Kolkata', href: '/west-bengal/best-ivf-centre-in-kolkata' },
                ],
              },
            ],
          },
          {
            label: 'International',
            href: '/ivf-centres/international',
            subItems: [
              { label: 'Lusaka, Zambia, Africa', href: '/lusaka-zambia-ivf-centre' },
              { label: 'Kitwe, Zambia, Africa', href: '/best-ivf-centre-in-kitwe-zambia' },
              { label: 'Mabela, Muscat, Oman', href: '/best-ivf-centre-in-muscat-oman' },
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
          // {
          //   label: 'IVF Cost & Package Details',
          //   href: '/resources/ivf-cost-package-details',
          // },
          {
            label: 'FAQs',
            href: '/resources/faqs',
          },
          {
            label: 'Success Stories',
            href: '/success-stories',
          },
          {
            label: 'Patient Testimonial Videos',
            href: '/resources/patient-testimonial-videos',
          },
          // {
          //   label: 'Downloads',
          //   href: '/resources/downloads',
          //   subItems: [
          //     { label: 'Forms', href: '/resources/downloads/forms' },
          //     { label: 'Consents', href: '/resources/downloads/consents' },
          //     { label: 'Checklists', href: '/resources/downloads/checklists' },
          //   ],
          // },
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
            href: '/doctors/dr-gauri-agarwal/',
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
          { label: 'Online Payment', href: '/contact/online-payment' },
          { label: 'WhatsApp', href: '/contact/whatsapp' },
          { label: 'Call Back Form', href: '/contact/call-back-form' },
          { label: 'Center Locator', href: '/contact/center-locator' },
          { label: 'Careers', href: '/contact/careers' },
          { label: 'Feedback', href: '/contact/feedback' },
        ],
      },
      // {
      //   label: 'Training Academy',
      //   href: '/training-academy',
      //   isMegaMenu: false,
      //   subItems: [
      //     { label: 'Embryo Biopsy', href: '/embryo-biopsy-training-program' },
      //     { label: 'Embryologist Training Program', href: '/training-academy/embryologist-training-program' },
      //     { label: 'Andrology Technician Training Program', href: '/training-academy/andrology-technician-training-program' },
      //     { label: 'Gynecologic Surgical Training Program', href: '/gynecologic-surgical-training-program' },
      //     { label: 'Training Registration', href: '/training-academy/training-registration' },
      //   ],
      // },

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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollPos = window.scrollY;
          if (currentScrollPos > prevScrollPos) {
            setIsSticky('cs_gescout_sticky'); // Scrolling down
          } else if (currentScrollPos !== 0) {
            setIsSticky('cs_gescout_sticky cs_gescout_show'); // Scrolling up
          } else {
            setIsSticky();
          }
          setPrevScrollPos(currentScrollPos); // Update previous scroll position
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

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

  // Disable all prefetching in static export to avoid .txt file requests
  // Prefetching is disabled for static export builds

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 ${variant ? variant : ''
          } cs_primary_color cs_sticky_header ${isSticky ? isSticky : ''}`}
      >
        {/* Top Bar */}
        <div className="cs_top_bar">
          <div className="container">
            <div className="cs_top_bar_in">
              <div className="cs_top_bar_left">
                <div className="cs_social_icons">
                  <Link href="https://www.facebook.com/SeedsofInnocence" target="_blank" rel="noopener noreferrer" className="cs_social_icon">
                    <FaFacebookF />
                  </Link>
                  <Link href="https://www.instagram.com/seedsofinnocensivf" target="_blank" rel="noopener noreferrer" className="cs_social_icon">
                    <FaInstagram />
                  </Link>
                  
                  <Link href="https://www.youtube.com/@seedsofinnocens" target="_blank" rel="noopener noreferrer" className="cs_social_icon">
                    <FaYoutube />
                  </Link>
                  <Link href="https://www.linkedin.com/company/seedsofinnocens" target="_blank" rel="noopener noreferrer" className="cs_social_icon">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
              <div className="cs_top_bar_right">
                <a href="tel:+91-9810350512" className="cs_phone_banner">
                  <span><FaPhone /> +91-9810350512</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in cs_compact_gap">
              <Link className="cs_site_branding" href={menu.logoLink} prefetch={false}>
                <Image
                  src={typeof window !== 'undefined' ? getAssetPathClient(menu.logoUrl) : menu.logoUrl}
                  alt="img"
                  width={350}
                  height={110}
                  loading="eager"
                />
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
                          prefetch={false}
                          onClick={(e) => {
                            // Check if navItem has megaMenuCategories with subItems
                            const hasCategoriesWithSubItems = item.isMegaMenu &&
                              item.megaMenuCategories &&
                              item.megaMenuCategories.some(cat => cat.subItems && cat.subItems.length > 0);

                            // Prevent navigation if it has megaMenuCategories with subItems, or if it has regular subItems
                            if (hasCategoriesWithSubItems || item.subItems) {
                              e.preventDefault();
                            }
                            if (isMobileView) {
                              setIsShowMobileMenu(!isShowMobileMenu);
                            }
                          }}
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
                                          prefetch={false}
                                          onClick={(e) => {
                                            // Only prevent navigation if category has subItems
                                            if (hasSubItems) {
                                              e.preventDefault();
                                            } else {
                                              // If no subItems, allow navigation and close menu
                                              setIsShowMobileMenu(false);
                                            }
                                          }}
                                        >
                                          {category.label}
                                        </Link>
                                        {hasSubItems && (
                                          <span
                                            className={`cs_mobile_sub_toggle ${isCategoryOpen ? 'active' : ''
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
                                                          prefetch={false}
                                                          onClick={(e) => {
                                                            if (item.label === 'IVF Centers' && category.label === 'India') {
                                                              e.preventDefault();
                                                            }
                                                            // Close mobile menu on navigation
                                                            if (isMobileView) {
                                                              setIsShowMobileMenu(false);
                                                            }
                                                          }}
                                                        >
                                                          {subItem.label}
                                                        </Link>
                                                        <span
                                                          className={`cs_mobile_sub_toggle ${isNestedOpen ? 'active' : ''
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
                                                                prefetch={false}
                                                                onClick={() => {
                                                                  setIsShowMobileMenu(
                                                                    !isShowMobileMenu
                                                                  );
                                                                }}
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
                                                      prefetch={false}
                                                      onClick={(e) => {
                                                        if (item.label === 'IVF Centers' && category.label === 'India') {
                                                          e.preventDefault();
                                                        } else {
                                                          // Close mobile menu on navigation
                                                          if (isMobileView) {
                                                            setIsShowMobileMenu(false);
                                                          }
                                                        }
                                                      }}
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
                              className={`cs_mega_wrapper ${hoveredCategoryIndex !== null &&
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
                              <li style={{
                                borderRight: hoveredCategoryIndex !== null &&
                                  item.megaMenuCategories[hoveredCategoryIndex]?.subItems &&
                                  item.megaMenuCategories[hoveredCategoryIndex].subItems.length > 0
                                  ? '1px solid #e0e0e0'
                                  : 'none',
                                paddingRight: hoveredCategoryIndex !== null &&
                                  item.megaMenuCategories[hoveredCategoryIndex]?.subItems &&
                                  item.megaMenuCategories[hoveredCategoryIndex].subItems.length > 0
                                  ? '20px'
                                  : '0',
                                marginRight: hoveredCategoryIndex !== null &&
                                  item.megaMenuCategories[hoveredCategoryIndex]?.subItems &&
                                  item.megaMenuCategories[hoveredCategoryIndex].subItems.length > 0
                                  ? '20px'
                                  : '0',
                                transition: 'border-right 0.15s ease, padding-right 0.15s ease, margin-right 0.15s ease'
                              }}>
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
                                            prefetch={false}
                                            onClick={(e) => {
                                              // Only prevent navigation if category has subItems
                                              if (hasSubItems) {
                                                e.preventDefault();
                                              }
                                            }}
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
                                            prefetch={false}
                                            onClick={(e) => {
                                              if (item.label === 'IVF Centers' && item.megaMenuCategories[hoveredCategoryIndex]?.label === 'India') {
                                                e.preventDefault();
                                              }
                                            }}
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
                                            prefetch={false}
                                            onClick={() => {
                                              // Close mobile menu on navigation
                                              setIsShowMobileMenu(false);
                                            }}
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
                                  prefetch={false}
                                  onClick={() => {
                                    setIsShowMobileMenu(!isShowMobileMenu);
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        {(item.subItems?.length || item.isMegaMenu) && (
                          <span
                            className={`cs_menu_dropdown_toggle ${openMobileSubmenuIndex.includes(index)
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
                    className={`cs_menu_toggle ${isShowMobileMenu && 'cs_toggle_active'
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
                    className={`cs_header_search_form ${isSearchActive ? 'active' : ''
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
                <Link href={menu.btnUrl} className="cs_btn cs_style_1 cs_color_1" prefetch={false}>
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
