const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    title: { type: String, required: [true, 'یک عنوان انتخاب کنید'] },
});

export const CategoriesModel_fa = mongoose.models.category_fa || mongoose.model('category_fa', categorySchema);