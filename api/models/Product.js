const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = mongoose.Types.ObjectId;

const ProductSchema = new Schema({
    name: { type: String, required: 'Nome do produto é obrigatório' },
});

module.exports = mongoose.model('Product', ProductSchema);