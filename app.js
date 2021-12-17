let autos = require("./autos");

//console.log(autos);
//console.log(concesionaria.autos[1].marca);

let concesionaria = {
  autos: autos,
  buscarAuto: function (patente) {
    return autos.filter(function (e) {
      return e.patente == patente;
    });
  },
};

console.log(concesionaria.buscarAuto("APL123"));
