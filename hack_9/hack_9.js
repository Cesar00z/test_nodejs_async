/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/
const fetch = require('cross-fetch');

async function fnTest() {
  //...
  let config = {method: "POST"};
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', config);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = fnTest;