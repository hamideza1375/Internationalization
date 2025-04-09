import Link from "next/link";
import translations from '@/public/locales';

export default async function Home({ params }) {
    const {lang} = await params;
    const t = translations(lang).home;

    return (
        <main className="container mx-auto">
            <div className="text-center">
                <h1 className="text-3xl mt-10 mb-10 text-center">
                    {t.title}
                </h1>
                <Link href={`${lang}/user`}>
                    <button
                        type="button"
                        className="px-6 py-2 text-sm rounded shadow bg-rose-100 hover:bg-rose-200 text-rose-500 w-72"
                    >
                        {t.appStartBtn}
                    </button>
                </Link>
            </div>
        </main>
    );
}
