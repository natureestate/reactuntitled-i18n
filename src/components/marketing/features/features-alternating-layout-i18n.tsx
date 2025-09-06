"use client";

import type { FC, HTMLAttributes } from "react";
import { useTranslations } from 'next-intl';
import { ChartBreakoutSquare, MessageChatCircle, ZapFast } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";
import { cx } from "@/utils/cx";

const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div
            className={cx(
                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[20.08px] md:p-0.5 md:shadow-modern-mockup-outer-lg md:ring-[1.25px] lg:absolute lg:w-auto lg:max-w-none",
                props.className,
            )}
        >
            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.57px] md:p-[3.5px] md:shadow-modern-mockup-inner-lg">
                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-gray-200 md:rounded-[15.06px] md:ring-[1.25px]">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

/**
 * Features Alternating Layout Component with i18n support
 * Features section พร้อมรองรับหลายภาษา
 * ใช้ translations จาก next-intl และ IBM Plex Sans Thai font
 */
export const FeaturesAlternatingLayoutI18n = () => {
    const t = useTranslations('features');

    return (
        <section className="flex flex-col gap-12 overflow-hidden bg-primary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">{t('sectionTitle')}</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">{t('title')}</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        {t('subtitle')}
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                {/* Team Inboxes Section */}
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={MessageChatCircle} size="lg" color="brand" theme="light" />
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">{t('teamInboxes.title')}</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            {t('teamInboxes.subtitle')}
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[0, 1, 2].map((index) => (
                                <CheckItemText 
                                    key={index} 
                                    size="md" 
                                    iconStyle="outlined" 
                                    color="primary" 
                                    text={t(`teamInboxes.features.${index}`)} 
                                />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:left-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>

                {/* Instant Answers Section */}
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={ZapFast} size="lg" color="brand" theme="light" />
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">{t('instantAnswers.title')}</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            {t('instantAnswers.subtitle')}
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[0, 1, 2].map((index) => (
                                <CheckItemText 
                                    key={index} 
                                    size="md" 
                                    iconStyle="outlined" 
                                    color="primary" 
                                    text={t(`instantAnswers.features.${index}`)} 
                                />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:right-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>

                {/* Team Reports Section */}
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} size="lg" color="brand" theme="light" />
                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">{t('teamReports.title')}</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            {t('teamReports.subtitle')}
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[0, 1, 2].map((index) => (
                                <CheckItemText 
                                    key={index} 
                                    size="md" 
                                    iconStyle="outlined" 
                                    color="primary" 
                                    text={t(`teamReports.features.${index}`)} 
                                />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:left-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>
            </div>
        </section>
    );
};
