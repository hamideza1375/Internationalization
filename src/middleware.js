import { NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { cookies } from 'next/headers';

const locales = ['en', 'fa'];
const defaultLocale = 'en';

async function getLocale(request) {
  // ابتدا بررسی کوکی
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('lang')?.value;
  
  // اگر کوکی معتبر بود از آن استفاده کن
  if (langCookie && locales.includes(langCookie)) {
    return langCookie;
  }

  // در غیر اینصورت از negotiator استفاده کن
  const headers = { 'accept-language': request.headers.get('accept-language') || '' };
  const languages = new Negotiator({ headers }).languages();
  
  return matchLocale(languages, locales, defaultLocale);
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // اگر مسیر از قبل شامل لوکیل باشد، نیازی به تغییر نیست
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return;

  // تشخیص لوکیل
  const locale = await getLocale(request);
  
  // ریدایرکت به مسیر با لوکیل
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)',
  ],
};