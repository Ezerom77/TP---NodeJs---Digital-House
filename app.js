let autos = require("./autos");

let persona1 = {
  nombre: "juan",
  capacidadDePagoEnCuotas: 7200,
  capacidadDePagoTotal: 100000,
};

let concesionaria = {
  autos: autos,
  buscarAuto: function (patente) {
    let auto = this.autos.filter(function (e) {
      return e.patente == patente;
    });
    if (auto.length == 0) {
      return null;
    } else {
      return auto[0];
    }
  },

  venderAuto: function (patente) {
    let aVender = [];
    aVender = this.buscarAuto(patente);
    aVender.vendido = true;
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
    } else {
      return false;
    }
  },
  autosQuePuedeComprar: function (persona) {
    let autosVendibles = this.autosParaLaVenta();
    let puede = [];
    for (a of autosVendibles) {
      if (this.puedeComprar(a, persona) == true) {
        puede.push(a);
      }
    }
    return puede;
  },
};

// concesionaria.autosQuePuedeComprar(autos, persona1);
concesionaria.autosQuePuedeComprar(persona1);
