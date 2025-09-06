import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // เปิดใช้งาน experimental features
  experimental: {
    optimizePackageImports: ['@untitledui/icons']
  }
};

export default withNextIntl(nextConfig);