/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PATCH
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/
const axios = require("axios")

async function fnTest() {
  //...
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  try {
    let response = await axios.patch(url);
    return response;
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = fnTest;