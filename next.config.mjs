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
};

export default nextConfig;
