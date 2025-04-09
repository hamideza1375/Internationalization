'use client';
import translations from '@/public/locales';
import { usePathname, useRouter } from 'next/navigation';

export default function NotFound() {

  const lang = usePathname().split('/')[1]
  const t = translations(lang).notFound;
  
  const router = useRouter();

  return (
    <div style={{display:'flex', flexDirection: 'column' ,width:'100%', alignItems: 'center', paddingTop:10}} >
      <h1>{t.title}</h1>
      <h3>{t.description}</h3>
      <br/>
      <button onClick={()=> router.push(`/${lang}`)}>{t?.goToHome}</button>
    </div>
  );
}