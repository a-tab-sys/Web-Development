let obj= {
    a:1,
    b:"harry"
}
console.log(obj);


//Example with objects/prototypes

let animal = {
    eats:true
};
let rabbit={
    jumps:true
};

//prototype esscetially lets you add more proerties to your existing object
//now rabbit has eat and jump rpoperties
rabbit.__proto__ = animal;//sets rabbit.[[Prototype]] = animal

//Example with classes

class Animal{
    constructor(name){
        this.name=name  //creating a name property
        console.log("Object is created");
    }

    eats(){
        console.log("kha raha hoon")
    }

    jumps(){
        console.log("kood raha hoon")
    }

}

class Lion extends Animal{
    //building on previous constructor
    constructor(name){
        super(name)
        console.log("Object is created and he is a lion...");
    }

    //method overriding
    eats(){
        console.log("kha raha hoon roarrr")
    }

}

let a = new Animal("bunny");
console.log(a)

let l = new Lion("Simba")
console.log(l)


//static methods
//getter and setter
//insanceof
