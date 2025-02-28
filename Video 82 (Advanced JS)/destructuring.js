// destructuring - extract values from arrays and objects,
//then assign them to variables in a conveniant way
//[]- to perform aray desructuring
//{}-to perform object desructuring
//5 examples

const { secureHeapUsed } = require("crypto");

// -------------EX 1 -------------------
// use destructuring to swap the value of 2 variables

let a = 1;
let b = 2;

//leaft side we are using destructuring, right side we are creating an array
[a, b] = [b, a]

console.log(a)
console.log(b)

//------------EX 2------------------------
// use destructuring to swap 2 elements in an array

const colors = ["red", "green", "blue", "black", "white"];

//imagine we want to swap first and last element, they are at index 0 and 4

[colors[0], colors[4]] = [colors[4], colors[0]]

console.log(colors)

//------------EX 3------------------------
// use destructuring to assign array elements to variables

const colorArr=["red", "green", "blue", "black", "white"]

// const [firstColor, secondColor, thirdColor]= colorArr;

//we could also combine sestructuring with rest parametrs...we have 2 colors left so lets assign those to a new array: extraColors
const [firstColor, secondColor, thirdColor, ...extraColors]= colorArr;


console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)


//------------EX 4------------------------
// use destructuring to extract values from objects

const person1 = {
    firstName: "Spongebob",
    lastName: "SqPan",
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 30,
}

//we are now extracting the values from the above 2 onjects and saving to variables
// const{firstName, lastName, age, job} = person1
const{firstName, lastName, age, job="Unemployed"} = person2

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(job)


//------------EX 5------------------------
// use destructuring to destructure in function parameters

//create a function - with the parameters we will use desructuring
//to deconstructure an object we add a set of curly braces
//when we recieve an argument we will destructure right away

function displayPerson({firstName, lastName, age, job="Unemployed"}){   //job is given a default property, but if the object already has a value, it will override the default
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);

}

const person3 = {
    firstName: "Spongebob",
    lastName: "SqPan",
    age: 30,
    job: "Fry Cook"
}

const person4 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 30,
}

//invoke function and pass in person3 as an argument
displayPerson(person3)
displayPerson(person4)