const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const OrderSchema = new Schema({
    products: [],
    user: { type: ObjectId, ref: 'User' },
    status: { type: Number, default: 1},
});

module.exports = mongoose.model('Order', OrderSchema);