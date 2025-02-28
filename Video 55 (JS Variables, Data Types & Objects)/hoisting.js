//Hoisting concept in JS: hoisting refers to the process where the interpreter appears to move the declarations to the top of the code before execution. variables can thus be references before they are declares in JS.
//only applicable to variables declared using var. NOT let or const

console.log(varVariable);      //ouputs undefined because JS declared var varVariable at the start of the program (not literally), however its not initialized so shows as undefined. however if your variable was initialized inside some block(function,...) its declartion will be moved to the top of the block,not the top of the program

// console.log(letVariable);           //gives error
// console.log(constVariable);     //gives error

var varVariable = 6;
let letVariable = 5;
const constVariable = 4;
