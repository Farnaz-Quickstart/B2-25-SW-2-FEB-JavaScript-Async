// A synchronous Senario: Api Connection
// API: https://jsonplaceholder.typicode.com/users
// 1- Is connected to Api --> Promise Resolve --> then after that do something
// 2- Is NOT connected to Api -- Promise Reject --> catch error

// Steps 1: Connect to API


let p2 = fetch ("https://jsonplaceholder.typicode.com/users")

p2
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{console.log(data)})
  .catch((error)=>{console.log(error)})