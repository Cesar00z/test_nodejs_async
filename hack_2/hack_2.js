/*
- Mediante la libreria: axios
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "response" global de la petición 
*/
const axios = require('axios')

async function fnTest() {
    //...
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        let response = await axios.post(url);
        return response;
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = fnTest;