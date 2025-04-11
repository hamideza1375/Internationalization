import en from '@/public/locales/apis/en.json';
import fa from '@/public/locales/apis/fa.json';
import { cookies } from 'next/headers';


export default async function apiTranslations () {
	const cookieStore = await cookies();
	const lang = cookieStore.get('lang')?.value;
	return (lang === 'fa') ? fa : en
}
