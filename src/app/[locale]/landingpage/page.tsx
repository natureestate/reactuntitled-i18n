import { Fragment } from "react";
import { useTranslations } from 'next-intl';
import { HeroSplitImageI18n } from "@/components/marketing/header-section/hero-split-image-i18n";
import { FeaturesAlternatingLayoutI18n } from "@/components/marketing/features/features-alternating-layout-i18n";

/**
 * Landing Page Component with i18n support
 * รวม components หลักสำหรับ landing page ได้แก่:
 * 1. Header navigation พร้อม language selector (รวมอยู่ใน HeroSplitImageI18n แล้ว)
 * 2. Hero section - แสดงข้อความหลักและ call-to-action
 * 3. Features section - แสดงคุณสมบัติสำคัญในรูปแบบ alternating layout
 * รองรับหลายภาษา (TH/EN) พร้อม IBM Plex Sans Thai font
 */
export default function LandingPage() {
    return (
        <Fragment>
            {/* Hero Section พร้อม Header Navigation และ Language Selector */}
            <HeroSplitImageI18n />
            
            {/* Features Section */}
            <FeaturesAlternatingLayoutI18n />
        </Fragment>
    );
}