import Image from 'next/image';
import Link from 'next/link';
import { FaLocationDot, FaSuitcase } from 'react-icons/fa6';
import AccentHeading from '@/app/Components/AccentHeading';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import { getAssetPath } from '@/app/utils/assetPath';
import { getSeoMetadata } from '@/app/utils/seoMetadata';
import surgicalCenterData from '@/app/data/surgicalCenterData.json';
import styles from './surgicalCenter.module.scss';
import SurgicalConsultationModal from './SurgicalConsultationModal';

// Keep SEO panel changes server-rendered for this page instead of freezing
// whichever API response happened to be available during a large static build.
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/seeds-of-innocens-surgical-center',
    hierarchyCandidates: [['Quick Links'], []],
  });
}

export default function SurgicalCenterPage() {
  const { hero, patientChoice, introduction, procedures, whyChoose, expertTeam, journey, cta } = surgicalCenterData;

  return (
    <main className={styles.page}>
      <Section
        className="cs_page_heading cs_bg_filed cs_center"
        backgroundImage={hero.backgroundImage}
      >
        <PageHeading data={{ uspTitle: hero.title, formType: 'surgical' }} />
      </Section>

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
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div className={styles.introImage}>
                <Image
                  src={getAssetPath(introduction.image)}
                  alt={introduction.imageAlt}
                  width={760}
                  height={570}
                  sizes="(max-width: 991px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="col-lg-6">
              <AccentHeading className={styles.sectionHeading}>
                {introduction.heading}
              </AccentHeading>
              <p className={styles.bodyText}>{introduction.paragraph}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.softSection} topSpaceLg="70" topSpaceMd="90" bottomSpaceLg="70" bottomSpaceMd="90">
        <div className="container">
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
        </div>
      </Section>

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

      <Section topSpaceLg="60" topSpaceMd="75" bottomSpaceLg="70" bottomSpaceMd="90">
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
    </main>
  );
}
