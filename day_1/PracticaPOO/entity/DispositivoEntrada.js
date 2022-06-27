class DispositivoEntrada {
  constructor({ marca, id, tipoEntrada }) {
    this._marca = marca;
    this._id = id;
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  get id() {
    return this.id;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }
}

export class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor({ marca, id,tipoEntrada = "usb" }) {
    super({ marca, id, tipoEntrada });
    Raton.contadorRatones++;
  }
}

export class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;
  constructor({ marca, id ,tipoEntrada = "usb"}) {
    super({ marca, id ,tipoEntrada});
    Teclado.contadorTeclados++;
  }
}
