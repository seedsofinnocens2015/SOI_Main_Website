/**
 * Central SOI website form API: one base URL and one place to change paths.
 *
 * - Legacy JSON endpoints: book-appointment, call-back-form (unchanged payloads).
 * - All other forms POST to unified: /api/website/form-submit
 *   Body: { formType, ...fields } or multipart + formType field (implement on server).
 */
const WEBSITE_API_BASE_URL = 'https://seeds.seedsofinnocens.com';
// const WEBSITE_API_BASE_URL = 'http://localhost:4000';

export function getWebsiteApiBaseUrl() {
  return WEBSITE_API_BASE_URL;
}

export const WEBSITE_FORM_PATHS = {
  bookAppointment: '/api/new-website/book-appointment',
  callBack: '/api/new-website/call-back-form',
  unified: '/api/new-website/form-submit',
  surgical: '/api/new-website/surgical-form',
  jobApplications: '/api/job-applications',
  generalJobApplications: '/api/job-applications/general',
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
  const allowsInternationalPhone = [
    'International Centre Banner',
    'International Contact Team',
  ].includes(payload.source);
  if (allowsInternationalPhone) {
    if (!/^[1-9]\d{6,14}$/.test(phoneValue)) {
      return 'Enter a valid international phone number with country code.';
    }
    return '';
  }
  if (phoneValue.length > 0 && !/^[6-9]/.test(phoneValue)) {
    return 'Invalid number';
  }
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

function getUtmParams() {
  if (typeof window === 'undefined') return {};
  
  let utms = {
    utm_source: null,
    utm_medium: null,
    utm_campaign: null
  };
  
  try {
    const urlParams = new URLSearchParams(window.location.search);
    let hasUtmInUrl = false;
    
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(key => {
      const val = urlParams.get(key);
      if (val) {
        utms[key] = val;
        sessionStorage.setItem(key, val);
        hasUtmInUrl = true;
      }
    });

    if (!hasUtmInUrl) {
      ['utm_source', 'utm_medium', 'utm_campaign'].forEach(key => {
        const storedVal = sessionStorage.getItem(key);
        if (storedVal) {
          utms[key] = storedVal;
        }
      });
    }
  } catch (e) {
    // ignore
  }
  return utms;
}

function appendUtmParams(payload) {
  const utms = getUtmParams();
  if (utms.utm_source) payload.utm_source = utms.utm_source;
  if (utms.utm_medium) payload.utm_medium = utms.utm_medium;
  if (utms.utm_campaign) payload.utm_campaign = utms.utm_campaign;
  return payload;
}

export async function postWebsiteJson(path, body) {
  const base = getWebsiteApiBaseUrl();
  const finalBody = appendUtmParams(body);
  const res = await fetch(`${base}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(finalBody),
  });
  const data = await parseJsonResponse(res);
  return { response: res, data, ok: res.ok && data.ok === true };
}

export async function submitBookAppointment(payload) {
  const phoneError = getInvalidPhoneError(payload);
  if (phoneError) return { response: null, data: { ok: false, error: phoneError }, ok: false };
  return postWebsiteJson(WEBSITE_FORM_PATHS.bookAppointment, payload);
}

export async function submitSurgicalConsultation(payload) {
  const phoneError = getInvalidPhoneError(payload);
  if (phoneError) return { response: null, data: { ok: false, error: phoneError }, ok: false };
  return postWebsiteJson(WEBSITE_FORM_PATHS.surgical, payload);
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

function appendUtmParamsToFormData(formData) {
  const utms = getUtmParams();
  if (utms.utm_source && !formData.has('utm_source')) formData.append('utm_source', utms.utm_source);
  if (utms.utm_medium && !formData.has('utm_medium')) formData.append('utm_medium', utms.utm_medium);
  if (utms.utm_campaign && !formData.has('utm_campaign')) formData.append('utm_campaign', utms.utm_campaign);
  return formData;
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
  const finalFormData = appendUtmParamsToFormData(formData);
  const res = await fetch(`${base}${WEBSITE_FORM_PATHS.unified}`, {
    method: 'POST',
    body: finalFormData,
  });
  const data = await parseJsonResponse(res);
  return { response: res, data, ok: res.ok && data.ok === true };
}

export async function submitJobApplicationMultipart(formData) {
  const phoneError = getInvalidPhoneError({ phone: formData.get('phone') });
  if (phoneError) return { response: null, data: { ok: false, error: phoneError }, ok: false };

  const base = getWebsiteApiBaseUrl();
  const finalFormData = appendUtmParamsToFormData(formData);
  const res = await fetch(`${base}${WEBSITE_FORM_PATHS.jobApplications}`, {
    method: 'POST',
    body: finalFormData,
  });
  const data = await parseJsonResponse(res);
  return { response: res, data, ok: res.ok && data.ok === true };
}

export async function submitGeneralJobApplicationMultipart(formData) {
  const phoneError = getInvalidPhoneError({ phone: formData.get('phone') });
  if (phoneError) return { response: null, data: { ok: false, error: phoneError }, ok: false };

  const base = getWebsiteApiBaseUrl();
  const finalFormData = appendUtmParamsToFormData(formData);
  const res = await fetch(`${base}${WEBSITE_FORM_PATHS.generalJobApplications}`, {
    method: 'POST',
    body: finalFormData,
  });
  const data = await parseJsonResponse(res);
  return { response: res, data, ok: res.ok && data.ok === true };
}
