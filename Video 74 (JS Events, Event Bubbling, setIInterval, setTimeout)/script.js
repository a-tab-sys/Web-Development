let button = document.getElementById("btn")

// first <the event you are listeneing for>, <the function that will run upon the event occuring. event can be any many things, click, double click, when the mouse is removed from an eleent 
// button.addEventListener("click", ()=>{
//     alert("you were clicked, yayy!")
//     document.querySelector(".box").innerHTML = "<b>yayyy i was clicked</b>"
// })

//event here is right click anywhere
document.addEventListener("contextmenu", ()=>{
    alert("dont inspect us by right click please")
})

//event here is pressing any key. it will print to console what is pressed. by passing in the e you are creating an event object that you are then printing to console
document.addEventListener("keydown", (e)=>{
    console.log(e)      //can print the keyboard event
    console.log(e, e.key, e.keyCode)       //can print the object, key, and the keycode
})

//if you added to the button it will not work until the button has been clicked
button.addEventListener("keydown", (e)=>{
    console.log(e)
})

//google browser events js mdn to see comprehensive list of options

// the way you add event listener, you can also remove event listener