// this = reference to the object where this is used
//      (the object depends on the immediate context)
//      person.name=this.name

console.log(this)   //outside of an object, this referennces a window object

const person1 = {
    name: "Spongebob",
    favFood: "hamburgur",
    sayHello: function(){console.log(`Hi I am ${name}`)},
    sayHello1: function(){console.log(`Hi I am ${this.name}`)},
    sayHello2: function(){console.log(`Hi I am ${person1.name}`)}
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello1: () => {console.log(`I am ${this.name}`)},        //note that the tis key word does not work with arrow fuctions, with arow function this still referes to the window object. the window object does not have .name property so it appears blank
}

//inside of this object of person1, if i want to access any property, you need to precees it with this.<property name>
//this is being used within the context of person1.
//this.name is the same thing as saying person1.name 

person1.sayHello();
person1.sayHello1();
person1.sayHello2();

person2.sayHello1();














