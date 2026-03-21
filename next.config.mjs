/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/new' : '';

const nextConfig = {
  // Use /new only on production deployment (Hostinger subpath)
  basePath,
  // Only use static export for production builds
  ...(isProduction && {
    output: 'export',
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable automatic prefetching for all links
  reactStrictMode: true,
};

export default nextConfig;
