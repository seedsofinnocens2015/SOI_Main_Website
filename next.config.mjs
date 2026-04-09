/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  basePath,
  poweredByHeader: false,
  // Only use static export for production builds
  ...(isProduction && {
    output: 'export',
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['react-icons/fa', 'react-icons/fa6'],
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
