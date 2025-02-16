// write a program to calcualte the factorial of a number, using reduce and using for loops

// input: 6
// 6! = 6*5*4*3*2*1

// Method 1 - use reduce function
// Method 2 - use for loop

// //REDUCE METHOD - this will reduce to your array to 1 value however you tell it to mathematiacally
// const arr4=[1,2,3,4,5,6]
// const red=(a,b)=>{
//     return a*b
// }

// console.log(arr4.reduce(red))
// // first it will multiply 1 and 2 and get 2. then itll take 2*3=6. then 6*4=24. then 24*5=120. then 120*6=720.

let a=6

function factorial(number){
    let arr=Array.from(Array(number+1).keys())  //make an array form 0-number-1
    console.log(arr)            //goes from 0-6
    console.log(arr.slice(1,))  //goes from 1-6
    
    let c = arr.slice(1,).reduce((a, b)=>{
        return a*b
    })
    return c
}
console.log(factorial(a))


function factorialloop(number){
    let fac=1;
    for (let index = 1; index <= number; index++) {
        fac=fac*index; 
    }
    return fac
}

console.log(factorialloop(a))