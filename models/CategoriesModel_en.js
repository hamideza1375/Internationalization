const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Choose a title'] },
});

export const CategoriesModel_en = mongoose.models.category_en || mongoose.model('category_en', categorySchema);