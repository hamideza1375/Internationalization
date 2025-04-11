'use client';
import translations from '@/utils/translations';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ErrorPage({error, reset}) {

  const lang = usePathname().split('/')[1]
  const t = translations(lang).error;
  
    useEffect(() => {
        console.log(error);
    }, [error]);


  return (
    <div style={{display:'flex', flexDirection: 'column' ,width:'100%', alignItems: 'center', paddingTop:10}} >
      <h1 style={{color:'#800'}} >{t.title}</h1>
      <h3>{t.description}</h3>
      <br/>
      <button onClick={()=> reset()}>{t.try_again}</button>
    </div>
  );
}