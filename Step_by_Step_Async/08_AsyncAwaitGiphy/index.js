// async function fetchUserData() {

//     let response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=ltqV4ZQdyCRsPEBwhkhP6e1AI2EhJoGo&q=book&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'); // waits for the fetch promise
//     let gifJSON = await response.json()
//     let arrPictures =  gifJSON.data
//     console.log (arrPictures)
// }


// fetchUserData()


async function fetchPicture() {
    // Step 1
    let response = await fetch ("https://api.giphy.com/v1/gifs/search?api_key=ltqV4ZQdyCRsPEBwhkhP6e1AI2EhJoGo&q=book&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
    console.log (response)
    // Step 2, json file
    let jsonGiphy = await (response.json())
    console.log (jsonGiphy)
    console.log (jsonGiphy.data)
    console.log (jsonGiphy.meta)
    console.log (jsonGiphy.pagination)

    // For loop or foreach {
    // Create new element of img, set src , append to your div
}

fetchPicture ()
