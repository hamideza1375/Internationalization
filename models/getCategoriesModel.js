import { cookies } from 'next/headers';

export default async function getCategoriesModel(locale) {
  return locale?.startsWith('fa')
    ? (await import('./CategoriesModel_fa')).CategoriesModel_fa
    : (await import('./CategoriesModel_en')).CategoriesModel_en;
}



// import { cookies } from 'next/headers';

// export default async function getCategoriesModel() {
//   const cookiesStore = cookies();
//   const lang = cookiesStore.get('lang')?.value;
  
//   if (lang?.startsWith('fa')) {
//     const { CategoriesModel_fa } = await import('./CategoriesModel_fa');
//     return CategoriesModel_fa;
//   } else {
//     const { CategoriesModel_en } = await import('./CategoriesModel_en');
//     return CategoriesModel_en;
//   }
// }
