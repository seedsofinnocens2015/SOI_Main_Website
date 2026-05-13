import legacyCenterRedirects from './redirects/legacy-center-redirects.mjs';
import legacyServiceRedirects from './redirects/legacy-service-redirects.mjs';
import legacyDoctorRedirects from './redirects/legacy-doctor-redirects.mjs';
import legacyContactRedirects from './redirects/legacy-contact-redirects.mjs';
import legacyBlogRedirects from './redirects/legacy-blog-redirects.mjs';
/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  basePath,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 80, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'react-icons/fa',
      'react-icons/fa6',
      'react-icons/io5',
      'react-icons/hi2',
      'react-bootstrap',
    ],
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      ...legacyCenterRedirects,
      ...legacyServiceRedirects,
      ...legacyDoctorRedirects,
      ...legacyContactRedirects,
      ...legacyBlogRedirects,
    ];
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
