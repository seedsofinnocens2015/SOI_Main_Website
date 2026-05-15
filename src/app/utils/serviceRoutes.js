/**
 * Service key → canonical path (matches Header.jsx Infertility Treatment menu).
 * Keys align with servicesContent.json / ServicePage serviceKey.
 */
const SERVICE_PATH_BY_KEY = {
  // Fertility Treatments
  ivf: '/fertility-treatments/ivf',
  icsi: '/fertility-treatments/icsi',
  iui: '/fertility-treatments/iui',
  'monitoring-in-an-iui-cycle-steps': '/fertility-treatments/monitoring-in-an-iui-cycle-steps',
  'ovulation-induction': '/fertility-treatments/ovulation-induction',
  'follicular-monitoring': '/fertility-treatments/follicular-monitoring',
  'blastocyst-transfer': '/fertility-treatments/blastocyst-transfer',
  'secondary-infertility': '/fertility-treatments/secondary-infertility',
  // IVF Procedures & Preservation
  'egg-freezing': '/ivf-procedures-preservation/egg-freezing',
  'embryo-freezing': '/ivf-procedures-preservation/embryo-freezing',
  cryopreservation: '/ivf-procedures-preservation/cryopreservation',
  prp: '/ivf-procedures-preservation/prp',
  surrogacy: '/ivf-procedures-preservation/surrogacy',
  'donor-program': '/ivf-procedures-preservation/donor-program',
  // Male Infertility Treatments
  'male-infertility-treatment-in-india': '/male-infertility-treatments/male-infertility-treatment-in-india',
  tesa: '/male-infertility-treatments/tesa-pesa',
  microtese: '/male-infertility-treatments/microtese',
  'semen-analysis': '/male-infertility-treatments/semen-analysis',
  'semen-analysis-at-home': '/male-infertility-treatments/semen-analysis-at-home',
  varicocele: '/male-infertility-treatments/varicocele',
  'vasectomy-reversal': '/male-infertility-treatments/vasectomy-reversal',
  // Male Fertility Conditions
  azoospermia: '/male-fertility-conditions/azoospermia',
  'non-obstructive-azoospermia': '/male-fertility-conditions/non-obstructive-azoospermia',
  'obstructive-azoospermia': '/male-fertility-conditions/obstructive-azoospermia',
  oligospermia: '/male-fertility-conditions/oligospermia',
  'blocked-seminiferous-tubules': '/male-fertility-conditions/blocked-seminiferous-tubules',
  'endocrinological-disorder-in-men': '/male-fertility-conditions/endocrinological-disorder-in-men',
  'retrograde-ejaculation': '/male-fertility-conditions/retrograde-ejaculation',
  // Genetic Testing & Screening
  'genetic-testing': '/genetic-testing-screening/genetic-testing',
  'genetic-factors': '/genetic-testing-screening/genetic-factors',
  'pgt-a': '/genetic-testing-screening/pgt-a',
  'pgt-m': '/genetic-testing-screening/pgt-m',
  'pgt-sr': '/genetic-testing-screening/pgt-sr',
  'difference-between-pgt-a-and-pgt-m': '/genetic-testing-screening/difference-between-pgt-a-and-pgt-m',
  amniocentesis: '/genetic-testing-screening/amniocentesis',
  'chorionic-villus-sampling-cvs': '/genetic-testing-screening/chorionic-villus-sampling-cvs',
  'couple-carrier-screening': '/genetic-testing-screening/couple-carrier-screening',
  karyotyping: '/genetic-testing-screening/karyotyping',
  microarray: '/genetic-testing-screening/microarray',
  'hla-matching': '/genetic-testing-screening/hla-matching',
  'mfm-scans-and-diagnostics': '/maternal-fetal-medicine/maternal-and-fetal-medicine',
  // Maternal–Fetal Medicine
  'high-risk-pregnancy': '/maternal-fetal-medicine/high-risk-pregnancy',
  'fetal-reduction': '/maternal-fetal-medicine/fetal-reduction',
  'maternal-and-fetal-medicine': '/maternal-fetal-medicine/maternal-and-fetal-medicine',
  'pregnancy-and-coronavirus': '/maternal-fetal-medicine/pregnancy-and-coronavirus-insights-from-experts',
  'pregnancy-and-coronavirus-insights-from-experts':
    '/maternal-fetal-medicine/pregnancy-and-coronavirus-insights-from-experts',
  // Surgeries
  hysteroscopy: '/surgeries/hysteroscopy',
  laparoscopy: '/surgeries/laparoscopy',
  'open-surgery': '/surgeries/open-surgery',
  // Reproductive Health Conditions
  'blocked-fallopian-tubes': '/reproductive-health-conditions/blocked-fallopian-tubes',
  'pcos-polycystic-ovarian-syndrome': '/reproductive-health-conditions/pcos-polycystic-ovarian-syndrome',
  'irregular-menstrual-cycle': '/reproductive-health-conditions/irregular-menstrual-cycle',
  'diabetes-thyroid-and-obesity': '/reproductive-health-conditions/diabetes-thyroid-and-obesity',
  'endometrial-and-ovarian': '/reproductive-health-conditions/endometrial-and-ovarian',
  endometriosis: '/reproductive-health-conditions/endometriosis',
  'fibroids-polyps-and-adenomyosis': '/reproductive-health-conditions/fibroids-polyps-and-adenomyosis',
  'female-genital-tuberculosis': '/reproductive-health-conditions/female-genital-tuberculosis',
  'recurrent-miscarriages': '/reproductive-health-conditions/recurrent-miscarriages',
  'reasons-for-delayed-periods-but-not-pregnant':
    '/reproductive-health-conditions/reasons-for-delayed-periods-but-not-pregnant',
  'what-is-ovarian-hyperstimulation': '/reproductive-health-conditions/what-is-ovarian-hyperstimulation',
  // Fertility Wellness
  'how-to-boost-up-fertility-with-the-colours-of-food':
    '/fertility-wellness/how-to-boost-up-fertility-with-the-colours-of-food',
  'yoga-and-fertility-heres-how-yoga-can-support-fertility':
    '/fertility-wellness/yoga-and-fertility-heres-how-yoga-can-support-fertility',
};

function getServicePath(serviceKey) {
  if (!serviceKey) return '#';
  return SERVICE_PATH_BY_KEY[serviceKey] || `/${serviceKey}`;
}

export { SERVICE_PATH_BY_KEY, getServicePath };
