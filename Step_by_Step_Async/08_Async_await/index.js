async function fetchUserData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users'); // waits for the fetch promise
    let users = await response.json(); // waits for the JSON parsing promise
    console.log(users);  // Logs the fetched data
  } catch (error) {
    console.error('Error fetching users:', error);  // Handles any errors
  }
}
