//getter = special method that makes a property readable
//setter = special method that makes a propert writeable

//getter/setters allow you to validate and modify a value when reading/writing a property

//EXAMPLE 1

class Rectangle {
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    //we dont want people entering garbaeg values when we are expecting a pos int value for height and width.
    // getters and setters can help us with some validation of the values

    set width(newWidth){    //newWidth is acc what th user inputted. we will check it before storing in _width which is a private property convention
        if(newWidth > 0){
            this._width=newWidth;   //using an underscore prefix tells other developers that this is a private property that should not be touched. _width is different from width
        }
        else{
            console.error("Width must be a positive number")
        }
    }

    set height(newHeight){   
        if(newHeight > 0){
            this._height=newHeight;
        }
        else{
            console.error("Height must be a positive number")
        }
    }

    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height;
    }
    //with getters we can use the property accessor the dot ->. to access a property that doesnt really exist
    //area technically isnt a property as its not found within our constructor but we can access it as it it were a property
    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }

}

//with only setter, the values 22 has no issue but it still appears as undefined in console, thats because these properties are writable via setters but the are not readable, so we NEED getters

// const rectangle = new Rectangle (22, "pizza");  
// console.log(rectangle.width);
// console.log(rectangle.height);

// rectangle.height=-1000;
// rectangle.width=-"pizza";
// console.log(rectangle.width);
// console.log(rectangle.height);

// rectangle.height=1;
// rectangle.width=6;
// console.log(rectangle.width);
// console.log(rectangle.height);

// console.log(rectangle.area);


//EXAMPLE 2

class Person{

    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    //we need to validate the input before assigning properties: lets use setters
    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    } 
    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    } 
    set age(newAge){
        if(typeof newAge === "number" && newAge>= 0){
            this._age= newAge;
        }
        else{
            console.error("Age must be a non-negative number")
        }
    }

    //properties are writable via setters but the are not readable: lets use getters
    //by not readable, this means tha in console it says undefined when i conlosole.log the properties despite them being correct/no error inputs

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return this.firstName + " " + this._lastName;
    }
    //with getters we can use the property accessor the dot ->. to access a property that doesnt really exist
    get age(){
        return this._age;
    }
}

// const person = new Person(420, 69, "pizza");
const person = new Person("Spongebob", "Squarepants", 32);

console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName)

console.log(person.age)













