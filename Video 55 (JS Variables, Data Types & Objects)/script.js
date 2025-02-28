const { partialDeepStrictEqual } = require("assert");

console.log("this is tutorial 55 of web dev")

// VARIABLES----------------------------------------
// names have some restriction, use letter, digit, _, and $ but you cant start variable name with number (varible name are case sensitive. Harry is not = to harry)

// var is globally scoped.let can be used within the block it is defined in. for instance if your in an if statement and you create let variable, you can only use it within that block. if you define a let variable outside everyhing then its automatically a global variable

// const variables are unchangeable. you cant do arithmitic to change the value or directl alter it at all.

let a = 5;
a = a + 1;

var b = 6;

let c = "harry";
var _a = "shubham";
// var 55d="rohan";     //cant do this

const a1 = 6;
// a1 = a1 + 4;        //cant do this

// get the type of variable
console.log(typeof a, typeof b, typeof c)

console.log(a + b + 8)

// LET scope example - let has a block scope - thats why its beter to use
{
    let a = 66;
    console.log(a)      //prints 66
}
console.log(a)      //prints 6

// VAR scope example - var is always globally scoped
{
    var b = 66;
    console.log(b)      //prints 66
}
console.log(b)      //prints 66


// DATA TYPES ------------------------------------
// JS has 2 data types: primitive and object
// object is a user defined data type that you can make with the help of primitive data type. primitive data types are basic data types that are the building blocks of other bata types

// 7 JS datatypes are: Null (means: nothing), Number(means: any number), String (means: anything in""), Symbol (means:____), Undefined (means: any defined variable with no deifnition/value), Boolean (means: tru/false), BigInt (means: for larger integers)

let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)
// fyi: null's type is object - look into why

// OBJECT -------------------------
// in JS an object is a key value pair's combination
// to make an object
let o = {
    name: "harry",
    "job code": "5600",//add "" to key because of space
    is_handsome:true
}

// to add to object
o.salary="4500crores";

console.log(o)




//variable scope 
//let and  const have block level scope {}
//var declared within js function become local to the function
//var declared outside a function becomes global

