const Sequelize = require('sequelize')
const db = require('../database')
const User = require('./User')
const Book = require('./Book')

//Define your associations here

User.belongsToMany(Book,  {as: 'Reader', through: 'favorites'})
Book.belongsToMany(User, {as: 'book', through: 'favorites'})

User.belongsToMany(Book,  {through: 'willRead'})
Book.belongsToMany(User, {through: 'willRead'})

//export models
module.exports = {
  db,
  User
}