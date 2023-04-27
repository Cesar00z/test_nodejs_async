/*
- Mediante la libreria: axios
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "data" 
- Contenido del return data:
{
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
} 
*/

const axios = require('axios');

async function fnTest() {
  //...
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    let response = await axios.get(url);
    let data = response.data.find(user => user.id === 2);
    return data;
  } catch (error) {
    console.log(error.message)
  }

}

module.exports = fnTest;