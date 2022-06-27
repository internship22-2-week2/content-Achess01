import { Teclado, Raton } from "./DispositivoEntrada.js";
import { Monitor } from "./Monitor.js";
import { Computadora } from "./Computadora.js";
import { Orden } from "./Orden.js";

const teclado1 = new Teclado({ marca: "HP", id: 1 });
const teclado2 = new Teclado({ marca: "Razer", id: 2 });
const teclado3 = new Teclado({ marca: "Logitech", id: 3 });
const teclado4 = new Teclado({ marca: "Samsung", id: 4 });

const raton1 = new Raton({ marca: "Microsoft", id: 1 });
const raton2 = new Raton({ marca: "Razer", id: 2 });
const raton3 = new Raton({ marca: "Logitech", id: 3 });
const raton4 = new Raton({ marca: "Zowie", id: 4 });

const monitor1 = new Monitor({ id: 1, marca: "Asus", tamano: "1080p" });
const monitor2 = new Monitor({ id: 2, marca: "Samsung", tamano: "1200p" });
const monitor3 = new Monitor({ id: 3, marca: "Aoc", tamano: "1440p" });
const monitor4 = new Monitor({ id: 4, marca: "Huawei", tamano: "1600p" });

const computadora1 = new Computadora({
  id: 1,
  nombre: "PC para Juegos",
  teclado: teclado1,
  raton: raton1,
  monitor: monitor1,
});

const computadora2 = new Computadora({
  id: 2,
  nombre: "PC para Juegos",
  teclado: teclado2,
  raton: raton2,
  monitor: monitor2,
});

const computadora3 = new Computadora({
  id: 3,
  nombre: "PC para Juegos",
  teclado: teclado3,
  raton: raton3,
  monitor: monitor3,
});

const computadora4 = new Computadora({
  id: 4,
  nombre: "PC para Juegos",
  teclado: teclado4,
  raton: raton4,
  monitor: monitor4,
});

const order1 = new Orden({ id: 1 });
order1.agregarComputadora(computadora1);

const order2 = new Orden({ id: 2 });
order2.agregarComputadora(computadora2);

const order3 = new Orden({ id: 3 });
order3.agregarComputadora(computadora3);
order3.agregarComputadora(computadora2);

export default [order1, order2, order3];
