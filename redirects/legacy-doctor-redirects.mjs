/**
 * Legacy doctor profile URL redirects.
 * Keep old doctor profile slugs here and map them to the latest profile paths.
 *
 * Static export (output: 'export'): Next.js does not emit these redirects on the server.
 * Mirror rows in the site root `.htaccess` (legacy-doctor section). `/doctors/dr-alpana-razadan-...` is
 * overridden by legacy-service to `/genetic-expert/...` in next.config order — keep that same order in Apache.
 */
const legacyDoctorRedirects = [
  {
    source: '/doctors/dr-gauri-agarwal-ivf-specialist/',
    destination: '/ivf-doctor/dr-gauri-agarwal-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-alpana-razadan-ivf-specialist/',
    destination: '/geneticist-doctor/dr-alpana-razadan/',
    permanent: true,
  },
  {
    source: '/doctors/dr-aditi-bhatnagar-ivf-specialist/',
    destination: '/ivf-doctor/dr-aditi-bhatnagar-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-britika-prakash-ivf-specialist/',
    destination: '/ivf-doctor/dr-britika-prakash-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-preeti-ivf-specialist/',
    destination: '/ivf-doctor/dr-preeti-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-varkha-chandra-ivf-specialist/',
    destination: '/ivf-doctor/dr-varkha-chandra-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-debilina-roy-ivf-specialist/',
    destination: '/ivf-doctor/dr-debilina-roy-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-sanjana-singh-ivf-specialist/',
    destination: '/ivf-doctor/dr-sanjana-singh-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-beena-upadhyay-ivf-specialist/',
    destination: '/ivf-doctor/dr-beena-upadhyay-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-pallavi-shrivastava-ivf-specialist/',
    destination: '/ivf-doctor/dr-pallavi-shrivastava-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-julie-chhawchharia-ivf-specialist/',
    destination: '/ivf-doctor/dr-julie-chhawchharia-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-vinod-kumar-b-ivf-specialists/',
    destination: '/ivf-doctor/dr-vinod-kumar-b-ivf-specialists/',
    permanent: true,
  },
  {
    source: '/doctors/dr-sonia-raju-aluvilayil-ivf-specialist/',
    destination: '/ivf-doctor/dr-sonia-raju-aluvilayil-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-jasna-mohammed-ivf-specialist/',
    destination: '/ivf-doctor/dr-jasna-mohammed-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-sneha-narayan-ivf-specialist/',
    destination: '/ivf-doctor/dr-sneha-narayan-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-adrija-ghosal-ivf-specialist/',
    destination: '/ivf-doctor/dr-adrija-ghosal-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-rashmi-singh-ivf-specialist/',
    destination: '/ivf-doctor/dr-rashmi-singh-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-mangla-kawade-ivf-specialist/',
    destination: '/ivf-doctor/dr-mangla-kawade-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-lisha-singh-ivf-specialist/',
    destination: '/ivf-doctor/dr-lisha-singh-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-monika-mann-ivf-specialist/',
    destination: '/ivf-doctor/dr-monika-mann-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-pratik-kakani-ivf-specialists/',
    destination: '/ivf-doctor/dr-pratik-kakani-ivf-specialists/',
    permanent: true,
  },
  {
    source: '/doctors/dr-disha-datta-choudhury-ivf-specialist/',
    destination: '/ivf-doctor/dr-disha-datta-choudhury-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-aiman-akram-ivf-specialist/',
    destination: '/ivf-doctor/dr-aiman-akram-ivf-specialist/',
    permanent: true,
  },
  {
    source: '/doctors/dr-nivedita-nehal-ivf-specialist/',
    destination: '/ivf-doctor/dr-nivedita-nehal-ivf-specialist/',
    permanent: true,
  },
];

export default legacyDoctorRedirects;
