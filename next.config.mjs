/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Only use static export for production builds
  ...(isProduction && {
    output: 'export',
  }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable automatic prefetching for all links
  reactStrictMode: true,
};

export default nextConfig;
