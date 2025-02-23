//see the order in which the below programs prints

console.log("harry is a hacker")
console.log("rohan is a hecker")
// JS is asynchronous in nature. if js recieves an asynchronous function it will run that at the end, rather than where it is in the code

setTimeout(() => {
    console.log("i am inside set timeout")  //this will be deferred 2 sec but during this time the script will continue running
}, 2000);

console.log("the end")
