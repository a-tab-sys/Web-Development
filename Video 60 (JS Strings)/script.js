console.log("this is strings tutorial")

let a = "Harry";

console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

console.log(a.length)

let name = "Harry"
let friend = "Rohan"

console.log("His name is " + name + " and his friends name is " + friend)
// can use template literals to simplify writing the above
console.log(`His name is ${name} and his friends name is ${friend}`)

// template lieteral also lets you add double quotes or anything that would normally requires and escape sequence into your text without needing escape sequence characters
friend2 = `roh"an's`
console.log(friend2)
// friend3="roh"an"         //does not work
// console.log(friend3)

// Adding escape sequence characers
// \" - lets you add double quotes
// \n - adds a new line

let b = "shivamsh"
console.log(b.toUpperCase())        //function-needs()
console.log(b.toLowerCase())        //function-needs()
console.log(b.length)               //property-not need ()

console.log(b.slice(1,4))
console.log(b.slice(0))

console.log(b.replace("sh", "77"))      //careful here, its case sensitive. only the first occurancy of sh is replaced

console.log(b.concat(a))
console.log(b.concat(a, "Aishwariya", "priya")) //could have also used +

// it wil tell you the index where is stats. so here we get 2 becaue i is at index 2
console.log(b.indexOf("iv"))
console.log(b.indexOf("zz"))    //get -1 because it doesnt acc exist in the string

console.log(b.startsWith("sh"))         //true because it does start with sh




// Understanding String Immutability in JavaScript

// In JavaScript, strings are immutable, which means that once a string is created, its individual characters cannot be modified directly. However, you can reassign a variable to a new string.

b = b.slice(1,4)
console.log(b)

// b = "shivamsh"; → The variable b initially holds the string "shivamsh".
// b.slice(1, 4) → This does not modify "shivamsh". Instead, it creates a new string "hiv", and you are reassigning b to reference this new string.
// console.log(b); → Now b holds "hiv", but the original string "shivamsh" was never changed—a new string was created.


// EXPLORE MORE ABOUT STIRNGS. DO THIS BY GOING ON ANY WEB PAGE>INSPECT>CONSOLE>MAKE SOME STRING VAR: B="ROHAN"> TYPE B. AND LOOK AT ALL THE POSSIBLE FUNCTIONS

