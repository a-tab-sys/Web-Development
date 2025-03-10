//code from https://expressjs.com/en/guide/routing.html
//remove middleware section - we will learn that later

const express = require('express')
const router = express.Router()

// define the home page route
//now btw if you go to /blog, this handler will handle it, this is what i defined in my main in this line app.use('/blog', blog)
router.get('/', (req, res) => {
  res.send('blog home page')
})

// define the about route
//now btw if you go to /blog/about, this handler will handle it
router.get('/about', (req, res) => {
  res.send('About blog')
})
// define the blog post route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch blog post for ${req.params.slug}`)
})

module.exports = router