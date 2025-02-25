// you can create snipits in js. theyre shortcuts an can be helpful. see how in video.

// a callback is a function that you pass as a parameter to another function

// they are used to handle asynchronous operations:
    // 1. reading a File
    // 2. network requests
    // 3. interacting with databases
// these activities can take awile to complete. in js we dont wait for an activity to finsh before continuing with the program. this is because js is asynchronous. basically if we were reading a file, that can take some time so js will continue with the rest of the program but if the program continues and needs to print its contents, we cant because theyve not been read. so basically callbacks say "hey, when youre done, call this next" or in this case "hey when youre done reading the file, then print its contents"

// EXAMPLE 1

// say for example for some reason the hello function had a timout for 2 seconds in that case goodbye would print before hello. we dont want that. we will pass godbye as a paraeter to hello so it always prints after.

hello(goodbye)      // only pass in the function name
// hello(goodbye())    //this will call it right away. dont pass in parenthesis


function hello(callback){
    console.log("hello")
    callback()      //invoke callback function
}

function goodbye(){
    console.log("goodbye")
}

// EXAMPLE 2

sum(displayConsole, 1, 3)

function sum(callback, x, y){
    let result=x+y;
    callback(result)    //pass result a argument to callback
}

function displayConsole(result){
    console.log(result);
}













/*


//SETTIMEOUT EXAPLE

//setTimeout is a call back function
// () => {
//     console.log("hello")
// }
// the above is the parameter we are passing to set timeout

//one way
setTimeout(() => {
    console.log("hello")
}, 100);

//another way
const logHello=() => {
    console.log("hello")
}

setTimeout(logHello,100);



//FOREACH EXAMPLE
const names = ['james', 'jess', 'lily', 'sevy']
//for each name this is the function we want to call as the foreach iterates through names
names.forEach((name)=>console.log(name))

//Lets build our own foreach to understand
const myForEach = (array, callback) =>{
    for (let i = 0; i < array.length; i++) {
        const element = array[i]; 
        callback(element)
    }
}

myForEach(names,(name) => {
    console.log(name)
})

//ASYNCHRONOUS EXAMPLE

const loadPokemon = (id, cb)=>{
    fetch('https://pokeapi.co/api/v2/pokemon/${id}')
    .then(res=>res.json())
    .then(data=>{
        cb(data)
    })
}
loadPokemon(56, (pokemon)=>{
    console.log(pokemon);
})

*/