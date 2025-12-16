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
  // Redirects for International Centers (SEO routes)
  async redirects() {
    return [
      {
        source: '/best-ivf-centre-in-lusaka-zambia',
        destination: '/international/lusaka-zambia',
        permanent: true,
      },
      {
        source: '/best-ivf-centre-in-kitwe-zambia',
        destination: '/international/kitwe-zambia',
        permanent: true,
      },
      {
        source: '/best-ivf-centre-in-mabela-muscat',
        destination: '/international/mabela-muscat',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
