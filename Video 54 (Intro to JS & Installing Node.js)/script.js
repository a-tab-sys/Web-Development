alert("Hello World")

// when you open in browser,click inspect, and go to console tab to see below message. this lets you see if your code is working throughout program helps with debugging to see where your site gets caught up or loses functionality
console.log("Hey i am console. code is running")

// saving to variable, and using a prompt
var a = prompt("enter your number")
console.log("your number is" + a)

// send a confirmation prompt and do something depending on recieved input
var isTrue = confirm("are you sure you want to close this page and blast your computer")
if (isTrue){
    console.log("computer is blasting")
}
else{
    console.log("computer is not blasting")
}


// you can change the title of your document
document.title = "hey , i am good"

// can change css elements in js. this is basically adding inline css
document.body.style.backgroundColor = "red"

