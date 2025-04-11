import en from '@/public/locales/apis/en.json';
import fa from '@/public/locales/apis/fa.json';
import { cookies } from 'next/headers';


export default async function apiTranslations () {
	const cookieStore = await cookies();
	return (cookieStore.get('lang')?.value === 'fa') ? fa : en
}
