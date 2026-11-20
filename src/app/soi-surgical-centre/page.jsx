import Image from 'next/image';
import Link from 'next/link';
import { FaLocationDot, FaSuitcase } from 'react-icons/fa6';
import AccentHeading from '@/app/Components/AccentHeading';
import FAQAccordion from '@/app/Components/FAQAccordion';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TestimonialSection from '@/app/Components/TestimonialSection';
import { getAssetPath } from '@/app/utils/assetPath';
import { fetchResolvedSeo } from '@/app/utils/seoMetadata';
import surgicalCenterData from '@/app/data/surgicalCenterData.json';
import styles from './surgicalCenter.module.scss';
import SurgicalConsultationModal from './SurgicalConsultationModal';
import SurgicalContactSection from './SurgicalContactSection';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const fallbackTitle = surgicalCenterData?.seo?.title
    ? `${surgicalCenterData.seo.title} | Advanced Gynecological Surgery`
    : 'Seeds of Innocence Surgical Centre | Advanced Laparoscopic & Hysteroscopic Surgery';
  const fallbackDesc = surgicalCenterData?.seo?.description ||
    'Seeds of Innocence (SOI) Surgical Centre offers state-of-the-art laparoscopic and hysteroscopic procedures for fibroids, polyps, endometriosis, and fertility preservation in Delhi NCR.';
  const canonicalUrl = 'https://soisurgicalcentre.seedsofinnocens.com/';

  // Attempt to fetch SEO overrides if available in CMS
  const seo = await fetchResolvedSeo('/seeds-of-innocens-surgical-center').catch(() => null);

  const title = seo?.pageTitle || fallbackTitle;
  const description = seo?.metaDescription || fallbackDesc;

  return {
    metadataBase: new URL('https://soisurgicalcentre.seedsofinnocens.com'),
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: seo?.ogTitle || title,
      description: seo?.ogDescription || description,
      url: canonicalUrl,
      siteName: 'Seeds of Innocence Surgical Centre',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: '/assets/img/Services/OpenSurgery.webp',
          width: 1200,
          height: 630,
          alt: 'Seeds of Innocence Surgical Centre',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle || title,
      description: seo?.twitterDescription || description,
      images: ['/assets/img/Services/OpenSurgery.webp'],
    },
  };
}

const ABOUT_PILLARS = [
  {
    number: '01',
    title: 'NABH & Modular OT Infrastructure',
    description:
      'Ultra-clean laminar airflow operation theatres equipped with German Karl Storz 4K/3D visualization towers for extreme surgical precision and near-zero infection risk.',
  },
  {
    number: '02',
    title: 'Fertility Preservation First',
    description:
      'Every surgical technique—from fibroid myomectomy to endometriosis excision—is executed with micro-instruments to preserve natural ovarian reserve and uterine integrity for future conception.',
  },
  {
    number: '03',
    title: 'Daycare & Fast Recovery Protocols',
    description:
      'Minimally invasive keyhole approaches allow same-day or 24-hour discharge, minimal post-operative pain, and rapid resumption of regular daily activities within days.',
  },
];

const SPECIALIZED_CONDITIONS = [
  {
    icon: '🌸',
    title: 'Laparoscopic Myomectomy',
    description:
      'Precision keyhole removal of single or multiple uterine fibroids with multilayer suturing to preserve future pregnancy carrying capacity.',
  },
  {
    icon: '🔬',
    title: 'Operative Hysteroscopy',
    description:
      'Incision-free diagnosis and removal of endometrial polyps, uterine septum, and retained tissue with same-day discharge.',
  },
  {
    icon: '🩺',
    title: 'Endometriosis & Chocolate Cysts',
    description:
      'Advanced laparoscopic excision of deep infiltrating endometriosis and ovarian endometriomas, relieving chronic pelvic pain.',
  },
  {
    icon: '✨',
    title: 'Tubal Cannulation & Recanalization',
    description:
      'Hysteroscopic and laparoscopic opening of blocked fallopian tubes to re-establish natural fertility without immediate IVF.',
  },
  {
    icon: '🛡️',
    title: 'Asherman’s Syndrome (Adhesiolysis)',
    description:
      'Gentle hysteroscopic separation of intrauterine adhesions with specialized anti-adhesion barriers to restore healthy menstrual flow.',
  },
  {
    icon: '⚡',
    title: 'Laparoscopic Ovarian Drilling (LOD)',
    description:
      'Minimally invasive electrocautery micropuncture for medication-resistant PCOS to restore spontaneous ovulatory cycles.',
  },
];

const DAYCARE_BENEFITS = [
  'Zero Visible Surgical Scars',
  'Same-Day / 24-Hour Discharge',
  'Minimal Blood Loss & Gentle Recovery',
  'Return to Work in 3–5 Days',
  '100% Cashless Insurance / TPA Support',
];

const TESTIMONIAL_METRICS = [
  { value: '10,000+', label: 'Minimally Invasive Surgeries' },
  { value: '99.2%', label: 'Clinical Procedure Success' },
  { value: '24 Hours', label: 'Average Daycare Stay' },
  { value: '4.9 / 5', label: 'Patient Satisfaction Rating' },
];

const surgicalTestimonialsData = {
  sectionTitle: {
    part1: 'PATIENT',
    part2: 'TESTIMONIALS',
  },
  sectionSubtitle: {
    part1: 'Hear from our patients who experienced compassionate, minimally invasive surgical care.',
    part2: '',
  },
  description: '',
  thumbnail: '/assets/img/new.svg',
  testimonials: [
    {
      rating: 5,
      subtitle:
        'I had multiple fibroids and was very nervous about surgery. At Seeds of Innocence, the surgical team performed keyhole laparoscopy. Pain was negligible, incisions were tiny, and I was back on my feet the next day. Forever grateful!',
      avatar: '/assets/img/1.png',
      name: 'Sunita Verma',
      position: 'Patient, New Delhi',
    },
    {
      rating: 5,
      subtitle:
        'After two years of fertility struggles, Dr. Gauri and the team identified and removed a uterine polyp via operative hysteroscopy. The care, explanation, and advanced equipment gave us complete peace of mind.',
      avatar: '/assets/img/2.png',
      name: 'Priya & Rahul Sharma',
      position: 'Happy Couple, Noida',
    },
    {
      rating: 5,
      subtitle:
        'The specialized laparoscopic surgery for endometriosis relieved years of severe pelvic pain. The doctors explained every step with compassion. Highly recommend SOI Surgical Centre for any gynecological procedure.',
      avatar: '/assets/img/3.png',
      name: 'Neha Agarwal',
      position: 'Patient, Gurugram',
    },
    {
      rating: 5,
      subtitle:
        'From initial consultation to post-operative recovery, everything was seamless. The surgeons handled my tubal cannulation with precision. Seeds of Innocence gave us hope when other clinics could not.',
      avatar: '/assets/img/1.png',
      name: 'Anjali & Vikram Singh',
      position: 'Patients, Lucknow',
    },
    {
      rating: 5,
      subtitle:
        'I was admitted for an ovarian cystectomy. The daycare setup was so efficient that I was discharged within 24 hours with negligible pain. Highly professional doctors and caring nursing staff.',
      avatar: '/assets/img/2.png',
      name: 'Meenakshi Roy',
      position: 'Patient, Kolkata',
    },
    {
      rating: 5,
      subtitle:
        'Diagnosed with a uterine septum that caused recurrent miscarriages. The hysteroscopic resection at SOI was quick and painless. Today I am 6 months pregnant. Thank you SOI team!',
      avatar: '/assets/img/3.png',
      name: 'Kavita Choudhary',
      position: 'Patient, Ghaziabad',
    },
  ],
};

export default function SurgicalCenterSubdomainPage() {
  const { hero, patientChoice, introduction, additionalContent, procedures, whyChoose, expertTeam, journey, cta, faqs } = surgicalCenterData;

  return (
    <main className={styles.page} id="home">
      {/* 1. Hero Section (Home) */}
      <Section
        className="cs_page_heading cs_bg_filed cs_center"
        backgroundImage={hero.backgroundImage}
      >
        <div id="hero-form" style={{ width: '100%' }}>
          <PageHeading data={{ uspTitle: hero.title, formType: 'surgical', hideStatsGrid: true }} />
        </div>
      </Section>

      {/* 2. Top Introduction & Patient Choice */}
      <Section className={styles.heroIntro} topSpaceLg="45" topSpaceMd="55" bottomSpaceLg="45" bottomSpaceMd="55">
        <div className="container">
          <AccentHeading className={styles.centerHeading}>{hero.contentHeading}</AccentHeading>
          <p>{hero.description}</p>
          <AccentHeading className={styles.centerHeading}>{patientChoice.heading}</AccentHeading>
          <div className="row cs_gap_y_20">
            {patientChoice.items.map((item) => (
              <div className="col-lg col-md-6" key={item}>
                <div className={styles.statCard}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section topSpaceLg="70" topSpaceMd="90" bottomSpaceLg="70" bottomSpaceMd="90">
        <div className="container">
          {additionalContent?.length > 0 && (
            <div className={styles.introAdditionalContent}>
              {additionalContent.map((block, idx) => (
                <div key={idx} className={styles.introContentBlock}>
                  <AccentHeading
                    level={block.tag === 'h3' ? 3 : 2}
                    className={styles.centerHeading}
                  >
                    {block.heading}
                  </AccentHeading>
                  {block.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className={styles.bodyText}>
                      {para}
                    </p>
                  ))}

                  {/* Place the surgical image nicely after the first content block */}
                  {idx === 0 && introduction?.image && (
                    <div className={styles.centerContentImage}>
                      <Image
                        src={getAssetPath(introduction.image)}
                        alt={introduction.imageAlt || 'Seeds of Innocence Surgical Centre'}
                        width={820}
                        height={460}
                        sizes="(max-width: 991px) 100vw, 820px"
                        priority
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* 3. Treatments & Procedures Section (#treatments) */}
      <section id="treatments" style={{ scrollMarginTop: '85px' }}>
        <Section className={styles.softSection} topSpaceLg="70" topSpaceMd="90" bottomSpaceLg="70" bottomSpaceMd="90">
          <div className="container">
            <div className={styles.sectionBadgeWrapper}>
              <span className={styles.sectionBadge}>Treatments & Procedures</span>
              <h2 className={styles.aboutMainTitle}>
                Advanced Daycare <span className="cs_accent_color">Minimally Invasive Surgeries</span>
              </h2>
              <p className={styles.aboutMainSubtitle}>
                We offer modern laparoscopic and hysteroscopic procedures aimed at resolving complex gynecological conditions with minimal discomfort, negligible blood loss, and zero impact on future conception.
              </p>
            </div>

            {/* Existing Procedures Cards */}
            <div className="row cs_gap_y_30">
              {procedures.map((procedure, index) => (
                <div className="col-lg-4 col-md-6" key={procedure.title}>
                  <article className={styles.serviceCard}>
                    <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{procedure.title}</h3>
                    <p>{procedure.description}</p>
                    {procedure.listHeading && <strong>{procedure.listHeading}</strong>}
                    {procedure.items && (
                      <ul>
                        {procedure.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                  </article>
                </div>
              ))}
            </div>

            {/* Specialized Conditions & Treatments Grid */}
            <div className={styles.treatmentsGridHeader}>
              <AccentHeading level={3} className={styles.centerHeading}>
                Specialized Conditions We Treat
              </AccentHeading>
              <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>
                Comprehensive surgical solutions tailored specifically for women’s reproductive health and fertility preservation.
              </p>
            </div>

            <div className={`row cs_gap_y_20 ${styles.treatmentsConditionsGrid}`}>
              {SPECIALIZED_CONDITIONS.map((cond) => (
                <div className="col-lg-4 col-md-6" key={cond.title}>
                  <div className={styles.conditionCard}>
                    <div className={styles.conditionIcon} aria-hidden="true">
                      {cond.icon}
                    </div>
                    <div>
                      <h4>{cond.title}</h4>
                      <p>{cond.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Daycare Surgical Advantage Strip */}
            <div className={styles.daycareStrip}>
              <div className={styles.daycareStripHeading}>
                The Seeds of Innocence <span>Daycare Advantage</span>
              </div>
              <div className={styles.daycareGrid}>
                {DAYCARE_BENEFITS.map((benefit) => (
                  <div className={styles.daycareItem} key={benefit}>
                    <span className={styles.checkMark}>✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* 4. Why Choose Us Section */}
      <Section topSpaceLg="70" topSpaceMd="90" bottomSpaceLg="70" bottomSpaceMd="90">
        <div className="container">
          <AccentHeading className={styles.centerHeading}>
            {whyChoose.heading}
          </AccentHeading>
          <h3 className={styles.subheading}>{whyChoose.subheading}</h3>
          <div className="row cs_gap_y_30">
            {whyChoose.items.map((item) => (
              <div className="col-lg-6" key={item.title}>
                <article className={styles.featureCard}>
                  <span className={styles.featureIcon} aria-hidden="true">✓</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.points && (
                      <ul>
                        {item.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Our Expert Team of Doctors */}
      {expertTeam?.doctors?.length > 0 && (
        <Section topSpaceLg="50" topSpaceMd="40" bottomSpaceLg="50" bottomSpaceMd="60">
          <div className="container">
            <div className="cs_section_heading cs_style_1 text-center mb-5">
              <h2 className="cs_section_title">
                Our Expert <span style={{ color: '#000000' }}>Team of Doctors</span>
              </h2>
            </div>
            <div className="cs_doctors_grid cs_style_1">
              {expertTeam.doctors.map((doctor) => (
                <div className="cs_team cs_style_1 cs_blue_bg" key={doctor.name}>
                  <div className="cs_team_shape cs_accent_bg" />
                  {doctor.profileUrl ? (
                    <Link href={doctor.profileUrl} className="cs_team_thumbnail">
                      <Image
                        src={getAssetPath(doctor.image)}
                        alt={doctor.imageAlt || doctor.name}
                        width={302}
                        height={423}
                        loading="lazy"
                      />
                    </Link>
                  ) : (
                    <div className="cs_team_thumbnail">
                      <Image
                        src={getAssetPath(doctor.image)}
                        alt={doctor.imageAlt || doctor.name}
                        width={302}
                        height={423}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="cs_team_bio">
                    <h3 className="cs_team_title cs_extra_bold mb-0">
                      {doctor.profileUrl ? <Link href={doctor.profileUrl}>{doctor.name}</Link> : doctor.name}
                    </h3>
                    {doctor.subtitle && <p className="cs_team_subtitle">{doctor.subtitle}</p>}
                    {doctor.experience && (
                      <p className="cs_team_experience">
                        <FaSuitcase aria-hidden="true" />
                        <span>{doctor.experience} Experience</span>
                      </p>
                    )}
                    {doctor.location && (
                      <p className="cs_team_location">
                        <FaLocationDot aria-hidden="true" />
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

      {/* 6. Patient Journey */}
      <Section className={styles.journeySection} topSpaceLg="70" topSpaceMd="90" bottomSpaceLg="70" bottomSpaceMd="90">
        <div className="container">
          <AccentHeading className={styles.centerHeading}>
            {journey.heading}
          </AccentHeading>
          <div className="row cs_gap_y_30">
            {journey.steps.map((step) => (
              <div className="col-lg-3 col-md-6" key={step.number}>
                <article className={styles.journeyCard}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. Testimonials Section (#testimonials) */}
      <section id="testimonials" className={styles.testimonialsSection}>
        <div className="container text-center">
            <span className={styles.sectionBadge}>Testimonials</span>           
          <TestimonialSection data={surgicalTestimonialsData} />
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <Section topSpaceLg="60" topSpaceMd="75" bottomSpaceLg="50" bottomSpaceMd="70">
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h2>{cta.heading}</h2>
              <p>{cta.description}</p>
              <p className={styles.supportingText}>{cta.supportingText}</p>
            </div>
            <SurgicalConsultationModal buttonText={cta.buttonText} />
          </div>
        </div>
      </Section>

      {/* 9. About Us Section (#about-us) - Placed directly above Contact Us */}
      <section id="about-us" className={styles.dedicatedAboutSection} style={{ scrollMarginTop: '85px' }}>
        <Section topSpaceLg="65" topSpaceMd="75" bottomSpaceLg="65" bottomSpaceMd="75">
          <div className="container">
            <div className={styles.sectionBadgeWrapper}>
              <span className={styles.sectionBadge}>About Us</span>
              <h2 className={styles.aboutMainTitle}>
                About Seeds of Innocence <span className="cs_accent_color">Surgical Centre</span>
              </h2>
              <p className={styles.aboutMainSubtitle}>
                Seeds of Innocence Surgical Centre is a dedicated unit of clinical excellence specializing in advanced minimally invasive gynecological surgeries. Led by expert laparoscopic and hysteroscopic surgeons, our mission is to deliver painless, scarless treatments while safeguarding every woman’s reproductive health and future fertility.
              </p>
            </div>

            {/* Strategic Pillars of Care */}
            <div className={styles.aboutPillarsGrid}>
              <div className="row cs_gap_y_24">
                {ABOUT_PILLARS.map((pillar) => (
                  <div className="col-lg-4 col-md-6" key={pillar.number}>
                    <div className={styles.pillarCard}>
                      <span className={styles.pillarNumber}>{pillar.number}</span>
                      <h4>{pillar.title}</h4>
                      <p>{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* 10. Contact Us Section (#contact-us) */}
      <section id="contact-us">
        <SurgicalContactSection />
      </section>

      {/* 10. Frequently Asked Questions */}
      {faqs?.length > 0 && (
        <Section
          topSpaceLg="40"
          topSpaceMd="40"
          bottomSpaceLg="70"
          bottomSpaceMd="100"
        >
          <div className="container">
            <div className="cs_service_title_section mb-4">
              <h3 className="cs_service_main_title text-center">
                <span className="cs_news_media_main_title" style={{ color: '#df3655' }}>
                  FREQUENTLY ASKED
                </span>{' '}
                <span style={{ color: '#000000' }}>QUESTIONS</span>
              </h3>
            </div>
            <div className="row">
              <div className="col-12">
                <FAQAccordion faqs={faqs} />
              </div>
            </div>
          </div>
        </Section>
      )}
    </main>
  );
}
