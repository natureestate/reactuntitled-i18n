import { getRequestConfig } from 'next-intl/server';

/**
 * Configuration สำหรับ next-intl
 * กำหนด locale และโหลดไฟล์ messages สำหรับแต่ละภาษา
 */
export default getRequestConfig(async ({ locale }) => {
    // ตรวจสอบว่า locale ถูกต้อง ถ้าไม่ใช่ให้ใช้ 'th' เป็น default (เปลี่ยนตาม middleware)
    const validLocale = ['en', 'th'].includes(locale) ? locale : 'th';
    
    return {
        locale: validLocale,
        messages: (await import(`./messages/${validLocale}.json`)).default
    };
});