import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import DoctorDetailsSection from '@/app/Components/DoctorDetailsSection';
import Image from 'next/image';
import Link from 'next/link';
import { FaSuitcase, FaLocationDot } from 'react-icons/fa6';
import centresAllData from '../../ivf-centres/centres-data.json';
const indiaCentresData = centresAllData.centres;
const centerContentConfig = centresAllData.centerContent;
import doctorsData from '@/app/data/doctors-data.json';
import { notFound } from 'next/navigation';
import { getAssetPath } from '@/app/utils/assetPath';

function cityNameToSlug(cityName) {
    return cityName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

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

import BestIVFCentre from '@/app/Components/BestIVFCentre';

const page = async ({ params }) => {
    const resolvedParams = await params;
    const { centerSlug } = resolvedParams || {};

    if (!centerSlug) {
        notFound();
    }

    const cleanSlug = centerSlug.replace(/\/$/, '');
    const citySlug = cleanSlug.replace(/^best-ivf-centre-in-/, '');

    let center;
    if (
        cleanSlug === 'best-ivf-centre-in-delhi' ||
        cleanSlug === 'best-ivf-centre-in-malviyanagar'
    ) {
        center = indiaCentresData.find((c) => {
            return (
                c.name === 'Malviya Nagar, Delhi' &&
                c.stateSlug === 'delhi' &&
                !c.isInternational
            );
        });
    } else {
        center = indiaCentresData.find((c) => {
            if (c.isInternational) {
                return false;
            }
            const cityName = c.name.split(',')[0].trim();
            const centerCitySlug = cityNameToSlug(cityName);
            return centerCitySlug === citySlug;
        });
    }

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

    return (
        <BestIVFCentre
            center={center}
            cityName={cityName}
            description={Array.isArray(center.description) ? center.description.join(' ') : (center.description || firstSection?.paragraphs?.join(' '))}
            services={servicesWithIcons}
            doctorsData={doctorsData}
            faqContentData={faqContentData}
            faq={centerFaqs}
        />
    );
};

export default page;




