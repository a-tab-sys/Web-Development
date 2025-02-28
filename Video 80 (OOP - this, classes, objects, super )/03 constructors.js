// constructor - special method for defining the properties and methods of objects

function Car(make, model, year, color){
    this.make=make,   //saying Car.make= make passed in parameter
    this.model=model,
    this.year=year,
    this.color=color
    this.drive = function (){ console.log(`you drive the ${this.model}`)
    }

}

//use the constructor above by creating an instance of car object
const car1 = new Car ("Ford", "Mustang", 2024, "red");
const car2 = new Car ("Hyundai", "Elantra", 2019, "white");

console.log(car1);
console.log(car1.make);
console.log(car1.model);
car1.drive()

console.log(car2);
console.log(car2.make);
console.log(car2.model);
car2.drive()
