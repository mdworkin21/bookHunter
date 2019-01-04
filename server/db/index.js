const db = require('./database')

const User = require('./models/User')
const Sequelize = require('sequelize')

//Define your associations here



module.exports = {
  db,
  User
}