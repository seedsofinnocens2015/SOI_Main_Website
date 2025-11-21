"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
        href: '/infertility-treatment',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'Infertility Testing',
            href: '/infertility-testing',
            subItems: [
              { label: 'Semen Analysis', href: '/semen-analysis' },
              { label: 'Hormone Testing', href: '/hormone-testing' },
              { label: 'Ovulation Testing', href: '/ovulation-testing' },
              { label: 'HSG Test', href: '/hsg-test' },
              { label: 'Genetic Testing', href: '/genetic-testing' },
            ],
          },
          {
            label: 'Infertility Treatments',
            href: '/infertility-treatments',
            subItems: [
              { label: 'IVF', href: '/ivf' },
              { label: 'IUI', href: '/iui' },
              { label: 'ICSI', href: '/icsi' },
              { label: 'Hysteroscopy', href: '/hysteroscopy' },
            ],
          },
          {
            label: 'Advanced Treatments',
            href: '/advanced-treatments',
            subItems: [
              { label: 'Blastocyst Culture And Transfer', href: '/blastocyst-culture' },
              { label: 'Laser Assisted Hatching (LAH)', href: '/laser-assisted-hatching' },
              { label: 'Preimplantation Genetic Testing', href: '/pgt' },
              { label: 'Embryo Cryopreservation', href: '/embryo-cryopreservation' },
            ],
          },
          {
            label: 'Fertility Preservation',
            href: '/fertility-preservation',
            subItems: [
              { label: 'Egg Freezing', href: '/egg-freezing' },
              { label: 'Sperm Freezing', href: '/sperm-freezing' },
              { label: 'Embryo Freezing', href: '/embryo-freezing' },
              { label: 'Ovarian Tissue Freezing', href: '/ovarian-tissue-freezing' },
            ],
          },
          {
            label: 'Donor Programme',
            href: '/donor-programme',
            subItems: [
              { label: 'Egg Donation', href: '/egg-donation' },
              { label: 'Sperm Donation', href: '/sperm-donation' },
              { label: 'Embryo Donation', href: '/embryo-donation' },
              { label: 'Donor Matching', href: '/donor-matching' },
            ],
          },
          {
            label: 'Patient Information',
            href: '/patient-information',
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
              { label: 'Delhi', href: '/ivf-centers/delhi' },
              { label: 'Uttar Pradesh', href: '/ivf-centers/uttarpradesh' },
              { label: 'Bihar', href: '/ivf-centers/bihar' },
              { label: 'Haryana', href: '/ivf-centers/haryana' },
              { label: 'Jharkhand', href: '/ivf-centers/jharkhand' },
              { label: 'Uttarakhand', href: '/ivf-centers/uttarakhand' },
              { label: 'Assam', href: '/ivf-centers/assam' },
              { label: 'Kerala', href: '/ivf-centers/kerala' },
              { label: 'Jammu & Kashmir', href: '/ivf-centers/jammu-kashmir' },
              { label: 'Kolkata', href: '/ivf-centers/kolkata' },
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
        label: 'About Infertility',
        href: '/about-infertility',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'Male Infertility',
            href: '/about-infertility/male-infertility',
          },
          {
            label: 'Female Infertility',
            href: '/about-infertility/female-infertility',
          },
          {
            label: 'Infertility Problems',
            href: '/about-infertility/diagnosis',
            subItems: [
              { label: 'Infertility Overview', href: '/infertility-overview' },
              { label: 'Endometriosis', href: '/endometriosis' },
              { label: 'Premature Ovarian failure', href: '/premature-ovarian-failure' },
              { label: 'Ovarian Cyst', href: '/ovarian-cyst' },
              { label: 'PCOS', href: '/pcos' },
              { label: 'PCOD', href: '/pcod' },
              { label: 'Irregular Periods', href: '/irregular-periods' },
              { label: 'Blocked Fallopian Tube', href: '/blocked-fallopian-tube' },
              { label: 'Uterine Fibroids', href: '/uterine-fibroids' },
              { label: 'Adenomyosis', href: '/adenomyosis' },
            ],
          },
        ],
      },
      {
        label: 'Resources',
        href: '/resources',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'Tools & Calculator',
            href: '/resources/tools-calculator',
            subItems: [
              { label: 'Pregnancy Calculator', href: '/pregnancy-calculator' },
              { label: 'Due Date Calculator', href: '/due-date-calculator' },
              { label: 'Ovulation Calculator', href: '/ovulation-calculator' },
              { label: 'Pregnancy Conception Calculator', href: '/pregnancy-conception-calculator' },
              { label: 'Period Calculator', href: '/period-calculator' },
            ],
          },
          {
            label: 'Infertility Blogs',
            href: '/resources/infertility-blogs',
          },
          {
            label: 'FAQs',
            href: '/resources/faqs',
          },
        ],
      },
      {
        label: 'About us',
        href: '/about',
        isMegaMenu: true,
        megaMenuCategories: [
          {
            label: 'Overview',
            href: '/about/overview',
          },
          {
            label: 'Leadership Team',
            href: '/about/leadership-team',
          },
          {
            label: 'Facilities',
            href: '/about/facilities',
            subItems: [
              { label: 'Our Centers', href: '/our-centers' },
              { label: 'Advanced Labs', href: '/advanced-labs' },
              { label: 'Operation Theatres', href: '/operation-theatres' },
              { label: 'Patient Care', href: '/patient-care' },
              { label: 'Technology & Equipment', href: '/technology-equipment' },
            ],
          },
          {
            label: 'Awards and Accreditations',
            href: '/about/awards',
          },
          {
            label: 'Investor Relations',
            href: '/about/partners',
            subItems: [
              { label: 'Policies', href: '/policies' },
              { label: 'Annual Returns', href: '/technology-partners' },
            ],
          },
          {
            label: 'Technology',
            href: '/about/technology',
            subItems: [
              { label: 'Technology Overview', href: '/technology-overview' },
              { label: 'Closed Working Chamber', href: '/closed-working-chamber' },
              { label: 'Electronic Witness Technology', href: '/electronic-witness-technology' },
              { label: '24X7 Monitoring System', href: '/24x7-monitoring-system' },
              { label: 'Microfluidic Sperm Sorter', href: '/microfluidic-sperm-sorter' },
              { label: 'Labcare Monitoring and Alarming System', href: '/labcare-monitoring-and-alarming-system' },
              { label: 'Air Monitoring System', href: '/air-monitoring-system' },
            ],
          },
          {
            label: 'SOI Fertility Academy',
            href: '/about/soi-fertility-academy',
          },
          {
            label: 'Partner with us',
            href: '/about/partner-with-us',
          },
        ],
      },
      {
        label: 'CSR',
        href: '/csr',
      },
      {
        label: 'Contact us',
        href: '/contact',
      },
    ],
    btnUrl: '/appointments',
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
        {isTopBar && (
          <div className="cs_top_header cs_blue_bg cs_white_color">
            <div className="container">
              <div className="cs_top_header_in">
                <div className="cs_top_header_left">
                  <ul className="cs_header_contact_list cs_mp_0">
                    <li>
                      <i>
                        <FaEnvelope />
                      </i>
                      <Link href={`mailto:${menu.email}`}>{menu.email}</Link>
                    </li>
                    <li>
                      <i>
                        <FaLocationDot />
                      </i>
                      {menu.location}
                    </li>
                  </ul>
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
        )}
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in cs_compact_gap">
                <Link className="cs_site_branding" href={menu.logoLink}>
                <Image src={menu.logoUrl} alt="img" width={350} height={110}   />
                </Link>
                {/* Mobile View: IVF Calculator Button */}
                <Link href="/ivf-success-calculator" className="cs_ivf_calc_btn_mobile cs_btn cs_style_1 cs_color_1">
                  <span>Calculate Now</span>
                  <i>
                    <FaAnglesRight />
                  </i>
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
                                            (subItem, subIndex) => (
                                              <li key={subIndex}>
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
                                            )
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
                                  ? 'cs_has_right_column'
                                  : ''
                              }`}
                              onMouseLeave={() => setHoveredCategoryIndex(null)}
                            >
                              {/* Left Column - Categories */}
                              <li>
                                <ul>
                                  {item.megaMenuCategories.map(
                                    (category, catIndex) => (
                                      <li
                                        key={catIndex}
                                        onMouseEnter={() => {
                                          if (
                                            category.subItems &&
                                            category.subItems.length > 0
                                          ) {
                                            setHoveredCategoryIndex(catIndex);
                                          } else {
                                            setHoveredCategoryIndex(null);
                                          }
                                        }}
                                        className={
                                          hoveredCategoryIndex === catIndex
                                            ? 'cs_active_category'
                                            : ''
                                        }
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
                                    )
                                  )}
                                </ul>
                              </li>
                              {/* Right Column - Sub-items of hovered category */}
                              {hoveredCategoryIndex !== null &&
                                item.megaMenuCategories[
                                  hoveredCategoryIndex
                                ]?.subItems &&
                                item.megaMenuCategories[hoveredCategoryIndex]
                                  .subItems.length > 0 && (
                                  <li>
                                    <ul>
                                      {item.megaMenuCategories[
                                        hoveredCategoryIndex
                                      ].subItems.map((subItem, subIndex) => (
                                        <li key={subIndex}>
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
                                      ))}
                                    </ul>
                                  </li>
                                )}
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
