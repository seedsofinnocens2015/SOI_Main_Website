import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';
import centresAllData from '@/app/data/centres-data.json';
const centresData = centresAllData.centres;
const stateContentConfig = centresAllData.stateContent;
const centerContentConfig = centresAllData.centerContent;
const stateServicesWithIcons = centerContentConfig.default.servicesWithIcons || [];
import doctorsData from '@/app/data/doctors-data.json';
import { notFound } from 'next/navigation';
import { getAssetPath } from '@/app/utils/assetPath';
import IVFContentSection from '@/app/Components/IVFContentSection';
import BestIVFCentre from '@/app/Components/BestIVFCentre';
import { FaSuitcase, FaLocationDot } from 'react-icons/fa6';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.seedsofinnocence.com';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

function cityNameToSlug(cityName) {
    return cityName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

function getCenterLink(center) {
    const isMalviyaDelhi =
        center.name === 'Malviya Nagar, Delhi' && center.stateSlug === 'delhi';

    let cityParam;
    if (isMalviyaDelhi) {
        cityParam = 'delhi';
    } else {
        const cityName = center.name.split(',')[0].trim();
        cityParam = cityNameToSlug(cityName);
    }

    let slug;
    if (isMalviyaDelhi) {
        slug = 'best-ivf-centre-in-malviyanagar';
    } else {
        slug = `best-ivf-centre-in-${cityParam}`;
    }

    return `/${center.stateSlug}/${slug}/`;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    // 1. Check if it's an international centre slug
    const internationalCenter = centresData.find(c => c.isInternational && c.slug === slug);
    if (internationalCenter) {
        const defaultDesc = internationalCenter.description
            ? internationalCenter.description[0]
            : `Best IVF Centre in ${internationalCenter.name}.`;
        const title =
            internationalCenter.metaTitle || `${internationalCenter.name} | Seeds of Innocens`;
        const description = internationalCenter.metaDescription || defaultDesc;
        const path = `${basePath}/${slug}/`.replace(/\/{2,}/g, '/');
        const canonicalUrl = `${SITE_URL}${path}`;
        const ogImage = internationalCenter.image || '/assets/img/Top-Header.webp';
        const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${basePath}${ogImage}`;

        return {
            title,
            description,
            openGraph: {
                title,
                description,
                url: canonicalUrl,
                siteName: 'Seeds of Innocens',
                images: [{ url: ogImageUrl }],
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title,
                description,
            },
            alternates: { canonical: canonicalUrl },
        };
    }

    // 2. Otherwise treat as state page
    if (!slug.startsWith('best-ivf-centre-in-')) {
        return { title: 'Not Found' };
    }

    const stateSlug = slug.replace('best-ivf-centre-in-', '');
    const filteredCentres = centresData.filter(c => c.stateSlug === stateSlug);

    if (filteredCentres.length === 0) {
        return {
            title: 'Best IVF Centres',
        };
    }

    const stateName = filteredCentres[0].state;
    const rawStateContent = stateContentConfig[stateSlug] || stateContentConfig.default || {};
    const replaceStateName = (text) =>
        typeof text === 'string' ? text.replace(/{{stateName}}/g, stateName) : text;
    const defaultTitle = `Best IVF Centre in ${stateName} | Seeds of Innocens`;
    const defaultDescription = `Looking for the best IVF centre in ${stateName}? Seeds of Innocens offers advanced fertility treatments with high success rates and experienced specialists in ${stateName}.`;
    const title = replaceStateName(
        rawStateContent.metaTitle ||
        rawStateContent.sections?.[0]?.heading ||
        defaultTitle
    );
    const description = replaceStateName(
        rawStateContent.metaDescription ||
        rawStateContent.sections?.[0]?.paragraphs?.[0] ||
        defaultDescription
    );
    const path = `${basePath}/${slug}/`.replace(/\/{2,}/g, '/');
    const canonicalUrl = `${SITE_URL}${path}`;
    const ogImage = '/assets/img/Top-Header.webp';
    const ogImageUrl = `${SITE_URL}${basePath}${ogImage}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: 'Seeds of Innocens',
            images: [{ url: ogImageUrl }],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
        alternates: { canonical: canonicalUrl },
    };
}

export async function generateStaticParams() {
    try {
        // State params
        const states = [...new Set(centresData.filter(c => !c.isInternational).map(c => c.stateSlug))];
        const stateParams = states.map(stateSlug => ({
            slug: `best-ivf-centre-in-${stateSlug}`
        }));

        // International center params (SEO slugs)
        const internationalParams = centresData
            .filter(c => c.isInternational && c.slug)
            .map(c => ({
                slug: c.slug
            }));

        return [...stateParams, ...internationalParams];
    } catch (error) {
        console.error('Error in generateStaticParams:', error);
        return [];
    }
}

const DynamicPage = async ({ params }) => {
    const { slug } = await params;

    if (!slug) {
        notFound();
    }

    // 1. Check if it's an International Centre Slug
    const center = centresData.find(c => c.isInternational && c.slug === slug);
    if (center) {
        const cityName = center.name.split(',')[0].trim();
        const processedCenterImage = getAssetPath(center.image || '/assets/img/recent_post2webp');
        
        // Fetch Content and Services with Icons
        const centerContentConfig = centresAllData.centerContent;
        const rawCenterContent = centerContentConfig[center.slug] || centerContentConfig.default;
        const servicesWithIcons = rawCenterContent.servicesWithIcons || centerContentConfig.default.servicesWithIcons;

        const replaceCityName = (text) =>
            typeof text === 'string' ? text.replace(/{{cityName}}/g, cityName) : text;

        // FAQ Content Data
        const rawFaqs = (centerContentConfig[center.slug] && centerContentConfig[center.slug].faqs) || centerContentConfig.default.faqs || [];
        const faqContentData = rawFaqs.length > 0 ? {
            sections: [
                {
                    heading: `Frequently Asked Questions`,
                    steps: rawFaqs.map((faq) => ({
                        title: replaceCityName(faq.question),
                        description: replaceCityName(faq.answer),
                    })),
                },
            ],
        } : null;

        // About Us: centre-specific or default, with {{cityName}} replaced
        const rawAboutUs = (centerContentConfig[center.slug] && centerContentConfig[center.slug].aboutUs) || centerContentConfig.default?.aboutUs;
        const aboutUs = rawAboutUs ? {
            title: replaceCityName(rawAboutUs.title),
            image: rawAboutUs.image,
            paragraphs: (rawAboutUs.paragraphs || []).map(replaceCityName),
        } : undefined;
        const centerDoctorSlugs = new Set((center.doctors || []).map((doctor) => doctor.slug));
        const doctorSlugMap = doctorsData.reduce((acc, doctor) => {
            if (centerDoctorSlugs.has(doctor.slug)) {
                acc[doctor.slug] = doctor.newSlug || `${doctor.slug}-ivf-specialist`;
            }
            return acc;
        }, {});

        return (
            <BestIVFCentre 
                center={center}
                cityName={cityName} 
                description={Array.isArray(center.description) ? center.description.join(' ') : center.description} 
                services={servicesWithIcons}
                doctorSlugMap={doctorSlugMap}
                faqContentData={faqContentData}
                aboutUs={aboutUs}
            />
        );
    }

    // 2. Otherwise handle as State Page
    if (!slug.startsWith('best-ivf-centre-in-')) {
        notFound();
    }

    const stateSlug = slug.replace('best-ivf-centre-in-', '');
    const filteredCentres = centresData.filter(c => c.stateSlug === stateSlug);

    if (filteredCentres.length === 0) {
        notFound();
    }

    const stateName = filteredCentres[0].state;
    const rawStateContent =
        stateContentConfig[stateSlug] || stateContentConfig.default;

    const replaceStateName = (text) =>
        typeof text === 'string' ? text.replace(/{{stateName}}/g, stateName) : text;

    const stateContentData = {
        ...rawStateContent,
        sections: (rawStateContent.sections || []).map((section) => ({
            ...section,
            heading: replaceStateName(section.heading),
            paragraphs: (section.paragraphs || []).map(replaceStateName),
            listItems: (section.listItems || []).map(replaceStateName),
            sideImage: section.sideImage ? getAssetPath(section.sideImage) : undefined,
        })),
    };

    const headingData = {
        title: `${stateName}`,
        uspTitle: rawStateContent.uspTitle,
    };

    const rawFaqs = rawStateContent.faqs || stateContentConfig.default.faqs || [];
    const stateFaqs = rawFaqs.map((faq) => ({
        question: replaceStateName(faq.question),
        answer: replaceStateName(faq.answer),
        ...(faq.listItems && { listItems: (faq.listItems || []).map(replaceStateName) }),
    }));
    const hasStateFaqs = stateFaqs.length > 0;

    return (
        <div className="cs_center_page_template">
            <Section
                className={'cs_page_heading cs_bg_filed cs_center'}
                backgroundImage={rawStateContent.headerImage || "/assets/img/Top-Header.webp"}
            >
                <PageHeading data={headingData} />
            </Section>

            {/* Intro Section */}
            <section className="cs_best_ivf_section">
                <div className="container">
                    <div className="cs_best_ivf_content">
                        {/* Main Heading from JSON with Partial Coloring */}
                        <h1 className="cs_best_ivf_title">
                            Best IVF Centres in <span className='cs_best_ivf_title_span'>{stateContentData.sections[0]?.heading.replace(/Best IVF Centres in/i, '').trim()}</span>
                        </h1>

                        {/* Description Paragraph from JSON */}
                        <div className="cs_best_ivf_description">
                            {stateContentData.sections[0]?.paragraphs?.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        {/* Service Cards - Mobile 2 Rows */}
                        <div className="cs_best_ivf_services_mobile">
                            <div className="cs_service_row">
                                {stateServicesWithIcons.slice(0, 4).map((service, idx) => {
                                    const Wrapper = service.link ? Link : 'div';
                                    const wrapperProps = service.link ? { href: service.link, className: 'cs_service_card_mobile_link' } : { className: 'cs_service_card_mobile_link' };
                                    return (
                                        <Wrapper key={idx} {...wrapperProps}>
                                            <div className="cs_service_card_mobile">
                                                <div className="cs_service_icon_box">
                                                    <Image
                                                        src={getAssetPath(service.icon)}
                                                        alt={service.title}
                                                        width={48}
                                                        height={48}
                                                        className="w-12 h-12 object-contain"
                                                    />
                                                </div>
                                                <h2 className="cs_service_title_mobile">{service.title}</h2>
                                                {service.subtitle && <p className="cs_service_subtitle_mobile">{service.subtitle}</p>}
                                            </div>
                                        </Wrapper>
                                    );
                                })}
                            </div>
                            <div className="cs_service_row">
                                {stateServicesWithIcons.slice(4, 8).map((service, idx) => {
                                    const Wrapper = service.link ? Link : 'div';
                                    const wrapperProps = service.link ? { href: service.link, className: 'cs_service_card_mobile_link' } : { className: 'cs_service_card_mobile_link' };
                                    return (
                                        <Wrapper key={idx} {...wrapperProps}>
                                            <div className="cs_service_card_mobile">
                                                <div className="cs_service_icon_box">
                                                    <Image
                                                        src={getAssetPath(service.icon)}
                                                        alt={service.title}
                                                        width={48}
                                                        height={48}
                                                        className="w-12 h-12 object-contain"
                                                    />
                                                </div>
                                                <h2 className="cs_service_title_mobile">{service.title}</h2>
                                                {service.subtitle && <p className="cs_service_subtitle_mobile">{service.subtitle}</p>}
                                            </div>
                                        </Wrapper>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Service Cards Grid - Tablet/Desktop */}
                        <div className="cs_best_ivf_services_desktop">
                            {stateServicesWithIcons.map((service, idx) => {
                                const Wrapper = service.link ? Link : 'div';
                                const wrapperProps = service.link ? { href: service.link, className: 'cs_service_card_desktop_link' } : { className: 'cs_service_card_desktop_link' };
                                return (
                                    <Wrapper key={idx} {...wrapperProps}>
                                        <div className="cs_service_card_desktop">
                                            <div className="cs_service_icon_box">
                                                <Image
                                                    src={getAssetPath(service.icon)}
                                                    alt={service.title}
                                                    width={80}
                                                    height={80}
                                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <h2 className="cs_service_title_desktop">{service.title}</h2>
                                            {service.subtitle && <p className="cs_service_subtitle_desktop">{service.subtitle}</p>}
                                        </div>
                                    </Wrapper>
                                );
                            })}
                        </div>

                        {/* Call to Action Button */}
                        <div className="cs_best_ivf_cta">
                            <a href="/contact/book-appointment" className="cs_btn cs_style_1 cs_color_1">
                                Get Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Centres List Section */}
            <Section topSpaceLg="30" topSpaceMd="30" bottomSpaceLg="80" bottomSpaceMd="50">
                <div className="container">
                    <div className="cs_service_title_section mb-10 text-center">
                        <h1 className="cs_service_main_title">
                            <span className="cs_news_media_main_title" style={{ color: '#df3655' }}>
                                OUR CENTRES
                            </span>{' '}
                            <span style={{ color: '#000000' }}>IN {stateName.toUpperCase()}</span>
                        </h1>
                    </div>
                    <div className="row cs_gap_y_40">
                        {filteredCentres.map((centre, index) => (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                                <div className="cs_centre_card_premium cs_white_bg cs_radius_15 overflow-hidden position-relative h-100 d-flex flex-column"
                                    style={{
                                        boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.08)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '15px'
                                    }}>
                                    <Link href={getCenterLink(centre)} className="cs_centre_thumbnail position-relative overflow-hidden" style={{ height: '260px', display: 'block' }}>
                                        <Image
                                            src={getAssetPath(centre.image || '/assets/img/recent_post2webp')}
                                            alt={centre.name}
                                            width={500}
                                            height={350}
                                            className="w-100 h-100"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="cs_centre_badge position-absolute" style={{ top: '20px', left: '20px', backgroundColor: 'var(--accent-color)', color: '#fff', padding: '6px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase', zIndex: '2' }}>
                                            {centre.state}
                                        </div>
                                    </Link>
                                    <div className="cs_centre_content p-4 d-flex flex-column flex-grow-1">
                                        <h3 className="cs_centre_title mb-3" style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'var(--heading-font)', color: 'var(--heading-color)', lineHeight: '1.3' }}>
                                            <Link href={getCenterLink(centre)} style={{ color: 'inherit', textDecoration: 'none' }}>
                                                {centre.name}
                                            </Link>
                                        </h3>
                                        <div className="cs_centre_location_box mb-4 flex-grow-1 d-flex align-items-start gap-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: '3px', color: 'var(--accent-color)', width: '20px', height: '20px' }}>
                                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                                            </svg>
                                            <p className="mb-0" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                                {centre.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Why Choose Us Component - Replicating from BestIVFCentre */}
            <section className="w-full py-8 sm:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section Heading matching NewsMediaSection style */}
                    <div className="cs_service_title_section mb-10">
                        <h1 className="cs_service_main_title text-center">
                            <span className="cs_news_media_main_title" style={{ color: '#df3655' }}>
                                WHY CHOOSE
                            </span>{' '}
                            <span style={{ color: '#000000' }}>SEEDS OF INNOCENS IVF</span>
                        </h1>
                    </div>
                    {/* Feature Grid - Mobile 2 Rows */}
                    <div className="d-block d-sm-none mt-4">
                        {/* Row 1 - First 4 features */}
                        <div className="flex gap-3 overflow-x-auto pb-2 mb-3 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                {[
                                {
                                    title: '35+ IVF Centres',
                                    desc: "Seeds of Innocens IVF brings you the best fertility care across India and International too. With over 35+ IVF centre, your journey to parenthood is become more closer to you. Whether you're in a metro or a smaller city, expert help is never far away.",
                                    icon: "/assets/img/icons/IVF Centres.svg",
                                },
                                {
                                    title: '20,000+ Healthy Babies',
                                    desc: 'At Seeds of Innocens IVF we have helped and fulfilled the dream of many couples who were struggling with infertility. Our commitment to quality fertility care and personalised treatment.',
                                    icon: "/assets/img/icons/Healthy Babies.svg",
                                },
                                {
                                    title: 'Upto 78% Success Rate',
                                    desc: 'At Seeds of Innocens IVF, the success rate of IVF is reported above 78%+ which is well above the global average. Moreover, it is crucial to note that success rates vary depending on factors such as the age of the patient, the specific fertility problems, and the treatment protocol.',
                                    icon: "/assets/img/icons/Success Rate.svg",
                                },
                                {
                                    title: '30+ Certified Trained Clinicians',
                                    desc: 'We have skilled fertility experts with an experience of over 20+ years. Seeds of Innocens IVF is dedicated to giving everyone access to great medical care while lowering the costs of IVF and other reproductive procedures. ',
                                    icon: "/assets/img/icons/Dedicated Fertility.svg",
                                },
                            ].map((f, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 p-4 text-center flex flex-col items-center flex-shrink-0 w-[180px] group rounded-lg bg-white"
                                >
                                    <div style={{ width: 45, height: 45, minWidth: 45, minHeight: 45, maxWidth: 45, maxHeight: 45, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                        <Image src={getAssetPath(f.icon)} alt={f.title} width={45} height={45} style={{ objectFit: 'contain', width: '100%', height: '100%', maxWidth: 45, maxHeight: 45 }} />
                                    </div>
                                    <h3 className="mt-2 font-semibold text-red-600 leading-tight" style={{ fontSize: '11px' }}>
                                        {f.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                        {/* Row 2 - Next 4 features */}
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {[
                                {
                                    title: 'Reliability',
                                    desc: 'Seeds of Innocens IVF has an industry-leading success rate of about 78%, and it is well known for its high patient satisfaction rates.',
                                    icon: "/assets/img/icons/Reliability.svg",
                                },
                                {
                                    title: 'Latest Technologies',
                                    desc: 'We use the latest technologies for diagnosing and treating cases with unconventional methods.',
                                    icon: "/assets/img/icons/Genetic Testing.svg",
                                },
                                {
                                    title: 'Customized Care',
                                    desc: 'Seeds of Innocens IVF offers quality treatment to every patient as per the individual requirement to make sure about the customized care.',
                                    icon: "/assets/img/icons/Customized Care.svg",
                                },
                                {
                                    title: 'In-House Genetic Lab',
                                    desc: 'We are proud to be recognize as the first IVF centre to have its own in-house genetic lab',
                                    icon: "/assets/img/icons/In-House Genetic.svg",
                                },
                            ].map((f, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 p-4 text-center flex flex-col items-center flex-shrink-0 w-[180px] group rounded-lg bg-white"
                                >
                                    <div style={{ width: 45, height: 45, minWidth: 45, minHeight: 45, maxWidth: 45, maxHeight: 45, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                        <Image src={getAssetPath(f.icon)} alt={f.title} width={45} height={45} style={{ objectFit: 'contain', width: '100%', height: '100%', maxWidth: 45, maxHeight: 45 }} />
                                    </div>
                                    <h3 className="mt-2 font-semibold text-red-600 leading-tight" style={{ fontSize: '11px' }}>
                                        {f.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature Grid - Tablet/Desktop */}
                    <div className="d-none d-sm-grid grid-cols-1 mt-15 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-md overflow-hidden bg-white shadow-sm" style={{ border: '1px solid #eee' }}>
                        {[
                            {
                                title: '35+ IVF Centres',
                                desc: "Seeds of Innocens IVF brings you the best fertility care across India and International too. With over 35+ IVF centre, your journey to parenthood is become more closer to you. Whether you're in a metro or a smaller city, expert help is never far away.",
                                icon: "/assets/img/icons/IVF Centres.svg",
                            },
                            {
                                title: '20,000+ Healthy Babies',
                                desc: 'At Seeds of Innocens IVF we have helped and fulfilled the dream of many couples who were struggling with infertility. Our commitment to quality fertility care and personalised treatment.',
                                icon: "/assets/img/icons/Healthy Babies.svg",
                            },
                            {
                                title: 'Upto 78% Success Rate',
                                desc: 'At Seeds of Innocens IVF, the success rate of IVF is reported above 78%+ which is well above the global average. Moreover, it is crucial to note that success rates vary depending on factors such as the age of the patient, the specific fertility problems, and the treatment protocol.',
                                icon: "/assets/img/icons/Success Rate.svg",
                            },
                            {
                                title: '30+ Certified Trained Clinicians',
                                desc: 'We have skilled fertility experts with an experience of over 20+ years. Seeds of Innocens IVF is dedicated to giving everyone access to great medical care while lowering the costs of IVF and other reproductive procedures. ',
                                icon: "/assets/img/icons/Dedicated Fertility.svg",
                            },
                            {
                                title: 'Reliability',
                                desc: 'Seeds of Innocens IVF has an industry-leading success rate of about 78%, and it is well known for its high patient satisfaction rates.',
                                icon: "/assets/img/icons/Reliability.svg",
                            },
                            {
                                title: 'Latest Technologies',
                                desc: 'We use the latest technologies for diagnosing and treating cases with unconventional methods.',
                                icon: "/assets/img/icons/Genetic Testing.svg",
                            },
                            {
                                title: 'Customized Care',
                                desc: 'Seeds of Innocens IVF offers quality treatment to every patient as per the individual requirement to make sure about the customized care.',
                                icon: "/assets/img/icons/Customized Care.svg",
                            },
                            {
                                title: 'In-House Genetic Lab',
                                desc: 'We are proud to be recognize as the first IVF centre to have its own in-house genetic lab',
                                icon: "/assets/img/icons/In-House Genetic.svg",
                            },
                        ].map((f, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-200 text-center flex flex-col items-center group" style={{ padding: '20px' }}
                            >
                                <div style={{ width: 60, height: 60, minWidth: 60, minHeight: 60, maxWidth: 60, maxHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <Image src={getAssetPath(f.icon)} alt={f.title} width={60} height={60} style={{ objectFit: 'contain', width: '100%', height: '100%', maxWidth: 60, maxHeight: 60 }} />
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

            {hasStateFaqs && (
                <Section topSpaceLg="50" topSpaceMd="40" bottomSpaceLg="80" bottomSpaceMd="50">
                    <div className="container">
                        <div className="cs_service_title_section mb-10 text-center">
                            <h1 className="cs_service_main_title">
                                <span className="cs_news_media_main_title" style={{ color: '#df3655' }}>
                                    FREQUENTLY ASKED
                                </span>{' '}
                                <span style={{ color: '#000000' }}>QUESTIONS</span>
                            </h1>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <IVFContentSection data={{ sections: [] }} faq={stateFaqs} />
                            </div>
                        </div>
                    </div>
                </Section>
            )}
        </div>
    );

};

export default DynamicPage;
