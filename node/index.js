require("colors");

const { crearAlumne } = require("./helpers/noms");

console.clear();

console.log(process.argv);

let nom = process.argv[2];
nom = nom.split("=")[1];

let hores = process.argv[3];
hores = hores.split("=")[1];

console.log(nom);
console.log(hores);

crearAlumne(nom, hores);
