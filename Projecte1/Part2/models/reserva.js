const { v4: uuidv4 } = require("uuid");

class reserva {
  id = "";
  fila = 0;
  columna = 0;
  reservat = 1;

  constructor(fila, columna) {
    this.id = uuidv4();
    this.fila = fila;
    this.columna = columna;
    this.reservat = true;
  }
}

module.exports = reserva;
