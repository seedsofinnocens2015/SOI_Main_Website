// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host');

  if (host === 'seedsofinnocens.com') {
    const url = request.nextUrl.clone();
    url.host = 'www.seedsofinnocens.com';

    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}