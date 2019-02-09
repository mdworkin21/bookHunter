const router = require('express').Router()
const Book = require('../db/models/Book')
const {Favorite, WillRead} = require('../db/models/index')


//Double posting bug might be because req.body returns a STRING not a number (so bel)...or not
router.post('/addbook', async (req, res, next) => {
  try{
    let newBook = await Book.findOrCreate({
      where: {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
        isbn: req.body.isbn,
        edition: req.body.edition,
        cover_i: req.body.cover_i
      }
    })
    res.status(201).send(newBook)
  } catch(err){
      next(err)
  }
})

router.post('/addToFavorites', async (req, res, next) => {
  try{
    console.log('BACK', typeof req.body.userId)
    let newBook = await Favorite.findOrCreate({where: {
      userId: req.body.userId,
      bookId: req.body.bookId
    }
  })
    res.status(201).send(newBook)
  } catch(err){
      next(err)
  }
})

router.post('/willRead', async (req, res, next) => {
  try{
    let newBook = await WillRead.findOrCreate({where: {
      userId: req.body.userId,
      bookId: req.body.bookId
    }
  })
    res.status(201).send(newBook)
  } catch(err){
      next(err)
  }
})

module.exports = router