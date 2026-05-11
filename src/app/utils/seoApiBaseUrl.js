/**
 * Same SEO API as the admin panel should use, so local panel + local site both read one DB.
 * Override anytime: NEXT_PUBLIC_SEO_API_BASE_URL=https://seeds.seedsofinnocens.com
 */
export function getSeoApiBaseUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SEO_API_BASE_URL;
  if (fromEnv && String(fromEnv).trim()) {
    return String(fromEnv).trim().replace(/\/+$/, '');
  }
  if (process.env.NODE_ENV === 'development') {
    return 'https://seeds.seedsofinnocens.com';
  }
  return 'https://seeds.seedsofinnocens.com';
}
