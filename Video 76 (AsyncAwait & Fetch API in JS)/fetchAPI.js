// fetch = function used for making http requests to fetch resources (JSON style data, images, files)
    // Simplifies asynchronous data fetching in JS and used for interacting with API's to retrieve and send data asynchronouslt over the web
    // fetch(url, {options})

    //the fetch function is promise based: it will eather resolve or reject

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => console.log(response))
//     .catch(error => console.error(error))

//when you open in browser and look at console youll see some properties (some of these are visible in terminal but console has more and a cleaner view)
// youll see that the responce object has a status code of 200- its working. would be 404 if it could ont locate the resource. youll also see that ok = true- meaning fetching this resource was ok. could als be false if fetching was not ok.

//our next step is to convert to a readable format, 
// [[Prototype]] : Response
//shows us some some methods to do arraybuffer, blob, text and JSON. we will do JSON method


// we will alter the above but convert the response object to a json
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    // .then(data => console.log(data))   //then take the json data returned and => do this (consol.log the data)
    // .then(data => console.log(data.name))  //to access specific property
    .then(data => console.log(data.weight))
    .catch(error => console.error(error))


//now even if we cant locate a resource, our promise is still gonna resolve its not going to reject.............
// continue 4.55





