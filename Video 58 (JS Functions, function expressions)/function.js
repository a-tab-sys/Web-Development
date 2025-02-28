//FUNCTION

function nice(name) {
    console.log("hello " + name + " you are nice")
    console.log("hello " + name + " you are good")
    console.log("hello " + name + "your tshirt is great")
}


function sum(a, b, c = 3) {
    // console.log(a+b)
    return a + b + c
}

nice("Harry")

nice("Rohan")

sum(3, 5)

//to save in result, functon needed to have a retrn statement, or else js would not know what to save in result
result1 = sum(3, 5)
result2 = sum(5)
result3 = sum(2, 7, 1)

console.log("the sum is: ", result1)

//get NaN - not a number bc you didnt give enough args
console.log("the sum is: ", result2)

//you can overwrite the original c value, its optional
console.log("the sum is: ", result3)

//Arrow function - a concise way to wite function expressions
//   good for simple functions that you use only once
//   (parameter) => some code

//using a standard function expression
const hello = function hello(){
    console.log("hello");

}

//using an arrow function
const hello2 = () => console.log("hello")

//using an arrow function with a parameter
const hello3 = (name) => console.log(`hello ${name}`)

//using an arrow function with multiple parameter
const hello4 = (name, age) => {console.log(`hello ${name}`)
                            console.log(`you are ${age} years old`)}

hello();
hello2();
hello3("bro");
hello4("bro", 32);


//Arrow function - you can put a function in a variable (lets you pass a function in another function)
const func1=(x)=>{
    console.log("i am an arrow function", x)
}

func1(34)
func1(66)

