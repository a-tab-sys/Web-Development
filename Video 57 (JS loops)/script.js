console.log("tutorial on loops")
/*
let a=1;
console.log(a)
console.log(a+1)
console.log(a+2)

// type for and then select which one (for, forin, forof, foreach)and vs will give you a basic layout of how it should look

//for loop
for (let i=0; i<100; i++){
    console.log(a+i)

}

//forin loop - used to iterate through an object - "key in object" so you see key, and knw your dealing with object
let obj={
    name: "harry",
    role: "programmer",
    company: "codewithharry"
}

for (const key in obj){
    const element = obj[key];
    console.log(key, element)
    console.log(key)
    console.log(element)
}

// forof loop - used to iterate through strings - "iterator of object", so you see iterator, and know your dealing with arrays/strings
for (const element of "harry") {
    console.log(element)
}

for (const char of "harry") {
    console.log(char)
}


// while loop - will check condition before ever running
let i=0;
while (i<6) {
    console.log(i)
    i++
}
*/
// do while loop - will print once before cheking condition
let i=10
do {
    console.log(i)
    i++
} while (i<6);