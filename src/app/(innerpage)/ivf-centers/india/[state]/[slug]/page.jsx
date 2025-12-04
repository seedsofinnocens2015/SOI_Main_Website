import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import LocationMap from '@/app/Components/LocationMap/Index';
import IconBox from '@/app/Components/IconBox';
import indiaCentersData from '../../../india-centers-data.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  try {
    return indiaCentersData.map((center) => ({
      state: center.stateSlug || '',
      slug: center.slug || '',
    })).filter((param) => param.state && param.slug);
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

const page = async ({ params }) => {
  const resolvedParams = await params;
  const { state, slug } = resolvedParams || {};
  
  if (!state || !slug) {
    notFound();
  }
  
  // Find center by slug and state
  const center = indiaCentersData.find(
    (c) => c.slug === slug && c.stateSlug === state
  );

  if (!center) {
    notFound();
  }

  // Get other centers from same state for related services
  const otherCenters = indiaCentersData
    .filter((c) => c.slug !== slug && c.stateSlug === state)
    .slice(0, 3)
    .map((c) => ({
      title: c.name,
      url: `/ivf-centers/india/${c.stateSlug}/${c.slug}`,
    }));

  // If not enough from same state, add others
  if (otherCenters.length < 3) {
    const additionalCenters = indiaCentersData
      .filter((c) => c.slug !== slug && !otherCenters.find((oc) => oc.url.includes(c.slug)))
      .slice(0, 3 - otherCenters.length)
      .map((c) => ({
        title: c.name,
        url: `/ivf-centers/india/${c.stateSlug}/${c.slug}`,
      }));
    otherCenters.push(...additionalCenters);
  }

  const headingData = {
    title: center.name,
  };

  const serviceData = {
    serviceHeading: 'Other Centers:',
    services: otherCenters.length > 0 ? otherCenters : [
      { title: 'Malviya Nagar, Delhi', url: '/ivf-centers/india/delhi/malviya-nagar-delhi' },
      { title: 'Gurugram, Haryana', url: '/ivf-centers/india/haryana/gurugram-haryana' },
      { title: 'Kolkata', url: '/ivf-centers/india/west-bengal/kolkata' },
    ],
    mainImage: center.image || '/assets/img/recent_post_1.png',
    serviceDetails: center.description || [],
    footerText: `Visit our ${center.name} center for world-class fertility treatments. Our experienced team is dedicated to helping you achieve your dream of parenthood with personalized care and advanced technology.`,
    additionalImages: center.image || '/assets/img/recent_post_1.png',
    iconBoxes: [
      {
        index: '01',
        title: 'State-of-the-Art Facilities',
        subtitle: 'Modern infrastructure with advanced technology',
        icon: '/assets/img/icons/service_icon_1.png',
        bgImage: '/assets/img/service_bg.jpg',
        link: '/appointments',
      },
      {
        index: '02',
        title: 'Expert Team',
        subtitle: 'Experienced fertility specialists and embryologists',
        icon: '/assets/img/icons/service_icon_2.png',
        bgImage: '/assets/img/service_bg.jpg',
        link: '/doctors',
      },
    ],
    subtitle: `Comprehensive fertility care at ${center.name}`,
    readMoreUrl: '/appointments',
    readMoreText: 'Book Appointment',
  };

  const counterData = [
    {
      iconSrc: '/assets/img/icons/counter_icon_1.png',
      countTo: 85,
      suffix: '%',
      title: 'Success Rate',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_2.png',
      countTo: 5000,
      suffix: '+',
      title: 'Successful Pregnancies',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_3.png',
      countTo: 95,
      suffix: '%',
      title: 'Patient Satisfaction',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_4.png',
      countTo: 20,
      suffix: '+',
      title: 'India Centers',
    },
  ];

  // Generate Google Maps URL
  const mapAddress = encodeURIComponent(center.location);
  const mapUrl = `https://www.google.com/maps?q=${mapAddress}&output=embed`;

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <ServiceSection4 data={serviceData} />
      </Section>

      {/* Center Information Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_doctor_info_wrapper">
                <div className="cs_doctor_info_row">
                  <div className="cs_doctor_info_col">
                    <div className="cs_iconbox cs_style_10">
                      <IconBox type="location" />
                      <div className="cs_iconbox_text">
                        <h3 className="cs_iconbox_title">Address</h3>
                        <p className="cs_iconbox_subtitle mb-0">
                          {center.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="cs_doctor_info_col">
                    <div className="cs_iconbox cs_style_10">
                      <IconBox type="phone" />
                      <div className="cs_iconbox_text">
                        <h3 className="cs_iconbox_title">Phone</h3>
                        <p className="cs_iconbox_subtitle mb-0">
                          <Link href={`tel:${center.phone}`}>{center.phone}</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cs_doctor_info_row">
                  <div className="cs_doctor_info_col">
                    <div className="cs_iconbox cs_style_10">
                      <IconBox type="email" />
                      <div className="cs_iconbox_text">
                        <h3 className="cs_iconbox_title">Email</h3>
                        <p className="cs_iconbox_subtitle mb-0">
                          <Link href={`mailto:${center.email}`}>{center.email}</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="cs_doctor_info_col">
                    <div className="cs_iconbox cs_style_10">
                      <IconBox type="clock" />
                      <div className="cs_iconbox_text">
                        <h3 className="cs_iconbox_title">Timing</h3>
                        <p className="cs_iconbox_subtitle mb-0">
                          {center.timing}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_service_details">
                <h3 className="cs_service_heading">Services Offered:</h3>
                <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                  {center.services && center.services.length > 0 ? center.services.map((service, index) => (
                    <li key={index} style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)' }}>✓</span>
                      {service}
                    </li>
                  )) : (
                    <li>Services information coming soon</li>
                  )}
                </ul>
                {center.doctors && center.doctors.length > 0 && (
                  <>
                    <div className="cs_height_20 cs_height_lg_20" />
                    <h3 className="cs_service_heading">Available Doctors:</h3>
                    <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                      {center.doctors.map((doctor, index) => (
                        <li key={index} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)' }}>•</span>
                          {doctor}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section bottomSpaceLg="70" bottomSpaceMd="120">
        <CounterSection2 data={counterData} />
      </Section>

      {/* Map Section */}
      <Section bottomSpaceLg="0" bottomSpaceMd="0">
        <LocationMap mapSrc={mapUrl} />
      </Section>
    </div>
  );
};

export default page;

