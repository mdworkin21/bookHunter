const Sequelize = require('sequelize')
const db = require('../database')
const User = require('./User')
//Define your associations here


//export models
module.exports = {
  db,
  User
}