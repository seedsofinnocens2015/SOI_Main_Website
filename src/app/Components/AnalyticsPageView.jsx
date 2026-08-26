'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const GA_IDS = ['G-EPNR7W4HYW', 'G-TE12PW7T9Y', 'G-3D97K1YYNV'];
const AW_ID = 'AW-719316761';

export default function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });

    if (typeof window.gtag === 'function') {
      window.gtag('config', AW_ID, { page_path: pagePath });
      GA_IDS.forEach((id) => {
        window.gtag('config', id, { page_path: pagePath });
      });
    }

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [pathname, searchParams]);

  return null;
}
