const Tasca = require("./tasca");

/**
 * _llista :
 *  { uuid-234235324-234234523: {id: uuid-234235324-234234523, nom: 'pepito', hores: 10 }}
 */

class completarTasques {
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

  crearTasca(nom = "", complert = false) {
    const tasca = new Tasca(nom, complert);
    this._llista[tasca.id] = tasca;
  }

  carregarAlumnesFromArray(alumnes = []) {
    alumnes.forEach((alumne) => {
      this._llista[alumne.id] = alumne;
    });
  }

  llistarTasques() {
    console.log();
    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      const { nom, complert } = tasca;
      let comp;
      if (complert == true) {
        comp = `${"Complert".green}`;
      } else {
        comp = `${"No complert".red}`;
      }
      conta++;
      console.log(
        `${(conta + ".").green} ${"Tasca:".yellow} ${`${nom}`.cyan} ${
          "::".green
        } ${"Complert:".yellow} ${comp}`
      );
    });
  }

  llistarTasquesCompletes() {
    console.log();
    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      const { nom, complert } = tasca;
      if (complert == true) {
        conta++;
        console.log(
          `${(conta + ".").green} ${"Tasca:".yellow} ${`${nom}`.cyan} ${
            "::".green
          } ${"Complert:".yellow} ${"Complert".green}`
        );
      }
    });
  }

  llistarTasquesPendents() {
    console.log();
    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      const { nom, complert } = tasca;
      if (complert == false) {
        conta++;
        console.log(
          `${(conta + ".").green} ${"Tasca:".yellow} ${`${nom}`.cyan} ${
            "::".green
          } ${"Complert:".yellow} ${"No complert".red}`
        );
      }
    });
  }

  async completat(ids = []) {
    ids.forEach((element) => {
      const tasca = this._llista[element];
      tasca.complert = 1;
    });
  }

  async eliminarTasca(id) {
    const tasca = this._llista[id];
    delete this._llista[id];
    return tasca.nom;
  }

  async tascaNom(id) {
    const tasca = this._llista[id];
    return tasca.nom;
  }

  async isComplert(id) {
    id.forEach((element) => {
      const tasca = this._llista[element];
      tasca.complert = true;
    });
  }
}

module.exports = completarTasques;
