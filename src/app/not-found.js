'use client';
import translations from '@/utils/translations';
import { usePathname, useRouter } from 'next/navigation';
// import Error from 'next/error';

export default function NotFound() {

  const lang = usePathname().split('/')[1]
  const t = translations(lang).notFound;
  
  const router = useRouter();
    
    return (
        <html lang="en" style={{overflow:'hidden'}}>
            <body style={{display:'flex', flexDirection: 'column' ,width:'100%', alignItems: 'center', paddingTop:10, boxSizing:'border-box'}}>
                {/* <Error statusCode={404} /> */}
                <h1>{t.title}</h1>
                <h3>{t.description}</h3>
                <br />
                <button onClick={() => router.push(`/${lang}`)}>{t?.goToHome}</button>
            </body>
        </html>
    );
}
