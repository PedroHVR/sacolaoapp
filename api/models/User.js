const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, minlength: 3, maxlength: 100, required: 'Nome é obrigatório' },
  email: { type: String, minlength: 4, required: 'E-mail é obrigatório', index: { unique: true } },
  password: { type: String, minlength: 6, required: 'Senha é obrigatório' },
  address: { type: String, minlength: 6, required: 'Telefone é obrigatório' },
  phone: { type: String, minlength: 6 },
  profile: { type: Number, required: 'Perfil é obrigatório' },
});

module.exports = mongoose.model("User", UserSchema);
