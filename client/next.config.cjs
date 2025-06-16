// next.config.cjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // no more experimental.appDir—Next.js 15+ App Router is on by default
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://jobfindr-q1cl.onrender.com/api/:path*',
      },
    ];
  },
  images: {
    // migrate deprecated domains to remotePatterns if you have them
  },
};

module.exports = nextConfig;
