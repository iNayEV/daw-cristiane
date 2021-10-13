const { v4: uuidv4 } = require("uuid");

class Tasca {
  id = "";
  nom = "";
  complert = "";

  constructor(nom, complert) {
    this.id = uuidv4();
    this.nom = nom;
    this.complert = false;
  }
}

module.exports = Tasca;
