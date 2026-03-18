"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import { FaSuitcase, FaLocationDot } from 'react-icons/fa6';
import Section from '../Section';
import PageHeading from '../PageHeading';
import IVFContentSection from '../IVFContentSection';
import LazyGoogleMap from '../LazyGoogleMap';
import { getAssetPathClient } from '@/app/utils/assetPath';

const BestIVFCentre = ({
    center,
    cityName,
    description,
    services: injectedServices,
    doctorsData = [],
    aboutUs: injectedAboutUs,
    topCenterContentData,
    bottomCenterContentData,
    locationContentData,
    faqContentData,
    faq: faqItems = [],
}) => {
    const serviceRow1Ref = useRef(null);
    const serviceRow2Ref = useRef(null);
    const testimonialSliderRef = useRef(null);

    // Slider settings matching NewsMediaSection
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        fade: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        appendDots: (dots) => (
            <div>
                <ul>{dots}</ul>
            </div>
        ),
        dotsClass: "cs_pagination cs_style_2",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // Convert YouTube URL to embed format matching NewsMediaSection
    const getEmbedUrl = (url) => {
        if (!url) return '';
        if (url.includes('youtube.com/embed/')) return url;
        let videoId = '';
        if (url.includes('youtube.com/watch?v=')) {
            videoId = url.split('v=')[1]?.split('&')[0];
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1]?.split('?')[0];
        } else if (url.includes('youtube.com/embed/')) {
            videoId = url.split('embed/')[1]?.split('?')[0];
        }
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
        return url;
    };

    // Default services fallback
    const defaultServices = [
        {
            title: "IUI, IVF & ICSI",
            icon: "/assets/img/icons/IUI, IVF & ICSI.svg"
        },
        {
            title: "Blastocyst Transfer",
            icon: "/assets/img/icons/Blastocyst Transfer.svg"
        },
        {
            title: "Cryopreservation",
            subtitle: "(Egg, Sperm & Embryos)",
            icon: "/assets/img/icons/Cryopreservation.svg"
        },
        {
            title: "PRP & Ovarian Rejuvenation",
            icon: "/assets/img/icons/PRP & Ovarian Rejuvenation.svg"
        },
        {
            title: "Genetic Testing",
            subtitle: "(PGT-A & PGT-M)",
            icon: "/assets/img/icons/Genetic Testing.svg"
        },
        {
            title: "Genetic Counseling",
            icon: "/assets/img/icons/Genetic Counselling.svg"
        },
        {
            title: "TESA/PESA",
            icon: "/assets/img/icons/TESA-PESA.svg"
        },
        {
            title: "Laparoscopy & Hysteroscopy",
            icon: "/assets/img/icons/Laparoscopy & Hysteroscopy.svg"
        },
    ];

    const services = injectedServices || defaultServices;
    const centerDoctors = center?.doctors || [];

    // Header Data
    const headingData = {
        title: center?.name,
        uspTitle: center?.uspTitle,
    };

    const testimonials = center?.testimonials || [];
    const aboutUs = injectedAboutUs ?? center?.aboutUs;
    const contactInfo = center?.contactInfo;

    const featuresRow1Ref = useRef(null);
    const featuresRow2Ref = useRef(null);
    const [isContactOpen, setIsContactOpen] = React.useState(false);

    return (
        <div className="cs_center_page_template">
            {/* Header Section */}
            <Section
                className={'cs_page_heading cs_bg_filed cs_center'}
                backgroundImage={center?.headerImage || "/assets/img/Top-Header.png"}
            >
                <PageHeading data={headingData} />
            </Section>

            {/* Main Intro & Services Section */}
            <section className="cs_best_ivf_section">
                <div className="container">
                    <div className="cs_best_ivf_content">
                        {/* Main Heading */}
                        <h2 className="cs_best_ivf_title">
                            Best IVF Centre in <span className='cs_best_ivf_title_span'>{cityName}</span>
                        </h2>

                        {/* Description Paragraph */}
                        {description && (
                            <p className="cs_best_ivf_description">
                                {description}
                            </p>
                        )}

                        {/* Service Cards - Mobile 2 Rows */}
                        <div className="cs_best_ivf_services_mobile">
                            <div ref={serviceRow1Ref} className="cs_service_row">
                                {services.slice(0, 4).map((service, idx) => {
                                    const Wrapper = service.link ? Link : 'div';
                                    const wrapperProps = service.link ? { href: service.link, className: 'cs_service_card_mobile_link' } : { className: 'cs_service_card_mobile_link' };
                                    return (
                                        <Wrapper key={idx} {...wrapperProps}>
                                            <div className="cs_service_card_mobile">
                                                <div className="cs_service_icon_box">
                                                    <Image
                                                        src={getAssetPathClient(service.icon)}
                                                        alt={service.title}
                                                        width={48}
                                                        height={48}
                                                        className="w-12 h-12 object-contain"
                                                    />
                                                </div>
                                                <h3 className="cs_service_title_mobile">{service.title}</h3>
                                                {service.subtitle && <p className="cs_service_subtitle_mobile">{service.subtitle}</p>}
                                            </div>
                                        </Wrapper>
                                    );
                                })}
                            </div>
                            <div ref={serviceRow2Ref} className="cs_service_row">
                                {services.slice(4, 8).map((service, idx) => {
                                    const Wrapper = service.link ? Link : 'div';
                                    const wrapperProps = service.link ? { href: service.link, className: 'cs_service_card_mobile_link' } : { className: 'cs_service_card_mobile_link' };
                                    return (
                                        <Wrapper key={idx} {...wrapperProps}>
                                            <div className="cs_service_card_mobile">
                                                <div className="cs_service_icon_box">
                                                    <Image
                                                        src={getAssetPathClient(service.icon)}
                                                        alt={service.title}
                                                        width={48}
                                                        height={48}
                                                        className="w-12 h-12 object-contain"
                                                    />
                                                </div>
                                                <h3 className="cs_service_title_mobile">{service.title}</h3>
                                                {service.subtitle && <p className="cs_service_subtitle_mobile">{service.subtitle}</p>}
                                            </div>
                                        </Wrapper>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Service Cards Grid - Tablet/Desktop */}
                        <div className="cs_best_ivf_services_desktop">
                            {services.map((service, idx) => {
                                const Wrapper = service.link ? Link : 'div';
                                const wrapperProps = service.link ? { href: service.link, className: 'cs_service_card_desktop_link' } : { className: 'cs_service_card_desktop_link' };
                                return (
                                    <Wrapper key={idx} {...wrapperProps}>
                                        <div className="cs_service_card_desktop">
                                            <div className="cs_service_icon_box">
                                                <Image
                                                    src={getAssetPathClient(service.icon)}
                                                    alt={service.title}
                                                    width={80}
                                                    height={80}
                                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <h3 className="cs_service_title_desktop">{service.title}</h3>
                                            {service.subtitle && <p className="cs_service_subtitle_desktop">{service.subtitle}</p>}
                                        </div>
                                    </Wrapper>
                                );
                            })}
                        </div>

                        {/* Call to Action Button */}
                        <div className="cs_best_ivf_cta">
                            <a href="/new/contact/book-appointment" className="cs_btn cs_style_1 cs_color_1">
                                Get Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctor Information Section */}
            {centerDoctors.length > 0 && (
                <Section
                    topSpaceLg="50"
                    topSpaceMd="40"
                    bottomSpaceLg="50"
                    bottomSpaceMd="60"
                >
                    <div className="container">
                        <div className="cs_section_heading cs_style_1 text-center mb-5">
                            <h2 className="cs_section_title">Our Expert  <span style={{ color: '#000000' }}>Team of Doctors</span></h2>
                        </div>
                        <div className="cs_doctors_grid cs_style_1">
                            {centerDoctors.map((doctor, index) => {
                                const matchedDoctorData = doctorsData.find((d) => d.slug === doctor.slug);
                                const doctorLink = matchedDoctorData
                                    ? `/doctors/${matchedDoctorData.newSlug || matchedDoctorData.slug + '-ivf-specialist'}`
                                    : null;

                                return (
                                    <div className="cs_team cs_style_1 cs_blue_bg" key={index}>
                                        <div className="cs_team_shape cs_accent_bg" />
                                        {doctorLink ? (
                                            <Link href={doctorLink} className="cs_team_thumbnail">
                                                <Image
                                                    src={getAssetPathClient(doctor.image)}
                                                    alt={`${doctor.name} Thumbnail`}
                                                    width={302}
                                                    height={423}
                                                    loading="lazy"
                                                />
                                            </Link>
                                        ) : (
                                            <div className="cs_team_thumbnail">
                                                <Image
                                                    src={getAssetPathClient(doctor.image)}
                                                    alt={`${doctor.name} Thumbnail`}
                                                    width={302}
                                                    height={423}
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}
                                        <div className="cs_team_bio">
                                            <h3 className="cs_team_title cs_extra_bold mb-0">
                                                {doctorLink ? (
                                                    <Link href={doctorLink}>{doctor.name}</Link>
                                                ) : (
                                                    <span>{doctor.name}</span>
                                                )}
                                            </h3>
                                            <p className="cs_team_subtitle">{doctor.subtitle}</p>
                                            {doctor.experience && (
                                                <p
                                                    className="cs_team_experience"
                                                    style={{
                                                        color: '#ffffff',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        marginBottom: '8px',
                                                    }}
                                                >
                                                    <FaSuitcase style={{ fontSize: '14px' }} />
                                                    <span>{doctor.experience} Experience</span>
                                                </p>
                                            )}
                                            {doctor.location && (
                                                <p
                                                    style={{
                                                        color: '#ffffff',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        marginBottom: '0',
                                                    }}
                                                >
                                                    <FaLocationDot style={{ fontSize: '14px' }} />
                                                    <span>{doctor.location}</span>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Section>
            )}

            {/* Testimonials Component - Design matching NewsMediaSection */}
            {testimonials.length > 0 && (
                <Section
                    topSpaceLg="50"
                    topSpaceMd="40"
                    bottomSpaceLg="50"
                    bottomSpaceMd="60"
                >
                    <div className="container">
                        {/* Section Heading matching NewsMediaSection style */}
                        <div className="cs_service_title_section">
                            <h2 className="cs_service_main_title">
                                <span className="cs_news_media_main_title" style={{ color: '#df3655' }}>
                                    WHAT OUR HAPPY
                                </span>{' '}
                                <span style={{ color: '#000000' }}>COUPLES ARE SAYING!</span>
                            </h2>
                            <p
                                style={{
                                    fontSize: 'clamp(14px, 2vw, 18px)',
                                    color: '#555555',
                                    fontWeight: '400',
                                    textAlign: 'center',
                                    textTransform: 'none',
                                    marginTop: '10px',
                                    display: 'block',
                                    width: '100%',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                }}
                            >
                                Watch these heartfelt testimonials from families who found hope with us.
                            </p>
                        </div>

                        <div className="cs_height_30 cs_height_lg_30" />

                        <div className="cs_slider cs_style_1 cs_slider_gap_24">
                            <div className="cs_slider_container">
                                <div className="cs_slider_wrapper">
                                    <Slider ref={testimonialSliderRef} {...sliderSettings}>
                                        {testimonials.map((t, index) => (
                                            <div
                                                key={index}
                                                className="cs_slide"
                                                onMouseEnter={() => testimonialSliderRef.current?.slickPause()}
                                                onMouseLeave={() => testimonialSliderRef.current?.slickPlay()}
                                            >
                                                <div className="cs_news_media_item">
                                                    <div className="cs_news_media_video">
                                                        <iframe
                                                            src={getEmbedUrl(t.link)}
                                                            title={t.name || `Testimonial Video ${index + 1}`}
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        />
                                                    </div>
                                                    <div className="cs_news_media_content">
                                                        <h3 className="cs_news_media_title" style={{ color: '#df3655' }}>{t.name}</h3>
                                                        <p className="cs_news_media_description" style={{ color: '#474343' }}>
                                                            {t.text}
                                                        </p>
                                                        {t.role && (
                                                            <div className="cs_news_media_date">{t.role}</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Why Choose Us Component */}
            <section className="w-full py-8 sm:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section Heading matching NewsMediaSection style */}
                    <div className="cs_service_title_section mb-10">
                        <h2 className="cs_service_main_title">
                            <span className="cs_news_media_main_title" style={{ color: '#df3655' }}>
                                WHY CHOOSE
                            </span>{' '}
                            <span style={{ color: '#000000' }}>SEEDS OF INNOCENS IVF</span>
                        </h2>
                    </div>
                    {/* Feature Grid - Mobile 2 Rows */}
                    <div className="d-block d-sm-none mt-4">
                        {/* Row 1 - First 4 features */}
                        <div ref={featuresRow1Ref} className="flex gap-3 overflow-x-auto pb-2 mb-3 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {[
                                {
                                    title: '35+ IVF Centres',
                                    desc: "Seeds of Innocens IVF brings you the best fertility care across India and International too. With over 35+ IVF centre, your journey to parenthood is become more closer to you. Whether you're in a metro or a smaller city, expert help is never far away.",
                                    icon: <img src={getAssetPathClient("/assets/img/icons/IVF Centres.svg")} alt="35+ IVF Centres" style={{ width: '45px', height: '45px', objectFit: 'contain' }} loading="lazy" />,
                                },
                                {
                                    title: '20,000+ Healthy Babies',
                                    desc: 'At Seeds of Innocens IVF we have helped and fulfilled the dream of many couples who were struggling with infertility. Our commitment to quality fertility care and personalised treatment.',
                                    icon: <img src={getAssetPathClient("/assets/img/icons/Healthy Babies.svg")} alt="20,000+ Healthy Babies" style={{ width: '45px', height: '45px', objectFit: 'contain' }} loading="lazy" />,
                                },
                                {
                                    title: 'Upto 78% Success Rate',
                                    desc: 'At Seeds of Innocens IVF, the success rate of IVF is reported above 78%+ which is well above the global average. Moreover, it is crucial to note that success rates vary depending on factors such as the age of the patient, the specific fertility problems, and the treatment protocol.',
                                    icon: <img src={getAssetPathClient("/assets/img/icons/Success Rate.svg")} alt="Upto 78% Success Rate" style={{ width: '45px', height: '45px', objectFit: 'contain' }} loading="lazy" />,
                                },
                                {
                                    title: '30+ Certified Trained Clinicians',
                                    desc: 'We have skilled fertility experts with an experience of over 20+ years. Seeds of Innocens IVF is dedicated to giving everyone access to great medical care while lowering the costs of IVF and other reproductive procedures. ',
                                    icon: <img src={getAssetPathClient("/assets/img/icons/Dedicated Fertility.svg")} alt="30+ Certified Trained Clinicians" style={{ width: '45px', height: '45px', objectFit: 'contain' }} loading="lazy" />,
                                },
                            ].map((f, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 p-4 text-center flex flex-col items-center flex-shrink-0 w-[180px] group rounded-lg bg-white"
                                >
                                    <div style={{ width: '45px', height: '45px' }} className="flex items-center justify-center">
                                        {f.icon}
                                    </div>
                                    <h3 className="mt-2 font-semibold text-red-600 leading-tight" style={{ fontSize: '11px' }}>
                                        {f.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                        {/* Row 2 - Next 4 features */}
                        <div ref={featuresRow2Ref} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {[
                                {
                                    title: 'Reliability',
                                    desc: 'Seeds of Innocens IVF has an industry-leading success rate of about 78%, and it is well known for its high patient satisfaction rates.',
                                    icon: <img src={getAssetPathClient("/assets/img/icons/Reliability.svg")} alt="Reliability" style={{ width: '45px', height: '45px', objectFit: 'contain' }} loading="lazy" />,
                                },
                                {
                                    title: 'Latest Technologies',
                                    desc: 'We use the latest technologies for diagnosing and treating cases with unconventional methods.',
                                    icon: <img src={getAssetPathClient("/assets/img/icons/Genetic Testing.svg")} alt="Fetal Medicine" style={{ width: '45px', height: '45px', objectFit: 'contain' }} loading="lazy" />,
                                },
                                {
                                    title: 'Customized Care',
                                    desc: 'Seeds of Innocens IVF offers quality treatment to every patient as per the individual requirement to make sure about the customized care.',
                                    icon: <img src={getAssetPathClient("/assets/img/icons/Customized Care.svg")} alt="Customized Care" style={{ width: '45px', height: '45px', objectFit: 'contain' }} loading="lazy" />,
                                },
                                {
                                    title: 'In-House Genetic Lab',
                                    desc: 'We are proud to be recognize as the first IVF centre to have its own in-house genetic lab',
                                    icon: <img src={getAssetPathClient("/assets/img/icons/In-House Genetic.svg")} alt="In-House Genetic Lab" style={{ width: '45px', height: '45px', objectFit: 'contain' }} loading="lazy" />,
                                },
                            ].map((f, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 p-4 text-center flex flex-col items-center flex-shrink-0 w-[180px] group rounded-lg bg-white"
                                >
                                    <div style={{ width: '45px', height: '45px' }} className="flex items-center justify-center">
                                        {f.icon}
                                    </div>
                                    <h3 className="mt-2 font-semibold text-red-600 leading-tight" style={{ fontSize: '11px' }}>
                                        {f.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature Grid - Tablet/Desktop */}
                    <div className="d-none d-sm-grid grid-cols-1 mt-15 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-md overflow-hidden bg-white">
                        {[
                            {
                                title: '35+ IVF Centres',
                                desc: "Seeds of Innocens IVF brings you the best fertility care across India and International too. With over 35+ IVF centre, your journey to parenthood is become more closer to you. Whether you're in a metro or a smaller city, expert help is never far away. Whether you're in a metro or a smaller city, expert help is never far away.",
                                icon: <img src={getAssetPathClient("/assets/img/icons/IVF Centres.svg")} alt="35+ IVF Centres" style={{ width: '60px', height: '60px', objectFit: 'contain' }} loading="lazy" />,
                            },
                            {
                                title: '20,000+ Healthy Babies',
                                desc: 'At Seeds of Innocens IVF we have helped and fulfilled the dream of many couples who were struggling with infertility.  Our commitment to quality fertility care and personalised treatment.',
                                icon: <img src={getAssetPathClient("/assets/img/icons/Healthy Babies.svg")} alt="20,000+ Healthy Babies" style={{ width: '60px', height: '60px', objectFit: 'contain' }} loading="lazy" />,
                            },
                            {
                                title: 'Upto 78% Success Rate',
                                desc: 'At Seeds of Innocens IVF, the success rate of IVF is reported above 78%+ which is well above the global average. Moreover, it is crucial to note that success rates vary depending on factors such as the age of the patient, the specific fertility problems, and the treatment protocol. ',
                                icon: <img src={getAssetPathClient("/assets/img/icons/Success Rate.svg")} alt="Upto 78% Success Rate" style={{ width: '60px', height: '60px', objectFit: 'contain' }} loading="lazy" />,
                            },
                            {
                                title: '30+ Certified Trained Clinicians',
                                desc: 'We have skilled fertility experts with an experience of over 20+ years. Seeds of Innocens IVF is dedicated to giving everyone access to great medical care while lowering the costs of IVF and other reproductive procedures. ',
                                icon: <img src={getAssetPathClient("/assets/img/icons/Dedicated Fertility.svg")} alt="30+ Certified Trained Clinicians" style={{ width: '60px', height: '60px', objectFit: 'contain' }} loading="lazy" />,
                            },
                            {
                                title: 'Reliability',
                                desc: '. Seeds of Innocens IVF has an industry-leading success rate of about 78%, and it is well known for its high patient satisfaction rates. and financing options to make your journey easier.',
                                icon: <img src={getAssetPathClient("/assets/img/icons/Reliability.svg")} alt="Reliability" style={{ width: '60px', height: '60px', objectFit: 'contain' }} loading="lazy" />,
                            },
                            {
                                title: 'Latest Technologies',
                                desc: 'We use the latest technologies for diagnosing and treating cases with unconventional methods.',
                                icon: <img src={getAssetPathClient("/assets/img/icons/Genetic Testing.svg")} alt="Fetal Medicine" style={{ width: '60px', height: '60px', objectFit: 'contain' }} loading="lazy" />,
                            },
                            {
                                title: 'Customized Care',
                                desc: 'Seeds of Innocens IVF offers quality treatment to every patient as per the individual requirement to make sure about the customized care.',
                                icon: <img src={getAssetPathClient("/assets/img/icons/Customized Care.svg")} alt="Customized Care" style={{ width: '60px', height: '60px', objectFit: 'contain' }} loading="lazy" />,
                            },
                            {
                                title: 'In-House Genetic Lab',
                                desc: 'We are the first IVF centre in India to establish an in-house genetic lab with testing services including PGT-A.',
                                icon: <img src={getAssetPathClient("/assets/img/icons/In-House Genetic.svg")} alt="In-House Genetic Lab" style={{ width: '60px', height: '60px', objectFit: 'contain' }} loading="lazy" />,
                            },
                        ].map((f, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-200 text-center flex flex-col items-center group" style={{ padding: '20px' }}
                            >
                                <div style={{ width: '60px', height: '60px' }} className="flex items-center justify-center">
                                    {f.icon}
                                </div>
                                <h3 className="mt-3 font-semibold text-red-600 animated-underline transition-all duration-200" style={{ fontSize: '14px' }}>
                                    {f.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-700 leading-6 hidden sm:block">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* About Us Component */}
            {aboutUs && (
                <section className="cs_about_us_section_v2">
                    <div className="cs_about_v2_container">
                        {/* Main Heading */}
                        <div className="cs_service_title_section mb-10">
                            <h2 className="cs_service_main_title">
                                <span className="cs_news_media_main_title" style={{ color: '#df3655' }}>
                                    About Seeds of Innocens IVF
                                </span>{' '}
                                <span style={{ color: '#000000' }}> Centre {cityName}</span>
                            </h2>
                        </div>
                        <div className="cs_about_v2_wrapper">
                            {/* Building image */}
                            <div className="cs_about_v2_img_col">
                                <img
                                    src={getAssetPathClient(aboutUs.image || center.image)}
                                    alt={`${aboutUs.title || 'About Seeds of Innocens'}`}
                                    className="cs_about_v2_img"
                                    loading="lazy"
                                />
                            </div>

                            {/* Text + CTA */}
                            <div className="cs_about_v2_text_col">
                                {aboutUs.paragraphs && aboutUs.paragraphs.map((para, i) => (
                                    <p key={i} className="cs_about_v2_para">
                                        {para}
                                    </p>
                                ))}
                                <div className="cs_best_ivf_cta">
                                    <a href="/new/contact/book-appointment" className="cs_btn cs_style_1 cs_color_1">
                                        Get Free Consultation
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Map & Contact Information Component */}
            {contactInfo && (
                <section className="cs_map_contact_section">
                    <div className="cs_map_contact_container">
                        <div className="cs_map_contact_wrapper">
                            {/* Address + Details Card */}
                            <div className="cs_contact_info_col">
                                <div className="cs_contact_info_box">
                                    <h3 className="cs_contact_title">
                                        {contactInfo.title.includes('in ') ? (
                                            <>
                                                <span style={{ color: '#df3655' }}>{contactInfo.title.split('in ')[0]}in </span>
                                                <span style={{ color: '#000000' }}>{contactInfo.title.split('in ')[1]}</span>
                                            </>
                                        ) : (
                                            contactInfo.title
                                        )}
                                    </h3>
                                    <div className="cs_contact_list">
                                        <div className="cs_contact_item">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cs_contact_icon"><path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V5.25A2.25 2.25 0 0 0 17.25 3H6.75Zm1.5 3h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 8.25 6Zm0 3h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm0 3h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5Z" /></svg>
                                            <p className="cs_contact_text">
                                                <span>Open Days:</span> {contactInfo.openDays}
                                            </p>
                                        </div>
                                        <div className="cs_contact_item">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cs_contact_icon"><path d="M12 1.5a.75.75 0 0 1 .75.75V3h2.25a.75.75 0 0 1 0 1.5H12.75v2.25a.75.75 0 0 1-1.5 0V4.5H9a.75.75 0 0 1 0-1.5h2.25V2.25A.75.75 0 0 1 12 1.5Zm-6 4.5A2.25 2.25 0 0 0 3.75 8.25v9A2.25 2.25 0 0 0 6 19.5h12a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 18 6H6Z" /></svg>
                                            <p className="cs_contact_text">
                                                <span>Timings:</span> {contactInfo.timings}
                                            </p>
                                        </div>
                                        <div className="cs_contact_item">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cs_contact_icon"><path d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.989 6.75 12.75 6.75 12.75s6.75-7.761 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75Zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
                                            <p className="cs_contact_text">
                                                <span>Address:</span> {contactInfo.address}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="cs_contact_btn_group">
                                        <a href={contactInfo.direction} target="_blank" rel="noreferrer" className="cs_contact_btn_primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.989 6.75 12.75 6.75 12.75s6.75-7.761 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75Zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
                                            Get Directions
                                        </a>
                                        <a href={`tel:${contactInfo.phone}`} className="cs_contact_btn_secondary">
                                            <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>phone-call</title> <path d="M18.037 6.635c-0.011-0.001-0.023-0.001-0.035-0.001-0.414 0-0.75 0.336-0.75 0.75 0 0.399 0.312 0.726 0.706 0.749l0.002 0c3.533 0.231 6.311 3.153 6.311 6.723 0 0.186-0.008 0.37-0.022 0.552l0.002-0.024c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0c0.009-0.143 0.014-0.31 0.014-0.479 0-4.38-3.397-7.967-7.7-8.269l-0.026-0.001zM17.963 2.749c0.449 0.022 10.998 0.688 10.998 12.635 0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0c0.015-0.238 0.024-0.515 0.024-0.795 0-7.059-5.471-12.841-12.405-13.335l-0.043-0.002c-0.009-0-0.019-0.001-0.029-0.001-0.403 0-0.732 0.314-0.757 0.71l-0 0.002c-0.001 0.011-0.001 0.024-0.001 0.037 0 0.401 0.315 0.729 0.711 0.749l0.002 0zM30.637 23.15c-0.109-0.675-0.334-1.281-0.654-1.823l0.013 0.024c-0.114-0.186-0.301-0.317-0.521-0.353l-0.004-0.001-8.969-1.424c-0.035-0.006-0.076-0.009-0.117-0.009-0.207 0-0.395 0.083-0.531 0.218l0-0c-0.676 0.68-1.194 1.516-1.496 2.451l-0.012 0.044c-4.016-1.64-7.141-4.765-8.742-8.675l-0.038-0.105c0.978-0.314 1.814-0.833 2.493-1.509l-0 0c0.136-0.136 0.22-0.324 0.22-0.531 0-0.041-0.003-0.081-0.010-0.12l0.001 0.004-1.425-8.969c-0.036-0.224-0.167-0.412-0.35-0.524l-0.003-0.002c-0.505-0.301-1.094-0.522-1.724-0.626l-0.029-0.004c-0.315-0.070-0.677-0.111-1.048-0.111-0.025 0-0.050 0-0.075 0.001l0.004-0h-0.006c-3.497 0.024-6.326 2.855-6.347 6.351v0.002c0.015 12.761 10.355 23.102 23.115 23.117h0.002c3.5-0.023 6.331-2.854 6.354-6.351v-0.002c0-0.020 0-0.044 0-0.068 0-0.356-0.036-0.703-0.106-1.038l0.006 0.033zM24.383 29.076c-11.933-0.014-21.602-9.684-21.616-21.616v-0.001c0.019-2.673 2.182-4.835 4.854-4.853h0.002c0.016-0 0.036-0 0.055-0 0.272 0 0.537 0.030 0.793 0.086l-0.024-0.005c0.366 0.060 0.695 0.161 1.003 0.3l-0.025-0.010 1.302 8.202c-0.628 0.528-1.404 0.901-2.257 1.050l-0.029 0.004c-0.355 0.064-0.62 0.37-0.62 0.739 0 0.088 0.015 0.172 0.043 0.25l-0.002-0.005c1.772 5.072 5.695 8.994 10.646 10.729l0.121 0.037c0.073 0.026 0.157 0.041 0.245 0.041 0.368 0 0.674-0.265 0.737-0.615l0.001-0.005c0.153-0.882 0.526-1.658 1.061-2.295l-0.006 0.007 8.201 1.303c0.133 0.294 0.237 0.636 0.296 0.994l0.003 0.024c0.046 0.219 0.073 0.471 0.073 0.729 0 0.018-0 0.035-0 0.053l0-0.003c-0.016 2.675-2.179 4.84-4.852 4.859h-0.002z"></path> </g></svg>
                                            Call Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Google Map */}
                            <div className="cs_map_col">
                                <LazyGoogleMap title={`${cityName} IVF Centre Location`} src={contactInfo.mapUrl} />
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* FAQ Section */}
            {(faqContentData || faqItems?.length > 0) && (
                <Section
                    topSpaceLg="0"
                    topSpaceMd="0"
                    bottomSpaceLg="70"
                    bottomSpaceMd="120"
                >
                    <div className="container">
                        <div className="cs_service_title_section mb-10">
                            <h2 className="cs_service_main_title">
                                <span className="cs_news_media_main_title" style={{ color: '#df3655' }}>
                                    FREQUENTLY ASKED
                                </span>{' '}
                                <span style={{ color: '#000000' }}>QUESTIONS</span>
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <IVFContentSection
                                    data={{ sections: faqContentData?.sections || [] }}
                                    faq={faqItems}
                                />
                            </div>
                        </div>
                    </div>
                </Section>
            )}
        </div>
    );
};

export default BestIVFCentre;
