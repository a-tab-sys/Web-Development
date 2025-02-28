const { MockScope } = require("undici-types/mock-interceptor");

function sum (a, b,c){
    return a+b+c;
}
let arr = [1,4,6];

//one way
console.log(arr[0]+arr[1]+arr[2]);

//another way
console.log(sum(arr[0], arr[1], arr[2]));

//third way USING SPREAD ... is the spread operator
console.log(sum(...arr))


//variable scope 
//let and  const have block level scope {}
//var declared within js function become local to the function
//var declared outside a function becomes global


