console.log("Hello World")
console.log(document.body)  



//BELOW WAS DONE IN INSPECT > CONSOLE


//document.body is going into the page's html body tag
//document.head is goinf into the page's  html head tag
//document.documentElement is going into the page's html tag

// SEE CHILD NODES
document.body.childNodes
// in console when you type document.body.childNodes it will tell you the chldren of body. output--> NodeList(5) [text, div.container, text, script, text]. text is that space btwn the body tag and the div tag,like that indented room is considered text.

document.body.childNodes[0]
//lets you select which child node exactly 
document.body.childNodes[1]

//want to see containser childnodes. output--> NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
document.body.childNodes[1].childNodes


//FIRST CHILD AND LAST CHILD
let cont = document.body.childNodes[1]

cont.firstChild     //its will be a text node
cont.lastChild          //it will be a text node


// HOW CAN WE IGNORE THE TEXT NODES
//text node is a child but now we are asking for the first child thats also an element
cont.firstElementChild
cont.lastElementChild
cont.lastElementChild.style.color="red";
cont.lastElementChild.style.backgroundColor="green";

//see the parent node
cont.lastElementChild.parentElement

document.body.firstElementChild.childNodes      //you will see all child nodes, including comments and text nodes

document.body.firstElementChild.children  //you will see only the child nodes that are html elements

document.body.firstElementChild.children[0]
document.body.firstElementChild.children[1]
document.body.firstElementChild.children[2]


//SEE SIBLINGS
document.body.firstElementChild.children[3].nextElementSibling      //children[3] is box4. the next sibling of box 4 will be box 5
document.body.firstElementChild.children[3].previousElementSibling     //children[3] is box4. the previous sibling of box 4 will be box 3
document.body.firstElementChild.children[3].previousSibling   //children[3] is box4. because you removed element, the previous sibling of box 4 will be text



//TARGET THE TABLE IN YOUR HTML
document.body.children
document.body.children[1]
document.body.children[1].rows ///see table rows
document.body.children[1].columns 






