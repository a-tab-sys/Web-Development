const express = require('express')
const app = express()
const port = 3000

const blog = require('./routes/blog')    //for express router example
const shop = require('./routes/shop')    //for express router example

//HANDLING POST AND OTHER REQUESTS-----------------------

//when you write anythig in browser like google.com or http://localhost:3000/, that is a get request-they are the url, or appear in the url. sometimes we need to send sensitive information like passwords. ex. im logging into facebook and i need to provide email and password, these will go into the server and then i will e able to log in. we cant send sensitive information from the url using quesries like
//http://localhost:3000/blog/intro-to-atab?user-name=atabsys&password=password1
//because it will appear in our server logs
//get requests also have a length limit so you dont want to send too much info through the url. get request is for short info quieries. if you want to send sensitive information or files or just larger amounts of content to the server, yu can use post request.

//needed to execute post request, also created public folder, and within reated html page to test post request functionality. to see it working open the html (http://localhost:3000/mypage.html), inspect and in condsole you will see "Hello World post!". that is our response.
//you will now also see "hey its a post request" in terminal
//we created the html page to test post request we made on the / endpoint, we passed it and displayed data

//This is a very lengthy process just to test a post request, is there an easier way?
// to test these api's in an easier way we can install and use Postman. You can export your collections on postman. testing apis is very easy. open the desktop app you have installed.
app.use(express.static("public"))


//const blog = require('./routes/blog') this taken from above iis handling /blog endpoints
app.use('/blog', blog)   //for express router example
app.use('/shop', shop)   //for express router example


app.get('/', (req, res) => {
  console.log("hey its a get request")
  res.send('Hello World22!')
})
//post request
app.post('/', (req, res) => {
  console.log("hey its a post request")
  res.send('Hello World post!')
})
//put request - is used to uppdate
app.put('/', (req, res) => {
  console.log("hey its a put request")
  res.send('Hello World put!')
})
//delete request - done the same way

//SERVING HTML FILES-------------------------
//to serve html, make a folder called templates
//to see if its working, view this page:
//http://localhost:3000/index 

app.get("/index", (req, res) => {
  console.log("hey its index")
  // res.send('Hello World index!') //to serve text
  res.sendFile('templates/index.html', { root: __dirname })  //to serve a proper html page. have to give absolute address or specity the root.
})


//Serve json
//view here:
// http://localhost:3000/api
app.get("/api", (req, res) => {
  console.log("hey its json")
  // res.send('Hello World json!') //to serve text
  res.json({ a: 1, b: 2, c: 3, d: 4, "name":["harry", "jerry"] })  //to serve a json 
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//EXPRESS ROUTER - helps organize routes
//WHEN WE PUT ALL OUT ENDPOINTS IN ONE FILE, IT CAN GET VERY CLUTTERED
//say we had a website, and we wanted to add a blog to it,
// because we want to create a blog we will have to make a /blog endpoint, /blob/blogpost endpoint, /blog/about endpoint and so on...this makes our file very cluttered
//so lets use routes
//lets create a folder called routes
//check documentation, it gives you all the code you need: https://expressjs.com/en/guide/routing.html

//test the blog you set up here;
//http://localhost:3000/blog
//http://localhost:3000/shop
// http://localhost:3000/blog/blogpost/test-blog

// NOW ALL THE ENPOINTS BEGINNING IN /BLOG  ARE ALL HANDLED IN FILE BLOG.JS.
//THIS LETS UP SEPERATE FILES FOR ORGANIZATIONAL PURPOSES
//IMAGE I HAVE BLOG, MAYBE I HAVE A SHOP ON MY SITE AS WEL

