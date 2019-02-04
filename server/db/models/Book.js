const db = require('../database')
const Sequelize = require('sequelize')


const Book = db.define('books', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
       notEmpty: true
    }
  },
  author: {
    type: Sequelize.STRING
  },
  publishYear: {
    type: Sequelize.INTEGER
  },
  isbn: {
    type: Sequelize.STRING
  },
  edition: {
    type: Sequelize.STRING
  },
  cover_i: {
    type: Sequelize.INTEGER
  }
})

module.exports = Book