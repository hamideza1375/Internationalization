// export default async function translations (locale) {
//     return locale?.startsWith('fa')?
//     import("@/src/langs/fa.json").then((module) => module.default)
//     :
//     import("@/src/langs/en.json").then((module) => module.default)
// }


import fa from '@/public/locales/fa.json';
import en from '@/public/locales/en.json';

function translations(locale) {
    return locale?.startsWith('fa') ? fa : en;
}


function clientTranslations() {
    const { useParams } = require('next/navigation');
    const {lang} = useParams();
    return lang?.startsWith('fa') ? fa : en;
}

    export default typeof window !== "undefined" ? clientTranslations : translations