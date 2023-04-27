const fetch = require('cross-fetch');

/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

async function fnTest() {
  //...
  try {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let response = await fetch(url);
    let data = await response.json();
    return data.length;

  } catch (error) {
    console.log(error.message)
  }
}

module.exports = fnTest;