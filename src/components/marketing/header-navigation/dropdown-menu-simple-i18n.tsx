"use client";

import { useTranslations } from 'next-intl';
import { BookClosed, FileCode01, LifeBuoy01, PlayCircle, Stars02 } from "@untitledui/icons";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

/**
 * Dropdown Menu Simple with i18n support
 * เมนูย่อยที่รองรับหลายภาษาสำหรับ header navigation
 */
export const DropdownMenuSimpleI18n = () => {
    const t = useTranslations('dropdown');

    const items = [
        {
            title: t('blog.title'),
            subtitle: t('blog.subtitle'),
            href: "/blog",
            Icon: BookClosed,
        },
        {
            title: t('customerStories.title'),
            subtitle: t('customerStories.subtitle'),
            href: "/customer-stories",
            Icon: Stars02,
        },
        {
            title: t('videoTutorials.title'),
            subtitle: t('videoTutorials.subtitle'),
            href: "/tutorials",
            Icon: PlayCircle,
        },
        {
            title: t('documentation.title'),
            subtitle: t('documentation.subtitle'),
            href: "/docs",
            Icon: FileCode01,
        },
        {
            title: t('helpSupport.title'),
            subtitle: t('helpSupport.subtitle'),
            href: "/help",
            Icon: LifeBuoy01,
        },
    ];

    return (
        <div className="px-3 pb-2 md:max-w-84 md:p-0">
            <nav className="overflow-hidden rounded-2xl bg-primary py-2 shadow-xs ring-1 ring-secondary_alt md:p-2 md:shadow-lg">
                <ul className="flex flex-col gap-0.5">
                    {items.map(({ title, subtitle, href, Icon }) => (
                        <li key={title}>
                            <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
