import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaLocationDot, FaEnvelope } from 'react-icons/fa6';
import { FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import {
  FaMicroscope,
  FaUserMd,
  FaClipboardList,
  FaChartLine,
  FaCheckCircle,
  FaShieldAlt,
  FaUserCheck,
  FaFlask,
} from 'react-icons/fa';
import { getAssetPathClient } from '../../utils/assetPath';
import RelatedServices from '@/app/Components/RelatedServices';
import FAQAccordion from '@/app/Components/FAQAccordion';

const TREATMENT_PAGE_KEYS = [
  'ivf', 'icsi', 'iui', 'monitoring-in-an-iui-cycle-steps', 'ovulation-induction',
  'follicular-monitoring', 'blastocyst-transfer', 'egg-freezing', 'embryo-freezing',
  'cryopreservation', 'prp', 'surrogacy', 'donor-program', 'tesa', 'microtese',
];

const MALE_INFERTILITY_PAGE_KEYS = [
  'male-infertility-treatment-in-india', 'varicocele', 'vasectomy-reversal', 'azoospermia',
  'non-obstructive-azoospermia', 'obstructive-azoospermia', 'oligospermia',
  'blocked-seminiferous-tubules', 'endocrinological-disorder-in-men', 'retrograde-ejaculation',
];

const DIAGNOSTIC_PAGE_KEYS = [
  'semen-analysis', 'semen-analysis-at-home', 'genetic-testing', 'genetic-factors', 'pgt-a', 'pgt-m', 'pgt-sr',
  'difference-between-pgt-a-and-pgt-m', 'amniocentesis', 'chorionic-villus-sampling-cvs',
  'couple-carrier-screening', 'karyotyping', 'microarray', 'hla-matching', 'mfm-scans-and-diagnostics', 'maternal-and-fetal-medicine',
];

const SURGERY_PAGE_KEYS = ['hysteroscopy', 'laparoscopy', 'open-surgery'];

const WOMEN_HEALTH_PAGE_KEYS = [
  'secondary-infertility', 'high-risk-pregnancy', 'fetal-reduction', 'pregnancy-and-coronavirus',
  'blocked-fallopian-tubes', 'pcos-polycystic-ovarian-syndrome', 'irregular-menstrual-cycle',
  'diabetes-thyroid-and-obesity', 'endometrial-and-ovarian', 'endometriosis',
  'fibroids-polyps-and-adenomyosis', 'tuberculosis', 'recurrent-miscarriages',
  'reasons-for-delayed-periods-but-not-pregnant', 'what-is-ovarian-hyperstimulation',
];

const LIFESTYLE_BLOG_PAGE_KEYS = [
  'yoga-and-fertility-heres-how-yoga-can-support-fertility',
  'how-to-boost-up-fertility-with-the-colours-of-food',
];

const DEFAULT_BENEFIT_ICONS = [FaCheckCircle, FaShieldAlt, FaUserCheck, FaFlask];

const DEFAULT_HIGHLIGHTS = [
  { icon: FaMicroscope, title: 'Advanced fertility technology' },
  { icon: FaUserMd, title: 'Experienced fertility specialists' },
  { icon: FaClipboardList, title: 'Personalized treatment plans' },
  { icon: FaChartLine, title: 'High success rates' },
];

function isIntroHeading(heading) {
  if (!heading || typeof heading !== 'string') return false;
  const h = heading.trim().toLowerCase();
  return /^what is .+\??$/.test(h) || h.includes('overview') || h.includes('treatment & success');
}

function isWhyHeading(heading) {
  if (!heading || typeof heading !== 'string') return false;
  const h = heading.trim().toLowerCase();
  return /^why is .+ (done|recommended|suggested)\??$/i.test(h) || /^why (is|do|freeze|opt)/i.test(h) || h.startsWith('when is ') && h.includes('recommended');
}

const IVFContentSection = ({
  data,
  benefitImages,
  accentHeadingStyle,
  serviceName = '',
  faq: faqItems = [],
  keyHighlights = DEFAULT_HIGHLIGHTS,
  serviceKey = '',
  treatmentContent = null,
  maleInfertilityContent = null,
  diagnosticContent = null,
  surgeryContent = null,
  womenHealthContent = null,
  lifestyleBlogContent = null,
  relatedServices = [],
}) => {
  const isTreatmentPage = TREATMENT_PAGE_KEYS.includes(serviceKey) && treatmentContent && typeof treatmentContent === 'object';
  const isMaleInfertilityPage = MALE_INFERTILITY_PAGE_KEYS.includes(serviceKey) && maleInfertilityContent && typeof maleInfertilityContent === 'object';
  const isDiagnosticPage = DIAGNOSTIC_PAGE_KEYS.includes(serviceKey) && diagnosticContent && typeof diagnosticContent === 'object';
  const isSurgeryPage = SURGERY_PAGE_KEYS.includes(serviceKey) && surgeryContent && typeof surgeryContent === 'object';
  const isWomenHealthPage = WOMEN_HEALTH_PAGE_KEYS.includes(serviceKey) && womenHealthContent && typeof womenHealthContent === 'object';
  const isLifestyleBlogPage = LIFESTYLE_BLOG_PAGE_KEYS.includes(serviceKey) && lifestyleBlogContent && typeof lifestyleBlogContent === 'object';

  const sections = data?.sections || [];
  const introSection = sections.find(s => isIntroHeading(s.heading)) || sections[0];
  const whySection = sections.find(s => isWhyHeading(s.heading));
  const mainSections = sections.filter(s => s !== introSection && s !== whySection);

  const renderHeading = (heading, forcePlain = false) => {
    if (heading == null) return null;
    const headingStr = typeof heading === 'string' ? heading : String(heading);
    if (forcePlain || !accentHeadingStyle) {
      return <h2 className="cs_ivf_content_heading">{headingStr}</h2>;
    }
    const words = headingStr.trim().split(/\s+/);
    const mid = Math.ceil(words.length / 2);
    const firstPart = words.slice(0, mid).join(' ');
    const restPart = words.slice(mid).join(' ');
    return (
      <h2 className="cs_ivf_content_heading">
        <span className="cs_heading_accent_start">{firstPart}</span>
        {restPart ? <span> {restPart}</span> : null}
      </h2>
    );
  };

  const renderProcedureStepsBoxes = (steps) => {
    if (!steps || !steps.length) return null;
    return (
      <div className="row cs_gap_y_30 cs_treatment_procedure_boxes">
        {steps.map((step, stepIndex) => (
          <div key={stepIndex} className="col-lg-4 col-md-6 col-12">
            <div className="cs_treatment_procedure_box">
              <span className="cs_treatment_procedure_number">{stepIndex + 1}</span>
              <h3 className="cs_treatment_procedure_title">{step.title}</h3>
              <p className="cs_treatment_procedure_description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderSteps = (steps) => {
    if (!steps || !steps.length) return null;
    if (accentHeadingStyle) {
      return (
        <div className="cs_ivf_content_steps_plain">
          {steps.map((step, stepIndex) => (
            <div key={stepIndex} className="cs_ivf_content_step_plain">
              <div className="cs_ivf_step_plain_title">{stepIndex + 1}. {step.title}</div>
              <p className="cs_ivf_step_plain_description">{step.description}</p>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="cs_ivf_content_steps">
        {steps.map((step, stepIndex) => (
          <div
            key={stepIndex}
            className="cs_ivf_content_step cs_step_open"
          >
            <div className="cs_ivf_step_header">
              <span className="cs_ivf_step_number">{stepIndex + 1}</span>
              <h3 className="cs_ivf_step_title">{step.title}</h3>
              <span className="cs_ivf_step_toggle">
                <span className="cs_ivf_step_toggle_line"></span>
              </span>
            </div>
            <div className="cs_ivf_step_content">
              <p className="cs_ivf_step_description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getLabelIcon = (label) => {
    const labelLower = (label || '').toLowerCase().trim();
    if (labelLower.includes('open days') || labelLower.includes('days')) return <FaCalendarAlt style={{ marginRight: '8px', fontSize: '16px', color: '#df3655' }} />;
    if (labelLower.includes('timing')) return <FaClock style={{ marginRight: '8px', fontSize: '16px', color: '#df3655' }} />;
    if (labelLower.includes('address') || labelLower.includes('location')) return <FaLocationDot style={{ marginRight: '8px', fontSize: '16px', color: '#df3655' }} />;
    if (labelLower.includes('email')) return <FaEnvelope style={{ marginRight: '8px', fontSize: '16px', color: '#df3655' }} />;
    if (labelLower.includes('phone')) return <FaPhoneAlt style={{ marginRight: '8px', fontSize: '16px', color: '#df3655' }} />;
    return null;
  };

  const renderParagraphs = (section, extraClass = '') => {
    if (!section.paragraphs) return null;
    return section.paragraphs.map((paragraph, pIndex) => {
      const labelMatch = paragraph.match(/^([^:]+):\s*(.+)$/);
      if (labelMatch) {
        const [, label, value] = labelMatch;
        const icon = getLabelIcon(label);
        return (
          <p key={pIndex} className={`cs_ivf_content_paragraph ${extraClass}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            {icon}
            <span>
              <span style={{ fontWeight: '700', color: '#df3655' }}>{label}:</span> {value}
            </span>
          </p>
        );
      }
      return (
        <p key={pIndex} className={`cs_ivf_content_paragraph ${extraClass}`}>
          {paragraph}
        </p>
      );
    });
  };

  const getListItemText = (item) => {
    if (typeof item === 'string') return item;
    const obj = item || {};
    const linkText = String(obj.linkText || obj.text || obj.title || '');
    const before = String(obj.before || '');
    const after = String(obj.after || '');
    return before + linkText + after || '';
  };

  const renderListAsBoxes = (listItems, extraClass = '') => {
    if (!listItems || !listItems.length) return null;
    return (
      <div className={`row cs_gap_y_24 cs_list_boxes ${extraClass}`}>
        {listItems.map((item, idx) => {
          const text = getListItemText(item);
          const itemObj = typeof item === 'object' && item ? item : {};
          const href = itemObj.href;
          const Icon = FaCheckCircle;
          return (
            <div key={idx} className="col-lg-3 col-md-4 col-6">
              <div className="cs_list_box">
                <span className="cs_list_box_icon"><Icon /></span>
                <span className="cs_list_box_text">
                  {href ? (
                    <a href={href} style={{ color: 'inherit', textDecoration: 'none' }}>{text}</a>
                  ) : (
                    text
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderList = (section, extraClass = '') => {
    if (!section.listItems) return null;
    return renderListAsBoxes(section.listItems, extraClass);
  };

  const renderContentBlock = (section, options = {}) => {
    const { showHeading = true, headingForcePlain = false } = options;
    return (
      <>
        {showHeading && section.heading && renderHeading(section.heading, headingForcePlain)}
        {renderParagraphs(section, options.paragraphClass || '')}
        {renderList(section, options.listClass || '')}
        {section.steps && renderSteps(section.steps)}
      </>
    );
  };

  const renderSectionWithLayout = (section, isTwoColWithImage) => {
    if (!section.sideImage || !isTwoColWithImage) {
      return (
        <div className="cs_ivf_content_section">
          {renderContentBlock(section)}
          {section.bottomImage && (
            <div className="cs_ivf_content_bottom_image_wrapper" style={{ marginTop: '30px' }}>
              <div className="cs_service_details_thumbnail">
                <Image
                  src={getAssetPathClient(section.bottomImage)}
                  alt={section.heading || 'Image'}
                  width={1227}
                  height={253}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', maxHeight: '400px', borderRadius: '15px', objectFit: 'contain', display: 'block' }}
                />
              </div>
            </div>
          )}
        </div>
      );
    }
    return (
      <div className="cs_ivf_content_section">
        <div className="row cs_gap_y_30 align-items-center">
          <div className="col-lg-6">
            {renderContentBlock(section)}
          </div>
          <div className="col-lg-6">
            <div className="cs_service_details_thumbnail cs_side_image">
              {section.isMapEmbed ? (
                <iframe
                  src={section.sideImage}
                  width="100%"
                  height="400"
                  style={{ border: '0', borderRadius: '15px', minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <Image
                  src={getAssetPathClient(section.sideImage)}
                  alt={section.heading || 'Image'}
                  width={500}
                  height={400}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', maxHeight: '370px', borderRadius: '15px', objectFit: 'contain', display: 'block' }}
                />
              )}
            </div>
          </div>
        </div>
        {section.bottomImage && (
          <div className="cs_ivf_content_bottom_image_wrapper" style={{ marginTop: '30px' }}>
            <div className="cs_service_details_thumbnail">
              <Image
                src={getAssetPathClient(section.bottomImage)}
                alt={section.heading || 'Image'}
                width={1227}
                height={253}
                loading="lazy"
                style={{ width: '100%', height: 'auto', maxHeight: '400px', borderRadius: '15px', objectFit: 'contain', display: 'block' }}
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  const displayName = serviceName || (introSection?.heading && introSection.heading.replace(/^What is |\?$/gi, '').trim()) || 'This Service';

  const renderBlockContent = (block) => {
    if (!block) return null;
    return (
      <>
        {block.paragraphs && block.paragraphs.map((p, i) => (
          <p key={i} className="cs_ivf_content_paragraph">{p}</p>
        ))}
        {block.listItems && renderListAsBoxes(block.listItems)}
      </>
    );
  };

  const renderTreatmentMainContent = () => {
    const tc = treatmentContent;
    return (
      <>
        {/* 1. Who Needs This Treatment */}
        {(tc.whoNeeds?.paragraphs?.length || tc.whoNeeds?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_treatment_section">
            {renderHeading(`Who requires ${displayName}?`)}
            {renderBlockContent(tc.whoNeeds)}
          </div>
        )}

        {/* 2. How The Treatment Works */}
        {(tc.howItWorks?.paragraphs?.length) && (
          <div className="cs_ivf_content_section cs_treatment_section">
            {renderHeading(`How Does ${displayName} Work?`)}
            {renderBlockContent(tc.howItWorks)}
          </div>
        )}

        {/* 3. Step-by-Step Procedure */}
        {(tc.procedure?.steps?.length) && (
          <div className="cs_ivf_content_section cs_treatment_section cs_treatment_procedure_section">
            {renderHeading(`${displayName} Procedure`)}
            {tc.procedure.paragraphs?.length > 0 && renderBlockContent({ paragraphs: tc.procedure.paragraphs })}
            {renderProcedureStepsBoxes(tc.procedure.steps)}
          </div>
        )}

        {/* 4. Benefits of The Treatment */}
        {(tc.benefits?.items?.length || tc.benefits?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_treatment_section cs_treatment_benefits_section">
            {renderHeading(`Benefits of ${displayName}`)}
            <div className="row cs_gap_y_30 cs_treatment_benefit_cards">
              {(tc.benefits.items || tc.benefits.listItems || []).slice(0, 8).map((item, idx) => {
                const title = typeof item === 'string' ? item : (item.title || item.text || item);
                const Icon = DEFAULT_BENEFIT_ICONS[idx % DEFAULT_BENEFIT_ICONS.length];
                return (
                  <div key={idx} className="col-lg-3 col-md-6 col-12">
                    <div className="cs_treatment_benefit_card">
                      <span className="cs_treatment_benefit_icon"><Icon /></span>
                      <h3 className="cs_treatment_benefit_title">{title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 5. Success Rate */}
        {(tc.successRate?.paragraphs?.length) && (
          <div className="cs_ivf_content_section cs_treatment_section">
            {renderHeading(`${displayName} Success Rate`)}
            <div className="cs_treatment_success_rate_box">
              {tc.successRate.paragraphs.map((p, i) => (
                <p key={i} className="cs_ivf_content_paragraph">{p}</p>
              ))}
            </div>
          </div>
        )}

        {/* 6. Risks or Complications */}
        {(tc.risks?.paragraphs?.length || tc.risks?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_treatment_section">
            {renderHeading('Risks and Possible Complications')}
            {renderBlockContent(tc.risks)}
          </div>
        )}

        {/* 7. Recovery or Aftercare */}
        {(tc.recovery?.paragraphs?.length) && (
          <div className="cs_ivf_content_section cs_treatment_section">
            {renderHeading(`Recovery After ${displayName}`)}
            {renderBlockContent(tc.recovery)}
          </div>
        )}

        {/* 8. Cost of Treatment */}
        {(tc.cost?.paragraphs?.length || tc.cost?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_treatment_section">
            {renderHeading(`Cost of ${displayName}`)}
            {renderBlockContent(tc.cost)}
            <div className="cs_treatment_cost_cta">
              <Link href="/contact/book-appointment" className="cs_btn cs_style_1 cs_color_1">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </>
    );
  };

  const renderMaleInfertilityMainContent = () => {
    const mc = maleInfertilityContent;
    return (
      <>
        {/* 1. Types of the Condition */}
        {(mc.types?.paragraphs?.length || mc.types?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_male_infertility_section">
            {renderHeading(`Types of ${displayName}`)}
            {renderBlockContent(mc.types)}
          </div>
        )}

        {/* 2. Causes */}
        {(mc.causes?.paragraphs?.length || mc.causes?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_male_infertility_section">
            {renderHeading(`Causes of ${displayName}`)}
            {renderBlockContent(mc.causes)}
          </div>
        )}

        {/* 3. Symptoms */}
        {(mc.symptoms?.paragraphs?.length || mc.symptoms?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_male_infertility_section">
            {renderHeading(`Symptoms of ${displayName}`)}
            {renderBlockContent(mc.symptoms)}
          </div>
        )}

        {/* 4. Diagnosis */}
        {(mc.diagnosis?.paragraphs?.length || mc.diagnosis?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_male_infertility_section">
            {renderHeading(`Diagnosis of ${displayName}`)}
            {renderBlockContent(mc.diagnosis)}
          </div>
        )}

        {/* 5. Treatment Options */}
        {(mc.treatmentOptions?.paragraphs?.length || mc.treatmentOptions?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_male_infertility_section">
            {renderHeading(`Treatment for ${displayName}`)}
            {renderBlockContent(mc.treatmentOptions)}
          </div>
        )}

        {/* 6. Fertility Outlook */}
        {(mc.fertilityOutlook?.paragraphs?.length || mc.fertilityOutlook?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_male_infertility_section">
            {renderHeading(`Can Men with ${displayName} Have Children?`)}
            {renderBlockContent(mc.fertilityOutlook)}
          </div>
        )}

        {/* 7. When to See a Doctor */}
        {(mc.whenToSeeDoctor?.paragraphs?.length || mc.whenToSeeDoctor?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_male_infertility_section">
            {renderHeading('When Should You Consult a Fertility Specialist?')}
            {renderBlockContent(mc.whenToSeeDoctor)}
          </div>
        )}
      </>
    );
  };

  const renderDiagnosticMainContent = () => {
    const dc = diagnosticContent;
    return (
      <>
        {/* 1. Purpose of the Test */}
        {(dc.purpose?.paragraphs?.length || dc.purpose?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_diagnostic_section">
            {renderHeading(`Why is ${displayName} Done?`)}
            {renderBlockContent(dc.purpose)}
          </div>
        )}

        {/* 2. What Does the Test Check */}
        {(dc.whatItChecks?.paragraphs?.length || dc.whatItChecks?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_diagnostic_section">
            {renderHeading(`What Does ${displayName} Check?`)}
            {renderBlockContent(dc.whatItChecks)}
          </div>
        )}

        {/* 3. How the Test is Performed */}
        {(dc.howPerformed?.steps?.length || dc.howPerformed?.paragraphs?.length || dc.howPerformed?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_diagnostic_section">
            {renderHeading(`How is ${displayName} Performed?`)}
            {(dc.howPerformed.paragraphs?.length || dc.howPerformed.listItems?.length) && renderBlockContent(dc.howPerformed)}
            {dc.howPerformed.steps?.length > 0 && renderSteps(dc.howPerformed.steps)}
          </div>
        )}

        {/* 4. Preparation Before the Test */}
        {(dc.preparation?.paragraphs?.length || dc.preparation?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_diagnostic_section">
            {renderHeading(`How to Prepare for ${displayName}`)}
            {renderBlockContent(dc.preparation)}
          </div>
        )}

        {/* 5. Understanding the Results */}
        {(dc.understandingResults?.paragraphs?.length || dc.understandingResults?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_diagnostic_section">
            {renderHeading(`Understanding ${displayName} Results`)}
            {renderBlockContent(dc.understandingResults)}
          </div>
        )}

        {/* 6. Cost of the Test */}
        {(dc.cost?.paragraphs?.length || dc.cost?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_diagnostic_section">
            {renderHeading(`Cost of ${displayName}`)}
            {renderBlockContent(dc.cost)}
            <div className="cs_treatment_cost_cta">
              <Link href="/contact/book-appointment" className="cs_btn cs_style_1 cs_color_1">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </>
    );
  };

  const renderSurgeryMainContent = () => {
    const sc = surgeryContent;
    return (
      <>
        {/* 1. Why This Surgery is Done */}
        {(sc.whyDone?.paragraphs?.length || sc.whyDone?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_surgery_section">
            {renderHeading(`Why is ${displayName} Performed?`)}
            {renderBlockContent(sc.whyDone)}
          </div>
        )}

        {/* 2. Conditions Treated */}
        {(sc.conditionsTreated?.paragraphs?.length || sc.conditionsTreated?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_surgery_section">
            {renderHeading(`Conditions Treated with ${displayName}`)}
            {renderBlockContent(sc.conditionsTreated)}
          </div>
        )}

        {/* 3. Procedure Overview */}
        {(sc.procedureOverview?.steps?.length || sc.procedureOverview?.paragraphs?.length || sc.procedureOverview?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_surgery_section">
            {renderHeading(`How is ${displayName} Performed?`)}
            {(sc.procedureOverview.paragraphs?.length || sc.procedureOverview.listItems?.length) && renderBlockContent(sc.procedureOverview)}
            {sc.procedureOverview.steps?.length > 0 && renderSteps(sc.procedureOverview.steps)}
          </div>
        )}

        {/* 4. Recovery After Surgery */}
        {(sc.recovery?.paragraphs?.length || sc.recovery?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_surgery_section">
            {renderHeading(`Recovery After ${displayName}`)}
            {renderBlockContent(sc.recovery)}
          </div>
        )}

        {/* 5. Risks and Complications */}
        {(sc.risks?.paragraphs?.length || sc.risks?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_surgery_section">
            {renderHeading(`Risks of ${displayName}`)}
            {renderBlockContent(sc.risks)}
          </div>
        )}

        {/* 6. Success Rate */}
        {(sc.successRate?.paragraphs?.length) && (
          <div className="cs_ivf_content_section cs_surgery_section">
            {renderHeading(`Success Rate of ${displayName}`)}
            <div className="cs_treatment_success_rate_box">
              {sc.successRate.paragraphs.map((p, i) => (
                <p key={i} className="cs_ivf_content_paragraph">{p}</p>
              ))}
            </div>
          </div>
        )}

        {/* 7. Cost of Surgery + CTA */}
        {(sc.cost?.paragraphs?.length || sc.cost?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_surgery_section">
            {renderHeading(`Cost of ${displayName}`)}
            {renderBlockContent(sc.cost)}
            <div className="cs_treatment_cost_cta">
              <Link href="/contact/book-appointment" className="cs_btn cs_style_1 cs_color_1">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </>
    );
  };

  const renderWomenHealthMainContent = () => {
    const wh = womenHealthContent;
    return (
      <>
        {/* 1. Symptoms */}
        {(wh.symptoms?.paragraphs?.length || wh.symptoms?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_women_health_section">
            {renderHeading(`Symptoms of ${displayName}`)}
            {renderBlockContent(wh.symptoms)}
          </div>
        )}

        {/* 2. Causes */}
        {(wh.causes?.paragraphs?.length || wh.causes?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_women_health_section">
            {renderHeading(`Causes of ${displayName}`)}
            {renderBlockContent(wh.causes)}
          </div>
        )}

        {/* 3. Diagnosis */}
        {(wh.diagnosis?.paragraphs?.length || wh.diagnosis?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_women_health_section">
            {renderHeading(`Diagnosis of ${displayName}`)}
            {renderBlockContent(wh.diagnosis)}
          </div>
        )}

        {/* 4. Treatment Options */}
        {(wh.treatmentOptions?.paragraphs?.length || wh.treatmentOptions?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_women_health_section">
            {renderHeading(`Treatment for ${displayName}`)}
            {renderBlockContent(wh.treatmentOptions)}
          </div>
        )}

        {/* 5. Impact on Fertility */}
        {(wh.impactOnFertility?.paragraphs?.length || wh.impactOnFertility?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_women_health_section">
            {renderHeading(`How ${displayName} Affects Fertility`)}
            {renderBlockContent(wh.impactOnFertility)}
          </div>
        )}

        {/* 6. Prevention or Management */}
        {(wh.management?.paragraphs?.length || wh.management?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_women_health_section">
            {renderHeading(`Managing ${displayName}`)}
            {renderBlockContent(wh.management)}
          </div>
        )}
      </>
    );
  };

  const renderLifestyleBlogMainContent = () => {
    const lb = lifestyleBlogContent;
    return (
      <>
        {/* 1. Why This Matters for Fertility */}
        {(lb.whyItMatters?.paragraphs?.length || lb.whyItMatters?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_lifestyle_blog_section">
            {renderHeading(`Why ${displayName} Matters for Fertility`)}
            {renderBlockContent(lb.whyItMatters)}
          </div>
        )}

        {/* 2. Benefits for Fertility */}
        {(lb.benefits?.paragraphs?.length || lb.benefits?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_lifestyle_blog_section">
            {renderHeading(`Benefits of ${displayName} for Fertility`)}
            {renderBlockContent(lb.benefits)}
          </div>
        )}

        {/* 3. Practical Tips or Methods */}
        {(lb.practicalTips?.paragraphs?.length || lb.practicalTips?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_lifestyle_blog_section">
            {renderHeading(`How to Use ${displayName} to Improve Fertility`)}
            {renderBlockContent(lb.practicalTips)}
          </div>
        )}

        {/* 4. Expert Advice */}
        {(lb.expertAdvice?.paragraphs?.length || lb.expertAdvice?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_lifestyle_blog_section">
            {renderHeading('Expert Advice from Fertility Specialists')}
            {renderBlockContent(lb.expertAdvice)}
          </div>
        )}

        {/* 5. Lifestyle Recommendations */}
        {(lb.lifestyleRecommendations?.paragraphs?.length || lb.lifestyleRecommendations?.listItems?.length) && (
          <div className="cs_ivf_content_section cs_lifestyle_blog_section">
            {renderHeading('Healthy Lifestyle Tips for Fertility')}
            {renderBlockContent(lb.lifestyleRecommendations)}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="cs_ivf_content_wrapper">
      {/* 1. INTRODUCTION SECTION */}
      {introSection && (
        <div className="cs_ivf_content_section cs_service_intro_section">
          <div className={introSection.sideImage && !accentHeadingStyle ? 'row cs_gap_y_30 align-items-center' : ''}>
            <div className={introSection.sideImage && !accentHeadingStyle ? 'col-lg-6' : 'col-12'}>
              {renderHeading(introSection.heading || displayName)}
              {renderParagraphs(introSection)}
              {renderList(introSection)}
            </div>
            {introSection.sideImage && !accentHeadingStyle && (
              <div className="col-lg-6">
                <div className="cs_service_details_thumbnail cs_side_image">
                  <Image
                    src={getAssetPathClient(introSection.sideImage)}
                    alt={displayName}
                    width={500}
                    height={400}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', maxHeight: '370px', borderRadius: '15px', objectFit: 'contain', display: 'block' }}
                  />
                </div>
              </div>
            )}
            {introSection.sideImage && accentHeadingStyle && (
              <div className="col-12" style={{ marginTop: '24px' }}>
                <div className="cs_service_details_thumbnail">
                  <Image
                    src={getAssetPathClient(introSection.sideImage)}
                    alt={displayName}
                    width={500}
                    height={400}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', maxHeight: '400px', borderRadius: '15px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. WHY THIS SERVICE SECTION */}
      {whySection && (
        <div className="cs_ivf_content_section cs_service_why_section">
          {renderHeading(`Why is ${displayName} Done?`)}
          {renderContentBlock(whySection, { showHeading: false })}
        </div>
      )}

      {/* 4. MAIN CONTENT AREA */}
      {isLifestyleBlogPage ? (
        renderLifestyleBlogMainContent()
      ) : isWomenHealthPage ? (
        renderWomenHealthMainContent()
      ) : isSurgeryPage ? (
        renderSurgeryMainContent()
      ) : isDiagnosticPage ? (
        renderDiagnosticMainContent()
      ) : isMaleInfertilityPage ? (
        renderMaleInfertilityMainContent()
      ) : isTreatmentPage ? (
        renderTreatmentMainContent()
      ) : (
        mainSections.map((section, sectionIndex) => {
          const isBenefitWithImages = section.heading === 'Benefits of IVF Treatment in India' && benefitImages && benefitImages.length >= 2;
          return (
            <div key={sectionIndex}>
              {isBenefitWithImages && (
                <div className="cs_ivf_content_image_wrapper">
                  <div className="row cs_gap_y_20">
                    <div className="col-lg-6 col-md-6">
                      <div className="cs_service_details_thumbnail cs_side_image">
                        <Image src={getAssetPathClient(benefitImages[0])} alt="" width={500} height={300} loading="lazy" style={{ width: '100%', height: 'auto', borderRadius: '15px', objectFit: 'cover', display: 'block' }} />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="cs_service_details_thumbnail cs_side_image">
                        <Image src={getAssetPathClient(benefitImages[1])} alt="" width={500} height={300} loading="lazy" style={{ width: '100%', height: 'auto', borderRadius: '15px', objectFit: 'cover', display: 'block' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {accentHeadingStyle && section.sideImage ? (
                <div className="cs_ivf_content_section">
                  <div className="cs_ivf_content_block">{renderContentBlock(section)}</div>
                  <div className="cs_ivf_content_image_below" style={{ marginTop: '24px' }}>
                    <div className="cs_service_details_thumbnail">
                      {section.isMapEmbed ? (
                        <iframe src={section.sideImage} width="100%" height="400" style={{ border: '0', borderRadius: '15px', minHeight: '400px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                      ) : (
                        <Image src={getAssetPathClient(section.sideImage)} alt={section.heading || 'Image'} width={500} height={400} loading="lazy" style={{ width: '100%', height: 'auto', maxHeight: '400px', borderRadius: '15px', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
                      )}
                    </div>
                  </div>
                  {section.bottomImage && (
                    <div className="cs_ivf_content_bottom_image_wrapper" style={{ marginTop: '30px' }}>
                      <div className="cs_service_details_thumbnail">
                        <Image src={getAssetPathClient(section.bottomImage)} alt={section.heading || 'Image'} width={1227} height={253} loading="lazy" style={{ width: '100%', height: 'auto', maxHeight: '400px', borderRadius: '15px', objectFit: 'contain', display: 'block' }} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                renderSectionWithLayout(section, !!section.sideImage)
              )}
            </div>
          );
        })
      )}

      {/* 4b. RELATED SERVICES (above FAQ) */}
      {relatedServices && relatedServices.length > 0 && (
        <RelatedServices relatedServices={relatedServices} />
      )}

      {/* 5. FAQ SECTION (accordion) */}
      {faqItems && faqItems.length > 0 && (
        <div className="cs_ivf_content_section cs_service_faq_section">
          {/* {renderHeading('Frequently Asked Questions')} */}
          <FAQAccordion faqs={faqItems} />
        </div>
      )}

      {/* 6. FINAL CTA SECTION */}
      {/* <div className="cs_ivf_content_section cs_service_cta_section">
        <div className="cs_service_cta_inner">
          <h2 className="cs_ivf_content_heading cs_service_cta_heading">Consult Our Fertility Experts</h2>
          <p className="cs_service_cta_text">
            Get personalized advice and a treatment plan tailored to you. Our specialists are here to support your journey to parenthood.
          </p>
          <div className="cs_service_cta_buttons">
            <Link href="/contact/book-appointment" className="cs_btn cs_style_1 cs_color_1 cs_service_cta_btn">
              Book Appointment
            </Link>
            <Link href="/contact/call-back-form" className="cs_btn cs_style_1 cs_color_2 cs_service_cta_btn_outline">
              Contact Fertility Specialist
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default IVFContentSection;
