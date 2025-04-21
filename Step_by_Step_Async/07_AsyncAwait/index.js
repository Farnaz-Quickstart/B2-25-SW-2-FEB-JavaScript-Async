// Async: Make function to return promise
// await: Wait for the promise
// api: https://jsonplaceholder.typicode.com/users

 async function clickHandler_fetchdata () {
  let response = await fetch ("https://jsonplaceholder.typicode.com/users")
  let data = await response.json()
  data.forEach(element => {
    console.log (element)
    console.log (element.username)
  });
}
