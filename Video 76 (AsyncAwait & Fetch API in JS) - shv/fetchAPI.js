// learning resource: https://www.youtube.com/watch?v=37vxWr0WgQk

// FETCH DATA FROM AN API USING PROMISES

// fetch = function used for making http requests to fetch resources (JSON style data, images, files)
    // Simplifies asynchronous data fetching in JS and used for interacting with API's to retrieve and send data asynchronouslt over the web
    // fetch(url, {options})

    //the fetch function is promise based: it will eather resolve or reject

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => console.log(response))
    .catch(error => console.error(error))

//when you open in browser and look at console youll see some properties (some of these are visible in terminal but console has more and a cleaner view)
// youll see that the responce object has a status code of 200- its working. would be 404 if it could ont locate the resource. youll also see that ok = true- meaning fetching this resource was ok. could als be false if fetching was not ok.

//our next step is to convert to a readable format, 
// [[Prototype]] : Response
//shows us some some methods to do arraybuffer, blob, text and JSON. we will do JSON method


// we will alter the above but convert the response object to a json
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    
    //we will console.log response object. if you did this and in the https instead of pikachu you had spongebob or something (not a pokemon). ok will be false becasue it is not ok. the status will also show 404 in console. so lets throw an error for when our property of ok is false-we will write a few statements within our first then method.
    .then(response => {
        if(!response.ok) {
            throw new Error("cant fetch resource")
        }
        return response.json();
    })
    // .then(response1 => console.log(response1))   


    // .then(response2 => response2.json())  //or take response object and convert it to json
    .then(data => console.log(data))  //to see our json data
    .then(data => console.log(data.name))  //to access specific property
    // .then(data => console.log(data.weight))  //to access specific property
    .catch(error => console.error(error))

    //now even if we cant locate a resource, our promise is still gonna resolve its not going to reject.............so if i had types spongebob instead of pikachu in the link, the promise wil still resolve.
    


// FETCH DATA FROM AN API USING ASYNC/AWAIT

//create try and catch block, catch has one parameter, an error, if we recieve error print error. within try block we will create a const response. the fetch function will return an object, the response object. we will await our promise thats returned by fetch.

//once the promise for fetch resolves,we have to see if the response is ok. we will use an if statemnt. if the response objects ok property is not ok, then we will throw a new error. if our response is okay we will create a constant for our data that will take our respose and convert it to json. it returns a promise thats why we are using await. then we can console.log our data.

fetchdata();

async function fetchdata(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.error(error)
    }

}








