import { Fragment } from "react";
import { useTranslations } from 'next-intl';
import { HeroSplitImageI18n } from "@/components/marketing/header-section/hero-split-image-i18n";
import { FeaturesAlternatingLayoutI18n } from "@/components/marketing/features/features-alternating-layout-i18n";
import { FAQSimple01 } from "@/components/marketing/faq/faq-simple-01";
import { FooterLarge01 } from "@/components/marketing/footers/footer-large-01";

/**
 * Generate static params สำหรับ landing page
 */
export function generateStaticParams() {
    return [
        { locale: 'th' },
        { locale: 'en' }
    ];
}

/**
 * Landing Page Component with i18n support
 * รวม components หลักสำหรับ landing page ได้แก่:
 * 1. Header navigation พร้อม language selector (รวมอยู่ใน HeroSplitImageI18n แล้ว)
 * 2. Hero section - แสดงข้อความหลักและ call-to-action
 * 3. Features section - แสดงคุณสมบัติสำคัญในรูปแบบ alternating layout
 * 4. FAQ section - แสดงคำถามที่พบบ่อยพร้อมไอคอน
 * 5. Footer - แสดงลิงก์และข้อมูลสำคัญ (ลดรายการให้เหลือเฉพาะที่จำเป็น)
 * รองรับหลายภาษา (TH/EN) พร้อม IBM Plex Sans Thai font
 */
export default function LandingPage() {
    return (
        <Fragment>
            {/* Hero Section พร้อม Header Navigation และ Language Selector */}
            <HeroSplitImageI18n />
            
            {/* Features Section - แสดงคุณสมบัติสำคัญ */}
            <FeaturesAlternatingLayoutI18n />
            
            {/* FAQ Section - คำถามที่พบบ่อย */}
            <FAQSimple01 />
            
            {/* Footer Section - ข้อมูลติดต่อและลิงก์สำคัญ */}
            <FooterLarge01 />
        </Fragment>
    );
}