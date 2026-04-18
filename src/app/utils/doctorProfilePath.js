const GENETIC_EXPERT_SLUGS = new Set([
  'dr-alpana-razadan',
  'dr-ranjana-mishra-ivf-specialist',
]);

export const getDoctorProfilePath = (doctor) => {
  const doctorSlug = doctor?.newSlug || `${doctor?.slug}-ivf-specialist`;
  if (!doctorSlug) return '/ivf-doctor';

  const basePath = GENETIC_EXPERT_SLUGS.has(doctorSlug) ? '/genetic-expert' : '/ivf-doctor';
  return `${basePath}/${doctorSlug}`;
};
