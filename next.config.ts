// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://sms-activate.org/',
        permanent: true,
      },
      {
        source: '/:path*',
        destination: 'https://sms-activate.org/:path*',
        permanent: false,
      }
    ];
  }
};

module.exports = nextConfig;
