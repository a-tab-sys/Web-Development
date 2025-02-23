// Async/Await = 
// Async = makes a function return a promise
// Await = makes a function wait for a promise

// allows you to write asynchronour code in a synchronous manner
// async doesnt have resove or reject parameters
// everthing after await is placed in an event queue

function walkdog() {
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

function cleankitchen() {
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

function takeouttrash() {
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

//if our promises can reject, which they can. for instance if we had any of the tasks incomplete and set =false, we get an error. to handle those we can use a try block to catch any errors

async function doChores(){
    try{   
        const walkdogresult = await walkdog()
        console.log(walkdogresult)
        const cleankitchenresult = await cleankitchen()
        console.log(cleankitchenresult)
        const trashtakeoutresult = await takeouttrash()
        console.log(trashtakeoutresult)

        console.log("chores completed")
    }
    catch(error){       //catch must have a parameter to capture the error.
        // console.error(error)    //or
        console.log(error)
    }
}
doChores();
