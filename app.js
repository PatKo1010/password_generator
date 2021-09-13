// set moddules 
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

//set template engine 

app.engine('handlebars', exphbs({defaultLayout: 'main' }))
app.set ('view engine','handlebars')

//set route  
app.get ('/', (req, res) => {
  res.render ('index')
})

app.listen (port, () => {
  console.log (`The Express Server will be running on http//locolhost:${port}`)
})