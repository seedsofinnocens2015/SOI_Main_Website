/**
 * Query ?type=... on /thank-you so analytics and users know which form was submitted.
 */

export const THANK_YOU_TYPE = Object.freeze({
  appointment: 'appointment',
  callBack: 'call-back',
  internationalContact: 'international-contact',
  careersApply: 'careers-apply',
  careersGeneral: 'careers-general',
  training: 'training',
  feedback: 'feedback',
  blogAppointment: 'blog-appointment',
  faq: 'faq',
  contact: 'contact',
  default: 'default',
});

/**
 * @param {string} [type] — one of THANK_YOU_TYPE values; omit or default for generic thank-you
 * @returns {string} path for router.push / Link href
 */
export function getThankYouUrl(type) {
  if (!type || type === THANK_YOU_TYPE.default) {
    return '/thank-you';
  }
  return `/thank-you?type=${encodeURIComponent(type)}`;
}
