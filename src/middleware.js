// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // If this is already our internal rewrite, let it pass directly to the page handler
  if (request.headers.get('x-subdomain-rewrite') === '1') {
    return NextResponse.next();
  }

  const { pathname, searchParams } = request.nextUrl;

  // Ignore internal Next.js paths and system routes
  if (pathname.startsWith('/_')) {
    return NextResponse.next();
  }

  // Support direct host header and reverse-proxy x-forwarded-host header (Hostinger / Apache / Nginx)
  const host =
    request.headers.get('x-forwarded-host') ||
    request.headers.get('host') ||
    '';
  const hostname = host.split(':')[0].toLowerCase();

  // 1. Preserve existing domain redirect: seedsofinnocens.com -> www.seedsofinnocens.com
  if (hostname === 'seedsofinnocens.com') {
    const url = request.nextUrl.clone();
    url.host = 'www.seedsofinnocens.com';
    return NextResponse.redirect(url, 301);
  }

  // 2. Identify requests for the Surgical Centre subdomain
  // Supports:
  // - Production subdomain: soisurgicalcentre.seedsofinnocens.com
  // - Optional www prefix: www.soisurgicalcentre.seedsofinnocens.com
  // - Local dev hostname: soisurgicalcentre.localhost
  // - Local dev preview parameter: ?__subdomain=soisurgicalcentre
  const isSurgicalSubdomain =
    hostname === 'soisurgicalcentre.seedsofinnocens.com' ||
    hostname === 'www.soisurgicalcentre.seedsofinnocens.com' ||
    hostname === 'soisurgicalcentre.localhost' ||
    searchParams.get('__subdomain') === 'soisurgicalcentre';

  // 3. Prevent direct access to internal replica route from main website domain
  if (!isSurgicalSubdomain && (pathname === '/soi-surgical-centre' || pathname === '/soi-surgical-centre/')) {
    const url = request.nextUrl.clone();
    url.pathname = '/seeds-of-innocens-surgical-center/';
    return NextResponse.redirect(url, 301);
  }

  // 4. Handle subdomain routing
  if (isSurgicalSubdomain) {
    // Subdomain root '/' rewrites internally to the new replica route '/soi-surgical-centre/'
    // The browser address bar URL remains https://soisurgicalcentre.seedsofinnocens.com/
    if (pathname === '/' || pathname === '') {
      const url = request.nextUrl.clone();
      url.pathname = '/soi-surgical-centre/';
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-subdomain-rewrite', '1');
      return NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        },
      });
    }

    // If visitor accesses the old path on the subdomain, redirect to subdomain root
    if (
      pathname === '/seeds-of-innocens-surgical-center' ||
      pathname === '/seeds-of-innocens-surgical-center/'
    ) {
      const url = request.nextUrl.clone();
      url.pathname = '/';
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|assets/|fonts/).*)',
  ],
};
