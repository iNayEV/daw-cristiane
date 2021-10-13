require("colors");

const {
  inquirerMenu,
  pausa,
  fila,
  columna,
  reservaSelect,
  confirmar,
} = require("./helpers/inquirer");
const { guardarDB, readDB } = require("./helpers/guardarFitxer");

const realitzarReserva = require("./models/realitzarreserva");

const main = async () => {
  let opt = "";
  const reserves = new realitzarReserva();

  const reservesDB = readDB();

  if (reservesDB) {
    reserves.carregarReservesFromArray(reservesDB);
  }
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const fil = await fila("Número de la fila:");
        const col = await columna("Número de la columna:");
        const comp = await reserves.comprobacio(fil, col);
        if (comp) {
          reserves.crearReserva(fil, col, 1);
          console.log("creat");
        } else {
          console.log(
            `La butaca a la fila ${`${fil}`.yellow} i columna ${
              `${col}`.yellow
            } ja està agafada.`
          );
        }
        break;

      case "2":
        reserves.mostrarSala();
        break;

      case "3":
        reserves.recaudacio();
        break;

      case "4":
        const id1 = await reservaSelect(reserves.llistatArr);
        if (id1 !== "0") {
          const nom = await reserves.reservaNom(id1);
          const confirmacio = await confirmar(
            `Esborrar reserva: ${nom.yellow}`
          );
          if (confirmacio) {
            await reserves.cancelRes(id1);
            console.log(`${`${nom}`.red} reserva cancelada correctament!`);
          } else {
            console.log(
              `${`${nom}`.yellow} ${"NO".red} s'ha cancelat la reserva!`
            );
          }
        }
        break;

      default:
        break;
    }

    guardarDB(reserves.llistatArr);

    await pausa();
  } while (opt !== "0");
};

main();
