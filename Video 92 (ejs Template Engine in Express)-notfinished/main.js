const express = require('express')
const app = express()
const port = 3000

//went on bootstrap website > went on docs > took the code from "Include Bootstrap’s CSS and JS" code.

//made a folder called templates, made a file called index.html inside. pasted our bootstrap code in there.

//the benifit of bootstrap is it gives you code for alot of components, like navbar, button, badge alot of stuff. so you can copy their code and use it.
// https://expressjs.com/en/starter/hello-world.html
// https://getbootstrap.com/docs/5.3/components/navbar/

//we want to make it so that when / is requested, it routes to index.html, remember we learned that oyu have to specify a route

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search Now"
  res.sendFile("templates/index.html", {root:__dirname})
})

app.get('/bog/:slug', (req, res) => {
  let blogTitle = "Adidas why and when"
  let blogContent = "its a very good brand"
  // how can i put blogTitle and blogContent variales into my html template file?? we cant remake index.html and blogpost.html for each blog! thats too much. Insead we will use ejs template engine.

  // for starters do npm install ejs. this will add ejs into our nodemodules folder and package.json file too

  //go to ejs documentation. we are using ejs with express so do ctrl+f and go to the "Using EJS with Express". https://github.com/mde/ejs/wiki/Using-EJS-with-Express
  // https://github.com/mde/ejs/wiki/Using-EJS-with-Express


  res.sendFile("templates/index.html", {root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})