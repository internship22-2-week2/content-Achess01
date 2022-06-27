const https = require("https");

function fetch(url) {
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

const URL_BANDERAS = "https://flagcdn.com/es/codes.json";
const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_POST = (id) => `${URL_POSTS}/${id}`;


const obtenerCodigos = fetch(URL_BANDERAS);
const obtenerPosts = fetch(URL_POSTS);
const obtenerPost = fetch(URL_POST(2));

let promesas = [obtenerCodigos, obtenerPost, obtenerPosts];

obtenerCodigos.then((json) => {
  console.table(Object.keys(json));
});

obtenerPosts.then((posts) => {
  console.log(posts);
});

obtenerPost.then((post) => {
  console.log(post);
});