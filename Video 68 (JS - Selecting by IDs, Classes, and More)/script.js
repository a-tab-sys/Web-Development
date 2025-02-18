console.log("Harry")
//NOTE THAT WE ARE ADDING IN LINE CSS WHEN DOING CSS CHANGES THROUGH JS

//TARGET ELEMENT BY CLASSS NAME AND INDEX
let boxes = document.getElementsByClassName("box")
console.log(boxes);              //now when you run html>inspect>console>ou will see the 5 boxs and notive that they are numbered

//to target the 3rd bo, at index 2 in the numbering
boxes[1].style.backgroundColor="red";

//TARGET ELEMENT BY ID - now even if you add more boxes, that same element is targetted, rather if you had done by class name and index, adding and removing elements would change what box you are targeting
document.getElementById("bluebox").style.backgroundColor="blue";


//DOM navigation properties are usefule when elements are close to each other like parent, sibling, child, next sibling from video 67. but if they are not close to each other we have other methods


//QUERY SELECTOR - to target first element of a class
//returns one element
//will select the first box of the items asscociated with the class box
//note you are writing .box here, a css selector. above we just use box
document.querySelector(".box").style.backgroundColor="green";


//QUERY SELECTOR ALL - to target all elements of a class
//return multiple elements as a node list - you need to iterate through to target the individual eleemnts within
// this hovever returns all elements with class box as an nodelist so you cant just do .style.backgroundColor="green"; because that doesnt mean anything for a node list. ex if you did .style for an array or a string, it doesnt make sence. you can however .style for an element. 
// document.querySelectorAll(".box").style.backgroundColor="green";

//the node list will give you a list of nodes, so you have to loop through each node to change each nodes properties one at a time. look at your console. because of the below statement you can see your node list.
console.log(document.querySelectorAll(".box"))
//loop with for each loop
document.querySelectorAll(".box").forEach(e=>{
    // console.log(e)      //will print all the nodes to console
    e.style.backgroundColor = "tan"
})


//GET ELEMENTS BY TAG NAME
//this will add another html collection to our console that includes all the divs. remember it is acc only showing in console because of console.log. but it you types this directly into console, obviosl there is no need for console.log
console.log(document.getElementsByTagName("div"))


//GET ELEMENTS BY NAME - searches by name attribute

//3 METHODS: MATCHES, CLOSEST AND CONTAINS
//MACHES
//If you use element.matches and give it css it will check if your element matches that css selector. meaning that if you taget that element with a particular css selector will it acctually be targetted?
e=document.getElementsByTagName("div")
// console.log(e)
console.log(e[4].matches("#bluebox"))
console.log(e[5].matches("#bluebox"))

//CLOSEST - look more into this=> only checks parents? not siblings?
//look for nearest ancestor that matches a css selector
console.log(e[5].closest("#bluebox"))
console.log(e[5].closest(".container"))

//CONTAINS 
//returns true if element b is inside element a
console.log(document.querySelector(".container").contains(e[2])) //it containse e2? yes
console.log(document.querySelector(".container").contains(e[0])) //does it contain itself? yea
console.log(document.querySelector(".container").contains(document.querySelector("body"))) //does it contain body? no
console.log(document.querySelector("body").contains(document.querySelector(".container"))) //does body contain container? yes





