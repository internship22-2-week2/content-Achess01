export class Computadora {
  static contadorComputadoras = 0;
  constructor({ id, nombre, monitor, teclado, raton }) {
    Computadora.contadorComputadoras++;
    this._id = id;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }
}
