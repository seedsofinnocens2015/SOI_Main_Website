/**
 * Legacy service/treatment URL redirects.
 * Keep old top-level service URLs here and map them to the new section-based URLs.
 */
const legacyServiceRedirects = [
  {
    source: '/dr-alpana-razadan-ivf-specialist/',
    destination: '/genetic-expert/dr-alpana-razadan/',
    permanent: true,
  },
  {
    source: '/ivf-doctor/dr-ranjana-mishra-ivf-specialist/',
    destination: '/genetic-expert/dr-ranjana-mishra-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-alpana-razadan-ivf-specialist/',
    destination: '/genetic-expert/dr-alpana-razadan/',
    permanent: true,
  },
  {
    source: '/doctors/dr-ranjana-mishra-ivf-specialist/',
    destination: '/genetic-expert/dr-ranjana-mishra-ivf-specialist/',
    permanent: true,
  },
  { source: '/ivf-doctors/', destination: '/ivf-doctor/', permanent: true },
  { source: '/ivf-doctors/:path*/', destination: '/ivf-doctor/:path*/', permanent: true },
  { source: '/doctors/', destination: '/ivf-doctor/', permanent: true },
  { source: '/doctors/:path*/', destination: '/ivf-doctor/:path*/', permanent: true },
  { source: '/ivf/', destination: '/fertility-treatments/ivf/', permanent: true },
  { source: '/icsi/', destination: '/fertility-treatments/icsi/', permanent: true },
  { source: '/iui/', destination: '/fertility-treatments/iui/', permanent: true },
  {
    source: '/monitoring-in-an-iui-cycle-steps/',
    destination: '/fertility-treatments/monitoring-in-an-iui-cycle-steps/',
    permanent: true,
  },
  {
    source: '/ovulation-induction/',
    destination: '/fertility-treatments/ovulation-induction/',
    permanent: true,
  },
  {
    source: '/follicular-monitoring/',
    destination: '/fertility-treatments/follicular-monitoring/',
    permanent: true,
  },
  {
    source: '/blastocyst-transfer/',
    destination: '/fertility-treatments/blastocyst-transfer/',
    permanent: true,
  },
  {
    source: '/secondary-infertility/',
    destination: '/fertility-treatments/secondary-infertility/',
    permanent: true,
  },
  {
    source: '/egg-freezing/',
    destination: '/ivf-procedures-preservation/egg-freezing/',
    permanent: true,
  },
  {
    source: '/embryo-freezing/',
    destination: '/ivf-procedures-preservation/embryo-freezing/',
    permanent: true,
  },
  {
    source: '/cryopreservation/',
    destination: '/ivf-procedures-preservation/cryopreservation/',
    permanent: true,
  },
  { source: '/prp/', destination: '/ivf-procedures-preservation/prp/', permanent: true },
  {
    source: '/surrogacy/',
    destination: '/ivf-procedures-preservation/surrogacy/',
    permanent: true,
  },
  {
    source: '/donor-program/',
    destination: '/ivf-procedures-preservation/donor-program/',
    permanent: true,
  },
  {
    source: '/male-infertility-treatment-in-india/',
    destination: '/male-infertility-treatments/male-infertility-treatment-in-india/',
    permanent: true,
  },
  {
    source: '/tesa-pesa/',
    destination: '/male-infertility-treatments/tesa-pesa/',
    permanent: true,
  },
  {
    source: '/semen-analysis/',
    destination: '/male-infertility-treatments/semen-analysis/',
    permanent: true,
  },
  {
    source: '/semen-analysis-at-home/',
    destination: '/male-infertility-treatments/semen-analysis-at-home/',
    permanent: true,
  },
  {
    source: '/varicocele/',
    destination: '/male-infertility-treatments/varicocele/',
    permanent: true,
  },
  {
    source: '/vasectomy-reversal/',
    destination: '/male-infertility-treatments/vasectomy-reversal/',
    permanent: true,
  },
  {
    source: '/azoospermia/',
    destination: '/male-fertility-conditions/azoospermia/',
    permanent: true,
  },
  {
    source: '/non-obstructive-azoospermia/',
    destination: '/male-fertility-conditions/non-obstructive-azoospermia/',
    permanent: true,
  },
  {
    source: '/obstructive-azoospermia/',
    destination: '/male-fertility-conditions/obstructive-azoospermia/',
    permanent: true,
  },
  {
    source: '/oligospermia/',
    destination: '/male-fertility-conditions/oligospermia/',
    permanent: true,
  },
  {
    source: '/blocked-seminiferous-tubules/',
    destination: '/male-fertility-conditions/blocked-seminiferous-tubules/',
    permanent: true,
  },
  {
    source: '/endocrinological-disorder-in-men/',
    destination: '/male-fertility-conditions/endocrinological-disorder-in-men/',
    permanent: true,
  },
  {
    source: '/retrograde-ejaculation/',
    destination: '/male-fertility-conditions/retrograde-ejaculation/',
    permanent: true,
  },
  {
    source: '/genetic-testing/',
    destination: '/genetic-testing-screening/genetic-testing/',
    permanent: true,
  },
  {
    source: '/genetic-factors/',
    destination: '/genetic-testing-screening/genetic-factors/',
    permanent: true,
  },
  { source: '/pgt-a/', destination: '/genetic-testing-screening/pgt-a/', permanent: true },
  { source: '/pgt-m/', destination: '/genetic-testing-screening/pgt-m/', permanent: true },
  {
    source: '/pgt-sr/',
    destination: '/genetic-testing-screening/pgt-sr/',
    permanent: true,
  },
  {
    source: '/difference-between-pgt-a-and-pgt-m/',
    destination: '/genetic-testing-screening/difference-between-pgt-a-and-pgt-m/',
    permanent: true,
  },
  {
    source: '/amniocentesis/',
    destination: '/genetic-testing-screening/amniocentesis/',
    permanent: true,
  },
  {
    source: '/chorionic-villus-sampling-cvs/',
    destination: '/genetic-testing-screening/chorionic-villus-sampling-cvs/',
    permanent: true,
  },
  {
    source: '/couple-carrier-screening/',
    destination: '/genetic-testing-screening/couple-carrier-screening/',
    permanent: true,
  },
  {
    source: '/karyotyping/',
    destination: '/genetic-testing-screening/karyotyping/',
    permanent: true,
  },
  {
    source: '/microarray/',
    destination: '/genetic-testing-screening/microarray/',
    permanent: true,
  },
  {
    source: '/hla-matching/',
    destination: '/genetic-testing-screening/hla-matching/',
    permanent: true,
  },
  {
    source: '/high-risk-pregnancy/',
    destination: '/maternal-fetal-medicine/high-risk-pregnancy/',
    permanent: true,
  },
  {
    source: '/fetal-reduction/',
    destination: '/maternal-fetal-medicine/fetal-reduction/',
    permanent: true,
  },
  {
    source: '/maternal-and-fetal-medicine/',
    destination: '/maternal-fetal-medicine/maternal-and-fetal-medicine/',
    permanent: true,
  },
  {
    source: '/pregnancy-and-coronavirus-insights-from-experts/',
    destination: '/maternal-fetal-medicine/pregnancy-and-coronavirus-insights-from-experts/',
    permanent: true,
  },
  { source: '/hysteroscopy/', destination: '/surgeries/hysteroscopy/', permanent: true },
  { source: '/laparoscopy/', destination: '/surgeries/laparoscopy/', permanent: true },
  { source: '/open-surgery/', destination: '/surgeries/open-surgery/', permanent: true },
  {
    source: '/blocked-fallopian-tubes/',
    destination: '/reproductive-health-conditions/blocked-fallopian-tubes/',
    permanent: true,
  },
  {
    source: '/pcos-polycystic-ovarian-syndrome/',
    destination: '/reproductive-health-conditions/pcos-polycystic-ovarian-syndrome/',
    permanent: true,
  },
  {
    source: '/irregular-menstrual-cycle/',
    destination: '/reproductive-health-conditions/irregular-menstrual-cycle/',
    permanent: true,
  },
  {
    source: '/diabetes-thyroid-and-obesity/',
    destination: '/reproductive-health-conditions/diabetes-thyroid-and-obesity/',
    permanent: true,
  },
  {
    source: '/endometrial-and-ovarian/',
    destination: '/reproductive-health-conditions/endometrial-and-ovarian/',
    permanent: true,
  },
  {
    source: '/endometriosis/',
    destination: '/reproductive-health-conditions/endometriosis/',
    permanent: true,
  },
  {
    source: '/fibroids-polyps-and-adenomyosis/',
    destination: '/reproductive-health-conditions/fibroids-polyps-and-adenomyosis/',
    permanent: true,
  },
  {
    source: '/tuberculosis/',
    destination: '/reproductive-health-conditions/tuberculosis/',
    permanent: true,
  },
  {
    source: '/recurrent-miscarriages/',
    destination: '/reproductive-health-conditions/recurrent-miscarriages/',
    permanent: true,
  },
  {
    source: '/reasons-for-delayed-periods-but-not-pregnant/',
    destination: '/reproductive-health-conditions/reasons-for-delayed-periods-but-not-pregnant/',
    permanent: true,
  },
  {
    source: '/what-is-ovarian-hyperstimulation/',
    destination: '/reproductive-health-conditions/what-is-ovarian-hyperstimulation/',
    permanent: true,
  },
  {
    source: '/yoga-and-fertility-heres-how-yoga-can-support-fertility/',
    destination: '/fertility-wellness/yoga-and-fertility-heres-how-yoga-can-support-fertility/',
    permanent: true,
  },
  {
    source: '/how-to-boost-up-fertility-with-the-colours-of-food/',
    destination: '/fertility-wellness/how-to-boost-up-fertility-with-the-colours-of-food/',
    permanent: true,
  },
];

export default legacyServiceRedirects;
