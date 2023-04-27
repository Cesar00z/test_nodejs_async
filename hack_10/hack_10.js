/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/id
- Return: "data" 
- Contenido del return data:
{
   "id": 50
}
 NOTA: se envia el "id" por parámetro con valor 50
*/
const fetch = require("cross-fetch");

async function fnTest(id) {
  // const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT"
    });
    return response;
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = fnTest;