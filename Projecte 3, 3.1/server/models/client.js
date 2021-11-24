const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let clientSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "El nom d'usuari és obligatori"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "El correu electrònic és obligatori"],
  },
  password: {
    type: String,
    required: [true, "La contrasenya és obligatoria"],
  },
  DNI: {
    type: String,
    required: [true, "El DNI és obligatori"],
  },
  phone: {
    type: String,
    required: [true, "El número de telèfon és obligatori"],
  },
  name: {
    type: String,
    required: [true, "El nom és obligatori"],
  },
  lastname: {
    type: String,
    required: [true, "El cognom és obligatori"],
  },
});

clientSchema.methods.toJSON = function () {
  let client = this;
  let clientObject = client.toObject();
  delete clientObject.password;
  return clientObject;
};

clientSchema.plugin(uniqueValidator, { message: "{PATH} debe ser único" });

module.exports = mongoose.model("Client", clientSchema);
