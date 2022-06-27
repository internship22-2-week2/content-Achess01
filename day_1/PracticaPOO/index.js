import Inventory from "./entity/Inventory.js";
import { Orden } from "./entity/Orden.js";
import { Data } from "./entity/Data.js";

class Register {
  constructor() {
    this.data = new Data("./data.json");
  }
  registerOrder(order) {
    this.data.save(order);
  }

  delete(id) {
    this.data.delete(id);
  }

  show() {
    this.data.getAll().ordenes.forEach((orden) => {
      Orden.mostrarOrden(orden);
    });
  }
}

const register = new Register();
Inventory.forEach((orden) => {
  register.registerOrder(orden);
});
register.show();
console.info("Eliminar una orden");
register.delete(2);
register.show();
