const fs = require("fs");

const crearAlumne = (nom = "", hores = 0) => {
  console.log("==============");
  console.log(nom);
  console.log("==============");

  let sortida = "";

  sortida = `${nom} ha treballat ${hores} hores`;

  fs.writeFileSync(`Hores ${nom}.txt`, sortida);
};

module.exports = {
  crearAlumne,
};
