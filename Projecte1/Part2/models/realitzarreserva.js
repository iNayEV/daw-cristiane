const reserva = require("./reserva");
const arr = [
  [
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
  ],
  [
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
  ],
  [
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
  ],
  [
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
  ],
  [
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
  ],
  [
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
    `${"▅".grey}`,
  ],
];
/**
 * _llista :
 *  { uuid-234235324-234234523: {id: uuid-234235324-234234523, nom: 'pepito', hores: 10 }}
 */

class realitzarReserva {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const alumne = this._llista[key];
      llistat.push(alumne);
    });

    return llistat;
  }

  constructor() {
    this._llista = {};
  }

  crearReserva(fila, columna, reservat = 1) {
    const res = new reserva(fila, columna, reservat);
    this._llista[res.id] = res;
  }

  carregarReservesFromArray(reserves = []) {
    reserves.forEach((reserva) => {
      this._llista[reserva.id] = reserva;
    });
  }

  comprobacio(fil, col) {
    this.llistatArr.forEach((butaques) => {
      const { fila, columna } = butaques;
      if (fila == fil && columna == col) {
        return false;
      } else {
        return true;
      }
    });
  }

  mostrarSala() {
    console.log("\n     PANTALLA");
    console.log("===================\n");
    for (let h = 0; h < arr.length; h++) {
      let x = "  ";
      for (let v = 0; v < arr[h].length; v++) {
        if (v == 3) {
          x += "  " + arr[h][v];
        } else {
          x += " " + arr[h][v];
        }
        this.llistatArr.forEach((butaques) => {
          const { fila, columna } = butaques;
          arr[fila - 1][columna - 1] = `${"▅".green}`;
        });
      }
      console.log(x);
    }
  }

  async cancelRes(id) {
    delete this._llista[id];
  }

  async reservaNom(id) {
    const reserva = this._llista[id];
    // console.log(reserva);
    return `Fila: ${reserva.fila} :: Columna: ${reserva.columna}`;
    // return reserva.fila;
  }

  async recaudacio() {
    console.log("El preu de cada reserva són 7,5€.");
    let conta = 0;
    this.llistatArr.forEach((reserva) => {
      const { reservat } = reserva;
      if (reservat == true) {
        conta++;
      }
    });
    console.log(`S'ha recaudat ${`${conta * 7.5}€`.yellow}`);
  }
}

module.exports = realitzarReserva;
