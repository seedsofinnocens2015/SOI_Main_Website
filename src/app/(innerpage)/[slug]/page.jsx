import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';
import centresData from '../ivf-centres/india-centres-data.json';
import stateContentConfig from '../ivf-centres/stateContent.json';
import { notFound } from 'next/navigation';
import { getAssetPath } from '@/app/utils/assetPath';
import IVFContentSection from '@/app/Components/IVFContentSection';

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
    const stateSlug = slug.replace('best-ivf-center-in-', '');
    const filteredCentres = centresData.filter(c => c.stateSlug === stateSlug);

    if (filteredCentres.length === 0) {
        return {
            title: 'Best IVF Centres',
        };
    }

    const stateName = filteredCentres[0].state;
    return {
        title: `Best IVF Centre in ${stateName} | Seeds of Innocens`,
        description: `Looking for the best IVF centre in ${stateName}? Seeds of Innocens offers advanced fertility treatments with high success rates and experienced specialists in ${stateName}.`,
    };
}

export async function generateStaticParams() {
    try {
        const states = [...new Set(centresData.filter(c => !c.isInternational).map(c => c.stateSlug))];
        return states.map(stateSlug => ({
            slug: `best-ivf-center-in-${stateSlug}`
        }));
    } catch (error) {
        console.error('Error in generateStaticParams:', error);
        return [];
    }
}

const StatePage = async ({ params }) => {
    const { slug } = await params;

    if (!slug || !slug.startsWith('best-ivf-center-in-')) {
        notFound();
    }

    const stateSlug = slug.replace('best-ivf-center-in-', '');
    const filteredCentres = centresData.filter(c => c.stateSlug === stateSlug);

    if (filteredCentres.length === 0) {
        notFound();
    }

    const stateName = filteredCentres[0].state;

    const headingData = {
        title: `${stateName}`,
    };

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

    const faqs = rawStateContent.faqs || stateContentConfig.default.faqs || [];

    const faqContentData =
        faqs.length > 0
            ? {
                sections: [
                    {
                        steps: faqs.map((faq) => ({
                            title: replaceStateName(faq.question),
                            description: replaceStateName(faq.answer),
                        })),
                    },
                ],
            }
            : null;

    return (
        <>
            <Section
                className={'cs_page_heading cs_bg_filed cs_center'}
                backgroundImage="/assets/img/Top-Header.jpg"
            >
                <PageHeading data={headingData} />
            </Section>

            <Section topSpaceLg="50" topSpaceMd="60" bottomSpaceLg="50" bottomSpaceMd="60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <IVFContentSection data={stateContentData} />
                        </div>
                    </div>
                </div>
            </Section>

            <Section topSpaceLg="30" topSpaceMd="30" bottomSpaceLg="80" bottomSpaceMd="50">
                <div className="container">
                    <h2 className="cs_section_heading cs_style_1 text-center mb-5">Our Centres in {stateName}</h2>
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
                                            src={getAssetPath(centre.image || '/assets/img/recent_post2.jpg')}
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

            {faqContentData && (
                <Section topSpaceLg="50" topSpaceMd="40" bottomSpaceLg="80" bottomSpaceMd="50">
                    <div className="container">
                        <div className="cs_section_heading cs_style_1 text-center mb-5">
                            <h2 className="cs_section_title">Frequently Asked Questions</h2>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <IVFContentSection data={faqContentData} />
                            </div>
                        </div>
                    </div>
                </Section>
            )}
        </>
    );
};

export default StatePage;
