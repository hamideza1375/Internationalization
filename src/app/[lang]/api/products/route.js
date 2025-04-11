import apiTranslations from "@/utils/apiTranslations";


export async function GET(req) {
	const t = (await apiTranslations()).product;
   if(false) return new Response(t.error,{status: 400})
    return Response.json(t.products);
}
