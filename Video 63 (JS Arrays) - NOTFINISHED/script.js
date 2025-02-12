let arr=[1, 2, 3, 4, 5]

console.log(arr)
console.log(arr.length)

// arrays are mutable unlike strings
console.log(arr[0])
arr[0]= 5666;           //could not do this for strings
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

console.log(delete arr[4])      //deletes from list but now its place is just empty, there is still memory allocated, there just is not a value
console.log(arr)

let a1=[1,2,3]
let a2=[4,5,6]
console.log(arr.concat(a1,a2))  //display a1, a2 into arr array. does not change any of the existing arrays
console.log(arr)        //does not change the existing array

//SORT