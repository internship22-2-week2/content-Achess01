/* function unaFuncionNomrmal() {
  console.log("A");
}

const unaFuncionAnonima = function () {
  console.log("B");
};

const funcionFlecha = () => {
  console.log("C");
};

console.log(unaFuncionNomrmal);
console.log(unaFuncionAnonima);
console.log(funcionFlecha);
 */

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

function persona(nombre, cb) {
  cb(nombre);
}

persona("Alex", saludar);
console.log(persona);
