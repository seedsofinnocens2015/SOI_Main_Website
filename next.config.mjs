/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Only use static export for production builds
  ...(isProduction && {
    output: 'export',
    basePath: '/new',
    assetPrefix: '/new',
  }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable prefetching completely for static export
  ...(isProduction && {
    experimental: {
      // Disable RSC prefetching in static export
      isrMemoryCacheSize: 0,
    },
  }),
  // Disable automatic prefetching for all links
  reactStrictMode: true,
};

export default nextConfig;
