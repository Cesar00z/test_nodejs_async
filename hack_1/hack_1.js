const axios = require("axios");

/*
- Mediante la libreria: axios
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/users/1
- Return: "response" global de la petición 
*/

async function fnTest() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    //...
    try {
        let response = await axios.get(url);
        return response;
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = fnTest;