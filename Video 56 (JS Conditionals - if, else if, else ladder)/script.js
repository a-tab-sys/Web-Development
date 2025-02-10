console.log("Hello i am conditional tutorial")

// semicolon is optional is JS
let age = 3;
let grace = 2;

console.log(age + grace)

// ARITHMATIC OPERATORS ---------------------
// exponential operatorso its 3^2
console.log(age ** grace)
//Modulus operator - gives you remainder
console.log(age % grace)

// ASSIGNMENT OPERATORS ---------------------
// increment assignment operator
age += grace      //age=age+grace
console.log(age)
// =            x=y
// +=           x=x+y
// -=           x=x-y
// *=           x=x*y
// /=           x=x/y
// %=           x=x%y
// **=          x=x**y

// COMPARISON OPERATORS----------------------
// ==           equal to
// !=           not equal
// ===          equal value and type
// !==          not equal value or not equal type
// >            greater than
//<             less than
// >=           greater than or equal to
// <=           less than or equal to
// ?            ternary operator - explained line 69

// LOGICAL OPERATORS------------------------
// &&           logical and
// ||           logical or
// !            logical not

// CONDITIONALS -----------------------------
// from the below ladder if, else if, else only 1 block can execute
if ((age + grace) > 18) {
    console.log("You can drive")
}

else if (age == 5) {
    console.log("you are 5, no driving")
}

else {
    console.log("you cannot drive")
}

/*
if you open terminal and type node, it opens repl (its you JS engine running)

you can use it like a calculator : 34+34
type: "3"==3     //you will get true bc its only comparing value
type: "3"===3     //you will get false bc it compares value and type
you can literally put variables in: a=6
b=5
a!=b          //it will say true
a!=b && b!=a      //true
*/

// Ternary operator----------------------
a = 5
b = 4
// if a >b, then do a-b, otherwise do b-a
c = a > b ? (a - b) : (b - a)
console.log(c)



