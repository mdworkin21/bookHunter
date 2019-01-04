const db = require('../database')
const Sequelize = require('sequelize');

//User Model
const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = User