'use client';

export function setCookie(name, value, seconds = Infinity) {
    if (typeof window !== 'undefined') {
        const date = new Date();
        date.setTime(date.getTime() + seconds * 1000);
        const expires = 'expires=' + date.toUTCString();
        const sameSite = 'SameSite=None; Secure'; // اضافه کردن SameSite=None به کوکی
        document.cookie = name + '=' + value + ';' + expires + ';path=/;' + sameSite;
    }
}
