// export default async function translations (locale) {
//     return locale?.startsWith('fa')?
//     import("@/src/langs/fa.json").then((module) => module.default)
//     :
//     import("@/src/langs/en.json").then((module) => module.default)
// }


import fa from '@/public/locales/fa.json';
import en from '@/public/locales/en.json';
import { useParams } from 'next/navigation';

export default function useTranslations() {
    const {lang} = useParams();
    return lang?.startsWith('fa') ? fa : en;
}