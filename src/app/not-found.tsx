"use client";

import React, { useState } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/base/buttons/button";
import { LostPageIllustration } from "@/components/foundations/illustrations/lost-page-illustration";
import { SearchIcon } from "@/components/foundations/icons/search-icon";
import { ArrowLeftIcon } from "@/components/foundations/icons/arrow-left-icon";

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
            <div className="max-w-md w-full text-center">
                {/* Illustration */}
                <div className="mb-12 flex justify-center">
                    <LostPageIllustration width={240} height={240} />
                </div>

                {/* Title and Description */}
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-4">
                        {messages.title}
                    </h1>
                    <p className="text-base text-gray-600">
                        {messages.subtitle}
                    </p>
                </div>

                {/* Search Box */}
                <form onSubmit={handleSearch} className="mb-8">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="text-gray-400" size={20} />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={messages.searchPlaceholder}
                            className="w-full pl-10 pr-20 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            className="absolute inset-y-0 right-0 flex items-center px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            {messages.searchButton}
                        </button>
                    </div>
                </form>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                        color="secondary" 
                        onClick={handleGoBack}
                        className="flex items-center gap-2 px-6 py-3"
                    >
                        <ArrowLeftIcon size={16} />
                        {messages.goBack}
                    </Button>
                    <Button 
                        onClick={handleGoHome}
                        className="px-6 py-3"
                    >
                        {messages.goHome}
                    </Button>
                </div>
            </div>
        </div>
    );
}
