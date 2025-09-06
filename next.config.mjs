import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // เปิดใช้งาน experimental features
  experimental: {
    optimizePackageImports: ['@untitledui/icons']
  },
  
  // กำหนดค่าสำหรับ static export (สำหรับ Workers)
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // กำหนด base path สำหรับ static files
  // assetPrefix: process.env.NODE_ENV === 'production' ? './' : ''
};

export default withNextIntl(nextConfig);