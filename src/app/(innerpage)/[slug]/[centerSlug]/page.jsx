import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import DoctorDetailsSection from '@/app/Components/DoctorDetailsSection';
import Image from 'next/image';
import Link from 'next/link';
import { FaSuitcase, FaLocationDot } from 'react-icons/fa6';
import indiaCentresData from '../../ivf-centres/india-centres-data.json';
import centerContentConfig from '../../ivf-centres/centerContent.json';
import doctorsData from '../../doctors/doctors-data.json';
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

const page = async ({ params }) => {
    const resolvedParams = await params;
    // Rename variables to match the new dynamic segment names
    const { centerSlug } = resolvedParams || {};

    if (!centerSlug) {
        notFound();
    }

    const cleanSlug = centerSlug.replace(/\/$/, '');

    // Handle IVF center route
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
        console.error(
            `Center not found for slug (city route): ${cleanSlug}, citySlug: ${citySlug}`
        );
        notFound();
    }

    const cityName = center.name.split(',')[0].trim();

    const centerDoctors = center.doctors || [];

    const headingData = {
        title: center.name,
    };

    const processedCenterImage = getAssetPath(
        center.image || '/assets/img/recent_post2.jpg'
    );

    const serviceData = {
        serviceHeading: '',
        services: [],
        mainImage: processedCenterImage,
        serviceDetails: [],
        footerText: '',
        additionalImages: processedCenterImage,
        iconBoxes: [],
        subtitle: '',
        readMoreUrl: '/appointments',
        readMoreText: 'Book Appointment',
        benefitImages: [processedCenterImage, processedCenterImage],
    };

    const mapAddress = encodeURIComponent(center.location);
    const mapUrl = `https://www.google.com/maps?q=${mapAddress}&output=embed`;

    const rawCenterContent =
        centerContentConfig[center.slug] || centerContentConfig.default;

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

    const allSections = centerContentData.sections || [];
    let topSections = allSections;
    let bottomSections = [];

    if (center.slug === 'malviya-nagar-delhi') {
        const teamIndex = allSections.findIndex(
            (s) => s.heading === 'Our Expert Team of Doctors'
        );
        const locationIndex = allSections.findIndex(
            (s) => s.heading ===
                'Location of Seeds of Innocens IVF in Malviya Nagar'
        );

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
    };

    const bottomCenterContentData =
        bottomSections.length > 0
            ? { ...centerContentData, sections: bottomSections }
            : null;

    const rawFaqs =
        (centerContentConfig[center.slug] &&
            centerContentConfig[center.slug].faqs) ||
        centerContentConfig.default.faqs ||
        [];

    const faqContentData =
        rawFaqs.length > 0
            ? {
                sections: [
                    {
                        heading: `Frequently Asked Questions`,
                        steps: rawFaqs.map((faq) => ({
                            title: replaceCityName(faq.question),
                            description: replaceCityName(faq.answer),
                        })),
                    },
                ],
            }
            : null;

    const locationContentData = {
        sections: [
            {
                paragraphs: [
                    `Open Days: All Days (Monday to Sunday)`,
                    `Timings: ${center.timing || '9:00 AM to 6:00 PM'}`,
                    `Email: ${center.email}`,
                    `Phone: ${center.phone}`,
                    `Address: ${center.location}`,
                ],
                sideImage: mapUrl,
                isMapEmbed: true,
            },
        ],
    };

    return (
        <div>
            <Section
                className={'cs_page_heading cs_bg_filed cs_center'}
                backgroundImage="/assets/img/Top-Header.jpg"
            >
                <PageHeading data={headingData} />
            </Section>

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
                                benefitImages={serviceData.benefitImages}
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {centerDoctors.length > 0 && (
                <Section
                    topSpaceLg="0"
                    topSpaceMd="0"
                    bottomSpaceLg="50"
                    bottomSpaceMd="60"
                >
                    <div className="container">
                        <div className="cs_doctors_grid cs_style_1">
                            {centerDoctors.map((doctor, index) => (
                                <div className="cs_team cs_style_1 cs_blue_bg" key={index}>
                                    <div className="cs_team_shape cs_accent_bg" />
                                    {(() => {
                                        const doctorData = doctorsData.find(
                                            (d) => d.slug === doctor.slug
                                        );
                                        const doctorLink = doctorData
                                            ? `/${doctorData.newSlug || doctorData.slug + '-ivf-specialist'}`
                                            : null;
                                        return doctorLink ? (
                                            <Link href={doctorLink} className="cs_team_thumbnail">
                                                <Image
                                                    src={getAssetPath(doctor.image)}
                                                    alt={`${doctor.name} Thumbnail`}
                                                    width={302}
                                                    height={423}
                                                    loading="eager"
                                                />
                                            </Link>
                                        ) : (
                                            <div className="cs_team_thumbnail">
                                                <Image
                                                    src={getAssetPath(doctor.image)}
                                                    alt={`${doctor.name} Thumbnail`}
                                                    width={302}
                                                    height={423}
                                                    loading="eager"
                                                />
                                            </div>
                                        );
                                    })()}
                                    <div className="cs_team_bio">
                                        <h3 className="cs_team_title cs_extra_bold mb-0">
                                            {(() => {
                                                const doctorData = doctorsData.find(
                                                    (d) => d.slug === doctor.slug
                                                );
                                                const doctorLink = doctorData
                                                    ? `/${doctorData.newSlug || doctorData.slug + '-ivf-specialist'}`
                                                    : null;
                                                return doctorLink ? (
                                                    <Link href={doctorLink}>{doctor.name}</Link>
                                                ) : (
                                                    <span>{doctor.name}</span>
                                                );
                                            })()}
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
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {bottomCenterContentData && (
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

export default page;
