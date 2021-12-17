let autos = require("./autos");

let concesionaria = {
  autos: autos,
  buscarAuto: function (patente) {
    return autos.filter(function (e) {
      return e.patente == patente;
    });
  },
  venderAuto: function (patente) {
    let aVender = [];
    aVender = this.buscarAuto(patente);
    aVender[0].vendido = true;
  },
  autosParaLaVenta: function () {
    return autos.filter(function (e) {
      return e.vendido == false;
    });
  },
};
console.log(concesionaria.autosParaLaVenta());
