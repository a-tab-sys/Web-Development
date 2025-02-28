// object - collection of related properties and/or methods
        //properties are things that an object has(name, age, isEmployed). Methods are functions that belong to an object (sayHell, sayBye), what the object can do.
        //Can repersent real world objects (peopl, products, places)
        //object = {key:value, function()}

const person1 ={
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},     //we used function expression here
    sayBye: () => console.log("Bye! good day!")    //we used arrow function here. () would hold any parameters

}
const person2 ={
    firstName: "Patrick",
    lastName: "Star",
    age: 36,
    isEmployed: false,
    sayHello: function(){console.log("Hey, I am Patrick...!")},

}

console.log(person1)
console.log(person1.lastName)
person1.sayHello()
person1.sayBye()

console.log(person2)
console.log(person2.age)
person2.sayHello()

















//static methods
//getter and setter
//insanceof
