"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from 'next-intl';
import { Moon02, Sun } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

/**
 * Theme Toggle Component
 * ปุ่มสำหรับสลับระหว่าง light mode และ dark mode
 * ใช้ next-themes library ในการจัดการ theme state
 */
export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const t = useTranslations('navigation');

    // ป้องกัน hydration mismatch โดยรอให้ component mounted ก่อน
    useEffect(() => {
        setMounted(true);
    }, []);

    // ถ้า component ยังไม่ mounted ให้แสดง loading state
    if (!mounted) {
        return (
            <Button
                color="secondary"
                size="sm"
                className="h-9 w-9 px-0"
                disabled
            >
                <Sun className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Loading theme toggle</span>
            </Button>
        );
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button
            color="secondary"
            size="sm"
            onClick={toggleTheme}
            className="h-9 w-9 px-0"
            aria-label={theme === "dark" ? t('toggleThemeLight') : t('toggleThemeDark')}
        >
            {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
            ) : (
                <Moon02 className="h-[1.2rem] w-[1.2rem] text-slate-700" />
            )}
            <span className="sr-only">
                {theme === "dark" ? t('toggleThemeLight') : t('toggleThemeDark')}
            </span>
        </Button>
    );
};
