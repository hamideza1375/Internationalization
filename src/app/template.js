'use client';
import { setCookie } from '@/utils/setCookie';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
    const lang = usePathname().split('/')[1];

    setCookie('lang', lang)

    return (
        <>
            {children}
        </>
    );
}
