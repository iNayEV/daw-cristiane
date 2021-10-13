const { countReset } = require("console");
const inquirer = require("inquirer");

require("colors");

const preguntes = [
  {
    type: "list",
    name: "opcio",
    message: "Què vols fer?",
    choices: [
      {
        value: "1",
        name: `${"1 ".green} Nova reserva`,
      },
      {
        value: "2",
        name: `${"2 ".green} Mostrar sala`,
      },
      {
        value: "3",
        name: `${"3 ".green} Mostrar recaudació`,
      },
      {
        value: "4",
        name: `${"4 ".green} Eliminar reserva`,
      },
      {
        value: "0",
        name: `${"0 ".green} Sortir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("==== CINEMA CRISTIAN ====".cyan);
  console.log("  Seleccioni una opció");
  console.log("=========================\n".cyan);

  const { opcio } = await inquirer.prompt(preguntes);

  return opcio; // retorno un valor entre 0 i 5
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"enter".yellow} per a continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const fila = async (message) => {
  const question = [
    {
      type: "input",
      name: "fila",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Si us plau, introdueix una fila";
        }
        return true;
      },
    },
  ];

  const { fila } = await inquirer.prompt(question);
  return fila;
};

const columna = async (message) => {
  const question = [
    {
      type: "input",
      name: "columna",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Si us plau, introdueix una columna";
        }
        return true;
      },
    },
  ];

  const { columna } = await inquirer.prompt(question);
  return columna;
};

const reservaSelect = async (tasques = []) => {
  const choices = tasques.map((tasca, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tasca.id,
      name: `${idx} Fila: ${tasca.fila} :: Columna: ${tasca.columna} ${tasca.reservat}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0. ".green + "Cancel·lar",
  });

  const pregunta = [
    {
      type: "list",
      name: "id",
      message: "Selecciona una tasca",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(pregunta);
  return id;
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

module.exports = {
  inquirerMenu,
  pausa,
  fila,
  columna,
  reservaSelect,
  confirmar,
};
