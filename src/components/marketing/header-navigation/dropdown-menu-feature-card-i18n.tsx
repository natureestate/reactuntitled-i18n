"use client";

import { useTranslations } from 'next-intl';
import { BookClosed, FileCode01, PlayCircle, Stars02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { NavMenuItemLink } from "./base-components/nav-menu-item";
import { FeatureCardVertical } from "./base-components/nav-menu-item-card";

/**
 * Dropdown Menu Feature Card with i18n support
 * เมนูย่อยแบบ Feature Card ที่รองรับหลายภาษา
 */
export const DropdownMenuFeatureCardI18n = () => {
    const tDropdown = useTranslations('dropdown');
    const tFeature = useTranslations('dropdownFeatureCard');

    const items = [
        { title: tDropdown('blog.title'), subtitle: tDropdown('blog.subtitle'), href: "/", Icon: BookClosed },
        { title: tDropdown('customerStories.title'), subtitle: tDropdown('customerStories.subtitle'), href: "/", Icon: Stars02 },
        { title: tDropdown('videoTutorials.title'), subtitle: tDropdown('videoTutorials.subtitle'), href: "/", Icon: PlayCircle },
        { title: tDropdown('documentation.title'), subtitle: tDropdown('documentation.subtitle'), href: "/", Icon: FileCode01 },
    ];

    return (
        <div className="px-3 pb-2 md:max-w-160 md:p-0">
            <nav className="flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-secondary_alt md:w-max md:flex-row md:rounded-2xl md:shadow-lg">
                <ul className="flex flex-1 flex-col gap-0.5 pt-2 pb-3 md:p-2">
                    {items.map(({ title, subtitle, href, Icon }) => (
                        <li key={title + href}>
                            <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                        </li>
                    ))}
                </ul>
                <div className="bg-secondary px-1 pt-2 pb-3 md:max-w-76 md:px-2">
                    <FeatureCardVertical
                        href="#"
                        imgSrc="https://www.untitledui.com/marketing/smiling-girl.webp"
                        title={tFeature('updateTitle')}
                        description={tFeature('updateDescription')}
                        actionsContent={
                            <div className="inline-flex gap-3">
                                <Button color="link-gray" size="sm">
                                    {tFeature('dismiss')}
                                </Button>
                                <Button color="link-color" size="sm">
                                    {tFeature('changelog')}
                                </Button>
                            </div>
                        }
                    />
                </div>
            </nav>
        </div>
    );
};
