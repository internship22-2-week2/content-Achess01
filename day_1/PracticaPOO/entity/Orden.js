import { Computadora } from "./Computadora.js";

export class Orden {
  static contadorOrdenes = 0;
  constructor({ id }) {
    Orden.contadorOrdenes++;
    this._computadoras = [];
    this._id = id;
  }

  agregarComputadora(computadora) {
    if (computadora instanceof Computadora) {
      this._computadoras.push(computadora);
    }
  }

  static mostrarOrden(orden) {
    console.info(`Número de orden: ${orden._id}`);
    orden._computadoras.forEach((c) => console.table(c));
  }
}
