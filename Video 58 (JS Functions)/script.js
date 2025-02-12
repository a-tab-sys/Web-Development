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


//Arrow function - you can put a function in a variable (lets you pass a function in another function)
const func1=(x)=>{
    console.log("i am an arrow function", x)
}

func1(34)
func1(66)