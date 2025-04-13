import getCategoriesModel from '@/models/getCategoriesModel';
import apiTranslations from '@/utils/apiTranslations';
import dbConnect from '@/utils/dbConnect';



export async function GET(req, {params}) {
    await dbConnect();
    const {lang} = await params
    const CategoriesModel = await getCategoriesModel(lang);
    const categories = await CategoriesModel.find();
    const t = (await apiTranslations()).product;
    return Response.json(categories);
}


export async function POST(req, {params}) {
    try {
        await dbConnect();
        const {lang} = await params

        const t = (await apiTranslations()).product;
        const { title } = await req.json();

        const CategoriesModel = await getCategoriesModel(lang);
        const category = await CategoriesModel.create({ title });

        return Response.json({ message: t.success, dt: category }, { status: 201 });
    } catch (error) {
        return Response.json(error?.message, { status: (error && error.status) || 500 });
    }
}
