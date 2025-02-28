//Immediatly Invoke Function Expression (IIFE)

//sometimes we will have a file that will only have a database connection and we want a set up so that as soon as our application starts, our database connection starts as well. 
//otherwise sometimes we will have alot of variables declared in our global scope and we dont want those global variables creating any problems within our funciton. sometimes what we declare in a function can get POLLUTED by the global scope.

//this is how we normall write and eoke a function, but this doesnt protect from global variable pollution
function chai() {
    console.log('DB conncted')
}

chai();


//so we use IFFY
//we have this: ()() . in our first () we have our function call, in the second () we will have execution 
(function chai2() {
    console.log('DB conncted');
})();           //the IIFE gets immediately invoked but doesnt really understand where to stop so be sure to add a semicolon or you might get an error


(function chai3() {
    console.log('DB conncted');
})();


//we could also use this in an arrow function
(() => {
    console.log(`DB conncted`);
})();


//we could also use this in an arrow function that has parameters
((name) => {
    console.log(`DB conncted ${name}`);
})('ammaarah');

//a named iify is just our regular function chi3().... type of iffy
//an unnamede iffy can be made with an arow function

