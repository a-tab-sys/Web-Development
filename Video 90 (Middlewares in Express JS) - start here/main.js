const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")

// middleware modifies your request. below when we have (req, res), this is our request and response object. for instance we have a request for / or /about or /contact and we res.send our response. middleware takes the request it recieves and modifies it.

//app.use is middle ware
//this line is a middleware
app.use(express.static("public"))
// to access the txt file we made
//http://localhost:3000/harry.txt


//you can evern create you own middlware by creating a 
// functiond and putting it in app.use.
//it takes request, response and next. next refers to the nexr midleware

//note that at http://localhost:3000/, Hello WOrld! prints. but in our console m1 and m2 print. this shows us that before our request was sent middleware 1 and 2 ran. the next function in the middleware lets the middle ware go to middleware 2 after middle  are 1. when i remove the next() in middleware 1, only m1 prints to console, the program gets stuck there.

//so basicaly the control of request goest to the middlewares first and you need the next() to give control from 1 middlewae to another. then control of request goes to our route handlers

//so why would we even need middleware? imgine we wanted to make middleware 1 a logger for our application so we know when requests are eing made (in that we will console.log the current date/time). to this lets also get info on request method and save in file. ou coud even print all the request headers to console. or you could make  req.harry and use that as part of a request, lets use in in our /about route handler.

//KEEP IN MIND: if you modify request in both middlewares, or in many places, keep in mind the order, because the last modification is what will stay because it ran after. just like rgular js code ordering.

//middleware 1
app.use((req, res, next) => {
    // res.send("hacked by middle ware 1") //if you added thi line, the response is sent for the request. so control of request  will not continue to the other middle wares or route handlers. if you added soething like this, it doesnt make sense to have next(), an if you do your console gives an error. If you do really want the response to be sent here, remove next()
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log('m1')
    console.log(`${Date.now()} is a ${req.method}`)

    console.log(req.headers)
    req.harry="I am harry bhai";
    next()

})

//middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.harry="i am rohan bhai";
    next()
})




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!' + req.harry)
  //test with link:
  //http://localhost:3000/about
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



//BTW IF YOU MADE A BLOG USING ROUTING, OR SMTH LIKE THAT
// SO YOU MADE LIKE A BLOG.JS PAGE
//CAN YOU HAVE MIDDLE WARE THAT WORKS SPCIFICLL FOR THE BLOG, OR THE SPECIFICALLY FOR THE MAIN OR WORKS FOR BOTH OR ALL FILES??? FIGURE OUT
//this above question relates to router level middleware, look into router level mddleware on express.js site



//5 types of middleware - read more on express.js site
// 1. application level middleware- what we creae using app.use
//2. router level middleware - works on a specific route
//3. error handling middleware - IMPORTANT
//4. build in middlewares, like express.static, and express.json
//5. third party middle ware - importing prewritten middleware into your program