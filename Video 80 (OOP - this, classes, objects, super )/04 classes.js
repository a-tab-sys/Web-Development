// class = proveides a more structres and claner way to work    with objects compared to traditional constructor functions ex.static keyword, encapsulation, inheritance

class Product{

    //use the consructor eyword within our class
    constructor(name, price){
        this.name=name;     //name of Product.name=name in parameter
        this.price=price;
    }

    //inside of a class, dont use the function keyword when creating a function
    displayProduct(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price.toFixed(2)}`)  //for 2 dec places
    }

    calculateTotal(salesTax){
        return this.price+(this.price * salesTax);

    }

}


const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 19.50);


product1.displayProduct();
product2.displayProduct();

const salesTax=0.05;
const total = product1.calculateTotal(salesTax)
console.log(`Total price with tax: $${total.toFixed(2)}`)


