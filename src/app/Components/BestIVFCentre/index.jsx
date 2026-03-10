"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    topCenterContentData,
    bottomCenterContentData,
    locationContentData,
    faqContentData
}) => {
    const serviceRow1Ref = useRef(null);
    const serviceRow2Ref = useRef(null);

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
    const centerDoctors = center.doctors || [];

    // Header Data
    const headingData = {
        title: center.name,
        uspTitle: center.uspTitle,
    };

    const testimonials = center.testimonials || [];
    const aboutUs = center.aboutUs;
    const contactInfo = center.contactInfo;

    const featuresRow1Ref = useRef(null);
    const featuresRow2Ref = useRef(null);
    const [isContactOpen, setIsContactOpen] = React.useState(false);

    return (
        <div className="cs_center_page_template">
            {/* Header Section */}
            <Section
                className={'cs_page_heading cs_bg_filed cs_center'}
                backgroundImage={center.headerImage || "/assets/img/Top-Header.png"}
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
                                {services.slice(0, 4).map((service, idx) => (
                                    <div key={idx} className="cs_service_card_mobile">
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
                                ))}
                            </div>
                            <div ref={serviceRow2Ref} className="cs_service_row">
                                {services.slice(4, 8).map((service, idx) => (
                                    <div key={idx} className="cs_service_card_mobile">
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
                                ))}
                            </div>
                        </div>

                        {/* Service Cards Grid - Tablet/Desktop */}
                        <div className="cs_best_ivf_services_desktop">
                            {services.map((service, idx) => (
                                <div key={idx} className="cs_service_card_desktop">
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
                            ))}
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
                            <h2 className="cs_section_title">Our Expert Team of <span style={{color: '#000000'}}>Doctors</span></h2>
                        </div>
                        <div className="cs_doctors_grid cs_style_1">
                            {centerDoctors.map((doctor, index) => {
                                const matchedDoctorData = doctorsData.find((d) => d.slug === doctor.slug);
                                const doctorLink = matchedDoctorData
                                    ? `/${matchedDoctorData.newSlug || matchedDoctorData.slug + '-ivf-specialist'}`
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

            {/* Testimonials Component */}
            {testimonials.length > 0 && (
                <section className="w-full bg-gray-100 py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* Main Heading */}
                        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-8 sm:mb-12">
                            What Our Happy Couples Are Saying!
                        </h2>
                        
                        {/* Testimonials Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {testimonials.map((t) => (
                                <article
                                    key={t.videoId || `${t.name}-${t.link}`}
                                    className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 group hover:shadow-xl"
                                >
                                    {/* Video Thumbnail */}
                                    <div className="relative w-full aspect-video bg-gray-200">
                                        <a
                                            href={t.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="absolute inset-0 block"
                                            aria-label={`Play testimonial video: ${t.name}`}
                                        >
                                            <img
                                                src={`https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`}
                                                alt={t.name}
                                                className="h-full w-full object-cover"
                                                loading="lazy"
                                            />
                                            <span className="absolute inset-0 flex items-center justify-center">
                                                <span className="h-10 w-14 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="h-6 w-6"
                                                    >
                                                        <path d="M8 5v14l11-7-11-7z" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-5 flex flex-col h-full">
                                        {/* Stars */}
                                        <div className="flex items-center gap-1 text-red-600 mb-3" aria-label={`${t.stars} star rating`}>
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className={`h-4 w-4 ${i < t.stars ? 'opacity-100' : 'opacity-20'}`}
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.175 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className="text-sm text-gray-700 text-justify leading-relaxed mb-5 line-clamp-4 flex-grow">
                                            {t.text}
                                        </p>

                                        {/* Watch Video Button */}
                                        <div className="mt-auto">
                                            <a
                                                href={t.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-block text-xs font-bold text-red-600 border border-gray-200 rounded-lg px-4 py-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                                            >
                                                Watch Video
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Why Choose Us Component */}
            <section className="w-full py-8 sm:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Main Heading */}
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
                        Why Choose Seeds of Innocens IVF
                    </h2>
                    {/* Feature Grid - Mobile 2 Rows */}
                    <div className="sm:hidden mt-4">
                        {/* Row 1 - First 4 features */}
                        <div ref={featuresRow1Ref} className="flex gap-3 overflow-x-auto pb-2 mb-3 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {[
                                {
                                    title: '35+ IVF Centres',
                                    desc: "With over 35 IVF centres across the National and International, Seeds of Innocens brings fertility care closer to you.",
                                    icon: <img src="/assets/img/icons/IVF Centres.svg" alt="35+ IVF Centres" className="h-10 w-10 object-contain" loading="lazy" />,
                                },
                                {
                                    title: '20,000+ Healthy Babies',
                                    desc: 'At Seeds of Innocens, we are proud to have helped over 20,000 families welcome healthy babies into the world.',
                                    icon: <img src="/assets/img/icons/Healthy Babies.svg" alt="20,000+ Healthy Babies" className="h-10 w-10 object-contain" loading="lazy" />,
                                },
                                {
                                    title: 'Upto 78% Success Rate',
                                    desc: 'We maintain an impressive IVF success rate of 78%, higher than the average.',
                                    icon: <img src="/assets/img/icons/Success Rate.svg" alt="Upto 78% Success Rate" className="h-10 w-10 object-contain" loading="lazy" />,
                                },
                                {
                                    title: '30+ Certified Trained Clinicians',
                                    desc: 'Our team includes over 30 certified and highly trained fertility specialists and embryologists.',
                                    icon: <img src="/assets/img/icons/Dedicated Fertility.svg" alt="30+ Certified Trained Clinicians" className="h-10 w-10 object-contain" loading="lazy" />,
                                },
                            ].map((f, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 p-4 text-center flex flex-col items-center flex-shrink-0 w-[180px] group rounded-lg bg-white"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        {f.icon}
                                    </div>
                                    <h3 className="mt-2 text-sm font-semibold text-red-600 leading-tight">
                                        {f.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                        {/* Row 2 - Next 4 features */}
                        <div ref={featuresRow2Ref} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {[
                                {
                                    title: 'Affordable IVF Care',
                                    desc: 'We provide affordable IVF treatment and offer quality services to patients, with customised packages.',
                                    icon: <img src="/assets/img/icons/IUI, IVF & ICSI.svg" alt="Affordable IVF Care" className="h-10 w-10 object-contain" loading="lazy" />,
                                },
                                {
                                    title: 'Fetal Medicine',
                                    desc: 'We offer fetal medicine services including ultrasound scans, fetal echocardiography, and diagnostic procedures.',
                                    icon: <img src="/assets/img/icons/Blastocyst Transfer.svg" alt="Fetal Medicine" className="h-10 w-10 object-contain" loading="lazy" />,
                                },
                                {
                                    title: 'Expert Fertility Counsellor',
                                    desc: 'Genetic counselors evaluate family histories and identify potential genetic risks.',
                                    icon: <img src="/assets/img/icons/Genetic Counselling.svg" alt="Expert Fertility Counsellor" className="h-10 w-10 object-contain" loading="lazy" />,
                                },
                                {
                                    title: 'In-House Genetic Lab',
                                    desc: 'We are the first IVF centre in India to establish an in-house genetic lab.',
                                    icon: <img src="/assets/img/icons/Genetic Testing.svg" alt="In-House Genetic Lab" className="h-10 w-10 object-contain" loading="lazy" />,
                                },
                            ].map((f, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 p-4 text-center flex flex-col items-center flex-shrink-0 w-[180px] group rounded-lg bg-white"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        {f.icon}
                                    </div>
                                    <h3 className="mt-2 text-sm font-semibold text-red-600 leading-tight">
                                        {f.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature Grid - Tablet/Desktop */}
                    <div className="hidden sm:grid grid-cols-1 mt-15 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-md overflow-hidden bg-white">
                        {[
                            {
                                title: '35+ IVF Centres',
                                desc: "With over 35 IVF centres across the National and International, Seeds of Innocens brings fertility care closer to you. Whether you're in a metro or a smaller city, expert help is never far away.",
                                icon: <img src="/assets/img/icons/IVF Centres.svg" alt="35+ IVF Centres" className="h-14 w-14 object-contain" loading="lazy" />,
                            },
                            {
                                title: '20,000+ Healthy Babies',
                                desc: 'At Seeds of Innocens, we are proud to have helped over 20,000 families welcome healthy babies into the world. Our commitment to quality fertility care and personalised treatment.',
                                icon: <img src="/assets/img/icons/Healthy Babies.svg" alt="20,000+ Healthy Babies" className="h-14 w-14 object-contain" loading="lazy" />,
                            },
                            {
                                title: 'Upto 78% Success Rate',
                                desc: 'We maintain an impressive IVF success rate of 78%, higher than the average. Our advanced lab technology and individualised treatment plans make this possible.',
                                icon: <img src="/assets/img/icons/Success Rate.svg" alt="Upto 78% Success Rate" className="h-14 w-14 object-contain" loading="lazy" />,
                            },
                            {
                                title: '30+ Certified Trained Clinicians',
                                desc: 'Our team includes over 30 certified and highly trained fertility specialists and embryologists. With years of experience and global expertise.',
                                icon: <img src="/assets/img/icons/Dedicated Fertility.svg" alt="30+ Certified Trained Clinicians" className="h-14 w-14 object-contain" loading="lazy" />,
                            },
                            {
                                title: 'Affordable IVF Care',
                                desc: 'We provide affordable IVF treatment and offer quality services to patients, with customised packages and financing options to make your journey easier.',
                                icon: <img src="/assets/img/icons/IUI, IVF & ICSI.svg" alt="Affordable IVF Care" className="h-14 w-14 object-contain" loading="lazy" />,
                            },
                            {
                                title: 'Fetal Medicine',
                                desc: 'We offer fetal medicine services including ultrasound scans, fetal echocardiography, and diagnostic procedures like amniocentesis and CVS.',
                                icon: <img src="/assets/img/icons/Blastocyst Transfer.svg" alt="Fetal Medicine" className="h-14 w-14 object-contain" loading="lazy" />,
                            },
                            {
                                title: 'Expert Fertility Counsellor',
                                desc: 'Genetic counselors evaluate family histories and identify potential genetic risks that could affect reproductive outcomes.',
                                icon: <img src="/assets/img/icons/Genetic Counselling.svg" alt="Expert Fertility Counsellor" className="h-14 w-14 object-contain" loading="lazy" />,
                            },
                            {
                                title: 'In-House Genetic Lab',
                                desc: 'We are the first IVF centre in India to establish an in-house genetic lab with testing services including PGT-A.',
                                icon: <img src="/assets/img/icons/Genetic Testing.svg" alt="In-House Genetic Lab" className="h-14 w-14 object-contain" loading="lazy" />,
                            },
                        ].map((f, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-200 p-6 text-center flex flex-col items-center group"
                            >
                                {f.icon}
                                <h3 className="mt-3 text-lg font-semibold text-red-600 animated-underline transition-all duration-200">
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
                <section className="w-full bg-gray-100 py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* Main Heading */}
                        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
                            {aboutUs.title || `About Seeds of Innocens IVF Centre ${cityName}`}
                        </h2>
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-4 sm:p-8">
                            {/* Building image */}
                            <div className="w-full max-w-xl flex-shrink-0">
                                <img
                                    src={getAssetPathClient(aboutUs.image || center.image)}
                                    alt={`${aboutUs.title || 'About Seeds of Innocens'} building`}
                                    className="rounded-sm w-full max-h-[450px] object-contain"
                                    loading="lazy"
                                    style={{ height: 'auto' }}
                                />
                            </div>

                            {/* Text + CTA */}
                            <div className="flex-1 flex flex-col justify-center lg:justify-start mt-7 lg:mt-0">
                                {aboutUs.paragraphs && aboutUs.paragraphs.map((para, i) => (
                                    <p key={i} className="text-gray-900 text-base sm:text-lg mb-3 leading-snug">
                                        {para}
                                    </p>
                                ))}
                                <button
                                    onClick={() => setIsContactOpen(true)}
                                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow hover:bg-red-700 active:bg-red-800 focus:outline-none mt-2 w-full max-w-xs text-center"
                                    style={{ letterSpacing: '0.5px' }}
                                >
                                    Get Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Map & Contact Information Component */}
            {contactInfo && (
                <section className="w-full py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Address + Details Card */}
                            <div className="w-full lg:w-1/2 flex flex-col">
                                <div className=" p-5 sm:p-6">
                                    <h3 className="font-bold text-xl sm:text-2xl text-gray-900 leading-snug">{contactInfo.title}</h3>
                                    <div className="mt-4 space-y-3">
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0"><path d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V5.25A2.25 2.25 0 0 0 17.25 3H6.75Zm1.5 3h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 8.25 6Zm0 3h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm0 3h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5Z" /></svg>
                                            <p className="text-base sm:text-lg text-gray-900">
                                                <span className="font-semibold">Open Days:</span> {contactInfo.openDays}
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0"><path d="M12 1.5a.75.75 0 0 1 .75.75V3h2.25a.75.75 0 0 1 0 1.5H12.75v2.25a.75.75 0 0 1-1.5 0V4.5H9a.75.75 0 0 1 0-1.5h2.25V2.25A.75.75 0 0 1 12 1.5Zm-6 4.5A2.25 2.25 0 0 0 3.75 8.25v9A2.25 2.25 0 0 0 6 19.5h12a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 18 6H6Z" /></svg>
                                            <p className="text-base sm:text-lg text-gray-900">
                                                <span className="font-semibold">Timings:</span> {contactInfo.timings}
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0"><path d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.989 6.75 12.75 6.75 12.75s6.75-7.761 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75Zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
                                            <p className="text-base sm:text-lg text-gray-900">
                                                <span className="font-semibold">Address:</span> {contactInfo.address}
                                            </p>
                                        </div> 
                                    </div>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        <a href={contactInfo.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white mt-0.5 flex-shrink-0"><path d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.989 6.75 12.75 6.75 12.75s6.75-7.761 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75Zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
                                            Get Directions
                                        </a>
                                        <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm font-semibold hover:border-red-400 hover:text-red-600 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M2.25 4.5c0-1.243 1.007-2.25 2.25-2.25h3A2.25 2.25 0 0 1 9.75 4.5v1.38c0 .57-.225 1.118-.626 1.52l-1.2 1.2a1.5 1.5 0 0 0-.3 1.71 12.03 12.03 0 0 0 6.066 6.066 1.5 1.5 0 0 0 1.71-.3l1.2-1.2c.402-.401.95-.626 1.52-.626H19.5A2.25 2.25 0 0 1 21.75 18v3A2.25 2.25 0 0 1 19.5 23.25C10.663 23.25 3.75 16.337 3.75 7.5A3 3 0 0 1 6.75 4.5H5.25A2.25 2.25 0 0 1 3 2.25 2.25 2.25 0 0 0 2.25 4.5Z" /></svg>
                                            Call Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Google Map */}
                            <div className="w-full lg:w-1/2 flex flex-col">
                                <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 h-full min-h-[350px]">
                                    <LazyGoogleMap title={`${cityName} IVF Centre Location`} height={'100%'} src={contactInfo.mapUrl} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Top Content Sections (Now only for additional sections not covered above) */}
            {topCenterContentData && topCenterContentData.sections && topCenterContentData.sections.length > 0 && (
                <Section
                    topSpaceLg="50"
                    topSpaceMd="60"
                    bottomSpaceLg="50"
                    bottomSpaceMd="60"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <IVFContentSection
                                    data={topCenterContentData}
                                    benefitImages={topCenterContentData._benefitImages}
                                />
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Bottom Content Sections */}
            {bottomCenterContentData && bottomCenterContentData.sections && bottomCenterContentData.sections.length > 0 && (
                <Section
                    topSpaceLg="0"
                    topSpaceMd="0"
                    bottomSpaceLg="50"
                    bottomSpaceMd="60"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <IVFContentSection data={bottomCenterContentData} />
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Location Section */}
            {locationContentData && (
                <Section
                    topSpaceLg="0"
                    topSpaceMd="0"
                    bottomSpaceLg="70"
                    bottomSpaceMd="120"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <IVFContentSection data={locationContentData} />
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* FAQ Section */}
            {faqContentData && (
                <Section
                    topSpaceLg="0"
                    topSpaceMd="0"
                    bottomSpaceLg="70"
                    bottomSpaceMd="120"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <IVFContentSection data={faqContentData} />
                            </div>
                        </div>
                    </div>
                </Section>
            )}
        </div>
    );
};

export default BestIVFCentre;
