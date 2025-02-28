// inheritance = allows a new class to inherit properties and methods
            //from an existing class (parent => child)
            //helps with code reusability

class Animal{
    alive=true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }

}


class Rabbit extends Animal{
    name="rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }

}

class Fish extends Animal{
    name = "fish"

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "hawk"

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}


const rabbit = new Rabbit();
const hawk = new Hawk();
const fish = new Fish();

console.log(rabbit.alive);
rabbit.alive=false;
console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();
fish.swim();
fish.run(); //fish class can run







