// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from the class. 

//Class owns anything static, not the object

//EXAMPLE 1
class MathUtil{
    static PI = 3.14159;
    PO=7.9;

    static getDiameter(radius){
        return radius*2;
    }
    static getCircumferance(radius){
        return radius*2*this.PI;
    }

}

//does not work. if PI wasnt a static method, to access it i would have to cete an object first
const MathUtil1 = new MathUtil();
console.log(MathUtil1.PI)

//works. because PO is not static
const MathUtil2 = new MathUtil();
console.log(MathUtil2.PO)

//works. since PI is a static method, i can access it throught the class name
console.log(MathUtil.PI)

//does not work. because PO is not static
console.log(MathUtil.PO)


console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumferance(10));



//EXAMPLE 2
class User{
    static userCount = 0;

    constructor(username){
        this.username=username;
        //you can write more code in the constructor, its not only for assigning properties
        User.userCount++;

    }
    
    //reg method
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }

    //static method
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");

console.log(user1.userCount);   //user doesnt have this property, class does
console.log(User.userCount);

user1.sayHello();
User.getUserCount();













