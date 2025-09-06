"use client";

import React, { useState } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft, SearchLg } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { LostPageIllustration } from "@/components/foundations/illustrations/lost-page-illustration";

// Default messages เมื่อไม่มี i18n context
const defaultMessages = {
    title: "We lost this page",
    subtitle: "The page you are looking for doesn't exist or has been moved.",
    searchPlaceholder: "Search our site",
    searchButton: "Search",
    goBack: "Go back",
    goHome: "Go home"
};

const thaiMessages = {
    title: "หาหน้านี้ไม่เจอ",
    subtitle: "หน้าที่คุณกำลังมองหาไม่มีอยู่หรือถูกย้ายไปแล้ว",
    searchPlaceholder: "ค้นหาในเว็บไซต์ของเรา",
    searchButton: "ค้นหา",
    goBack: "กลับไป",
    goHome: "กลับหน้าหลัก"
};

export default function NotFound() {
    const router = useRouter();
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');
    
    // ตรวจสอบภาษาจาก pathname
    const isThaiLocale = pathname.startsWith('/th') || (!pathname.startsWith('/en') && !pathname.startsWith('/th'));
    const messages = isThaiLocale ? thaiMessages : defaultMessages;

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // ในที่นี้คุณสามารถเพิ่มฟังก์ชันค้นหาจริงได้
            console.log('Searching for:', searchQuery);
        }
    };

    const handleGoHome = () => {
        router.push('/');
    };

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-md mx-auto text-center">
                {/* Illustration */}
                <div className="mb-8 flex justify-center">
                    <LostPageIllustration width={200} height={200} />
                </div>

                {/* Title and Description */}
                <div className="mb-8 space-y-3">
                    <h1 className="text-display-sm font-semibold text-gray-900 md:text-display-md">
                        {messages.title}
                    </h1>
                    <p className="text-md text-gray-600">
                        {messages.subtitle}
                    </p>
                </div>

                {/* Search Box */}
                <div className="mb-8">
                    <form onSubmit={handleSearch} className="flex gap-3">
                        <div className="flex-1">
                            <Input
                                icon={SearchLg}
                                placeholder={messages.searchPlaceholder}
                                value={searchQuery}
                                onChange={setSearchQuery}
                                size="md"
                            />
                        </div>
                        <Button 
                            type="submit"
                            size="md"
                            className="px-4"
                        >
                            {messages.searchButton}
                        </Button>
                    </form>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button 
                        size="md"
                        color="secondary" 
                        iconLeading={ArrowLeft}
                        onClick={handleGoBack}
                    >
                        {messages.goBack}
                    </Button>
                    <Button 
                        size="md"
                        onClick={handleGoHome}
                    >
                        {messages.goHome}
                    </Button>
                </div>
            </div>
        </div>
    );
}
