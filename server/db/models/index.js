const Sequelize = require('sequelize')
const db = require('../database')
const User = require('./User')
const Book = require('./Book')
const Favorite = db.define('favorites')
const WillRead = db.define('willReads')
//Define your associations here

User.belongsToMany(Book,  {as: 'Reader', through: 'favorites'})
Book.belongsToMany(User, {as: 'Reader', through: 'favorites'})

User.belongsToMany(Book,  {through: 'willReads'})
Book.belongsToMany(User, {through: 'willReads'})

//export models
module.exports = {
  db,
  User, 
  Book,
  Favorite,
  WillRead
}