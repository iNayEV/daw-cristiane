require("colors");

const fs = require("fs");

const crearFitxer = (nom, hores = 0) => {
  if (Number(nom)) {
    console.log(`Has introduit: ${`${nom}`.red}`);
    console.log("El nom ha de ser caracters.");
    return;
  }
  let data = `El nom de l'alumne es: ${nom}. Hores registrades ${hores}`;
  console.log(
    `Creant fitxer amb el nom de l'alumne ${`${nom}`.yellow} i registrant ${
      `${hores}`.yellow
    } d'hores.`
  );
  fs.writeFile(`Alumne ${nom}.txt`, data, (err) => {
    if (err) throw Error(err);
    else console.log(`Alumne ${`${nom}`.green}.txt`);
  });
};

module.exports = {
  crearFitxer,
};
