// create  falty calculator using JS, this faulty calc does the following: it takes 2 numbers as input from the user. it performs wrong operations as follows 
// + --> -
// * --> +
// - --> /
// / --> **
// it performs wrong operations 10% of the time
// generate a random number: a=Math.random()

let random = Math.random()  //Generates a random number between 0 and 1.
console.log(random)

let a= prompt("Enter first number")
let b= prompt("Enter second number")
let c= prompt("Enter operation")

let obj={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1){
    //perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
    console.log((`The result is ${a} ${c} ${b}`)) //see in console
    // Example:
    // `${a} ${c} ${b}` → "5 + 3"
    // eval("5 + 3") → 8
}

else{
    //perform wrong calculation
    c=obj[c]
    // c initially holds the key (the operator the user entered, like +, -, *, or /).
    // obj[c] retrieves the value corresponding to that key from the obj object.
  
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

    console.log(c)
    console.log((`The result is ${a} ${c} ${b}`)) //see in console
    
    // In JavaScript, backticks (`) are used to create template literals, which allow you to:
        // Embed variables and expressions directly into strings using ${}.
        // Create multi-line strings easily.

    //does work—but only because JavaScript converts the variables into a valid string before passing it to eval(). without template lieterals: 
    // eval(a + " " + c + " " + b);

    //withtemplate literals: eval(`${a} ${c} ${b}`);

    //If you wrote this without ${} and backticks, like this:
    // eval(a c b);  // Incorrect syntax
    
    // This would work but would only be valid if c is an operator. If c becomes ** (for exponentiation), this may cause confusion when readability matters:
    // eval(a + c + b);

    // why the expression requires spaces between the variables when using string concatenation like this:
    // eval(a + " " + c + " " + b);
    // In JavaScript, eval() expects a valid expression. Operators like +, -, *, /, or ** must be correctly formatted.
    //For simple operators like +, -, *, /, JavaScript can interpret 5+3 without spaces.
    //** is a two-character operator. JavaScript's eval() sometimes struggles with parsing 5**3 directly without spaces.

    //Spaces aren't strictly required for single-character operators (+, -, *, /).
// Spaces are required for two-character operators like ** to avoid syntax issues.
// Using template literals with backticks (${}) automatically handles spacing correctly.
}

// eval() Function
// The eval() function in JavaScript evaluates a string as JavaScript code. In this case, it's used to evaluate mathematical expressions dynamically
// EX: 
// let x = 5;
// let y = 3;
// console.log(eval("x + y")); // 8
// console.log(eval("2 * 3")); // 6