require("colors");

const argv = require("./config/yargs").argv;
const { crearFitxer } = require("./helper/alumne");

console.clear();
// console.log(argv);

let param = argv._[0];

// console.log(param);

switch (param) {
  case "crear":
    crearFitxer(argv.n, argv.h);
    break;
  default:
    console.log("Comanda no reconeguda");
}
