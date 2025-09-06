"use client";

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Select } from "@/components/base/select/select";
import type { SelectItemType } from "@/components/base/select/select";
import type { FC } from 'react';

// ขยาย type สำหรับรองรับ iconComponent
type LanguageSelectItem = SelectItemType & {
  iconComponent: FC;
};

/**
 * Language Selector Component
 * เลือกภาษา TH/EN แบบ dropdown พร้อม icon ธงชาติ
 * ใช้ next-intl ในการจัดการการเปลี่ยนภาษา
 */

// Icon components สำหรับธงชาติ SVG
const ThaiFlag = () => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" aria-label="ธงไทย">
    <g clipPath="url(#TH_svg__a)">
      <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#F0F0F0" />
      <path
        d="M23.254 7.826H.746A11.973 11.973 0 0 0 0 12c0 1.468.264 2.874.746 4.174h22.508c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174Z"
        fill="#0052B4"
      />
      <path
        d="M12 0a11.972 11.972 0 0 0-9.096 4.173h18.194A11.972 11.972 0 0 0 12 0Zm9.096 19.826H2.903A11.972 11.972 0 0 0 12 24c3.637 0 6.896-1.618 9.096-4.174Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="TH_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

const UKFlag = () => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" aria-label="ธงอังกฤษ">
    <g clipPath="url(#GB_svg__a)">
      <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#F0F0F0" />
      <path
        d="M2.48 4.693A11.956 11.956 0 0 0 .413 8.868h6.243L2.48 4.693Zm21.106 4.176a11.957 11.957 0 0 0-2.067-4.176L17.344 8.87h6.242ZM.413 15.13a11.957 11.957 0 0 0 2.067 4.176l4.176-4.176H.413ZM19.305 2.48A11.957 11.957 0 0 0 15.13.412v6.243l4.175-4.175ZM4.693 21.518a11.957 11.957 0 0 0 4.176 2.067v-6.243l-4.176 4.176ZM8.869.412A11.957 11.957 0 0 0 4.693 2.48L8.87 6.655V.412Zm6.261 23.173a11.96 11.96 0 0 0 4.175-2.067l-4.175-4.176v6.243Zm2.214-8.455 4.175 4.176a11.957 11.957 0 0 0 2.067-4.176h-6.242Z"
        fill="#0052B4"
      />
      <path
        d="M23.898 10.435H13.565V.102a12.12 12.12 0 0 0-3.13 0v10.333H.102a12.12 12.12 0 0 0 0 3.13h10.333v10.333a12.12 12.12 0 0 0 3.13 0V13.565h10.333a12.12 12.12 0 0 0 0-3.13Z"
        fill="#D80027"
      />
      <path
        d="m15.13 15.131 5.356 5.355c.246-.246.48-.503.705-.77l-4.584-4.585H15.13Zm-6.26 0-5.355 5.355c.246.246.503.481.77.705l4.585-4.584V15.13Zm0-6.261v-.001L3.515 3.514a12.03 12.03 0 0 0-.705.77L7.394 8.87H8.87Zm6.26 0 5.356-5.355a12.023 12.023 0 0 0-.77-.705L15.13 7.394V8.87Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="GB_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const LanguageSelector = () => {
  const hookLocale = useLocale();
  const t = useTranslations('navigation');
  const router = useRouter();
  const pathname = usePathname();
  
  // กำหนด locale จาก pathname เพื่อให้ sync กับ URL จริง
  const locale = pathname.startsWith('/en') ? 'en' : 'th';

  // รายการภาษาที่รองรับ
  const languages: LanguageSelectItem[] = [
    {
      id: 'en',
      label: t('english'),
      icon: UKFlag,
      iconComponent: UKFlag,
    },
    {
      id: 'th', 
      label: t('thai'),
      icon: ThaiFlag,
      iconComponent: ThaiFlag,
    }
  ];

  const handleLanguageChange = (selectedKey: React.Key | null) => {
    if (!selectedKey) return;
    
    const newLangCode = String(selectedKey) as 'en' | 'th';
    
    // ถ้าเป็นภาษาเดิมไม่ต้องทำอะไร
    if (newLangCode === locale) {
      console.log('Same language selected, no change needed');
      return;
    }
    
    console.log('Current locale:', locale);
    console.log('Current pathname:', pathname);
    console.log('Changing language from', locale, 'to', newLangCode);
    
    // สร้าง path ใหม่ด้วย locale ใหม่
    const segments = pathname.split('/').filter(segment => segment !== '');
    console.log('Path segments:', segments);
    
    // ลบ locale เก่าออกถ้ามี
    if (segments[0] === 'en' || segments[0] === 'th') {
      segments.shift(); // ลบ locale เก่าออก
      console.log('After removing locale:', segments);
    }
    
    // เพิ่ม locale ใหม่ (default คือ th ตอนนี้)
    let newPath = '';
    if (newLangCode === 'en') {
      // สำหรับอังกฤษใส่ prefix /en (เพราะ th เป็น default แล้ว)
      newPath = `/${newLangCode}/${segments.join('/')}`;
    } else {
      // สำหรับไทยใช้ path โดยไม่มี locale prefix (เพราะเป็น default)
      newPath = `/${segments.join('/')}`;
    }
    
    // ทำความสะอาด path
    newPath = newPath.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
    
    console.log('Final newPath:', newPath);
    console.log('About to navigate...');
    
    // ใช้ window.location.href เพื่อ force full page reload และให้ middleware จัดการ locale
    window.location.href = newPath;
  };

  // หมายเหตุ: ลบ debug logs ออกในโปรดักชัน
  // console.log('LanguageSelector render - Hook locale:', hookLocale);
  // console.log('LanguageSelector render - Derived locale:', locale);
  // console.log('LanguageSelector render - Current pathname:', pathname);

  return (
    <div className="w-32">
      <Select
        placeholder={t('selectLanguage')}
        selectedKey={locale}
        onSelectionChange={handleLanguageChange}
        items={languages}
        size="sm"
        aria-label={t('selectLanguage')}
      >
        {(item) => {
          const languageItem = item as LanguageSelectItem;
          const IconComponent = languageItem.iconComponent;
          return (
            <Select.Item 
              key={item.id} 
              id={item.id}
              textValue={item.label} // เพิ่ม textValue เพื่อ accessibility
            >
              <div className="flex items-center gap-2">
                {IconComponent && <IconComponent />}
                <span>{item.label}</span>
              </div>
            </Select.Item>
          );
        }}
      </Select>
    </div>
  );
};