/**
 * Legacy blog URL redirects.
 * If a specific new blog URL does not exist, send users to the fertility blog listing page.
 */
const blogListingDestination = '/blogs/fertility/';

const legacyBlogRedirects = [
  { source: '/hcg-levels-in-pregnancy/', destination: blogListingDestination, permanent: true },
  { source: '/false-positive-pregnancy-test/', destination: blogListingDestination, permanent: true },
  { source: '/posterior-placenta-meaning/', destination: blogListingDestination, permanent: true },
  {
    source:
      '/%e0%a4%aa%e0%a4%9f%e0%a4%a8%e0%a4%be-%e0%a4%95%e0%a4%be-%e0%a4%b8%e0%a4%ac%e0%a4%b8%e0%a5%87-%e0%a4%85%e0%a4%9a%e0%a5%8d%e0%a4%9b%e0%a4%be-ivf-%e0%a4%b8%e0%a5%87%e0%a4%82%e0%a4%9f%e0%a4%b0/',
    destination: blogListingDestination,
    permanent: true,
  },
  {
    source: '/free-ivf-consultation-camp-14th-march-dr-gauri-agarwal/',
    destination: blogListingDestination,
    permanent: true,
  },
  { source: '/international-womens-day-2026/', destination: blogListingDestination, permanent: true },
  {
    source: '/free-ivf-consultation-camp-15-march-dr-gauri-agarwal/',
    destination: blogListingDestination,
    permanent: true,
  },
  { source: '/irregular-periods-ovulation-problems/', destination: blogListingDestination, permanent: true },
  { source: '/poor-egg-quality-causes-diagnosis/', destination: blogListingDestination, permanent: true },
  {
    source: '/sex-drive-fertility-the-hidden-link-you-shouldnt-ignore/',
    destination: blogListingDestination,
    permanent: true,
  },
  {
    source: '/does-sexual-position-affect-chances-of-pregnancy/',
    destination: blogListingDestination,
    permanent: true,
  },
  { source: '/fertile-window-secrets/', destination: blogListingDestination, permanent: true },
  { source: '/white-discharge-whats-normal-and-whats-not/', destination: blogListingDestination, permanent: true },
  { source: '/silent-endometriosis/', destination: blogListingDestination, permanent: true },
  { source: '/uterine-fibroids-on-fertility/', destination: blogListingDestination, permanent: true },
  { source: '/can-erectile-dysfunction-affect-fertility/', destination: blogListingDestination, permanent: true },
  {
    source: '/condom-myths-vs-facts-the-right-way-to-use-condoms/',
    destination: blogListingDestination,
    permanent: true,
  },
  {
    source: '/painful-sex-and-infertility-when-to-see-a-doctor/',
    destination: '/english/painful-sex-and-infertility/',
    permanent: true,
  },
  { source: '/low-libido-and-fertility/', destination: blogListingDestination, permanent: true },
  { source: '/does-timing-of-intercourse-really-matter/', destination: blogListingDestination, permanent: true },
  {
    source: '/age-related-fertility-decline-why-35-matters/',
    destination: blogListingDestination,
    permanent: true,
  },
  {
    source: '/why-choose-seeds-of-innocens-ivf-kolkata-trusted-fertility-care/',
    destination: blogListingDestination,
    permanent: true,
  },
  {
    source: '/unclean-washrooms-a-hidden-threat-to-intimate/',
    destination: blogListingDestination,
    permanent: true,
  },
  {
    source: '/best-ivf-centre-in-kolkata-for-successful-pregnancy/',
    destination: blogListingDestination,
    permanent: true,
  },
  { source: '/ivf-doctor-in-delhi-ncr/', destination: blogListingDestination, permanent: true },
  { source: '/choose-the-right-ivf-centre-in-delhi/', destination: blogListingDestination, permanent: true },
  { source: '/ivf-treatment-in-gurgaon/', destination: blogListingDestination, permanent: true },
  {
    source: '/ivf-treatment-in-kochi/',
    destination: '/english/ivf-treatment-in-kochi/',
    permanent: true,
  },
  { source: '/top-10-best-ivf-centres-in-ghaziabad/', destination: blogListingDestination, permanent: true },
  { source: '/best-ivf-centre-in-kochi-what-to-look-for/', destination: blogListingDestination, permanent: true },
  { source: '/top-10-best-ivf-centres-in-delhi-ncr/', destination: blogListingDestination, permanent: true },
  { source: '/medical-treatment-chronic-illnesses/', destination: blogListingDestination, permanent: true },
  {
    source: '/genetic-conditions-understanding-their-role-in-fertility-and-parenthood/',
    destination: blogListingDestination,
    permanent: true,
  },
  {
    source: '/hormonal-imbalances-impact-on-fertility/',
    destination: '/english/hormonal-imbalances-impact-on-fertility/',
    permanent: true,
  },
  {
    source: '/failed-ivf-a-dead-end/',
    destination: '/english/failed-ivf-a-dead-end/',
    permanent: true,
  },
  {
    source: '/male-fertility-preservation-sperm-freezing/',
    destination: '/english/male-fertility-preservation-sperm-freezing/',
    permanent: true,
  },
  {
    source: '/male-fertility-test-when-and-why-you-should-consider-it/',
    destination: '/english/male-fertility-test-when-and-why-you-should-consider-it/',
    permanent: true,
  },
  { source: '/how-to-get-periods-immediately/', destination: blogListingDestination, permanent: true },
  {
    source: '/thin-endometrium-meaning-causes-and-its-impact-on-fertility/',
    destination: blogListingDestination,
    permanent: true,
  },
  {
    source: '/ejaculation-disorders-causes-types-and-treatment/',
    destination: '/english/ejaculation-disorders-causes-types-and-treatment/',
    permanent: true,
  },
  {
    source: '/low-sperm-count-here-is-what-you-need-to-know/',
    destination: '/english/low-sperm-count-here-is-what-you-need-to-know/',
    permanent: true,
  },
  {
    source: '/how-to-improve-sperm-health/',
    destination: '/english/how-to-improve-sperm-health/',
    permanent: true,
  },
  { source: '/follicular-monitoring/', destination: blogListingDestination, permanent: true },
  {
    source: '/male-infertility-causes-symptoms-solutions/',
    destination: '/english/male-infertility-causes-symptoms-solutions/',
    permanent: true,
  },
  {
    source: '/male-factor-infertility-causes-treatment/',
    destination: '/english/male-factor-infertility-causes-treatment/',
    permanent: true,
  },
  {
    source: '/embryo-quality-most-for-ivf-success/',
    destination: '/english/embryo-quality-most-for-ivf-success/',
    permanent: true,
  },
  {
    source: '/can-ivf-help-with-female-infertility-caused-by-pcos/',
    destination: '/english/can-ivf-help-with-female-infertility-caused-by-pcos/',
    permanent: true,
  },
  {
    source: '/age-and-fertility-explained-key-facts-you-must-know/',
    destination: '/english/age-and-fertility-explained-key-facts-you-must-know/',
    permanent: true,
  },
  {
    source: '/embryo-transfer-signs-symptoms/',
    destination: '/english/embryo-transfer-signs-symptoms/',
    permanent: true,
  },
  {
    source: '/boosting-fertility-natural-ways-to-increase-amh-levels/',
    destination: '/english/natural-ways-to-increase-amh-levels/',
    permanent: true,
  },
  {
    source: '/nisantaanta-ka-hal-ab-mumkin-hai/',
    destination: '/hindi/nisantaanta-ka-hal-ab-mumkin-hai/',
    permanent: true,
  },
  {
    source: '/achhi-jeevan-shailee-se-behtar-ho-sakti-hai-aapki-fertility/',
    destination: '/hindi/achhi-jeevan-shailee-se-behtar-ho-sakti-hai-aapki-fertility/',
    permanent: true,
  },
  {
    source: '/ivf-se-maa-banne-ka-safar-umeed-aur-haqeeqat/',
    destination: '/hindi/ivf-se-maa-banne-ka-safar-umeed-aur-haqeeqat/',
    permanent: true,
  },
  {
    source: '/bulky-uterus-symptoms-causes-treatment/',
    destination: '/english/bulky-uterus-symptoms-causes-treatment/',
    permanent: true,
  },
  {
    source: '/pcos-ivf-and-the-menstrual-cycle/',
    destination: '/english/pcos-ivf-and-the-menstrual-cycle/',
    permanent: true,
  },
  {
    source: '/hormonal-health-and-ivf/',
    destination: '/english/hormonal-health-and-ivf/',
    permanent: true,
  },
  {
    source: '/key-factors-that-influence-ivf-success/',
    destination: '/english/key-factors-that-influence-ivf-success/',
    permanent: true,
  },
  {
    source: '/how-diet-exercise-affect-pregnancy/',
    destination: '/english/how-diet-exercise-affect-pregnancy/',
    permanent: true,
  },
  {
    source: '/prp-therapy-for-ivf-success/',
    destination: '/english/prp-therapy-for-ivf-success/',
    permanent: true,
  },
  {
    source: '/getting-pregnant-naturally/',
    destination: '/english/getting-pregnant-naturally/',
    permanent: true,
  },
  {
    source: '/cervical-health-ivf-success/',
    destination: '/english/cervical-health-ivf-success/',
    permanent: true,
  },
  {
    source: '/why-does-ivf-fail/',
    destination: '/english/why-does-ivf-fail/',
    permanent: true,
  },
  {
    source: '/diabetes-in-men-and-women/',
    destination: '/english/diabetes-in-men-and-women/',
    permanent: true,
  },
  {
    source: '/hypertension-impacts-pregnancy-and-fertility/',
    destination: '/english/hypertension-impacts-pregnancy-and-fertility/',
    permanent: true,
  },
  { source: '/how-does-the-thyroid-affect-fertility/', destination: blogListingDestination, permanent: true },
  {
    source: '/pgta-ivf-journey/',
    destination: '/english/pgta-ivf-journey/',
    permanent: true,
  },
  {
    source: '/online-prenatal-yoga/',
    destination: '/english/online-prenatal-yoga/',
    permanent: true,
  },
  {
    source: '/male-infertility-symptoms-causes-treatment/',
    destination: '/english/male-infertility-symptoms-causes-treatment/',
    permanent: true,
  },
  {
    source: '/how-lifestyle-affects-fertility-what-you-can/',
    destination: '/english/how-lifestyle-affects-fertility-what-you-can/',
    permanent: true,
  },
  {
    source: '/ivf-journey-process-essential-tips-dos-donts/',
    destination: '/english/ivf-journey-process-essential-tips-dos-donts/',
    permanent: true,
  },
  {
    source: '/choosing-the-right-ivf-specialist/',
    destination: '/english/choosing-the-right-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/affordable-ivf-cost/',
    destination: '/english/affordable-ivf-cost/',
    permanent: true,
  },
  {
    source: '/advancing-parenthood-at-premier-icsi-centres/',
    destination: '/english/advancing-parenthood-at-premier-icsi-centres/',
    permanent: true,
  },
  {
    source: '/health-in-fertility-treatments/',
    destination: '/english/health-in-fertility-treatments/',
    permanent: true,
  },
  {
    source: '/understanding-the-impact-of-icsi-on-art-success/',
    destination: '/english/understanding-the-impact-of-icsi-on-art-success/',
    permanent: true,
  },
  {
    source: '/miscarriage-journey-from-coping-healing/',
    destination: '/english/miscarriage-journey-from-coping-healing/',
    permanent: true,
  },
  {
    source: '/how-lifestyle-affects-fertility-what-you-can-do-to-improve-your-chances/',
    destination: '/english/how-lifestyle-affects-fertility-what-you-can-do-to-improve-your-chances/',
    permanent: true,
  },
  {
    source: '/pcos-symptoms-treatment-and-fertility/',
    destination: '/english/pcos-symptoms-treatment-and-fertility/',
    permanent: true,
  },
  {
    source: '/shighrapatan-ke-upay-lakshan-aur-ilaaj/',
    destination: '/hindi/shighrapatan-ke-upay-lakshan-aur-ilaaj/',
    permanent: true,
  },
  {
    source: '/kam-shukranu-sankhya-kaaran-lakshan-aur-upchaar/',
    destination: '/hindi/kam-shukranu-sankhya-kaaran-lakshan-aur-upchaar/',
    permanent: true,
  },
  { source: '/so-you-have-completed-your-covid-vaccination/', destination: blogListingDestination, permanent: true },
  {
    source: '/what-is-prp-treatment-in-ivf/',
    destination: '/english/what-is-prp-treatment-in-ivf/',
    permanent: true,
  },
  {
    source: '/understanding-the-basics-of-fertility/',
    destination: '/english/understanding-the-basics-of-fertility/',
    permanent: true,
  },
  {
    source: '/can-i-pill-cause-infertility-in-women/',
    destination: '/english/can-i-pill-cause-infertility-in-women/',
    permanent: true,
  },
  {
    source: '/poor-egg-quality-and-fertility/',
    destination: '/english/poor-egg-quality-and-fertility/',
    permanent: true,
  },
  {
    source: '/thyroid-impacts-pregnancy-and-ivf-success/',
    destination: '/english/thyroid-impacts-pregnancy-and-ivf-success/',
    permanent: true,
  },
];

export default legacyBlogRedirects;
