const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const app = express()


//MiddleWare
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Static Middleware
app.use(express.static(path.join(__dirname, '..', '/client/public')))

//Api Routes

//Static HTML For When No API Route Matches 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/client/public/bundle.js'))
})

//Handles 500 Errs
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Err. Whoops!')
})


module.exports = app