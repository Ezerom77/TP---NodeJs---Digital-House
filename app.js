let autos = require("./autos");

let persona1 = {
  nombre: "juan",
  capacidadDePagoEnCuotas: 100000,
  capacidadDePagoTotal: 100000000,
};

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
  autosNuevos: function () {
    let vendibles = this.autosParaLaVenta();
    return vendibles.filter(function (e) {
      return e.km < 100;
    });
  },
  listaDeVentas: function () {
    let precios = [];
    let vendidos = autos.filter(function (e) {
      return e.vendido == true;
    });
    vendidos.forEach(function (e) {
      precios.push(e.precio);
    });
    return precios;
  },
  totalDeVentas: function () {
    let ventas = this.listaDeVentas();
    let totalVendido = ventas.reduce((acc, e) => acc + e, 0);
    return totalVendido;
  },
  puedeComprar: function (auto, persona) {
    if (
      auto.precio <= persona.capacidadDePagoTotal &&
      auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
    ) {
      return true;
    }
  },
};

// console.log(concesionaria.totalDeVentas());
// concesionaria.totalDeVentas();
console.log(concesionaria.puedeComprar(autos[0], persona1));
