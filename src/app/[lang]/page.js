import Link from 'next/link';
import translations from '@/utils/translations';
import Products from '@/src/components/products';

export default async function Home({ params }) {
    const { lang } = await params;
    const t = translations(lang).home;

    return (
        <main>
            <div>
                <h1>{t.title}</h1>
                <Link href={`${lang}/user`}>
                    <button>{t.appStartBtn}</button>
                </Link>
                <Products t={t} lang={lang} />
            </div>
        </main>
    );
}
