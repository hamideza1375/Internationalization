import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { cookies } from 'next/headers';

const locales = ['en', 'fa'];

function getLocale(request) {
    const negotiatorHeader = {};
    request.headers.forEach((value, key) => (negotiatorHeader[key] = value));

    const languages = new Negotiator({ headers: negotiatorHeader }).languages();
    console.log(`Languages: ${languages}`);

    const defaultLocale = 'fa';
    const locale = match(languages, locales, defaultLocale);
    console.log(`Locale: ${locale}`);

    return locale;
}

export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    

    if (pathnameHasLocale) return;

    const gl = getLocale(request)
    const locale = (gl === 'en' || gl === 'fa') ? gl : 'fa';
    
    const cookieStore = await cookies();

    if (!pathname.startsWith(locale)) {
        const cLang = cookieStore.get('lang')?.value
        const lang = (cLang === 'fa' || cLang === 'en') ? cLang : 'fa';
        return NextResponse.redirect(
            new URL(
                `/${lang || locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        );
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
