// a promise is an object that manages asnchronous operations (querying a dtabase, fetching a file, gathering resources )
//you can wrap a promise object around {asynchronous code}
//"I promise to return a value"
//PENDING -> resolved or rejected
// new promise ((resolve, reject) => {asynchronour code})

//  DO THESE CHORES IN ORDER
//1. WALK THE DAY
//2. CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH



/*


//USING CALLBACKS METHOD

function walkdog(callback) {
    setTimeout(() => {
        console.log("you walk the dog")
        callback()
    }, 1500)

}

function cleankitchen(callback) {
    setTimeout(() => {
        console.log("you clean the kitchen")
        callback()
    }, 2400)

}

function takeouttrash(callback) {
    setTimeout(() => {
        console.log("you take out trash")
        callback()
    }, 500)
}

//so we want to walk the dog, pass in a callback to clean kitchen (we will use an arrow function), clean the kitchen, pass in a callback to clean kitchen (we will use an arrow function). Nested Callbacks Need Arrow Functions
walkdog(() => {
    cleankitchen(() => {
        takeouttrash(() => console.log("you finished"))
    })
})


//the below code wont work. in the hello/goodbye example in clallbacks.py we could do hello(goodbye) only because goodbye was just a function reference and didnt take any arguments or callbacks of it own. if for example goodbye took in a name then we could try hello(goodbye("Alice")) but this would not work because goodbye("Alice") executes immediately instead of waiting. here we would require an arrow function.trying this: 
// walkdog(cleankitchen(takeouttrash(() => console.log("your done"))))
// does not work bc The inner functions execute before the outer ones, breaking execution order. this requires an arrow function
// to summarize: Nested Callbacks Need Arrow Functions




*/


/*




// USING PROMISES METHOD - FOCUS ON JUST RESOLVE
// isnead of gettinginto call back hell, we can use method chaining
//modified functions from above by placing our asyncronous code into a promise object that is returned. replacd console.log with resolve

function walkdog2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you walk the dog")
        }, 1500)
    })
}

function cleankitchen2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you clean the kitchen")
        }, 2400)
    })
}

function takeouttrash2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("you take out trash")
    }, 500)  
    })
}
//basically you put the resolve messages into your functions. now we need to print the as well. so in the value variable we save what was in the resolve variable and print it. value is the parameter provided to us, we will take value and print it

//this walks the dog only
// walkdog2().then(value => console.log(value))

//this does all three methds
// walkdog2().then(value => {console.log(value); return cleankitchen2()})
//           .then(value => {console.log(value); return takeouttrash2()})
//           .then(value => console.log(value))


//this does all three methds and an additional message
walkdog2().then(value => {console.log(value); return cleankitchen2()})
          .then(value => {console.log(value); return takeouttrash2()})
          .then(value => {console.log(value); console.log("youre freee")})







*/













// USING PROMISES METHOD - FOCUS ON RESOLVE/REJECT
//sometimes with asynchronous funtions, a task might fail. if this occurs for ex we are looking for a file and cannot locate it, we dont want to resolve that promise, instead we want to reject


function walkdog2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked=true

            if(dogwalked){
                resolve("you walk the dog")
            }
            else{
                reject("you did not walk the dog")
            }

        }, 1500)
    })
}

function cleankitchen2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchencleaned=true
            
            if(kitchencleaned){
                resolve("you clean the kitchen")
            }
            else{
                reject("you did not clean the kitchen")
            }

        }, 2400)
    })
}

function takeouttrash2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        const trashtakeout=false;

        if(trashtakeout){
            resolve("you took out trash")
        }
        else{
            reject("you did not take out trash")
        }

    }, 500)  
    })
}

//this does all three methds and an additional message
walkdog2().then(value => {console.log(value); return cleankitchen2()})
          .then(value => {console.log(value); return takeouttrash2()})
          .then(value => {console.log(value); console.log("youre freee")})
          .catch(error => console.log(error))       //or
        //   .catch(error => console.error(error))