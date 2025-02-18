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

//HIDDEN ELEMENTS
console.log("hidden element")

//check if the element is hidden
console.log(document.querySelector(".container").hidden)

let boxes = document.getElementsByClassName("box")
console.log(boxes[1].hidden)
console.log(boxes[2].hidden)

//tohide some element
document.querySelector(".container").hidden=true //adds hidden attribut into your container. inspect> element ans open containser-->you will see hidden attribute written there
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






// continue at 9.5 minutes





