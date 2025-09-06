"use client";

import type { FC, ReactNode } from "react";
import { useTranslations } from 'next-intl';
import { BookClosed, BookOpen01, Codepen, FileCode01, LifeBuoy01, PlayCircle, Stars02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

type MenuItem = {
    title: string;
    subtitle?: string;
    href: string;
    Icon: FC<{ className?: string }>;
    badge?: ReactNode;
};

type MenuColumn = {
    title: string;
    items: MenuItem[];
};

/**
 * Dropdown Menu With Two Cols And Links And Footer with i18n support
 * เมนูย่อยแบบสองคอลัมน์พร้อม footer ที่รองรับหลายภาษา
 */
export const DropdownMenuWithTwoColsAndLinksAndFooterI18n = () => {
    const tDropdown = useTranslations('dropdown');
    const tResources = useTranslations('dropdownResources');

    const columns: MenuColumn[] = [
        {
            title: tResources('columnsTitle.resources'),
            items: [
                {
                    title: tDropdown('blog.title'),
                    subtitle: tDropdown('blog.subtitle'),
                    href: "/",
                    Icon: BookClosed,
                },
                {
                    title: tDropdown('customerStories.title'),
                    subtitle: tDropdown('customerStories.subtitle'),
                    href: "/",
                    Icon: Stars02,
                },
                {
                    title: tDropdown('videoTutorials.title'),
                    subtitle: tDropdown('videoTutorials.subtitle'),
                    href: "/",
                    Icon: PlayCircle,
                },
            ],
        },
        {
            title: tResources('columnsTitle.support'),
            items: [
                {
                    title: tDropdown('documentation.title'),
                    subtitle: tDropdown('documentation.subtitle'),
                    href: "/",
                    Icon: FileCode01,
                },
                {
                    title: tDropdown('helpSupport.title'),
                    subtitle: tDropdown('helpSupport.subtitle'),
                    href: "/",
                    Icon: LifeBuoy01,
                },
                {
                    title: tResources('apiReference.title'),
                    subtitle: tResources('apiReference.subtitle'),
                    href: "/",
                    Icon: Codepen,
                },
            ],
        },
    ];

    return (
        <div className="px-3 pb-2 md:max-w-200 md:p-0">
            <nav className="overflow-hidden rounded-xl bg-secondary shadow-xs ring-1 ring-secondary_alt md:rounded-2xl md:shadow-lg">
                <div className="flex flex-col gap-5 rounded-xl bg-primary pt-4 pb-5 ring-1 ring-secondary md:gap-6 md:rounded-t-2xl md:p-6 md:pt-5">
                    <div className="flex flex-col gap-1 px-4 md:p-0">
                        <p className="text-md font-semibold text-primary">{tResources('title')}</p>
                        <p className="text-sm text-tertiary">{tResources('subtitle')}</p>
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row md:gap-8 md:py-0">
                        <div className="-mb-px flex flex-col gap-4 border-b border-b-secondary px-4 pb-5 md:mb-0 md:gap-5 md:border-none md:p-0">
                            <h3 className="text-sm font-semibold text-brand-tertiary">{tResources('getStarted')}</h3>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { title: tResources('setup101'), href: "#" },
                                    { title: tResources('addingUsers'), href: "#" },
                                    { title: tDropdown('videoTutorials.title'), href: "#" },
                                    { title: tResources('librariesSDKs'), href: "#" },
                                    { title: tResources('addingPlugins'), href: "#" },
                                    { title: tResources('dashboardTemplates'), href: "#" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button href={item.href} color="link-gray" size="lg">
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-2">
                            {columns.map((column) => (
                                <div key={column.title}>
                                    <h3 className="mb-2 px-4 text-sm font-semibold text-brand-tertiary md:px-0">{column.title}</h3>
                                    <ul className="flex flex-col gap-0.5">
                                        {column.items.map(({ title, subtitle, href, Icon }) => (
                                            <li key={title}>
                                                <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex max-w-container flex-col px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
                    <Button href="#" color="secondary" size="md" iconLeading={BookOpen01} className="hidden md:flex">
                        {tResources('documentation')}
                    </Button>
                    <Button href="#" color="primary" size="md" className="hidden md:flex">
                        {tResources('viewAllResources')}
                    </Button>
                    <Button href="#" color="primary" size="sm" className="md:hidden">
                        {tResources('viewAllResources')}
                    </Button>
                </div>
            </nav>
        </div>
    );
};
