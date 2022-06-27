//Promesas

/* const miPromesa = new Promise((resolve, reject) => {
  let estado = true;
  if (estado) {
    resolve("Todo bien");
  } else {
    reject(new Error("Algo salió mal"));
  }
}); */

//Ejecutar la promesa
/* miPromesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => console.error(err.message)); */

/* const promesa1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Primera promesa");
});

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Segunda promesa");
});

const promesa3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "Tercera promesa");
});

let promesas = [promesa1, promesa2, promesa3];

Promise.all(promesas)
  .then((valores) => {
    console.log(valores);
  })
  .catch((err) => console.error(err));

Promise.race(promesas)
  .then((primera) => console.log(primera))
  .catch((err) => console.error(err)); */

//Funciones asíncronas

/* function primerProceso() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Primer proceso");
  });
}

function segundoProceso() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Segundo proceso");
  });
}

function tercerProceso() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Tercer proceso");
  });
}

async function llamarProcesos() {
  let primero = await primerProceso();
  console.log(primero);
  let segundo = await segundoProceso();
  let tercero = await tercerProceso();
  console.log(primero, segundo, tercero);
}

llamarProcesos(); */

const https = require("https");
function requestJsonPlaceHolder(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (resp) => {
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk;
        });
        resp.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

const URL_USERS = "https://jsonplaceholder.typicode.com/users";

async function hacerPeticion() {
  let result = await requestJsonPlaceHolder(`${URL_USERS}/8`);
  console.log(result);
}

hacerPeticion();
