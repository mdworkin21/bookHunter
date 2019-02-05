const router = require('express').Router()
const Book = require('../db/models/Book')
const {Favorite, WillRead} = require('../db/models/index')

//This is non-optimal, Not dry, and does too many api calls. Try to use eager loading instead (same problem for both routes)

router.get('/favorites/:id', async (req, res, next) => {
  try{
    let favList = await Favorite.findAll({
      where: {
        userId: req.params.id
      }
    })
    let books = []
    let book;
    for (let i = 0; i < favList.length; i++){
      book = await Book.findOne({where: favList[i].dataValues.bookId })
      books.push(book)
    }
    res.status(200).send(books)
  }catch(err){
    next(err)
  }
})


router.get('/willRead/:id', async (req, res, next) => {
  try{
    let willReadList = await WillRead.findAll({
      where: {
        userId: req.params.id
      }
    })
    let books = []
    let book;
    for (let i = 0; i < willReadList.length; i++){
      book = await Book.findOne({where: willReadList[i].dataValues.bookId })
      books.push(book)
    }
    res.status(200).send(books)
  }catch(err){
    next(err)
  }
})

module.exports = router