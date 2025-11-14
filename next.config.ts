/** @type {import('next').NextConfig} */
const nextConfig = {
  // 禁用默认的静态文件服务，强制走重定向
  trailingSlash: true,
  
  async redirects() {
    return [
      // 根路径重定向
      {
        source: '/',
        destination: 'https://sms-activate.org',
        permanent: false,
        basePath: false
      },
      // 所有子路径重定向
      {
        source: '/:path*',
        destination: 'https://sms-activate.org/:path*',
        permanent: false,
        basePath: false
      }
    ];
  },
  
  // 重要：禁用自动优化，避免直接跳转
  experimental: {
    largePageDataBytes: 128 * 100000
  }
};

module.exports = nextConfig;
