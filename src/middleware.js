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

    const defaultLocale = 'fa-ir';
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

    const locale = getLocale(request);
    
    if (!pathname.startsWith(locale)) {
        const cookieStore = await cookies();
        cookieStore.set('lang', locale);
        return NextResponse.redirect(
            new URL(
                `/${cookieStore.get('lang')?.value || locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        );
    }
}
export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
