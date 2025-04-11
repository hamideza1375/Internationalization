'use client';
import { useRouter, usePathname } from 'next/navigation';
import { setCookie } from '@/utils/setCookie';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = e => {
        const newLang = e.target.value;
        // حذف پیشوند زبان فعلی از مسیر
        const pathWithoutLang = pathname.replace(/^\/(fa|en)/, '');
        // هدایت به مسیر جدید با زبان انتخاب شده
        setCookie('lang', newLang)
        router.push(`/${newLang}${pathWithoutLang}`);
    };

    // استخراج زبان فعلی از URL
    const currentLang = pathname.startsWith('/fa') ? 'fa' : 'en';

    return (
        <div style={{padding:4, boxSizing:'border-box',width:'100%', display:'flex', justifyContent:currentLang === 'fa'?'start':' end' }} >
            <select value={currentLang} onChange={handleLanguageChange} className="p-2 border rounded">
                <option value="en">English</option>
                <option value="fa">فارسی</option>
            </select>
        </div>
    );
}
