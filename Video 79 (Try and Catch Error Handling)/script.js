let a= prompt("enter first number");
let b= prompt("enter second number");

let sumString=a+b;
console.log("the sum is", sumString);

//basically when i put a=34 and b=44, sum is printed as 3444 rather than 78. it doesnt add the 2 inputs it acctually apepnds them.
//a and b are strings when you add 2 strings, it appends them so we have to type cast a and b to integers first

//now what if my user enters the wrong type of input
//ex they enter a=fff, b=grr, then when you parseint these variables you get NaN, not a number. so thats the final output. we want to error handle. lets thro an error so our user knows what they can and cant do

//you will encounter 2 types of errors. first are the errors that you throw, second is the error that JS gives you and you need to handle those

// if (isNaN(a) || isNaN(b)){  //is a=NaN or b=NaN
//     throw SyntaxError("Sorry not allowed. Enter numerical values only")
// }

let sumInt=parseInt(a)+parseInt(b);
// try{
//     console.log("the sum is", sumInt*x); //x is not defined, so js gives me an error i need to handle it. i can use try, catch 
// } catch(error){
//     console.log("Error aa gaya bhai") // we dealt ith the error with a console.log statement. if we had thrown an error like done above, then the script would fully stop. it wont execute past the error. but sisnce we just threw a console stametnt, it will continue to execute the remaining script.
// }
// finally{
//     console.log("files are being closed and db connection is being closed")
// }


//you can also add an optional finally clause to clean up
//evern i no error is caught and the cript never executes inside catch{}, it will no matter what enter and execute finally{}. so whats the point of finally? why would i not just add the consol.log statment within it into the script not enclosed in anything bc either way they would run.
//its helpful in functions. so if we put the above into a function and added some return statement. recall that once something is returned the code after doesnt execute. ONLY because of the finally clause are we seeing the files are being closed message after the sum is calculated. if i remove finally clause is will not show that statemnt, it will stop after returning. sometimes we will want to return within try or with catch, finally lets our function do a little more even after returning

function main(){
    let x=1;
    try{
        console.log("the sum is", sumInt*x);
        return true
    } catch(error){
        console.log("Error aa gaya bhai") 
        return false
    }
    // finally{
        console.log("files are being closed and db connection is being closed")
    // }
}

let c=main()