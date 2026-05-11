import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Never touch Next internals or static files — mutating request headers here
  // can break `/_next/static/*` in dev and strip CSS/JS (404 on layout.css, chunks).
  if (pathname.startsWith('/_next/')) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  if (pathname === '/favicon.ico') {
    return NextResponse.next();
  }

  if (/\.(?:ico|png|jpg|jpeg|gif|svg|webp|woff2?|ttf|eot)$/i.test(pathname)) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-seo-pathname', pathname);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Exclude Next static/image and favicon from the matcher so middleware
     * does not run on those requests at all (faster + avoids edge cases).
     */
    '/((?!_next/static|_next/image|_next/webpack-hmr|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|svg|webp|woff2?|ttf|eot)$).*)',
    '/',
  ],
};
