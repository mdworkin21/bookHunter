const router = require('express').Router();

//API Routes 
router.use('/openLibrary', require('./openLibrary'))
router.use('/addBooks', require('./addBooks'))
router.use('/getLists', require('./getLists'))

//Handles 404 Errors
router.use((req, res, next) => {
  const err = new Error('Not Found.')
  err.status = 404; 
  next(err)
})

module.exports = router;