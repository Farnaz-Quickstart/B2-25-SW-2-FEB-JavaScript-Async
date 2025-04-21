// What is a Promise?
// A Promise is an object that represents the *future result* of an asynchronous task.
// It can either be: 
//   ✅ Resolved (success) → the task is completed successfully,
//   ❌ Rejected (failure) → the task failed.

//
// 📦 Example:
// You (the customer) order a pizza at a restaurant.
//   - The chef starts preparing it (task in progress - PENDING).
//   - If the pizza is ready → promise is RESOLVED (you get your pizza).
//   - If something goes wrong (no ingredients, oven broken) → promise is REJECTED.

let isFoodReady

let PromiseOrderFood = new Promise((resolve, reject)=>{
   // Process of preparing your food
   // step 1 of preparing to food
   // step 2 of preparing to food
   // step 3 of preparing to food
   // step 4 of preparing to food
   isFoodReady = true
   if (isFoodReady == true) {
    resolve("Here is your pizza!")
   } else {
    reject ("Sorry, we ran out of ingredients.")
   }
})

// Consuming the Promise using .then() and .catch()

PromiseOrderFood
  .then(
      // This block runs if the promise is RESOLVED (success)
      // You got your pizza 🍕
      (message)=>{
        console.log("✅ Success:", message);
      })
  .catch(
    // This block runs if the promise is REJECTED (failure)
    // Something went wrong in the kitchen 😢
    (error)=>{
      console.log("❌ Error:", error);
    })
