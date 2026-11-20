import { NextResponse } from 'next/server';

const BACKEND_BASE = 'https://seeds.seedsofinnocens.com';

export async function POST(request, context) {
  try {
    const { params } = context;
    const resolvedParams = await Promise.resolve(params);
    const slugPath = Array.isArray(resolvedParams?.slug)
      ? resolvedParams.slug.join('/')
      : '';
    const targetUrl = `${BACKEND_BASE}/api/new-website/${slugPath}`;

    const body = await request.json().catch(() => ({}));
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('API proxy error:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to process request.' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
