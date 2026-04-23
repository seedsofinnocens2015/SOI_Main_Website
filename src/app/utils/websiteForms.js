/**
 * Central SOI website form API: one base URL and one place to change paths.
 *
 * - Set NEXT_PUBLIC_SOI_API_URL in .env.local if the API host changes (no trailing slash).
 * - Legacy JSON endpoints: book-appointment, call-back-form (unchanged payloads).
 * - All other forms POST to unified: /api/website/form-submit
 *   Body: { formType, ...fields } or multipart + formType field (implement on server).
 */

export function getWebsiteApiBaseUrl() {
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SOI_API_URL) {
    return `${process.env.NEXT_PUBLIC_SOI_API_URL}`.replace(/\/$/, '');
  }
  return 'https://soi.seedsofinnocens.com';
}

export const WEBSITE_FORM_PATHS = {
  bookAppointment: '/api/new-website/book-appointment',
  callBack: '/api/new-website/call-back-form',
  unified: '/api/new-website/form-submit',
};

/** Use for unified submissions; helps backend route / filter leads */
export const WEBSITE_FORM_TYPES = {
  FEEDBACK: 'feedback',
  HOME_CONTACT: 'home_contact',
  FAQ_INQUIRY: 'faq_inquiry',
  BLOG_APPOINTMENT: 'blog_appointment',
  INTERNATIONAL_CONTACT: 'international_contact',
  TRAINING_REGISTRATION: 'training_registration',
  CAREERS_APPLY: 'careers_apply',
  CAREERS_GENERAL: 'careers_general',
};

const PHONE_FIELD_KEYS = ['phone', 'mobile', 'contact', 'contactNo', 'contact_no', 'contactNumber'];

function getInvalidPhoneError(payload = {}) {
  const phoneKey = PHONE_FIELD_KEYS.find((key) => typeof payload[key] === 'string' && payload[key].trim() !== '');
  if (!phoneKey) return '';

  const phoneValue = payload[phoneKey].replace(/\D/g, '');
  if (phoneValue.length !== 10) {
    return 'Phone number must be exactly 10 digits.';
  }
  return '';
}

async function parseJsonResponse(res) {
  try {
    return await res.json();
  } catch {
    return {};
  }
}

export async function postWebsiteJson(path, body) {
  const base = getWebsiteApiBaseUrl();
  const res = await fetch(`${base}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await parseJsonResponse(res);
  return { response: res, data, ok: res.ok && data.ok === true };
}

export async function submitBookAppointment(payload) {
  const phoneError = getInvalidPhoneError(payload);
  if (phoneError) return { response: null, data: { ok: false, error: phoneError }, ok: false };
  return postWebsiteJson(WEBSITE_FORM_PATHS.bookAppointment, payload);
}

export async function submitCallBack(payload) {
  const phoneError = getInvalidPhoneError(payload);
  if (phoneError) return { response: null, data: { ok: false, error: phoneError }, ok: false };
  return postWebsiteJson(WEBSITE_FORM_PATHS.callBack, payload);
}

export async function submitUnifiedForm(formType, payload) {
  const phoneError = getInvalidPhoneError(payload);
  if (phoneError) return { response: null, data: { ok: false, error: phoneError }, ok: false };
  return postWebsiteJson(WEBSITE_FORM_PATHS.unified, { formType, ...payload });
}

export async function submitUnifiedFormMultipart(formData) {
  const multipartPhone = PHONE_FIELD_KEYS.find((key) => {
    const value = formData.get(key);
    return typeof value === 'string' && value.trim() !== '';
  });
  if (multipartPhone) {
    const phoneError = getInvalidPhoneError({ [multipartPhone]: formData.get(multipartPhone) });
    if (phoneError) return { response: null, data: { ok: false, error: phoneError }, ok: false };
  }

  const base = getWebsiteApiBaseUrl();
  const res = await fetch(`${base}${WEBSITE_FORM_PATHS.unified}`, {
    method: 'POST',
    body: formData,
  });
  const data = await parseJsonResponse(res);
  return { response: res, data, ok: res.ok && data.ok === true };
}
