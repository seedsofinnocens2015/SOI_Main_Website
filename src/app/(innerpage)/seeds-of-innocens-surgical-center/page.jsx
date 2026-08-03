import Image from 'next/image';
import AccentHeading from '@/app/Components/AccentHeading';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import { getAssetPath } from '@/app/utils/assetPath';
import surgicalCenterData from '@/app/data/surgicalCenterData.json';
import styles from './surgicalCenter.module.scss';
import SurgicalConsultationModal from './SurgicalConsultationModal';

export const metadata = {
  title: surgicalCenterData.seo.title,
  description: surgicalCenterData.seo.description,
  alternates: {
    canonical: '/seeds-of-innocens-surgical-center/',
  },
};

export default function SurgicalCenterPage() {
  const { hero, patientChoice, introduction, procedures, whyChoose, journey, cta } = surgicalCenterData;

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
