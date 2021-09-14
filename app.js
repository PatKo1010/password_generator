// set moddules 
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

const generatePassword = require ('./generate_password')

//set template engine 

app.engine('handlebars', exphbs({defaultLayout: 'main' }))
app.set ('view engine','handlebars')

//use body parser 

app.use ( express. urlencoded ({extended: true}))

//set route  
app.get ('/', (req, res) => {
  res.render ('index')
})

app.post ('/', (req,res) => {
  const password = generatePassword(req.body)
  res.render ('index', {password: password})
})

app.listen (port, () => {
  console.log (`The Express Server will be running on http//locolhost:${port}`)
})