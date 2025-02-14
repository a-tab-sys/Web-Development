let arr = [1, 2, 3, 4, 5]

console.log(arr)
console.log(arr.length)

// arrays are mutable unlike strings
console.log(arr[0])
arr[0] = 5666;           //could not do this for strings
console.log(arr[0])

console.log(arr, typeof arr)

console.log(arr.join(" and "))      //replaces the commas with and

console.log(arr.pop())      //removes and shows last element
console.log(arr)

console.log(arr.push(11))      // add new element to end
console.log(arr.push("Harry"))      // add new element to end
console.log(arr)

console.log(arr.shift())      // removes and shows first element
console.log(arr)

console.log(arr.unshift("jack"))      // add new element to start
console.log(arr)

//DELETE
console.log(delete arr[4])      //deletes from list but now its place is just empty, there is still memory allocated, there just is not a value
console.log(arr)

//CONCAT
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
console.log(arr.concat(a1, a2))  //display a1, a2 into arr array. does not change any of the existing arrays
console.log(arr)        //does not change the existing array

//SORT
let a = [2, 6, 4, 8]
console.log(a)
console.log(a.sort())


//SPLICE - can be used to add/remove items to an array
let numbers = [1, 2, 3, 4, 5]
numbers.splice(1, 2)     //(<where to start>, <how many to delete>)
console.log(numbers)

let numbers1 = [1, 2, 3, 4, 5]
numbers1.splice(1, 2, 33, 44)  //(<where to start>, <how many to delete>, <numbers to add to replace what you deleted>)
console.log(numbers1)

//SLICE - slice() method does not modify the original array and does not print anything unless explicitly logged
let num = [1, 2, 3, 4, 5, 6, 7]
let slicedarray = num.slice(2)         //saying index 4 to end
let slicedarray1 = num.slice(3, 6)      //(<start-inclusive>, <end-inclusive>)
console.log(slicedarray)
console.log(slicedarray1)

//REVERSE - reverses elements in a source array
let revarray = [1, 2, 3, 4, 5, 6,]
revarray.reverse()
console.log(revarray)

//Loops
let looparray = [1, 84, 53, 23, 1, 2, 3]
for (let index = 0; index < looparray.length; index++) {
    const element = looparray[index];
    console.log(element)

}

//for each loop will print the value, index and array for all values in my array
looparray.forEach((value, index, arr) => {
    console.log(value, index, arr)
});

//for in loop - relate to objects
// sometimes built in objects have properties more than there own. they are added properties. in the case where we dont want those and we only want to focus on relavent properties like the a, b, c we defined below, write as below
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        // console.log(element)

        console.log(key, element)

    }
}

// forof loop - relate to array
let arr3 = [23, 45, 56, 34, 23, 45]
for (const element of arr3) {
    console.log(element)

}


//MAP - creaes a new array by performing some operation on each array element

//for loop way of making a new array that holds the squared values of an original array
let arrayy = [1, 2, 3, 4, 5]
let newarrayy = []
for (let index = 0; index < arrayy.length; index++) {
    const element = arrayy[index];
    newarrayy.push(element ** 2)

}
console.log(newarrayy)

// map mehod way of making a new array that holds the squared values of an original 
let newarrayyy = arrayy.map((e) => {
    return e ** 2
})
console.log(newarrayyy)



//FILTER - 
// lets say that from newarrayyy we only want elements above 5

//creating a function
const greaterthanfive = (e) => {
    if (e > 5) {
        return true
    }
    return false
}
//filter function and print
console.log(newarrayyy.filter(greaterthanfive))


//you can combine the function and the filter function and console.log
console.log(newarrayyy.filter((e) => {
    if (e > 5) {
        return true
    }
    return false
}))


//REDUCE METHOD - this will reduce to your array to 1 value however you tell it to mathematiacally
const arr4=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a*b
}

console.log(arr4.reduce(red))
// first it will multiply 1 and 2 and get 2. then itll take 2*3=6. then 6*4=24. then 24*5=120. then 120*6=720.