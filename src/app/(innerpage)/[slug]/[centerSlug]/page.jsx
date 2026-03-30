import centresAllData from '@/app/data/centres-data.json';
const indiaCentresData = centresAllData.centres;
const centerContentConfig = centresAllData.centerContent;
import doctorsData from '@/app/data/doctors-data.json';
import { notFound } from 'next/navigation';
import { getAssetPath } from '@/app/utils/assetPath';
import BestIVFCentre from '@/app/Components/BestIVFCentre';
import { cityNameToSlug, resolveIndiaCenterFromCenterSlug } from '@/app/utils/resolveCenterFromRoute';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.seedsofinnocence.com';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export async function generateStaticParams() {
    try {
        const centerParams = indiaCentresData
            .filter((center) => center.stateSlug && !center.isInternational)
            .map((center) => {
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

                return {
                    slug: center.stateSlug, // Outer segment [slug] (Now becomes stateSlug)
                    centerSlug: slug, // Inner segment [centerSlug]
                };
            })
            .filter((param) => param.slug && param.centerSlug);

        return centerParams;
    } catch (error) {
        console.error('Error generating static params (city/slug route):', error);
        return [];
    }
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { slug: stateSlug, centerSlug } = resolvedParams || {};
    if (!centerSlug || !stateSlug) {
        return { title: 'Not Found' };
    }

    const cleanSlug = centerSlug.replace(/\/$/, '');
    const center = resolveIndiaCenterFromCenterSlug(cleanSlug, indiaCentresData);
    if (!center) {
        return { title: 'Not Found' };
    }

    const cityName = center.name.split(',')[0].trim();
    const defaultDesc = Array.isArray(center.description)
        ? center.description[0]
        : center.description ||
          `IVF and fertility care at Seeds of Innocens in ${cityName}.`;
    const title =
        center.metaTitle || `${center.name} | Best IVF Centre | Seeds of Innocens`;
    const description = center.metaDescription || defaultDesc;

    const path = `${basePath}/${stateSlug}/${cleanSlug}/`.replace(/\/{2,}/g, '/');
    const canonicalUrl = `${SITE_URL}${path}`;
    const ogImage = center.image || '/assets/img/Top-Header.png';
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

const page = async ({ params }) => {
    const resolvedParams = await params;
    const { centerSlug } = resolvedParams || {};

    if (!centerSlug) {
        notFound();
    }

    const cleanSlug = centerSlug.replace(/\/$/, '');
    const center = resolveIndiaCenterFromCenterSlug(cleanSlug, indiaCentresData);

    if (!center) {
        notFound();
    }

    const cityName = center.name.split(',')[0].trim();
    const processedCenterImage = getAssetPath(center.image || '/assets/img/recent_post2.jpg');
    
    // Map Address for Google Maps
    const mapAddress = encodeURIComponent(center.location);
    const mapUrl = `https://www.google.com/maps?q=${mapAddress}&output=embed`;

    // Fetch Content and Services with Icons
    const rawCenterContent = centerContentConfig[center.slug] || centerContentConfig.default;
    const servicesWithIcons = rawCenterContent.servicesWithIcons || centerContentConfig.default.servicesWithIcons;

    const replaceCityName = (text) =>
        typeof text === 'string' ? text.replace(/{{cityName}}/g, cityName) : text;

    const centerContentData = {
        ...rawCenterContent,
        sections: (rawCenterContent.sections || []).map((section, index) => ({
            ...section,
            heading: replaceCityName(section.heading),
            paragraphs: (section.paragraphs || []).map(replaceCityName),
            listItems: (section.listItems || []).map(replaceCityName),
            sideImage: index === 0 ? processedCenterImage : section.sideImage,
        })),
    };

    const firstSection = centerContentData.sections[0];
    const allSections = centerContentData.sections.slice(1);
    
    let topSections = allSections;
    let bottomSections = [];

    // Special logic for Malviya Nagar section ordering
    if (center.slug === 'malviya-nagar-delhi') {
        const teamIndex = allSections.findIndex((s) => s.heading === 'Our Expert Team of Doctors');
        const locationIndex = allSections.findIndex((s) => s.heading === 'Location of Seeds of Innocens IVF in Malviya Nagar');

        if (teamIndex !== -1) {
            topSections = allSections.slice(0, teamIndex + 1);
            if (locationIndex !== -1 && locationIndex > teamIndex) {
                bottomSections = allSections.slice(locationIndex);
            } else {
                bottomSections = allSections.slice(teamIndex + 1);
            }
        }
    }

    const topCenterContentData = {
        ...centerContentData,
        sections: topSections,
        _benefitImages: [processedCenterImage, processedCenterImage]
    };

    // FAQ: centre-specific or default, with {{cityName}} replaced (for FAQ accordion)
    const rawFaqs = (centerContentConfig[center.slug] && centerContentConfig[center.slug].faqs) || centerContentConfig.default?.faqs || [];
    const centerFaqs = rawFaqs.map((faq) => ({
        question: replaceCityName(faq.question),
        answer: replaceCityName(faq.answer),
        ...(faq.listItems && { listItems: faq.listItems.map(replaceCityName) }),
    }));
    const faqContentData = rawFaqs.length > 0 ? { sections: [] } : null;

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
            description={Array.isArray(center.description) ? center.description.join(' ') : (center.description || firstSection?.paragraphs?.join(' '))}
            services={servicesWithIcons}
            doctorSlugMap={doctorSlugMap}
            faqContentData={faqContentData}
            faq={centerFaqs}
            aboutUs={aboutUs}
        />
    );
};

export default page;




