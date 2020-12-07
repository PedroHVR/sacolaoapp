const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjetId = mongoose.Types.ObjectId;

const CategorySchema = new Schema({
    name: { type: String, required: 'Nome da categoria é obrigatório' },
    products: [{ type: ObjetId, ref: 'Product' }]
});

module.exports = mongoose.model('Category', CategorySchema);