const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const app = express()
const PORT = 8080

//MiddleWare
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Static Files
app.use(express.static(path.join('client/public')))



//Handles 500 Errs
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Err. Whoops!')
})

//Listens for connections on host and port
app.listen(PORT, () => {
  console.log('Server Live on Port: ', PORT)
})