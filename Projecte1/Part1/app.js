require("colors");

const {
  inquirerMenu,
  pausa,
  novaTasca,
  tascaSelect,
  tascaSelectCheck,
  confirmar,
} = require("./helpers/inquirer");
const { guardarDB, readDB } = require("./helpers/guardarFitxer");

const completarTasques = require("./models/completartasques");

const main = async () => {
  let opt = "";
  const tasques = new completarTasques();

  const tasquesDB = readDB();

  if (tasquesDB) {
    tasques.carregarAlumnesFromArray(tasquesDB);
  }
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const nomTasca = await novaTasca("Nom de la tasca:");
        tasques.crearTasca(nomTasca, 0);
        // const alumne = new Alumne("Ricard", 10);
        // console.log(alumne);
        break;

      case "2":
        tasques.llistarTasques();
        break;

      case "3":
        tasques.llistarTasquesCompletes();
        break;

      case "4":
        tasques.llistarTasquesPendents();
        break;

      case "5":
        const id1 = await tascaSelectCheck(tasques.llistatArr);
        await tasques.completat(id1);
        console.log(`La/les tasca/tasques s'ha(n) ${"completat".green}!`);
        break;

      case "6":
        const id2 = await tascaSelect(tasques.llistatArr);
        if (id2 !== "0") {
          const nom = await tasques.tascaNom(id2);
          const confirmacio = await confirmar(`Esborrar tasca: ${nom.yellow}`);
          if (confirmacio) {
            const delTasca = await tasques.eliminarTasca(id2);
            console.log(
              `La tasca ${`${delTasca}`.red} s'ha esborrat correctament!`
            );
          } else {
            console.log(
              `La tasca ${`${nom}`.yellow} ${"NO".red} s'ha esborrat!`
            );
          }
        }
        break;

      default:
        break;
    }

    guardarDB(tasques.llistatArr);

    await pausa();
  } while (opt !== "0");
};

main();
