"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { useTranslations } from 'next-intl';
import { ChevronDown } from "@untitledui/icons";
import { Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Popover as AriaPopover } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSelector } from "@/components/ui/language-selector";
import { cx } from "@/utils/cx";
import { DropdownMenuFeatureCard } from "./dropdown-menu-feature-card";
import { DropdownMenuSimpleI18n } from "./dropdown-menu-simple-i18n";
import { DropdownMenuSimpleWithFooter } from "./dropdown-menu-simple-with-footer";
import { DropdownMenuWithTwoColsAndLinksAndFooter } from "./dropdown-menu-with-two-cols-and-links-and-footer";

type HeaderNavItem = {
    label: string;
    href?: string;
    menu?: ReactNode;
};

const footerNavItems = [
    { label: "About us", href: "/" },
    { label: "Press", href: "/products" },
    { label: "Careers", href: "/resources" },
    { label: "Legal", href: "/pricing" },
    { label: "Support", href: "/pricing" },
    { label: "Contact", href: "/pricing" },
    { label: "Sitemap", href: "/pricing" },
    { label: "Cookie settings", href: "/pricing" },
];

const MobileNavItem = (props: { className?: string; label: string; href?: string; children?: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (props.href) {
        return (
            <li>
                <a href={props.href} className="flex items-center justify-between px-4 py-3 text-md font-semibold text-primary hover:bg-primary_hover">
                    {props.label}
                </a>
            </li>
        );
    }

    return (
        <li className="flex flex-col gap-0.5">
            <button
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-md font-semibold text-primary hover:bg-primary_hover"
            >
                {props.label}{" "}
                <ChevronDown
                    className={cx("size-4 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear", isOpen ? "-rotate-180" : "rotate-0")}
                />
            </button>
            {isOpen && <div>{props.children}</div>}
        </li>
    );
};

const MobileFooter = () => {
    const t = useTranslations('navigation');
    
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
                <span className="text-sm font-medium text-secondary">{t('theme')}</span>
                <ThemeToggle />
            </div>
            <Button size="lg">{t('signup')}</Button>
            <Button color="secondary" size="lg">
                {t('login')}
            </Button>
        </div>
    );
};

interface HeaderProps {
    items?: HeaderNavItem[];
    isFullWidth?: boolean;
    isFloating?: boolean;
    className?: string;
}

export const HeaderI18n = ({ isFullWidth, isFloating, className }: HeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);
    const t = useTranslations('navigation');

    // Create nav items with translations
    const headerNavItems: HeaderNavItem[] = [
        { label: t('products'), href: "/products", menu: <DropdownMenuSimpleI18n /> },
        { label: t('services'), href: "/services", menu: <DropdownMenuFeatureCard /> },
        { label: t('pricing'), href: "/pricing" },
        { label: t('resources'), href: "/resources", menu: <DropdownMenuWithTwoColsAndLinksAndFooter /> },
        { label: t('about'), href: "/about" },
    ];

    return (
        <header
            ref={headerRef}
            className={cx(
                "relative flex h-18 w-full items-center justify-center md:h-20",
                isFloating && "h-16 md:h-19 md:pt-3",
                isFullWidth && !isFloating ? "has-aria-expanded:bg-primary" : "max-md:has-aria-expanded:bg-primary",
                className,
            )}
        >
            <div className="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8">
                <div className="flex flex-1 items-center gap-5">
                    <UntitledLogo className="h-8 md:max-lg:hidden" />
                    <UntitledLogoMinimal className="hidden h-8 md:inline-block lg:hidden" />

                    {/* Desktop navigation */}
                    <nav className="max-md:hidden">
                        <ul className="flex items-center gap-0.5">
                            {headerNavItems.map((navItem) => (
                                <li key={navItem.label}>
                                    {navItem.menu ? (
                                        <AriaDialogTrigger>
                                            <AriaButton className="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-md font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-secondary_hover focus-visible:outline-2 focus-visible:outline-offset-2">
                                                <span className="px-0.5">{navItem.label}</span>

                                                <ChevronDown className="size-4 rotate-0 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear in-aria-expanded:-rotate-180" />
                                            </AriaButton>

                                            <AriaPopover
                                                className="entering:animate-in entering:fade-in-0 entering:zoom-in-95 exiting:animate-out exiting:fade-out-0 exiting:zoom-out-95 top-2 will-change-transform data-placement-bottom:slide-in-from-top-2"
                                                offset={12}
                                            >
                                                <AriaDialog className="z-10 shadow-xs outline-none data-placement-bottom:animate-slideUpAndFade data-placement-top:animate-slideDownAndFade">
                                                    {navItem.menu}
                                                </AriaDialog>
                                            </AriaPopover>
                                        </AriaDialogTrigger>
                                    ) : (
                                        <a
                                            href={navItem.href}
                                            className="rounded-lg px-2 py-1 text-md font-semibold text-secondary transition duration-100 ease-linear hover:text-secondary_hover"
                                        >
                                            {navItem.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    <LanguageSelector />
                    <ThemeToggle />
                    <Button color="secondary" size={isFloating ? "md" : "lg"}>
                        {t('login')}
                    </Button>
                    <Button color="primary" size={isFloating ? "md" : "lg"}>
                        {t('signup')}
                    </Button>
                </div>

                {/* Mobile menu */}
                <div className="md:hidden">
                    <AriaDialogTrigger>
                        <AriaButton className="flex cursor-pointer items-center justify-center outline-focus-ring transition duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M3 12h18m-9-9v18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </AriaButton>

                    <AriaPopover
                        className="entering:animate-in entering:fade-in-0 entering:zoom-in-95 exiting:animate-out exiting:fade-out-0 exiting:zoom-out-95 left-0 top-full w-screen"
                        offset={0}
                    >
                        <AriaDialog className="z-10 bg-primary shadow-xs outline-none">
                            <div className="flex max-h-screen flex-col overflow-y-auto px-4 pb-6 pt-6">
                                <ul className="flex flex-col border-b border-secondary pb-6">
                                    {headerNavItems.map((navItem) => (
                                        <MobileNavItem key={navItem.label} label={navItem.label} href={navItem.href}>
                                            {navItem.menu}
                                        </MobileNavItem>
                                    ))}
                                </ul>

                                <div className="mt-6">
                                    <MobileFooter />
                                </div>
                            </div>
                        </AriaDialog>
                    </AriaPopover>
                    </AriaDialogTrigger>
                </div>
            </div>
        </header>
    );
};