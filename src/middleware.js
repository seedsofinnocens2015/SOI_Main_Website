// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

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

  // 2. Redirect legacy /soi-surgical-centre to official surgical centre subdomain
  if (pathname === '/soi-surgical-centre' || pathname === '/soi-surgical-centre/') {
    return NextResponse.redirect('https://soisurgicalcentre.seedsofinnocens.com/', 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|assets/|fonts/).*)',
  ],
};
