'use client';

import getCookie from '@/utils/getCookie';
import { useEffect, useState } from 'react';
import useTranslations from '@/utils/useTranslations';

export default function products(/* { t, lang } */) {
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([]);

	 const lang = getCookie('lang');
     const t = useTranslations().home;
     

    useEffect(() => {
        fetch(`http://localhost:3000/${lang}/api/products`)
            .then(async(response) =>{return await response.json()})
            .then((data) => {
					console.log(data);
					
                setProducts(data);
            });
    }, []);

    return (
        <>
            <button onClick={() => setShow(!show)}>{t.showProducts}</button>
            <br />
            <div>
                {show &&
                    products.map(product => (
                        <div key={product.id}>
                            <h1>{product.title}</h1>
                        </div>
                    ))}
            </div>
        </>
    );
}
