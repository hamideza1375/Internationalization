'use client'
import Link from "next/link";
import translations from '@/public/locales';
import { useParams } from "next/navigation";

export default function User() {
    const {lang} = useParams();
    const t = translations(lang).user;

    return (
        <main className="container mx-auto">
            <div className="text-center">
                <h1 className="text-3xl mt-10 mb-10 text-center">
                    {t.title}
                </h1>
                <Link href={`/${lang}`} className="text-3xl mt-10 mb-10 text-center">
                    {'home'}
                </Link>
            </div>
        </main>
    );
}
