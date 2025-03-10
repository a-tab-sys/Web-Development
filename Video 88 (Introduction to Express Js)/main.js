const express = require('express')      //import express package
const app = express()   //define an app
const port = 3000       //specify a port

//i make a file called hello.txt, i ant this file to be public
//to acccess it i write http://localhost:3000/hello.txt, i get this error: Cannot GET /tello.txt. OBVIOUSLY YES, we should not be able to get hello.txt because if express allowed that all my files would be accessable to the public. IF YOU DO WANT TO MAKE CERTAIN FILES PUBLIC YOU CAN. create a folder, convention to call it public, and the following line of code allows anything in that folder to be accessable to the public


app.use(express.static('public'))
//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express






//-------------------
//app.get takes 2 arguments: (path, handler).  app.get is saying that whenever the path: / gets a request, start the handler - which is a function: (req, res){ res.send('Hello World!')})

//app.get or app.post or app.put or app.delete
//a get request is what we enter in the browser, ex. http://localhost:3000/. 

app.get('/', (req, res) => {        
  res.send('Hello World!')
})

//imagine im making a blog with multiple pages, about, contact, blog, some blog within the blog page. We are making end-points. THIS WORKS BUT it is not a very effectent way, youll have to write so much of this repetitive code, and its very difficult to manage later. 

app.get('/about', (req, res) => {        
    res.send('Hello about us!')
  })

app.get('/contact', (req, res) => {        
res.send('Hello contact!')
})

app.get('/blog', (req, res) => {        
    res.send('Hello blog!')
    })

app.get('/blog/intro-to-js', (req, res) => {      
    res.send('Hello intro-to-js!')
    })

app.get('/blog/intro-to-python', (req, res) => {      
    res.send('Hello intro-to-python!')
    })


// INSTEAD of the above we can REQUEST PARAMETERS
//slug lets s treat the url names as variables
//params is in your url as a variable

app.get('/blog/:slug', (req, res) => {      
    res.send(`hello ${req.params.slug}`)
    console.log(req)    //display our requesst object
    console.log(req.query)  //will output: query: { mode: 'dark', region: 'in' }
    console.log(req.params) // will output: params: { slug: 'intro-to-atab' }
    })
// with this now we can type any path, and well get a page made:
// http://localhost:3000/blog/intro-to-AMMAARAH
// http://localhost:3000/blog/very-cool
// http://localhost:3000/blog/very-super-duper-cool

//i can type:
// http://localhost:3000/blog/intro-to-atab?mode=dark&region=in
//i added this to the url: ?mode=dark&region=in, these are queries 
//now, because i console.log(req), i will see this when i put in the url and check my terminal
// params: { slug: 'intro-to-atab' },
// query: { mode: 'dark', region: 'in' },

//ex. If you get a random url off of google. after the ? are your queries, your params are the vairbles you defined
//https://www.google.com/search?q=hey&oq=hey&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIKCAEQABixAxiABDIQCAIQABiDARixAxiABBiKBTINCAMQLhivARjHARiABDIKCAQQABixAxiABDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPNIBCDEwMjlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8


app.get('/blog/:slug/:second', (req, res) => {      
    res.send(`hello ${req.params.slug} and ${req.params.second}`)
    })
//ex you can make multiple parameters
//http://localhost:3000/blog/intro-to-atab/introt




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})