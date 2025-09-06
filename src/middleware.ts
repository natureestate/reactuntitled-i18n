import createMiddleware from 'next-intl/middleware';

/**
 * Middleware สำหรับ next-intl
 * จัดการ locale routing และ detection อัตโนมัติ
 */
export default createMiddleware({
  // รายการ locales ที่รองรับ
  locales: ['en', 'th'],
  
  // Default locale - เปลี่ยนเป็นไทยตามความต้องการ
  defaultLocale: 'th',
  
  // ไม่แสดง locale ใน URL สำหรับ default locale
  localePrefix: 'as-needed',
  
  // ปิดการใช้ Accept-Language header เพื่อไม่ให้ browser locale มากวน
  localeDetection: false
});

export const config = {
  // ใช้ middleware กับทุก path ยกเว้น static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
