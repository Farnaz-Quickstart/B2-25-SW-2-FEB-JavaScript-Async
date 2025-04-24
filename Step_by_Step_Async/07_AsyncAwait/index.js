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



// function fetchData() {
//   fetch ("https://jsonplaceholder.typicode.com/users")
//     .then ((response)=>{
//       return (response.json())
//     })
//     .then ((response)=>{
//       console.log (response)
//     })
// }
// fetchData()


async function fetchdata () {
  try {
    let response = await fetch ("https://jsonplaceholder.typicode.com/users")
    let arrUsers = await (response.json())  
    arrUsers.forEach((jesica)=>{console.log (jesica)})
  }
  catch {} 
}

fetchdata()




