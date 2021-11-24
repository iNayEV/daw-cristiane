const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let rolesValids = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} no és un rol vàlid",
};

let Schema = mongoose.Schema;

let serveiSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "El nom del servei és obligatori"],
  },
  desc: {
    type: String,
    unique: true,
    required: [true, "La descripció és obligatoria"],
  },
  assis: {
    type: String,
    unique: true,
    required: [true, "L'assistència és obligatoria"],
  },
  shipping: {
    type: String,
    unique: true,
    required: [true, "La velocitat d'enviament és obligatoria"],
  },
  payMode: {
    type: String,
    unique: true,
    required: [true, "El mètode de pago és obligatoria"],
  },
});

serveiSchema.methods.toJSON = function () {
  let servei = this;
  let serveiObject = servei.toObject();
  delete serveiObject.password;
  return serveiObject;
};

serveiSchema.plugin(uniqueValidator, { message: "{PATH} debe ser único" });

module.exports = mongoose.model("Servei", serveiSchema);
