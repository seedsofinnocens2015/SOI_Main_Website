/**
 * Service category and SEO helpers.
 * Categories: treatment | male-infertility | diagnostic-test | surgery | women-health | lifestyle
 * Schema types: MedicalProcedure | MedicalCondition | MedicalTest
 */

const TREATMENT_KEYS = [
  'ivf', 'icsi', 'iui', 'monitoring-in-an-iui-cycle-steps', 'ovulation-induction',
  'follicular-monitoring', 'blastocyst-transfer', 'egg-freezing', 'embryo-freezing',
  'cryopreservation', 'prp', 'surrogacy', 'donor-program', 'tesa', 'microtese',
];

const MALE_INFERTILITY_KEYS = [
  'male-infertility-treatment-in-india', 'varicocele', 'vasectomy-reversal', 'azoospermia',
  'non-obstructive-azoospermia', 'obstructive-azoospermia', 'oligospermia',
  'blocked-seminiferous-tubules', 'endocrinological-disorder-in-men', 'retrograde-ejaculation',
];

const DIAGNOSTIC_KEYS = [
  'semen-analysis', 'semen-analysis-at-home', 'genetic-testing', 'genetic-factors', 'pgt-a', 'pgt-m', 'pgt-sr',
  'difference-between-pgt-a-and-pgt-m', 'amniocentesis', 'chorionic-villus-sampling-cvs',
  'couple-carrier-screening', 'karyotyping', 'microarray', 'hla-matching', 'mfm-scans-and-diagnostics', 'maternal-and-fetal-medicine',
];

const SURGERY_KEYS = ['hysteroscopy', 'laparoscopy', 'open-surgery'];

const WOMEN_HEALTH_KEYS = [
  'secondary-infertility', 'high-risk-pregnancy', 'fetal-reduction', 'pregnancy-and-coronavirus',
  'blocked-fallopian-tubes', 'pcos-polycystic-ovarian-syndrome', 'irregular-menstrual-cycle',
  'diabetes-thyroid-and-obesity', 'endometrial-and-ovarian', 'endometriosis',
  'fibroids-polyps-and-adenomyosis', 'tuberculosis', 'recurrent-miscarriages',
  'reasons-for-delayed-periods-but-not-pregnant', 'what-is-ovarian-hyperstimulation',
];

const LIFESTYLE_KEYS = [
  'yoga-and-fertility-heres-how-yoga-can-support-fertility',
  'how-to-boost-up-fertility-with-the-colours-of-food',
];

function getCategory(slug) {
  if (TREATMENT_KEYS.includes(slug)) return 'treatment';
  if (MALE_INFERTILITY_KEYS.includes(slug)) return 'male-infertility';
  if (DIAGNOSTIC_KEYS.includes(slug)) return 'diagnostic-test';
  if (SURGERY_KEYS.includes(slug)) return 'surgery';
  if (WOMEN_HEALTH_KEYS.includes(slug)) return 'women-health';
  if (LIFESTYLE_KEYS.includes(slug)) return 'lifestyle';
  return 'treatment';
}

function getSchemaType(slug) {
  if (DIAGNOSTIC_KEYS.includes(slug)) return 'MedicalTest';
  if (SURGERY_KEYS.includes(slug) || TREATMENT_KEYS.includes(slug)) return 'MedicalProcedure';
  if (WOMEN_HEALTH_KEYS.includes(slug) || MALE_INFERTILITY_KEYS.includes(slug)) return 'MedicalCondition';
  return 'MedicalProcedure';
}

/**
 * Get related service slugs (same category, excluding current), max limit.
 * @param {string} currentSlug
 * @param {Record<string, unknown>} servicesContent - full services map
 * @param {number} limit
 * @returns {string[]}
 */
function getRelatedSlugs(currentSlug, servicesContent, limit = 6) {
  const category = getCategory(currentSlug);
  const categoryKeys = {
    treatment: TREATMENT_KEYS,
    'male-infertility': MALE_INFERTILITY_KEYS,
    'diagnostic-test': DIAGNOSTIC_KEYS,
    surgery: SURGERY_KEYS,
    'women-health': WOMEN_HEALTH_KEYS,
    lifestyle: LIFESTYLE_KEYS,
  }[category];
  if (!categoryKeys) return [];
  const available = categoryKeys.filter((s) => s !== currentSlug && servicesContent[s]);
  const shuffled = available.slice(0, limit * 2); // simple take first N*2 then slice limit for deterministic order
  return shuffled.slice(0, limit);
}

/**
 * Build description from config (first intro paragraph or title).
 */
function getDefaultDescription(config) {
  if (!config) return 'Expert fertility care at Seeds of Innocence.';
  const intro = config.ivfContentData?.sections?.[0];
  const firstPara = intro?.paragraphs?.[0];
  if (typeof firstPara === 'string' && firstPara.length > 50) {
    const plain = firstPara.replace(/<[^>]+>/g, '');
    return plain.slice(0, 160).trim() + (plain.length > 160 ? '…' : '');
  }
  return `${config.title || 'Service'} at Seeds of Innocence. Expert fertility care and treatment.`;
}

export { getCategory, getSchemaType, getRelatedSlugs, getDefaultDescription };
