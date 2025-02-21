//you will see this in console when open in browser
 
//INNER HTML METHOD
// lets you see all the inner html
console.log("inner html method")
console.log(document.querySelector(".container").innerHTML) 
console.log(document.querySelector(".box").innerHTML)   //query selector selects first element with class box

//lets you change inner html
console.log(document.querySelector(".box").innerHTML="Hey I am harry")  

//INNER TEXT METHOD - shows all inner text in element
console.log("inner text method")
console.log(document.querySelector(".container").innerText)   
console.log(document.querySelector(".box").innerText)   

//OUTER HTML - includes the inner html as well as the element itself
console.log("outer html method")
console.log(document.querySelector(".container").outerHTML) 
console.log(document.querySelector(".box").outerHTML)   

//TAG NAME OR NODE NAME - it will tell you what the tag for an element is, ex: div
//difference between nodeName and tagName: tag name is only applicable for elements. node is applicable for all types of nodes including comment node and text nodes
console.log("tag name or node name")
console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").nodeName)

//TEXT CONTENT - provides access to the text inside an element
console.log("text content")
console.log(document.querySelector(".container").textContent)

//HIDDEN ELEMENTS - SEE HTML TO SEE HOW TO MAKE SOMETHING HIDDEN
console.log("hidden element")

//check if the element is hidden
console.log(document.querySelector(".container").hidden)

let boxes = document.getElementsByClassName("box")
console.log(boxes[1].hidden)
console.log(boxes[2].hidden)

//tohide some element
// document.querySelector(".container").hidden=true //adds hidden attribut into your container. inspect> element ans open containser-->you will see hidden attribute written there
console.log(document.querySelector(".container").hidden)

//-------ATTRIBUTE METHODS----------------
//HAS ATTRIBUTE
console.log("has attribute")
console.log(document.querySelector(".container").hasAttribute("style"))
console.log(document.querySelector(".box").hasAttribute("style"))

//GET ATTRIBUTE - will show you the attribute (in this case its showing what was style set to for the first box)
console.log("get attribute")
console.log(document.querySelector(".box").getAttribute("style"))

//SET ATTRIBUTE - will show you the attribute (in this case its showing what was style set to for the first box)
console.log("set attribute")
document.querySelector(".box").setAttribute("style", "display: inline")
console.log(document.querySelector(".box").getAttribute("style"))

//SHOW ALL ELEMENTS OF AN ATTRIBUTE
console.log(document.querySelector(".box").attributes)

//  REMOVE ATTRIBUTE
// here we removed style - comment/uncomment this to see it show and dissapear in inpect> elements
// console.log(document.querySelector(".box").removeAttribute("style"))

// if you go on any online website> go to inspect> console> type: document.designMode="on" > now you can edit anything on the website>the text an everything.

// DATA ATRRITUBUTE - LETS YOU STORE ANY INFORMATION IN AN ELEMENT, FOR EXAMPLE WE ARE STORING WHO MADE THIS ELEMENT. you can store anything and change the createdby to something else. SEE IN HTML
//TO VIEW IT
console.log(document.querySelector(".box").dataset)


//INSERTION METHODS FOR NODES
let div = document.createElement("div");  //create a div
div.innerHTML = "i have been inserted <b> by ammaarah </b>"
div.setAttribute("class", "created");   //add attribute into the div
document.querySelector(".container").append(div);        //insert it in the first element with class container

//if youre getting data from somewhere and want it in your DOM without reloading the page its very useful

//INSERT ADJACENT HTML / TEXT / ELEMENT
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend","<b> i am under the water, please help me </b>" )

//NODE REMOVAL
document.querySelector(".box").remove()

//CLASS NAME AND CLASS LIST - will give you the classes associated to any class list or class name
console.log (document.querySelector(".container").classList)        //display list of classes
console.log (document.querySelector(".container").className)        //display names of classes

document.querySelector(".container").classList.add("harry") //add classes
document.querySelector(".container").classList.remove("bg-green")    //remove classes

console.log (document.querySelector(".container").classList)

//remove or add classes by toggling. toggle means if its on, turn it off. if its off, turn it on. you get output like true, flase, true, false .... if you had something like an animation saved in a class you could toggle it on and off throughout your program so pick when that animation plays
console.log(document.querySelector(".container").classList.toggle("red"))
console.log(document.querySelector(".container").classList.toggle("red"))
console.log(document.querySelector(".container").classList.toggle("red"))

