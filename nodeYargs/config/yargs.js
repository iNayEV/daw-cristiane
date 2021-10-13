const opts = {
  nom: {
    alias: "n",
    demand: true,
  },
  hores: {
    alias: "h",
    default: 10,
  },
};

const argv = require("yargs")
  .command("Crear", "Genera un fitxer amb el nom i les hores de l'alumne", opts)
  .help().argv;

module.exports = {
  argv,
};
