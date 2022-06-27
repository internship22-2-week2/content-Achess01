export class Monitor {
  static contadorMonitores = 0;
  constructor({ id, marca, tamano }) {
    Monitor.contadorMonitores++;
    this._id = id;
    this._marca = marca;
    this._tamano = tamano;
  }
}
